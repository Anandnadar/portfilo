import React, { useState, useEffect } from 'react';
import axios from 'axios'

 function GetDataFetch ( ){
     const [post , setPost] = useState({});
     useEffect ( () => {
        axios 
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then((res) => {
            //console.log(res)
            setPost(res);
            console.log(setPost)
        }).catch((err) => {
            console.log(err)
        });
     })
     return(
        <div>

        </div>
     );

 }
 export default GetDataFetch;