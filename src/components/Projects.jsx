import React, { useState } from 'react';
import "./Projects.css"

function Projects({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 6;
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, initialProjectsCount));

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleProjects(projects);
  };

  return (
    <section className="ftco-section new-padd" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-2">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2 font-bold ">Projects</h1>
            <h2 className="mb-4 text-white font-semibold">My Projects</h2>
          </div>
        </div>
        <div className="row">
          {visibleProjects.map((project, index) => (
            <div key={project._id} className="col-md-4 animate-box py-2 ">
              <div className="project-card ftco-animate text-black p-2 bg-slate-100">
                <img src={project.image.url} alt={project.title} />
                <h3 className='font-bold py-2 text-pink-800 text-2xl'>{project.title}</h3>
                <p className='font-semibold py-2 text-slate-900'>{project.description}</p>
                <div className="tech-stack">
                
                  <ul className='flex py-2'>
                    {project.techStack.map(tech => (
                      <li className='mr-2 py-1 px-2 rounded-lg bg-pink-800 hover:underline hover:bg-pink-700 ' key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links pb-3">
                  <a className='bg-slate-500 mr-4 p-2 rounded-lg hover:underline hover:bg-slate-400' href={project.liveurl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a className='bg-slate-500 p-2 rounded-lg hover:underline hover:bg-slate-400 ' href={project.githuburl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 text-center">
               <button className="btn btn-dark  bg-slate-500" onClick={handleShowMore}>Show More</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
