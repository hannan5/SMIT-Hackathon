import axios from "axios"
import { useState } from "react"
import { BaseUrl } from "../../api"
import AdminHeader from "./AdminHeader"

const AddCourse = () => {
    const [info, setinfo] = useState('')
    const inputHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinfo({ ...info, [name]: value })
    }
    const SubmitHandler = (e) =>{
        e.preventDefault()
        console.log(info.Status)
        axios.post(`${BaseUrl}/addCourse`,{
            name:info.name,
            Duration:info.Duration,
            Price:info.Price,
            Status:info.Status,
        })
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }
    return (
        <>
        <AdminHeader />

            <div className='admin-login-section'>
                <div className='login-div'>
                    <h3>Add New Course</h3>
                    <form onSubmit={SubmitHandler}>

                        <div style={{ marginTop: '60px' }}>
                            <input type='text' placeholder='Course Name' name='name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <input type='text' name='Price' placeholder='Course Price' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <input type='text' name='Duration' placeholder='Course Duration' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <select onChange={(e) => inputHandler(e)} name='Status'>
                                <option>Open</option>
                                <option>Closed</option>
                            </select>
                        </div>

                        <div>
                            <button type='submit'>
                                ADD COURSE
                   </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default AddCourse