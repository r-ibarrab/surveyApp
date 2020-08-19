import React from 'react';
import Logo from '../resources/logo.png';
import './styles/home.scss';
import Join from '../components/home-join';
import {Route, Redirect} from 'react-router-dom'

class home extends React.Component{

    constructor(props){
        super(props)
        this.state={
            right:'join',
            
        }
    }

    buttonClick=(e,t)=>{
        
        document.querySelector('.slider-home').style.animation="desplazar .4s ease-in forwards";
        this.setState({right:t})

    }

    gobackClick=()=>{
        document.querySelector('.slider-home').style.animation="antidesplazar .4s ease-in forwards";

    }

    createEnter= async ()=>{

        const email = document.querySelector('.pin-code').value;


        if(email.includes('@') && email.includes('.com')){
            console.log(email)
            await fetch(`http://localhost:3000/api/verifyuser/${email}`)
            await setTimeout(()=>{

            },500)
            this.props.log(email)

        }else{

            alert('That is not an email');

            

        }
        


    }

    render(){


    
       return(
        <Route render={()=>{

            if(!localStorage.getItem('islogged')){

                return(
                    <div className="appwrapper">
                    <div className="main-home">
    
                    <div className="slider-home">
    
                            <div className="left-home">
                                    <div className="logo-container">
                                        <div className="logoandiso">
                                            <img src={Logo} alt="logo"/>
                                            <div className="logo-title-container">
                                                <h1>Survey<span className="title-app">App</span></h1>
                                            </div>
                                        </div>
    
                                        <div className="support-logo-text">
                                            <p className="title-paragraph">Astonish your spectators with instant<br/> 
                                            survey results. </p>
                                        </div>
                                        <div className="buttons-container">
                                                <button className="main-button" onClick={(e)=>{this.buttonClick(e,'join')}}>Join</button>
                                                <button className="secondary-button" onClick={(e)=>{this.buttonClick(e,'create')}}>Create</button>
                                        </div>
    
                                        
                                    </div>
    
                            </div>
    
                            <div className="right-home">
                                {
                                this.state.right === 'join' ? <Join buttontext="Enter" maintext="Write the Pin Code" placeholderh="Pin Code"/> 
                                : <Join buttontext="Submit" submite={()=>{this.createEnter()}} maintext="We need your email to sign you in" placeholderh="Your email..." inputAction={()=>{this.createEnter()}}/>
    
                                }
    
                                <h2 style={{fontSize:'.75rem',cursor:'pointer'}}onClick={()=>{this.gobackClick()}}>back</h2>
    
                            
    
                            </div>
                    
    
                    </div>
                    
    
    
                    </div>
    
                </div>

                )
            }
            else{
                
                return(<Redirect to="/app"/>)
            }



        }}/>
       )
       
    
    
    }
}

export default home;