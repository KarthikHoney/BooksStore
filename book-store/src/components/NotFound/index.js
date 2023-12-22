import { Component } from "react";
import "./index.css"
class NotFound extends Component{
    render(){
        return(
            <div className="notFoundContainer">
                    <div className="notFound-wordings">
                        <h1 className="notFound_head">404 Error!</h1>
                        <p className="notFound-para">Sorry,The page not found</p>
                    </div>
                    <div className="notFoundImage">
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/83/71/broken-robot-page-not-found-error-404-breaking-vector-35038371.jpg" alt="Robo" className="robo-pic"/>
                    </div>

            </div>
        )
    }
}
export default NotFound