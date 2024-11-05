for (let i = 0; i < junior.col1.length; i++) {
    let descriptionContent = '';

    if (junior.col1[i].description === 'MS_Office') {
        descriptionContent = `
        <span id="MS_Office">
           <div class="content-container">

    <h1 class="main-heading">MS Office Training at A1 Training Institute</h1>

    <p class="description">The MS Office training provided by A1 Training Institute is designed to enhance your productivity and efficiency in the workplace. Through this comprehensive program, you will gain in-depth knowledge of essential applications such as Word, Excel, PowerPoint, and Outlook. 
                           Learn to create professional documents, analyze data effectively, and deliver impactful presentations. Our hands-on approach ensures that you develop practical skills that can be applied immediately, allowing you to automate repetitive tasks, collaborate seamlessly, and manage your time more effectively.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of MS Office applications, including Word, Excel, PowerPoint, and Access</li>
        <li class="feature-item">&#10003; Hands-on assignments to reinforce skills in document creation, data analysis, and presentations</li>
        <li class="feature-item">&#10003; Interactive lab sessions focused on advanced features and functions of each application</li>
        <li class="feature-item">&#10003; Real-world projects to apply MS Office tools in business scenarios</li>
        <li class="feature-item">&#10003; Guidance on best practices for efficient use of MS Office software</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 MS Office training program in Chennai. We offer various modes of training, including classroom and online training. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

    <div class="button-container">
        <button class="custom-button"  data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
        <button class="custom-button">Contact Course Advisor</button>
    </div>

    <div class="training-container mt-5 ">
        <div class="row">
            <div class="training-col ">
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
    } else if (junior.col1[i].description === 'Corel_Draw') {
        descriptionContent = `
        <span id="Corel_Draw">
            <div class="content-container">

    <h1 class="main-heading">Corel Draw Training at A1 Training Institute</h1>

    <p class="description">Corel Draw training at A1 Training Institute equips students with the essential skills to create stunning graphics and designs using this powerful software. Designed for beginners and professionals alike, this course covers a wide range of topics, including vector illustration, layout design, and photo editing. Participants will learn how to use Corel Draw's tools and features to create logos, brochures, and other marketing materials. The hands-on approach emphasizes practical assignments, enabling students to apply their knowledge to real-world projects. By the end of the course, students will be proficient in designing visually appealing graphics that meet industry standards, enhancing their career opportunities in graphic design and digital marketing.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; 40 hours of Instructor led Training</li>
        <li class="feature-item">&#10003; Comprehensive coverage of basic and advanced Corel Draw techniques</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions focusing on design and illustration</li>
        <li class="feature-item">&#10003;  Real-world projects to enhance creativity and practical skills</li>
        <li class="feature-item">&#10003;Expert guidance on graphic design principles and best practices</li>
    </ul>
    <h4 class="sub-heading">We provide the No.1 Corel Draw training program in Chennai. We offer multiple modes of training, including classroom and online training. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (junior.col1[i].description === 'Tally') {
        descriptionContent = `
         <span id="Tally">
        <div class="content-container">

    <h1 class="main-heading">Tally Training at A1 Training Institute</h1>

    <p class="description">Tally training at A1 Training Institute provides students with a comprehensive understanding of accounting and financial management software. This course is designed for individuals looking to enhance their accounting skills, whether for personal use or professional advancement. Participants will learn the fundamentals of Tally, including how to manage accounts, generate financial statements, and perform inventory management. The curriculum covers key features such as voucher entry, taxation, payroll, and financial reporting. By engaging in hands-on exercises and real-world scenarios, students will develop the confidence and proficiency needed to effectively use Tally in various business environments. This course prepares participants for roles in accounting, finance, and business management.</p>

    <ul class="feature-list">
       <li class="feature-item">&#10003; Comprehensive coverage of Tally software for accounting and financial management</li>
        <li class="feature-item">&#10003; Hands-on assignments to reinforce practical skills in bookkeeping and accounting</li>
        <li class="feature-item">&#10003; Interactive lab sessions focused on invoicing, inventory management, and taxation</li>
        <li class="feature-item">&#10003; Real-world projects to apply Tally in various business scenarios</li>
        <li class="feature-item">&#10003; Guidance on generating financial reports and analyzing business performance</li>

    </ul>

    <h4 class="sub-heading">We provide the No.1 Tally training program in Chennai. We offer various modes of training, including classroom and online training. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (junior.col1[i].description === 'Abode_Photoshop') {
        descriptionContent = `
        <span id="Abode_Photoshop">
        <div class="content-container">

    <h1 class="main-heading">Adobe Photoshop Training at A1 Training Institute</h1>

    <p class="description">Adobe Photoshop training at A1 Training Institute equips students with the skills needed to transform their creative visions into reality. This hands-on course covers everything from basic photo editing to advanced techniques in graphic design and digital art. Participants will learn how to navigate the Photoshop interface, utilize essential tools, and apply various effects and filters. The curriculum includes lessons on retouching, color correction, layering, and compositing images. By working on real-world projects, students will gain practical experience that prepares them for professional opportunities in photography, web design, and multimedia art. By the end of the course, participants will confidently use Adobe Photoshop to create stunning visuals for any application.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
        <li class="feature-item">&#10003; Comprehensive coverage of basic and advanced Photoshop techniques </li>
        <li class="feature-item">&#10003; Hands-on assignments to reinforce theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions focusing on photo editing and manipulation</li>
        <li class="feature-item">&#10003; Real-world projects to develop creative skills and design proficiency</li>
        <li class="feature-item">&#10003; Expert guidance on industry-standard practices and tools</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Photoshop training program in Delhi NCR, including Noida Extension and Greater Noida. We offer flexible training options, including classroom and online training. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida to ensure easy access for all students.</h4>

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
    } else if (junior.col1[i].description === 'Adobe_Illustrator') {
        descriptionContent = `
        <span id="Adobe_Illustrator">
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
    } else if (junior.col1[i].description === 'Web_Development') {
        descriptionContent = `
        <span id="Web_Development">
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
    } else if (junior.col1[i].description === 'Game_Development') {
        descriptionContent = `
        <span id="Game_Development">
          <div class="content-container">

    <h1 class="main-heading">Game Development Training at A1 Training Institute</h1>

    <p class="description">Game Development at A1 Training Institute offers a comprehensive introduction to the exciting world of creating video games. This course covers the fundamentals of game design, programming, and the use of game development engines such as Unity and Unreal Engine. Students will learn about game mechanics, level design, character development, and user experience. Through hands-on projects, participants will design and build their own games, gaining practical experience in coding, graphics, and sound integration. By the end of the course, students will be equipped with the skills to bring their creative ideas to life in the gaming industry. </p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of game design and development techniques</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on game development</li>
        <li class="feature-item">&#10003; In-depth training on game engines and programming languages</li>
        <li class="feature-item">&#10003; Real-world projects to build a portfolio of game development work</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Game Development training program in Delhi NCR, including Noida Extension and Greater Noida. We offer multiple training modes, including classroom and online training. Our training centers are conveniently located across Delhi NCR, Noida Extension, and Greater Noida to provide easy access for all aspiring game developers.</h4>

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
    } else if (junior.col1[i].description === 'Python') {
        descriptionContent = `
        <span id="Python">
            <div class="content-container">

    <h1 class="main-heading">Python Training at A1 Training Institute</h1>

    <p class="description">Python Programming at A1 Training Institute equips students with essential skills to excel in programming using one of the most popular languages today. This course covers fundamental programming concepts, including variables, data types, control structures, and functions. Students will engage in hands-on projects, enabling them to apply their knowledge to real-world scenarios. By the end of the course, participants will have a strong grasp of Python and be prepared to tackle more advanced topics, such as data analysis, machine learning, and web development.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of Python programming fundamentals and advanced concepts</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Python development</li>
        <li class="feature-item">&#10003; Real-world applications to build practical coding skills</li>
        <li class="feature-item">&#10003; Guidance on using Python for data analysis, web development, and automation</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Python training program in Delhi NCR, including Noida Extension and Greater Noida. We offer comprehensive classroom and online training options. Our training centers are located across Delhi NCR, Noida Extension, and Greater Noida, making it convenient for students to access top-quality Python training.</h4>

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
    } else if (junior.col1[i].description === 'computer_science11th') {
        descriptionContent = `
        <span id="computer_science11th">
            <div class="content-container">

    <h1 class="main-heading">Computer Science 11th Training at A1 Training Institute</h1>

    <p class="description">Computer Science for 11th Grade at A1 Training Institute provides students with a strong foundation in computer science principles and programming concepts. The course introduces key topics such as programming logic, problem-solving techniques, and data representation. Students will learn to code in languages like Python and C++, developing their skills through hands-on projects and exercises. With a focus on computational thinking and creativity, this course empowers students to explore the exciting world of technology and prepares them for further studies in computer science.

</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of fundamental computer science concepts and programming basics</li>
        <li class="feature-item">&#10003; Hands-on assignments to reinforce theoretical knowledge and practical skills</li>
        <li class="feature-item">&#10003; Interactive lab sessions focusing on problem-solving and algorithm development</li>
        <li class="feature-item">&#10003; Projects to develop applications using programming languages like Python or Java</li>
        <li class="feature-item">&#10003; Exposure to data structures, databases, and software development methodologies</li>

    </ul>

    <h4 class="sub-heading">We provide the No.1 Computer Science training program for 11th Grade students in Delhi NCR, including Noida Extension and Greater Noida. Our training offers flexible classroom and online learning options. With training centers located throughout Delhi NCR, Noida Extension, and Greater Noida, we ensure that students have easy access to high-quality Computer Science education.</h4>

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
    } else if (junior.col1[i].description === 'computer_science12th') {
        descriptionContent = `
        <span id="computer_science12th">
          <div class="content-container">

    <h1 class="main-heading">Computer Science 12th Training at A1 Training Institute</h1>

    <p class="description">Computer Science for 12th Grade at A1 Training Institute offers a comprehensive curriculum that equips students with the knowledge and skills needed for success in today's technology-driven world. The course covers essential topics such as programming fundamentals, data structures, algorithms, and software development. Students will engage in practical projects that enhance their problem-solving abilities and coding skills using languages like Python and Java. With a focus on critical thinking and real-world applications, this course prepares students for advanced studies in computer science or careers in the tech industry.</p>

    <ul class="feature-list">
    <li class="feature-item">&#10003; Advanced coverage of computer science concepts, including data structures and algorithms</li>
<li class="feature-item">&#10003; Hands-on assignments to deepen understanding of programming paradigms</li>
<li class="feature-item">&#10003; Interactive lab sessions focused on software development and project management</li>
<li class="feature-item">&#10003; Real-world projects to apply concepts in areas such as web development and database management</li>
<li class="feature-item">&#10003; Preparation for competitive programming and advanced placement exams</li>

   </ul>

    <h4 class="sub-heading">We offer the No.1 Computer Science training program for 12th Grade students in Delhi NCR, including Noida Extension and Greater Noida. Our training covers advanced concepts and practical applications essential for the CBSE curriculum. With flexible classroom and online training options, students can choose the mode that best suits their learning style. Our training centers are strategically located throughout Delhi NCR, ensuring easy access to high-quality education and resources.</h4>

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
    } else if (junior.col1[i].description === 'Java') {
        descriptionContent = `
        <span id="Java">
          <div class="content-container">

    <h1 class="main-heading">Java Training at A1 Training Institute</h1>

    <p class="description">Java Programming Course at A1 Training Institute is designed to provide you with a strong foundation in one of the most popular programming languages in the world. This course covers essential concepts such as object-oriented programming, data structures, and design patterns. You'll engage in hands-on projects that allow you to build real-world applications while learning to write clean, efficient, and maintainable code. With a focus on best practices and industry standards, this course prepares you for a successful career in software development, web applications, and mobile development using Java.</p>

    <ul class="feature-list">
       <li class="feature-item">&#10003; Comprehensive coverage of Java programming fundamentals and object-oriented concepts</li>
<li class="feature-item">&#10003; Hands-on assignments to reinforce theoretical knowledge and practical coding skills</li>
<li class="feature-item">&#10003; Interactive lab sessions focusing on developing applications using Java</li>
<li class="feature-item">&#10003; Real-world projects to build applications and strengthen problem-solving abilities</li>
<li class="feature-item">&#10003; Guidance on Java frameworks, libraries, and best coding practices</li>

    </ul>

    <h4 class="sub-heading">We provide the No.1 Java training program in Delhi NCR, including Noida Extension and Greater Noida. Our comprehensive training covers essential Java concepts, object-oriented programming, and hands-on experience with real-world projects. Students can choose between classroom and online training options to fit their schedules. With training centers located across Delhi NCR, we ensure easy access to high-quality Java education, equipping students with the skills needed for a successful career in software development.</h4>

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
    } else if (junior.col1[i].description === 'C/C++_Programming') {
        descriptionContent = `
        <span id="C/C++_Programming">
        <div class="content-container">

    <h1 class="main-heading">C/C++ Programming Training at A1 Training Institute</h1>

    <p class="description">C/C++ Programming Course at A1 Training Institute provides a comprehensive introduction to programming using two of the most widely used programming languages. This course is designed to build a strong foundation in programming concepts, data structures, and algorithms. You'll learn how to write efficient code, manage memory, and understand object-oriented programming principles through hands-on projects. By the end of the course, you'll be equipped with the skills to develop robust applications and tackle complex programming challenges, setting you up for success in various software development roles.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of C and C++ programming fundamentals and advanced concepts</li>
        <li class="feature-item">&#10003; Hands-on assignments to reinforce coding skills and theoretical knowledge</li>
        <li class="feature-item">&#10003; Interactive lab sessions focused on algorithms, data structures, and application development</li>
        <li class="feature-item">&#10003; Real-world projects to apply C/C++ in software development and problem-solving</li>
        <li class="feature-item">&#10003; Guidance on best practices, debugging, and optimization techniques</li>
    </ul>

    <h4 class="sub-heading">We offer the No.1 C/C++ programming training program in Delhi NCR, including Noida Extension and Greater Noida. This program is designed to provide a strong foundation in both C and C++ programming languages, focusing on key concepts such as data structures, algorithms, and object-oriented programming. With options for classroom and online training, students can choose the learning mode that suits them best. Our training centers are conveniently located throughout Delhi NCR, ensuring that aspiring programmers gain the skills needed for a successful career in software development.</h4>

    <div class="button-container">
        <button class="custom-button" data-bs-toggle="modal" data-bs-target="#syllabus${i}">View / Download Syllabus</button>
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
    } else if (junior.col1[i].description === 'Canva_Designing') {
        descriptionContent = `
        <span id="Canva_Designing">
            <div class="content-container">

    <h1 class="main-heading">Canva Designing  at A1 Training Institute</h1>

    <p class="description">Canva Designing Course at A1 Training Institute equips you with the creative skills necessary to design stunning graphics and marketing materials using Canva. This course covers the fundamentals of graphic design, including layout, color theory, typography, and branding. You'll learn how to create visually appealing social media posts, presentations, posters, and more, all while using Canva's user-friendly interface. By the end of the course, you'll be able to produce professional-quality designs quickly and efficiently, enhancing your digital presence and communication skills.

</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of Canva tools and features for graphic design</li>
        <li class="feature-item">&#10003; Hands-on assignments to create stunning visuals for various purposes</li>
        <li class="feature-item">&#10003; Interactive lab sessions focused on designing social media graphics, presentations, and marketing materials</li>
        <li class="feature-item">&#10003; Real-world projects to build a portfolio of design work using Canva</li>
        <li class="feature-item">&#10003; Guidance on design principles, branding, and visual storytelling</li>

    </ul>

    <h4 class="sub-heading">We offer the No.1 Canva Designing training program in Delhi NCR, including Noida Extension and Greater Noida. This program is tailored for individuals looking to enhance their graphic design skills using Canva, a powerful and user-friendly design tool. Participants will learn how to create stunning visuals for social media, presentations, marketing materials, and more, all while mastering design principles and techniques. With flexible classroom and online training options, students can easily fit this program into their busy schedules. Our training centers are conveniently located across Delhi NCR, providing easy access to top-notch design education.</h4>

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
    } else if (junior.col1[i].description === 'Database') {
        descriptionContent = `
        <span id="Database">
         <div class="content-container">

    <h1 class="main-heading">Databae Training at A1 Training Institute</h1>

    <p class="description">Database Training Program offered by A1 Training Institute provides you with the essential skills and knowledge needed to manage and analyze data efficiently. Our training covers fundamental concepts of database design, SQL programming, and data manipulation, ensuring you understand how to create, retrieve, update, and delete data effectively. With practical exercises and real-world scenarios, you'll learn how to optimize database performance and ensure data integrity. This program empowers you to harness the power of data, making you a valuable asset in any organization.
</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of database concepts, design, and management</li>
        <li class="feature-item">&#10003; Hands-on assignments to reinforce skills in SQL and database queries</li>
        <li class="feature-item">&#10003; Interactive lab sessions focused on database creation, normalization, and optimization</li>
        <li class="feature-item">&#10003; Real-world projects to apply database management in various applications</li>
        <li class="feature-item">&#10003; Guidance on data modeling, security, and best practices for database administration</li>
    </ul>

    <h4 class="sub-heading">We offer the No.1 Database Management training program in Delhi NCR, including Noida Extension and Greater Noida. This comprehensive program is designed to equip students with essential skills in database design, implementation, and management. Participants will learn about various database management systems (DBMS), SQL querying, data modeling, and best practices for data security and integrity. With options for classroom and online training, our program accommodates various learning preferences. Our training centers are conveniently located across Delhi NCR, making it easier for aspiring database professionals to access high-quality education.

</h4>

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
    } else if (junior.col1[i].description === 'Typing') {
        descriptionContent = `
        <span id="Typing">
           <div class="content-container">

    <h1 class="main-heading">Typing at A1 Training Institute</h1>

    <p class="description">Typing Training Program offered by A1 Training Institute can significantly enhance your efficiency by equipping you with essential skills for fast and accurate typing. With our comprehensive training, you'll learn proper finger placement, techniques to improve typing speed, and strategies to minimize errors. Mastering typing can streamline your workflow, making it easier to complete tasks quickly and effectively. By developing your typing skills with our expert guidance, you can boost your productivity and confidence in both academic and professional environments.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; Comprehensive coverage of touch typing techniques and finger positioning</li>
        <li class="feature-item">&#10003; Hands-on exercises to improve speed and accuracy in typing</li>
        <li class="feature-item">&#10003; Interactive sessions focused on typing practice with various texts and formats</li>
        <li class="feature-item">&#10003; Real-time feedback and progress tracking to enhance typing skills</li>
        <li class="feature-item">&#10003; Guidance on typing efficiency, ergonomics, and best practices</li>
    </ul>

    <h4 class="sub-heading">We provide the No.1 Typing training program in Delhi NCR, including Noida Extension and Greater Noida. Our program focuses on enhancing typing speed and accuracy, catering to both beginners and those looking to improve their existing skills. Participants will engage in various typing exercises, learn proper finger placement, and receive personalized feedback to boost their proficiency. Our training is available through both classroom and online modes, ensuring flexibility for all learners. With our expert instructors and structured curriculum, students will develop essential typing skills that are crucial for academic and professional success.</h4>

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
    } else if (junior.col1[i].description === 'Basic_Computer') {
        descriptionContent = `
        <span id="Basic_Computer">
           <div class="content-container">

   <h1 class="main-heading">Basic Computer Course at A1 Training Institute</h1>

<p class="description">The Basic Computer Course at A1 Training Institute is designed for individuals seeking to build foundational skills in computer usage and digital literacy. This course covers essential topics such as operating systems, word processing, spreadsheets, presentations, and internet basics. By mastering these skills, you will gain confidence in using computers effectively in both personal and professional settings.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 30 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of computer fundamentals and software applications</li>
    <li class="feature-item">&#10003; Hands-on exercises to practice real-world tasks</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on document creation, data management, and online research</li>
    <li class="feature-item">&#10003; Focus on developing problem-solving skills and computer proficiency</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Basic Computer Course in Chennai, with flexible training modes including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>
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
