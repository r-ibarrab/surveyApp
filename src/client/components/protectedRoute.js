import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import SurveyMenu from '../pages/SurveyMenu'

const protectedRoute = (props)=>{


            const surveylist = [
                {
                    title:'myfirst',
                    id:1
                },
                {
                    title:'mysecond',
                    id:2
                }
            ]
            console.log(surveylist)

  
   
            return(
            <Route render={()=>{

        
        if(props.appstate.islogged){
                return(
                    <SurveyMenu list={surveylist}/>
                    
                    )

                }else{
                    return(<Redirect to="/"/>)

                }

            }}/>

            )
        
 
    

}

export default protectedRoute;