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

    <title>Education - List of Meetings</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iNl7lqyiYbNE3u5zHMHp0UA+POD4t1itd16u7jOFEL76P0DHS9tN8+OHL" crossorigin="anonymous">
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
 <!-- Include SweetAlert JavaScript -->
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


<script>
document.getElementById('mobileno').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '');
    if (x.length > 10) {
        x = x.substring(0, 10);
    }
    e.target.value = x;
});

var messageText = "<?php echo $_SESSION['status'] ?? ''; ?>";
if (messageText !== '') {
    Swal.fire({
        title: "Thank you!",
        text: messageText,
        icon: "success"
    });
    <?php unset($_SESSION['status']); ?>
}


  document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Submitted!',
            'Your form has been submitted.',
            'success'
          );
          // Optionally, you can submit the form programmatically if needed
          // form.submit();
        }
      });
    });
  });


  $(document).ready(function () {
            $('.gallery-item').fancybox();
        });
</script>

    
    <style>
        .n {
            overflow: scroll;
            height: 800px
        }

        .m {
            margin-top: 100px;
            height: 800px;
        }
       .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
            margin-bottom:27px;
            
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
            gap: 10px; /* Adjust gap between buttons */
       
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
        .form{
            color:black;
        }
       
    /* Flexbox container to center the button */
.button-container {
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center if the div has a height */
    width: 100%;
    height:fix-mime_content_type; /* Full viewport height to center vertically as well */
}

.animated-button {
    background-color: #4CAF50; /* Green background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 15px 32px; /* Some padding */
    text-align: center; /* Centered text */
    text-decoration: none; /* Remove underline */
    display: inline-block; /* Get the element to align correctly */
    font-size: 16px; /* Increase font size */
    margin: 4px 2px; /* Some margin */
    transition: background-color 0.3s, transform 0.3s; /* Add transition for background and transform */
    cursor: pointer; /* Add a pointer cursor on hover */
}

.animated-button:hover {
    background-color: red; /* Darker green on hover */
    transform: scale(1.1); /* Scale the button on hover */
}

/* Media queries for responsive design */
@media (max-width: 600px) {
    .animated-button {
        padding: 10px 20px; /* Adjust padding for smaller screens */
        font-size: 14px; /* Adjust font size for smaller screens */
        margin: 2px 1px; /* Adjust margin for smaller screens */
    }
}

    
</style>
    

<script>
  $(document).ready(function() {
    $('#exampleModal').on('shown.bs.modal', function () {
      var messageText = '<?php echo $_SESSION['status']; ?>';
      if(messageText != ''){
        Swal.fire({
          title: "Thank you!",
          text: messageText,
          icon: "success"
        });
      }

      //-------10 numbers limit-//
      document.getElementById('mobileno').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '');
        if (x.length > 10) {
          x = x.substring(0, 10);
        }
        e.target.value = x;
      });
    });
  });
    </script>


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



    <!--menu-->
    <script type="text/javascript" src="menu.js"></script>
    <!--menu end-->


    <section class="heading-page header-text" id="top">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <h6>don't Learn Simply. Learn with project</h6>
                    <h2>Project Training Batches</h2>
                </div>
                <div class="container">
        <div class="dropdown mt-3">
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
        </div>
    </div>
    
            </div>
        </div>

        
    </section>

    
    <section class="meetings-page" id="meetings">
    
        <div class="container">
            <div class="row">
                
                <!----- 1 ---->
                 <div class="container">
                    <div class="row">

                        <div class="col-md-3">
                            <div class="well">
                                <img src="assets\images\events\AWS_WEBINAR.png">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">AWS Webinar</h5>
                    <p style="color:white;">
                        <span>"Unlocking the Power of the Cloud: Join A1 Training Institute's AWS Masterclass!"</span>
                        <span class="more-text">
                            <span>
                           <strong><br> Introduction to AWS </strong> <br>

                           &#8226; Creating a free tier AWS account<br>
                           &#8226; Launching an EC2 Instance<br>
                           &#8226; AWS Networking (VPC)<br>
                           &#8226; AWS Route 53<br>
                           &#8226; Amazon S3 Bucket<br>
                           &#8226; Live Q/A with AWS experts<br>
                           &#8226; Live Project
                                
                            </span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">10-12<br>Aug, 2024</button>
                                <a href=" assets\pdf\events\AWS-Webinar.pdf " target="blank">
                                    <button type="button" class="btn btn-danger btn-md" ><i class="fa fa-download" style="font-size:20px"></i><br>
                                    <span style="margin-left:14px;margin-right:14px;">Notes</span> </button>
                                </a>
                                <br><div style="color: white;margin:10px;margin-left:40px;">07:00 PM-08:00 PM</div>
                            </div>

                            <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
                        Book Now
                        </button>------->
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
                        Book Now
                        </a>         
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
                            More info
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mx-auto"  id="myModalLabel" style="color:black; "><strong>FREE AWS WEBINAR</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="color:black;">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <img src="assets/images/events/aws.jpeg" alt="AWS Webinar" class="img-fluid">
                </a>
                <div class="container my-3">
                    <h1 class="text-center display-4"><strong>FREE <span class="text-warning">AWS</span> WEBINAR</strong></h1>
                    <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER</h4><br>
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
                        <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore, Pune</div>
                    </p><br>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <div class="text-center button-container ">
                        <button type="button" class="btn btn-primary animated-button">Click To Enroll Now</button>
                    </div>
                </a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color:red;">Close</button>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
                    </div>
                </div>
                <hr style="color: white;width: 1130px;">
                 <!-----2 ---->
                 <div class="container">
                    <div class="row">

                        <div class="col-md-3">
                            <div class="well">
                                <img src="assets\images\events\AWS_WEBINAR.png">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">Mean Stack Webinar</h5>
                    <p style="color:white;">
                        <span>"Unlocking the Power of the Cloud: Join A1 Training Institute's AWS Masterclass!"</span>
                        <span class="more-text">
                            <span>
                           <strong><br> Introduction to AWS </strong> <br>

                           &#8226; Creating a free tier AWS account<br>
                           &#8226; Launching an EC2 Instance<br>
                           &#8226; AWS Networking (VPC)<br>
                           &#8226; AWS Route 53<br>
                           &#8226; Amazon S3 Bucket<br>
                           &#8226; Live Q/A with AWS experts<br>
                           &#8226; Live Project
                                
                            </span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">10-12<br>Aug, 2024</button>
                                <a href=" assets\pdf\50_linux_commands.pdf " target="blank">
                                    <button type="button" class="btn btn-danger btn-md" ><i class="fa fa-download" style="font-size:20px"></i><br><span style="margin-left:14px;margin-right:14px;">Notes</span> </button></a>
                                <br><div style="color: white;margin:10px;margin-left:40px;">07:00 PM-08:00 PM</div>
                            </div>

                            <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
                        Book Now
                        </button>------->
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
                        Book Now
                        </a>         
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
                            More info
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mx-auto"  id="myModalLabel" style="color:black; "><strong>FREE Mean Stack WEBINAR</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="color:black;">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <img src="assets/images/events/aws.jpeg" alt="AWS Webinar" class="img-fluid">
                </a>
                <div class="container my-3">
                    <h1 class="text-center display-4"><strong>FREE <span class="text-warning">Mean Stack</span> WEBINAR</strong></h1>
                    <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER</h4><br>
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
                        <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore, Pune</div>
                    </p><br>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <div class="text-center button-container ">
                        <button type="button" class="btn btn-primary animated-button">Click To Enroll Now</button>
                    </div>
                </a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color:red;">Close</button>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
                    </div>
                </div>
                <hr style="color: white;width: 1130px;">
                 <!----- 3 ---->
                 <div class="container">
                    <div class="row">

                        <div class="col-md-3">
                            <div class="well">
                                <img src="assets\images\events\AWS_WEBINAR.png">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">HTML/CSS Webinar</h5>
                    <p style="color:white;">
                        <span>"Unlocking the Power of the Cloud: Join A1 Training Institute's AWS Masterclass!"</span>
                        <span class="more-text">
                            <span>
                           <strong><br> Introduction to AWS </strong> <br>

                           &#8226; Creating a free tier AWS account<br>
                           &#8226; Launching an EC2 Instance<br>
                           &#8226; AWS Networking (VPC)<br>
                           &#8226; AWS Route 53<br>
                           &#8226; Amazon S3 Bucket<br>
                           &#8226; Live Q/A with AWS experts<br>
                           &#8226; Live Project
                                
                            </span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">10-12<br>Aug, 2024</button>
                                <a href=" assets\pdf\50_linux_commands.pdf " target="blank">
                                    <button type="button" class="btn btn-danger btn-md" ><i class="fa fa-download" style="font-size:20px"></i><br><span style="margin-left:14px;margin-right:14px;">Notes</span> </button></a>
                                <br><div style="color: white;margin:10px;margin-left:40px;">07:00 PM-08:00 PM</div>
                            </div>

                            <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
                        Book Now
                        </button>------->
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
                        Book Now
                        </a>         
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
                            More info
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mx-auto"  id="myModalLabel" style="color:black; "><strong>FREE AWS WEBINAR</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="color:black;">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <img src="assets/images/events/aws.jpeg" alt="AWS Webinar" class="img-fluid">
                </a>
                <div class="container my-3">
                    <h1 class="text-center display-4"><strong>FREE <span class="text-warning">AWS</span> WEBINAR</strong></h1>
                    <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER</h4><br>
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
                        <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore, Pune</div>
                    </p><br>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <div class="text-center button-container ">
                        <button type="button" class="btn btn-primary animated-button">Click To Enroll Now</button>
                    </div>
                </a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color:red;">Close</button>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
                    </div>
                </div>
                <hr style="color: white;width: 1130px;">
                 <!----- 4 ---->
                 <div class="container">
                    <div class="row">

                        <div class="col-md-3">
                            <div class="well">
                                <img src="assets\images\events\AWS_WEBINAR.png">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">AWS Webinar</h5>
                    <p style="color:white;">
                        <span>"Unlocking the Power of the Cloud: Join A1 Training Institute's AWS Masterclass!"</span>
                        <span class="more-text">
                            <span>
                           <strong><br> Introduction to AWS </strong> <br>

                           &#8226; Creating a free tier AWS account<br>
                           &#8226; Launching an EC2 Instance<br>
                           &#8226; AWS Networking (VPC)<br>
                           &#8226; AWS Route 53<br>
                           &#8226; Amazon S3 Bucket<br>
                           &#8226; Live Q/A with AWS experts<br>
                           &#8226; Live Project
                                
                            </span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                        
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">10-12<br>Aug, 2024</button>
                                <a href=" assets\pdf\50_linux_commands.pdf " target="blank">
                                    <button type="button" class="btn btn-danger btn-md" ><i class="fa fa-download" style="font-size:20px"></i><br><span style="margin-left:14px;margin-right:14px;">Notes</span> </button></a>
                                <br><div style="color: white;margin:10px;margin-left:40px;">07:00 PM-08:00 PM</div>
                            </div>

                            <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
                        Book Now
                        </button>------->
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
                        Book Now
                        </a>         
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
                            More info
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mx-auto"  id="myModalLabel" style="color:black; "><strong>FREE AWS WEBINAR</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="color:black;">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <img src="assets/images/events/aws.jpeg" alt="AWS Webinar" class="img-fluid">
                </a>
                <div class="container my-3">
                    <h1 class="text-center display-4"><strong>FREE <span class="text-warning">AWS</span> WEBINAR</strong></h1>
                    <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER</h4><br>
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
                        <div class="info-item"><strong>Location:</strong> Noida, Delhi, Bangalore, Pune</div>
                    </p><br>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="_blank">
                    <div class="text-center button-container ">
                        <button type="button" class="btn btn-primary animated-button">Click To Enroll Now</button>
                    </div>
                </a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color:red;">Close</button>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
                    </div>
                </div>
                <hr style="color: white;width: 1130px;">
            
                     
    </div>
</div>

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

<!---SEARCH BAR / FILTER BAR START---->
<script>

        function toggleDropdown() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        function filterFunction() {
            var input, filter, ul, li, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myDropdown");
            li = ul.getElementsByTagName("li");

            for (i = 0; i < li.length; i++) {
                txtValue = li[i].textContent || li[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    </script>

    
<!---SEARCH BAR / FILTER BAR eND---->

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
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll('.more-text').forEach(function(element) {
                element.style.display = "none";
            });
        });
    </script>
<!----Read More Script Ends ------->

</body>


</body>

</html> 

