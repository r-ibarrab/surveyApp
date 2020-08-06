import React from 'react';
import SurveyItem from '../components/survey';
import './styles/surveymenu.scss';

 const surveymenu = (props)=>{

    console.log(props)
     const surveys = props.list;
     console.log(surveys)

    return(
        <div className="surveymenu-list">
            <h2 className="surveymenu-title">Your surveys</h2>

           

        {
            surveys.map((data)=>{
                return (<SurveyItem key={data.id} title={data.title} id={data.id} />)


            })
        }


        </div>

    )


}

export default surveymenu;

