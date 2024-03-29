import React, {useEffect, useState} from 'react'
import './Slider.css'
import axios from 'axios'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
function Slider({apiKey, baseUrl}) {

    //console.log(baseUrl+" "+apiKey)
    //console.log(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [index, setIndex] = useState(0);
    const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

useEffect(()=> {
    axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    .then(res => {
        console.log(upcomingMovies)
        setUpcomingMovies(res.data.results)
    })
},[])

const sliderStyle =  {
    backgroundImage:`url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    height:"60vh",
    position:"relative",
    marginTop:"70px"
}

const handleRight = () => {
    setIndex(index+1);
    if(index === upcomingMovies.length-1){
        setIndex(0)
    };
}
const handleLeft = () => {
    setIndex(index-1);
    if(index === 0){
        setIndex(upcomingMovies.length-1)
    };
}

  return (
    <div style={sliderStyle}>
        <div className="slider-overlay">
            <MdKeyboardArrowRight className="right-arrow" onClick={handleRight}/>
            <MdKeyboardArrowLeft className="left-arrow" onClick={handleLeft}/>
            <div className="slider-info">
                <h1>{upcomingMovies[index]?.title}</h1>
                <p className="slider-description">{upcomingMovies[index]?.overview.slice(0,130)}...</p>
                <p>
                    Release Date: {upcomingMovies[index]?.release_date}
                </p>
            </div>
        </div>

    </div>
  )
}

export default Slider