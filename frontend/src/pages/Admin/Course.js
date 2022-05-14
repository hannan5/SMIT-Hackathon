import Header from '../../component/header/header'
import './../Courses/course.css'
import PYthon from '../../images/download.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../api'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'
const AdminCourses = () => {
    const [Getcourse, setGetCourse] = useState([])
    // const course = [{
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },
    // {
    //     name:'Python',
    //     price:3500,
    //     img:PYthon
    // },]
    const getCourse = async () => {
        await axios.get(`http://localhost:4000/api/getCourse`).
            then((res) => setGetCourse(res.data.res))
            .catch((e) => console.log(e))
    }
    useEffect(() => {
        getCourse()
        console.log(BaseUrl)
    }, [])
    return (
        <>
            <AdminHeader />
            <div className='main-course-section'>
                <h2>New Courses</h2>

                <div className='all-courses'>
                    {Getcourse.map((data) => {
                        return (
                            <>
                                <div className='product web-active'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4>{data.name}</h4>
                                        <h5>{data.Duration} Months</h5>
                                    </div>
                                    <h3>RS {data.Price}</h3>
                                    <div className='productimg'>
                                        <img src={PYthon} alt={'data?.head '} className='image' />
                                    </div>
                                    <div className='enroll-div'>
                                        <Link to={`/EditCourse/${data._id}`}>
                                        <button>Edit Course</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default AdminCourses