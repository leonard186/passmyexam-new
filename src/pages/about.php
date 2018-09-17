
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PassMyExam</title>
        <link rel="icon" href="../img/ukflag.ico" type="image/icon">
        <!-- Reset -->
        <link rel="stylesheet" href="../css/reset.css" type="text/css">
        <!-- Custom stylesheet -->
        <link rel="stylesheet" href="../css/style.css" type="text/css">
    </head>

    <body>

    <!-- Navigation Section -->
    <div id="navigation">

        <div class="nav-container container">

            <div class="nav-wrap">
                <div class="logo-onshrink">
                    <a href="../../index.html"><img src="../img/logo.png" alt="logo"></a>
                </div>
                <div class="button">
                    <img src="../img/burgermenu.png">
                </div>
            </div>

            <div class="logo-wrap">
                <div class="logo">
                    <a href="../../index.html"><img src="../img/logo.png" alt="logo"></a>
                </div>
            </div>

            <nav>
                <ul class="nav-ul hide-ul">
                    <li><a href="./practice.html">Practice</a></li>
                    <li><a href="./resources.html">Resources</a></li>
                    <li class="active"><a href="#">About Us</a></li>
                </ul>
            </nav>
        </div>
    </div>

        <div class="about-us" id="about">

            <div class="container">

                <div class="about-us-wrapper">

                        <h2>About us</h2>

                    <div class="about-us-info">
                        <p>
                            Our aim is to help people prepare for the Life in the UK test. <a href="passmyexam.co.uk">passmyexam.co.uk</a>
                            has been created as a free source to learn and practice for the official exam.
                        </p>
                    </div>

                    <div class="about-us-info">
                        <p>
                            We try to keep all the information up to date so anyone using <a href="passmyexam.co.uk">passmyexam.co.uk</a>
                            can take the exam with confidence.
                        </p>
                    </div>

                    <div class="about-us-info">
                        <p>
                            We have undertaken the official test ourselves and successfully passed. Most of our mock exam
                            questions have been asked at the official exams however the questions and incorrect answers might be
                            formulated in a different way. We try to collect the questions asked at the official exam so
                            we provide
                            relevant information in our mock exams.
                        </p>
                    </div>

                    <div class="about-us-info">
                        <p>
                            If you have undertaken the official exam yourself and would like to share your experience with us
                            please send us a message by completing the <a href="#contact">form</a> below. Any new and
                            relevant information will be of help for future candidates.
                        </p>
                    </div>

                </div>

                <hr>

                <div class="about-us-form">

                    <form method="post" action="mailer.php"  id="form">

                        <div class="form-area">
                            <h2 id="contact">Contact us</h2>
                        </div>

                        <div class="form-area">
                            <?php
                                if($_GET['success'] == 1) {
                                    echo "<div class=\"form-alert form-alert-success\" role=\"alert\">Message sent</div>";
                                }

                                if($_GET['success'] == -1) {
                                    echo "<div class=\"form-alert form-alert-warning\" role=\"alert\">Please fill in all the fields. Thank you!</div>";
                                }
                            ?>
                        </div>

                        <div class="form-area">
                            <label for="name">Please enter your name</label>
                            <input type="text" name="name" id="name" placeholder="name" required>
                        </div>
                        <div class="form-area">
                            <label for="email">Please enter your email</label>
                            <input type="email" name="email" id="email" placeholder="email" required>
                            <div class="small">We will never share your email address with anyone</div>
                        </div>
                        <div class="form-area">
                            <label for="message">Please enter your message</label>
                            <textarea name="message" id="message" rows="12"></textarea>
                        </div>

                        <div class="form-area">
                            <button type="submit" class="submit-button">Send</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>

        <footer>
            <div class="footer">
                <a href="./terms.html">Terms and conditions</a>
                <p>Contact us at <a href="mailto:contact@passmyexam.co.uk"
                                    title="send an email to contact@passmyexam.co.uk">contact@passmyexam.co.uk</a></p>
                <a href="#contact">Contribute content</a>
            </div>
        </footer>

        <script src="../js/navigation.js"></script>
    </body>
</html>