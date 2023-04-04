import React, { useState } from "react";
import FrontendLayout from "../Components/layout/FrontendLayout";
import NewsFeed from "../Images/newsfeed-image.png";
import { Nav, Tab, TabPane } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import NewsSlider from "../Components/sliders/NewsSlider";
import Energy from "../Images/energy icon.png";
import Profile from "../Images/deal detail profile.png";
import Tiktok from "../Images/Tik Tok icon.png";
import twitter from "../Images/twitter icon.png";
import Other from "../Images/other-social-icon.svg";
import Req_1 from "../Images/req media 1.png";
import Req_2 from "../Images/req media 2.png";
import Req_3 from "../Images/req media 3.png";
import Play from "../Images/play-white.svg";
import Business from "../Components/sliders/Business";

import Instagram from "../Images/instagram icon.png";
import Facebook from "../Images/Facebook icon.png";
import TikTok from "../Images/Tik Tok icon.png";
import YouTube from "../Images/YouTube icon.png";
import linkedin from "../Images/linkedin icon.png";
import Discord from "../Images/Discord icon.png";
import ScoreImg from "../Images/Score.png";

import Profile_1 from "../Images/user-offer img.png";
import SocialIcon from "../Images/social plate form icon.png";
import AtheleteBG from "../Images/user athlete-bg.png";
import AtheleteProfile from "../Images/athlete-profile.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Rating } from 'react-simple-star-rating';

export default function UserAthleteOffer() {


    const [reviewshow, setReviewModalShow] = React.useState(false);

    const [storymodal, setStoryModal] = React.useState(false);
    const [storymodal2, setStoryModal2] = React.useState(false);

    const [state, setState] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
    });
    const teamsDetailClick = (name) => {
        setState({
            [name]: true,
        });
    };

    return (
        <FrontendLayout>
            <div className="content-main-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-inr-title d-sm-flex align-items-center">
                                <h1>Athlete</h1>
                                <div className="ms-auto mt-3 mt-sm-0">
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
                                    <div className="white-bx-info p-0">
                                        <div className="img-div-main position-relative">
                                            <img
                                                src={AtheleteBG}
                                                className="img-fluid w-100"
                                                alt="customers large image"
                                            />
                                        </div>
                                        <div className="customer-page-box-body">
                                            <div className="player-detail">
                                                <div className='athlete-profile'>
                                                    <img src={AtheleteProfile} alt='athelete profile' />
                                                </div>
                                                <div className='athelete-name-txt'>
                                                    <div className='d-flex flex-column'>
                                                        <label className="d-block">John Doe
                                                            <svg width="15" height="15" className="ms-1" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_linear_309_2627)" />
                                                                <path d="M6.2859 9.86682L4.68669 8.09018L4 8.85306L6.2859 11.3926L11 6.15546L10.3133 5.39258L6.2859 9.86682Z" fill="white" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_309_2627" x1="0.605469" y1="3.16011" x2="16.9034" y2="6.09001" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#6A58FB" />
                                                                        <stop offset="1" stop-color="#4599F4" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </label>
                                                        <p className="mb-0">
                                                            Football
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='d-sm-flex'>
                                                    <div className='player-detail'>
                                                        <span>Sports : <b>Football | Baseball | Cricket | Rugby</b></span>
                                                        <div className="market-rigth-subtxt d-flex align-items-center mb-1">
                                                            <div>
                                                                <span>
                                                                    <svg width="18" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11 0L0 6L4 8.18V14.18L11 18L18 14.18V8.18L20 7.09V14H22V6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM16 12.99L11 15.72L6 12.99V9.27L11 12L16 9.27V12.99Z" fill="#7B838A" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <bdi>Houston Victoria School</bdi>
                                                        </div>
                                                        <div className="market-rigth-subtxt d-flex align-items-center mb-1">
                                                            <div>
                                                                <span>
                                                                    <svg width="18" height="18" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7 18.9998C5.73693 17.9224 4.56619 16.7413 3.5 15.4688C1.9 13.5578 8.83662e-07 10.7118 8.83662e-07 7.99981C-0.00141728 5.16735 1.70425 2.6132 4.32107 1.5292C6.93789 0.445211 9.95007 1.04505 11.952 3.04881C13.2685 4.35941 14.0059 6.14219 14 7.99981C14 10.7118 12.1 13.5578 10.5 15.4688C9.43382 16.7413 8.26307 17.9224 7 18.9998ZM7 2.99981C4.23995 3.00311 2.00331 5.23975 2 7.99981C2 9.16581 2.527 11.1848 5.035 14.1858C5.65314 14.9239 6.30902 15.6295 7 16.2998C7.69105 15.6303 8.34724 14.9257 8.966 14.1888C11.473 11.1838 12 9.16481 12 7.99981C11.9967 5.23975 9.76006 3.00311 7 2.99981ZM7 10.9998C5.34315 10.9998 4 9.65666 4 7.99981C4 6.34295 5.34315 4.99981 7 4.99981C8.65686 4.99981 10 6.34295 10 7.99981C10 8.79546 9.68393 9.55852 9.12132 10.1211C8.55871 10.6837 7.79565 10.9998 7 10.9998Z" fill="#7B838A" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <bdi>Newyork, USA</bdi>
                                                        </div>
                                                        <div className="market-rigth-subtxt d-flex align-items-center mb-1">
                                                            <div>
                                                                <svg width="18" height="18" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12 3C12 4.65685 10.6569 6 9 6C7.34315 6 6 4.65685 6 3C6 1.34315 7.34315 0 9 0C10.6569 0 12 1.34315 12 3Z" fill="#7B838A" />
                                                                    <path d="M17 5C17 6.10457 16.1046 7 15 7C13.8954 7 13 6.10457 13 5C13 3.89543 13.8954 3 15 3C16.1046 3 17 3.89543 17 5Z" fill="#7B838A" />
                                                                    <path d="M13 12C13 9.79086 11.2091 8 9 8C6.79086 8 5 9.79086 5 12V15H13V12Z" fill="#7B838A" />
                                                                    <path d="M5 5C5 6.10457 4.10457 7 3 7C1.89543 7 1 6.10457 1 5C1 3.89543 1.89543 3 3 3C4.10457 3 5 3.89543 5 5Z" fill="#7B838A" />
                                                                    <path d="M15 15V12C15 10.9459 14.7282 9.9552 14.2507 9.09432C14.4902 9.03275 14.7413 9 15 9C16.6569 9 18 10.3431 18 12V15H15Z" fill="#7B838A" />
                                                                    <path d="M3.74926 9.09432C3.27185 9.9552 3 10.9459 3 12V15H0V12C0 10.3431 1.34315 9 3 9C3.25871 9 3.50977 9.03275 3.74926 9.09432Z" fill="#7B838A" />
                                                                </svg>
                                                            </div>
                                                            <bdi>Basketball-Golden State Warrious</bdi>
                                                        </div>
                                                        <div className="market-rigth-subtxt d-flex align-items-center mb-1">
                                                            <div>
                                                                <Rating
                                                                    className=""
                                                                    fillColor="#FFC107"
                                                                    emptyColor="#828282"
                                                                    initialValue={1}
                                                                    iconsCount={1}
                                                                    size={19}
                                                                />
                                                            </div>
                                                            <bdi className="linear-txt" onClick={() => setReviewModalShow(true)}>4.5 ( 120+ Reviews )</bdi>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto mt-sm-0 mt-3">
                                                        <span className="user-status active">Active</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-class">
                                            <div className="row mt-3 m-0">
                                                <div className="col-xxl-4 col-lg-6 col-sm-4 deal-social-box mb-3">
                                                    <div className="social-score-detail text-center p-3">
                                                        <div className="soc-img-div">
                                                            <img
                                                                src={Instagram}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="soc-innr-percent">
                                                            <p>johndoe31</p>
                                                            <div className="mt-auto">
                                                                <span>12.3K</span>
                                                                <bdi>25.2%</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-lg-6 col-sm-4 deal-social-box mb-3">
                                                    <div className="social-score-detail text-center p-3">
                                                        <div className="soc-img-div">
                                                            <img
                                                                src={Facebook}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="soc-innr-percent">
                                                            <p>johndoe31</p>
                                                            <div className="mt-auto">
                                                                <span>12.3K</span>
                                                                <bdi>25.2%</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-lg-6 col-sm-4 deal-social-box mb-3">
                                                    <div className="social-score-detail text-center p-3">
                                                        <div className="soc-img-div">
                                                            <img
                                                                src={TikTok}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="soc-innr-percent">
                                                            <p>johndoe31</p>
                                                            <div className="mt-auto">
                                                                <span>12.3K</span>
                                                                <bdi>25.2%</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-lg-6 col-sm-4 deal-social-box mb-3">
                                                    <div className="social-score-detail text-center p-3">
                                                        <div className="soc-img-div">
                                                            <img
                                                                src={Discord}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="soc-innr-percent">
                                                            <p>johndoe31</p>
                                                            <div className="mt-auto">
                                                                <span>12.3K</span>
                                                                <bdi>25.2%</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-lg-6 col-sm-4 deal-social-box mb-3">
                                                    <div className="social-score-detail text-center p-3">
                                                        <div className="soc-img-div">
                                                            <img
                                                                src={YouTube}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="soc-innr-percent">
                                                            <p>johndoe31</p>
                                                            <div className="mt-auto">
                                                                <span>12.3K</span>
                                                                <bdi>25.2%</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-lg-6 col-sm-4 deal-social-box mb-3">
                                                    <div className="social-score-detail text-center p-3">
                                                        <div className="soc-img-div">
                                                            <img
                                                                src={linkedin}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="soc-innr-percent">
                                                            <p>johndoe31</p>
                                                            <div className="mt-auto">
                                                                <span>12.3K</span>
                                                                <bdi>25.2%</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="score-div text-center mt-3">
                                            <h6>Starprospect Score</h6>

                                            <img src={ScoreImg} className="mt-2" />
                                            <div className="score-detail p-3">
                                                <span>425</span>
                                                <bdi>
                                                    Your score is 450 pts lower than the top 10% of
                                                    athletes
                                                </bdi>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-8 col-lg-7 mt-3 mt-lg-0 pe-0">
                                    <div className="white-bx-info p-0 h-100">
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="offer">
                                            <div className="comn-tab-sec-2 position-relative cust-tabs-fix">
                                                <Nav variant="pills">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="offer">Offers</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="req">Request</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="newsfeed">Newsfeed</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="deals">Deals</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="about">About</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="body-dtls-page">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="offer">
                                                        {state.one ? (
                                                            <div id="">
                                                                <div
                                                                    className="d-inline-flex align-items-center detls-users-link"
                                                                    id=""
                                                                    onClick={() => {
                                                                        setState({ ...state, one: false });
                                                                    }}
                                                                >
                                                                    <svg className="me-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M3.83 5L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H16V5H3.83Z" fill="#333333" />
                                                                    </svg>
                                                                    Deal Details
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 mt-3">
                                                                        <div className="tab-innr-content p-3">
                                                                            <div className="d-flex">
                                                                                <div className="deal-detail">
                                                                                    <img src={Profile} alt="profile" />
                                                                                </div>
                                                                                <div className="ms-3 requester-name">
                                                                                    <bdi className="">To John Doe</bdi>
                                                                                    <span className="comn-status-class pending-class">Pending</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="req-innr-txt mt-3">
                                                                                <bdi>Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing.</bdi>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                                                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur
                                                                                    adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                                                                    inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                                                                </p>
                                                                            </div>
                                                                            <div className="req-innr-txt mt-3">
                                                                                <bdi>Post Caption</bdi>
                                                                                <p>
                                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                                                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis.
                                                                                </p>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-12">
                                                                                    <div className="d-flex deal-media-txt me-3">
                                                                                        <span>Media</span>
                                                                                        <bdi className="ms-auto">See all</bdi>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12">
                                                                                    <div className="top-trending-custom-check mb-3 d-flex">
                                                                                        <label className="cust-chk-bx-soc p-0">
                                                                                            <input type="checkbox" defaultChecked />
                                                                                            <span className="cust-trend-chkbox">All</span>
                                                                                        </label>
                                                                                        <label className="cust-chk-bx-soc p-0">
                                                                                            <input type="checkbox" />
                                                                                            <span className="cust-trend-chkbox">
                                                                                                <img src={Facebook} alt="fb" className="me-2" />
                                                                                                Facebook
                                                                                            </span>
                                                                                        </label>
                                                                                        <label className="cust-chk-bx-soc p-0">
                                                                                            <input type="checkbox" />
                                                                                            <span className="cust-trend-chkbox">
                                                                                                <img src={Instagram} alt="instagram" className="me-2" />
                                                                                                Instagram
                                                                                            </span>
                                                                                        </label>
                                                                                        <label className="cust-chk-bx-soc p-0">
                                                                                            <input type="checkbox" />
                                                                                            <span className="cust-trend-chkbox">
                                                                                                <img src={twitter} alt="twitter" className="me-2" />
                                                                                                Twitter
                                                                                            </span>
                                                                                        </label>
                                                                                        <label className="cust-chk-bx-soc p-0">
                                                                                            <input type="checkbox" />
                                                                                            <span className="cust-trend-chkbox">
                                                                                                <img src={Tiktok} alt="tiktok" className="me-2" />
                                                                                                Tik Tok
                                                                                            </span>
                                                                                        </label>
                                                                                        <label className="cust-chk-bx-soc p-0">
                                                                                            <input type="checkbox" />
                                                                                            <span className="cust-trend-chkbox">
                                                                                                <img src={Other} alt="other" className="me-2" />
                                                                                                Others
                                                                                            </span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-12 mb-3">
                                                                                    <div className="d-flex deal-media-txt mb-3 me-3">
                                                                                        <span>Facebook</span>
                                                                                        <bdi className="ms-auto">
                                                                                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M1.66699 15.6673L1.66699 16.834C1.66699 18.767 3.234 20.334 5.16699 20.334L16.8337 20.334C18.7667 20.334 20.3337 18.767 20.3337 16.834L20.3337 15.6673M15.667 11.0006L11.0003 15.6673M11.0003 15.6673L6.33366 11.0007M11.0003 15.6673L11.0003 1.66732"
                                                                                                    stroke="#111827"
                                                                                                    strokeWidth="2.32044"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                />
                                                                                            </svg>
                                                                                        </bdi>
                                                                                    </div>
                                                                                    <div className="d-flex deal-budget-txt me-3">
                                                                                        <span>Fulfilment</span>
                                                                                        <bdi className="ms-auto">13/02/2022 @2:00pm</bdi>
                                                                                    </div>
                                                                                    <div className="d-flex deal-budget-txt me-3">
                                                                                        <span>Budget</span>
                                                                                        <bdi className="ms-auto">$5000.00</bdi>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div   pe-0 mb-3 ">
                                                                                    <div className="position-relative ">
                                                                                        <div className="bg-black-tranparent">
                                                                                            <img src={Req_1} alt="" className="img-fluid " />
                                                                                        </div>

                                                                                        <div className="play-btn-white ">
                                                                                            <img src={Play} alt="" className="img-fluid" />
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_2} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_3} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_1} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_2} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div   pe-0 mb-3 " onClick={() => setStoryModal(true)}>
                                                                                    <div className="position-relative ">
                                                                                        <div className="bg-black-tranparent">
                                                                                            <img src={Req_3} alt="" className="img-fluid " />
                                                                                        </div>

                                                                                        <div className="play-btn-white ">
                                                                                            <span>10+</span>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-12 mb-3">
                                                                                    <div className="d-flex deal-media-txt mb-3 me-3">
                                                                                        <span>Instagram</span>
                                                                                        <bdi className="ms-auto">
                                                                                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M1.66699 15.6673L1.66699 16.834C1.66699 18.767 3.234 20.334 5.16699 20.334L16.8337 20.334C18.7667 20.334 20.3337 18.767 20.3337 16.834L20.3337 15.6673M15.667 11.0006L11.0003 15.6673M11.0003 15.6673L6.33366 11.0007M11.0003 15.6673L11.0003 1.66732"
                                                                                                    stroke="#111827"
                                                                                                    strokeWidth="2.32044"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                />
                                                                                            </svg>
                                                                                        </bdi>
                                                                                    </div>
                                                                                    <div className="d-flex deal-budget-txt me-3">
                                                                                        <span>Fulfilment</span>
                                                                                        <bdi className="ms-auto">13/02/2022 @2:00pm</bdi>
                                                                                    </div>
                                                                                    <div className="d-flex deal-budget-txt me-3">
                                                                                        <span>Budget</span>
                                                                                        <bdi className="ms-auto">$5000.00</bdi>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div   pe-0 mb-3 ">
                                                                                    <div className="position-relative ">
                                                                                        <div className="bg-black-tranparent">
                                                                                            <img src={Req_1} alt="" className="img-fluid " />
                                                                                        </div>

                                                                                        <div className="play-btn-white ">
                                                                                            <img src={Play} alt="" className="img-fluid" />
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_2} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_3} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_1} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div pe-0 mb-3">
                                                                                    <div>
                                                                                        <img src={Req_2} alt="" className="img-fluid" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-2 req-media-div   pe-0 mb-3 " onClick={() => setStoryModal(true)}>
                                                                                    <div className="position-relative ">
                                                                                        <div className="bg-black-tranparent">
                                                                                            <img src={Req_3} alt="" className="img-fluid " />
                                                                                        </div>

                                                                                        <div className="play-btn-white ">
                                                                                            <span>10+</span>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div id="">
                                                                <div className="row ps-3">
                                                                    <div className="col-md-6 mb-3 p-0">
                                                                        <div className="deal-personal-box-div p-3 me-3" onClick={() => teamsDetailClick("one")}>
                                                                            <div className="row">
                                                                                <div className="col-xxl-4 col-xl-12 col-md-12 col-sm-3">
                                                                                    <div className="deal-personal-img">
                                                                                        <img src={Profile_1} alt="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0">
                                                                                    <div className="deal-profile-img-class d-flex">
                                                                                        <span className="energy-div">
                                                                                            <img src={Energy} alt="profile" />
                                                                                        </span>
                                                                                        <div className="ms-3">
                                                                                            <bdi>Wally Energy Bareisu....</bdi>
                                                                                            <span className="comn-status-class pending-class">Pending</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="deal-personal-detail">
                                                                                        <ul>
                                                                                            <li className="d-flex">
                                                                                                <span>Date : :</span>
                                                                                                <bdi className="ms-auto price-txt">08/12/22</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Content Duration :</span>
                                                                                                <bdi className="ms-auto">7 days</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Deals :</span>
                                                                                                <bdi className="ms-auto">Non-Negotiable</bdi>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="deal-personal-box-body">
                                                                                <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                                <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...</span>
                                                                                <div className="d-flex mt-2">
                                                                                    <span>Plateform :</span>
                                                                                    <span className="ms-auto">
                                                                                        <img src={SocialIcon} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mb-3 p-0">
                                                                        <div className="deal-personal-box-div p-3 me-3" onClick={() => teamsDetailClick("two")}>
                                                                            <div className="row">
                                                                                <div className="col-xxl-4 col-xl-12 col-md-12 col-sm-3">
                                                                                    <div className="deal-personal-img">
                                                                                        <img src={Profile_1} alt="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0">
                                                                                    <div className="deal-profile-img-class d-flex">
                                                                                        <span className="energy-div">
                                                                                            <img src={Energy} alt="profile" />
                                                                                        </span>
                                                                                        <div className="ms-3">
                                                                                            <bdi>Wally Energy Bareisu....</bdi>
                                                                                            <span className="comn-status-class inprogress-class">In Progress</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="deal-personal-detail">
                                                                                        <ul>
                                                                                            <li className="d-flex">
                                                                                                <span>Date : :</span>
                                                                                                <bdi className="ms-auto price-txt">08/12/22</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Content Duration :</span>
                                                                                                <bdi className="ms-auto">7 days</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Deals :</span>
                                                                                                <bdi className="ms-auto">Non-Negotiable</bdi>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="deal-personal-box-body">
                                                                                <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                                <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...</span>
                                                                                <div className="d-flex mt-2">
                                                                                    <span>Plateform :</span>
                                                                                    <span className="ms-auto">
                                                                                        <img src={SocialIcon} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mb-3 p-0">
                                                                        <div className="deal-personal-box-div p-3 me-3" onClick={() => teamsDetailClick("three")}>
                                                                            <div className="row">
                                                                                <div className="col-xxl-4 col-xl-12 col-md-12 col-sm-3">
                                                                                    <div className="deal-personal-img">
                                                                                        <img src={Profile_1} alt="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0">
                                                                                    <div className="deal-profile-img-class d-flex">
                                                                                        <span className="energy-div">
                                                                                            <img src={Energy} alt="profile" />
                                                                                        </span>
                                                                                        <div className="ms-3">
                                                                                            <bdi>Wally Energy Bareisu....</bdi>
                                                                                            <span className="comn-status-class pending-class">Pending</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="deal-personal-detail">
                                                                                        <ul>
                                                                                            <li className="d-flex">
                                                                                                <span>Date : :</span>
                                                                                                <bdi className="ms-auto price-txt">08/12/22</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Content Duration :</span>
                                                                                                <bdi className="ms-auto">7 days</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Deals :</span>
                                                                                                <bdi className="ms-auto">Non-Negotiable</bdi>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="deal-personal-box-body">
                                                                                <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                                <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...</span>
                                                                                <div className="d-flex mt-2">
                                                                                    <span>Plateform :</span>
                                                                                    <span className="ms-auto">
                                                                                        <img src={SocialIcon} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mb-3 p-0">
                                                                        <div className="deal-personal-box-div p-3 me-3" onClick={() => teamsDetailClick("four")}>
                                                                            <div className="row">
                                                                                <div className="col-xxl-4 col-xl-12 col-md-12 col-sm-3">
                                                                                    <div className="deal-personal-img">
                                                                                        <img src={Profile_1} alt="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0">
                                                                                    <div className="deal-profile-img-class d-flex">
                                                                                        <span className="energy-div">
                                                                                            <img src={Energy} alt="profile" />
                                                                                        </span>
                                                                                        <div className="ms-3">
                                                                                            <bdi>Wally Energy Bareisu....</bdi>
                                                                                            <span className="comn-status-class complete-class">Completed</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="deal-personal-detail">
                                                                                        <ul>
                                                                                            <li className="d-flex">
                                                                                                <span>Date : :</span>
                                                                                                <bdi className="ms-auto price-txt">08/12/22</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Content Duration :</span>
                                                                                                <bdi className="ms-auto">7 days</bdi>
                                                                                            </li>
                                                                                            <li className="d-flex">
                                                                                                <span>Deals :</span>
                                                                                                <bdi className="ms-auto">Non-Negotiable</bdi>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="deal-personal-box-body">
                                                                                <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                                <span>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...</span>
                                                                                <div className="d-flex mt-2">
                                                                                    <span>Plateform :</span>
                                                                                    <span className="ms-auto">
                                                                                        <img src={SocialIcon} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="req">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <div className='deal-personal-box-div p-3'>
                                                                    <div className='row'>
                                                                        <div className='col-xxl-4 col-xl-12 col-md-12 col-sm-3'>
                                                                            <div className='deal-personal-img'>
                                                                                <img src={Profile_1} alt='' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0'>
                                                                            <div className='deal-profile-img-class d-flex'>
                                                                                <span className="energy-div">
                                                                                    <img src={Energy} alt="profile" />
                                                                                </span>
                                                                                <div className="ms-3">
                                                                                    <bdi>
                                                                                        Wally Energy Bareisu....
                                                                                    </bdi>
                                                                                    <span className="comn-status-class pending-class">
                                                                                        Pending
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className='deal-personal-detail'>
                                                                                <ul>
                                                                                    <li className='d-flex'>
                                                                                        <span>Date : :</span>
                                                                                        <bdi className='ms-auto price-txt'>08/12/22</bdi>
                                                                                    </li>
                                                                                    <li className='d-flex'>
                                                                                        <span>Content Duration :</span>
                                                                                        <bdi className='ms-auto'>7 days</bdi>
                                                                                    </li>
                                                                                    <li className='d-flex'>
                                                                                        <span>Deals :</span>
                                                                                        <bdi className='ms-auto'>Non-Negotiable</bdi>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='deal-personal-box-body'>
                                                                        <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                        <span>
                                                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...
                                                                        </span>
                                                                        <div className='d-flex mt-2'>
                                                                            <span>Plateform :</span>
                                                                            <span className='ms-auto'>
                                                                                <img src={SocialIcon} alt='' />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className='deal-personal-box-div p-3'>
                                                                    <div className='row'>
                                                                        <div className='col-xxl-4 col-xl-12 col-md-12 col-sm-3'>
                                                                            <div className='deal-personal-img'>
                                                                                <img src={Profile_1} alt='' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0'>
                                                                            <div className='deal-profile-img-class d-flex'>
                                                                                <span className="energy-div">
                                                                                    <img src={Energy} alt="profile"  />
                                                                                </span>
                                                                                <div className="ms-3">
                                                                                    <bdi>
                                                                                        Wally Energy Bareisu....
                                                                                    </bdi>
                                                                                    <span className="comn-status-class inprogress-class">
                                                                                        In Progress
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className='deal-personal-detail'>
                                                                                <ul>
                                                                                    <li className='d-flex'>
                                                                                        <span>Date : :</span>
                                                                                        <bdi className='ms-auto price-txt'>08/12/22</bdi>
                                                                                    </li>
                                                                                    <li className='d-flex'>
                                                                                        <span>Content Duration :</span>
                                                                                        <bdi className='ms-auto'>7 days</bdi>
                                                                                    </li>
                                                                                    <li className='d-flex'>
                                                                                        <span>Deals :</span>
                                                                                        <bdi className='ms-auto'>Non-Negotiable</bdi>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='deal-personal-box-body'>
                                                                        <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                        <span>
                                                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...
                                                                        </span>
                                                                        <div className='d-flex mt-2'>
                                                                            <span>Plateform :</span>
                                                                            <span className='ms-auto'>
                                                                                <img src={SocialIcon} alt='' />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className='deal-personal-box-div p-3'>
                                                                    <div className='row'>
                                                                        <div className='col-xxl-4 col-xl-12 col-md-12 col-sm-3'>
                                                                            <div className='deal-personal-img'>
                                                                                <img src={Profile_1} alt='' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-xxl-8 col-xl-12 col-md-12 col-sm-9 mt-3 mt-xxl-0'>
                                                                            <div className='deal-profile-img-class d-flex'>
                                                                                <span className="energy-div">
                                                                                    <img src={Energy} alt="profile"  />
                                                                                </span>
                                                                                <div className="ms-3">
                                                                                    <bdi>
                                                                                        Wally Energy Bareisu....
                                                                                    </bdi>
                                                                                    <span className="comn-status-class complete-class">
                                                                                        Completed
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className='deal-personal-detail'>
                                                                                <ul>
                                                                                    <li className='d-flex'>
                                                                                        <span>Date : :</span>
                                                                                        <bdi className='ms-auto price-txt'>08/12/22</bdi>
                                                                                    </li>
                                                                                    <li className='d-flex'>
                                                                                        <span>Content Duration :</span>
                                                                                        <bdi className='ms-auto'>7 days</bdi>
                                                                                    </li>
                                                                                    <li className='d-flex'>
                                                                                        <span>Deals :</span>
                                                                                        <bdi className='ms-auto'>Non-Negotiable</bdi>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='deal-personal-box-body'>
                                                                        <p> Lorem Ipsum is simply dummy text of lipsum te</p>
                                                                        <span>
                                                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f...
                                                                        </span>
                                                                        <div className='d-flex mt-2'>
                                                                            <span>Plateform :</span>
                                                                            <span className='ms-auto'>
                                                                                <img src={SocialIcon} alt='' />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="newsfeed">
                                                        <div className="row">
                                                            <div className="col-2 req-media-div mb-3" onClick={() => setStoryModal2("one")}>
                                                                <div className="position-relative ">
                                                                    <div className="bg-black-tranparent">
                                                                        <img src={Req_1} alt="" className="img-fluid " />
                                                                    </div>

                                                                    <div className="play-btn-white ">
                                                                        <img src={Play} alt="" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_2} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_3} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_1} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_2} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3 ">
                                                                <div className="position-relative ">
                                                                    <div className="bg-black-tranparent">
                                                                        <img src={Req_1} alt="" className="img-fluid " />
                                                                    </div>

                                                                    <div className="play-btn-white ">
                                                                        <img src={Play} alt="" className="img-fluid" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_2} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_3} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_1} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <div className="col-2 req-media-div mb-3">
                                                                <div>
                                                                    <img src={Req_2} alt="" className="img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="deals">
                                                        <div className="social-media-platform pb-3">
                                                            <div className="text-start">
                                                                <h6>Social Media Plateforms</h6>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-8">
                                                                    <div className="d-flex align-items-center mt-3">
                                                                        <div>
                                                                            <img
                                                                                src={Instagram} alt='insta'
                                                                                className="img-fluid"
                                                                            />
                                                                            <span>Post | Story | Reels</span>
                                                                        </div>
                                                                        <bdi className="ms-auto">$150.00</bdi>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mt-3">
                                                                        <div>
                                                                            <img
                                                                                src={Facebook} alt='fb' 
                                                                                className="img-fluid"
                                                                            />
                                                                            <span>Post | Audio</span>
                                                                        </div>
                                                                        <bdi className="ms-auto">$90.00</bdi>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mt-3">
                                                                        <div>
                                                                            <img
                                                                                src={TikTok} alt="tiktok"
                                                                                className="img-fluid"
                                                                            />
                                                                            <span>Post | Video</span>
                                                                        </div>
                                                                        <bdi className="ms-auto">$70.00</bdi>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-8">
                                                                    <div className="d-flex align-items-center mt-3">
                                                                        <div>
                                                                            <img
                                                                                src={YouTube} alt='youtube'
                                                                                className="img-fluid"
                                                                            />
                                                                            <span>Post | Story</span>
                                                                        </div>
                                                                        <bdi className="ms-auto">$150.00</bdi>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mt-3">
                                                                        <div>
                                                                            <img
                                                                                src={linkedin} alt='linkedin'
                                                                                className="img-fluid"
                                                                            />
                                                                            <span>Post | Audio</span>
                                                                        </div>
                                                                        <bdi className="ms-auto">$150.00</bdi>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mt-3">
                                                                        <div>
                                                                            <img
                                                                                src={Discord} alt="discord"
                                                                                className="img-fluid"
                                                                            />
                                                                            <span>Post | Fleet</span>
                                                                        </div>
                                                                        <bdi className="ms-auto">$250.00</bdi>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="categori-main mt-3">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="text-start">
                                                                        <h6>Niche</h6>
                                                                    </div>
                                                                    <div className="category-inner-div text-start">
                                                                        <span>General</span>
                                                                        <span>Beauty/makeup</span>
                                                                        <span>Fashion</span>
                                                                        <span>Tech</span>
                                                                        <span>Heallth/Fitness/Food</span>
                                                                        <span>Dance</span>
                                                                        <span>Meme</span>
                                                                        <span>Travel</span>
                                                                        <span>Family</span>
                                                                        <span>Gaming</span>
                                                                        <span>Athletes/Sports</span>
                                                                        <span>Comedy</span>
                                                                        <span>Theme</span>
                                                                        <span>Finance/Stocks/Crypto</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="about">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="user-athlete-about">
                                                                    <label>Total Received Donation</label>
                                                                    <div className="mt-3">
                                                                        <span>$ 1050.00</span>
                                                                    </div>
                                                                </div>
                                                                <div className="user-athlete-about mt-4">
                                                                    <label>Parent</label>
                                                                    <div className="d-flex align-items-center user-parent-box p-2 mt-3">
                                                                        <img src={AtheleteProfile} alt="" />
                                                                        <div className="ms-3">
                                                                            <label>
                                                                                John Doe
                                                                            </label>
                                                                            <p>
                                                                                <span className="me-2">
                                                                                    <svg width="16" height="16" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M15.666 13.6668H2.33268C1.41221 13.6668 0.666016 12.9206 0.666016 12.0002V1.92766C0.704856 1.03562 1.43979 0.332652 2.33268 0.333497H15.666C16.5865 0.333497 17.3327 1.07969 17.3327 2.00016V12.0002C17.3327 12.9206 16.5865 13.6668 15.666 13.6668ZM2.33268 3.55683V12.0002H15.666V3.55683L8.99935 8.00016L2.33268 3.55683ZM2.99935 2.00016L8.99935 6.00016L14.9994 2.00016H2.99935Z" fill="#7B838A" />
                                                                                    </svg>
                                                                                </span>
                                                                                cobybrayent@gmail.com
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 mt-5">
                                                                <div className="user-athlete-about mb-3">
                                                                    <label>Additional Details</label>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Birthday:</span>
                                                                            <bdi>15-8-1989</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Height (Feet):</span>
                                                                            <bdi>5.5’</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>ACT:</span>
                                                                            <bdi>Ipsum</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Phone:</span>
                                                                            <bdi>985514617</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Weight (KG):</span>
                                                                            <bdi>65</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Class Rank:</span>
                                                                            <bdi>2nd</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Email Address:</span>
                                                                            <bdi>marie_robinsin12@mail.com</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Event</span>
                                                                            <bdi>40 Dash</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Class Size:</span>
                                                                            <bdi>Lorem</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Faith:</span>
                                                                            <bdi>Christian</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Position</span>
                                                                            <bdi>RB</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Awards Honors:</span>
                                                                            <bdi>Lorem Ipsum</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Family Circle:</span>
                                                                            <bdi>Lorem Ipsum</bdi>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>College</span>
                                                                            <bdi>Houston Victoria School</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>NCAA Clearinghouse registered:</span>
                                                                            <bdi>Yes</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Academics:</span>
                                                                            <bdi>Lorem Ipsum</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Graduation Year:</span>
                                                                            <bdi>2012</bdi>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>Athletics:</span>
                                                                            <bdi>Basketball, Volleyball</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>GPA:</span>
                                                                            <bdi>C+</bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>SAT:</span>
                                                                            <bdi>Lorem </bdi>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-lg-6 col-sm-6 mb-3">
                                                                        <div className="user-athlete-detail">
                                                                            <span>NCAA Clearinghouse registered:</span>
                                                                            <bdi>Yes</bdi>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                size="xl"
                className="save-player-modal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={storymodal2} onHide={() => setStoryModal2(false)}
            >
                <Modal.Header closeButton className='border-0'>
                </Modal.Header>
                <Modal.Body className="">
                    <div>
                        <NewsSlider />
                    </div>
                </Modal.Body>
            </Modal>

            {/* =========== Review Modal ============= */}

            <Modal
                size="auto"
                className="business-player-modal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={storymodal} onHide={() => setStoryModal(false)}
            >
                <Modal.Header closeButton className='border-0'>
                </Modal.Header>
                <Modal.Body className="">
                    <div>
                        <Business />
                    </div>
                </Modal.Body>
            </Modal>

            {/* ===============  setReviewModalShow ============= */}

            <Modal
                show={reviewshow}
                onHide={() => setReviewModalShow(false)}
                size="md"
                className="report-post-modal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='mt-2'>
                    <div className="report-post-hdr">
                        <p>Rate and Reviews</p>
                    </div>
                </Modal.Header>
                <Modal.Body className="">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='review-modal-body'>
                                <div className='total-review-div p-3'>
                                    <h6>4.5</h6>
                                    <span className='d-block mb-2'>
                                        <Rating
                                            readonly={true}
                                            className=""
                                            fillColor="#FFC107"
                                            emptyColor="#828282"
                                            initialValue={5}
                                            iconsCount={5}
                                            size={25}
                                        />
                                    </span>
                                    <bdi>Total: 305 Reviews</bdi>
                                </div>
                                <ul>
                                    <li>
                                        <div className='d-flex align-items-center mb-2 athletemodel-profile'>
                                            <img src={AtheleteProfile} alt="profile" />
                                            <div className='ms-3'>
                                                <span className='d-block'>Michael Fisher</span>
                                                <span>
                                                    <Rating
                                                        readonly={true}
                                                        className=""
                                                        fillColor="#FFC107"
                                                        emptyColor="#828282"
                                                        initialValue={5}
                                                        iconsCount={5}
                                                        size={15}
                                                    />
                                                </span>
                                            </div>
                                            <bdi className='ms-auto'>04 April, 2022</bdi>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </li>
                                    <li>
                                        <div className='d-flex align-items-center mb-2'>
                                            <img src={AtheleteProfile} alt="profile" />
                                            <div className='ms-3'>
                                                <span className='d-block'>Michael Fisher</span>
                                                <span>
                                                    <Rating
                                                        readonly={true}
                                                        className=""
                                                        fillColor="#FFC107"
                                                        emptyColor="#828282"
                                                        initialValue={5}
                                                        iconsCount={5}
                                                        size={15}
                                                    />
                                                </span>
                                            </div>
                                            <bdi className='ms-auto'>04 April, 2022</bdi>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


        </FrontendLayout>
    );
}
