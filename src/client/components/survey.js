import React from 'react';
import './styles/survey.scss'
import { Link } from 'react-router-dom';

const survey=(props)=> {
    


        return (
           
                <Link to={`/survey/${props.id}`} className="survey-link">
                    <h1>{props.title}</h1>
                </Link>
           
        );
    
}

export default survey;