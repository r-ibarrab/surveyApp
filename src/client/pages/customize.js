import React from 'react';
import './styles/customize.scss'

class customize extends React.Component{

    constructor(props){
        super(props);
        this.state={
            background:this.props.background || "#13EB42" ,
            question:this.props.colors.question || "#ffffff",
            answerst:this.props.colors.answerst || "#fff",
            answersb:this.props.colors.answersb || "#000",
            answersbor:this.props.colors.answersbor || "#fbfbgf"

        }

    }

    componentDidMount(){
        document.querySelector('.container-preview').style.background=this.state.background;
        const questionhr = document.querySelectorAll('.questions-text')

        questionhr.forEach(obj=>{
            obj.style.background=this.state.question;
        })


        document.querySelector('.preview-answers-container').style.borderColor=this.state.answersbor
        document.querySelector('.preview-answers-container').style.background=this.state.answersb
        
        const respuestas = document.querySelectorAll('.answers-text')

        respuestas.forEach(obj =>{
            obj.style.background=this.state.answerst;
        })


    }


    handleChange=async (e,data)=>{
        await this.setState(data)
        console.log(this.state)
        this.props.changestyles(this.state)
    }


  

   
   render(){

    return(
        <div className="customize-container">

        
                <div className="top-customize">

                    <div className="colors-container">

                        <div className="input-container">
                            <input type="color"  onChange={(e)=>{this.handleChange(e,{background: e.target.value})} } value={this.state.background} className="color-selector"/>
                            <h5 className="input-description">Background</h5>
                        </div>
                        <div className="input-container">
                            <input type="color" onChange={(e)=>{this.handleChange(e,{question:e.target.value})} } value={this.state.question} className="color-selector"/>
                            <h5 className="input-description">Questions text</h5>

                        </div>
                     

                        

                    </div>
                    <div className="colors-container">

                        <div className="input-container">
                            <input type="color" onChange={(e)=>{this.handleChange(e,{answersb:e.target.value})} } className="color-selector" value={this.state.answersb} />
                            <h5 className="input-description">Answers Background</h5>

                        </div>
                        <div className="input-container">
                            <input type="color" onChange={(e)=>{this.handleChange(e,{answersbor:e.target.value})} } className="color-selector" value={this.state.answersbor} />
                            <h5 className="input-description">Answers Border</h5>

                        </div>
                        

                    </div>
                     <div className="colors-container">

                     <div className="input-container">
                            <input type="color" onChange={(e)=>{this.handleChange(e,{answerst:e.target.value})} } className="color-selector"  value={this.state.answerst} />
                            <h5 className="input-description">Answers text</h5>
             

                        </div>

                    </div>

                    

                </div>

                <div className="bottom-customize">
                    <h4  className="preview-title" >Preview</h4>

                    <div className="container-preview" style={{background:this.state.background}}>
                        <hr className="questions-text" style={{background:this.state.question}}/>
                        <hr className="questions-text" style={{background:this.state.question}}/>
                        <hr className="questions-text" style={{background:this.state.question}}/>

                        <div className="preview-answers-container" style={{background:this.state.answersb,borderColor:this.state.answersbor}}>
                            <hr className="answers-text" style={{background:this.state.answerst}} />
                            <hr className="answers-text" style={{background:this.state.answerst}} />
                        </div>


                    </div>
                    
                </div>



        </div>
    )
   }


}

export default customize;