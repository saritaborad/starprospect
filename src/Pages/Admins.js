import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import RtdDatatable from "./Common/DataTable/DataTable.js";
import { Dropdown, Modal } from "react-bootstrap";
import Profile from "../Images/profile-image.png";
import CheckTrue from "../Images/checktrue-icon.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";


export default function Admins() {

    const [email, setemail] = useState("");
    const [f_name, setf_name] = useState("");
    const [l_name, setl_name] = useState("");
    const [userrole, setuserrole] = useState("");



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

    const [newadmin, setNewAdmin] = React.useState(false);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const [sizePerPage, setSizePerPage] = useState(10);
    const [defaultSorted, setDefaultSorted] = useState([
        {
            dataField: "id",
            order: "desc",
        },
    ]);
    const [columns, setColumns] = useState([
        {
            value: "image",
            label: "Image",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (data, i) => {
                    return <img src={Profile} className="tbl-image-fix" alt="profile" />;
                },
            },
        },
        {
            value: "name",
            label: "Name ",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "email_address",
            label: "Email Address",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "role",
            label: "Role",
            options: {
                filter: false,
                sort: true,
            },
        },

        {
            value: "status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (data, i) => {
                    return <span className="user-status active">Active</span>;
                },
            },
        },
        {
            value: "action",
            label: "Action",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (data, i) => {
                    return (
                        <div className="cust-drop-down">
                            <Dropdown drop="left">
                                <Dropdown.Toggle className="cust-drop-btn" id="dropdown">
                                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.00002 15.3333C0.987498 15.3333 0.166687 14.5125 0.166687 13.5C0.166687 12.4874 0.987498 11.6666 2.00002 11.6666C3.01254 11.6666 3.83335 12.4874 3.83335 13.5C3.83335 14.5125 3.01254 15.3333 2.00002 15.3333ZM2.00002 9.83329C0.987498 9.83329 0.166687 9.01248 0.166687 7.99996C0.166687 6.98744 0.987498 6.16663 2.00002 6.16663C3.01254 6.16663 3.83335 6.98744 3.83335 7.99996C3.83335 8.48619 3.6402 8.95251 3.29638 9.29632C2.95257 9.64014 2.48625 9.83329 2.00002 9.83329ZM2.00002 4.33329C0.987498 4.33329 0.166687 3.51248 0.166687 2.49996C0.166687 1.48744 0.987498 0.666626 2.00002 0.666626C3.01254 0.666626 3.83335 1.48744 3.83335 2.49996C3.83335 2.98619 3.6402 3.45251 3.29638 3.79632C2.95257 4.14014 2.48625 4.33329 2.00002 4.33329Z" fill="#6C6A81" />
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <ul>
                                        <li>
                                            <Dropdown.Item href="/admin-details">View</Dropdown.Item>
                                        </li>
                                        <li>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </li>
                                        <li>
                                            <Dropdown.Item>Block</Dropdown.Item>
                                        </li>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    );
                },
            },
        },
    ]);
    const [data, setData] = useState([
        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            role: "Admin",
            status: "",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            role: "Co-Admin",
            status: "",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            role: "Staff",
            status: "",
            action: "",
        },

        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            role: "Admin",
            status: "",
            action: "",
        },
    ]);
    const [option, set_option] = useState({
        sizePerPage: 10,
        search: "",
        totalRecord: 100,
        page: 0,
        sort: "createdAt",
        order: "ASC",
        entries: true,
        checkbox: true,
    });
    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title d-flex align-items-center">
                                <h1>Admins</h1>
                                <div className="ms-auto btn-smart-comn" onClick={() => setNewAdmin(true)}>
                                    Add Admin
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="table-custom-info">
                                    <RtdDatatable data={data} columns={columns} option={option} needPagination={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={newadmin} onHide={() => setNewAdmin(false)} size="lg" className="cust-comn-modal" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className="">
                    <div className="cust-comn-modal-hdr">
                        <p>Add New Admin</p>
                    </div>
                </Modal.Header>
                <Modal.Body >
                        <Formik
                            enableReinitialize
                            initialValues={{
                                email: email ? email : "",
                                f_name: f_name ? f_name : "",
                                l_name: l_name ? l_name : "",
                                userrole: userrole ? userrole : "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string().email("Enter valid Email address.").required("Email is required."),
                                f_name: Yup.string().required("First name is required."),
                                l_name: Yup.string().required("Last name is required."),
                               userrole: Yup.string().required("Select User Role is required."),
                            })}
                            onSubmit={(formData, { resetForm }) => {
                                submitFormData(formData, resetForm);
                            }}
                        >
                         {(runform) => (
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-lbl-class mb-2">First Name</label>
                                        <input type="text" {...formAttr(runform, "f_name")} className="form-control style-input-class" name="f_name" placeholder="John" />
                                        {errorContainer(runform, "f_name")}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-lbl-class mb-2">Last Name</label>
                                        <input type="text" {...formAttr(runform, "l_name")} className="form-control style-input-class" name="l_name" placeholder="Deo" />
                                        {errorContainer(runform, "l_name")}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-lbl-class mb-2">Email Address</label>
                                        <input type="email" {...formAttr(runform, "email")} className="form-control style-input-class" name="email" placeholder="nickdeo@gmail.com" />
                                        {errorContainer(runform, "email")}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-lbl-class mb-2">User Role</label>
                                        <select class="form-select style-input-class" {...formAttr(runform, "userrole")} name='userrole'>
                                            <option>Admin </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        {errorContainer(runform, "userrole")}
                                    </div>

                                    <div className="col-12 mt-3">
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

                                    <div className="col-12 text-center mt-5 mb-4">
                                        <div className="ms-auto btn-smart-comn px-5">Add Admin</div>
                                    </div>
                                </div>
                            </form>
                         )}
                        </Formik>
                </Modal.Body>
            </Modal>
        </FrontendLayout>
    );
}
