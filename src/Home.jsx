import React from 'react'
import ReactPlayer from 'react-player';
import './App.css';
const Home = () => {
    return (
        <>
        {/* <div className='App'>
            <ReactPlayer width='1520px' height='680px' url='https://youtu.be/7sDY4m8KNLc' />
        </div> */}
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <ReactPlayer  width='1520px' height='680px' url='https://youtu.be/7sDY4m8KNLc' />
            </div>
            <div className="carousel-item">
            <ReactPlayer width='1520px' height='680px' url='https://youtu.be/l18QRTYMz24' />
            </div>
            <div className="carousel-item">
            <ReactPlayer width='1520px' height='680px' url='https://youtu.be/vqCirjK61HI' />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>


        </>
    )
}
export default Home;