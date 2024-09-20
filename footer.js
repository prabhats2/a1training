document.write(`  <section class="contact-us" id="contact" style="background-color: rgb(40, 89, 153);background-image: none;padding: 50px 0px 0px 0px;">
 <link rel="stylesheet" href="assets/css/icon-style.css">
 <div class="call-icon-left icons">
        <a href="tel:+91 8368979712">
            <img src="images/call.png" alt="Call">
        </a>
    </div>

    <div class="whatsapp-icon-right icons">
        <a href="https://wa.me/8368979712" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>
    </div>
 <div class="container-fluid">
  <div class="row">
    <div class="col-lg-12 align-self-center">
      <div class="row">
        <div class="col-lg-12">
          <form id="contact" action="" method="post" style="margin-bottom:30px;">
            <div class="row">
              <div class="col-lg-12">
                <h2>Locate our office</h2>
              </div>
              <div class="col-md-12">
                <div class="contact-details">
                  <style>
                    .tab-btn {
                      background-color: #f1f1f1;
                      border: 3px solid #FF0000;
                      padding: 10px 20px;
                      cursor: pointer;
                      margin-bottom: 10px;
                      margin-right: 10px; /* Adds space between buttons */
                    }

                    .button {
                      background-color: #04AA6D;
                      border: none;
                      color: white;
                      padding: 5px 10px;
                      text-align: center;
                      display: inline-block;
                      font-size: 16px;
                      margin: 4px 2px;
                      transition-duration: 0.4s;
                      cursor: pointer;
                    }

                    .button1 {
                      background-color: white;
                      color: black;
                      border: 2px solid #04AA6D;
                    }

                    .button1:hover {
                      background-color: #04AA6D;
                      color: white;
                    }

                    .button2 {
                      background-color: white;
                      color: black;
                      border: 2px solid #008CBA;
                    }

                    .button2:hover {
                      background-color: #008CBA;
                      color: white;
                    }

                    .button3 {
                      background-color: white;
                      color: black;
                      border: 2px solid #f44336;
                    }

                    .button3:hover {
                      background-color: #f44336;
                      color: white;
                    }

                    .button4 {
                      background-color: white;
                      color: black;
                      border: 2px solid #4d13b9;
                    }

                    .button4:hover {
                      background-color: blue;
                      color: white;
                    }

                    /* Centering content in the display-container */
                    .display-container {
                      border: 2px solid #ddd;
                      padding: 20px;
                      margin-top: 20px;
                      min-height: 100px;
                      display: flex;
                      justify-content: center; /* Center horizontally */
                      align-items: center; /* Center vertically */
                      text-align: center; /* Center the text */
                    }
                  </style>

                  <!-- Buttons -->
                  <div class="tab-container-fluid">
                    <div class="tab-btn button button1" onclick="openTab('tab1')">NOIDA EXTENSION</div>
                    <div class="tab-btn button button2" onclick="openTab('tab2')">GREATER NOIDA BRANCH I</div>
                    <div class="tab-btn button button3" onclick="openTab('tab3')">GREATER NOIDA BRANCH II</div>
                    <div class="tab-btn button button4" onclick="openTab('tab4')">DELHI</div>
                  </div>

                  <!-- Hidden content for each tab -->
                  <div id="tab1" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Noida Extension</strong></h6>
                      <li><p><strong>Address:- </strong>Earthcon Sanskriti, Sector 1, Noida Extension</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <div id="tab2" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Greater Noida-Alpha Branch I</strong></h6>
                      <li><p><strong>Address:- </strong>Alpha Commercial Belt, Paras Nath Tower, 3rd Floor</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <div id="tab3" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Greater Noida-Omicron Branch II</strong></h6>
                      <li><p><strong>Address:- </strong>C-167, Omicron I, Block C, 6% Abadi, Greater Noida</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <div id="tab4" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Delhi-Timarpur Branch</strong></h6>
                      <li><p><strong>Address:- </strong>347, Lancer Road, Timarpur, New Delhi-110054</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 6206126433,8368979712</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <script>
                    function openTab(tabName) {
                      var i, tabContent;
                      var displayContainer = document.getElementById('display-container');
                      displayContainer.style.display='block'

                      // Hide all tab contents
                      tabContent = document.getElementsByClassName("tab-content");
                      for (i = 0; i < tabContent.length; i++) {
                        tabContent[i].style.display = "none";
                      }

                      // Get the selected tab's content and show it in the display container
                      var selectedTabContent = document.getElementById(tabName).innerHTML;
                      displayContainer.innerHTML = selectedTabContent;
                    }
                  </script>
                </div>
                
                <!-- Content display div, located below the buttons -->
                <div id="display-container" class="display-container" style="display:none;">
                  Click on a button to see the details here.
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



    
       <div class="container-fluid">
      <div class="row">
        
       <div class="col-lg-3">
  <div class="right-info" style="height:343px">
    <div class="social-media-div d-flex justify-content-center align-items-center" style="height: 100%;">
      <div class="fb-page" data-href="https://www.facebook.com/a1projecttraining/" data-tabs="timeline" data-width="" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/a1projecttraining/" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/a1projecttraining/">A1 Project Training</a>
        </blockquote>
      </div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"></script>
    </div>
  </div>
</div>

 <!-- Instagram Link -->
  <div class="col-lg-3">
    <div class="right-info" style="height:343px; padding: 20px;">
      <a href="https://www.instagram.com/a1traininginstitute167/" target="_blank"  height: 100%;">
        <img src="assets/images/instagram_profile.png" style="width: 100%; height: 100%; object-fit: cover;">
      </a>
    </div>
  </div>


      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="right-info d-flex justify-content-center align-items-center" style="padding: 20px;">
          <div class="twitter-embed" style="width:100%;">
            <a class="twitter-timeline" href="https://twitter.com/a1training167" data-height="300" data-chrome="noheader nofooter noborders" data-tweet-limit="1">Tweets by A1 Training</a>
            <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="right-info d-flex justify-content-center align-items-center" style=" padding: 20px;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.444203934121!2d77.56183207528264!3d28.466166275756017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1ace1d0021d%3A0x4a817521c4ed4de2!2sA1%20Training(Only%20Coding)-Best%20software%20training%20institute%20in%20Delhi%2Cnoida%20and%20greater%20noida!5e0!3m2!1sen!2sin!4v1726565286366!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

  
      <style>
        .contact-details {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 30px;
        }
        .tab-btn {
          display: inline-block;
          padding: 10px 20px;
          background-color: #f1f1f1;
          border: none;
          cursor: pointer;
          margin-right: 5px;
        }
        .tab-content {
          display: none;
        }
        /* Responsive adjustments */
        @media (max-width: 767px) {
          .contact-details {
            flex-direction: column;
          }
          .tab-btn {
            width: 100%;
            text-align: center;
          }
        }
      </style>
    </div>
  
<div class="footer" style="margin-top: 50px;">
  <p>Copyright © 2024-25 A1Training Institute. All Rights Reserved.
    <br>
    Developed By: <a href="#" target="_parent" title="free css templates">EGT</a>
   
  </p>
</div>
</section>
   <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=338744439619473&version=v2.0";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
  
  
    `)
