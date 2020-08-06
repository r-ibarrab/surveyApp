import React from 'react';
import Leftnav from '../components/leftnav';
import './styles/surveypage.scss';
import Rigthnav from './rightnav';
const surveypage = (props)=>{

    return(
        <div className="app-container">
            <div className="leftnav-wrapper">
                <Leftnav /> 

            </div>
            <Rigthnav title="hola"/>



        </div>

    )


}

export default surveypage;