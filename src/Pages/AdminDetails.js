import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FrontendLayout from "../Components/layout/FrontendLayout";
import Profile from "../Images/profile-image.png";
import CheckTrue from "../Images/checktrue-icon.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function AdminDetails() {

    const [email, setemail] = useState("");
    const [f_name, setf_name] = useState("");
    const [l_name, setl_name] = useState("");
    const [userrole, setuserrole] = useState("");
    const [status, setstatus] = useState("");


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
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title">
                                <h1>Admins</h1>
                            </div>
                            <div className="white-bx-info">
                                <div className="set-box-head mb-4 pb-4">
                                    <div className="d-lg-flex d-block user-info-hdr align-items-center">
                                        <div className="prf-imags-info text-md-start text-center">
                                            <img src={Profile} alt="profile" />
                                        </div>

                                        <div className="ms-lg-3 mt-3 mt-lg-0 text-md-start text-center">
                                            <bdi>John Doe</bdi>
                                            <div className="user-role">Co-Admin</div>
                                            <div className="user-info">johndoe@gmail.com</div>
                                        </div>

                                        <div className="ms-lg-auto  mt-3 text-md-start text-center">
                                            <span className="user-status active">Active</span>
                                        </div>
                                    </div>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        email: email ? email : "",
                                        f_name: f_name ? f_name : "",
                                        l_name: l_name ? l_name : "",
                                        userrole: userrole ? userrole : "",
                                        status: status ? status : "",
                                    }}
                                    validationSchema={Yup.object({
                                        email: Yup.string().email("Enter valid Email address.").required("Email is required."),
                                        f_name: Yup.string().required("First name is required."),
                                        l_name: Yup.string().required("Last name is required."),
                                        userrole: Yup.string().required("Select User Role is required."),
                                        status: Yup.string().required("Select status is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm);
                                    }}
                                >
                                 {(runform) => (
                                <form>
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
                                            <input type="text" {...formAttr(runform, "email")} className="form-control style-input-class" name="email" placeholder="Johndeo123@gmail.com" />
                                            {errorContainer(runform, "email")}
                                        </div>
                                        <div className="col-md-4 pe-0 mb-3">
                                            <label className="form-lbl-class mb-2">User Role</label>
                                            <select class="form-select style-input-class" name='userrole' {...formAttr(runform, "userrole")}>
                                                <option selected>Admin </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {errorContainer(runform, "userrole")}
                                        </div>
                                        <div className="col-md-4 pe-0 mb-3">
                                            <label className="form-lbl-class mb-2">Status</label>
                                            <select class="form-select style-input-class" name="status" {...formAttr(runform, "status")}>
                                                <option selected>Active </option>
                                                <option value="1">Dactive</option>
                                            </select>
                                            {errorContainer(runform, "status")}
                                        </div>
                                        <div className="col-lg-6 mt-3 pe-0">
                                            <div className="tbl-custom-info-main">
                                                <bdi className="d-block">Role Permissions</bdi>
                                                <div className="tbl-custom-info">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped mb-0">
                                                            <tbody>
                                                                <tr>
                                                                    <th>Module</th>
                                                                    <th className="text-center">Read</th>
                                                                    <th className="text-center">Edit</th>
                                                                    <th className="text-center">Delete</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>Admin</td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Co-Admin</td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Staff</td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <img src={CheckTrue} className="" alt="check" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pe-0 py-3 fix-btn-size text-md-start text-center">
                                            <div className="line-bdr-tb"></div>
                                            <button type="button" className="btn-smart-comn3 text-white me-3">
                                                Delete User
                                            </button>
                                            <button type="button" className="btn-smart-comn text-white me-3">
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
