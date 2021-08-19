import axios from 'axios';
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        alert(123)
        axios.post('http://13.235.69.239:8000/api/get-device-wallpaper-v1',{macId:"d4:5d:64:e6:91:d0"})
        .then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
        
    }, [])
   
    return(
        <div>
                <div className="Home">
                {/* <h1>Welcome to homePage!</h1> */}
        </div>
            </div>
);
        
}

export default Home;