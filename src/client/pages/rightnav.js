import React from 'react';
import './styles/rightnav.scss';
import maspng from '../resources/mas.png'
import Question from '../components/question';

class rightnav extends React.Component{

    constructor(props){
        super(props)
        this.state={
            ret: props.questions || []
        }
    }

    addquestion=()=>{
        let questions = this.state.ret;
        const newquestion = {title:'',options:['']}
        questions.push(newquestion);
        this.setState({ret:questions})
    }

    saveeverything=()=>{
        const hijos = document.querySelector('.questions-wrapper-container').children
        console.log(hijos)

    }

    render(){
        return(
            <div className="rightnav-container">
    
                <div className="title-input">
                    <input type="text" defaultValue="Survey Title"/>
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