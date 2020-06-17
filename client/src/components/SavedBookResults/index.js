import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";

const SavedBookResults = props => {
    return(
        <div className="card">
            {/* <div className="card-body player">
                <div className="article"> */}
                    <h3>Your Bookshelf</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} >
                                   
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
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBookBtn" id={savedbook.id} onClick={() => props.handleDeleteButton(savedbook.id)}>
                                        Delete Book From Bookshelf
                                    </button>
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer" >
                                        <button className="viewBookBtn">
                                            View Book Preview
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
        //     </div>
        // </div>
    )
}
export default SavedBookResults