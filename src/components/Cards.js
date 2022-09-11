import React from 'react'
import CardItem from '../components/CardItem'
import '../scss/Cards.scss' 
import HillsImage from '../images/hills-image.jpg';
import LarsImage from '../images/lars-mai-image.jpg';
import FishingImage from '../images/fishing-image.jpg';
import MountainsImage from '../images/man-on-the-bridge-image.jpg'

function Cards() {
  return (
    <>
    <div className="cards">
        <h1>Check out these EPIC Destinatons!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={HillsImage}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src={LarsImage}
                    text="Travel through the best world lakes"
                    label='Lakes'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={FishingImage}
                    text="Enjoy fishing in Arisona"
                    label='Fishing'
                    path='/services'
                    />
                    <CardItem 
                    src={MountainsImage}
                    text="Enjoy relaxation in the mountains"
                    label='Mountains'
                    path='/services'
                    />
                    <CardItem 
                    src={LarsImage}
                    text="Travel through the best world lakes"
                    label='Lakes'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards