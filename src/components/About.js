import React from 'react'
import Header from './landing/Header'
import Section from './landing/Section'
import Footer from './landing/Footer'


const About = () => {
  return (
     <div>
            
     <Header/>
            
    <div className="container">

      <p>Hey! I am Mohamed ,Software developer with an enthusiasm for open-source web technologies...</p>
    </div>

    <div className="container text-muted">
                <Section/>
                <Footer/>
            </div>
  </div>
  );
};


export default About;

