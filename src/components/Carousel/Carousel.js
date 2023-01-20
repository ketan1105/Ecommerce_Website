import React,{useState,useEffect} from  'react';
//import CarouselCard from './CarouselCard.js';
import './Carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Carousel(){

    const data = [
        {
          id: 1,
          image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
          name: "Plants",
        },
        {
          id: 2,
          image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
          name: "Headphones",
        },
        {
          id: 3,
          image: "https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg",
          name: "Groceries",
        },
      ];
    

    //let index = 0
    const [index,setIndex] = useState(0)
    const [currentImage,setCurrentImage] = useState(data[0].image)
    

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    

    function showNextImage(){
        if(index >= data.length - 1){
          setCurrentImage(data[0].image);
          setIndex(0);
          return;
        }
        setCurrentImage(data[index+1].image);
        setIndex(index + 1);
    }

    function showPreviousImage(){
        if(index === 0){
          setCurrentImage(data[data.length-1].image);
          setIndex(data.length - 1);
          return;
        }
        setCurrentImage(data[index-1].image);
        setIndex(index - 1);
    }

    function auto(){
      slideInterval = setInterval(showNextImage,intervalTime);
    }

    useEffect(() => {
      if(autoScroll){
        auto();
      }
    },[currentImage]);

    return(
        <div className='carousel'>
            {/* <Carousels carouselData={carouselData} /> */}

            {/*{carouselData.map ((value) => 
            (<CarouselCard image={value.image} name={value.name}/>))}*/}
            <div className='carousel_arrow' onClick={showPreviousImage}>
              <ArrowBackIosIcon />
            </div>
            <img className='carousel_images' src ={currentImage} />

            <div className='carousel_arrow' onClick={showNextImage}>
              <ArrowForwardIosIcon />
            </div>

            {/*<button onClick={showNextImage}>Next Image</button>
            <button onClick={showPreviousImage}>Previous Image</button>*/}
        </div>
    );
    
}

export default Carousel;