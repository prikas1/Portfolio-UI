import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

// import "../App.css"


function Home() {
    const params = useParams();
    const navigate = useNavigate();
    
    const userId = '65b3a22c01d900e96c4219ae'; //John doe

    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
  const fetchUserData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);
        const userData = await response.json();

        document.title = `${userData?.user?.about?.name ?? 'User'} - ${userData?.user?.about?.title ?? 'Title'}`;
        setUser(userData?.user);
        setIsLoading(false);

        // Check if document.body is defined before accessing its properties
        if (document.body) {
            document.body.classList.remove('loaded');
        }
    } catch (error) {
        navigate('/');
        setIsLoading(true);
        console.error('Error fetching user data:', error);
    }
};



        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);


// filtering all the data from the API
    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);

    if (isLoading) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    }
    return (
        <div className="home">
        
            <Header />
             <Hero name={user.about.name} title={user.about.title} subtitle={user.about.subTitle} img={user.about.avatar.url} />
            <About img={user.about.avatar.url} description={user.about.description} subtitle={user.about.subTitle} name={user.about.name} />
            <Skills skills={user?.skills} />
            <Projects projects={user?.projects}/>
            <Services services={user.services} />
            <Timeline data={user?.timeline} />
            <Testimonial testimonials={user?.testimonials} />
            <Contact emailID={user.email} phone={user.about.phoneNumber} address={user.about.address} social_handles={user.social_handles}  />
        </div>
    );
}

export default Home;
