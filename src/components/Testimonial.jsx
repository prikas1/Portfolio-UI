import React, { useState } from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Testimonial({ testimonials }) {
  const [startIndex, setStartIndex] = useState(0);

  const prevTestimonials = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const nextTestimonials = () => {
    if (startIndex < testimonials.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="ftco-section testimony-section" id="testimonial-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2 font-bold">Testimonial</h1>
            <h2 className="mb-4 text-white font-semibold">What People Say</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          {testimonials.slice(startIndex, startIndex + 3).map((testimonial) => (
            <div key={testimonial._id} className="col-md-4 ">
              <div className="testimony-wrap bg-slate-100 rounded-lg my-3 p-4 pb-5">
                <div className="user-img mb-5" style={{backgroundImage: `url(${testimonial.image.url})`}}>
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="name">{testimonial.name} (<span className="position">{testimonial.position}</span>)</p>
                  <p className="mb-5">{testimonial.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="mr-3" onClick={prevTestimonials} style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faAngleLeft} /></span>
            <span onClick={nextTestimonials} style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faAngleRight} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
