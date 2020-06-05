import axios from "axios";

export default {
  //google a book
  googleBook: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  //Delete book by id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  //Get all books from database
  getBooks: function (){
    return axios.get("/api/books");
  },
  //Save book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //Get book with specific id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  }
  
 
};
