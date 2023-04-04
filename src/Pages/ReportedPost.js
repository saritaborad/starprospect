import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import Arrow from "../Images/arrow-top.svg";
import Post_top from "../Images/post-top-1.png";
import Reported from "../Images/reported-post.svg";

export default function ReportedPost() {
    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title d-flex align-items-center">
                                <h1>Reported Post</h1>
                                <div className="ms-auto custom-design-dropdwon">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown">
                                            <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.18126 5.17527C8.49179 4.86473 8.49179 4.34718 8.18126 4.01076L5.17942 0.982901C4.86889 0.672366 4.35133 0.672366 4.01491 0.982901L0.987052 4.01076C0.676517 4.3213 0.676517 4.83886 0.987052 5.17527C1.29759 5.4858 1.81514 5.4858 2.15156 5.17527L3.75599 3.57084V14.4396C3.75599 14.8795 4.11828 15.2677 4.58408 15.2677C5.024 15.2677 5.41217 14.9054 5.41217 14.4396V3.57084L7.0166 5.17527C7.17187 5.33054 7.37889 5.40817 7.58592 5.40817C7.79294 5.40817 8.02584 5.33054 8.18111 5.17527H8.18126Z"
                                                    fill="#333333"
                                                />
                                                <path
                                                    d="M15.013 10.817C14.7025 10.5065 14.1849 10.5065 13.8485 10.817L12.2441 12.4214V1.5527C12.2441 1.11278 11.8818 0.724609 11.416 0.724609C10.9502 0.750487 10.5879 1.11278 10.5879 1.57858V12.4473L8.98347 10.8429C8.8282 10.6876 8.62118 10.61 8.41415 10.61C8.20713 10.61 8.00011 10.6876 7.84484 10.8429C7.5343 11.1534 7.5343 11.671 7.84484 12.0074L10.8467 15.0092C11.1572 15.3197 11.6748 15.3197 12.0112 15.0092L15.013 12.0074C15.3236 11.671 15.3236 11.1534 15.013 10.817Z"
                                                    fill="#333333"
                                                />
                                            </svg>
                                            All
                                            <img src={Arrow} alt="arrow" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>All</Dropdown.Item>
                                            <Dropdown.Item>Newest</Dropdown.Item>
                                            <Dropdown.Item>Oldest</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="posts">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="comn-tab-sec  position-relative">
                                        <Nav variant="pills">
                                            <Nav.Item>
                                                <Nav.Link eventKey="posts">Posts</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="comments">Comments</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="posts">
                                        <div className="col-12 cust-repo-post">
                                            <div className="row mt-4">
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="comments">
                                    <div className="col-12 cust-repo-post">
                                            <div className="row mt-4">
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-3 cust-col-class pe-0">
                                                    <div className="post-box-bg">
                                                        <div className="post-top-img">
                                                            <img src={Post_top} alt="post top" className=" img-fluid" />
                                                        </div>
                                                        <div className="post-box-btm">
                                                            <p className="mb-0">Reported by 20 people</p>
                                                            <div className="mt-2 d-flex">
                                                                <div>
                                                                    <img src={Reported} alt="post" />
                                                                </div>
                                                                <div className="ms-2">
                                                                    <div className="d-flex align-items-center">
                                                                        <span>AP Top 26</span>
                                                                        <span className="ms-2">
                                                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M6.5 11.9166C3.50982 11.9133 1.08662 9.49011 1.08334 6.49993V6.39159C1.14288 3.41488 3.59374 1.04424 6.57078 1.08374C9.54783 1.12324 11.9349 3.55807 11.9155 6.53532C11.896 9.51256 9.47731 11.916 6.5 11.9166ZM4.01375 6.27784L3.25 7.04159L5.41667 9.20826L9.75 4.87493L8.98625 4.10576L5.41667 7.67534L4.01375 6.27784Z"
                                                                                    fill="#00ACC8"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <bdi>Starprospect</bdi>
                                                                        <bdi>
                                                                            <bdi className="mx-1">
                                                                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                                </svg>
                                                                            </bdi>
                                                                            20h
                                                                        </bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
