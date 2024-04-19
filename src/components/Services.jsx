// import React from 'react';
// import './Services.css';

// function Services({ services }) {
//   return (
//     <section className="ftco-section" id="services-section">
//       <div className="container">
//         <div className="row justify-content-center pb-1">
//           <div className="col-md-12  heading-section text-center ftco-animate">
//             <h1 className="big big-2 font-bold">Services</h1>
//             <h2 className="mb-4 text-white font-semibold">Our Services</h2>
//           </div>
//         </div>
//         <div className="row">
//           {services.map((service) => (
//             <div key={service._id} className="col-md-4 my-3 d-flex align-self-stretch ftco-animate">
//               <div className="media block-6 services-wrap d-flex">
//                 <div className="icon d-flex justify-content-center align-items-center">
//                   <img src={service.image.url} alt={service.name} />
//                 </div>
//                 <div className="media-body pl-4">
//                   <h3 className="heading">{service.name}</h3>
//                   <p>{service.desc}</p>
//                   <p className="charge"><span>{service.charge}</span></p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

import React from 'react';
import './Services.css';

function Services({ services }) {
  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center pb-1">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2 font-bold">Services</h1>
            <h2 className="mb-4 text-white font-semibold">Our Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service._id} className="col-lg-4 col-md-6 my-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services-wrap d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={service.image.url} alt={service.name} />
                </div>
                <div className="media-body pl-4">
                  <h3 className="heading">{service.name}</h3>
                  <p>{service.desc}</p>
                  <p className="charge"><span>{service.charge}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

