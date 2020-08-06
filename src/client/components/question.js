import React from 'react';
import './styles/question.scss'
import maspng from '../resources/mas.png'
import { render } from 'react-dom';

class question extends React.Component{

  constructor(props){
      super(props)

      this.state={
        options :['option1','option2','option3','option4','option5','option6','option7'],
        optionsnum:null,

      }
    }


    clickopener=(e)=>{  
        e.target.parentNode.parentNode.style.height="380px"; 
        // e.target.parentNode.removeChild(document.querySelector('.question-titles-container'))
        e.target.removeAttribute("readonly");

    
        }
  addOption=async (e)=>{

        e.persist()
       let newoptions = this.state.options;
        newoptions.push('Option')
        await this.setState({options: newoptions})
        console.log(this.state)
        console.log(e.target)
        console.log( e.target.parentNode.parentNode.parentNode.children)
        console.log( e.target.parentNode.parentNode.parentNode.children[4])
        await this.setState({optionsnum: e.target.parentNode.parentNode.parentNode.children[4].children[0].children.length})

   }

   componentDidMount(){
       this.setState({optionsnum: document.querySelector('.options-wrapper').children.length})
   }


  
   render(){
    return(
        <div className="question-container">
            <div className="questioncontent-container">

                <div className="question-titles-container">
                    {this.state.optionsnum} options
                </div>

                <textarea readOnly onClick={this.clickopener}   maxLength="160" cols="25" rows="3" className="question-title" type="text" defaultValue="balnsdlnadadnajksdnajsndasdaldmalmdkamlsdmalkmsdmasdmalmdlmalkdsmkam</textarea>" />
            
                <h5 className="questions-title" >Options</h5>

                <hr className="questions-separator"/>

                <div className="options-container">

                    <div className="options-wrapper">
                            {
                                this.state.options.map((op,c)=>{
                                    return (<input key={`${this.props.subkey}${c}`} className="option-span" defaultValue={op} />)
                                })
                            }
                    </div>

                </div>

                    <div className="bottom-container">

                        <div onClick={this.addOption} className="left-bottom-container">
                            <img className="maspng" src={maspng} alt="add"/>
                            <p>Add another option</p>
                    
                        </div>

                        <div className="right-bottom-container">



                        </div>
            


                  </div>


            </div>

        </div>

    );
   }
}

export default question;