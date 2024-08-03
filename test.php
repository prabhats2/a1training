<?php
session_start();

// Assuming form submission handling here
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle form data
    $name = $_POST['full_name'];
    $email = $_POST['email'];
    $mobileno = $_POST['mobileno'];
    $subject = $_POST['subject'];
    $mode = $_POST['mode'];
    $dob = $_POST['Dob'];
    $address = $_POST['Address'];
    $about_us = $_POST['About_us'];
    $message = $_POST['message'];

    // Process the form data (e.g., send email, save to database, etc.)

    $_SESSION['status'] = 'Your request has been submitted successfully!';
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  
    <title>Request A Call Back</title>
</head>
<body>

<!-- Trigger Modal Button -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#callbackModal">
    Request A Call Back
</button>

<!-- Modal -->
<div class="modal fade" id="callbackModal" tabindex="-1" aria-labelledby="callbackModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="callbackModalLabel">Request A Call Back</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Contact Form -->
                <form action="" method="POST" class="form-container" style="height: 475px; overflow-y: scroll;">
                    <!-- Full Name -->
                    <div class="mb-3">
                        <label for="fullname">Name:</label>
                        <input type="text" name="full_name" id="fullname" required class="form-control" placeholder="Enter Name">
                    </div>
                    <!-- E-mail Address -->
                    <div class="mb-3">
                        <label for="email_address">Email Address:</label>
                        <input type="email" name="email" id="email_address" required class="form-control" placeholder="E-Mail Address">
                    </div>
                    <!-- Mobile No -->
                    <div class="mb-3">
                        <label for="mobileno">Mobile No.</label>
                        <input type="number" name="mobileno" id="mobileno" pattern="\d{10}" maxlength="10" required class="form-control" placeholder="Mobile No">
                    </div>
                    <!-- Select Subject -->
                    <div class="mb-3">
                        <label for="selectpickerGroups">Select Subject:</label>
                        <select id="selectpickerGroups" name="subject" required class="form-select selectpicker w-100" data-style="btn-default">
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
                                <option>Motion Graphic Course</option>
                                <option>Multimedia & Animation</option>
                                <option>Graphic Motion Pro Course</option>
                                <option>Multimedia & Animation (Diploma)</option>
                                <option>Videography Course</option>
                                <option>Scriptwriting & Story Boarding</option>
                                <option>Film Making</option>
                            </optgroup>
                            <optgroup label="Software Testing">
                                <option>Manual Testing</option>
                                <option>Manual + Selenium</option>
                                <option>Full Stack QA</option>
                                <option>Java With Selenium</option>
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
                                <option>MERN Stack</option>
                            </optgroup>
                        </select>
                    </div>
                    <!-- Course Mode -->
                    <div class="mb-3">
                        <label>Select Mode of Course (select one):</label><br>
                        <input type="radio" id="mode" name="mode" value="Online">
                        <label for="mode">Online</label><br>
                        <input type="radio" id="mode" name="mode" value="Offline">
                        <label for="mode">Offline</label><br>
                    </div>
                    <!-- DOB -->
                    <div class="mb-3">
                        <label for="dob">DOB:</label>
                        <input type="date" name="Dob" id="dob" class="form-control" placeholder="DOB:">
                    </div>
                    <!-- Address -->
                    <div class="mb-3">
                        <label for="address">Address:</label>
                        <textarea name="Address" id="address" class="form-control" rows="3" placeholder="Address"></textarea>
                    </div>
                    <!-- How did you learn about us? -->
                    <div class="mb-3">
                        <label for="Learn_About_Us">How did you learn about us?:</label>
                        <input type="text" name="About_us" id="Learn_About_Us" class="form-control" placeholder="Social Media">
                    </div>
                    <!-- Other Courses Not Included in list -->
                    <div class="mb-3">
                        <label for="message">Other Courses Not Included in list:</label>
                        <textarea name="message" id="not_listed" class="form-control" rows="3" placeholder="Other Courses"></textarea>
                    </div>
                    <!-- Submit -->
                    <button type="submit" name="submitContact" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

<script>
document.getElementById('mobileno').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '');
    if (x.length > 10) {
        x = x.substring(0, 10);
    }
    e.target.value = x;
});

var messageText = "<?php echo $_SESSION['status'] ?? ''; ?>";
if (messageText !== '') {
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
