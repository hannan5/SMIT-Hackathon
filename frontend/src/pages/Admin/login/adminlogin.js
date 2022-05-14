import './adminlogin.css'
import { useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../../api'
import { useNavigate } from 'react-router-dom'
const AdminLogin = () => {
    const [info, setinfo] = useState('')
    const inputHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinfo({ ...info, [name]: value })
    }
    
    const Navigate = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(info.name)
        axios.post(`${BaseUrl}/adminlogin`, {
            AdminName: info.name,
            Password: info.password
        }).then((res) =>{ 
            if(res.data.status == 200){
                console.log(res)
                localStorage.setItem("adminlogin",res.data.user._id)
        localStorage.setItem("isLoggedIn", true);
        Navigate('/adminCourse')
            }
            else{
                console.log('erroe')
            }
            })
            .catch((e) => console.log(e))
    }
    return (
        <>
            <div className='admin-login-section'>
                <div className='login-div'>
                    <h3>Admin Login</h3>

                    <form onSubmit={SubmitHandler}>

                        <div style={{ marginTop: '60px' }}>
                            <input type='text' placeholder='UserName' name='name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Password' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <button type='submit'>
                                Login
                   </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default AdminLogin