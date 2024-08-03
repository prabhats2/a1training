<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="TemplateMo">
  <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>A1 Training Institute</title>

  <!-- Bootstrap core CSS 
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>-->
  


  <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css">
  <link rel="stylesheet" href="assets/css/templatemo-edu-meeting.css">
  <link rel="stylesheet" href="assets/css/owl.css">
  <link rel="stylesheet" href="assets/css/lightbox.css">
  <style>
    /* Styles for the modal */
    .modal_pop {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.5);
    }
    
    /* Modal content */
    .modal-content-pop {
        background-color: #fefefe;
        margin: 15% auto;
        padding-top: auto;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid #888;
        width: 80%;
        max-width: 400px;
        text-align: center;
        border-radius: 5px;
    }
    
    /* Close button */
      .close{
    position: absolute;
    top: -18px;
    right: -6px; /* Adjust the position to the right */
    color: #000; /* Set the color of the close button */
    font-size: 28px; /* Adjust the font size */
    font-weight: bold; /* Optionally, adjust the font weight */
    padding: 10px; /* Add padding for better clickability */
    cursor: pointer; /* Set cursor to pointer to indicate it's clickable */
  }
    
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

</style>
</head>

<body>
  <!-- The Modal -->
<div id="myModal" class="modal_pop">
  <!---- Modal content -->
  <div class="modal-content-pop">
      <span  style="margin-left:360px;"class="close1">&times;</span>
      <video width="100%" controls>
        <source src="video/VID-20240426-WA0004.mp4" type="video/mp4">
      </video>
  </div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the close button
var closeBtn = document.querySelector('.close1');

// When the page loads
window.onload = function() {
  // Show the modal
  modal.style.display = 'block';
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = 'none';
  }
};
</script>
  <!--menu-->
  <script type="text/javascript" src="menu.js"></script>
  <!--menu end-->

  <!-- ***** Main Banner Area Start ***** -->
  <section class="section main-banner" id="top" data-section="section1">
    <video autoplay muted loop id="bg-video">
      <source src="assets/images/course-video.mp4" type="video/mp4" />
    </video>


    <div class="video-overlay header-text">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="caption">
              <h6>Hello Students</h6>
              <h2>Welcome to A1 Training institute</h2>
              <p>At A1TI, we believe that education is the key to unlocking limitless possibilities.We invite you to
                embark on a learning journey with us and discover the exciting world of software development and
                technology.
                Invest in your future. Contact us today to learn more about our programs and how we can help you achieve
                your goals.
              </p>
              <div class="main-button-red">
                <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Main Banner Area End ***** -->

  <section class="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">

          <div class="owl-service-item owl-carousel">
            <div class="item">
              <div class="icon">
                <img src="assets/images/batches/mean.png" alt="">
              </div>
              <div class="down-content">
                <h4>MEAN Stack</h4>
                <p>Starting Date: 01-01-2024</p>
                <button  onclick="window.location.href='#targetDiv'"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
          Request a call back>>
        </button>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <img src="assets/images/batches/mern.png" alt="">
              </div>
              <div class="down-content">
                <h4>MERN Stack</h4>
                <p>Starting Date: 01-01-2024</p>
                <button  onclick="window.location.href='#targetDiv'" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
          Request a call back>>
        </button>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <img src="assets/images/batches/aws.png" alt="">
              </div>
              <div class="down-content">
                <h4>AWS Training</h4>
                <p>Starting Date: 01-01-2024</p>
                <button  onclick="window.location.href='#targetDiv'"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
          Request a call back>>
        </button>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <img src="assets/images/batches/devops.png" alt="">
              </div>
              <div class="down-content">
                <h4>Devops Training</h4>
                <p>Starting Date: 01-01-2024</p>
                <button  onclick="window.location.href='#targetDiv'"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
          Request a call back>>
        </button>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <img src="assets/images/batches/python.png" alt="">
              </div>
              <div class="down-content">
                <h4>Python Training</h4>
                <p>Starting Date: 01-01-2024</p>
                <button  onclick="window.location.href='#targetDiv'"type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
          Request a call back>>
        </button>

                
              </div>
            </div>

          </div>
        </div>
        

  <!-- The Modal -->
  <div class="modal fade" id="myModal1" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="contactModalLabel">LET'S GET IN TOUCH</h5>
             <a href=> </a> <button type="button" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>
          </div>
          <div class="modal-body" style="text-align: left;">
              <!-- Contact Form -->
              <div class="row">
                  <div class="col-sm-3 m d-none d-sm-block"> 
                      <div class="container-fluid">
                          <div class="row n">
                              <div>
                                  <a href="images/img 21.png" class="d-block mb-3 gallery-item" data-fancybox="gallery"
                                      data-caption="Image 1">
                                      <img src="images/img 21.png" class="img-fluid" alt="Image 1">
                                  </a>
                              </div>
                              <div>
                                  <a href="images/img 22.png" class="d-block mb-3 gallery-item" data-fancybox="gallery"
                                      data-caption="Image 2">
                                      <img src="images/img 22.png" class="img-fluid" alt="Image 2">
                                  </a>
                              </div>
                              <div>
                                  <a href="images/img 23.png" class="d-block mb-3 gallery-item" data-fancybox="gallery"
                                      data-caption="Image 3">
                                      <img src="images/img 23.png" class="img-fluid" alt="Image 3">
                                  </a>
                              </div>
                              <div>
                                  <a href="images/img 24.png" class="d-block mb-3 gallery-item" data-fancybox="gallery"
                                      data-caption="Image 3">
                                      <img src="images/img 24.png" class="img-fluid" alt="Image 3">
                                  </a>
                              </div>
                              <div>
                                  <a href="images/img 25.png" class="d-block mb-3 gallery-item" data-fancybox="gallery"
                                      data-caption="Image 3">
                                      <img src="images/img 25.png" class="img-fluid" alt="Image 3">
                                  </a>
                              </div>
                              <div>
                                  <a href="images/img 26.png" class="d-block mb-3 gallery-item" data-fancybox="gallery"
                                      data-caption="Image 3">
                                      <img src="images/img 26.png" class="img-fluid" alt="Image 3">
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>  
                  <div class="col-sm-6">
                      <div class="container text-center">
                          <img src="images/img.png" alt="" class="img-fluid col-md-4">
                      </div>
                      <h1 class=" text-center">INQUIRY FORM</h1>
                      <div class="container">
                          <form action="/action_page.php">
                              <div class="form-group">
                                  <label for="email">Email:</label>
                                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                              </div>
                              <div class="form-group">
                                  <label for="Name">Name:</label>
                                  <input type="Name" class="form-control" id="Name" placeholder="Enter Name" name="Name">
                              </div>
                              <div class="form-group">
                                  <label for="DOB">DOB:</label>
                                  <input type="date" class="form-control" id="DOB" placeholder="Enter DOB" name="DOB">
                              </div>
                              <div class="form-group">
                                  <label for="Mobile No">Mobile No:</label>
                                  <input type="number" class="form-control" id="Mobile No" placeholder="Enter Mobile No"
                                      name="Mobile No">
                              </div>
                              <div class="form-group">
                                  <label for="Address">Address:</label>
                                  <textarea class="form-control" rows="2" id="Address" placeholder="Enter Address"
                                      name="text"></textarea>
                              </div>
                              <div class="form-group">
                                  <label for="name">How did you learn about us?:</label>
                                  <input type="text" class="form-control" id="name" placeholder="Instagram" name="name">
                              </div>
                              <div class="form-group">
                                  <label for="sel1">Select Subject:</label>
                                  <select class="form-control" id="sel1" name="sellist1">
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
                              <div class="form-group">
                                  <label for="sel1">Select Mode of Course (select one):</label>
                                  <select class="form-control" id="sel1" name="sellist1">
                                      <option>Select Mode of Course</option>
                                      <option>Online</option>
                                      <option>Offline</option>
                                  </select>
                              </div>
                              <div class="form-group">
                                  <label for="name">Other Courses Not Included in list:</label>
                                  <input type="text" class="form-control" id="name" placeholder="Enter name" name="name">
                              </div>
                              <!----- <h2 class=" text-center">For office Use Only</h2>
                              <div class="form-group">
                                <label for="name">Date</label>
                                <input type="Date" class="form-control" id="Date" placeholder="Enter Date" name="Date">
                              </div>
                              <div class="form-group">
                                <label for="Registration No">Registration No</label>
                                <input type="number" class="form-control" id="Registration No" placeholder="Enter Registration No" name="Registration No">
                            </div>----->
                              <button type="submit" class="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>
                  <div class="col-sm-3 m ">
                      <h1 class=" text-center">Course</h1>
                      <div class="n">
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 1.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">MEAN/MERN Stack</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 2.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">AI/Maching learning</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 3.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Android Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 4.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">UI Development</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 5.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Graphic designing</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 6.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Angular/React Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 7.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">AWS/Azure</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 8.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Excel Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 9.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Digital Marketing</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 10.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Python Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 11.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Sap Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 12.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Automation Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 13.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Core & Advanced Java</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 14.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> .NET Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 15.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Software Testing</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 16.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Data Science</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 17.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> DevOps Training</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 18.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> C/C++</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 19.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Computer Science 11th</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 19.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title"> Computer Science 12th</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
                              </div>
                          </div>
                          <div class="card" style="width:100%">
                              <img class="card-img-top" src="images/img 20.jpg" alt="Card image" style="width:100%">
                              <div class="card-body text-center">
                                  <h4 class="card-title">Basic Computer</h4>
                                  <a href="tel:+918368979712" class="btn btn-primary "><i class="fa fa-phone" id="phone"><img
                                              src="images/call_icon.png" alt=""></i></a>
                                  <a href="https://wa.me/8368979712" class="btn btn-success "><img src="images/logo.png"
                                          alt="" class="bg-success"></a>
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

  <section class="upcoming-meetings" id="meetings" style="padding-bottom: 20px;">
    <div class="container">
      <div class="row"id="targetDiv" >
     
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Welcome to A1 Training Institute – Your Gateway to Excellence in Software Education!
            </h2>
          </div>
        </div>
         <!-- Target div -->

        <div class="col-lg-4">
        
        <div class="card">
            <div class="card-header">
                <h4 style="text-align:center; ">Request A Call Back</h4>
            </div>
            <div class="card-body">
            <!-- Contact Form -->
 
            <form action="sendmail.php" method="POST" class="form-container" style="height: 475px; overflow-y: scroll;">
<!---Full Name--->
<div class="mb-3">
        <label for="Name">Name:</label>
        <input type="text" name="full_name" id="fullname" required class="form-control" placeholder="Enter Name">
    </div>

<!---E-mail Address--->
<div class="mb-3">
      <label for="email_address">Email Address:</label>
      <input type="email" name="email" id="email_address" required class="form-control"placeholder="E-Mail Address" />
  </div>
<!---mobileno--->
<div class="mb-3">
      <label for="mobileno"> Mobile No.</label>
      <input type="number" name="mobileno" id="mobileno" pattern="\d{10}" maxlength="10" required class="form-control"placeholder=" Mobile No" />
    </div>
 

<!---Select Subject:--->    
<div class="mb-3">
        <label for="sel1">Select Subject:</label>
        <select id="selectpickerGroups" name="subject" required  class="form-select selectpicker w-100" data-style="btn-default"placeholder=" Subject"
        style="border: 1 px solid black;">
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
     <!------course mode ------->
<div class="mb-3" >
        <label for="mode">Select Mode of Course (select one):</label><br>
        <input type="radio" id="mode" name="mode" value="Online">
  <label for="html">Online</label><br>
  <input type="radio" id="mode" name="mode" value="Offline">
  <label for="css">Offline</label><br>
</div>
       <!---Dob---> 
<div class="mb-3">
        <label for="DOB">DOB:</label>
        <input type="date" name="Dob" id="dob"  class="form-control" placeholder=" DOB:">
</div>
    <!---Address--->
<div class="mb-3">
        <label for="Address">Address:</label>
       <textarea  name="Address" id="address" class="form-control" rows="3" placeholder=" Address"></textarea>
</div>
<!-------How did you learn about us?:--------> 
<div class="mb-3">
        <label for="Learn About Us" >How did you learn about us?:</label>
        <input type="text" name="About_us" id="Learn_About_Us" placeholder="Enter name" class="form-control" placeholder="Social Media ">
    </div>
    <!------courses not listed in list ------->
<div class="mb-3">
  <label for="message">Other Courses Not Included in list:</label>
  <textarea name="message" id="not listed "  class="form-control" rows="3"placeholder="Other Courses"></textarea>
</div>
   <!------Submit------->
    <button  type="submit" name="submitContact" class="btn btn-primary">Submit</button>
</form>
</div>
        </div>
    </div>
    

    <script>
        document.getElementById('redirectButton').addEventListener('click', function() {
            document.getElementById('targetDiv').scrollIntoView({ behavior: 'smooth' });
        });
    </script>
        <div class="col-lg-8">
          <div class="row">
            <div class="accordions is-first-expanded" style="margin: 0px;">
              <article class="accordion">
                <div class="accordion-head">
                  <span>Welcome to A1 Training Institute – Your Gateway to Excellence in Software Education!
                  </span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p>At A1TI, we understand the transformative power of technology and the critical role it plays in
                      today's fast-paced world. Our mission is to empower individuals and organizations with the
                      knowledge and skills they need to thrive in the digital age.
                    </p>
                  </div>
                </div>
              </article>
              <article class="accordion">
                <div class="accordion-head">
                  <span>Who We Are:
                  </span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p>A1TI is a leading destination for comprehensive software training and education. With a legacy of
                      10+ years in the industry, we have earned a reputation for excellence, innovation, and dedication
                      to our students' success.
                    </p>
                  </div>
                </div>
              </article>
              <article class="accordion">
                <div class="accordion-head">
                  <span>Why Choose Us?
                  </span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p><b>Expert Instructors:</b> Our team of experienced and certified instructors are experts in their
                      respective fields.They bring real-world industry experience to the classroom ensuring that you
                      receive practical and up-to-date knowledge.

                      <br>

                      <b>Cutting-Edge Curriculum:</b> Our courses are meticulously designed to cover the latest
                      technologies and industry trends. We offer a wide range of programs, from beginner to advanced
                      levels, to meet your specific learning needs.

                      <br>

                      <b>Hands-On Learning:</b> We believe in learning by doing. Our hands-on approach ensures that you
                      not only understand the concepts but also gain practical skills that are immediately applicable in
                      the workplace.

                      <br>


                      <b>Flexible Learning Options:</b> We understand that everyone has a unique schedule and learning
                      style. That's why we offer flexible learning options,including in-person classes, online courses,
                      and customized corporate training solutions.

                      <br>


                      <b>Career Support:</b> Your success is our top priority. We provide career counseling, job
                      placement assistance, and networking opportunities to help you take the next step in your career.



                    </p>
                  </div>
                </div>
              </article>
              <article class="accordion last-accordion">
                <div class="accordion-head">
                  <span>Who We Serve:</span>
                  <span class="icon">
                    <i class="icon fa fa-chevron-right"></i>
                  </span>
                </div>
                <div class="accordion-body">
                  <div class="content">
                    <p><b>Individuals:</b> Whether you're a beginner looking to start a career in software development
                      or an experienced professional seeking to upskill, we have the right program for you.

                      <br>

                      <b>Corporations:</b> We partner with businesses to provide tailored training solutions for their
                      teams, helping them stay competitive in a rapidly evolving tech landscape.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="apply-now" id="apply" style="padding: 40px 0px;">
    <div class="container">
      <div class="col-lg-12">
        <div class="section-heading">
          <h2 style="text-align: center;">Our Students Review</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div id="testimonialSlider" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="testimonial">
                  <img src="assets/images/profile-person1.png" alt="Testimonial Image 1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                  <h5>John Doe</h5>
                  <p>Company ABC</p>
                </div>
              </div>

              <div class="carousel-item">
                <div class="testimonial">
                  <img src="assets/images/profile-person3.png" alt="Testimonial Image 2">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                  <h5>Jane Doe</h5>
                  <p>Company XYZ</p>
                </div>
              </div>

              <div class="carousel-item">
                <div class="testimonial">
                  <img src="assets/images/profile-female2.png" alt="Testimonial Image 3">
                  <p>Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h5>Bob Smith</h5>
                  <p>Company DEF</p>
                </div>
              </div>

              <div class="carousel-item">
                <div class="testimonial">
                  <img src="assets/images/profile-person1.png" alt="Testimonial Image 4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                  <h5>Alice Johnson</h5>
                  <p>Company GHI</p>
                </div>
              </div>

            </div>

            <button  style="margin-left:-59px" class="carousel-control-prev" type="button" data-bs-target="#testimonialSlider"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button style="margin-right:-59px" class="carousel-control-next" type="button" data-bs-target="#testimonialSlider"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section class="our-courses" id="courses" style="padding-bottom: 40px;padding-top: 40px;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Our Popular Courses</h2>
          </div>
        </div>
         <div class="col-lg-12">
           <div class="owl-courses-item owl-carousel">
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/mean.mern.png" alt="Course One">
              <div class="down-content">
                <h4>MERN Stack </h4></a>
              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/ai-machine-learning.png" alt="Course Two">
              <div class="down-content">
                <h4>AI/ML </h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/Aptitute.png" alt="">
              <div class="down-content">
                <h4>Aptitude Training</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/UI-Development.jpg" alt="">
              <div class="down-content">
                <h4>UI Development</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/Graphic-designing.png" alt="">
              <div class="down-content">
                <h4>Graphic Designing</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/Android-Training.jpg" alt="">
              <div class="down-content">
                <h4>Android Training</h4></a>
              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/aws-azure.webp" alt="">
              <div class="down-content">
                <h4>AWS/AZURE</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/Excel-Training.jpg" alt="">
              <div class="down-content">
                <h4>Excel</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/Angular-training.png" alt="">
              <div class="down-content">
                <h4>Angular-training</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/python.png" alt="">
              <div class="down-content">
                <h4>Python</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/SAP-Training.jpg" alt="">
              <div class="down-content">
                <h4>SAP-Training</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/internship-training.png" alt="">
              <div class="down-content">
                <h4>Internship Training</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/Automation-Training.png" alt="">
              <div class="down-content">
                <h4>Automation-Training</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/data-science.jpg" alt="">
              <div class="down-content">
                <h4>Data Science</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/new-image-dbms.png" alt="">
              <div class="down-content">
                <h4>DBMS</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/software-testing.png" alt="">
              <div class="down-content">
                <h4>Software Testing</h4></a>

              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/digital-marketing.jpg" alt="">
              <div class="down-content">
                <h4>Digital Marketing</h4></a>
              </div>
            </div>
            <div class="item">
              <a href="professional-courses.html"><img src="assets/images/professional-courses/react-js-training.png" alt="">
              <div class="down-content">
                <h4>ReactJS Training</h4></a>

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
  <script src="assets/js/video.js"></script>
  <script src="assets/js/slick-slider.js"></script>
  <script src="assets/js/custom.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>

        var messageText = "<?= $_SESSION['status'] ?? '';  ?>";
        if(messageText != ''){
            Swal.fire({
                title: "Thank you!",
                text: messageText,
                icon: "success"
            });
            <?php unset($_SESSION['status']); ?>
        }

    </script><!--created by manish for sweet alert -->
  
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
  <!----10 number limit in form ------->
  <script>
document.getElementById('mobileno').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '');
    if (x.length > 10) {
        x = x.substring(0, 10);
    }
    e.target.value = x;
});
</script>

</body>

</body>

</html>