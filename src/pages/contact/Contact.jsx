import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'


const Contact = () => {
    return (
        <>
            <Header image={HeaderImage} title='Get in Touch' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi incidunt ratione at vitae deserunt.
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:alexisxzinho@hotmail.com" target="__blank" rel='noreferrer noopener'><MdEmail /></a>
                        <a href="https://m.me/alexismatos11/" target="__blank" rel='noreferrer noopener'><BsMessenger /></a>
                        <a href="https://wa.me/+4915209907551" target="__blank" rel='noreferrer noopener'><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact