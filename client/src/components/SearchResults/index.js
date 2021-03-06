import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const SearchResults = props => {
    return(
        <div className="card">
            {props.books.map(book => {
                return (
                    <li className="searchList list-group-item" key={book.id}>
                        <Row className="SearchResult row"> 
                            <Col size="2" className="bookImage">
                                <img src={book.image} alt={book.title} />
                            </Col>
                            <Col size="1" className="emptyCol"/>
                            <Col size="9" className="bookInfo">
                                <Row>
                                    <h3 className="bookTitle">{book.title}</h3>
                                </Row>
                                <Row>
                                    <h4 className="bookAuthor">{book.authors}</h4>
                                </Row>
                                <Row>
                                    <p className="bookDescription">{book.description}</p>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="buttonDiv ">
                            <button className="saveBookBtn" id={book.id} onClick={(event) => props.handleSavedButton(event)}>Save Book</button>
                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <button className="viewBookBtn">View Book Preview</button>
                            </a>
                        </Row>
                    </li>
                );
            })}
        </div>
        
    )
}
export default SearchResults;