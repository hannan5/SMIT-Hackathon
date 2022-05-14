import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BaseUrl } from "../../api"
import AdminHeader from "./AdminHeader"


const AddAdmin = () =>{
    const [info, setinfo] = useState('')
    const inputHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinfo({ ...info, [name]: value })
    }
    const SubmitHandler = (e) =>{
        e.preventDefault()
        axios.post(`${BaseUrl}/adminsignup`,{
            AdminName:info.name,
            Password:info.password,
        })
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <AdminHeader />

                           <div className='admin-login-section'>
                <div className='login-div'>
                    <h3>Add Admin</h3>
                    <form onSubmit={SubmitHandler}>

                        <div style={{ marginTop: '60px' }}>
                            <input type='text' placeholder='Admin Name' name='name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Password' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <button type='submit' style={{width:'175px'}}>
                                Add Admin
                   </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default AddAdmin