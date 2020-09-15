import React, {Component} from "react";
import CardList from "../components/CardList";
//import { robots } from "./robots";
import SearchBox from "../SearchBox";
import "./App.css";
// import { robots } from "../robots";
import Scroll from "../components/Scroll"
import Loading from "../components/Loading";
import ErrorBoundry from "../components/ErrorBoundry"



class App extends Component {

    constructor() {
        super() //means state
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
      // .then(users => {});
      //  this.setState({robots : robots})
    }
    // Automatically called

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})

    }
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })
        
        return !robots.length ? <Loading />
           // robots.length === 0
           // return <Loading i={i}/> 
           :  
            <div className="tc">
                <h1 className="f2">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                </ErrorBoundry>
                </Scroll>
        
            </div>}}


    





export default App;