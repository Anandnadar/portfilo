import React, { useState, useEffect } from 'react';

function Datafetch() {
    const [post, setPost] = useState([])

    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((res) => {
                console.log('response from api', res);
                setPost(res)
            })
    },[])
    
    return (
        <div>
            <ul>
                {
                    post.map(data => <li key={data.id}>{data.title}</li>
                )}
            </ul>
        </div>
    );
}

export default Datafetch;