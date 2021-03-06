import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App () {
   

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [color, setColor] = useState('')
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => setRobots(users));
    },[])

    const onSearchChange = (event) => {
       setSearchfield(event.target.value)
    }
 
   

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0) {
            console.log(robots, searchfield)
            return <h1>Loading</h1>
          }
        else {
            return (   
            <div className = 'tc' style = {{backgroundColor: color}}>
            <button className='pa3 bg-red' onClick = {() => setColor('red')}></button>
            <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList 
                    robots={filteredRobots}
                    />
                    
            
                </Scroll>
                
            
            </div>
            );
        }
    }


  

    
export default App; 