import React ,{useState,useEffect} from 'react';
import SurveyItem from '../components/survey';
import './styles/surveymenu.scss';
import Maspng from '../resources/mas.png'

 const surveymenu = (props)=>{
         
   
    const [list,setlist] = useState([])


    const fetchData= async ()=>{
           
        const email = localStorage.getItem('email')

        const surveys = await fetch(`http://localhost:3000/api/user/surveys/${email}`)
        const newsurv =await surveys.json()
       
        console.log(newsurv)
        await setlist([...newsurv])


    }
    
    useEffect( ()=>{
       

        fetchData();



    

    },[])

   

    const logout = ()=>{
        localStorage.removeItem('islogged')
        localStorage.removeItem('email')
        
        console.log(props)

        window.location.reload()
    }

    const handleClick= async (e)=>{

        const newSurvey = {
            name:'newSurvey',
            usermail: localStorage.getItem('email'),
            questions: [],
            results: [],
            live:false,
            livenumber:'',
            customize:[]
        }
        console.log(newSurvey)
        
        const er = await fetch(`http://localhost:3000/api/survey`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newSurvey)
        })
        if(er.message === 'ok'){
            console.log(er)
        }

        fetchData()

    }
     

    return(
        <div className="surveymenu-list">
            <h2 className="surveymenu-title">Your surveys</h2>

           

        {
            list.map((data,c)=>{
                

                return (<SurveyItem key={c} title={data.name} id={data._id} />)


            })
        }

        <div onClick={handleClick} className="createsurvey">

        <img src={Maspng} alt=""/>
        <h4 >Create survey</h4>

        </div>

        <div onClick={logout} className="logout-button">
            <h5>Log out</h5>
        </div>


        </div>

    )


}

export default surveymenu;

