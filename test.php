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
