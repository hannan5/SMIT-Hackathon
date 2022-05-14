import { useState } from "react";
import { Modal } from "react-bootstrap";
import './signin.css'
const Signup = (props)=>{
    const [info, setInfo] = useState()
    const inputhandler = (e) => {
        // setinfo()
    }
    return(
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
                    <h4>SIGN Up</h4>

                    <div className="contentInput">
                        <form>
                            <div className="txt-field">
                                <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                                </div>
                                <input
                                    type="text"
                                    name="RollNumber"
                                    placeholder="Roll Number"
                                    style={{ padding: ' 10px 22px' }}
                                    onchange={(e) => inputhandler(e)}
                                />

                            </div>
                            <div className="txt-field">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="Password"
                                    onchange={(e) => inputhandler(e)}
                                />
                            </div>
                            <p
                                style={{
                                    color: "#FFBB46",
                                    textDecoration: "underline",
                                    textAlign: "left",
                                    cursor: "pointer",
                                }}

                            >
                                Forgot password?
                  </p>
                            <div className="btns">
                                <button type="submit">SIGN IN</button>
                            </div>
                        </form>
                    </div>

                </Modal.Body>
                <div className="line1"></div>
                <p
                    style={{
                        textAlign: "center",
                        fontFamily: "MADE TOMMY REGULAR",
                        fontSize: "15px",
                    }}
                >
                    don't have an account? <br />
                    <a
                        style={{
                            textDecoration: "underline",
                            color: "#FFBB46",
                            fontFamily: "MADE TOMMY MEDIUM",
                            cursor: "pointer",
                        }}
                    >
                        Sign Up
          </a>{" "}
          now!
        </p>
            </Modal>        </>
    )
}
export default Signup