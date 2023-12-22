import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

class Home extends Component{
    render(){
        return(
            <>
            <Header/>
            <div className="HomeContainer">
                <h1 className="HomeHead">Book Store</h1>
                <p className="HomePara">A bookstore is a store that sells books,<br/> and where people can buy them. A used bookstore or second-hand <br/> bookshop sells and often buys used books. Some modern bookstore combine <br/> the books (including digital books) and coffee or CDs.</p>
                <Link to="/books">
                <button className="HomeButton">Explore More</button>
                </Link>
                
            </div>
            </>
        )
    }
}




export default Home