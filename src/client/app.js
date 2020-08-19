import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom'
import './global.scss'
import React, { Component } from 'react'
import Home from './pages/home'
import ProtectedRoute from './components/protectedRoute';
import Surveypage from './pages/surveypage';
import Surveymenu from './pages/SurveyMenu'

class app extends Component {

    constructor(props){
        super(props)

        this.state={
            islogged: false,
            email:null
        }


    }
    logout = async ()=>{
        await this.setState({islogged:false})
        console.log(this.state)

    }

  

    login = async (mail)=>{
        localStorage.setItem('islogged',true)
        localStorage.setItem('email',mail)
   
        await this.setState({islogged:true,email:mail});
       
    }
    



    render() {
        
        return (
    
               <BrowserRouter>
               <Switch>
                  

                   <ProtectedRoute exact path="/app" appstate={this.state} logout={this.logout} component={<Surveymenu/>}/>
                   <ProtectedRoute exact path="/survey/:id" appstate={this.state} component={<Surveypage />}/>
                   <Route exact path ="/" render={()=>{return <Home log={(mail)=>{this.login(mail)}} appstate={this.state}/>}}/>
                   
                   <Route path="*" render={()=> {return <Redirect to="/"/>}}/>
               </Switch>
               
               </BrowserRouter>
        )
    }
}


export default app;