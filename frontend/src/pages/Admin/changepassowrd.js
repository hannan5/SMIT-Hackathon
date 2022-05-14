import AdminHeader from "./AdminHeader"

const ChangePassword = () =>{
    const inputHandler = ()=>{

    }
    return(
        <>
        <AdminHeader />

                 <div className='admin-login-section'>
                <div className='login-div'>
                    <h3>Chage Passowrd</h3>

                    <form >

                        <div style={{ marginTop: '60px' }}>
                            <input type='password' placeholder='Old Password' name='name' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <input type='changepassword' name='password' placeholder='New Password' onChange={(e) => inputHandler(e)} />
                        </div>
                        <div>
                            <button type='submit'>
                                Update
                   </button>
                        </div>
                    </form>

                </div>
            </div></>
    )
}
export default ChangePassword