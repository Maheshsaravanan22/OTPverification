import { useState } from "react";
import logo from "./logo.jpg";
import Verifyotp from "./Verifyotp";
import Axios from "axios";


function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [codeSent, setCodeSent] = useState(false);
    const [error, setError] = useState('');



    const handleclick = () => {
        if (!phoneNumber) {
            alert("Please Enter the Phone Number");
            setCodeSent(false);
        }
        else {
            Axios.post(`http://localhost:8000/mobile`, { phoneNumber })
                .then(res => {
                    console.log("response", res);
                })
            setCodeSent(true);
        }
    }


    return (

        <div>
            {!codeSent ? (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div>
                                <img className="fit-image" src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div>
                                <h4>Sign in to Admin</h4>
                                <div>
                                    <label>Mobile Number</label>
                                    <br>
                                    </br>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} type="number" value={phoneNumber}></input>
                                    <br></br>
                                    <br></br>
                                    <button className="bg-primary text-light" onClick={handleclick}>Send OTP</button>
                                    <br>
                                    </br>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <Verifyotp phonenumber={phoneNumber} />
            )}
        </div>


    )
}

export default Login