for (let i = 0; i < junior.col1.length; i++) {
    let descriptionContent = '';

           if (junior.col1[i].description === 'Python') {
        descriptionContent = `
        <span id="Python">

            <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Python Training at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/learn_python.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/python_forkids.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/python1.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

 </span>`;
    } else if (junior.col1[i].description === 'computer_science11th') {
        descriptionContent = `
        <span id="computer_science11th">
        
            <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Computer Science 11th at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/computer_science1.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/learn_computer11.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'computer_science12th') {
        descriptionContent = `
        <span id="computer_science12th">
<div class="container">
    <div class="row">
        <div class="col-md-8">

            <div class="content-container">

                <h1 class="main-heading">Computer Science 12th at A1 Training Institute</h1>

                <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                    <p class="description">
                        Python Programming at A1 Training Institute equips students with essential skills to excel in
                        programming using one of the most popular languages today. This course covers fundamental
                        programming concepts, including variables, data types, control structures, and functions.
                        Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                        scenarios. By the end of the course, participants will have a strong grasp of Python and be
                        prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                        development.
                    </p>

                    <ul class="feature-list">
                        <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                            advanced concepts</li>
                        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                            development</li>
                        <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                        <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                            and automation</li>
                    </ul>

                    <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                        Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                        training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                        convenient for students to access top-quality Python training.</h4>

                </div>



                <div class="button-container">
                   
                </div>

                <div class="training-container mt-5">
                    <div class="row">
                        <div class="training-col">
                            <h3>40+ Hrs</h3>
                            <p>Hands-On Training</p>
                        </div>
                        <div class="training-col">
                            <h3>2 Live</h3>
                            <p>Projects For Hands-On Learning</p>
                        </div>
                        <div class="training-col">
                            <h3>50 Hrs</h3>
                            <p>Practical Assignments</p>
                        </div>
                        <div class="training-col">
                            <h3>24/7</h3>
                            <p>Lifetime Access To Support Team</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="col-md-4">
            <!-- Carousel Start -->
            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/video_crousel/computer_science12.png" class="d-block w-100" alt="Image 1">
                    </div>
                    <div class="carousel-item">
                        <img src="images/video_crousel/learn_computer12.png" class="d-block w-100" alt="Image 2">
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <!-- Carousel End -->

            <div class="content-container">

                    <h4 class="sub-heading feature-list description main-heading"></h4>

                <div class="button-container">
                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                        Syllabus</button>
                  
           
                </div>

            </div>
        </div>
    </div>
</div>
        </span>`;
    } else if (junior.col1[i].description === 'Web_Development') {
        descriptionContent = `
        <span id="Web_Development">
          <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Web Development at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

          </span>`;
    } else if (junior.col1[i].description === 'C/C++_Programming') {
        descriptionContent = `
        <span id="C/C++_Programming">
        <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">C/C++ Programming at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Java') {
        descriptionContent = `
        <span id="Java">
          <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Java Programming at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Database') {
        descriptionContent = `
        <span id="Database">
        <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Database Management at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Game_Development') {
        descriptionContent = `
        <span id="Game_Development">
         <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Game Development at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

</span>`;
    } else if (junior.col1[i].description === 'Canva_Designing') {
        descriptionContent = `
        <span id="Canva_Designing">
          <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Canva Designing at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Abode_Photoshop') {
        descriptionContent = `
        <span id="Abode_Photoshop">
         <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Adobe Photoshop at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Adobe_Illustrator') {
        descriptionContent = `
        <span id="Adobe_Illustrator">
         <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Adobe Illustrator at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Corel_Draw') {
        descriptionContent = `
        <span id="Corel_Draw">
             <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Corel Draw at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'MS_Office') {
        descriptionContent = `
        <span id="MS_Office">
         <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">MS Office at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Basic_Computer') {
        descriptionContent = `
        <span id="Basic_Computer">
          <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Basic Computer at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Tally') {
        descriptionContent = `
         <span id="Tally">
        <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Tally at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    } else if (junior.col1[i].description === 'Typing') {
        descriptionContent = `
        <span id="Typing">
          <div class="content-container container">
                <div class="row">
                        <div class="col-md-8">
                            <h1 class="main-heading">Typing at A1 Training Institute</h1>

                            <div style="max-height: 300px; overflow-y: auto; padding-right: 10px;">
                                <p class="description">
                                    Python Programming at A1 Training Institute equips students with essential skills to excel in
                                    programming using one of the most popular languages today. This course covers fundamental
                                    programming concepts, including variables, data types, control structures, and functions.
                                    Students will engage in hands-on projects, enabling them to apply their knowledge to real-world
                                    scenarios. By the end of the course, participants will have a strong grasp of Python and be
                                    prepared to tackle more advanced topics, such as data analysis, machine learning, and web
                                    development.
                                </p>

                                <ul class="feature-list">
                                    <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and
                                        advanced concepts</li>
                                    <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
                                    <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python
                                        development</li>
                                    <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
                                    <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development,
                                        and automation</li>
                                </ul>

                                <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida
                                    Extension and Greater Noida. We offer comprehensive classroom and online training options. Our
                                    training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it
                                    convenient for students to access top-quality Python training.</h4>

                            </div>



                                <div class="button-container">
                                
                                </div>

                                <div class="training-container mt-5">
                                    <div class="row">
                                        <div class="training-col">
                                            <h3>40+ Hrs</h3>
                                            <p>Hands-On Training</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>2 Live</h3>
                                            <p>Projects For Hands-On Learning</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>50 Hrs</h3>
                                            <p>Practical Assignments</p>
                                        </div>
                                        <div class="training-col">
                                            <h3>24/7</h3>
                                            <p>Lifetime Access To Support Team</p>
                                        </div>
                                    </div>
                                </div>




                        </div>

                        <div class="col-md-4">
                            <!-- Carousel Start -->
                            <div id="carousel${i}" class="carousel slide mt-4" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="images/video_crousel/node_js.png" class="d-block w-100" alt="Image 1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/Devops_AWS.png" class="d-block w-100" alt="Image 2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="images/video_crousel/college_student.png" class="d-block w-100" alt="Image 3">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                            <!-- Carousel End -->

                            <div class="content-container">

                                    <h4 class="sub-heading feature-list description main-heading"></h4>

                                <div class="button-container">
                                    <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download
                                        Syllabus</button>
                                
                        
                                </div>

                            </div>
                        </div>
                </div>
            </div>    

        </span>`;
    }  

   
    
    
// Example text with underscores
let textWithUnderscores = junior.col1[i].title;

// Remove underscores using replace() with regex
let textWithoutUnderscores = textWithUnderscores.replace(/_/g, ' ');

    document.write(`
    <div class="modal" id="${junior.col1[i].title}">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">${textWithoutUnderscores}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    ${descriptionContent}
                          
                    
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`);
}

// Listen for changes in screen size
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Initial check on page load
handleMediaQueryChange(mediaQuery);
