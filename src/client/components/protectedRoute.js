import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Surveypage from '../pages/surveypage'
import SurveyMenu from '../pages/SurveyMenu'


const protectedRoute = (props)=>{

            const logged = localStorage.getItem('islogged')
            const email = localStorage.getItem('email')
         
            



   
            return(
            <Route render={()=>{

        
        if(props.appstate.islogged || (logged && email)){
               
                    switch(props.computedMatch.path){

                        case '/survey/:id':
                            return (<Surveypage props={props}/>)

                        break;
                        case '/app':
                            return <SurveyMenu />

                    }

                }else{
                    return(<Redirect to="/"/>)

                }

            }}/>

            )
        
 
    

}

export default protectedRoute;