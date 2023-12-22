
import "./index.css";

const BookItems=props=>{
    const {bookItemDetails} = props
    const {imageUrl,title,cost,subtitle}=bookItemDetails
    return(
        <li>
            <div className="bookItemContainer">
                <img src={imageUrl} alt={title} className="book-pic"/>
                <h1 className="book-head">{title}</h1>
                <p className="book-subtitle">{subtitle}</p>
                <p className="book-cost">{cost}</p>
            </div>
        </li>
    )
}
export default BookItems