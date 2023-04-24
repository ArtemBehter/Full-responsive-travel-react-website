import React from 'react';
import { Button } from './Button';
import '../scss/HeroSection.scss';
import '../../src/App.scss';
import video from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
        <video src={video} autoPlay loop muted />
        <h1 className="hero-container-title">ADVENTURE AWAITS</h1>
        <p className="hero-container-paragraph">What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/></Button>
        </div>
    </div>
  )
}

export default HeroSection