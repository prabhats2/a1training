 
<?php
// Set the session variable
$_SESSION['status'] = 'Thank you for registering!';
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
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
                                <button type="button" class="btn btn-danger btn-md">07<br>Feb, 2024</button>
                                <a href=" assets\pdf\50_linux_commands.pdf " target="blank">
                                    <button type="button" class="btn btn-danger btn-md" style="margin-left:10px;"><i class="fa fa-download" style="font-size:20px"></i><br><span style="margin-left:14px;margin-right:14px;">Notes</span> </button></a>
                                <br><div style="color: white;margin:10px;margin-left:40px;">9:15 am-5:00 pm</div>
                            </div>

                                <!-- Button to trigger the modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Book Now
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style="color:black; margin-left:150px;"> <strong>Register For Webinar</strong></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Contact Form -->
        <form action="sendmail.php" method="POST" class="form-container">
<!---Full Name--->
<div class="mb-3">
        <label for="Name"class="form">Name:</label>
        <input type="text" name="full_name" id="fullname" required class="form-control" placeholder="Enter Name">
    </div>

<!---E-mail Address--->
<div class="mb-3">
      <label for="email_address"class="form">Email Address:</label>
      <input type="email" name="email" id="email_address" required class="form-control"placeholder="E-Mail Address" />
  </div>
<!---mobileno--->
<div class="mb-3">
      <label for="mobileno"class="form"> Mobile No.</label>
      <input type="number" name="mobileno" id="mobileno" pattern="\d{10}" maxlength="10" required class="form-control"placeholder=" Mobile No" />
    </div>
    <!---Address--->
<div class="mb-3">
        <label for="Address"class="form">Address:</label>
       <textarea  name="Address" id="address" class="form-control" rows="3" placeholder=" Address"></textarea>
</div>
   <!------Submit------->
    <button  type="submit" name="submitContact" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" style="margin-right: 0px;">
                                    More info
                                  </button>
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
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal" style="margin-right: 10px;">
                                    Book Now
                                  </button>
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
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal" style="margin-right: 10px;">
                                    Book Now
                                  </button>
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
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal" style="margin-right: 10px;">
                                    Book Now
                                  </button>
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

