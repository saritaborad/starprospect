import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import Profile from "../Images/news-pro-img.png";
import Main_box from "../Images/latest-box.png";
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Newsfeed() {
    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title">
                                <h1>Reported Post</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="cust-main-box mb-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="latest-box-prof d-flex align-items-center">
                                                <img src={Profile} alt="news profile" />
                                                <div className="ms-3 text-start">
                                                    <span>AP Top 26</span>
                                                    <p>
                                                        Starprospect<bdi></bdi>10h
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 comn-gray-bg text-center p-0 mt-3">
                                            <div>
                                                <img src={Main_box} alt="error" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className='col-12 mt-3'>
                                            <div className='latest-box-rght-txt h-100'>
                                                <div className='latest-box-body'>
                                                    <p><span>@JohnDoeAP</span></p>
                                                    <p>March Madness | 2022 NCAA Tournament</p>
                                                    <p className='latest-box-fix-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                                                    <span>apnews.com</span>
                                                </div>
                                                <div className='my-3 latest-box-ftr d-flex align-items-cente pt-2'>
                                                    <span className='d-flex'>
                                                        <bdi>15 Likes</bdi>
                                                    </span>
                                                    <span className='ps-3'>10 Comments</span>
                                                    <div className='ms-auto'>
                                                        <span className='me-3'>
                                                            <svg width="19" height="19" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 5H14V8L18 4L14 0V3H2V9H4V5ZM14 15H4V12L0 16L4 20V17H16V11H14V15Z" fill="#7B838A" />
                                                            </svg>
                                                        </span>
                                                        <span className='me-3'>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.4998 22.0001C16.4178 22.0126 15.3922 21.5182 14.7281 20.6638C14.064 19.8095 13.8378 18.6936 14.1168 17.6481L7.85685 14.0701C6.77513 15.0611 5.18953 15.2709 3.88733 14.5952C2.58514 13.9195 1.84372 12.5023 2.03121 11.0473C2.21871 9.59226 3.29518 8.40932 4.72612 8.08583C6.15707 7.76234 7.6377 8.3672 8.43285 9.60008L14.1158 6.35108C14.0423 6.07327 14.0034 5.78744 13.9998 5.50008C13.9855 3.8268 15.1476 2.37322 16.7831 2.0189C18.4185 1.66458 20.078 2.50683 20.7575 4.036C21.437 5.56517 20.9498 7.36131 19.5908 8.33759C18.2318 9.31387 16.3741 9.20217 15.1418 8.07008L8.99085 11.5851C8.98476 11.8444 8.94851 12.1021 8.88285 12.3531L15.1418 15.9301C16.2941 14.8726 18.0086 14.7094 19.3397 15.5304C20.6708 16.3514 21.2945 17.9568 20.8667 19.4611C20.4389 20.9654 19.0638 22.0024 17.4998 22.0001ZM17.4998 17.0001C16.6714 17.0001 15.9998 17.6717 15.9998 18.5001C15.9998 19.3285 16.6714 20.0001 17.4998 20.0001C18.3283 20.0001 18.9998 19.3285 18.9998 18.5001C18.9998 17.6717 18.3283 17.0001 17.4998 17.0001ZM5.49985 10.0001C4.67142 10.0001 3.99985 10.6717 3.99985 11.5001C3.99985 12.3285 4.67142 13.0001 5.49985 13.0001C6.32827 13.0001 6.99985 12.3285 6.99985 11.5001C6.99985 10.6717 6.32827 10.0001 5.49985 10.0001ZM17.4998 4.00008C16.6714 4.00008 15.9998 4.67165 15.9998 5.50008C15.9998 6.32851 16.6714 7.00008 17.4998 7.00008C18.3283 7.00008 18.9998 6.32851 18.9998 5.50008C18.9998 4.67165 18.3283 4.00008 17.4998 4.00008Z" fill="#7B838A" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 '>
                                            <div className='like-modal-body'>
                                                <ul>
                                                    <li>
                                                        <div className='d-flex align-items-center'>
                                                            <div className="latest-box-prof">
                                                                <img src={Profile} alt="news profile" />
                                                            </div>
                                                            <div className='w-100'>
                                                                <div className='ms-3 d-flex align-items-center'>
                                                                    <p className='mb-2'><span>Adam Clark</span> Lorem Ipsum has been the industry's</p>

                                                                    <div className='ms-3 ms-auto'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className='d-sm-flex align-items-center ms-3 mt-1'>
                                                                    <div className='me-4 d-flex align-items-center my-1 my-sm-0'><bdi>12 Likes</bdi>
                                                                        <div className='ms-4'><p className='mb-0'><span>Reply</span><bdi className='ms-2'>1</bdi></p></div>
                                                                    </div>
                                                                    <div className='ms-sm-auto '>
                                                                        <p className='mb-0 report-date'><bdi className="me-2 me-sm-4">1 Reported</bdi><span>05/04/2022</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-12 ps-5'>
                                            <div className='like-modal-body'>
                                                <ul>
                                                    <li>
                                                        <div className='d-flex align-items-center'>
                                                            <div className="latest-box-prof">
                                                                <img src={Profile} alt="news profile" />
                                                            </div>
                                                            <div className='w-100'>
                                                                <div className='ms-3 d-flex align-items-center'>
                                                                    <p className='mb-2'><span>Adam Clark</span> Lorem Ipsum has been the industry's</p>

                                                                    <div className='ms-3 ms-auto'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className='d-sm-flex align-items-center ms-3 mt-1'>
                                                                    <div className='me-4 d-flex align-items-center my-1 my-sm-0'><bdi>12 Likes</bdi>
                                                                    </div>
                                                                    <div className='ms-sm-auto '>
                                                                        <p className='mb-0 report-date'><bdi className="me-2 me-sm-4">1 Reported</bdi><span>05/04/2022</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-12 '>
                                            <div className='like-modal-body'>
                                                <ul>
                                                    <li>
                                                        <div className='d-flex align-items-center'>
                                                            <div className="latest-box-prof">
                                                                <img src={Profile} alt="news profile" />
                                                            </div>
                                                            <div className='w-100'>
                                                                <div className='ms-3 d-flex align-items-center'>
                                                                    <p className='mb-2'><span>Adam Clark</span> Lorem Ipsum has been the industry's</p>

                                                                    <div className='ms-3 ms-auto'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className='d-sm-flex align-items-center ms-3 mt-1'>
                                                                    <div className='me-4 d-flex align-items-center my-1 my-sm-0'><bdi>12 Likes</bdi>
                                                                        <div className='ms-4'><p className='mb-0'><span>Reply</span><bdi className='ms-2'>1</bdi></p></div>
                                                                    </div>
                                                                    <div className='ms-sm-auto '>
                                                                        <p className='mb-0 report-date'><bdi className="me-2 me-sm-4">1 Reported</bdi><span>05/04/2022</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-12 '>
                                            <div className='like-modal-body'>
                                                <ul>
                                                    <li>
                                                        <div className='d-flex align-items-center'>
                                                            <div className="latest-box-prof">
                                                                <img src={Profile} alt="news profile" />
                                                            </div>
                                                            <div className='w-100'>
                                                                <div className='ms-3 d-flex align-items-center'>
                                                                    <p className='mb-2'><span>Adam Clark</span> Lorem Ipsum has been the industry's</p>

                                                                    <div className='ms-3 ms-auto'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className='d-sm-flex align-items-center ms-3 mt-1'>
                                                                    <div className='me-4 d-flex align-items-center my-1 my-sm-0'><bdi>12 Likes</bdi>
                                                                        <div className='ms-4'><p className='mb-0'><span>Reply</span><bdi className='ms-2'>1</bdi></p></div>
                                                                    </div>
                                                                    <div className='ms-sm-auto '>
                                                                        <p className='mb-0 report-date'><bdi className="me-2 me-sm-4">1 Reported</bdi><span>05/04/2022</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-12  mb-3">
                                        <div className="dash-top-box">
                                            <div className="news-right p-2">
                                                <span>
                                                    Give permission to user to athlete to delete report comments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="dash-top-box ">
                                            <div className="news-right p-2 ">
                                                <span>
                                                    Block User
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="dash-top-box ">
                                            <div className="news-right p-2 ">
                                                <span>
                                                    Block Reporter
                                                </span>
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
