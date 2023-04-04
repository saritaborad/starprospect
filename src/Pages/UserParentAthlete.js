import React from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import Profile from "../Images/profile-image.png";

export default function UserParentAthlete() {
    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title d-sm-flex align-items-center">
                                <h1>Parent</h1>
                                <div className="ms-auto mt-3 mt-sm-0 text-center">
                                    <button type="button" className="btn-gray-info ms-sm-3 mx-sm-0 mx-2 d-inline-flex align-items-center">
                                        <svg className="me-2" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="white" />
                                        </svg>
                                        Delete User
                                    </button>
                                    <button type="button" className="btn-red-info ms-sm-3 mx-sm-0 mx-2 d-inline-flex align-items-center">
                                        <svg className="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.37 6.45 18 8.15 18 10C18 14.42 14.42 18 10 18Z" fill="white" />
                                        </svg>
                                        Block User
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row me-0">
                                <div className="col-xxl-4 col-lg-5 pe-0">
                                    <div className="white-bx-info">
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
                                                <div className="d-flex align-items-start info-dtls-text">
                                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 4H15V2C15 0.9 14.1 0 13 0H7C5.9 0 5 0.9 5 2V4H2C0.9 4 0 4.9 0 6V16H20V6C20 4.9 19.1 4 18 4ZM7 2H13V4H7V2ZM18 14H2V11H4V12H6V11H14V12H16V11H18V14ZM16 9V8H14V9H6V8H4V9H2V6H5H15H18V9H16Z" fill="#7B838A" />
                                                    </svg>
                                                    <bdi>Super Atoms</bdi>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start info-dtls-text">
                                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18 16H2C0.89543 16 0 15.1046 0 14V1.913C0.0466084 0.842548 0.928533 -0.00101238 2 9.11911e-07H18C19.1046 9.11911e-07 20 0.895432 20 2V14C20 15.1046 19.1046 16 18 16ZM2 3.868V14H18V3.868L10 9.2L2 3.868ZM2.8 2L10 6.8L17.2 2H2.8Z" fill="#7B838A" />
                                                    </svg>
                                                    <bdi>johndoe123@gmail.com</bdi>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start info-dtls-text">
                                                    <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.75 22H2.75C1.64543 22 0.75 21.1046 0.75 20V2C0.75 0.89543 1.64543 0 2.75 0H12.75C13.8546 0 14.75 0.89543 14.75 2V20C14.75 21.1046 13.8546 22 12.75 22ZM2.75 2V20H12.75V2H2.75ZM7.75 19C7.19772 19 6.75 18.5523 6.75 18C6.75 17.4477 7.19772 17 7.75 17C8.30228 17 8.75 17.4477 8.75 18C8.75 18.5523 8.30228 19 7.75 19Z" fill="#7B838A" />
                                                    </svg>
                                                    <bdi>+1 512-837-9686</bdi>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start info-dtls-text">
                                                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 18.9998C5.73693 17.9224 4.56619 16.7413 3.5 15.4688C1.9 13.5578 8.83662e-07 10.7118 8.83662e-07 7.99981C-0.00141728 5.16735 1.70425 2.6132 4.32107 1.5292C6.93789 0.445211 9.95007 1.04505 11.952 3.04881C13.2685 4.35941 14.0059 6.14219 14 7.99981C14 10.7118 12.1 13.5578 10.5 15.4688C9.43382 16.7413 8.26307 17.9224 7 18.9998ZM7 2.99981C4.23995 3.00311 2.00331 5.23975 2 7.99981C2 9.16581 2.527 11.1848 5.035 14.1858C5.65314 14.9239 6.30902 15.6295 7 16.2998C7.69105 15.6303 8.34724 14.9257 8.966 14.1888C11.473 11.1838 12 9.16481 12 7.99981C11.9967 5.23975 9.76006 3.00311 7 2.99981ZM7 10.9998C5.34315 10.9998 4 9.65666 4 7.99981C4 6.34295 5.34315 4.99981 7 4.99981C8.65686 4.99981 10 6.34295 10 7.99981C10 8.79546 9.68393 9.55852 9.12132 10.1211C8.55871 10.6837 7.79565 10.9998 7 10.9998Z" fill="#7B838A" />
                                                    </svg>
                                                    <bdi>Newyork, USA</bdi>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-8 col-lg-7 mt-3 mt-lg-0 pe-0">
                                    <div className="white-bx-info p-0">
                                        <div className="hdr-dtls-page">Athlete</div>
                                        <div className="body-dtls-page">
                                            <div className="row row-cols-xxl-3 row-cols-lg-2 row-cols-sm-2 row-cols-1 me-0">
                                                <div className="mb-2 pe-0 pb-1">
                                                    <div className="athlit-list-info d-flex align-items-center overflow-hidden">
                                                        <img src={Profile} alt="profile" />
                                                        <div className="ps-3 overflow-hidden">
                                                            <bdi className="d-block">John Doe</bdi>
                                                            <span className="d-block">Houston Victoria School</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pe-0 pb-1">
                                                    <div className="athlit-list-info d-flex align-items-center overflow-hidden">
                                                        <img src={Profile} alt="profile" />
                                                        <div className="ps-3 overflow-hidden">
                                                            <bdi className="d-block">John Doe</bdi>
                                                            <span className="d-block">Houston Victoria School</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pe-0 pb-1">
                                                    <div className="athlit-list-info d-flex align-items-center overflow-hidden">
                                                        <img src={Profile} alt="profile" />
                                                        <div className="ps-3 overflow-hidden">
                                                            <bdi className="d-block">John Doe</bdi>
                                                            <span className="d-block">Houston Victoria School</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pe-0 pb-1">
                                                    <div className="athlit-list-info d-flex align-items-center overflow-hidden">
                                                        <img src={Profile} alt="profile" />
                                                        <div className="ps-3 overflow-hidden">
                                                            <bdi className="d-block">John Doe</bdi>
                                                            <span className="d-block">Houston Victoria School</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pe-0 pb-1">
                                                    <div className="athlit-list-info d-flex align-items-center overflow-hidden">
                                                        <img src={Profile} alt="profile" />
                                                        <div className="ps-3 overflow-hidden">
                                                            <bdi className="d-block">John Doe</bdi>
                                                            <span className="d-block">Houston Victoria School</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-2 pe-0 pb-1">
                                                    <div className="athlit-list-info d-flex align-items-center overflow-hidden">
                                                        <img src={Profile} alt="profile" />
                                                        <div className="ps-3 overflow-hidden">
                                                            <bdi className="d-block">John Doe</bdi>
                                                            <span className="d-block">Houston Victoria School</span>
                                                        </div>
                                                    </div>
                                                </div>
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
