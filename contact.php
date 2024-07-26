<?php session_start(); ?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>How to send mail in php using phpmailer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>

    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h4>Request a call Back</h4>
            </div>
            <div class="card-body">

                <form action="sendmail.php" method="POST">

                    <div class="mb-3">
                        <label for="fullname">Full Name</label>
                        <input type="text" name="full_name" id="fullname" required class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="email_address">Email Address</label>
                        <input type="email" name="email" id="email_address" required class="form-control" />
                    </div>
                    <!--<div class="mb-3">
                        <label for="subject">Subject</label>
                        <input type="text" name="subject" id="subject" required class="form-control" />
                    </div>-->
                    <select id="selectpickerGroups" name="subject" class="form-select selectpicker w-100" data-style="btn-default"
                  style="border: 1 px solid black;">
                  <option>Choose Subject</option>
                  <optgroup label="Web Designing">

                    <option>Angular Js</option>
                    <option>React Js</option>
                    <option>Web Designing</option>
                    <option>UI & UX</option>
                    <option>PHP Experts</option>
                    <option>PHP Full Stack</option>
                  </optgroup>
                  <optgroup label="Cloud Computing">
                    <option>AWS Training</option>
                    <option>AZURE Training</option>
                    <option>GCP</option>
                  </optgroup>
                  <optgroup label="Devops">
                    <option>Kubemetes Training</option>
                    <option>Docker Certification Training</option>
                    <option>Ansible Training</option>
                    <option>Devops Training</option>
                    <option>Jenkins</option>
                    <option>Terraform</option>
                    <option>Linux</option>
                    <option>Git</option>
                    <option>Shell Scripting</option>
                  </optgroup>
                  <optgroup label="Programming">
                    <option>Python Training</option>
                    <option>JavaScript Training</option>
                    <option>Unix Shell Scripting Training</option>
                    <option>Java Certification</option>
                    <option>C And C++ Training</option>
                    <option>.NET Training</option>
                  </optgroup>
                  <optgroup label="Database Developer">
                    <option>MySQL Training</option>
                    <option>MongoDB Training</option>
                    <option>SQL Server DBA Training</option>
                  </optgroup>
                  <optgroup label="Mobile App Development">
                    <option>Android</option>
                    <option>I-Phone</option>
                  </optgroup>
                  <optgroup label="Data Science & AI">
                    <option>Machine Learning Training</option>
                    <option>Data Science Training</option>
                    <option>Data Science With Python Training</option>
                    <option>Deep Learning Course</option>
                    <option>Artificial Intelligence Course</option>
                  </optgroup>
                  <optgroup label="MIS-Advanced Excel-BI Tools">
                    <option>Power Bi</option>
                    <option>Advanced Microsoft Excel</option>
                    <option>MIS</option>
                  </optgroup>
                  <optgroup label="Digital Marketing">
                    <option>Advanced Digital Marketing</option>
                    <option>Digital Marketing</option>
                  </optgroup>
                  <optgroup label="Industrial Training">
                    <option>6 Weeks Summer Training</option>
                    <option>6 Months Industrial Training</option>
                  </optgroup>
                  <optgroup label="Multimedia Animation-Graphics">
                    <option>Graphic Designing</option>
                    <option>Graphic Designing Pro</option>
                    <option>Motion Graphic Course </option>
                    <option>Multimedia & Animation </option>
                    <option>Graphic Motion Pro Course</option>
                    <option>Multimedia & Animation (Diploma)</option>
                    <option>Videograpy Course</option>
                    <option>Scriptwriting & Story Boarding</option>
                    <option>Film Making</option>
                  </optgroup>
                  <optgroup label="Software Testing">
                    <option>Manual Testing</option>
                    <option>Manual + Selenium</option>
                    <option>Full Stack QA</option>
                    <option>Java With Selenium </option>
                    <option>REST Assured API</option>
                    <option>Appium Testing</option>
                    <option>API Testing</option>
                  </optgroup>
                  <optgroup label="Project Management">
                    <option>Primavera P6 Testing</option>
                    <option>Agile Testing</option>
                    <option>Microsoft Excel Training</option>
                    <option>Scrum Master Training</option>

                  </optgroup>
                  <optgroup label="Full Stack Development">
                    <option>MEAN Stack</option>
                    <option>Mern Stack</option>
                  </optgroup>
                </select>
                    <div class="mb-3">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" required class="form-control" rows="3"></textarea>
                    </div>
                    
                    <div class="mb-3">
                        <button type="submit" name="submitContact" class="btn btn-primary">Send Mail</button>
                    </div>
                    

                </form>

            </div>
        </div>
    </div>

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
</html>