
import { Component } from "react";
import BookItems from "../BookItems";
import Loader from "react-loader"
import Cookies from 'js-cookie'
import "./index.css"

const apiStatusConstants ={
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"IN_PROGRESS"
}

class BooksList extends Component{
    state={bookList:[],apiStatus:apiStatusConstants.initial}

    componentDidMount(){
        this.getBooksList()
    }

    getBooksList=async()=>{
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const jwtToken= Cookies.get("jwt_token")
        const Url = "https://api.itbook.store/1.0/new"
        const option={
                Headers:{
                    Authorization:`Bearer ${jwtToken}`
                },
                method:"GET"
        }
        const response = await fetch(Url,option)
        if (response.ok){
            const fetchedData = await response.json()
            const updatedData = fetchedData.books.map(eachBook=>({
                imageUrl:eachBook.image,
                title:eachBook.title,
                subtitle:eachBook.subtitle,
                cost:eachBook.price,
            }))
            this.setState({
                bookList:updatedData,
                apiStatus:apiStatusConstants.success})
        }
        else{
            this.setState({apiStatus:apiStatusConstants.failure})
        }
  
    }
    renderLoadingView=()=>(
        <div className="loader">
            <Loader type="wave" color="#010326" height="50" width="50" />
        </div>

    )

    renderFailureView=()=>(
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*BPO-L9NdiihKFMmSKzRf7Q.jpeg" alt="pic" className="failure-pic"/>
            <h1>Oops!</h1>
        </div>
    )

     renderListView=()=>{
        const {bookList}=this.state
        return(
            <div>
                <ul className="orderBooks">
                    {bookList.map(listOfBooks=>(
                        <BookItems bookItemDetails={listOfBooks} key={listOfBooks.id}/>
                    ))}
                </ul>
            </div>
        )
    }

     renedrAllList=()=>{
        const {apiStatus}=this.state
        switch (apiStatus){
            case apiStatusConstants.success:
                return this.renderListView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            case apiStatusConstants.Loader:
                return this.renderLoadingView()
            default:
                return null
        }
    }
    render(){
        return(
            <div>
                {this.renedrAllList()}
            </div>
        )
    }
}
export default BooksList