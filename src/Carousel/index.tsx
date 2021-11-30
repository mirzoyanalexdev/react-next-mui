import React, { useRef } from "react";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cities } from "../MOCK";

export const Carousel = () => {
    const slider: React.MutableRefObject<any> = useRef()

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    }; 

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className='bg-black min-h-screen'>
            <div className='flex justify-center py-12 '>
                <div className='mr-3'>
                    <h2 className='text-4xl text-white font-bold'>OUR</h2>
                </div>
                <div>
                    <h2 className='text-4xl text-orange font-bold'>HOTELS</h2>
                </div>
            </div>
            <div  className='flex mt-5 pb-20 relative max-w-3xl m-auto'>
                <Slider ref={(c) => (slider.current = c)}  {...settings} className='flex  mt-5 max-w-3xl m-auto pb-20  '>
                    {cities.map((card, i) => (
                        <Card sx={{ maxWidth: 220  }} key={`${card.city}+${i}`} >
                            <div className='flex w-full h-48 object-cover'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.imgUrl}
                                    alt="green iguana"
                                />
                            </div>    
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="text-orange">
                                {card.city}
                            </Typography>
                            <div />
                            <div className='flex flex-col justify-between'>
                                <div className="flex items-center">
                                    <span className='mr-1.5'>{card.hotels.hotel1}</span>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                </div>    
                                <div className="flex items-center">
                                    <span className='mr-1.5'>{card.hotels.hotel3}</span>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                </div>   
                                <div className="flex items-center">
                                    <span className='mr-1.5'>{card.hotels.hotel3}</span>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                    <StarIcon className="w-4 h-4 text-orange" style={{ color: "#eed929" }}/>
                                </div>   
                            </div>
                        </CardContent>
                        
                        <CardActions className='flex justify-center items-center mb-4'>
                            <Button variant="contained" size="small">More <ArrowForwardIosIcon className="ml-1.5" style={{fill: "white"}} sx={{ fontSize: 16 }} /></Button>
                        </CardActions>
                    </Card>   
                    ))}
                </Slider>
                <button onClick={previous} className='absolute flex text-white top-44 -left-16 w-10 h-10 items-center justify-center border-2 rounded-full'>
                        <ArrowBackIosIcon className='ml-2' />
                </button>
                <button onClick={next} className='absolute flex text-white top-44 -right-7 w-10 h-10 items-center justify-center border-2 rounded-full'>
                    <ArrowForwardIosIcon className='ml-1' />
                </button>
                
        </div>
      
      </div>
    )
}