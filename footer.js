document.write(`  <section class="contact-us" id="contact" style="background-color: rgb(40, 89, 153);background-image: none;padding: 50px 0px 0px 0px;">
<div class="container">
  <div class="row">
    <div class="col-lg-8 align-self-center">
      <div class="row">
        <div class="col-lg-12">
          <form id="contact" action="" method="post">
            <div class="row">
              <div class="col-lg-12">
                <h2>Locate our office</h2>
              </div>
              <div class="col-md-12">
                <div class="contact-details">
                 <style>
                  /* Style for the tab buttons */
                  .tab-btn {
                    background-color: #f1f1f1;
                    border: 3px solid #FF0000;
                    padding: 10px 20px;
                    cursor: pointer;
                    float: left;
                   
                  }
  
                  .button {
                  background-color: #04AA6D; /* Green */
                  border: none;
                  color: white;
                  padding: 5px 10px;
                  text-align: center;
                  text-decoration: none;
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
  
                .button4:hover {background-color: #e7e7e7;}
  
  
                  /* Clear floats after the buttons */
                  .tab-btn::after {
                    content: "";
                    clear: both;
                    display: table;
                  }
  
                  /* Style for the tab content */
                  .tab-content {
                    display: none;
                  }
                </style>
                <div class="tab-btn button button1" onclick="openTab('tab1')">  NOIDA EXTENSION</div>
                <div class="tab-btn button button2" onclick="openTab('tab2')">GREATER NOIDA BRANCH I</div>
                <div class="tab-btn button button3" onclick="openTab('tab3')">GREATER NOIDA BRANCH II</div>
                <div class="tab-btn button button4" onclick="openTab('tab4')">DELHI</div>
  
                <!-- Tab content -->
                <div id="tab1" class="tab-content">
                  <ul class="contact">
                    <br><br>
                    <h6><strong>Noida Extension</strong></h6>
                    <li><p><strong>Address:- </strong>Earthcon Sanskriti,Sector 1,Noida Extension</p></li>
  
                     <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                     <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                   </ul>
                </div>
  
                <div id="tab2" class="tab-content">
                  <ul class="contact">
                    <br><br>
                    <h6><strong>Greater Noida-Alpha Branch I</strong></h6>
                    <li><p><strong>Address:- </strong>Alpha commercial Belt,Paras Nath Tower,3rd Floor </p></li>
  
                     <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                     <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                   </ul>
                </div>
  
                <div id="tab3" class="tab-content">
                  <ul class="contact">
                    <br><br>
                    <h6><strong>Greater Noida-Omicron Branch II</strong></h6>
                    <li><p><strong>Address:- </strong>C-167, Omicron I, Block C, 6% Abadi, Greater Noida, Mathurapur, Uttar Pradesh 201310</p></li>
  
                     <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914 </p></li>
                     <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                   </ul>
                </div>
                <div id="tab4" class="tab-content">
                <ul class="contact">
                    <br><br>
                    <h6><strong>Delhi-Timarpur Branch</strong></h6>
                    <li><p><strong>Address:- </strong>347,Lancer Road,Timarpur, New delhi-110054</p></li>
  
                     <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 6206126433,8368979712</p></li>
                     <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                   </ul>
                </div>
  
                <script>
                  // JavaScript function to switch tabs
                  function openTab(tabName) {
                    var i, tabContent;
                    tabContent = document.getElementsByClassName("tab-content");
                    for (i = 0; i < tabContent.length; i++) {
                      tabContent[i].style.display = "none";
                    }
                    document.getElementById(tabName).style.display = "block";
                  }
                </script>
                
                  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="right-info">
        <div class="fb-like-box" data-href="https://www.facebook.com/a1projecttraining/" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false" data-height="300px">
        </div>
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=338744439619473&version=v2.0";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
      </div>
    </div>
  </div>
</div>
<div class="footer" style="margin-top: 50px;">
  <p>Copyright © 2024-25 A1Training Institute. All Rights Reserved.
    <br>
    Developed By: <a href="#" target="_parent" title="free css templates">EGT</a>
   
  </p>
</div>
</section>
 <link rel="stylesheet" href="assets/css/icon-style.css">
<div class="contact-icons">
    <div class="whatsapp-icon">
        <a href="https://wa.me/8368979712" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>
    </div>

    <div class="call-icon">
        <a href="tel:+91 8368979712">
            <img src="images/call.png" alt="Call">
        </a>
    </div>
</div>
`)