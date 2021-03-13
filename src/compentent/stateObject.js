import React, { useState } from 'react';

function StateObject() {

    const [name, setName] = useState({firstName:'anand', lastName:'nadar'})
    return (
        <div>
            <form>
                <input type="text" value ={name.firstName} onChange ={e => setName({firstName:e.target.value})} />
                <input type="text" value={name.lastName} />
                <h3>{name.firstName}{name.lastName}</h3>
                {/* <button onClick = { () => setName({firstName:'ddddd', lastName:'ddddddassas'})}>click</button> */}

            </form>
        </div>
    );
}

export default StateObject;