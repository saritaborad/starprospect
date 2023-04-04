import React, { useState } from "react";
import Logo from "../../Images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function ForgotPassoword() {
    const [email, setemail] = useState("");

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
                                    <h1>Forgot Passoword?</h1>
                                    <p>Please enter your email address to recieve a verification code.</p>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        email: email ? email : "",
                                    }}
                                    validationSchema={Yup.object({
                                        email: Yup.string().email("Enter valid Email address.").required("Email is required."),
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
                                            <div className="col-12 mt-3 text-center">
                                                <button type="submit" className="btn-smart-comn w-100">
                                                    Send
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
