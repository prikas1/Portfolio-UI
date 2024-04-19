import React from 'react';

function Hero({ name, title, subtitle, img }) {
  return (
    <div id='home-section' className="hero container py-4">
      <div className="row hero-content">
      <div className='col-md-6 flex justify-center align-items-center'>
      <div>
      <h1 className='text-4xl font-bold py-2 text-blue-100'>Hello I'm {name}</h1>
        <h3 className='font-bold text-3xl py-2 text-slate-400'>{title}</h3>
        <p className='font-bold  py-2'>{subtitle}</p>
        <button type="button" class="btn bg-pink-600 text-white px-4 py-2 mt-5 rounded-xl hover:bg-pink-800">Let's Talk</button>
        </div>
      </div>
      <div className='col-md-6 p-4 flex justify-center  '>
      <img className='hero-image ' src={img} />
      
      </div>
    </div>
   </div>
  );
}

export default Hero;
