import { Component } from "react";
import {Link} from "react-router-dom"
import { IoIosContact } from "react-icons/io";
import { FaRegHeart,FaShopify } from "react-icons/fa";
import './index.css';
class Header extends Component{
    render(){
        return(
            <div className="HeaderContainer">
                <div className="LogoContainer">
                    <img src="https://media.licdn.com/dms/image/C560BAQHB9mQxMUYJFw/company-logo_200_200/0/1648723915091?e=2147483647&v=beta&t=MyyvS73RibfDL3bvPTzpI8mQT0RsObVc2rXEtMr9m9E" alt="book-icon" className="logo"/>
                    <h1 className="LogoHead">CROSSWORD</h1>
                </div>
                
                <div className="IconContainer">
                    <div >
                        <Link to="/" className="iconArrange">
                    <IoIosContact className="icon" />
                        <p className="iconName">Login</p>
                    </Link>
                    </div>
                    <div className="iconArrange">
                    <FaRegHeart className="icon" />
                        <p className="iconName">Like</p>
                    </div>
                    <div  >
                        <Link to= "/cart" className="iconArrange">
                    <FaShopify className="icon" />
                        <p className="iconName">Shop</p>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header