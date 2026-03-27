import "./Hero.css"
import PlayButton from "../PlayButton/PlayButton.js"

export default function Hero () {
    return (
        <section className="hero-section">
            <div className="hero-section__container">
                <div className="hero-section__text-container">
                    <h1 className="hero-section__title">Sauve ta planète !</h1>
                </div>
                <div className="play-button__container">
                    <PlayButton />
                </div>
            </div>
        </section>
    )
} 