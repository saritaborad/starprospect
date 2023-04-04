import React, { useState } from "react";
import { Link } from "react-router-dom";
import FrontendLayout from "../Components/layout/FrontendLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import EyeOpen from "../Images/eye-open.svg";
import EyeClose from "../Images/eye-close.svg";

export default function ChangePassword() {
    const [password, setpassword] = useState("");
    const [showPassword, setshowPassword] = useState("password");
    const [IconPassword, setIconPassword] = useState(false);

    const [password2, setpassword2] = useState("");
    const [showPassword2, setshowPassword2] = useState("password");
    const [IconPassword2, setIconPassword2] = useState(false);

    const [password0, setpassword0] = useState("");
    const [showPassword0, setshowPassword0] = useState("password");
    const [IconPassword0, setIconPassword0] = useState(false);

    const submitFormData = (formData, resetForm) => {
        // const LoginDataPromise = new Promise((resolve, reject) => {});
        // LoginDataPromise.then((response) => {
        //     if (response) {
        //         if (response.status === 200) {
        //             toast.success(response.data.message);
        //         } else {
        //             toast.error(response.data.message);
        //         }
        //     }
        // });
        console.log(formData);
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

    const showpassword0 = () => {
        if (showPassword0 === "password") {
            setshowPassword0("text");
            setIconPassword0(true);
        } else {
            setshowPassword0("password");
            setIconPassword0(false);
        }
    };

    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title">
                                <h1>Change Password</h1>
                            </div>
                            <div className="white-bx-info">
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        password: password ? password : "",
                                        password2: password2 ? password2 : "",
                                        password0: password0 ? password0 : "",
                                    }}
                                    validationSchema={Yup.object({
                                        password: Yup.string().required("New password is required."),
                                        password2: Yup.string().required("Confirm password is required."),
                                        password0: Yup.string().required("Old password is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-md-4 mb-3">
                                                <label className="form-lbl-class mb-2">Old Password</label>
                                                <bdi className="d-block  password-class">
                                                    <div className="position-relative">
                                                        <input type={showPassword0} className="form-control style-input-class" {...formAttr(runform, "password0")} name="password0" placeholder="Enter your old password" />
                                                        <span className="eye-pwd bg-transparent" onClick={showpassword0}>
                                                            {IconPassword0 ? <img src={EyeClose} alt="" /> : <img src={EyeOpen} alt="" />}
                                                        </span>
                                                    </div>
                                                </bdi>
                                                {errorContainer(runform, "password0")}
                                            </div>
                                            <div className="col-md-4 mb-3">
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
                                            <div className="col-md-4 mb-3">
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
                                            <div className="col-12 pe-0 py-3 fix-btn-size text-md-start text-center">
                                                <Link to="/my-profile" className="btn-smart-comn2 text-white me-3">
                                                    Cancel
                                                </Link>
                                                <button type="submit" className="btn-smart-comn text-white me-3">
                                                    Save
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
        </FrontendLayout>
    );
}
