import React, {
    useState,
    useEffect,
    useRef,
} from 'react'
import { COLORS } from '../../../assets/constants';
import Particles from 'react-tsparticles';
import './index.css';
import {ParticlesConfig} from '../../../assets/particle.ts'
import { useDispatch, useSelector } from 'react-redux';


const WelcomeSection = () => {

    const data1 = useSelector((state) => state.app.data1)
    const data2 = useSelector((state) => state.app.data2)
    const dispatch = useDispatch();


    const particlesInit = (main) => {
        console.log(main)
    }

    const particlesLoaded = (container) => {
        console.log(container)
    }

    return (
        <div className='container'>
            <button onClick={() => console.log("data1: ", data1, "data2: ", data2) }>log</button>
            <button onClick={() => dispatch({type: 'ACTION_NUMBER', payload: "34" })}>dispatch number</button>
            <button onClick={() => dispatch({type: 'ACTION_STRING', payload: 'salut toi'})}>dispatch string</button>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={ParticlesConfig} />
            <div className='titleContainer'>
                <p className='jobTitle'>DEVELOPPEUR</p>
                <p className='jobTitle' >FRONTEND</p>
                <p className='jobTitle'>JS</p>
                <span className = 'completeJobText' > DEVELOPPEUR FRONTEND REACT REACT - NATIVE </span>
            </div>
        </div>
    )
}

export default WelcomeSection;



/*             
                */

/*             <Particles
                className='particlesContainer'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticlesConfig}
            />
            <div className='titleContainer'>
                <p className='jobTitle'>DEVELOPPEUR</p>
                <p className='jobTitle' >FRONTEND</p>
                <p className='jobTitle'>JS</p>
                <span className='completeJobText'>DEVELOPPEUR FRONTEND REACT REACT-NATIVE</span>
            </div>
                */