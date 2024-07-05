for (let i = 0; i < courses.col1.length; i++) {
    let descriptionContent = '';

    if (courses.col1[i].description === 'MEAN_Stack01') {
        descriptionContent = `
        <span id="MEAN_Stack01">
            <!-- what is mean stack -->
            The MEAN stack is a popular technology stack used for building full-stack JavaScript applications. 
            The acronym "MEAN" stands for MongoDB, Express.js, Angular, and Node.js. Here's a brief overview of each component:
            
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
    } else if (courses.col1[i].description === 'gcp04') {
        descriptionContent = `
        <span id="gcp04">
            <!-- what is AWS -->
            Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon. It offers a wide range of services including 
            computing power, storage options, and networking capabilities. Here's a brief overview of some key components:
            
            <strong>EC2 (Elastic Compute Cloud):</strong> A service that provides scalable computing capacity in the cloud. It allows users to run virtual servers 
            on-demand.<br>
            
            <strong>S3 (Simple Storage Service):</strong> A scalable object storage service that allows users to store and retrieve any amount of data from anywhere 
            on the web.<br>
            
            <strong>RDS (Relational Database Service):</strong> A managed relational database service that supports various database engines, including MySQL, PostgreSQL, 
            and Oracle.<br>
            
            <strong>Lambda:</strong> A compute service that lets users run code without provisioning or managing servers. It automatically scales and charges only for the 
            compute time consumed.<br>
        </span>`;
    }




    document.write(`
    <div class="modal" id="${courses.col1[i].title}">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">${courses.col1[i].title}</h4>
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
