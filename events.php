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
</script>
 <script>
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
</script>

    
    <script>
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

<!-- Modal -->
<div class="modal fade" id="callbackModal" tabindex="-1" aria-labelledby="callbackModalLabel" aria-hidden="true" >
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="callbackModalLabel" style="color:red; margin-left:290px; font-size:30px;">Book Now</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Contact Form -->
               
                <form class="form" action="sendmail.php" method="POST" class="form-container" style="height: 475px; overflow-y: scroll;">
                    
                <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Your Name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Your Email">
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Subject</label>
                        <select id="selectpickerGroups" class="form-select selectpicker w-100" data-style="btn-default" style="border: 1px solid black;">
                            <option>Choose Subject</option>
                            <optgroup label="Web Designing">
                                <option>Angular Js</option>
                                <option>React Js</option>
                                <option>Web Designing</option>
                                <option>UI & UX</option>
                                <option>PHP Experts</option>
                                <option>PHP Full Stack</option>
                            </optgroup>
                            <optgroup label="Cloud Computing">
                                <option>AWS Training</option>
                                <option>AZURE Training</option>
                                <option>GCP</option>
                            </optgroup>
                            <optgroup label="Devops">
                                <option>Kubemetes Training</option>
                                <option>Docker Certification Training</option>
                                <option>Ansible Training</option>
                                <option>Devops Training</option>
                                <option>Jenkins</option>
                                <option>Terraform</option>
                                <option>Linux</option>
                                <option>Git</option>
                                <option>Shell Scripting</option>
                            </optgroup>
                            <optgroup label="Programming">
                                <option>Python Training</option>
                                <option>JavaScript Training</option>
                                <option>Unix Shell Scripting Training</option>
                                <option>Java Certification</option>
                                <option>C And C++ Training</option>
                                <option>.NET Training</option>
                            </optgroup>
                            <optgroup label="Database Developer">
                                <option>MySQL Training</option>
                                <option>MongoDB Training</option>
                                <option>SQL Server DBA Training</option>
                            </optgroup>
                            <optgroup label="Mobile App Development">
                                <option>Android</option>
                                <option>I-Phone</option>
                            </optgroup>
                            <optgroup label="Data Science & AI">
                                <option>Machine Learning Training</option>
                                <option>Data Science Training</option>
                                <option>Data Science With Python Training</option>
                                <option>Deep Learning Course</option>
                                <option>Artificial Intelligence Course</option>
                            </optgroup>
                            <optgroup label="MIS-Advanced Excel-BI Tools">
                                <option>Power Bi</option>
                                <option>Advanced Microsoft Excel</option>
                                <option>MIS</option>
                            </optgroup>
                            <optgroup label="Digital Marketing">
                                <option>Advanced Digital Marketing</option>
                                <option>Digital Marketing</option>
                            </optgroup>
                            <optgroup label="Industrial Training">
                                <option>6 Weeks Summer Training</option>
                                <option>6 Months Industrial Training</option>
                            </optgroup>
                            <optgroup label="Multimedia Animation-Graphics">
                                <option>Graphic Designing</option>
                                <option>Graphic Designing Pro</option>
                                <option>Motion Graphic Course </option>
                                <option>Multimedia & Animation </option>
                                <option>Graphic Motion Pro Course</option>
                                <option>Multimedia & Animation (Diploma)</option>
                                <option>Videograpy Course</option>
                                <option>Scriptwriting & Story Boarding</option>
                                <option>Film Making</option>
                            </optgroup>
                            <optgroup label="Software Testing">
                                <option>Manual Testing</option>
                                <option>Manual + Selenium</option>
                                <option>Full Stack QA</option>
                                <option>Java With Selenium </option>
                                <option>REST Assured API</option>
                                <option>Appium Testing</option>
                                <option>API Testing</option>
                            </optgroup>
                            <optgroup label="Project Management">
                                <option>Primavera P6 Testing</option>
                                <option>Agile Testing</option>
                                <option>Microsoft Excel Training</option>
                                <option>Scrum Master Training</option>
                            </optgroup>
                            <optgroup label="Full Stack Development">
                                <option>MEAN Stack</option>
                                <option>Mern Stack</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <div class="mb-3">
        <label for="Address">Address:</label>
       <textarea  name="Address" id="address" class="form-control" rows="3" placeholder=" Address"></textarea>
</div>
                    <button type="submit" name="submitContact" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                   
                </form>
            </div>
        </div>
    </div>
</div>

                                 <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-right: 0px;">
        More info
    </button>

    <!-- Large Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-lg-custom">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel"style="color:black;margin-left:13pc;"><strong>FREE AWS WEBINAR - REGISTRATION</strong></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"style="color:black;">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" target="blank">
                        <img src="assets\images\events\aws.jpeg" alt="">
                    </a>

                    <div class="container my-5">
        <h1 class="text-center">FREE AWS WEBINAR - REGISTRATION</h1>
        <h4 class="text-center">LEARN ABOUT THE MOST POPULAR CLOUD SERVICE PROVIDER</h4>
        
        <h2>Introduction to AWS:</h2>
        <ul>
        <li>&#8226;  Creating a free tier AWS account</li>
       <li> &#8226;  Launching an EC2 Instance</li>
        </ul>

        <h2>AWS Networking (VPC)</h2>
        <h2>AWS Route 53</h2>
        <h2>Amazon S3 Bucket</h2>
        <h2>Live Q/A with AWS experts</h2>
        <h2>Live Project</h2>

        <h2>AWS Webinar Series: Getting Started With A1TI</h2>

        <p><strong>Date:</strong> 10-12 August</p>
        <p><strong>Time:</strong> 7-8 PM</p>
        <p><strong>Location:</strong> Noida, Delhi, Bangalore, Pune</p>
    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   
                </div>
            </div>
        </div>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="color: white;width: 1130px;">
               
<!----- 2 ---->
               <div class="container">
                    <div class="row">

                        <div class="col-md-3">
                            <div class="well">
                                <img src="assets\images\events\html-css.jpeg">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">UI Project </h5>
                    <p style="color:white;">
                        <span>A project manager plays a stellar role in project management...</span>
                        <span class="more-text">
                            <span>where tasks, goals, deadlines and unpredictable circumstances are intertwined. However, managing a project effectively is usually not as easy as it sounds and requires more than one person’s supervision.</span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">07<br>Feb,2024</button>
                                <div style="color: white;">9:15 am-5:00 pm</div>
                            </div>
                                      <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
Book Now
</button>------->
<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
Book Now
</a>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-right: 0px;">
                                    More info
                                  </button>
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
                                <img src="assets\images\events/webinar.avif">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">UI Project </h5>
                    <p style="color:white;">
                        <span>A project manager plays a stellar role in project management...</span>
                        <span class="more-text">
                            <span>where tasks, goals, deadlines and unpredictable circumstances are intertwined. However, managing a project effectively is usually not as easy as it sounds and requires more than one person’s supervision.</span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">07<br>Feb,2024</button>
                                <div style="color: white;">9:15 am-5:00 pm</div>
                            </div>
                                      <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
Book Now
</button>------->
<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
Book Now
</a>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-right: 0px;">
                                    More info
                                  </button>
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
                                <img src="assets\images\events\webinar.avif">
                            </div>
                        </div>
                        <div class="col-md-6">
                        
                            <div class="col-lg ">
                    <h5 style="margin-top: 23px; color: white;">UI Project </h5>
                    <p style="color:white;">
                        <span>A project manager plays a stellar role in project management...</span>
                        <span class="more-text">
                            <span>where tasks, goals, deadlines and unpredictable circumstances are intertwined. However, managing a project effectively is usually not as easy as it sounds and requires more than one person’s supervision.</span>
                        </span>
                        <span class="read-more-btn" onclick="toggleReadMore(this)">Read More</span>
                    </p>
                </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="well-1" style="padding:0px">
                            <div class="well">
                                <button type="button" class="btn btn-danger btn-md">07<br>Feb,2024</button>
                                <div style="color: white;">9:15 am-5:00 pm</div>
                            </div>
                                     <!-- Button trigger modal -->
                             <!------<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
Book Now
</button>------->
<a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzJJhzAuTsPkmVGtZ9VG3kTEwaYvOZj4xBiCy73GuBUgzBw/viewform" type="button" target="blank" class="btn btn-primary">
Book Now
</a>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-right: 0px;">
                                    More info
                                  </button>
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

