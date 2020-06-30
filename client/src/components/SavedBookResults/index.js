import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";

const SavedBookResults = props => {
    return(
        <div className="card">
            <h3>Saved Books</h3>
                {props.savedBooks.map(savedbook => {
                    return (
                        <li className="saved-list list-group-item" key={savedbook._id}>
                            <Row className="SearchResult">
                                <Col size="2" className="bookImage">
                                    <img src={savedbook.image} alt={savedbook.title} />
                                </Col>
                                <Col size="1" className="emptyCol"/>
                                <Col size="9" className="bookInfo">
                                    <Row>
                                        <h2 className="bookTitle">{savedbook.title}</h2>
                                    </Row>
                                    <Row>
                                        <h3 className="bookAuthor">{savedbook.authors}</h3>
                                    </Row>
                                    <Row>
                                        <p className="bookDescription">{savedbook.description}</p>
                                    </Row>
                                </Col>
                            </Row>
                                
                            <Row className="buttonDiv ">
                                <button className="deleteBookBtn" onClick={() => props.handleDeleteButton(savedbook._id)}>Delete Book From Bookshelf</button>
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer" >
                                        <button className="viewBookBtn">View Book Preview</button>
                                    </a>
                            </Row>
                        </li>
                    );
                })}
        </div>
    )
}
export default SavedBookResults