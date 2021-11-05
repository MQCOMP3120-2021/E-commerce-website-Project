import React, {useState, useEffect} from 'react';
import '../css/homeScreen.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import reviewImage from '../assets/reviewImage.png'
import trendingFirst from '../assets/trendingFirst.jpg'
import trendingSecond from '../assets/trendingSecond.jpg'
import trendingThird from '../assets/trendingThird.jpg'
import logo from '../assets/j-logo.png'

const Home = () => (

    <div className="homeContainer">

        <div className="container">
            <div className="row">
                <div className="six columns">
                    <img src = {reviewImage}/> 
                </div>
                <div className="six columns">
                    <p>“The pastries are fantastic. 
                        The exquisite taste that the pastries here offer
                        is beyond imagination. The pastries offer just the 
                        right amount of sweetness to fill a person with joy. 
                        It is not pastries that these people are making, 
                        but magic. ”
                    </p>
                    <p className = "foodCriticName">by Food Critic Tom Bob</p>
                </div>
            </div>
        </div>

        <div className="trendingProducts">
            <h1 className="trendingTitle">Trending Products</h1>
            <section className="container-grid">
                <div className="trendingItem">
                    <img src= {trendingFirst} alt="First trending image"/>
                    <p className="trending-sub">Signature Sourdough</p>
                </div>
                <div className="trendingItem">
                    <img src= {trendingSecond} alt="Second trending image"/> 
                    <p className="trending-sub">Cinnamon Roll</p>
                </div>
                <div className="trendingItem">
                    <img src= {trendingThird} alt="Third trending image"/> 
                    <p className="trending-sub">Chocolate Croissant</p>
                </div>
            </section>
            <Link to='/Menu'>
                <button className="trendingButton">Shop Now   →
                </button>  
            </Link>
        </div>

    </div>
        
)

export default Home;