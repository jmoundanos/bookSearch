import React, { Component } from "react";
import API from "../utils/API";
import SavedBookResults from "../components/SavedBookResults"

class Saved extends Component {
    state = {
        savedBooks: [],
    }
// get all books from database when this component mounts
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.error(err));
          
    }
    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <SavedBookResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
            </div>
        )
    }
}

export default Saved;