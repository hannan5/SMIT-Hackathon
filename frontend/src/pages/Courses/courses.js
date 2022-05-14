import Header from '../../component/header/header'
import './course.css'
import PYthon from '../../images/download.jpg'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {BaseUrl} from '../../api'
const Courses = () =>{
    const [Getcourse, setGetCourse] = useState([])

    const getCourse =async () =>{
       await axios.get(`http://localhost:4000/api/getCourse`).
       then((res)=>setGetCourse(res.data.res))
       .catch((e)=>console.log(e))
    }
    useEffect(()=>{
        getCourse()
        console.log(BaseUrl)
    },[])
    return(
        <>
        <Header/>
        <div className='main-course-section'>
        <h2>New Courses</h2>

        <div className='all-courses'>
            {Getcourse.map((data)=>{
                return(
                    <>
                     <div className='product web-active'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>{data.name}</h4>
                </div>
                <h3>RS {data.Price}</h3>
                <div className='productimg'>
                  <img src={PYthon} alt={'data?.head '} className='image' />             
                </div>
                {data.Status == 'Open'?
                                <div className='enroll-div'>
                                <button>Enroll</button>
                            </div>
                :''}

              </div>
                    </>
                )
            })}
       
        </div>
        </div>
        </>
    )
}
export default Courses