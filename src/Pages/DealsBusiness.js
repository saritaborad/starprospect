import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import RtdDatatable from "./Common/DataTable/DataTable.js";
import { Dropdown, Modal } from "react-bootstrap";
import Profile from "../Images/profile-image.png";
import Arrow from "../Images/arrow-top.svg";

export default function DealsBusiness() {
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
            label: "Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "company_name",
            label: "Company Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "deal_name",
            label: "Deal Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "worth",
            label: "Worth",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            value: "athlete_name",
            label: "Athlete Name",
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
            company_name: "Rentechdigital",
            deal_name: "Campaign One",
            worth: "$100",
            athlete_name: "Michale Doe",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            company_name: "Rentechdigital",
            deal_name: "Campaign One",
            worth: "$100",
            athlete_name: "Michale Doe",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            company_name: "Rentechdigital",
            deal_name: "Campaign One",
            worth: "$100",
            athlete_name: "Michale Doe",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            company_name: "Rentechdigital",
            deal_name: "Campaign One",
            worth: "$100",
            athlete_name: "Michale Doe",
            action: "",
        },
        {
            image: "",
            name: "John Doe",
            company_name: "Rentechdigital",
            deal_name: "Campaign One",
            worth: "$100",
            athlete_name: "Michale Doe",
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
                            <div className="comn-inr-title">
                                <h1>Business</h1>
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
