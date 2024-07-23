for (let i = 0; i < courses.col1.length; i++) {
    let descriptionContent = '';

    if (courses.col1[i].description === 'MEAN_Stack01') {
        descriptionContent = `
        <span id="MEAN_Stack01">
            <!-- what is mean stack -->
            The MEAN stack is a popular technology stack used for building full-stack JavaScript applications. 
            The acronym "MEAN" stands for MongoDB, Express.js, Angular, and Node.js. Here's a brief overview of each component:
            <br>
            <strong>MongoDB:</strong> A NoSQL database that uses a document-oriented data model. It stores data in flexible, JSON-like documents, 
            which makes it easy to work with and scale.<br>
            
            <strong>Express.js:</strong> A web application framework for Node.js. It provides a robust set of features to develop web and mobile 
            applications, including handling HTTP requests and middleware.<br>
            
            <strong>Angular:</strong> A front-end web application framework developed by Google. It allows developers to create dynamic, single-page 
            applications with a powerful set of tools for managing data and building user interfaces.<br>
            
            <strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server 
            side, making it possible to use a single programming language for both client-side and server-side development.<br>
        </span>`;
    } else if (courses.col1[i].description === 'MERN_Stack02') {
        descriptionContent = `
        <span id="MERN_Stack02">
            <!-- what is mern stack -->
            The MERN stack is another popular technology stack used for building full-stack JavaScript applications. 
            The acronym "MERN" stands for MongoDB, Express.js, React, and Node.js. Here's a brief overview of each component:
            
            <strong>MongoDB:</strong> A NoSQL database that uses a document-oriented data model. It stores data in flexible, JSON-like documents, 
            which makes it easy to work with and scale.<br>
            
            <strong>Express.js:</strong> A web application framework for Node.js. It provides a robust set of features to develop web and mobile 
            applications, including handling HTTP requests and middleware.<br>
            
            <strong>React:</strong> A front-end JavaScript library developed by Facebook. It allows developers to build user interfaces with a component-based 
            architecture, making it easy to create interactive UIs.<br>
            
            <strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server 
            side, making it possible to use a single programming language for both client-side and server-side development.<br>
        </span>`;
    } else if (courses.col1[i].description === 'AWS_03') {
        descriptionContent = `
        <span id="AWS_03">
            AWS (Amazon Web Services) training provides individuals and organizations with the knowledge and skills needed to effectively use AWS services and solutions. AWS offers a variety of training programs designed for different roles and levels of expertise, from beginners to advanced professionals. Here are some key components of AWS training:

Types of AWS Training
Digital Training

Self-paced Learning: AWS offers free and paid on-demand courses that can be taken at your own pace. These courses cover a wide range of topics, from basic AWS services to advanced architecture and deployment.
Learning Paths: AWS provides curated learning paths tailored to specific roles such as cloud practitioner, architect, developer, and operations.
Classroom Training

Instructor-led Training: These are live classes taught by AWS-certified instructors, available virtually or in-person. These sessions provide hands-on labs and real-world scenarios.
Private Onsite Training: For organizations, AWS offers customized training sessions delivered at their location, tailored to the team’s specific needs and objectives.
AWS Training Programs

AWS Certified Solutions Architect: Focuses on designing and deploying scalable systems on AWS.
AWS Certified Developer: Emphasizes development and maintenance of applications on AWS.
AWS Certified SysOps Administrator: Covers deployment, management, and operations on AWS.
AWS Certified DevOps Engineer: Concentrates on continuous delivery and automation of processes using AWS tools.
AWS Certified Security Specialty: Focuses on securing the AWS platform and ensuring data protection.
AWS Certified Machine Learning Specialty: Covers the use of machine learning and AI services on AWS.
        </span>`;
    } else if (courses.col1[i].description === 'gcp') {
        descriptionContent = `
        <span id="gcp">
           Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube. GCP provides a wide range of cloud services that enable developers and businesses to build, deploy, and scale applications and services.

Key Features and Services of GCP
Compute Services:

Google Compute Engine: Infrastructure as a Service (IaaS) offering that allows users to run virtual machines (VMs) on Google's infrastructure.
Google Kubernetes Engine (GKE): Managed Kubernetes service for container orchestration.
App Engine: Platform as a Service (PaaS) for building and deploying applications without managing the underlying infrastructure.
Storage and Databases:

Cloud Storage: Object storage service for storing and accessing data in the cloud.
Cloud SQL: Fully managed relational database service for MySQL, PostgreSQL, and SQL Server.
Cloud Bigtable: Fully managed NoSQL wide-column database for large analytical and operational workloads.
Networking:

Virtual Private Cloud (VPC): Provides networking functionality for GCP resources.
Cloud Load Balancing: Distributes incoming traffic across multiple instances to ensure high availability and performance.
Big Data and Machine Learning:

BigQuery: Fully managed data warehouse for analytics and business intelligence.
Cloud Dataflow: Managed service for real-time data processing.
AI Platform: Managed service for building, testing, and deploying machine learning models.
Security and Identity:

Identity and Access Management (IAM): Manages access control for GCP resources.
Cloud Identity-Aware Proxy: Controls access to cloud applications based on user identity.
DevOps and Management Tools:

Cloud Deployment Manager: Infrastructure deployment automation service.
Cloud Monitoring: Monitoring and logging for GCP services and applications.
Cloud Build: Continuous integration and delivery platform.
        </span>`;
    } else if (courses.col1[i].description === 'Azure_Training') {
        descriptionContent = `
        <span id="Azure_Training">
            Azure training provides individuals and organizations with the skills and knowledge needed to effectively use Microsoft Azure cloud services. Azure is Microsoft's cloud computing platform and infrastructure, offering a wide range of services to build, deploy, and manage applications through Microsoft's global network of data centers.

Key Features and Services of Azure
Compute Services:

Virtual Machines (VMs): Provides scalable computing capacity in the cloud.
Azure Kubernetes Service (AKS): Managed Kubernetes service for container orchestration.
Azure App Service: Platform as a Service (PaaS) offering for building, deploying, and scaling web apps and APIs.
Storage and Databases:

Azure Blob Storage: Scalable object storage for unstructured data.
Azure SQL Database: Fully managed relational database service.
Azure Cosmos DB: Globally distributed, multi-model database for NoSQL workloads.
Networking:

Virtual Network (VNet): Provides isolation and segmentation of Azure resources.
Azure Load Balancer: Distributes incoming traffic across multiple VM instances.
Big Data and AI:

Azure Synapse Analytics: Unified analytics platform for big data and data warehousing.
Azure Machine Learning: Managed service for building and deploying machine learning models.
Azure Cognitive Services: Pre-built AI models for vision, speech, language, and decision-making.
Security and Identity:

Azure Active Directory (AAD): Identity and access management service for controlling user access.
Azure Security Center: Centralized security management and advanced threat protection.
DevOps and Management Tools:

Azure DevOps: Services for teams to plan, collaborate, and ship software across the entire development lifecycle.
Azure Monitor: Monitoring and analytics service for collecting and analyzing telemetry data from Azure resources.
        </span>`;
    } else if (courses.col1[i].description === 'react_js') {
        descriptionContent = `
        <span id="react_js">
            React.js, often simply referred to as React, is a powerful and popular JavaScript library for building user interfaces (UIs). Developed and maintained by Facebook, React has gained significant adoption in the web development community due to its efficiency, flexibility, and robust ecosystem.

Key Concepts of React
Component-Based Architecture:

React is built around the concept of reusable components. A component is a self-contained module that renders a part of the UI. Components can be nested, composed together, and reused throughout the application.
Virtual DOM (Document Object Model):

React uses a virtual DOM to efficiently update the UI. Instead of directly manipulating the browser's DOM for every change, React updates a lightweight copy (virtual DOM) and then calculates the most efficient way to update the browser's DOM based on changes.
JSX (JavaScript XML):

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. It provides a way to describe what the UI should look like. JSX is transpiled to regular JavaScript function calls during the build process.
One-Way Data Binding:

React implements a unidirectional data flow. Data flows down from parent components to child components via props (properties). This helps maintain a predictable state of the application and makes debugging easier.
Component Lifecycle:

React components have lifecycle methods that allow developers to execute code at specific points in a component's life, such as when it is first rendered or when it updates.
Core Concepts in React Development
State Management:

React components can have state, which is an object that represents the component's data at a given point in time. State allows components to manage and respond to changes in data over time.
Handling Events:

React allows developers to handle user events (e.g., clicks, input changes) using event handlers. These handlers are written using JSX syntax and are attached to specific elements in the UI.
Component Reusability:

React promotes the creation of reusable UI components, which helps in building modular and maintainable applications. Components can be composed together to create complex UIs.
React Hooks:

Introduced in React 16.8, hooks are functions that allow developers to use state and other React features in functional components (components without a class). Hooks provide a more flexible way to reuse stateful logic across components.
        </span>`;
    } else if (courses.col1[i].description === 'Web_Designing') {
        descriptionContent = `
        <span id="Web_Designing">
          Web designing encompasses the process of creating the visual appearance and layout of websites. It involves various elements, principles, and tools to achieve an effective and aesthetically pleasing design that enhances user experience (UX) and achieves business goals. Here are some key aspects of web designing:

Key Elements of Web Design
Layout:

The arrangement of elements (text, images, videos, etc.) on a web page. A well-organized layout ensures clarity and ease of navigation for users.
Color:

Color schemes play a crucial role in conveying the brand's personality, establishing visual hierarchy, and creating an emotional impact on users. Effective use of colors improves readability and usability.
Typography:

The selection and styling of fonts (typefaces) used on a website. Typography affects readability, accessibility, and the overall aesthetic appeal of the design.
Images and Graphics:

Visual elements like photographs, illustrations, icons, and infographics enhance the visual appeal of a website. They should be used strategically to support content and improve user engagement.
Navigation:

Navigation design includes menus, links, and other elements that help users find information and move between different sections of the website easily. Intuitive navigation enhances user experience.
Whitespace:

Also known as negative space, whitespace refers to the empty spaces between elements on a web page. It helps improve readability, create visual balance, and focus attention on key content.
        </span>`;
    } else if (courses.col1[i].description === 'UI/UX_01') {
        descriptionContent = `
        <span id="UI/UX_01">
          UI (User Interface) and UX (User Experience) are closely related disciplines in the field of design, focusing on creating intuitive, efficient, and enjoyable interactions between users and digital products or services. While often used together, they represent distinct aspects of the design process.

User Interface (UI)
UI design focuses on the visual presentation and interactivity of a product's interface. It includes:

Visual Design:

The aesthetics of the interface, including color schemes, typography, iconography, and layout. Visual design aims to create a visually appealing and consistent look and feel.
Interaction Design:

The design of interactive elements and user interface components (buttons, forms, navigation menus, etc.) that facilitate user actions and navigation through the product.
Responsive Design:

Designing interfaces that adapt seamlessly to different screen sizes and devices, ensuring a consistent user experience across desktops, tablets, and mobile devices.
Accessibility:

Designing interfaces that are accessible to users with disabilities, ensuring inclusivity through features like keyboard navigation, screen readers compatibility, and color contrast.
User Experience (UX)
UX design focuses on the overall experience of users as they interact with a product. It encompasses:


</span>`;
    } else if (courses.col1[i].description === 'PHP_Full_Stack') {
        descriptionContent = `
        <span id="PHP_Full_Stack">
            A PHP Full Stack developer is proficient in both front-end and back-end development using PHP as the primary server-side language. They are responsible for building and maintaining web applications that interact with databases and provide dynamic content to users. Here's an overview of what a PHP Full Stack developer typically works with:

Front-End Development
HTML/CSS: Structuring web pages and styling them using HTML for content and CSS for presentation.

JavaScript: Enhancing user interactions and functionality on the client-side, often using frameworks/libraries like React.js, Angular, or Vue.js.

Bootstrap: Utilizing Bootstrap or similar frameworks for responsive design and faster development of user interfaces.

AJAX: Asynchronous JavaScript and XML for making asynchronous requests to the server and updating parts of a web page without reloading the entire page.

Back-End Development
PHP: Server-side scripting language used to handle dynamic content, databases, sessions, and user authentication.

MySQL/SQL: Relational database management systems (RDBMS) for storing and managing data in web applications.

PHP Frameworks: Using PHP frameworks like Laravel, Symfony, CodeIgniter, or Yii for rapid development, code organization, and security features.

RESTful APIs: Designing and consuming RESTful APIs to integrate with external services and applications.
        </span>`;
    } else if (courses.col1[i].description === 'PHP_Experts') {
        descriptionContent = `
        <span id="PHP_Experts">
            PHP experts are highly skilled professionals who possess deep knowledge and extensive experience in using PHP (Hypertext Preprocessor) for web development. They are proficient in both front-end and back-end aspects of PHP-based applications, capable of designing, implementing, optimizing, and maintaining complex web solutions. Here’s an overview of what defines a PHP expert:

Core Skills and Expertise
PHP Programming: Mastery of PHP language syntax, features, and best practices for writing clean, efficient, and secure code.

PHP Frameworks: Expertise in popular PHP frameworks such as Laravel, Symfony, CodeIgniter, Yii, and others. They understand framework-specific conventions, features, and how to leverage them for rapid development and scalability.

Database Integration: Proficiency in integrating PHP applications with various databases, especially MySQL and PostgreSQL. They can design and optimize database schemas, write complex SQL queries, and ensure efficient data retrieval and storage.

Front-End Development: Knowledge of front-end technologies including HTML, CSS, JavaScript, and JavaScript frameworks/libraries like React.js, Angular, or Vue.js. They can integrate PHP with front-end components and ensure seamless user interactions.

API Development: Experience in designing and developing RESTful APIs using PHP to facilitate communication between different systems or services.

Security Practices: Awareness of PHP security vulnerabilities (e.g., SQL injection, XSS attacks) and implementation of best practices for securing PHP applications, including data encryption, input validation, and user authentication mechanisms.

Performance Optimization: Skills in optimizing PHP code and application performance, including caching strategies, database indexing, and server-side optimizations to enhance scalability and responsiveness.

Version Control and Deployment: Proficiency in using version control systems like Git for collaborative development and deployment strategies to ensure smooth deployment of PHP applications on web servers (e.g., Apache, Nginx).
        </span>`;
    } else if (courses.col1[i].description === 'Angular_Js') {
        descriptionContent = `
        <span id="Angular_Js">
         AngularJS, commonly referred to as Angular 1.x, is a JavaScript-based open-source front-end web framework developed and maintained by Google. It is primarily used for building single-page applications (SPAs) and dynamic web applications. AngularJS was the first version of Angular, which has since evolved into Angular (Angular 2 and later versions).

Key Features and Concepts of AngularJS
MVC Architecture:

AngularJS follows the Model-View-Controller (MVC) architectural pattern, where:
Model: Represents the data and business logic of the application.
View: The user interface (UI) that users interact with.
Controller: Manages the interaction between the model and view, handling user inputs and updating the view accordingly.
Two-way Data Binding:

One of AngularJS's hallmark features is its ability to synchronize data between the model and the view automatically. Changes in the model update the view, and changes in the view update the model seamlessly, reducing boilerplate code and enhancing developer productivity.
Directives:

Directives in AngularJS extend HTML with custom attributes and elements, allowing developers to create reusable components and manipulate the DOM (Document Object Model) dynamically. Examples include ng-repeat, ng-model, and ng-click.
Dependency Injection:

AngularJS utilizes dependency injection to manage dependencies and facilitate testing and maintenance. Dependencies (services, controllers, etc.) are injected into components rather than being created within them, promoting modular and reusable code.
Routing:

AngularJS provides routing capabilities to enable navigation between different views or pages within a single-page application. Developers can define routes, associate them with templates and controllers, and manage application states.
Services:

Services in AngularJS are singleton objects that perform specific tasks such as data manipulation, communication with servers, and business logic. Services promote separation of concerns and code reusability across the application.
Testing:

AngularJS supports unit testing and end-to-end (E2E) testing using frameworks like Jasmine and Protractor, facilitating the development of robust and maintainable applications through automated testing.
        </span>`;
    } else if (courses.col1[i].description === 'Docker_Training') {
        descriptionContent = `
        <span id="Docker_Training">
         Docker training equips individuals with the skills and knowledge needed to effectively use Docker, a leading containerization platform used for developing, deploying, and running applications in containers. Containers are lightweight, portable, and self-sufficient environments that package an application and its dependencies, ensuring consistency across different computing environments.

Key Concepts and Features of Docker
Containerization:

Docker enables containerization by bundling an application and its dependencies into a container image. Containers run as isolated processes on the host operating system, providing consistency in development, testing, and deployment environments.
Docker Engine:

The Docker Engine is the core component of Docker that manages containers, images, networks, and volumes. It consists of the Docker daemon (server) and the Docker CLI (client) for interacting with Docker.
Docker Images and Containers:

Docker Images: Read-only templates used to create containers. Images are built using Dockerfiles, which define the steps to install dependencies and configure the application environment.
Docker Containers: Runnable instances of Docker images. Containers encapsulate the application and its runtime environment, ensuring consistency and reproducibility across different environments.
Docker Hub:

Docker Hub is a cloud-based registry service that hosts thousands of public and private Docker images. Developers can pull existing images from Docker Hub or push their custom images for sharing and collaboration.
Docker Compose:

Docker Compose is a tool for defining and managing multi-container Docker applications. It uses a YAML file to configure the services, networks, and volumes required for the application, enabling easy orchestration of complex applications.
Docker Swarm and Kubernetes:

Docker Swarm: Docker's native clustering and orchestration tool for managing a cluster of Docker nodes (hosts). It simplifies the deployment and scaling of containerized applications across multiple hosts.
Kubernetes: An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. Kubernetes has become a popular choice for managing Docker containers at scale.
        </span>`;
    } else if (courses.col1[i].description === 'Ansible_Training') {
        descriptionContent = `
        <span id="Ansible_Training">
            Ansible training focuses on equipping individuals with the skills to automate IT infrastructure, configuration management, application deployment, and orchestration tasks using Ansible. Ansible is an open-source automation tool that simplifies complex tasks with its agentless architecture and declarative language. It is widely used in DevOps practices to streamline workflows, ensure consistency, and increase efficiency across IT environments.

Key Concepts and Features of Ansible
Infrastructure as Code (IaC):

Ansible uses YAML-based playbooks to describe automation tasks and configurations in a human-readable format. Playbooks define the desired state of systems, and Ansible ensures systems converge to that state.
Agentless Architecture:

Unlike other configuration management tools, Ansible operates over SSH or PowerShell, leveraging existing infrastructure and requiring no agents or daemons to be installed on managed nodes. This simplifies deployment and management.
Inventory Management:

Ansible inventories list managed nodes (servers, workstations, network devices) and organize them into groups. Dynamic inventories can fetch node information from cloud providers, virtualization platforms, or external sources.
Modules and Tasks:

Ansible modules are reusable components that perform specific tasks (e.g., installing packages, copying files, restarting services) on managed nodes. Tasks are executed sequentially to achieve desired configurations.
Idempotence:

Ansible ensures idempotent operations, where applying the same configuration repeatedly results in the same desired state. This reliability reduces errors and ensures consistency in infrastructure management.
Roles:

Roles in Ansible organize playbooks and related files into reusable units. Roles encapsulate tasks, variables, handlers, and templates, promoting code reuse and modularization in automation workflows.
Ansible Galaxy:

Ansible Galaxy is a hub for sharing and discovering reusable Ansible roles contributed by the community. It streamlines the integration of existing automation solutions into new projects.
        </span>`;
    } else if (courses.col1[i].description === 'Devops_Training') {
        descriptionContent = `
        <span id="Devops_Training">
        DevOps training focuses on equipping individuals and teams with the skills and practices necessary to bridge the gap between software development (Dev) and IT operations (Ops). DevOps aims to foster collaboration, automation, and continuous delivery to deliver high-quality software faster and more reliably. Here’s an overview of key concepts and aspects typically covered in DevOps training:

Key Concepts and Practices in DevOps
Culture and Collaboration:

DevOps emphasizes a cultural shift towards collaboration and shared responsibility among development, operations, and other stakeholders involved in the software delivery process. Training often emphasizes teamwork, communication, and breaking down silos between teams.
Continuous Integration and Continuous Delivery (CI/CD):

Continuous Integration (CI): Automating the process of integrating code changes into a shared repository multiple times a day. CI ensures that changes are tested and verified early in the development cycle.
Continuous Delivery (CD): Automating the process of deploying applications to production environments reliably and frequently. CD ensures that applications are always in a deployable state and can be released to customers at any time.
Infrastructure as Code (IaC):

Managing and provisioning infrastructure (servers, networks, storage) through code and automation tools. IaC ensures consistency, repeatability, and version control in infrastructure management. Tools like Terraform, Ansible, and Chef are commonly taught in DevOps training.
Automation Tools and Practices:

Utilizing automation tools for building, testing, deployment, and monitoring of applications and infrastructure. Examples include Jenkins, GitLab CI/CD, Docker, Kubernetes, and Prometheus for monitoring.
Monitoring and Logging:

Implementing tools and practices for monitoring application and infrastructure performance, detecting issues, and collecting logs for troubleshooting and analysis. Training covers tools like ELK Stack (Elasticsearch, Logstash, Kibana) and Prometheus.
Security and Compliance:

Integrating security practices (DevSecOps) into the software development lifecycle to address vulnerabilities early and ensure compliance with regulations and organizational policies.
Containerization and Orchestration:

Adopting containerization technologies (e.g., Docker) for packaging applications and microservices, along with orchestration tools (e.g., Kubernetes) for managing containerized applications at scale.
        </span>`;
    } else if (courses.col1[i].description === 'Jenkins_01') {
        descriptionContent = `
        <span id="Jenkin_01">
           Jenkins is an open-source automation server widely used for continuous integration (CI) and continuous delivery (CD) of software applications. It facilitates the automation of building, testing, and deploying applications, enabling teams to deliver software updates more frequently and reliably. Here’s an overview of Jenkins and its key features:

Key Concepts and Features of Jenkins
Continuous Integration (CI):

Jenkins automates the process of integrating code changes from multiple developers into a shared repository. It triggers builds automatically whenever new code is committed, ensuring early detection of integration errors.
Continuous Delivery (CD):

Jenkins supports continuous delivery by automating the deployment of applications to various environments (e.g., development, staging, production) after successful builds and tests. This ensures that applications are always in a deployable state.
Build Pipelines:

Jenkins allows users to define pipelines as code using a domain-specific language (DSL) or through a visual interface (Jenkins Pipeline). Pipelines orchestrate the steps involved in building, testing, and deploying applications, providing visibility into the entire software delivery process.
Plugins and Integrations:

Jenkins features a vast ecosystem of plugins that extend its functionality for various use cases. Plugins are available for integrating Jenkins with version control systems (e.g., Git, SVN), build tools (e.g., Maven, Gradle), testing frameworks, deployment tools, and cloud platforms (e.g., AWS, Azure).
Distributed Builds:

Jenkins supports distributed builds across multiple nodes (agents), allowing users to distribute workloads and scale build capacity based on project requirements. This helps in optimizing build times and resource utilization.
Extensibility and Customization:

Jenkins is highly customizable and extensible through its plugin architecture and APIs. Users can create custom workflows, build triggers, notifications, and dashboards tailored to their specific CI/CD needs.
Security:

Jenkins provides features for authentication, authorization, and access control to secure CI/CD pipelines and sensitive data. Integration with LDAP, Active Directory, and role-based access control (RBAC) ensures secure user management.
        </span>`;
    } else if (courses.col1[i].description === 'Linux_01') {
        descriptionContent = `
        <span id="Linux_01">
          <h1> Linux Training at A1 Training Institute  </h1><br>
            <p>  Linux training provided by  A1 Training Institute can help you work more efficiently by giving you the skills and
              knowledge needed to troubleshoot and resolve issues quickly. With Linux, many tasks can be automated, and by
              learning how to use Linux tools and utilities, you can save time and increase your productivity.</p><br>

              <ul>
                  <li>&#10003; 40 hours of Instructor led Training</li>
                  <li>&#10003; Comprehensive coverage of basic and advanced exercises on Linux</li>
                  <li>&#10003; Hands-on assignments to support theoretical concepts</li>
                  <li>&#10003; Interactive and project-oriented lab sessions on Linux</li>
             </ul><br>
                <h4>We provide the NO.1 Linux training program in Chennai .We offer different modes of training by 
                providing classroom and online training .Our training centers are spread across Chennai at Adyar, OMR, 
                Navalur, Porur, Annanagar, Velachery and Perumbakkam.</h4>
                <div class="button-container">
                   <button class="button">View / Download Syllabus</button>
                   <button class="button">Contact  Course Advisor</button>
               </div>


   <div class="container mt-5" >
  <div class="row" >

    <div class="col-sm-3"style="border:1px solid black; padding:20px; text-align:center; text-decoration:bold;">

      <h3>40+ Hrs</h3>
      <p>Hands On Training</p>
    
    </div>

     <div class="col-sm-3"style="border:1px solid black; padding:20px; text-align:center; text-decoration:bold;">
      <h3> 2 Live</h3>
      <p>Project For Hands-On Learning</p>
    
    </div>

     <div class="col-sm-3"style="border:1px solid black; padding:20px; text-align:center; text-decoration:bold;">
      <h3> 50 Hrs</h3>        
      <p>Practical Assignments</p>
      
    </div>

     <div class="col-sm-3"style="border:1px solid black; padding:20px; text-align:center; text-decoration:bold;">
        <h3>24/7</h3>        
        <p>Lifetime Access To Support Team</p>
        
    </div>

  </div>
</div>


              
        </span>`;
    } 

   

// Example text with underscores
let textWithUnderscores = courses.col1[i].title;

// Remove underscores using replace() with regex
let textWithoutUnderscores = textWithUnderscores.replace(/_/g, ' ');

    document.write(`
    <div class="modal" id="${courses.col1[i].title}">
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

