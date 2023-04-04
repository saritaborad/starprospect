import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import Dash_1 from "../Images/dash-top-1.svg";
import Dash_2 from "../Images/dash-top-2.svg";
import Dash_3 from "../Images/dash-top-3.svg";
import Dash_4 from "../Images/dash-top-4.svg";
import Dash_5 from "../Images/dash-top-5.svg";
import Dash_6 from "../Images/dash-top-6.svg";
import calender from "../Images/calendar.svg";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import RtdDatatable from "./Common/DataTable/DataTable.js";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default function Dashboard() {

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
            value: "date",
            label: "Date",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "name",
            label: "Name",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "username",
            label: "Username",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "type",
            label: "Type",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "company_name",
            label: "Company Name",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "services_fee",
            label: "Services Fee",
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            value: "amount",
            label: "Amount",
            options: {
                filter: false,
                sort: false,
            },
        },
    ]);
    const [data, setData] = useState([
        {
            date: "10/10/2021",
            name: "John Deo",
            username: "@johndeo",
            type: "Coach",
            company_name: "Sports Club",
            services_fee: "$50.00",
            amount: "$1010.00",
        },
        {
            date: "10/10/2021",
            name: "John Deo",
            username: "@johndeo",
            type: "Coach",
            company_name: "Sports Club",
            services_fee: "$50.00",
            amount: "$1010.00",
        },
        {
            date: "10/10/2021",
            name: "John Deo",
            username: "@johndeo",
            type: "Coach",
            company_name: "Sports Club",
            services_fee: "$50.00",
            amount: "$1010.00",
        },
        {
            date: "10/10/2021",
            name: "John Deo",
            username: "@johndeo",
            type: "Coach",
            company_name: "Sports Club",
            services_fee: "$50.00",
            amount: "$1010.00",
        },
        {
            date: "10/10/2021",
            name: "John Deo",
            username: "@johndeo",
            type: "Coach",
            company_name: "Sports Club",
            services_fee: "$50.00",
            amount: "$1010.00",
        },
    ]);
    const [option, set_option] = useState({
        sizePerPage: 10,
        search: "",
        totalRecord: 0,
        page: 0,
        sort: "createdAt",
        order: "ASC",
        entries: false,
        checkbox: false,
    });

    // ================= Chart-1 ================= //
    const chart1 = {
        series: [
            {
                name: "Revuenue",
                data: [1000, 3000, 5000, 2000, 6000, 8000, 7000],
            },
        ],
        fill: {
            opacity: 1,
        },
        chart: {
            height: 350,
            type: "area",
            fontFamily: "Montserrat",
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "#6A58FB",
                            opacity: 0.1,
                        },
                        {
                            offset: 70,
                            color: "#4599F4",
                            opacity: 0.1,
                        },
                    ],
                ],
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 2,
            dashArray: 0,
            fill: {
                type: "gradient",
                gradient: {
                    type: "vertical",
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: "#6A58FB",
                                opacity: 1,
                            },
                            {
                                offset: 33,
                                color: "#4599F4",
                                opacity: 1,
                            },
                        ],
                    ],
                },
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

            axisBorder: {
                show: false,
            },

            axisTicks: {
                show: false,
            },

            labels: {
                show: true,
                style: {
                    fontSize: "12px",
                    fontWeight: 400,
                    cssclassName: "apexcharts-xaxis-label",
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: "12px",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    cssclassName: "apexcharts-xaxis-label",
                },
            },
        },
        grid: {
            show: true,
            borderColor: "rgba(35, 34, 34, .1)",
            strokeDashArray: 3,
            position: "back",
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    };

    // ================= Chart-2 ================= //
    const chart2 = {
        series: [70, 30],
        chart: {
            type: "radialBar",
            height: 290,
            fontFamily: "Montserrat",
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
        },
        stroke: {
            lineCap: 'round'
          },
        legend: {
            show: true,
            position: "right",
            floating: false,
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: 700,
            color: "#6C6A81",
            markers: {
                radius: 50,
            },

            itemMargin: {
                horizontal: 15,
                vertical: 5,
            },
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 30,
                    size: "70%",
                },
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "16px",
                    },
                    total: {
                        show: true,
                        label: "Total",
                        formatter: function (w) {
                            return 100;
                        },
                    },
                },
                
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
        labels: ["Website", "Pickup"],
        colors: ["#6A58FB", "#FF7049"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: "100%",
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    // ================= Chart-3 ================= //
    const chart3 = {
        series: [
            {
                name: "Total Deals",
                data: [2, 4, 4, 6, 3, 5, 4],
            },
        ],

        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 9,
                columnWidth: "20%",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "#6A58FB",
                            opacity: 0.1,
                        },
                        {
                            offset: 70,
                            color: "#4599F4",
                            opacity: 0.1,
                        },
                    ],
                ],
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            fontSize: "16px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            color: "#6C6A81",

            markers: {
                radius: 3,
            },

            itemMargin: {
                horizontal: 15,
                vertical: 0,
            },
        },
        stroke: {
            show: true,
            width: 3,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

            axisBorder: {
                show: false,
            },

            axisTicks: {
                show: false,
            },
        },

        yaxis: {
            categories: ["0", "2", "4", "8", "10", "12"],
            labels: {
                show: false,
            },
        },
        fill: {
            opacity: 1,
        },
        grid: {
            show: true,
            borderColor: "rgba(35, 34, 34, .1)",
            strokeDashArray: 3,
            position: "back",
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },

        responsive: [
            {
                breakpoint: 540,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                        },
                    },
                },
            },
            {
                breakpoint: 375,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 3,
                        },
                    },
                },
            },
        ],
    };

    return (
        <FrontendLayout PageDetails="dashboard">
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title d-flex align-items-center">
                                <h1>Dashboard</h1>
                                <div className="ms-auto position-relative">
                                    <DateRangePicker
                                        initialSettings={"today"}
                                    >
                                        <input className="form-control style-input-class ps-5" />
                                    </DateRangePicker>
                                    <div className="dash-cal">
                                        <img src={calender} alt="cal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row me-0 justify-content-center">
                                <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                    <div className="dash-top-box fix-span">
                                        <span className="dash-span-1">
                                            <img src={Dash_1} alt="1" />
                                        </span>
                                        <p>$ 1321.00</p>
                                        <div className="dash-top-box-info d-flex align-items-center">
                                            <bdi>Total Revenue</bdi>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                    <div className="dash-top-box fix-span">
                                        <span className="dash-span-2">
                                            <img src={Dash_2} alt="2" />
                                        </span>
                                        <p>1020</p>
                                        <div className="dash-top-box-info d-flex align-items-center">
                                            <bdi>Total Athelte</bdi>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                    <div className="dash-top-box fix-span">
                                        <span className="dash-span-3">
                                            <img src={Dash_3} alt="3" />
                                        </span>
                                        <p>785</p>
                                        <div className="dash-top-box-info d-flex align-items-center">
                                            <bdi>Total Business</bdi>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                    <div className="dash-top-box fix-span">
                                        <span className="dash-span-4">
                                            <img src={Dash_4} alt="4" />
                                        </span>
                                        <p>1050</p>
                                        <div className="dash-top-box-info d-flex align-items-center">
                                            <bdi>Total Fans</bdi>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                    <div className="dash-top-box fix-span">
                                        <span className="dash-span-5">
                                            <img src={Dash_5} alt="5" />
                                        </span>
                                        <p>540</p>
                                        <div className="dash-top-box-info d-flex align-items-center">
                                            <bdi>Total Coach</bdi>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
                                    <div className="dash-top-box fix-span">
                                        <span className="dash-span-6">
                                            <img src={Dash_6} alt="6" />
                                        </span>
                                        <p>102</p>
                                        <div className="dash-top-box-info d-flex align-items-center">
                                            <bdi>Total Parents</bdi>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 h-100">
                            <div className="row me-0">
                                <div className="col-xxl-7 mb-3 pe-0">
                                    <div className="white-bx-info">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-hdr-top">
                                                <span>Revuenue</span>
                                            </div>
                                            <div className="chart-main-part">
                                                <Chart options={chart1} series={chart1.series} type="area" height={300} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-5 mb-3 pe-0">
                                    <div className="white-bx-info">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-hdr-top">
                                                <span>Total Deals</span>
                                            </div>
                                            <div className="chart-main-part" id="responsive-chart">
                                                <Chart options={chart3} series={chart3.series} type="bar" height={300} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 h-100">
                            <div className="row me-0">
                                <div className="col-xxl-4 mb-3 pe-0 ">
                                    <div className="white-bx-info">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-hdr-top d-flex">
                                                <span>Sessions By Device</span>
                                            </div>
                                            <div className="chart-main-part radial-chart-dash">
                                                <Chart options={chart2} series={chart2.series} height={290} type="radialBar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-8 mb-3 pe-0">
                                    <div className="white-bx-info">
                                        <div className="dash-part-hdr">
                                            <div className=" dash-part-hdr-top d-flex align-items-center">
                                                <span>Revenue (Percentage)</span>
                                                <div className="ms-auto">
                                                    <Link to="#">See All</Link>
                                                </div>
                                            </div>
                                            <div className="mt-2 dash-table">
                                                <RtdDatatable data={data} columns={columns} option={option} needPagination={false} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
