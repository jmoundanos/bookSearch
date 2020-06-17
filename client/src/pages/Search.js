import React, { Component } from "react";
import API from "../utils/API";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults"


class Search extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to get value entered in the search form
    handleChange = event => {
        this.setState({ search: event.target.value })
    }

    //function for submit button
    handleFormSubmit = event => {
        event.preventDefault();
        //connect to google api
        API.googleBook(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items 
                    results = results.map(result => {
                        //store the new book information as an object
                        result = {
                            // key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    //set the state of the books array to the results from google api
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(console.log("book saved"))
            .catch(err => console.log(err))
    }
    render() {
        return (
           
                <div>
                 <Form
                    // search={this.state.search}
                    handleChange={this.handleChange}
                    handleFormSubmit={this.handleFormSubmit}
                 />
                <div className="container">
                    
                    <SearchResults books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </div>
             </div>
           
        )
    }


}

export default Search;

