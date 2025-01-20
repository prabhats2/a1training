for (let i = 0; i < blog.col1.length; i++) {
    let descriptionContent = '';

     if (blog.col1[i].descriptions === 'Computer') {
        descriptionContent = `
        <span id="Computer">
           <div class="content-container">

    <h1 class="main-heading">Adobe Illustrator Training at A1 Training Institute</h1>

    <p class="description" >Adobe Illustrator training at A1 Training Institute empowers students to unleash their creativity through vector graphic design. This comprehensive course covers essential tools and techniques for creating stunning illustrations, logos, and complex designs. Participants will learn about typography, color theory, and composition while mastering features like the Pen Tool, shapes, and layers. Through hands-on projects, students will develop a strong portfolio, showcasing their ability to produce professional-quality designs. By the end of the course, participants will have the skills and confidence to use Adobe Illustrator for various applications, from branding to digital artwork.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of basic and advanced exercises on Corel Draw</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Corel Draw</li>
        <li class="feature-item">&#10003; Comprehensive coverage of basic and advanced exercises on Photoshop</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Photoshop</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Illustrator training program in Delhi NCR, including Noida Extension and Greater Noida. We offer various modes of training, including classroom and online training. Our training centers are located throughout Delhi NCR, Noida Extension, and Greater Noida to provide convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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
        </span>`;
    } else if (blog.col1[i].descriptions === 'Photoshop') {
        descriptionContent = `
        <span id="Photoshop">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } else if (blog.col1[i].descriptions === 'Illustrator') {
        descriptionContent = `
        <span id="Illustrator">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } else if (blog.col1[i].descriptions === 'Canva') {
        descriptionContent = `
        <span id="Canva">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } else if (blog.col1[i].descriptions === 'Database') {
        descriptionContent = `
        <span id="Database">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } else if (blog.col1[i].descriptions === 'CandCplus') {
        descriptionContent = `
        <span id="CandCplus">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } else if (blog.col1[i].descriptions === 'Corel') {
        descriptionContent = `
        <span id="Corel">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } else if (blog.col1[i].descriptions === 'GameDevelopment') {
        descriptionContent = `
        <span id="GameDevelopment">
         <div class="content-container">

    <h1 class="main-heading">Web Development Training at A1 Training Institute</h1>

    <p class="description">Web Development at A1 Training Institute equips students with the essential skills to build and maintain dynamic websites. This course covers both front-end and back-end development, including HTML, CSS, JavaScript, and server-side programming languages such as PHP and Node.js. Participants will learn about responsive design, user experience, and the latest web development frameworks. Through hands-on projects, students will create fully functional websites, gaining practical experience in web design, coding, and deployment. By the end of the course, participants will be prepared to enter the fast-paced world of web development, armed with the tools to create engaging online experiences.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of front-end and back-end web development technologies</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on web development</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Web Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, ensuring convenient access for all students.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
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

          </span>`;
    } 

   
    
// Example text with underscores
let textWithUnderscores = blog.col1[i].title;

// Remove underscores using replace() with regex
let textWithoutUnderscores = textWithUnderscores.replace(/_/g, ' ');
document.write(`
<div class="modal" id="${blog.col1[i].title}">
    <div class="modal-dialog modal-xl" style="max-width: 95%; width: 95%;">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">${textWithoutUnderscores}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                <div class="row g-4">
                    <!-- Left Section: Main Content -->
                    <div class="col-lg-8 col-md-7 col-12">
                        <p>${descriptionContent}</p>
                    </div>

                    <!-- Right Section: Search and Cards -->
                    <div class="col-lg-4 col-md-5 col-12">
                        <!-- Sticky Search Bar -->
                        <div class="sticky-top bg-white py-2">
                            <input type="text" id="filterInput_${blog.col1[i].title}" 
                                   class="form-control" placeholder="Search by title..." 
                                   onkeyup="filterCards('${blog.col1[i].title}')">
                        </div>

                        <!-- Card Section -->
                        <div class="row gy-3 mt-3" style="overflow-y: auto; height:auto; max-height: 710px; position: relative;"> 
                            ${blog.col1.map((item, i) => `
                                <div class="col-12">
                                    <div class="card shadow-sm p-3" style="border-radius: 15px;">
                                        <!-- Image -->
                                        <img src="assets/images/junior-geeks/${item.image}" 
                                             class="img-fluid rounded mb-3" 
                                             data-bs-toggle="modal" 
                                             data-bs-target="#${item.title}">

                                        <!-- Date and Author -->
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-calendar me-2 text-muted"></i>
                                                <span>${item.date}</span>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-person me-2 text-muted"></i>
                                                <span>A1TI</span>
                                            </div>
                                        </div>

                                        <!-- Title and Content -->
                                        <h5 class="text-center text-lg-start mb-2">${item.title.replace(/_/g, ' ')}</h5>
                                        <p class="description-preview mb-2" id="desc_${item.title}">
                                            ${item.description1.substring(0, 150)}... 
                                            <a href="javascript:void(0);" class="read-more" 
                                               data-bs-toggle="modal" data-bs-target="#${item.title}" 
                                               onclick="toggleDescription('${item.title}')">Read More</a>
                                        </p>
                                        <p class="description-full d-none" id="full_desc_${item.title}">
                                            ${item.description1}
                                            <a href="javascript:void(0);" class="read-more" 
                                               onclick="toggleDescription('${item.title}')">Read Less</a>
                                        </p>

                                        <!-- Button -->
                                        <button type="button" class="btn btn-primary w-100 mt-2" 
                                                data-bs-toggle="modal" data-bs-target="#${item.title}">
                                            More Information
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

 `);
 
}




function toggleDescription(title) {
    var preview = document.getElementById('desc_' + title);
    var full = document.getElementById('full_desc_' + title);

    if (preview.style.display === "none") {
        preview.style.display = "block";
        full.style.display = "none";
    } else {
        preview.style.display = "none";
        full.style.display = "block";
    }
}


function filterCards(modalID) {
    let input = document.getElementById(`filterInput_${modalID}`).value.toLowerCase();
    let modal = document.getElementById(modalID);
    let cards = modal.getElementsByClassName("card-item");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getAttribute("data-title");
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const styles = {
        containerBody: {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            margin: '0',
            padding: '0',
            backgroundColor: '#FAFAFA',
        },
        mainHeading: {
            color: '#007BFF',  // Blue for the logo
            textAlign: 'center',
            padding: '20px',
            fontSize: '2.5em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add shadow to heading
            animation: 'fadeIn 1s ease-in-out', // Fade-in animation
        },
        description: {
            textAlign: 'center',
            fontSize: '1.1em',
            lineHeight: '1.6',
            margin: '0 15px',
            animation: 'slideInUp 1s ease-in-out', // Slide-in from bottom animation
        },
        featureList: {
            listStyleType: 'none',
            padding: '0',
            textAlign: 'center',
            margin: '20px 0',
            animation: 'fadeIn 1s ease-in-out 0.5s', // Fade-in with delay
            animationFillMode: 'both',
        },
        featureItem: {
            fontSize: '1.2em',
            color: '#007BFF',  // Blue for the logo
            margin: '10px 0',
            textAlign: 'left',
        },
        subHeading: {
            textAlign: 'center',
            fontSize: '1.2em',
            margin: '20px 0',
            color: '#555',
            animation: 'slideInUp 1s ease-in-out 1s', // Slide-in with delay
            animationFillMode: 'both',
        },
        buttonContainer: {
            textAlign: 'center',
            margin: '20px',
            animation: 'zoomIn 1s ease-in-out', // Zoom-in animation
        },
        button: {
            backgroundColor: '#007BFF',  // Blue for the logo
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1em',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', // Animation for hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow to buttons
        },
        buttonHover: {
            backgroundColor: '#0056b3',
            transform: 'scale(1.05)', // Slightly enlarge the button on hover
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
        },
        trainingContainer: {
            margin: '30px auto',
            maxWidth: 'auto',
        },
        row: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            animation: 'fadeInUp 1s ease-in-out', // Fade-in from bottom animation
        },
        col: {
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            flex: '1',
            maxWidth: '22%',
            textAlign: 'center',
            padding: '20px',
            transition: 'box-shadow 0.3s ease', // Smooth shadow transition
            animation: 'zoomIn 0.5s ease-in-out', // Zoom-in animation for each column
            pointerEvents: 'none', // Disable pointer events for clicking
        },
        colHover: {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow on hover
        },
        colH3: {
            color: '#007BFF', // Red for the logo
            fontSize: '2em',
            margin: '0',
        },
        colP: {
            fontSize: '1.1em',
            margin: '10px 0 0',
        }
    };

    document.querySelectorAll('.content-container').forEach(container => {
        Object.assign(container.style, styles.containerBody);
        Object.assign(container.querySelector('.main-heading').style, styles.mainHeading);
        container.querySelectorAll('.description').forEach(p => Object.assign(p.style, styles.description));
        Object.assign(container.querySelector('.feature-list').style, styles.featureList);
        container.querySelectorAll('.feature-item').forEach(li => Object.assign(li.style, styles.featureItem));
        Object.assign(container.querySelector('.sub-heading').style, styles.subHeading);
        Object.assign(container.querySelector('.button-container').style, styles.buttonContainer);
        container.querySelectorAll('.custom-button').forEach(button => {
            Object.assign(button.style, styles.button);
            button.addEventListener('mouseover', () => Object.assign(button.style, styles.buttonHover));
            button.addEventListener('mouseout', () => Object.assign(button.style, styles.button));
        });
        Object.assign(container.querySelector('.training-container').style, styles.trainingContainer);
        Object.assign(container.querySelector('.row').style, styles.row);
        container.querySelectorAll('.training-col').forEach(col => {
            Object.assign(col.style, styles.col);
            col.addEventListener('mouseover', () => Object.assign(col.style, styles.colHover));
            col.addEventListener('mouseout', () => Object.assign(col.style, styles.col));
            Object.assign(col.querySelector('h3').style, styles.colH3);
            Object.assign(col.querySelector('p').style, styles.colP);
        });
    });

    // Adding keyframes for animations
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        @keyframes zoomIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `, styleSheet.cssRules.length);
});

// Responsive Design for 2 Divs per Row in Mobile View
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        // For mobile view: 2 divs per row
        document.querySelectorAll('.training-col').forEach(col => {
            col.style.maxWidth = '50%';  // 50% width for 2 columns
            col.style.flex = '0 0 50%';  // Flex property to take 50% space
        });
    } else {
        // For larger screens: 4 divs in a row
        document.querySelectorAll('.training-col').forEach(col => {
            col.style.maxWidth = '22%';  // 4 columns
            col.style.flex = '1';  // Flex property for equal distribution
        });
    }
}

// Listen for changes in screen size
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Initial check on page load
handleMediaQueryChange(mediaQuery);
