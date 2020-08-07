import React from 'react';
import './styles/question.scss'
import maspng from '../resources/mas.png'
import basurapng from '../resources/basura.png'
import { render } from 'react-dom';

class question extends React.Component{

  constructor(props){
      super(props)        

      this.state={
        title: props.data.title,
        options :props.data.options, 
        optionsnum:null,
        expanded:false

      }
    }


    clickopener=(e)=>{  

                if(this.state.expanded){
                    e.target.parentNode.parentNode.parentNode.parentNode.style.height="95px"; 
                    e.target.parentNode.parentNode.parentNode.children[1].readOnly=true;
                    this.setState({expanded:false});
                    e.target.parentNode.parentNode.parentNode.firstChild.style.display="flex"
                }else{
                    e.target.parentNode.parentNode.parentNode.parentNode.style.height="350px"; 

                    try{
                        e.target.parentNode.parentNode.parentNode.firstChild.style.display="none"
                    }catch(e){
                        
                    }

                    e.target.parentNode.parentNode.parentNode.children[1].readOnly=false;
                    e.target.parentNode.parentNode.parentNode.children[1].focus();
                    this.setState({expanded:true});

                }

        }

        deletequestion=(e)=>{

            e.target.parentNode.parentNode.parentNode.parentNode.remove()


        }
        
  addOption=async (e)=>{

        e.persist()
       let newoptions = this.state.options;
        newoptions.push('')
        await this.setState({options: newoptions})
       
       
        await this.setState({optionsnum: e.target.parentNode.parentNode.parentNode.children[4].children[0].children.length})
        const newinput = e.target.parentNode.parentNode.parentNode.children[4].children[0].children;
        console.log(newinput[newinput.length - 1])
        newinput[newinput.length-1].children[0].focus();

   }

   deleteoption=(e)=>{
       e.target.parentNode.remove();

   }

   componentDidMount(){
       this.setState({optionsnum: document.querySelector('.options-wrapper').children.length})
   }


  
   render(){
    return(
        <div className="question-container">
            <div className="questioncontent-container">

                <div className="question-titles-container">
                    {this.state.optionsnum} option(s)
                </div>

                <textarea readOnly  maxLength="120" cols="25" rows="3" className="question-title" type="text" placeholder={'New Question'} defaultValue={this.state.title} />
            
                <h5 className="questions-title" >Options</h5>

                <hr className="questions-separator"/>

                <div className="options-container">

                    <div className="options-wrapper">
                            {
                                this.state.options.map((op,c)=>{
                                    return (
                                        <div className="option-span" key={`${this.props.subkey}${c}`} >
                                                <input className="option-span-input" placeholder={"New Option"} defaultValue={op}/>
                                                <img onClick={this.deleteoption} className="basurapngop" src={basurapng} alt="a"/>
                                
                                        </div>
                                    )

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
                            {this.state.expanded ? <h6 onClick={this.clickopener} className="right-bottom-text">Less</h6> : <h6 onClick={this.clickopener}  className="right-bottom-text">More</h6>}
                            <img onClick={this.deletequestion} className="basurapng" src={basurapng} alt="a"/>




                        </div>
            


                  </div>


            </div>

        </div>

    );
   }
}

export default question;