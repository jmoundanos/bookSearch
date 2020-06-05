import React from "react";
import "./style.css";

const Form = props =>{
  return (
    <div className="container">
        <form>
          <div className="form-group">
            <label className="searchLabel"><h2>Add books to your BookShelf</h2></label>
            <input onChange={props.handleChange} 
              value={props.search} 
              type="text" 
              name="search" 
              className="form-control"
              placeholder="Search for a book"
              id="search"/>
          </div>
            <button onClick={props.handleFormSubmit} className="searchBtn">Search</button>
        </form>
     </div>
  )
}

// class SearchForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }
//   handleSubmit(event){
//     event.preventDefault();
//     console.log("Book name: " + this.state.value);
//   }
//   render(){
//     return(
//       <div className="container">
//         <form>
//           <div className="form-group">
//             <label htmlFor="search"><h2>Add books to your BookShelf</h2></label>
//             <input onChange={this.handleChange} value={this.state.value} 
//               type="text" name="search" className="form-control"
//               placeholder="Search for a book" id="search"/>
//               <button onClick={props.handleFormSubmit} className="searchBtn">Search</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
// function Form(props){
// return (
//   <div className="container">
//   <form>
//     <div className="form-group">
//       <label htmlFor="search"><h2>Add books to your Bookshelf</h2></label>
//       <input
//         onChange={props.handleInputChange}
//         value={props.search}
//         name="search"
//         type="text"
//         className="form-control"
//         placeholder="Search for a book"
//         id="search"
//       />
//       <button onClick={props.handleFormSubmit} className="searchBtn">
//         Search
//         </button>
//     </div>
//   </form>
//   </div>
// );
// }

export default Form;