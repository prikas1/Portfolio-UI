import React from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Timeline({ data }) {
  return (
    <section className="ftco-section" id="timeline-section">
      <div className="container">
        <div className="row justify-content-center pb-1">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2 font-bold">Timeline</h1>
            <h2 className="mb-4 text-white font-semibold">My Journey</h2>
          </div>
        </div>
        <div className="row">
          {data.map((item) => (
            <div key={item._id} className="col-md-12">
              <div className="timeline-entry pl-2">
                <div className="timeline-label bg-slate-100">
                <div className='flex align-items-center'>
                <h3 className='font-bold'>{item.jobTitle}</h3>
                <p className='bg-yellow-300 hover:bg-yellow-200 ml-3 px-2 py-1 text-blue-950 font-bold rounded-sm hover:underline'>{item.company_name}</p>
                </div>
                 <p className='font-semibold'><FontAwesomeIcon icon={faMapMarkerAlt} /> {item.jobLocation}</p>
                  <h2>
                    {item.startDate} - {item.endDate}
                  </h2>
                 
                  
                  
                  <p className='font-medium text-pink-700'>{item.summary}</p>
                  <ul>
                    {item.bulletPoints.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
