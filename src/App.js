import logo from './logo.svg';
import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect, useState} from "react";

function App() {

  //pod = picture of the day
  const [pod, setPod] = useState(null);

  useEffect(() => {
    //useEffect hooks cannot call out to async calls directly
    const getImage = async () => {
      const response = await getPictureOfTheDay();
      console.log("Parsed response body:", response);
      setPod(response);
    }

    

    getImage();
  }, []);
  
  //h1, p, and img src need to be dynamic AKA using variables instead of just strings
  
  
  return (
    <div>
      {
        pod ? 
        <div id='contentBlock'>
        <h1>{pod.title}</h1>
        <p>{pod.explanation}</p>
        <img id='hdurl' src={pod.hdurl} alt={pod.title}></img>
        </div>
        :
        <h1>Loading...</h1>

      }
        
    </div>
  );
}

export default App;
