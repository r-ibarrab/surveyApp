import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom'
import './global.scss'
import React, { Component } from 'react'
import Home from './pages/home'
import ProtectedRoute from './components/protectedRoute';
import Surveypage from './pages/surveypage';


class app extends Component {

    constructor(props){
        super(props)

        this.state={
            islogged: false,
            email:null
        }


    }

  

    login = async (mail)=>{
   
        await this.setState({islogged:true,email:mail});
       
    }
    



    render() {
        
        return (
    
               <BrowserRouter>
               <Switch>
                   <Route exact path ="/app" render={()=>{return <ProtectedRoute appstate={this.state} /> }}/>
                   <Route exact path ="/" render={()=>{return <Home log={(mail)=>{this.login(mail)}} />}}/>
                   <Route exact path ="/survey/:id" render={(props)=>{return <Surveypage appstate={this.state}/> }}/>
                   <Route path="*" render={()=> {return <Redirect to="/"/>}}/>
               </Switch>
               
               </BrowserRouter>
        )
    }
}


export default app;