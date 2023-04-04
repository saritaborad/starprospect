import React, { useState } from "react";
import Logo from "../../Images/logo.svg";
import OtpInput from "react-otp-input";
import { FormControl } from "react-bootstrap";

export default function OtpVerification() {
    const [otp, setOtp] = useState("");

    const onhandlechange = (otp) => {
        setOtp(otp);
    };

    return (
        <div className="container-fluid login-bg-image">
            <div className="row align-items-center h-100">
                <div className="col-12">
                    <div className="log-box-main py-3">
                        <div className="log-box-main-scroll">
                            <div className="m-auto login-main-box user-sign-form white-bx-info">
                                <div className="w-100 text-center mb-4">
                                    <img src={Logo} alt="logo" className="img-fluid" />
                                </div>
                                <div className="text-center login-text-top pb-2">
                                    <h1>OTP Verification</h1>
                                    <p>Please enter the 6 digit code send to johndeo@gmail.com</p>
                                </div>
                                <div>
                                    <div className="otp-custom-info">
                                        <OtpInput value={otp} onChange={onhandlechange} numInputs={6} inputStyle={"form-control style-input-class w-100"} />
                                    </div>
                                    <div className="my-3 text-center rcv-code-text">
                                        If you didn’t receive a code?
                                        <button className="form-link-style border-0 p-0 bg-transparent ms-1"> Resend</button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <button type="submit" className="btn-smart-comn w-100">
                                            Verify
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
