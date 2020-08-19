import React from 'react';
import './styles/leftnav.scss';

const leftnav = (props)=>{
    const n = 12345

    const handleClickque=()=>{

        props.changecontent('questions')


    }

    const handleClickcu=()=>{

        props.changecontent('customize')


    }

    return(
        <div className="leftnav-container">
        <h3 className="leftnav-title" >{props.email || '@roberto.ibarra764'}</h3>

        <div onClick={handleClickque} className="leftnav-questions">
            <h2 >Questions</h2>
        </div>
        <div onClick={handleClickcu} className="leftnav-customize">
            <h2 >Customize</h2>
        </div>



       

        <p className="surveycode">Your survey code:</p>
        <h3 className="surveynumber">{n || 12345}</h3>

        <h2 className="golive">Go Live</h2>


        </div>

    )

}

export default leftnav;