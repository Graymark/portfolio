import React from 'react';
import { COLORS } from '../../../assets/constants';
import './index.css';
import beauGosse from '../../../assets/images/description_image.png'


const JobDescriptionSection = () => {



    return (
        <div className='container' style={{backgroundColor: COLORS.backgroundLight}}>

            <img src={beauGosse} />
            <div>
                <h4 className='descriptionTitle' >Je suis developpeur frontend Javascript</h4>
                <span className='descriptionText'>Ma curiosité et  </span>
                <span className='descriptionText'> je sais évolué en autonomie au sein de projet Web aussi bien que Mobile grâce à une pluralité d'expérience professionelles réalisées lors de mon cursus d'ingénieur</span>
                <span className='descriptionText'>C'est pour cela que je saurais me montrer utile et indispensable dans la réalisation de vos projets</span>
            </div>

        </div>
    )
}

export default JobDescriptionSection;