import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App () {
   

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [on, setOn] = useState(false)
    
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => setRobots(users));
    },[])

    const onSearchChange = (event) => {
       setSearchfield(event.target.value)
    }

    const changeColor = () => setOn(on => !on);


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1>Loading</h1>
          }
        else {
            return (   
            <div className ='tc'>
                <body className = {on ? "color-change" : "original-color"}>
                    <button className='pa3 bg-yellow' onClick = {changeColor}></button>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList 
                        robots={filteredRobots}
                            />
                    </Scroll>
                </body>
             </div>
            );
        }
    }


  

    
export default App; 