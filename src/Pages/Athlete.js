import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import RtdDatatable from "./Common/DataTable/DataTable.js";
import { Dropdown, Modal } from "react-bootstrap";
import Profile from "../Images/profile-image.png";
import Arrow from "../Images/arrow-top.svg";

export default function Athlete() {
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
            value: "birthdate",
            label: "Birthdate",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "Niche",
            label: "niche",
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
            value: "amount",
            label: "Amount",
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
                                            <Dropdown.Item>View</Dropdown.Item>
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
            birthdate: "03/10/1995",
            Niche: "Animals, Art, Funny..",
            status: "",
            amount: "$ 150.00",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            birthdate: "03/10/1995",
            Niche: "Animals, Art, Funny..",
            status: "",
            amount: "$ 150.00",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            birthdate: "03/10/1995",
            Niche: "Animals, Art, Funny..",
            status: "",
            amount: "$ 150.00",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            email_address: "johndoe123@gmail.com",
            birthdate: "03/10/1995",
            Niche: "Animals, Art, Funny..",
            status: "",
            amount: "$ 150.00",
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
                                <h1>Athlete</h1>
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
        </FrontendLayout>
    );
}
