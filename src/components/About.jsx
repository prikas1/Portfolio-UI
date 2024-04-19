import React from 'react'


function About({name, subtitle, img, description }) {
  return (
     <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className=" container">
        <h2 className="pb-4 font-bold text-slate-300">About Myself</h2>
                <h4 className=' font-semibold text-2xl text-slate-200'>My name is <span className='text-pink-600'>{name}</span>, {subtitle}. {description}</h4>
      </div>
    </section>
  )
}

export default About