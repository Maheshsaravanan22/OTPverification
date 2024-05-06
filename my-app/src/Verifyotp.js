import {useState} from "react";
import logo from "./logo.jpg";
import Axios from "axios";
import {useNavigate} from "react-router-dom";


function Verifyotp({ phonenumber }) {
    const[otp,setOtp] = useState("");
    const [code, setCode] = useState("");

    const navigate = useNavigate();

    const handleclick1 = ({phoneNumber}) => {
        console.log(phoneNumber);
        Axios.post(`http://localhost:8000/otp`, { phoneNumber ,otp } )
        .then(res => {
          console.log("response", res);
        })
        navigate("/Home");
      }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            <img className="fit-image"src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div>
                            <h4>Sign in to Admin</h4>
                            <div>
                            <label>Mobile Number</label>
                            <br>
                            </br>
                            <input value={phonenumber} input="text"></input>
                            <br></br>
                            <br></br>
                            </div>
                            <div>
                            <label>Enter the OTP</label>
                            <br>
                            </br>
                            <input onChange={(e) =>setOtp(e.target.value)} type="number" value={otp}></input>
                            <br></br>
                            <br></br>
                            <button className="bg-primary text-light"  onClick={handleclick1}>Verify OTP</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Verifyotp;