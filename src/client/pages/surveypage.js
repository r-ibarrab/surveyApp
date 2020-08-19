import React,{useState, useEffect} from 'react';
import Leftnav from '../components/leftnav';
import './styles/surveypage.scss';
import Rigthnav from './rightnav';
import Customize from './customize'


class surveypage extends React.Component{

    // const [rightContent, setRightContent]=useState('questions')
    // const [questions,setQuestions]=useState([])
    // const [styles,setStyles]=useState([])
    // const [surveyd,setSurvey]=useState({})

    constructor(props){
        super(props)
        console.log('props',props)
        this.state={
            styles:{},
            survey:{},
            questions:[],
            rightcontent:'questions',
            

        }
        this.getSurvey();
        console.log('finishgetsurvey')
       

    }

   setStyles= async(e)=>{
       console.log(e)
       await this.setState({styles:e})
   }


    getSurvey = async ()=>{

        console.log('getsurvey');
        let qsurvey = await fetch(`http://localhost:3000/api/surveys/${this.props.props.computedMatch.params.id}`)
        qsurvey = await qsurvey.json()

        await this.setState({styles:qsurvey.customize,survey:qsurvey,questions:qsurvey.questions})
       
        console.log('survey:',this.state.survey)
        console.log('styles',this.state.styles)
      
        
        
    }


    changeQuestions = (e)=>{

        this.setState({questions:e})

    }

    sendSurvey = async (e)=>{
        console.log('E: ',e)
        console.log('estado:',this.state.survey)

        const data ={
            name:e.name,
            usermail:e.usermail,
            questions: e.questions,
            results: this.state.survey.results || [],
            live:this.state.survey.live,
            livenumber:this.state.survey.livenumber,
            customize:this.state.styles
        }
        console.log(data)
    

        const f = await fetch(`http://localhost:3000/api/survey/${e.id}`,{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })

        if(f.message === 'error'){
            alert('hubo un problema')
            
        }
        this.getSurvey()
        

    }

    setRightContent= async(e)=>{
       await this.setState({rightcontent:e})
    }

   

    


    render(){
        return(
            <React.Fragment>
                    
                        <div className="app-container">
                        <div className="leftnav-wrapper">
                            <Leftnav changecontent = {this.setRightContent} /> 
            
                        </div>
                        {
                            
                            this.state.rightcontent ==='questions' ? <Rigthnav title="hola" survey={this.state.survey} questions={this.state.questions} send={this.sendSurvey} changeQue={this.changeQuestions} surveyid={this.props.props.computedMatch.params.id} />
                            : <Customize changestyles={this.setStyles} colors={this.state.styles}/>
            
            
                        }
                    </div>
                        
        
        
                    

            </React.Fragment>

           
    
        )
    }
}

export default surveypage;