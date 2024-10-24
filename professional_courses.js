for (let i = 0; i < courses1.col1.length; i++) {
    let descriptionContent = '';

    if (courses1.col1[i].description === 'Linux_01') {
        descriptionContent = `
        <span id="Linux_01">
           <div class="content-container">

    <h1 class="main-heading">Linux Training at A1 Training Institute</h1>

    <p class="description">Linux training provided by A1 Training Institute can help you work more efficiently by giving you the skills and
        knowledge needed to troubleshoot and resolve issues quickly. With Linux, many tasks can be automated, and by
        learning how to use Linux tools and utilities, you can save time and increase your productivity.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; 40 hours of Instructor led Training</li>
        <li class="feature-item">&#10003; Comprehensive coverage of basic and advanced exercises on Linux</li>
        <li class="feature-item">&#10003; Hands-on assignments to support theoretical concepts</li>
        <li class="feature-item">&#10003; Interactive and project-oriented lab sessions on Linux</li>
    </ul>

    <h4 class="sub-heading">We provide the NO.1 Linux training program in Chennai. We offer different modes of training by
        providing classroom and online training. Our training centers are spread across Chennai at Adyar, OMR,
        Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Shell_Scripting') {
        descriptionContent = `
        <span id="Shell_Scripting">
            <div class="content-container">

     <h1 class="main-heading">Shell Scripting Training at A1 Training Institute</h1>

   <p class="description">Shell Scripting training provided by A1 Training Institute empowers you with the skills to automate repetitive tasks and streamline workflows. By mastering Shell Scripting, you can efficiently manage and execute complex processes, saving time and reducing manual effort. Learn how to write powerful scripts to solve problems, improve system administration, and boost productivity across your Linux environment.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; 30 hours of Instructor-led Training</li>
        <li class="feature-item">&#10003; In-depth coverage of basic to advanced Shell Scripting concepts</li>
        <li class="feature-item">&#10003; Practical assignments to reinforce scripting techniques</li>
        <li class="feature-item">&#10003; Real-world projects and hands-on lab sessions</li>
        <li class="feature-item">&#10003; Focus on automation and system administration tasks</li>
    </ul>


    <h4 class="sub-heading">We provide the NO.1 Shell Scripting training program in Chennai. Our program offers flexibility with both classroom and online training options. Our training centers are conveniently located across Chennai, including Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'python') {
        descriptionContent = `
        <div class="content-container">

    <h1 class="main-heading">Python Training at A1 Training Institute</h1>

  <p class="description">Python training provided by A1 Training Institute equips you with the skills to develop efficient and versatile applications. By mastering Python, you can automate tasks, work with data, and build robust systems with ease. Learning Python's libraries and frameworks will help you save time and increase productivity in various domains, from web development to data science.</p>

    <ul class="feature-list">
        <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
        <li class="feature-item">&#10003; Comprehensive coverage of basic to advanced Python programming concepts</li>
        <li class="feature-item">&#10003; Hands-on projects to reinforce theoretical knowledge</li>
        <li class="feature-item">&#10003; Real-world assignments and interactive lab sessions</li>
        <li class="feature-item">&#10003; Focus on web development, data analysis, and automation with Python</li>
    </ul>

    <h4 class="sub-heading">We provide the NO.1 Python training program in Chennai. Our flexible training modes include both classroom and online training. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Jenkins_01') {
        descriptionContent = `
        <span id="Jenkins_01">
            <div class="content-container">
<p class="main-heading">Jenkins training provided by A1 Training Institute.

   <p class="description">Jenkins training provided by A1 Training Institute enables you to automate and streamline your software development process. By mastering Jenkins, you will learn how to set up Continuous Integration (CI) and Continuous Delivery (CD) pipelines, helping you detect issues early and deliver software faster. Jenkins' powerful automation features will improve efficiency and enhance productivity in your DevOps workflows.</p>

        <ul class="feature-list">
            <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
            <li class="feature-item">&#10003; Comprehensive coverage of basic to advanced Python programming concepts</li>
            <li class="feature-item">&#10003; Hands-on projects to reinforce theoretical knowledge</li>
            <li class="feature-item">&#10003; Real-world assignments and interactive lab sessions</li>
            <li class="feature-item">&#10003; Focus on web development, data analysis, and automation with Python</li>
        </ul>

    <h4 class="sub-heading">We provide the NO.1 Python training program in Chennai. Our flexible training modes include both classroom and online training. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Docker_Training') {
        descriptionContent = `
        <span id="Docker_Training">
           <div class="content-container">

    <h1 class="main-heading">Docker Training at A1 Training Institute</h1>

<p class="description">Docker training provided by A1 Training Institute equips you with the knowledge to efficiently containerize applications and streamline the deployment process. By mastering Docker, you can build, manage, and scale applications in isolated environments. Learn how Docker's powerful features improve productivity, from development to production, while enhancing scalability and portability across various platforms.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Docker concepts from basic to advanced</li>
    <li class="feature-item">&#10003; Hands-on projects to build and deploy containerized applications</li>
    <li class="feature-item">&#10003; Real-world assignments and interactive lab sessions</li>
    <li class="feature-item">&#10003; Focus on Docker Swarm, Kubernetes, and orchestration tools</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Docker training program in Chennai. Our flexible training options include both classroom and online training. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Kubenetes_Training') {
        descriptionContent = `
        <span id="Kubenetes_Training">
         <div class="content-container">

<h1 class="main-heading">Kubernetes Training at A1 Training Institute</h1>

<p class="description">Kubernetes training provided by A1 Training Institute equips you with the skills to manage and orchestrate containerized applications at scale. By mastering Kubernetes, you will learn how to automate deployment, scaling, and management of containerized applications. This training enhances your ability to efficiently manage cloud-native systems and improve the productivity of DevOps teams.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 45 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Kubernetes fundamentals to advanced orchestration techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to manage and scale containerized applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on Kubernetes clusters and automation</li>
    <li class="feature-item">&#10003; Focus on Kubernetes integration with Docker, CI/CD pipelines, and cloud platforms</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Kubernetes training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Ansible_Training') {
        descriptionContent = `
        <span id="Ansible_Training">
          <div class="content-container">

<h1 class="main-heading">Ansible Training at A1 Training Institute</h1>

<p class="description">Ansible training provided by A1 Training Institute empowers you with the knowledge to automate IT infrastructure, enabling you to manage configurations, deploy applications, and orchestrate complex tasks efficiently. By mastering Ansible, you can streamline processes, reduce manual effort, and improve consistency across your systems, enhancing overall productivity in DevOps and system administration.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 35 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Ansible basics to advanced automation techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to automate infrastructure tasks and manage configurations</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on playbooks, roles, and Ansible Tower</li>
    <li class="feature-item">&#10003; Focus on integrating Ansible with CI/CD pipelines and cloud environments</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Ansible training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Terraform') {
        descriptionContent = `
        <span id="Terraform">
            <div class="content-container">

   <h1 class="main-heading">Terraform Training at A1 Training Institute</h1>

<p class="description">Terraform training provided by A1 Training Institute equips you with the skills to manage and provision infrastructure as code. By mastering Terraform, you can automate the deployment of cloud resources, manage infrastructure changes, and ensure consistent configurations across your environments. This training enhances your ability to work with multiple cloud providers and improves collaboration within DevOps teams.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Terraform basics to advanced infrastructure management</li>
    <li class="feature-item">&#10003; Hands-on projects to create and manage infrastructure using Terraform</li>
    <li class="feature-item">&#10003; Real-world assignments focused on modules, state management, and workflows</li>
    <li class="feature-item">&#10003; Focus on integrating Terraform with CI/CD pipelines and cloud platforms</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Terraform training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'AWS_03') {
        descriptionContent = `
        <span id="AWS_03">
            <div class="content-container">

<h1 class="main-heading">AWS Training at A1 Training Institute</h1>

<p class="description">AWS training provided by A1 Training Institute equips you with the skills to architect, deploy, and manage scalable applications on the Amazon Web Services (AWS) cloud platform. By mastering AWS, you can take advantage of its vast range of services, including computing, storage, networking, and databases, to build highly available and fault-tolerant systems. This training is essential for cloud engineers, developers, and IT professionals looking to enhance their cloud expertise.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of AWS core services, from EC2 to S3 and RDS</li>
    <li class="feature-item">&#10003; Hands-on projects to build and manage cloud infrastructure on AWS</li>
    <li class="feature-item">&#10003; Real-world assignments focused on security, monitoring, and cost management</li>
    <li class="feature-item">&#10003; Focus on best practices for architecting scalable and fault-tolerant systems on AWS</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 AWS training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'gcp') {
        descriptionContent = `
        <span id="gcp">
          <div class="content-container">

    <h1 class="main-heading">GCP Training at A1 Training Institute</h1>

<p class="description">GCP training provided by A1 Training Institute equips you with the skills to design, develop, and manage applications on the Google Cloud Platform. By mastering GCP, you will learn how to leverage its powerful tools and services for data storage, computing, machine learning, and networking, enabling you to build scalable and reliable applications. This training is ideal for developers, data engineers, and IT professionals looking to enhance their cloud skills.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of GCP services, including Compute Engine, BigQuery, and Kubernetes Engine</li>
    <li class="feature-item">&#10003; Hands-on projects to deploy and manage applications on GCP</li>
    <li class="feature-item">&#10003; Real-world assignments focused on cloud architecture, data analytics, and security</li>
    <li class="feature-item">&#10003; Focus on best practices for optimizing performance and cost management on GCP</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 GCP training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Azure_Training') {
        descriptionContent = `
        <span id="Azure_Training">
          <div class="content-container">

    <h1 class="main-heading">Azure Training at A1 Training Institute</h1>

<p class="description">Azure training provided by A1 Training Institute equips you with the skills to design, deploy, and manage applications and services on the Microsoft Azure cloud platform. By mastering Azure, you will learn how to leverage its extensive range of services for computing, analytics, storage, and networking, enabling you to create scalable and resilient solutions. This training is ideal for cloud developers, IT professionals, and system administrators looking to enhance their cloud capabilities.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 45 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Azure core services, including Azure Virtual Machines, Azure App Services, and Azure SQL Database</li>
    <li class="feature-item">&#10003; Hands-on projects to build and manage cloud infrastructure on Azure</li>
    <li class="feature-item">&#10003; Real-world assignments focused on security, performance optimization, and cost management</li>
    <li class="feature-item">&#10003; Focus on best practices for deploying and managing applications in a cloud environment</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Azure training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'MEAN_Stack01') {
        descriptionContent = `
        <span id="MEAN_Stack01">
        <div class="content-container">

   <h1 class="main-heading">MEAN Stack Training at A1 Training Institute</h1>

<p class="description">MEAN Stack training provided by A1 Training Institute equips you with the skills to develop dynamic web applications using MongoDB, Express.js, Angular, and Node.js. By mastering the MEAN stack, you will learn how to build robust, scalable applications with a seamless end-to-end JavaScript development experience. This training is essential for aspiring web developers and professionals looking to enhance their full-stack development capabilities.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of MongoDB, Express.js, Angular, and Node.js fundamentals</li>
    <li class="feature-item">&#10003; Hands-on projects to build and deploy full-stack applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on API development, database management, and front-end integration</li>
    <li class="feature-item">&#10003; Focus on best practices for building scalable and maintainable web applications</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 MEAN Stack training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'MERN_Stack02') {
        descriptionContent = `
        <span id="MERN_Stack02">
            <div class="content-container">

   <h1 class="main-heading">MERN Stack Training at A1 Training Institute</h1>

<p class="description">MERN Stack training provided by A1 Training Institute equips you with the skills to develop powerful web applications using MongoDB, Express.js, React, and Node.js. By mastering the MERN stack, you will learn how to create dynamic, scalable applications with an efficient and modern JavaScript framework. This training is ideal for aspiring web developers and professionals looking to enhance their full-stack development skills in the latest technologies.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of MongoDB, Express.js, React, and Node.js fundamentals</li>
    <li class="feature-item">&#10003; Hands-on projects to build and deploy full-stack applications</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on RESTful API development, state management, and front-end integration</li>
    <li class="feature-item">&#10003; Focus on best practices for building responsive and maintainable web applications</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 MERN Stack training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'react_js') {
        descriptionContent = `
        <span id="react_js">
         <div class="content-container">

   <h1 class="main-heading">React.js Training at A1 Training Institute</h1>

<p class="description">React.js training provided by A1 Training Institute equips you with the skills to build dynamic user interfaces and single-page applications using React, a powerful JavaScript library. By mastering React.js, you will learn how to create reusable components, manage application state, and enhance performance with advanced features like hooks and context API. This training is ideal for web developers and programmers looking to specialize in front-end development.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of React.js fundamentals, including components, state, and props</li>
    <li class="feature-item">&#10003; Hands-on projects to create interactive web applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on routing, form handling, and API integration</li>
    <li class="feature-item">&#10003; Focus on best practices for building scalable and maintainable React applications</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 React.js training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Web_Designing') {
        descriptionContent = `
        <span id="Web_Designing">
           <div class="content-container">

<h1 class="main-heading">Web Designing Training at A1 Training Institute</h1>

<p class="description">Web Designing training provided by A1 Training Institute equips you with the skills to create visually appealing and user-friendly websites. You will learn the principles of design, color theory, typography, and responsive layouts using the latest web technologies. This training is ideal for aspiring web designers and developers looking to enhance their creative skills and build engaging online experiences.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of HTML, CSS, and JavaScript fundamentals</li>
    <li class="feature-item">&#10003; Hands-on projects to design and develop responsive web pages</li>
    <li class="feature-item">&#10003; Real-world assignments focused on UI/UX principles and website optimization</li>
    <li class="feature-item">&#10003; Focus on best practices for creating visually stunning and accessible web designs</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Web Designing training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>
roviding classroom and online training. Our training centers are spread across Chennai at Adyar, OMR,
        Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'UI/UX_01') {
        descriptionContent = `
        <span id="UI/UX_01">
            <div class="content-container">

   <h1 class="main-heading">UI/UX Design Training at A1 Training Institute</h1>

<p class="description">UI/UX Design training provided by A1 Training Institute equips you with the skills to create intuitive and engaging user experiences for websites and applications. You will learn the principles of user-centered design, prototyping, wireframing, and usability testing. This training is ideal for aspiring designers and product managers looking to enhance their skills in creating user-friendly interfaces and effective user experiences.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of design thinking, user research, and interface design</li>
    <li class="feature-item">&#10003; Hands-on projects to create wireframes, prototypes, and mockups</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on usability testing and user feedback analysis</li>
    <li class="feature-item">&#10003; Focus on best practices for designing responsive and accessible user interfaces</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 UI/UX Design training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'PHP_Full_Stack') {
        descriptionContent = `
        <span id="PHP_Full_Stack">
             <div class="content-container">

   <h1 class="main-heading">PHP Full Stack Training at A1 Training Institute</h1>

<p class="description">PHP Full Stack training provided by A1 Training Institute equips you with the skills to develop dynamic and robust web applications using PHP as the backend technology. You will learn to integrate front-end and back-end development using HTML, CSS, JavaScript, and MySQL. This training is ideal for aspiring developers looking to gain expertise in full-stack development and build comprehensive web solutions.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of PHP, MySQL, HTML, CSS, and JavaScript fundamentals</li>
    <li class="feature-item">&#10003; Hands-on projects to build and deploy full-stack applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on CRUD operations, session management, and API integration</li>
    <li class="feature-item">&#10003; Focus on best practices for building secure and scalable web applications</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 PHP Full Stack training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'PHP_Experts') {
        descriptionContent = `
        <span id="PHP_Experts">
             <div class="content-container">

<h1 class="main-heading">PHP Expert Training at A1 Training Institute</h1>

<p class="description">PHP Expert training provided by A1 Training Institute is designed for developers looking to deepen their expertise in PHP programming. This course covers advanced PHP concepts, frameworks, and best practices to help you build high-performance web applications. By mastering PHP, you will learn to optimize code, implement security measures, and work with popular PHP frameworks like Laravel and CodeIgniter.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of advanced PHP concepts and techniques</li>
    <li class="feature-item">&#10003; Hands-on projects utilizing PHP frameworks for rapid development</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on performance optimization and secure coding practices</li>
    <li class="feature-item">&#10003; Focus on integration with front-end technologies and APIs</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 PHP Expert training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Angular_Js') {
        descriptionContent = `
        <span id="Angular_Js">
            <div class="content-container">

    <h1 class="main-heading">Angular Training at A1 Training Institute</h1>

<p class="description">Angular training provided by A1 Training Institute equips you with the skills to build dynamic and responsive web applications using Angular, a modern front-end framework. You will learn to create single-page applications with a strong emphasis on components, modules, services, and routing. This training is ideal for aspiring web developers looking to specialize in front-end development with Angular.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Angular fundamentals, including TypeScript, components, and directives</li>
    <li class="feature-item">&#10003; Hands-on projects to develop scalable web applications</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on state management, form handling, and API integration</li>
    <li class="feature-item">&#10003; Focus on best practices for building maintainable and testable Angular applications</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Angular training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Devops_Training') {
        descriptionContent = `
        <span id="Devops_Training">
             <div class="content-container">

 <h1 class="main-heading">DevOps Training at A1 Training Institute</h1>

<p class="description">DevOps training provided by A1 Training Institute equips you with the skills to streamline development and operations processes through collaboration, automation, and continuous integration. You will learn key DevOps tools and practices, including version control, containerization, orchestration, and CI/CD pipelines. This training is ideal for IT professionals looking to enhance their knowledge in modern software development and deployment methodologies.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of DevOps principles, tools, and best practices</li>
    <li class="feature-item">&#10003; Hands-on projects to implement CI/CD pipelines using Jenkins, Git, and Docker</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on infrastructure as code and cloud services</li>
    <li class="feature-item">&#10003; Focus on collaboration techniques and monitoring strategies for effective DevOps implementation</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 DevOps training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Unix_Shell_Scripting_Training') {
        descriptionContent = `
        <span id="Unix_Shell_Scripting_Training">
             <div class="content-container">

<h1 class="main-heading">Unix Shell Scripting Training at A1 Training Institute</h1>

<p class="description">Unix Shell Scripting training provided by A1 Training Institute equips you with the skills to automate tasks and manage system operations efficiently using shell scripts. You will learn the fundamentals of shell scripting, including command-line tools, file handling, and scripting best practices. This training is ideal for system administrators, developers, and IT professionals looking to enhance their productivity through automation.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Unix shell scripting concepts and techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to create and execute shell scripts for real-world scenarios</li>
    <li class="feature-item">&#10003; Real-world assignments focused on process automation, system monitoring, and data manipulation</li>
    <li class="feature-item">&#10003; Focus on best practices for writing efficient and maintainable shell scripts</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Unix Shell Scripting training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'C_And_Cplus_Training') {
        descriptionContent = `
        <span id="C_And_Cplus_Training">
             <div class="content-container">

    <h1 class="main-heading">C and C++ Training at A1 Training Institute</h1>

<p class="description">C and C++ training provided by A1 Training Institute equips you with the foundational skills needed to develop efficient and high-performance software. You will learn the core concepts of both programming languages, including syntax, data structures, memory management, and object-oriented programming in C++. This training is ideal for aspiring programmers and software developers looking to gain a strong understanding of systems programming and application development.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of C programming fundamentals and advanced C++ concepts</li>
    <li class="feature-item">&#10003; Hands-on projects to build real-world applications and solve programming challenges</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on algorithms, data structures, and design patterns</li>
    <li class="feature-item">&#10003; Focus on best practices for writing clean, efficient, and maintainable code</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 C and C++ training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'NET_Training') {
        descriptionContent = `
        <span id="NET_Training">
             <div class="content-container">

   <h1 class="main-heading">.NET Training at A1 Training Institute</h1>

<p class="description">.NET training provided by A1 Training Institute equips you with the skills to develop robust and scalable applications using the .NET framework. You will learn to create web, desktop, and mobile applications, with a focus on C#, ASP.NET, and various .NET tools and technologies. This training is ideal for aspiring developers looking to specialize in Microsoft technologies and enhance their programming capabilities.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of .NET fundamentals, including C# programming and ASP.NET MVC</li>
    <li class="feature-item">&#10003; Hands-on projects to develop real-world applications and APIs</li>
    <li class="feature-item">&#10003; Real-world assignments focused on database integration, web services, and deployment</li>
    <li class="feature-item">&#10003; Focus on best practices for building maintainable and efficient applications</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 .NET training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'JavaScript_Training') {
        descriptionContent = `
        <span id="JavaScript_Training">
            <div class="content-container">

    <h1 class="main-heading">JavaScript Training at A1 Training Institute</h1>

<p class="description">JavaScript training provided by A1 Training Institute equips you with the skills to create interactive and dynamic web applications. You will learn the fundamentals of JavaScript, including syntax, DOM manipulation, event handling, and asynchronous programming. This training is ideal for aspiring web developers looking to enhance their front-end development skills and create engaging user experiences.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of JavaScript concepts, including ES6 features and best practices</li>
    <li class="feature-item">&#10003; Hands-on projects to build interactive web applications and dynamic content</li>
    <li class="feature-item">&#10003; Real-world assignments focused on API integration and single-page application development</li>
    <li class="feature-item">&#10003; Focus on debugging techniques and performance optimization strategies</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 JavaScript training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'MySQL_Training') {
        descriptionContent = `
        <span id="MySQL_Training">
            <div class="content-container">

    <h1 class="main-heading">MySQL Training at A1 Training Institute</h1>

<p class="description">MySQL training provided by A1 Training Institute equips you with the skills to manage and manipulate databases effectively using MySQL, one of the most popular relational database management systems. You will learn database design, SQL querying, data manipulation, and performance optimization techniques. This training is ideal for aspiring database administrators, data analysts, and developers looking to enhance their database management skills.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of MySQL fundamentals, including database design and normalization</li>
    <li class="feature-item">&#10003; Hands-on projects to create and manage databases and perform complex queries</li>
    <li class="feature-item">&#10003; Real-world assignments focused on data analysis and reporting</li>
    <li class="feature-item">&#10003; Focus on best practices for database security, backup, and recovery</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 MySQL training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'SQL_Server_DBA_Training') {
        descriptionContent = `
        <span id="SQL_Server_DBA_Training">
           <div class="content-container">

    <h1 class="main-heading">SQL Server DBA Training at A1 Training Institute</h1>

<p class="description">SQL Server DBA training provided by A1 Training Institute equips you with the essential skills to manage and administer SQL Server databases effectively. You will learn database design, performance tuning, backup and recovery strategies, and security management. This training is ideal for aspiring Database Administrators (DBAs) and IT professionals looking to enhance their database management capabilities and ensure optimal performance of SQL Server environments.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of SQL Server architecture, installation, and configuration</li>
    <li class="feature-item">&#10003; Hands-on projects to manage databases, perform queries, and troubleshoot issues</li>
    <li class="feature-item">&#10003; Real-world assignments focused on performance tuning, monitoring, and data recovery</li>
    <li class="feature-item">&#10003; Focus on best practices for database security and maintenance</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 SQL Server DBA training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'MongoDB_Training') {
        descriptionContent = `
        <span id="MongoDB_Training">
            <div class="content-container">

    <h1 class="main-heading">MongoDB Training at A1 Training Institute</h1>

<p class="description">MongoDB training provided by A1 Training Institute equips you with the skills to work with one of the most popular NoSQL databases. You will learn how to store, query, and manage data in a flexible, scalable environment using MongoDB. This training covers key concepts such as document-oriented data modeling, indexing, aggregation, and performance optimization, making it ideal for developers and data professionals looking to enhance their database skills.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of MongoDB fundamentals, including CRUD operations and schema design</li>
    <li class="feature-item">&#10003; Hands-on projects to create and manage databases and implement real-time applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on data aggregation and performance tuning</li>
    <li class="feature-item">&#10003; Focus on best practices for working with NoSQL databases and cloud integration</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 MongoDB training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Android') {
        descriptionContent = `
        <span id="Android">
             <div class="content-container">

   <h1 class="main-heading">Android Training at A1 Training Institute</h1>

<p class="description">Android training provided by A1 Training Institute equips you with the skills to develop and deploy robust mobile applications on the Android platform. You will learn the fundamentals of Android development, including user interface design, data storage, and API integration. This training is ideal for aspiring mobile developers looking to create engaging and user-friendly applications for a wide range of devices.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Android development tools, frameworks, and best practices</li>
    <li class="feature-item">&#10003; Hands-on projects to build and publish real-world Android applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on UI/UX design, performance optimization, and testing</li>
    <li class="feature-item">&#10003; Focus on integration with web services and third-party APIs</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Android training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'I_Phone') {
        descriptionContent = `
        <span id="I_Phone">
            <div class="content-container">

  <h1 class="main-heading">iPhone (iOS) Training at A1 Training Institute</h1>

<p class="description">iPhone (iOS) training provided by A1 Training Institute equips you with the essential skills to develop high-quality applications for iOS devices. You will learn the fundamentals of iOS development, including Swift programming, user interface design, and data management. This training is ideal for aspiring mobile developers who want to create engaging and user-friendly applications for iPhone and iPad users.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of iOS development tools, frameworks, and best practices</li>
    <li class="feature-item">&#10003; Hands-on projects to build and deploy real-world iOS applications</li>
    <li class="feature-item">&#10003; Real-world assignments focused on UI/UX design, app performance, and testing</li>
    <li class="feature-item">&#10003; Focus on integration with Apple's ecosystem and third-party services</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 iPhone (iOS) training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Machine_Learning_Training') {
        descriptionContent = `
        <span id="Machine_Learning_Training">
            <div class="content-container">

  <h1 class="main-heading">Machine Learning Training at A1 Training Institute</h1>

<p class="description">Machine Learning training provided by A1 Training Institute equips you with the essential skills to build intelligent systems that learn from data. You will learn the fundamentals of machine learning algorithms, data preprocessing, model evaluation, and deployment. This training is ideal for aspiring data scientists and machine learning engineers looking to enhance their skills and apply machine learning techniques in real-world scenarios.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of supervised, unsupervised, and reinforcement learning techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to implement machine learning models using popular libraries like Scikit-Learn and TensorFlow</li>
    <li class="feature-item">&#10003; Real-world assignments focused on data analysis, feature engineering, and model optimization</li>
    <li class="feature-item">&#10003; Focus on practical applications in various domains such as finance, healthcare, and marketing</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Machine Learning training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Data_Science_Training') {
        descriptionContent = `
        <span id="Data_Science_Training">
            <div class="content-container">
<h1 class="main-heading">Data Science Training at A1 Training Institute</h1>

<p class="description">Data Science training provided by A1 Training Institute equips you with the essential skills to analyze and interpret complex data sets. You will learn the fundamentals of data analysis, statistical modeling, and machine learning techniques. This training is ideal for aspiring data scientists and analysts looking to harness the power of data to drive business decisions and strategies.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of data wrangling, exploratory data analysis, and visualization</li>
    <li class="feature-item">&#10003; Hands-on projects using popular tools like Python, R, and SQL</li>
    <li class="feature-item">&#10003; Real-world assignments focused on data interpretation and predictive modeling</li>
    <li class="feature-item">&#10003; Focus on practical applications in various industries such as finance, healthcare, and marketing</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Data Science training program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Deep_Learning_Course') {
        descriptionContent = `
        <span id="Deep_Learning_Course">
           <div class="content-container">

    <h1 class="main-heading">Deep Learning Course at A1 Training Institute</h1>

<p class="description">Deep Learning course provided by A1 Training Institute equips you with advanced skills to develop and deploy neural networks for complex problem-solving. You will learn the fundamentals of deep learning, including neural network architectures, training techniques, and optimization strategies. This course is ideal for aspiring data scientists and AI engineers looking to enhance their expertise in cutting-edge technologies.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of deep learning frameworks such as TensorFlow and PyTorch</li>
    <li class="feature-item">&#10003; Hands-on projects to build and evaluate deep learning models</li>
    <li class="feature-item">&#10003; Real-world assignments focused on applications like image recognition, natural language processing, and generative models</li>
    <li class="feature-item">&#10003; Focus on best practices for model training, tuning, and deployment in production environments</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Deep Learning course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Artificial_Intelligence_Course') {
        descriptionContent = `
        <span id="Artificial_Intelligence_Course">
             <div class="content-container">

   <h1 class="main-heading">Artificial Intelligence Course at A1 Training Institute</h1>

<p class="description">The Artificial Intelligence course provided by A1 Training Institute equips you with the essential skills to design and develop intelligent systems. You will learn the fundamentals of AI concepts, machine learning algorithms, and natural language processing. This course is ideal for aspiring AI engineers and data scientists looking to create innovative solutions that can learn and adapt from data.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of AI techniques, including supervised and unsupervised learning</li>
    <li class="feature-item">&#10003; Hands-on projects to implement AI solutions using popular frameworks like TensorFlow and Scikit-learn</li>
    <li class="feature-item">&#10003; Real-world assignments focused on applications in computer vision, speech recognition, and autonomous systems</li>
    <li class="feature-item">&#10003; Focus on ethical considerations and the societal impact of AI technologies</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Artificial Intelligence course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Data_Science_With_Python') {
        descriptionContent = `
        <span id="Data_Science_With_Python">
           <div class="content-container">

   <h1 class="main-heading">Data Science with Python Course at A1 Training Institute</h1>

<p class="description">The Data Science with Python course provided by A1 Training Institute equips you with the essential skills to analyze and interpret complex data sets using Python. You will learn the fundamentals of data analysis, statistical modeling, and machine learning techniques while leveraging Python’s powerful libraries such as Pandas, NumPy, and Matplotlib. This course is ideal for aspiring data scientists and analysts who want to harness the power of Python for data-driven decision-making.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of data wrangling, exploratory data analysis, and data visualization</li>
    <li class="feature-item">&#10003; Hands-on projects to implement machine learning models using Scikit-learn</li>
    <li class="feature-item">&#10003; Real-world assignments focused on predictive analytics and data storytelling</li>
    <li class="feature-item">&#10003; Focus on best practices for data cleaning, feature engineering, and model evaluation</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Data Science with Python course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Power_BI') {
        descriptionContent = `
        <span id="Power_BI">
             <div class="content-container">

    <h1 class="main-heading">Power BI Course at A1 Training Institute</h1>

<p class="description">The Power BI course provided by A1 Training Institute equips you with the essential skills to visualize and analyze data effectively. You will learn how to create interactive dashboards, reports, and data models using Power BI's powerful features. This course is ideal for aspiring data analysts and business intelligence professionals looking to enhance their data visualization capabilities and drive informed decision-making.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of data transformation, modeling, and visualization techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to create real-world dashboards and reports</li>
    <li class="feature-item">&#10003; Real-world assignments focused on data storytelling and business insights</li>
    <li class="feature-item">&#10003; Focus on best practices for effective data presentation and user interaction</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Power BI course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'MIS') {
        descriptionContent = `
        <span id="MIS">
            <div class="content-container">

    <h1 class="main-heading">Management Information Systems (MIS) Course at A1 Training Institute</h1>

<p class="description">The Management Information Systems (MIS) course provided by A1 Training Institute equips you with the essential skills to design, implement, and manage information systems that support decision-making in organizations. You will learn about data management, system analysis, and the strategic use of information technology. This course is ideal for aspiring business analysts and IT managers looking to enhance their understanding of MIS and its role in organizational success.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of information systems, data analytics, and decision support systems</li>
    <li class="feature-item">&#10003; Hands-on projects to analyze business processes and develop information system solutions</li>
    <li class="feature-item">&#10003; Real-world assignments focused on system design, implementation, and management</li>
    <li class="feature-item">&#10003; Focus on best practices for aligning IT with business goals and strategies</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 MIS course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Advanced_Microsoft_Excel') {
        descriptionContent = `
        <span id="Advanced_Microsoft_Excel">
           <div class="content-container">

   <h1 class="main-heading">Advanced Microsoft Excel Course at A1 Training Institute</h1>

<p class="description">The Advanced Microsoft Excel course provided by A1 Training Institute equips you with the skills to leverage Excel's powerful features for data analysis, visualization, and reporting. You will learn advanced functions, data modeling, pivot tables, and automation techniques using macros and VBA. This course is ideal for professionals looking to enhance their data manipulation capabilities and streamline their workflow using Excel.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of advanced Excel functions, formulas, and data analysis techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to create complex spreadsheets and dashboards</li>
    <li class="feature-item">&#10003; Real-world assignments focused on automating tasks and improving efficiency with macros and VBA</li>
    <li class="feature-item">&#10003; Focus on best practices for data visualization and reporting using Excel tools</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Advanced Microsoft Excel course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'SQL_Server_DBA_Training') {
        descriptionContent = `
        <span id="SQL_Server_DBA_Training">
             <div class="content-container">

    <h1 class="main-heading">SQL Server DBA Training Course at A1 Training Institute</h1>

<p class="description">The SQL Server DBA Training course provided by A1 Training Institute equips you with the essential skills to manage, maintain, and optimize SQL Server databases. You will learn about database design, backup and recovery strategies, performance tuning, and security management. This course is ideal for aspiring Database Administrators (DBAs) looking to enhance their database management capabilities and ensure high availability and performance of SQL Server environments.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of SQL Server architecture, installation, and configuration</li>
    <li class="feature-item">&#10003; Hands-on projects to implement backup, restore, and disaster recovery solutions</li>
    <li class="feature-item">&#10003; Real-world assignments focused on performance tuning and query optimization</li>
    <li class="feature-item">&#10003; Focus on best practices for database security, monitoring, and troubleshooting</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 SQL Server DBA Training course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Advanced_Digital_Marketing') {
        descriptionContent = `
        <span id="Advanced_Digital_Marketing">
             <div class="content-container">

   <h1 class="main-heading">Advanced Digital Marketing Course at A1 Training Institute</h1>

<p class="description">The Advanced Digital Marketing course provided by A1 Training Institute equips you with the skills to design and implement effective digital marketing strategies. You will learn about advanced SEO techniques, content marketing, social media strategies, email marketing, and data analytics. This course is ideal for marketing professionals and business owners looking to enhance their online presence and drive targeted traffic to their websites.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of digital marketing channels and tools</li>
    <li class="feature-item">&#10003; Hands-on projects to create and optimize marketing campaigns</li>
    <li class="feature-item">&#10003; Real-world assignments focused on analyzing marketing data and metrics</li>
    <li class="feature-item">&#10003; Focus on best practices for lead generation, conversion optimization, and customer engagement</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Advanced Digital Marketing course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Digital_Marketing') {
        descriptionContent = `
        <span id="Digital_Marketing">
             <div class="content-container">

<h1 class="main-heading">Digital Marketing Course at A1 Training Institute</h1>

<p class="description">The Digital Marketing course provided by A1 Training Institute equips you with the foundational skills to navigate the ever-evolving landscape of online marketing. You will learn about SEO, social media marketing, content marketing, email marketing, and pay-per-click advertising. This course is ideal for aspiring marketers and business owners looking to leverage digital platforms to reach their target audience effectively.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of digital marketing fundamentals and strategies</li>
    <li class="feature-item">&#10003; Hands-on projects to create and implement marketing campaigns</li>
    <li class="feature-item">&#10003; Real-world assignments focused on analyzing online metrics and performance</li>
    <li class="feature-item">&#10003; Focus on best practices for building brand awareness and driving engagement</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Digital Marketing course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'six_Weeks_Summer_Training') {
        descriptionContent = `
        <span id="six_Weeks_Summer_Training">
           <div class="content-container">
<h1 class="main-heading">Six Weeks Summer Training Program at A1 Training Institute</h1>

<p class="description">Our Six Weeks Summer Training Program at A1 Training Institute is designed to provide students with hands-on experience and practical knowledge in their chosen fields. Participants will engage in intensive training sessions covering essential concepts, tools, and technologies relevant to the industry. This program is ideal for students looking to enhance their skills and gain valuable insights before entering the workforce.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 6 Weeks of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of core concepts and practical applications</li>
    <li class="feature-item">&#10003; Hands-on projects to reinforce learning and gain real-world experience</li>
    <li class="feature-item">&#10003; Interactive workshops and sessions with industry experts</li>
    <li class="feature-item">&#10003; Focus on developing skills that enhance employability and career prospects</li>
</ul>

<h4 class="sub-heading">Join our Six Weeks Summer Training Program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'six_Months_Industrial_Training') {
        descriptionContent = `
        <span id="six_Months_Industrial_Training">
            <div class="content-container">

   <h1 class="main-heading">Six Months Industrial Training Program at A1 Training Institute</h1>

<p class="description">Our Six Months Industrial Training Program at A1 Training Institute is designed to bridge the gap between academic knowledge and practical application in the industry. This comprehensive program offers in-depth training across various domains, providing students with the opportunity to work on real-world projects and gain invaluable experience. This training is ideal for students looking to enhance their skills and increase their employability in a competitive job market.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 6 Months of Structured Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of advanced concepts and industry practices</li>
    <li class="feature-item">&#10003; Hands-on projects to develop a robust portfolio</li>
    <li class="feature-item">&#10003; Exposure to live projects and case studies from industry leaders</li>
    <li class="feature-item">&#10003; Focus on soft skills development and interview preparation</li>
</ul>

<h4 class="sub-heading">Enroll in our Six Months Industrial Training Program in Chennai. We offer flexible training options, including both classroom and online formats. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Graphic_Designing') {
        descriptionContent = `
        <span id="Graphic_Designing">
            <div class="content-container">

   <h1 class="main-heading">Graphic Designing Course at A1 Training Institute</h1>

<p class="description">The Graphic Designing course provided by A1 Training Institute equips you with the essential skills to create visually appealing designs that communicate ideas effectively. You will learn about design principles, typography, color theory, and software tools such as Adobe Photoshop and Illustrator. This course is ideal for aspiring designers and creative professionals looking to enhance their design capabilities and build a strong portfolio.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of design concepts and tools</li>
    <li class="feature-item">&#10003; Hands-on projects to develop practical skills in graphic design</li>
    <li class="feature-item">&#10003; Real-world assignments to enhance creativity and design thinking</li>
    <li class="feature-item">&#10003; Focus on building a professional portfolio for career advancement</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Graphic Designing course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Multimedia_Animation') {
        descriptionContent = `
        <span id="Multimedia_Animation">
           <div class="content-container">

    <h1 class="main-heading">Multimedia Animation Course at A1 Training Institute</h1>

<p class="description">The Multimedia Animation course offered by A1 Training Institute provides students with the skills to create captivating animations and visual effects. This comprehensive program covers essential techniques in 2D and 3D animation, character design, storyboarding, and the use of industry-standard software. Ideal for aspiring animators and multimedia professionals, this course will help you bring your creative ideas to life.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; In-depth coverage of animation principles and techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to create professional-quality animations</li>
    <li class="feature-item">&#10003; Exposure to the latest tools and software used in the animation industry</li>
    <li class="feature-item">&#10003; Focus on portfolio development and industry practices</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Multimedia Animation course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Graphic_Motion_Pro_Course') {
        descriptionContent = `
        <span id="Graphic_Motion_Pro_Course">
            <div class="content-container">

    <h1 class="main-heading">Graphic Motion Pro Course at A1 Training Institute</h1>

<p class="description">The Graphic Motion Pro Course at A1 Training Institute is designed for aspiring motion graphic artists looking to master the art of animated design. This course covers advanced techniques in motion graphics, visual storytelling, and animation principles, utilizing industry-standard software such as Adobe After Effects. Participants will learn how to create engaging animations that captivate audiences and enhance visual communication.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of advanced motion graphics techniques</li>
    <li class="feature-item">&#10003; Hands-on projects to create professional-quality motion graphics</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on visual storytelling and branding</li>
    <li class="feature-item">&#10003; Emphasis on building a strong portfolio to showcase your skills</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Graphic Motion Pro Course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Multimedia_&_Animation_(Diploma)') {
        descriptionContent = `
        <span id="Multimedia_&_Animation_(Diploma)">
            <div class="content-container">
<h1 class="main-heading">Multimedia & Animation (Diploma) at A1 Training Institute</h1>

<p class="description">The Multimedia & Animation Diploma at A1 Training Institute is a comprehensive program designed to equip students with the skills needed to excel in the dynamic fields of multimedia and animation. This course covers a wide range of topics, including 2D and 3D animation, visual effects, video editing, and graphic design. Students will gain hands-on experience with industry-standard software, preparing them for a successful career in multimedia and animation.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 1 Year of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive curriculum covering various aspects of multimedia and animation</li>
    <li class="feature-item">&#10003; Hands-on projects to develop a strong portfolio</li>
    <li class="feature-item">&#10003; Exposure to real-world industry practices and standards</li>
    <li class="feature-item">&#10003; Guidance on career development and job placement support</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 Multimedia & Animation Diploma program in Chennai. Our flexible training options include both classroom and online formats. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Videograpy_Course') {
        descriptionContent = `
        <span id="Videograpy_Course">
           <div class="content-container">

   <h1 class="main-heading">Videography Course at A1 Training Institute</h1>

<p class="description">The Videography Course at A1 Training Institute is designed to provide aspiring videographers with the essential skills and techniques needed to create high-quality video content. This course covers the entire video production process, from pre-production planning and shooting techniques to post-production editing and color grading. Participants will gain hands-on experience with professional equipment and software, preparing them for a successful career in videography.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of video production techniques and equipment</li>
    <li class="feature-item">&#10003; Hands-on projects to develop practical skills in videography</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on storytelling and visual communication</li>
    <li class="feature-item">&#10003; Emphasis on building a professional portfolio for career advancement</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 Videography Course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are conveniently located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Scriptwriting_Story_Boarding') {
        descriptionContent = `
        <span id="Scriptwriting_Story_Boarding">
            <div class="content-container">

    <h1 class="main-heading">Linux Training at A1 Training Institute</h1>

    <h1 class="main-heading">Scriptwriting & Storyboarding Course at A1 Training Institute</h1>

<p class="description">The Scriptwriting & Storyboarding Course at A1 Training Institute is designed for aspiring writers and visual storytellers who want to master the art of crafting compelling narratives. This course covers key techniques in scriptwriting, character development, dialogue creation, and visual storytelling through storyboarding. Participants will learn how to bring ideas to life on screen, whether for film, TV, or animation.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of scriptwriting techniques and story structure</li>
    <li class="feature-item">&#10003; Hands-on exercises in character development, plot creation, and dialogue</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on visual storytelling through storyboarding</li>
    <li class="feature-item">&#10003; Guidance on creating scripts for different media formats like film, TV, and animation</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Scriptwriting & Storyboarding Course in Chennai. Our flexible training modes include both classroom and online training. Our training centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Film_Making') {
        descriptionContent = `
        <span id="Film_Making">
           <div class="content-container">

   <h1 class="main-heading">Film Making Course at A1 Training Institute</h1>

<p class="description">The Film Making Course at A1 Training Institute is designed to provide aspiring filmmakers with the knowledge and practical skills needed to create professional-quality films. This course covers all aspects of film production, including scriptwriting, directing, cinematography, sound design, and editing. Participants will gain hands-on experience with industry-standard equipment and software, enabling them to bring their creative vision to life on screen.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of film production techniques from pre-production to post-production</li>
    <li class="feature-item">&#10003; Hands-on projects to develop practical filmmaking skills</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on directing, cinematography, and editing</li>
    <li class="feature-item">&#10003; Emphasis on creating a professional film portfolio for career advancement</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 Film Making Course in Chennai. Our flexible training options include both classroom and online formats. Our training centers are located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Graphic_Designing_Pro') {
        descriptionContent = `
        <span id="Graphic_Designing_Pro">
            <div class="content-container">

    <h1 class="main-heading">Graphic Designing Pro Course at A1 Training Institute</h1>

<p class="description">The Graphic Designing Pro Course at A1 Training Institute is crafted for individuals aiming to become experts in the field of graphic design. This course offers an in-depth understanding of design principles, color theory, typography, branding, and layout design. Students will work with industry-standard software like Adobe Photoshop, Illustrator, and InDesign to create visually compelling designs that meet professional standards.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of advanced graphic design techniques and tools</li>
    <li class="feature-item">&#10003; Hands-on projects focusing on real-world design challenges</li>
    <li class="feature-item">&#10003; Real-world assignments on branding, UI/UX, and digital media design</li>
    <li class="feature-item">&#10003; Portfolio-building sessions to help you showcase your design skills</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Graphic Designing Pro Course in Chennai. Our flexible training options include both classroom and online formats, and our training centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Manual_plus_Selenium_01') {
        descriptionContent = `
        <span id="Manual_plus_Selenium_01">
            <div class="content-container">

<h1 class="main-heading">Manual + Selenium Testing Course at A1 Training Institute</h1>

<p class="description">The Manual + Selenium Testing Course at A1 Training Institute equips participants with both manual testing fundamentals and automation skills using Selenium. This comprehensive course covers the complete software testing lifecycle, from test case design and execution in manual testing to automating tests with Selenium WebDriver. You will learn how to ensure software quality and reliability in real-world projects by combining manual and automated testing techniques.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 45 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of manual testing principles and processes</li>
    <li class="feature-item">&#10003; Hands-on projects using Selenium WebDriver for automating test cases</li>
    <li class="feature-item">&#10003; Real-world assignments on creating, executing, and debugging test scripts</li>
    <li class="feature-item">&#10003; Focus on industry best practices for software quality assurance and automation</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Manual + Selenium Testing Course in Chennai. Our training is offered in both classroom and online formats, with centers located across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Full_Stack_QA') {
        descriptionContent = `
        <span id="Full_Stack_QA">
           <div class="content-container">

<h1 class="main-heading">Full Stack QA Course at A1 Training Institute</h1>

<p class="description">The Full Stack QA Course at A1 Training Institute is designed to develop your expertise in both manual and automation testing, giving you a complete skill set to handle quality assurance for web, mobile, and enterprise applications. From writing test cases to automating tests with tools like Selenium, JUnit, and TestNG, this course covers everything needed to ensure software quality at every level of the stack.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 60 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; In-depth coverage of manual and automation testing processes</li>
    <li class="feature-item">&#10003; Hands-on projects on web, mobile, and API testing using advanced tools</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on full-stack testing methodologies</li>
    <li class="feature-item">&#10003; Training on industry-standard tools like Selenium, JUnit, and TestNG</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 Full Stack QA Course in Chennai, available in both classroom and online formats. Our training centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Java') {
        descriptionContent = `
        <span id="Java">
           <div class="content-container">

<h1 class="main-heading">Java Training at A1 Training Institute</h1>

<p class="description">The Java Training Course at A1 Training Institute is designed to equip you with the knowledge and skills needed to develop robust, scalable applications. This course covers the fundamentals of Java programming, including object-oriented concepts, Java APIs, and advanced features like multithreading, collections, and JDBC. You will also work on real-world projects to apply your learning in practical scenarios, preparing you for a successful career in software development.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of core and advanced Java concepts</li>
    <li class="feature-item">&#10003; Hands-on projects focused on real-world Java applications</li>
    <li class="feature-item">&#10003; Real-world assignments on object-oriented programming, Java collections, and JDBC</li>
    <li class="feature-item">&#10003; Focus on building enterprise-level applications with Java frameworks like Spring and Hibernate</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Java Training Course in Chennai, with flexible training modes including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'REST_Assured_API') {
        descriptionContent = `
        <span id="REST_Assured_API">
            <div class="content-container">

   <h1 class="main-heading">REST Assured API Testing Training at A1 Training Institute</h1>

<p class="description">The REST Assured API Testing Course at A1 Training Institute is designed to help you master API testing using REST Assured, one of the most popular frameworks for automating RESTful services testing. This course covers everything from understanding API requests and responses to writing comprehensive test scripts, automating API tests, and integrating them into CI/CD pipelines. You’ll gain practical experience in testing REST APIs, ensuring their functionality, reliability, and security.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of API testing fundamentals and REST Assured framework</li>
    <li class="feature-item">&#10003; Hands-on projects to automate REST API tests</li>
    <li class="feature-item">&#10003; Real-world assignments on creating and executing API test scripts</li>
    <li class="feature-item">&#10003; Integration of API tests into CI/CD pipelines for continuous testing</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 REST Assured API Testing Training in Chennai, with classroom and online options. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Appium_Testing') {
        descriptionContent = `
        <span id="Appium_Testing">
            <div class="content-container">

    <h1 class="main-heading">Appium Testing Training at A1 Training Institute</h1>

<p class="description">The Appium Testing Course at A1 Training Institute is designed to help you become proficient in mobile automation testing using Appium. This course covers the essentials of mobile application testing, focusing on both Android and iOS platforms. You will learn how to write automated test scripts using Appium, integrate Appium with tools like Selenium and TestNG, and ensure the quality and performance of mobile apps across different devices and operating systems.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of mobile automation testing for Android and iOS</li>
    <li class="feature-item">&#10003; Hands-on projects using Appium to automate mobile applications</li>
    <li class="feature-item">&#10003; Real-world assignments on creating test scripts and running tests across different mobile devices</li>
    <li class="feature-item">&#10003; Integration of Appium with Selenium and TestNG for advanced testing</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Appium Testing Training in Chennai, offering both classroom and online training modes. Our centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'API_Testing') {
        descriptionContent = `
        <span id="API_Testing">
            <div class="content-container">
<h1 class="main-heading">API Testing Training at A1 Training Institute</h1>

<p class="description">The API Testing Course at A1 Training Institute is designed to provide you with in-depth knowledge and hands-on experience in testing web APIs. This course covers the fundamentals of API testing, including understanding REST and SOAP services, validating API responses, writing automation scripts, and ensuring the security and reliability of APIs. By mastering API testing tools like Postman, REST Assured, and SoapUI, you will be prepared to perform comprehensive testing for modern web applications.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; In-depth coverage of RESTful and SOAP API testing</li>
    <li class="feature-item">&#10003; Hands-on projects on testing APIs using tools like Postman, REST Assured, and SoapUI</li>
    <li class="feature-item">&#10003; Real-world assignments on validating API responses and automating tests</li>
    <li class="feature-item">&#10003; Integration of API testing with CI/CD pipelines for continuous testing</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 API Testing Training in Chennai with flexible training modes, including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Manual_Testing') {
        descriptionContent = `
        <span id="Manual_Testing">
           <div class="content-container">

<h1 class="main-heading">Manual Testing Training at A1 Training Institute</h1>

<p class="description">The Manual Testing Course at A1 Training Institute is designed to teach you the core concepts of software testing. This course covers everything from understanding software development lifecycles to identifying defects and performing effective test case design. You will learn manual testing techniques, explore various testing types, and gain practical experience through real-world projects to ensure software quality and reliability.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of software testing fundamentals and test case design</li>
    <li class="feature-item">&#10003; Hands-on projects on defect tracking, reporting, and executing test cases</li>
    <li class="feature-item">&#10003; Real-world assignments focused on testing methodologies and processes</li>
    <li class="feature-item">&#10003; Introduction to different testing types: functional, non-functional, and regression testing</li>
</ul>

<h4 class="sub-heading">We offer the NO.1 Manual Testing Training in Chennai with flexible training modes, including both classroom and online training. Our centers are spread across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Primavera_P6_Testing') {
        descriptionContent = `
        <span id="Primavera_P6_Testing">
            <div class="content-container">

<h1 class="main-heading">Primavera P6 Testing Training at A1 Training Institute</h1>

<p class="description">The Primavera P6 Testing Course at A1 Training Institute is tailored to provide you with the skills needed to effectively manage and test projects using Primavera P6 software. This course covers the essential features of Primavera P6, including project planning, scheduling, resource management, and risk assessment. You will learn how to create, monitor, and analyze project schedules, ensuring that your projects are delivered on time and within budget.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Primavera P6 functionalities and best practices</li>
    <li class="feature-item">&#10003; Hands-on projects to reinforce scheduling and project management skills</li>
    <li class="feature-item">&#10003; Real-world assignments on project planning, resource allocation, and performance tracking</li>
    <li class="feature-item">&#10003; Focus on techniques for effective project testing and quality assurance</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Primavera P6 Testing Training in Chennai, with flexible options for both classroom and online training. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Agile_Testing') {
        descriptionContent = `
        <span id="Agile_Testing">
            <div class="content-container">

<h1 class="main-heading">Agile Testing Training at A1 Training Institute</h1>

<p class="description">The Agile Testing Course at A1 Training Institute is designed to equip you with the skills and knowledge required to thrive in an Agile environment. This course covers the principles of Agile methodologies, emphasizing the importance of testing throughout the software development lifecycle. You will learn about test-driven development (TDD), behavior-driven development (BDD), and the integration of testing into Agile frameworks like Scrum and Kanban, ensuring that quality is maintained at every stage of development.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Agile principles and testing methodologies</li>
    <li class="feature-item">&#10003; Hands-on projects focusing on TDD and BDD practices</li>
    <li class="feature-item">&#10003; Real-world assignments on implementing Agile testing strategies in teams</li>
    <li class="feature-item">&#10003; Focus on collaboration, continuous integration, and automation in Agile testing</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Agile Testing Training in Chennai, offering flexible training modes including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Microsoft_Excel_Training') {
        descriptionContent = `
        <span id="Microsoft_Excel_Training">
           <div class="content-container">

<h1 class="main-heading">Microsoft Excel Training at A1 Training Institute</h1>

<p class="description">The Microsoft Excel Training Course at A1 Training Institute is designed to equip you with essential skills for data analysis, reporting, and automation. This course covers a wide range of topics, from basic spreadsheet functions to advanced data manipulation techniques, including formulas, pivot tables, and data visualization. By mastering Excel, you will enhance your productivity and gain the ability to make data-driven decisions effectively.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of basic to advanced Excel functionalities</li>
    <li class="feature-item">&#10003; Hands-on projects to apply learning in real-world scenarios</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on data analysis, reporting, and visualization</li>
    <li class="feature-item">&#10003; Focus on automating tasks with macros and VBA for increased efficiency</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Microsoft Excel Training in Chennai, with flexible training modes including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Scrum_Master_Training') {
        descriptionContent = `
        <span id="Scrum_Master_Training">
             <div class="content-container">

<h1 class="main-heading">Scrum Master Training at A1 Training Institute</h1>

<p class="description">The Scrum Master Training Course at A1 Training Institute is designed to provide you with the essential skills and knowledge needed to facilitate Agile project management using the Scrum framework. This course covers Scrum principles, roles, ceremonies, and artifacts, emphasizing the Scrum Master’s role in guiding teams towards high performance. You will learn how to implement Scrum practices, manage team dynamics, and ensure continuous improvement throughout the project lifecycle.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 40 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of Scrum theory and best practices</li>
    <li class="feature-item">&#10003; Hands-on projects to simulate real-world Scrum scenarios</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on Agile coaching and team facilitation</li>
    <li class="feature-item">&#10003; Focus on effective communication, conflict resolution, and leadership skills in a Scrum environment</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Scrum Master Training in Chennai, with flexible training modes including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    } else if (courses1.col1[i].description === 'Motion_Graphic_Course') {
        descriptionContent = `
        <span id="Motion_Graphic_Course">
            <div class="content-container">

<h1 class="main-heading">Motion Graphic Course at A1 Training Institute</h1>

<p class="description">The Motion Graphic Course at A1 Training Institute is designed to equip you with the skills needed to create engaging and visually stunning animations. This course covers essential techniques in motion graphics, including animation principles, typography, and visual storytelling. You will learn to use industry-standard software to bring your creative ideas to life, enhancing your ability to communicate effectively through dynamic visuals.</p>

<ul class="feature-list">
    <li class="feature-item">&#10003; 50 hours of Instructor-led Training</li>
    <li class="feature-item">&#10003; Comprehensive coverage of animation techniques and design principles</li>
    <li class="feature-item">&#10003; Hands-on projects to develop a professional motion graphic portfolio</li>
    <li class="feature-item">&#10003; Real-world assignments focusing on branding, advertising, and multimedia content</li>
    <li class="feature-item">&#10003; Focus on integrating sound and music to enhance visual storytelling</li>
</ul>

<h4 class="sub-heading">We provide the NO.1 Motion Graphic Course in Chennai, with flexible training modes including classroom and online sessions. Our centers are located at Adyar, OMR, Navalur, Porur, Annanagar, Velachery, and Perumbakkam.</h4>

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
    }



    // Example text with underscores
    let textWithUnderscores = courses1.col1[i].title;

    // Remove underscores using replace() with regex
    let textWithoutUnderscores = textWithUnderscores.replace(/_/g, ' ');

    document.write(`
    <div class="modal" id="${courses1.col1[i].title}">
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
            maxWidth: '1200px',
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
        },
        colHover: {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow on hover to bottom content
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
        @keyframes slideInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
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

// Responsive Design
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleMediaQueryChange(e) {
    if (e.matches) {
        document.querySelectorAll('.training-col').forEach(col => {
            col.style.maxWidth = '100%';
            col.style.flex = '100%';
        });
    } else {
        document.querySelectorAll('.training-col').forEach(col => {
            col.style.maxWidth = '22%';
            col.style.flex = '1';
        });
    }
}
mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
