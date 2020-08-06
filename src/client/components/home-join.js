import React from 'react'
import './styles/join.scss'
import { Link } from 'react-router-dom'     


const homeJoin = (props)=>{



    return(
        <div className="join-div">

            <h1 className="join-title">{props.maintext}</h1>

            <input className="pin-code" type="text" placeholder={props.placeholderh}/>
            { props.buttontext ==='Submit' ? <Link className="Link-button" to="/app" onClick={()=>{props.submite()}}>{props.buttontext}</Link>
            :
            <button onClick={props.inputAction} className="pin-main-button">{props.buttontext}</button>
                
            }


        </div>
    )


}

export default homeJoin;