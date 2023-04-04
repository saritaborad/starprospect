import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import EyeOpen from "../../Images/eye-open.svg";
import EyeClose from "../../Images/eye-close.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function ResetPassword() {
    const [password, setpassword] = useState("");
    const [showPassword, setshowPassword] = useState("password");
    const [IconPassword, setIconPassword] = useState(false);

    const [password2, setpassword2] = useState("");
    const [showPassword2, setshowPassword2] = useState("password");
    const [IconPassword2, setIconPassword2] = useState(false);

    const submitFormData = (formData, resetForm) => {
        const LoginDataPromise = new Promise((resolve, reject) => {});

        LoginDataPromise.then((response) => {
            if (response) {
                if (response.status === 200) {
                    toast.success(response.data.message);
                } else {
                    toast.error(response.data.message);
                }
            }
        });
    };

    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });

    const showpassword = () => {
        if (showPassword === "password") {
            setshowPassword("text");
            setIconPassword(true);
        } else {
            setshowPassword("password");
            setIconPassword(false);
        }
    };

    const showpassword2 = () => {
        if (showPassword2 === "password") {
            setshowPassword2("text");
            setIconPassword2(true);
        } else {
            setshowPassword2("password");
            setIconPassword2(false);
        }
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
                                    <h1>Reset Password</h1>
                                    <p>Your new paasword must be different from previous used passowrd.</p>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        password: password ? password : "",
                                        password2: password2 ? password2 : "",
                                    }}
                                    validationSchema={Yup.object({
                                        password: Yup.string().required("New password is required."),
                                        password2: Yup.string().required("Confirm password is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-12 mb-3">
                                                <label className="form-lbl-class mb-2">New Password</label>
                                                <bdi className="d-block  password-class">
                                                    <div className="position-relative">
                                                        <input type={showPassword} className="form-control style-input-class" {...formAttr(runform, "password")} name="password" placeholder="Enter your new password" />
                                                        <span className="eye-pwd bg-transparent" onClick={showpassword}>
                                                            {IconPassword ? <img src={EyeClose} alt="" /> : <img src={EyeOpen} alt="" />}
                                                        </span>
                                                    </div>
                                                </bdi>
                                                {errorContainer(runform, "password")}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-lbl-class mb-2">Confirm New Password</label>
                                                <bdi className="d-block  password-class">
                                                    <div className="position-relative">
                                                        <input type={showPassword2} className="form-control style-input-class" {...formAttr(runform, "password2")} name="password2" placeholder="Enter your confirm password" />
                                                        <span className="eye-pwd bg-transparent" onClick={showpassword2}>
                                                            {IconPassword2 ? <img src={EyeClose} alt="" /> : <img src={EyeOpen} alt="" />}
                                                        </span>
                                                    </div>
                                                </bdi>
                                                {errorContainer(runform, "password2")}
                                            </div>
                                            <div className="col-12 mt-3 text-center">
                                                <button type="submit" className="btn-smart-comn w-100">
                                                    Reset Password
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
