import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import EyeOpen from "../../Images/eye-open.svg";
import EyeClose from "../../Images/eye-close.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setshowPassword] = useState("password");
    const [IconPassword, setIconPassword] = useState(false);

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
                                    <h1>Sign In</h1>
                                    <p>Provide your sign in details to access your account</p>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        email: email ? email : "",
                                        password: password ? password : "",
                                    }}
                                    validationSchema={Yup.object({
                                        email: Yup.string().email("Enter valid Email address.").required("Email is required."),
                                        password: Yup.string().required("Password is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-12 mb-3">
                                                <label className="form-lbl-class mb-2">Email Address</label>
                                                <input type="email" {...formAttr(runform, "email")} className="form-control style-input-class" name="email" placeholder="Johndoe@gmail.com" />
                                                {errorContainer(runform, "email")}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-lbl-class mb-2">Password</label>
                                                <bdi className="d-block  password-class">
                                                    <div className="position-relative">
                                                        <input id="toggle-pass" type={showPassword} className="form-control style-input-class" {...formAttr(runform, "password")} name="password" placeholder="Enter your new password" />
                                                        <span id="eye-pwd" className="eye-pwd bg-transparent" onClick={showpassword}>
                                                            {IconPassword ? <img src={EyeClose} alt="" /> : <img src={EyeOpen} alt="" />}
                                                        </span>
                                                    </div>
                                                </bdi>
                                                {errorContainer(runform, "password")}
                                            </div>
                                            <div className="col-12 mb-3 text-end">
                                                <Link to="/forgot-passoword" className="d-inline-block form-link-style">
                                                    Forgot Password ?
                                                </Link>
                                            </div>
                                            <div className="col-12 mt-3 text-center">
                                                <button type="submit" className="btn-smart-comn w-100">
                                                    Sign In
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
