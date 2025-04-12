
document.write(`<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-646096GCC0"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-646096GCC0'); </script>
`)
document.write(`
  <!-- Sub Header -->
  <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="left-content">
            <p style="text-transform:capitalize"><em>A1 Training</em> is the best IT software training institute.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="right-icons">
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/a1traininginstitute167/"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img src="assets/images/logo1.png" style="height:70px; width:250px" />
            </a>
            <!-- ***** Logo End ***** -->

            <!-- ***** Menu Start ***** -->
                <ul class="nav">
        <li><a href="index.html">Home</a></li>

 <!-- Courses Dropdown -->

        <li class="has-sub">
          <a href="javascript:void(0)">Courses</a>
          <ul class="sub-menu">
            <li><a href="professional-courses.html">Professional Courses</a></li>
            <li><a href="junior-geeks-coding.html">Junior Geeks Courses</a></li>
          </ul>
        </li>

        <li><a href="interview-Q-ans.html">Interview Q/A</a></li>
        <li><a href="notes.html">Notes</a></li>

        <!-- ROADMAP Dropdown -->
        <li class="has-sub">
          <a href="javascript:void(0)">roadmap</a>
          <ul class="sub-menu">
            <li><a href="professional-courses.html">Devops</a></li>
            <li><a href="junior-geeks-coding.html">JavaScript</a></li>

            <!-- Nested Dropdown inside Sub Menu -->
            <li class="has-sub">
              <a href="javascript:void(0)">Menu 1</a>
              <ul class="sub-menu">
                <li class="has-sub">
                  <a href="javascript:void(0)">Sub 1</a>

                  <ul class="sub-menu">
                    <li><a href="#">Sub 1.1</a></li>
                    <li><a href="#">Sub 1.2</a></li>
                  </ul>

                </li>
                <li><a href="#">Sub 2</a></li>
              </ul>
            </li>

            <li class="has-sub">
              <a href="javascript:void(0)">Menu 2</a>
              <ul class="sub-menu">
                <li><a href="#">Sub A</a></li>
                <li><a href="#">Sub B</a></li>
              </ul>
            </li>
          </ul>
        </li>


        <li class="has-sub">
          <a href="javascript:void(0)">More</a>
          <ul class="sub-menu">
            <li><a href="testimonials.html">Testimonial</a></li>
            <li><a href="Our-Students.html">Our Students</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="batches.html">Batches</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </li>

        <li><a href="contact.html">Contact Us</a></li>
      </ul>


            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
`);

 document.write(`
<style>

.sub-menu {
  display: block;
  list-style: none;
  background-color: transparent; /* 'none' is invalid for background-color */
  padding: 0;
  margin: 0;
  height: 500px;
}

.nav > li:hover > .sub-menu,
.sub-menu li:hover > .sub-menu {
  display: block;
}

.sub-menu li a {
  padding: 10px 25px;
  background-color: #222;
  font-size: 15px;
}

.sub-menu li a:hover {
  background-color: none;
}

.sub-menu .has-sub > a::after {
  content: ' >';
  float: right;
}

.sub-menu .sub-menu {
  display: none;
  position: relative;
  margin-left: 10px;
}

.sub-menu,
.sub-menu .sub-menu {
  transition: all 0.3s ease-in-out;
}

      </style>`)


//tawk io script 
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66bb21d20cca4f8a7a754fad/1i55fo8ds';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

//tawk io script end
document.querySelectorAll(".has-sub > a").forEach(menu => {
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const submenu = this.nextElementSibling;
    if (!submenu || !submenu.classList.contains("sub-menu")) return;

    const parentMenu = this.closest("ul");
    parentMenu.querySelectorAll(".sub-menu").forEach(el => {
      if (el !== submenu) el.style.display = "none";
    });

    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  });
});

 