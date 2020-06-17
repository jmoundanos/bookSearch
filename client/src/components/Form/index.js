import React from "react";
import "./style.css";

const Form = props =>{
  return (
    <div className="container">
        <form>
          <div className="form-group">
            <label className="searchLabel"><h2>Find books to add to your Bookshelf</h2></label>
            <input onChange={props.handleChange} 
              value={props.search} 
              type="text" 
              name="search" 
              className="form-control"
              placeholder="Book title"
              id="search"/>
          </div>
            <button onClick={props.handleFormSubmit} type="submit" className="searchBtn">Search</button>
        </form>
     </div>
  )
}


export default Form;