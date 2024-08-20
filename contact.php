<?php session_start(); ?>
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
  <style>
    .side{
      margin-bottom:20px;
    }
  </style>

<body>
 <!--Start of Tawk.to Script-->
 <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/66bb21d20cca4f8a7a754fad/1i55fo8ds';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
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
          <h6>Connect with Us</h6>
          <h2>Connect form</h2>
        </div>
      </div>
    </div>
  </section>

 
                <section class="contact-us" id="contact">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-9 align-self-center" style=" margin-bottom:112px;">
                          <div class="row">
                            <div class="col-lg-12">
                              <form id="contact" action="contactmail.php" method="post">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <h2>Let's get in touch</h2>
                                  </div>
                                  <div class="col-lg-4">
                                    <fieldset>                                   
                                    
                                    <input type="text" name="full_name" id="fullname" required class="form-control" placeholder="Enter Name">
                                    </fieldset>
                                  </div>
                                  <div class="col-lg-4">
                                    <fieldset>
                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required="">
                                  </fieldset>
                                  </div>
                                  <div class="col-lg-4">
                                    <fieldset>
                                      <input name="subject" type="text" id="subject" placeholder="SUBJECT..." required="">
                                    </fieldset>
                                  </div>
                                  <div class="col-lg-12">
                                    <fieldset>
                                      <textarea name="message" type="text" class="form-control" id="message" placeholder="YOUR MESSAGE..." ></textarea>
                                    </fieldset>
                                    
                                  </div>
                                  <div class="col-lg-12">
                                    <fieldset>
                                      
                                      <button type="submit" name="submitContact" class="btn btn-primary">Send Mail</button>
                                    </fieldset>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="right-info side ">
                            <ul>
                              <li>
                                <h6>Phone Number</h6>
                                <span style=" font-size : 17px;">8368979712 / 6380486914</span>
                                
                              </li>
                              <li>
                                <h6>Email Address</h6>
                                <span style=" font-size : 17px;">a1training167@gmail.com</span>
                              </li>
                              <li>
                                <h6>Street Address</h6>
                                <span style=" font-size : 17px;">C-167, Omicron 1, 6% Abadi, Greater Noida 201310</span>
                              </li>
                              <li>
                                <h6>Website URL</h6>
                                <span style=" font-size : 17px;">www.a1training.in</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                
            <div class="col-lg-12">
              <div class="pagination">
                
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
              scrollTop: reqSectionPos },
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
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

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

    </script>

</body>


  </body>

</html>
