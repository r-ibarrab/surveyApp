import React from 'react';
import './styles/rightnav.scss';

import Question from '../components/question';
class rightnav extends React.Component{

    constructor(props){
        super(props)
        this.state={
            ret:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
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
                                return <Question key={c} subkey={c} />
                            })
                        }
                       
                    </div>
                    

                </div>
                <h2 className="save-button">Save</h2>


    
    
    
    
    
    
            </div>
        )
    }



}

export default rightnav;