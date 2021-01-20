import React from 'react';


const Card = ({name, email, id, colorChange}) => {

return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             <button className='pa3 bg-red' onClick = {colorChange}
            button/>
            <img alt='robots' src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;

