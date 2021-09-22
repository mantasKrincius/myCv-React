import React from "react";
import banner from '../../assets/banner.jpg'
import HeroText from "./HeroText";
import './Hero.css'

export default function Hero() {
    return (
        <div>
            <div className="main-hero-text-div" style={{
                backgroundImage: `url(${banner})`,
            }}>
                <div className="hero-text">
                    <HeroText/>
                </div>

            </div>
        </div>
    )
}