import React from 'react'
import Header from '../../components/Header'
import './about.css'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
    return (
        <>
            <Header image={HeaderImage} title='About Us' >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum aliquid deleniti perferendis ut nihil dicta sequi nemo iste cum quia?
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our Story" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam voluptates temporibus. Aut numquam, quis adipisci ipsa eos nemo accusamus dicta libero nulla unde enim, sapiente nesciunt suscipit sequi quia?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non nam alias voluptatum enim ab?</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam voluptates temporibus. Aut numquam, quis adipisci ipsa eos nemo accusamus dicta libero nulla unde enim, sapiente nesciunt suscipit sequi quia?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non nam alias voluptatum enim ab?</p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Vision" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our Mission" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam voluptates temporibus. Aut numquam, quis adipisci ipsa eos nemo accusamus dicta libero nulla unde enim, sapiente nesciunt suscipit sequi quia?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non nam alias voluptatum enim ab?</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About