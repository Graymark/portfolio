import React from 'react';
import AboutMeSection from '../components/AboutMeSection/index';
import WelcomeSection from '../components/WelcomeSection/index';
import JobDescriptionSection from '../components/JobDescriptionSection/index';

type props = {

}

const Home = (props: props) => {



    return (
        <div>
            <WelcomeSection />
            <JobDescriptionSection />
            <AboutMeSection />
        </div>
    )
    }


    export default Home;