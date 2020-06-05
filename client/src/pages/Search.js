import React, { Component } from "react";
import API from "../utils/API";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults"


class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.googleBook(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
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

export default SearchBooks

// class Search extends React.Component {
//     state = {
//         value: "",
//         books: []
//     };

//     componentDidMount() {
//         this.searchBook();
//     }

//     makeBook = bookData => {
//         return {
//             _id: bookData.id,
//             title: bookData.volumeInfo.title,
//             authors: bookData.volumeInfo.authors,
//             description: bookData.volumeInfo.description,
//             image: bookData.volumeInfo.imageLinks.thumbnail,
//             link: bookData.volumeInfo.previewLink
//         }
//         console.log(bookData);
//     }


//     searchBook = query => {
//         API.getBook(query)
//             .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
//             .catch(err => console.error(err));
//     };

//     handleInputChange = event => {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         this.searchBook(this.state.search);
//     };

//     render() {
//         return (
//             <div>
//                 <Form
//                     search={this.state.search}
//                     handleInputChange={this.handleInputChange}
//                     handleFormSubmit={this.handleFormSubmit}
//                 />
//                 <div className="container">
//                     <h2></h2>
//                     {/* <Results books={this.state.books} /> */}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Search;