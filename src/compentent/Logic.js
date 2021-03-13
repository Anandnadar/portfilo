import React, { useState, useEffect } from 'react';

const Logic = () => {
    const [state, setState] = useState(false);
    useEffect(() => {

    })
    const clickHandler = () => {
        setState(state => !state);

    }
    return (
        <div>
            <h1 onClick={clickHandler}> anand</h1>
            {state && (
                <div className="boxContent">
                    
                        ANAND IS  TEHT 
                    
                </div>
            )}
        </div>
    );
};

export default Logic;