<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Template Mo">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">

    <title>A1TI Events</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iNl7lqyiYbNE3u5zHMHp0UA+POD4t1itd16u7jOFEL76P0DHS9tN8+OHL" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    <!-- Include SweetAlert CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.9/dist/sweetalert2.min.css">
    <!-- Bootstrap JS and dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.0/js/bootstrap.min.js"></script>
   
    


    <style>
        .n {
            overflow: scroll;
            height: 800px
        }

        .m {
            margin-top: 100px;
            height: 800px;
        }

        .item-container {
            display: none;
        }

        .item-container.show {
            display: block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        .dropdown-content.show {
            display: block;
        }

        .dropdown-content li {
            padding: 8px 12px;
            cursor: pointer;
        }

        .dropdown-content li:hover {
            background-color: #ddd;
        }

        .show {
            display: block;
        }

        .filters {
            max-height: 200px;
            overflow-y: auto;
        }

        input {
            box-sizing: border-box;
            width: 100%;
            padding: 12px 20px 12px 40px;
            border: none;
            border-bottom: 1px solid #ddd;
        }

        .well {

            border-radius: 3px;
            color: white;

        }

        .well-1 {
            padding: 15px;
            border-radius: 3px;
            color: white;
            margin-bottom: 27px;

        }

        .more-text {
            display: none;
        }

        .read-more-btn {
            color: #007bff;
            cursor: pointer;
        }

        .btn-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            /* Adjust gap between buttons */

        }

        /* Default styling for web view */
        .info-item {
            display: inline-block;
            margin-left: 40px;
        }

        /* Mobile view styling */
        @media (max-width: 768px) {
            .info-item {
                display: block;
                margin-right: 0;
                margin-bottom: 10px;
            }
        }

        .modal {
            transition: all 0.5s;
            transform: translateY(-50%);
        }

        .modal.show {
            transform: translateY(0);
        }

        .modal-content {
            animation: fadeIn 0.5s;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .form {
            color: black;
        }

        /* Flexbox container to center the button */
        .button-container {
            display: flex;
            justify-content: center;
            /* Horizontally center */
            align-items: center;
            /* Vertically center if the div has a height */
            width: 100%;
            height: fix-mime_content_type;
            /* Full viewport height to center vertically as well */
        }

        .animated-button {
            background-color: #4CAF50;
            /* Green background */
            border: none;
            /* Remove borders */
            color: white;
            /* White text */
            padding: 15px 32px;
            /* Some padding */
            text-align: center;
            /* Centered text */
            text-decoration: none;
            /* Remove underline */
            display: inline-block;
            /* Get the element to align correctly */
            font-size: 16px;
            /* Increase font size */
            margin: 4px 2px;
            /* Some margin */
            transition: background-color 0.3s, transform 0.3s;
            /* Add transition for background and transform */
            cursor: pointer;
            /* Add a pointer cursor on hover */
        }

        .animated-button:hover {
            background-color: red;
            /* Darker green on hover */
            transform: scale(1.1);
            /* Scale the button on hover */
        }

        /* Media queries for responsive design */
        @media (max-width: 600px) {
            .animated-button {
                padding: 10px 20px;
                /* Adjust padding for smaller screens */
                font-size: 14px;
                /* Adjust font size for smaller screens */
                margin: 2px 1px;
                /* Adjust margin for smaller screens */
            }
        }

        .section {
            padding: 20px;
            margin-top: 50px;
            /* Ensure space for fixed headers if needed */
            scroll-margin-top: 100px;
            /* Adjust as needed */
        }

        .hidden-div {
            display: none;
            /* The div is hidden but still occupies space */
        }

        .custom-modal .side {
            margin-bottom: 20px;
        }

        .custom-modal form {
            background: white;
            padding: 35px;
            border-radius: 10px;
        }

        .custom-modal .form-control {
            border-radius: 25px;
            border: 1px solid #e0e0e0;
            padding: 15px;
            margin: 15px;
            background-color: #fafafa;
        }

        .custom-modal textarea.form-control {
            height: 150px;
        }

        .custom-modal button.btn {
            background-color: #a52a2a;
            border-color: #a52a2a;
            border-radius: 25px;
            padding: 10px 30px;
            font-weight: bold;
        }

        .custom-modal h2 {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
        }

        @media (max-width: 767px) {
            .custom-modal .col-lg-4 {
                width: 100%;
                margin-bottom: 15px;
            }
        }
    </style>
    
    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-edu-meeting.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/lightbox.css">
    <!--

  TemplateMo 569 Edu Meeting

  https://templatemo.com/tm-569-edu-meeting

-->
</head>

<body>
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/66bb21d20cca4f8a7a754fad/1i55fo8ds';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    </script>
    <!--End of Tawk.to Script-->

    <!--menu-->
    <script type="text/javascript" src="menu.js"></script>
    <!--menu end-->


    <section class="heading-page header-text" id="top">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <h6>don't Learn Simply. Learn with project</h6>
                    <h2>A1 Training Events</h2>
                </div>
                <div class="container">
                    <!--<div class="dropdown mt-3">
            <button onclick="toggleDropdown()" class="btn btn-primary dropbtn">Select Courses</button>
            <div id="myDropdown" class="dropdown-content w-100" onclick="event.stopPropagation()">
                <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" class="form-control" autofocus>
                <div class="filters">
                    <ul class="list-unstyled">
                        <li data-filter="*">All Courses</li>
                        <li data-filter=".programming">Programming</li>
                        <li data-filter=".cloud">Cloud</li>
                        <li data-filter=".Devops">Devops</li>
                        <li data-filter=".Data">Data Science & AI</li>
                        <li data-filter=".mobile">Mobile Development</li>
                        <li data-filter=".Database">Database</li>
                        <li data-filter=".MIS">Advance Excel-BI Tools</li>
                        <li data-filter=".Digital">Digital Marketing</li>
                        <li data-filter=".Industrial">Industrial Training</li>
                        <li data-filter=".Multimedia">Multimedia Animation-Graphics</li>
                        <li data-filter=".Software">Software Testing</li>
                        <li data-filter=".Project">Project Management</li>
                        <li data-filter=".Full">Full Stack Development</li>
                        <li data-filter=".Web">Web Designing</li>
                        <li data-filter=".Aws">AWS </li>
                    </ul>
                </div>
            </div>
        </div>--->
                </div>
                <!-----------Search Bar------------>
                <div class="container my-4">
                    <input type="text" id="searchBar" class="search-bar" class="form-control"
                        placeholder="Search webinars..." onkeyup="filterItems()">
                </div>
                <!-----------Search Bar Ends------------>
            </div>
        </div>


    </section>

    <script>
        function scrollToElementWithOffset(elementId, offset) {
            window.onload = () => { // Ensures the page is fully loaded
                const element = document.getElementById(elementId);
                if (element) {
                    const elementTop = element.getBoundingClientRect().top;
                    const absoluteElementTop = elementTop + window.pageYOffset;
                    const finalPosition = absoluteElementTop - offset;

                    window.scrollTo({
                        top: finalPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }

        function showSectionFromHash() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                scrollToElementWithOffset(hash, calculateDynamicOffset());
            }
        }

        function calculateDynamicOffset() {
            const header = document.querySelector('header'); // Adjust selector as needed
            return header ? header.offsetHeight : 100; // Default to 100 if no header
        }

        document.addEventListener('DOMContentLoaded', function () {
            showSectionFromHash();
        });

        window.addEventListener('hashchange', showSectionFromHash);

    </script>

    <section class="meetings-page" id="meetings">
        <!----- AWS Webinar---->
        <div class="container item-container" data-title="aws" id="aws" class="section ">
            <div class="row">
                <!-- AWS Webinar Section -->
                <div class="col-md-3">
                    <div class="well">
                        <img src="assets/images/events/aws.png" alt="AWS Webinar">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-lg">
                        <h5 style="margin-top: 23px; color: white;">AWS Webinar</h5>
                        <p style="color: white;">
                            <span>"Unlocking the Power of the Cloud: Join A1 Training Institute's AWS
                                Masterclass!"</span>
                            <span class="more-text">
                                <strong><br> Introduction to AWS </strong> <br>
                                &#8226; Creating a free tier AWS account<br>
                                &#8226; Launching an EC2 Instance<br>
                                &#8226; AWS Networking (VPC)<br>
                                &#8226; AWS Route 53<br>
                                &#8226; Amazon S3 Bucket<br>
                                &#8226; Live Q/A with AWS experts<br>
                                &#8226; Live Project
                            </span>
                            <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="well-1" style="padding:0px">
                        <div class="well">
                            <button type="button" class="btn btn-danger btn-md">10-12<br>Aug, 2024</button>
                            <a href="assets/pdf/events/AWS-Webinar.pdf" target="_blank">
                                <button type="button" class="btn btn-danger btn-md">
                                    <i class="fa fa-download" style="font-size:20px"></i><br>
                                    <span style="margin-left:14px; margin-right:14px;">Notes</span>
                                </button>
                            </a>
                            <div style="color: white; margin:10px; margin-left:40px;">07:00 PM-08:00 PM</div>
                        </div>
                        <!-- BOOK NOW BUTTON -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#courseModal" data-course-name=" AWS Webinar">Book Now</button>
                        <!-- MORE INFO BUTTON -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#myModal">More info</button>
                        <!-- Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="myModalLabel" style="color:black;"><strong>FREE AWS
                                                WEBINAR</strong>
                                        </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" style="color:black;">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform"
                                            target="_blank">
                                            <img src="assets/images/events/aws.jpeg" alt="AWS Webinar"
                                                class="img-fluid">
                                        </a>
                                        <div class="container my-3">
                                            <h1 class="text-center display-4"><strong>FREE <span
                                                        class="text-warning">AWS</span>
                                                    WEBINAR</strong></h1>
                                            <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER
                                            </h4><br>
                                            <h2>Introduction To AWS</h2>
                                            <ul>
                                                <li>&#8226; Creating a free tier AWS account</li>
                                                <li>&#8226; Launching an EC2 Instance</li>
                                                <li>&#8226; AWS Networking (VPC)</li>
                                                <li>&#8226; AWS Route 53</li>
                                                <li>&#8226; Amazon S3 Bucket</li>
                                                <li>&#8226; Live Q/A with AWS experts</li>
                                                <li>&#8226; Live Project</li>
                                            </ul>
                                            <h2>AWS Webinar Series: Getting Started With A1TI</h2><br>
                                            <p>
                                            <div class="info-item"><strong>Date:</strong> 10-12 August</div>
                                            <div class="info-item"><strong>Time:</strong> 7-8 PM</div>
                                            <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore,
                                                Pune</div>
                                            </p><br>
                                            <div class="text-center button-container">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform"
                                                    target="_blank">
                                                    <button type="button" class="btn btn-primary animated-button">Click
                                                        To Enroll Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                            style="background-color:red;">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="color: white; width: 1130px;">
        </div>

        <!-----Html CSS Webinar---->
        <div class="container item-container" data-title="html  css" id="html-css" class="section ">
            <div class="row">
                <!-- HTML/CSS Webinar Section -->
                <div class="col-md-3">
                    <div class="well">
                        <img src="assets/images/events/html-css.png" alt="AWS Webinar">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-lg">
                        <h5 style="margin-top: 23px; color: white;">HTML / CSS Webinar</h5>
                        <p style="color: white;">
                            <span>"Design Like a Pro: HTML & CSS Fundamentals with A1 Training Institute"</span><br>
                            <span class="more-text">
                                <strong>HTML Topics: </strong> <br>
                                &#8226; HTML Elements<br>
                                &#8226; HTML Lists, Forms, Table<br>
                                &#8226; HTML Layout Design & DIV Concepts (VPC)<br>
                                <strong> CSS Topics: </strong> <br>
                                &#8226; Types Of CSS<br>
                                &#8226; CSS Pseudo-Class / Element<br>
                                &#8226; CSS Margin & Padding<br>
                                &#8226; Live Q/A<br>
                                &#8226; Live Project
                            </span>
                            <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="well-1" style="padding:0px">
                        <div class="well">
                            <button type="button" class="btn btn-danger btn-md">17-19<br>Aug, 2024</button>
                            <a href="assets/pdf/events/AWS-Webinar.pdf" target="_blank">
                                <button type="button" class="btn btn-danger btn-md">
                                    <i class="fa fa-download" style="font-size:20px"></i><br>
                                    <span style="margin-left:14px; margin-right:14px;">Notes</span>
                                </button>
                            </a>
                            <div style="color: white; margin:10px; margin-left:40px;">06:00 PM-07:00 PM</div>
                        </div>
                        <!-- BOOK NOW BUTTON -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#courseModal" data-course-name=" HTML/CSS Webinar">Book Now</button>
                        <!-- MORE INFO BUTTON -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#HTML-CSS">
                            More info</button>
                        <!-- Modal -->
                        <div class="modal fade" id="HTML-CSS" tabindex="-1" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title " id="myModalLabel" style="color:black;"><strong>FREE
                                                HTML / CSS
                                                WEBINAR</strong></h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" style="color:black;">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform"
                                            target="_blank">
                                            <img src="assets/images/events/html-css-1.jpeg" alt="AWS Webinar"
                                                class="img-fluid">
                                        </a>
                                        <div class="container my-3">
                                            <h1 class="text-center display-4"><strong>FREE <span
                                                        style="color:#7c283a;">HTML / CSS</span>
                                                    WEBINAR</strong></h1>
                                            <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER
                                            </h4><br>
                                            <h2>Introduction To HTML & CSS </h2><br>
                                            <ul>
                                                <strong>HTML Topics: </strong> <br>
                                                &#8226; HTML Elements<br>
                                                &#8226; HTML Lists, Forms, Table<br>
                                                &#8226; HTML Layout Design & DIV Concepts (VPC)<br><br>
                                                <strong> CSS Topics: </strong> <br>
                                                &#8226; Types Of CSS<br>
                                                &#8226; CSS Pseudo-Class / Element<br>
                                                &#8226; CSS Margin & Padding<br>
                                                &#8226; Live Q/A<br>
                                                &#8226; Live Project
                                            </ul><br>
                                            <h2>HTML & CSS WEBINAR: Getting Started With A1TI </h2><br>
                                            <p>
                                            <div class="info-item"><strong>Date:</strong> 17-19 August</div>
                                            <div class="info-item"><strong>Time:</strong> 6-7 PM</div>
                                            <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore,
                                                Pune</div>
                                            </p><br>
                                            <div class="text-center button-container">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform"
                                                    target="_blank">
                                                    <button type="button" class="btn btn-primary animated-button">Click
                                                        To Enroll Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                            style="background-color:red;">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="color: white; width: 1130px;">
        </div>

        <!-----Git Webinar ---->
        <div class="container item-container" data-title="git" id="git" class="section">
            <div class="row">
                <!-- Git Webinar Section -->
                <div class="col-md-3">
                    <div class="well">
                        <img src="assets/images/events/git.png" alt="Git Webinar">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-lg">
                        <h5 style="margin-top: 23px; color: white;">GIT Webinar</h5>
                        <p style="color: white;">
                            <span>"Master Git: Version Control Essentials with A1 Training Institute"</span>
                            <span class="more-text">
                                <strong><br> Introduction to Git </strong> <br>
                                <strong><br> Basic Topics:<br></strong>
                                &#8226; Setting Up and Basic Commands (git init, git add, git commit)<br>
                                &#8226; Branching, Merging, and Conflict Resolution<br>
                                &#8226; Collaboration (Cloning, Pull Requests)<br>
                                <strong><br> Advanced Topics:<br></strong>
                                &#8226; Rebasing vs. Merging <br>
                                &#8226; Stashing Changes<br>
                                &#8226; Git Hooks<br>
                            </span>
                            <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="well-1" style="padding:0px">
                        <div class="well">
                            <button type="button" class="btn btn-danger btn-md">17-19<br>Aug, 2024</button>
                            <a href="assets/pdf/events/AWS-Webinar.pdf" target="_blank">
                                <button type="button" class="btn btn-danger btn-md">
                                    <i class="fa fa-download" style="font-size:20px"></i><br>
                                    <span style="margin-left:14px; margin-right:14px;">Notes</span>
                                </button>
                            </a>
                            <div style="color: white; margin:10px; margin-left:40px;">06:00 PM-07:00 PM</div>
                        </div>
                        <!-- BOOK NOW BUTTON -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#courseModal" data-course-name=" GIT Webinar">Book Now</button>
                        <!-- MORE INFO BUTTON -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#gitModal">More info</button>
                        <!-- Modal -->
                        <div class="modal fade" id="gitModal" tabindex="-1" aria-labelledby="gitModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="gitModalLabel" style="color:black;"><strong>FREE GIT
                                                WEBINAR</strong></h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" style="color:black;">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform"
                                            target="_blank">
                                            <img src="assets/images/events/git-1.jpeg" alt="Git Webinar"
                                                class="img-fluid">
                                        </a>
                                        <div class="container my-3">
                                            <h1 class="text-center display-4"><strong>FREE <span
                                                        style="color:#85482c;">GIT</span> WEBINAR</strong></h1>
                                            <h4 class="text-center">"Master Git: Version Control Essentials with A1
                                                Training Institute"</h4>
                                            <br>
                                            <h2>Introduction To Git</h2>
                                            <ul>
                                                <strong><br> Introduction to Git </strong> <br>
                                                <strong><br> Basic Topics:<br></strong>
                                                &#8226; Setting Up and Basic Commands (git init, git add, git
                                                commit)<br>
                                                &#8226; Branching, Merging, and Conflict Resolution<br>
                                                &#8226; Collaboration (Cloning, Pull Requests)<br>
                                                <strong><br> Advanced Topics:<br></strong>
                                                &#8226; Rebasing vs. Merging <br>
                                                &#8226; Stashing Changes<br>
                                                &#8226; Git Hooks<br>
                                            </ul>
                                            <h2>Git Webinar Series: Getting Started With A1TI</h2><br>
                                            <p>
                                            <div class="info-item"><strong>Date:</strong> 17-19 August</div>
                                            <div class="info-item"><strong>Time:</strong> 6-7 PM</div>
                                            <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore,
                                                Pune</div>
                                            </p><br>
                                            <div class="text-center button-container">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform"
                                                    target="_blank">
                                                    <button type="button" class="btn btn-primary animated-button">Click
                                                        To Enroll Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                            style="background-color:red;">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="color: white; width: 1130px;">
        </div>



        <!----------Book Now Modal-------------->
        <!-- The Modal -->
        <div class="modal fade" id="courseModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content custom-modal">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Let's Enroll For<span id="modalCourseName"></span></h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">

                                    <form id="contactform">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <fieldset>
                                                    <input type="text" name="Name" id="fullname" class="form-control"
                                                        placeholder="Enter Name..." required>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-4">
                                                <fieldset>
                                                    <input type="number" name="Mobile" class="form-control" id="Mobile"
                                                        placeholder="Your Mobile..." pattern="\d{10}" maxlength="10"
                                                        required>
                                                </fieldset>
                                            </div>

                                            <div class="col-lg-4">
                                                <fieldset>
                                                    <input type="text" name="City" class="form-control" id="City"
                                                        placeholder="City...">
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12 mt-3">
                                                <fieldset>
                                                    <input type="email" name="email" class="form-control" id="E-mail"
                                                        placeholder="Your Email..." required>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12 mt-3">
                                                <fieldset>
                                                    <textarea name="Address" class="form-control" id="Address"
                                                        placeholder="Your Address..." rows="4"></textarea>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12 mt-3">
                                                <fieldset>
                                                    <textarea name="Message" class="form-control" id="message"
                                                        placeholder="Your Message..." rows="2"></textarea>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12 mt-3">
                                                <fieldset>
                                                    <button type="submit" name="submitContact"
                                                        class="btn btn-primary">Send Mail</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
        <!----------Book Now Modal End-------------->

    </section>
    <!--footer-->
    <script type="text/javascript" src="footer.js"></script>
    <!--footer end-->

    <!-- Scripts -->
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/lightbox.js"></script>
    <script src="assets/js/tabs.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/video.js"></script>
    <script src="assets/js/slick-slider.js"></script>
    <script src="assets/js/custom.js"></script>
    <script>
        //according to loftblog tut
        $('.nav li:first').addClass('active');

        var showSection = function showSection(section, isAnimate) {
            var
                direction = section.replace(/#/, ''),
                reqSection = $('.section').filter('[data-section="' + direction + '"]'),
                reqSectionPos = reqSection.offset().top - 0;

            if (isAnimate) {
                $('body, html').animate({
                    scrollTop: reqSectionPos
                },
                    800);
            } else {
                $('body, html').scrollTop(reqSectionPos);
            }

        };

        var checkSection = function checkSection() {
            $('.section').each(function () {
                var
                    $this = $(this),
                    topEdge = $this.offset().top - 80,
                    bottomEdge = topEdge + $this.height(),
                    wScroll = $(window).scrollTop();
                if (topEdge < wScroll && bottomEdge > wScroll) {
                    var
                        currentId = $this.data('section'),
                        reqLink = $('a').filter('[href*=\\#' + currentId + ']');
                    reqLink.closest('li').addClass('active').
                        siblings().removeClass('active');
                }
            });
        };

        $('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
            e.preventDefault();
            showSection($(this).attr('href'), true);
        });

        $(window).scroll(function () {
            checkSection();
        });
    </script>

    <!------Filter Bar----------------->
    <script>
        // Filter Items based on search term
        function filterItems() {
            const searchTerm = document.getElementById('searchBar').value.toLowerCase();
            const containers = document.querySelectorAll('.item-container');

            containers.forEach(container => {
                const title = container.getAttribute('data-title').toLowerCase();
                if (title.includes(searchTerm)) {
                    container.classList.add('show');
                } else {
                    container.classList.remove('show');
                }
            });
        }

        // Show all containers when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            const containers = document.querySelectorAll('.item-container');
            containers.forEach(container => {
                container.classList.add('show');
            });
        });

        // Toggle Read More/Read Less
        function toggleReadMore(btn) {
            const moreText = btn.previousElementSibling;
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                btn.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none';
                btn.textContent = 'Read More';
            }
        }

        // Toggle dropdown visibility
        function toggleDropdown() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Filter dropdown items based on search input
        function filterFunction() {
            const input = document.getElementById("myInput").value.toUpperCase();
            const ul = document.getElementById("myDropdown");
            const li = ul.getElementsByTagName("li");

            for (let i = 0; i < li.length; i++) {
                const txtValue = li[i].textContent || li[i].innerText;
                if (txtValue.toUpperCase().indexOf(input) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

        // Close dropdown when clicking outside
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    </script>
    <!----Read More Script START------->
    <script>
        let currentOpen = null;

        function toggleReadMore(btn) {
            const moreText = btn.previousElementSibling;
            const isCurrentlyOpen = moreText.style.display === "inline";

            // Close currently open text if any
            if (currentOpen && currentOpen !== moreText) {
                currentOpen.style.display = "none";
                currentOpen.nextElementSibling.textContent = "Read More";
            }

            // Toggle the clicked text
            if (isCurrentlyOpen) {
                moreText.style.display = "none";
                btn.textContent = "Read More";
                currentOpen = null;
            } else {
                moreText.style.display = "inline";
                btn.textContent = "Read Less";
                currentOpen = moreText;
            }
        }

        // Initialize the display state
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.more-text').forEach(function (element) {
                element.style.display = "none";
            });
        });
    </script>
    <!--------Events_form.php---------->

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var courseModal = document.getElementById('courseModal');
            courseModal.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var courseName = button.getAttribute('data-course-name');
                var modalTitle = courseModal.querySelector('#modalCourseName');
                modalTitle.textContent = courseName;
            });
        });
    </script>
    <script>

        // Handle form submission
        const form = document.getElementById('contactform');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                const scriptURL = 'https://script.google.com/macros/s/AKfycbziKklYI3oUFtHVfhLM2K8fM4sLVUyAynVsVItW1pNZgXMiloSeypTvIyrNDLnkAtRH/exec';
                const formData = new FormData(this);

                fetch(scriptURL, { method: 'POST', body: formData })
                    .then(response => {
                        Swal.fire({
                            title: "Thank you!",
                            text: "Your form is submitted successfully.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        }).then(() => {
                            window.location.reload(); // Reload after closing the alert
                        });
                    })
                    .catch(error => {
                        console.error('Error!', error.message);
                        Swal.fire({
                            title: "Oops!",
                            text: "Something went wrong. Please try again later.",
                            icon: "error"
                        });
                    });
            });
        }

    </script>

    <script>
        document.getElementById('Mobile').addEventListener('input', function (e) {
            var x = e.target.value.replace(/\D/g, '');
            if (x.length > 10) {
                x = x.substring(0, 10);
            }
            e.target.value = x;
        });
    </script>

</body>

</html>