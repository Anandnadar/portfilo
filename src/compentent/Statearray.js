import React ,{useState} from 'react';

function Statearray(props) {
     const[data, setData] = useState(["Saab", "Volvo", "BMW"])
     const addVaalue = () => {
         setData(["Saab", "Volvo", "BMW","tata"])
     }
    return (
        <div>
            <p>{data}</p>
            <button onClick = {addVaalue}>value</button>
        </div>
    );
}

export default Statearray;