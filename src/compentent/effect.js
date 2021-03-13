import React , {useState, useEffect} from 'react';

function Effect(props) {
    const [state, setState] = useState([]); 
    useEffect(() =>{
        setState(["ananad"])
    })
    return (
        <div>
            <p>{state}</p>
            
        </div>
    );
}

export default Effect;