import React from 'react'
import './work.css'
import css from '../../assets/tech/css.png'
import javaScript from '../../assets/tech/javascript.png'
import reactJs from '../../assets/tech/reactjs.png'
import html from '../../assets/tech/html.png'
import nodeJs from '../../assets/tech/nodejs.png'
import mongoDB from '../../assets/tech/mongodb.png'

function Work() {
  return (

    // <section className='worksContainer'>
        <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='workDetails'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
        I am excited to bring my skills and my experience to help businesses to achieve their goals and create a strong online presence.</span>
        <div className='workImgs'>
            <img className='workImg' src={javaScript} alt='javaScript'/>
            <img className='workImg' src={css} alt='css'/>
            <img className='workImg' src={html} alt='html'/>
            <img className='workImg' src={nodeJs} alt='nodeJs'/>
            <img className='workImg' src={mongoDB} alt='mongoBD'/>
            <img className='workImg' src={reactJs} alt='reactJs'/>
        </div>
        <button className='moreBtn'>Coming Soon</button>
        </section>
    // </section>

  )
}

export default Work