import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FrontendLayout from "../Components/layout/FrontendLayout";
import Profile from "../Images/profile-image.png";
import Camara from "../Images/camera-icon.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

export default function EditProfile(props) {
    const [email, setemail] = useState("");
    const [f_name, setf_name] = useState("");
    const [l_name, setl_name] = useState("");
    const [phone, setphone] = useState("");
    const [country, setcountry] = useState();

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

    useEffect(() => {
        axios.get("https://ipapi.co/json/").then((res) => {
            setcountry(res.data.country.toLowerCase());
        });
    }, [props]);

    const PhonehandleOnChange = (value) => {
        setphone(value);
    };

    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title">
                                <h1>Edit Profile</h1>
                            </div>
                            <div className="white-bx-info">
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        email: email ? email : "",
                                        f_name: f_name ? f_name : "",
                                        l_name: l_name ? l_name : "",
                                        phone: phone ? phone : "",
                                    }}
                                    validationSchema={Yup.object({
                                        email: Yup.string().email("Enter valid Email address.").required("Email is required."),
                                        f_name: Yup.string().required("First name is required."),
                                        l_name: Yup.string().required("Last name is required."),
                                        phone: Yup.string().required("Phone number is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form onSubmit={runform.handleSubmit}>
                                            <div className="avatar-file-upload-cust text-md-start text-center">
                                                <div className="avatar-upload">
                                                    <div className="avatar-edit">
                                                        <input type="file" id="imageUpload" name="imageUpload" accept=".png, .jpg, .jpeg" />
                                                        <label htmlFor="imageUpload">
                                                            <img src={Camara} alt="" />
                                                        </label>
                                                    </div>
                                                    <div className="avatar-preview">
                                                        <div id="imagePreview">
                                                            <img src={Profile} className="w-100 h-100 rounded-circle" alt="profile" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="prf-text-info py-3">Personal Info</div>
                                            <div className="row me-0">
                                                <div className="col-md-4 pe-0 mb-3">
                                                    <lable className="form-lbl-class mb-2">First Name</lable>
                                                    <input type="text" {...formAttr(runform, "f_name")} className="form-control style-input-class" name="f_name" placeholder="John" />
                                                    {errorContainer(runform, "f_name")}
                                                </div>
                                                <div className="col-md-4 pe-0 mb-3">
                                                    <lable className="form-lbl-class mb-2">Last Name</lable>
                                                    <input type="text" {...formAttr(runform, "l_name")} className="form-control style-input-class" name="l_name" placeholder="Deo" />
                                                    {errorContainer(runform, "l_name")}
                                                </div>
                                                <div className="col-md-4 pe-0 mb-3">
                                                    <lable className="form-lbl-class mb-2">Email Address</lable>
                                                    <input type="email" {...formAttr(runform, "email")} className="form-control style-input-class" name="email" placeholder="Johndoe@gmail.com" />
                                                    {errorContainer(runform, "email")}
                                                </div>
                                                <div className="col-md-4 pe-0 mb-3">
                                                    <lable className="form-lbl-class mb-2">Mobile Number</lable>
                                                    <div className="d-block position-relative tel-input-info-new">
                                                        <PhoneInput
                                                            inputExtraProps={{
                                                                inputClass: "form-control style-input-class",
                                                                name: "phone",
                                                                required: true,
                                                                autoFocus: true,
                                                            }}
                                                            country={country}
                                                            onChange={PhonehandleOnChange}
                                                        />
                                                        {errorContainer(runform, "phone")}
                                                    </div>
                                                </div>
                                                <div className="col-12 pe-0 py-3 fix-btn-size text-md-start text-center">
                                                    <div className="line-bdr-tb"></div>
                                                    <Link to="/my-profile" className="btn-smart-comn2 text-white me-3">
                                                        Cancel
                                                    </Link>
                                                    <button type="submit" className="btn-smart-comn text-white me-3">
                                                        Save
                                                    </button>
                                                </div>
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
