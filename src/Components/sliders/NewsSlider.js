import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Player from "../../Images/player-modal-img.png";
import Profile_1 from "../../Images/news-pro-img.png";
import Play from "../../Images/play.svg"

export default function NewsSlider() {
    const [storymodal, setStoryModal] = React.useState(false);
    const story = {
        className: "",
        centerMode: false,
        infinite: false,
        slidesToShow: 1,
        initialSlide: 1,
        speed: 1000,
        arrows: true,
    };

    return (
        <Slider {...story}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 m-auto p-0">
                        <div className="bg-black position-relative">
                            <div className="player-left-img">
                                <img src={Player} alt="modal-left" className="img-fluid" /> 
                            </div>
                            <div className="play-btn-sli">
                                <img src={Play}  alt="play" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-3 mt-lg-0 p-3 bg-white">
                        <div className="save-modal-right">
                            <div className="row">
                                <div className="col-12">
                                    <div className="latest-box-prof d-flex align-items-center">
                                        <img src={Profile_1} alt="profile" />
                                        <div className="ms-3 text-start">
                                            <span>AP Top 26</span>
                                            <p>
                                                @ap_top_26<bdi></bdi>10h
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="latest-box-rght-txt h-100">
                                        <div className="latest-box-body">
                                            <p>
                                                By <span>@JohnDoeAP</span>
                                            </p>
                                            <p>March Madness | 2022 NCAA Tournament</p>
                                            <p className="latest-box-fix-content">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                                            </p>
                                            <span>apnews.com</span>
                                        </div>
                                        <div className="my-3 latest-box-ftr d-flex align-items-center">
                                            <span className="d-flex align-items-center">
                                                <i class="bi bi-heart-fill pe-2"></i>
                                                <bdi>15</bdi>
                                            </span>
                                            <span className="ps-4">10 Comments</span>
                                            <div className="ms-auto">
                                                <i class="bi bi-bookmark-fill"></i>
                                                <i class="bi bi-share px-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="like-modal-body mt-3">
                            <ul>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 latest-box-prof ms-auto">
                                                    <Dropdown drop="left" autoClose="outside">
                                                        <Dropdown.Toggle className="table-dropdown-btn " id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            </svg>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <Link href="#">Edit</Link>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 latest-box-prof ms-auto">
                                                    <Dropdown drop="left" autoClose="outside">
                                                        <Dropdown.Toggle className="table-dropdown-btn " id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            </svg>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <Link href="#">Edit</Link>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center ">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 m-auto p-0">
                        <div className="bg-black position-relative">
                            <div className="player-left-img">
                                <img src={Player} alt="modal-left" className="img-fluid" /> 
                            </div>
                            <div className="play-btn-sli">
                                <img src={Play}  alt="play" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-3 mt-lg-0 p-3 bg-white">
                        <div className="save-modal-right">
                            <div className="row">
                                <div className="col-12">
                                    <div className="latest-box-prof d-flex align-items-center">
                                        <img src={Profile_1} alt="profile" />
                                        <div className="ms-3 text-start">
                                            <span>AP Top 26</span>
                                            <p>
                                                @ap_top_26<bdi></bdi>10h
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="latest-box-rght-txt h-100">
                                        <div className="latest-box-body">
                                            <p>
                                                By <span>@JohnDoeAP</span>
                                            </p>
                                            <p>March Madness | 2022 NCAA Tournament</p>
                                            <p className="latest-box-fix-content">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                                            </p>
                                            <span>apnews.com</span>
                                        </div>
                                        <div className="my-3 latest-box-ftr d-flex align-items-center">
                                            <span className="d-flex align-items-center">
                                                <i class="bi bi-heart-fill pe-2"></i>
                                                <bdi>15</bdi>
                                            </span>
                                            <span className="ps-4">10 Comments</span>
                                            <div className="ms-auto">
                                                <i class="bi bi-bookmark-fill"></i>
                                                <i class="bi bi-share px-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="like-modal-body mt-3">
                            <ul>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 latest-box-prof ms-auto">
                                                    <Dropdown drop="left" autoClose="outside">
                                                        <Dropdown.Toggle className="table-dropdown-btn " id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            </svg>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <Link href="#">Edit</Link>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center ">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 m-auto p-0">
                        <div className="bg-black position-relative">
                            <div className="player-left-img">
                                <img src={Player} alt="modal-left" className="img-fluid" /> 
                            </div>
                            <div className="play-btn-sli">
                                <img src={Play}  alt="play" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-3 mt-lg-0 p-3 bg-white">
                        <div className="save-modal-right">
                            <div className="row">
                                <div className="col-12">
                                    <div className="latest-box-prof d-flex align-items-center">
                                        <img src={Profile_1} alt="profile" />
                                        <div className="ms-3 text-start">
                                            <span>AP Top 26</span>
                                            <p>
                                                @ap_top_26<bdi></bdi>10h
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="latest-box-rght-txt h-100">
                                        <div className="latest-box-body">
                                            <p>
                                                By <span>@JohnDoeAP</span>
                                            </p>
                                            <p>March Madness | 2022 NCAA Tournament</p>
                                            <p className="latest-box-fix-content">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                                            </p>
                                            <span>apnews.com</span>
                                        </div>
                                        <div className="my-3 latest-box-ftr d-flex align-items-center">
                                            <span className="d-flex align-items-center">
                                                <i class="bi bi-heart-fill pe-2"></i>
                                                <bdi>15</bdi>
                                            </span>
                                            <span className="ps-4">10 Comments</span>
                                            <div className="ms-auto">
                                                <i class="bi bi-bookmark-fill"></i>
                                                <i class="bi bi-share px-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="like-modal-body mt-3">
                            <ul>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 latest-box-prof ms-auto">
                                                    <Dropdown drop="left" autoClose="outside">
                                                        <Dropdown.Toggle className="table-dropdown-btn " id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            </svg>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <Link href="#">Edit</Link>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center ">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 m-auto p-0">
                        <div className="bg-black position-relative">
                            <div className="player-left-img">
                                <img src={Player} alt="modal-left" className="img-fluid" /> 
                            </div>
                            <div className="play-btn-sli">
                                <img src={Play}  alt="play" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-3 mt-lg-0 p-3 bg-white">
                        <div className="save-modal-right">
                            <div className="row">
                                <div className="col-12">
                                    <div className="latest-box-prof d-flex align-items-center">
                                        <img src={Profile_1} alt="profile" />
                                        <div className="ms-3 text-start">
                                            <span>AP Top 26</span>
                                            <p>
                                                @ap_top_26<bdi></bdi>10h
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="latest-box-rght-txt h-100">
                                        <div className="latest-box-body">
                                            <p>
                                                By <span>@JohnDoeAP</span>
                                            </p>
                                            <p>March Madness | 2022 NCAA Tournament</p>
                                            <p className="latest-box-fix-content">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
                                            </p>
                                            <span>apnews.com</span>
                                        </div>
                                        <div className="my-3 latest-box-ftr d-flex align-items-center">
                                            <span className="d-flex align-items-center">
                                                <i class="bi bi-heart-fill pe-2"></i>
                                                <bdi>15</bdi>
                                            </span>
                                            <span className="ps-4">10 Comments</span>
                                            <div className="ms-auto">
                                                <i class="bi bi-bookmark-fill"></i>
                                                <i class="bi bi-share px-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="like-modal-body mt-3">
                            <ul>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 latest-box-prof ms-auto">
                                                    <Dropdown drop="left" autoClose="outside">
                                                        <Dropdown.Toggle className="table-dropdown-btn " id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                            </svg>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>
                                                                <Link href="#">Edit</Link>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center ">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="latest-box-prof">
                                            <img src={Profile_1} alt="profile" />
                                        </div>
                                        <div className="w-100">
                                            <div className="ms-3 d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span>Adam Clark</span> Lorem Ipsum has been the industry's
                                                </p>
                                                <div className="ms-3 ms-auto">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center ms-3">
                                                <div className="me-4 d-flex align-items-center my-1 my-sm-0">
                                                    <i class="bi bi-heart pe-2"></i>
                                                    <bdi>12</bdi>
                                                    <div className="ms-4">
                                                        <p className="mb-0">
                                                            <span>Reply</span>
                                                            <bdi className="ms-2">1</bdi>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ms-sm-auto">
                                                    <p className="mb-0 report-date">
                                                        <span>05/04/2022</span>
                                                    </p>
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
        </Slider>
    );
}
