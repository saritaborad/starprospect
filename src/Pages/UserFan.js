import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import RtdDatatable from "./Common/DataTable/DataTable.js";
import { Dropdown, Modal } from "react-bootstrap";
import Profile from "../Images/profile-image.png";
import Arrow from "../Images/arrow-top.svg";

export default function UserFan() {
    const [newadmin, setNewAdmin] = React.useState(false);
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
            label: "Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "email",
            label: "Email Address",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "mobile_number",
            label: "Mobile Number",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "dob",
            label: "Date of Birth",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "location",
            label: "Location",
            options: {
                filter: false,
                sort: true,
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
                                            <Dropdown.Item onClick={() => setNewAdmin(true)}>View</Dropdown.Item>
                                        </li>
                                        <li>
                                            <Dropdown.Item>Delete</Dropdown.Item>
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
            email: "johndoe123@gmail.com",
            mobile_number: "+1 512-837-9686",
            dob: "08/12/1990",
            location: "Newyork, USA",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email: "johndoe123@gmail.com",
            mobile_number: "+1 512-837-9686",
            dob: "08/12/1990",
            location: "Newyork, USA",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email: "johndoe123@gmail.com",
            mobile_number: "+1 512-837-9686",
            dob: "08/12/1990",
            location: "Newyork, USA",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email: "johndoe123@gmail.com",
            mobile_number: "+1 512-837-9686",
            dob: "08/12/1990",
            location: "Newyork, USA",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email: "johndoe123@gmail.com",
            mobile_number: "+1 512-837-9686",
            dob: "08/12/1990",
            location: "Newyork, USA",
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
                                <h1>Fan</h1>
                                <div className="ms-auto custom-design-dropdwon">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown">
                                            <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.18126 5.17527C8.49179 4.86473 8.49179 4.34718 8.18126 4.01076L5.17942 0.982901C4.86889 0.672366 4.35133 0.672366 4.01491 0.982901L0.987052 4.01076C0.676517 4.3213 0.676517 4.83886 0.987052 5.17527C1.29759 5.4858 1.81514 5.4858 2.15156 5.17527L3.75599 3.57084V14.4396C3.75599 14.8795 4.11828 15.2677 4.58408 15.2677C5.024 15.2677 5.41217 14.9054 5.41217 14.4396V3.57084L7.0166 5.17527C7.17187 5.33054 7.37889 5.40817 7.58592 5.40817C7.79294 5.40817 8.02584 5.33054 8.18111 5.17527H8.18126Z" fill="#333333" />
                                                <path d="M15.013 10.817C14.7025 10.5065 14.1849 10.5065 13.8485 10.817L12.2441 12.4214V1.5527C12.2441 1.11278 11.8818 0.724609 11.416 0.724609C10.9502 0.750487 10.5879 1.11278 10.5879 1.57858V12.4473L8.98347 10.8429C8.8282 10.6876 8.62118 10.61 8.41415 10.61C8.20713 10.61 8.00011 10.6876 7.84484 10.8429C7.5343 11.1534 7.5343 11.671 7.84484 12.0074L10.8467 15.0092C11.1572 15.3197 11.6748 15.3197 12.0112 15.0092L15.013 12.0074C15.3236 11.671 15.3236 11.1534 15.013 10.817Z" fill="#333333" />
                                            </svg>
                                            All
                                            <img src={Arrow} alt="arrow" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>All</Dropdown.Item>
                                            <Dropdown.Item>Newest</Dropdown.Item>
                                            <Dropdown.Item>Oldest</Dropdown.Item>
                                            <Dropdown.Item>Active Users</Dropdown.Item>
                                            <Dropdown.Item>Deactive Users</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
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

            <Modal show={newadmin} onHide={() => setNewAdmin(false)} size="md" className="cust-comn-modal" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pt-0">
                    <div className="set-box-head border-0">
                        <div className="d-lg-flex d-block user-info-hdr align-items-center">
                            <div className="prf-imags-info text-md-start text-center">
                                <img src={Profile} alt="profile" />
                            </div>
                            <div className="ms-lg-3 mt-3 mt-lg-0 text-md-start text-center">
                                <bdi className="d-inline-block align-middle">
                                    John Doe
                                    <svg className="d-inline-block align-middle ms-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_linear_855_6238)" />
                                        <path d="M6.2859 9.86682L4.68669 8.09018L4 8.85306L6.2859 11.3926L11 6.15546L10.3133 5.39258L6.2859 9.86682Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_855_6238" x1="0.605469" y1="3.16011" x2="16.9034" y2="6.09001" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#6A58FB" />
                                                <stop offset="1" stopColor="#4599F4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </bdi>
                                <div className="user-role">@johndeo</div>
                            </div>
                            <div className="ms-lg-auto  mt-3 text-md-start text-center">
                                <span className="user-status active">Active</span>
                            </div>
                        </div>
                    </div>
                    <ul className="row row-cols-sm-2 row-cols-1 mt-4">
                        <li>
                            <div className="d-flex align-items-center info-dtls-text">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 16H2C0.89543 16 0 15.1046 0 14V1.913C0.0466084 0.842548 0.928533 -0.00101238 2 9.11911e-07H18C19.1046 9.11911e-07 20 0.895432 20 2V14C20 15.1046 19.1046 16 18 16ZM2 3.868V14H18V3.868L10 9.2L2 3.868ZM2.8 2L10 6.8L17.2 2H2.8Z" fill="#7B838A" />
                                </svg>
                                <bdi>johndoe123@gmail.com</bdi>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center info-dtls-text">
                                <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 22H2.75C1.64543 22 0.75 21.1046 0.75 20V2C0.75 0.89543 1.64543 0 2.75 0H12.75C13.8546 0 14.75 0.89543 14.75 2V20C14.75 21.1046 13.8546 22 12.75 22ZM2.75 2V20H12.75V2H2.75ZM7.75 19C7.19772 19 6.75 18.5523 6.75 18C6.75 17.4477 7.19772 17 7.75 17C8.30228 17 8.75 17.4477 8.75 18C8.75 18.5523 8.30228 19 7.75 19Z" fill="#7B838A" />
                                </svg>
                                <bdi>+1 512-837-9686</bdi>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex align-items-center info-dtls-text">
                                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 18.9998C5.73693 17.9224 4.56619 16.7413 3.5 15.4688C1.9 13.5578 8.83662e-07 10.7118 8.83662e-07 7.99981C-0.00141728 5.16735 1.70425 2.6132 4.32107 1.5292C6.93789 0.445211 9.95007 1.04505 11.952 3.04881C13.2685 4.35941 14.0059 6.14219 14 7.99981C14 10.7118 12.1 13.5578 10.5 15.4688C9.43382 16.7413 8.26307 17.9224 7 18.9998ZM7 2.99981C4.23995 3.00311 2.00331 5.23975 2 7.99981C2 9.16581 2.527 11.1848 5.035 14.1858C5.65314 14.9239 6.30902 15.6295 7 16.2998C7.69105 15.6303 8.34724 14.9257 8.966 14.1888C11.473 11.1838 12 9.16481 12 7.99981C11.9967 5.23975 9.76006 3.00311 7 2.99981ZM7 10.9998C5.34315 10.9998 4 9.65666 4 7.99981C4 6.34295 5.34315 4.99981 7 4.99981C8.65686 4.99981 10 6.34295 10 7.99981C10 8.79546 9.68393 9.55852 9.12132 10.1211C8.55871 10.6837 7.79565 10.9998 7 10.9998Z" fill="#7B838A" />
                                </svg>
                                <bdi>Newyork, USA</bdi>
                            </div>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </FrontendLayout>
    );
}
