import React from 'react';
import './styles/rightnav.scss';
import maspng from '../resources/mas.png'
import Question from '../components/question';

class rightnav extends React.Component{

    constructor(props){
        super(props)
        console.log('props rightnav:',props)
        let title;

        if(props.survey.name === 'newSurvey'){
            title = ''
        }else{
            title=props.survey.name
        }

        this.state={
            ret: props.survey.questions || [],
            surveytitle:title
        }
       
    }

    componentWillReceiveProps(nextProps) {

        // let title
        // if(nextProps.survey.name === "newSurvey"){
        //     title = ''
        // }else{
        //     title=nextProps.survey.name
        // }
        this.setState({ ret: nextProps.survey.questions,surveytitle:nextProps.survey.name});  
      }

    addquestion=()=>{
        let questions = this.state.ret;
        const newquestion = {title:'',options:['']}
        questions.push(newquestion);
        this.setState({ret:questions})
    }

    handleQuestionsChange=(e)=>{

        let questionsarray = this.state.ret;

        

        const questions =[]

        this.props.changeQue(questions)


    }

    saveeverything=()=>{
        const hijos = document.querySelector('.questions-wrapper-container').childNodes
        let data = [];
       
       

        hijos.forEach(i=>{
           
            let content = i.children[0]
            let stitle = content.children[1].value;
            let inputopt = content.children[4].children[0].children
            let opts=[]
            for(let con=0;con<inputopt.length;con++){
               opts.push(inputopt[con].children[0].value)
            }

            data.push({title: stitle, options: opts})
            
        })
        
        const survtitle = document.querySelector('.survey-title').value
        const usermail = localStorage.getItem('email')
        const idsurvey = this.props.surveyid;
        

        const fdata = {
            name:survtitle,
            usermail:usermail,
            questions:data,
            id:idsurvey
        }  

        console.log(fdata)
        this.props.send(fdata)
    
    }

    componentDidMount(){

        console.log(this.state.surveytitle)
        console.log(this.props)

    }


    render(){
        return(
            <div className="rightnav-container">
    
                <div className="title-input">
                    <input className ="survey-title" type="text" placeholder="Survey Title" defaultValue={this.state.surveytitle}/>
                </div>
    
                <div className="lineseparator">
    
                </div>


                <div className="questions-wrapper">
                    <div className="questions-wrapper-container">

                        {
                            this.state.ret.map((e,c)=>{
                                return <Question key={c} subkey={c} data={e} />
                            })

                        }
                       
                    </div>

                    <div onClick={this.addquestion} className="addquestion-container">
                        <div className="addquestion-wrapper">
                            <img className="masquestion" src={maspng} alt="plus"/>
                            <h5>Add a question</h5>
                        </div>
                        
                    </div>

                    

                </div>
                <h2 onClick={this.saveeverything} className="save-button">Save</h2>


    
    
    
    
    
    
            </div>
        )
    }



}

export default rightnav;