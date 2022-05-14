import { useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../api'
import { useNavigate } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import './signin.css'
const Signin = (props) => {
    const [roll,setroll] = useState('')
    console.log(roll)
    const [info, setinfo] = useState('')
    const inputHandler = (e) => {
        // console.log(e)
        const name = e.target.name
        const value = e.target.value
        setinfo({ ...info, [name]: value })
        // console.log(name,value)
    }

    const Navigate = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(info)
        axios.post(`${BaseUrl}/login`, {
            RollNo: info.RollNo,
            Password: info.Password
        }).then((res) =>{ 
            if(res.data.status == 200){
                console.log(res)
                localStorage.setItem("userlogin",res.data.user._id)
        localStorage.setItem("userisLoggedIn", true);
        Navigate('/course')
        props.setlogin(true)
            }
            else{
                console.log('erroe')
            }
            })
            .catch((e) => console.log(e))
    }
    return (
        <> 
            <Modal
                {...props}
                show={props.show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/* Modal heading */}
                        <button
                            className="circle"

                        >
                            {/* <img alt='img' className="cross-img" src={cross} /> */}
                        </button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>SIGN IN</h4>

                    <div className="contentInput">
                        <form onSubmit={SubmitHandler}>
                            <div className="txt-field">
                                <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                                </div>
                                <input type='text' name='RollNo' placeholder='Roll No' onChange={(e) => inputHandler(e)} />
                            </div>
                        
                            <div className="txt-field">
                            <input type='password' name='Password' placeholder='Password' onChange={(e) => inputHandler(e)} />

                            </div>
                          
                            <div className="btns">
                                <button type="submit">SIGN IN</button>
                            </div>
                        </form>
                    </div>

                </Modal.Body>
            
            </Modal>
        </>
    )
}
export default Signin