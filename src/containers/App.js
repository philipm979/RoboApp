import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor () {
        super ()
        this.state ={
            robots: [],
            searchfield: '',
            color: ''
           }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>this.setState({robots: users}));
    }
         

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
    }
 
    colorChange = () => {this.setState ({color: 'red'})}



    render() {
        const filteredRobots = this.state.robots.filter(x => {
        return x.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
        return (   
        <div className = 'tc' style = {{backgroundColor: this.state.color}}>
        <button className='pa3 bg-red' onClick = {this.colorChange}></button>
        
            <h1 className = 'f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList 
                robots={filteredRobots}
                />
            </Scroll>
        
        </div>
            );
        }
    }
}

    
export default App; 