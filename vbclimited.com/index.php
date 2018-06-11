<?php
                    if(isset($_POST['save']))
                    {
                        $to = $_POST['email'];
                        $cus = "vbclimited.com";
                        $subject = $_POST["subject"];

                        $txt="Name:";
                        $txt.=$_POST['name']. "\r\n";
                        $txt.="Email: ".$to."\r\n";
                        $txt.= "Comments:";
                        $txt.=$_POST['message'];
                        
                        $headers = "From:" .$cus. "\r\n" .
                        "CC: kvishwanath0551@gmail.com";

                        mail("jobs@vbclimited.com", $subject, $txt, $headers);
 					}
				?>

<!DOCTYPE html>
<html lang="en">

<head>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-85227615-2"></script>
	<script>
  		window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
  		gtag('js', new Date());

  		gtag('config', 'UA-85227615-2');
	</script>

    <!-- Header -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VBCLIMITED</title>
    <meta name="description" content="VBC Ltd is the Leading IT Staffing solution Provider in India and in UK with best Recruitment and Staffing team.VBC also has an in-bulit Software Development,Mobile Development &amp; Web Development Team.">
    <meta name="keywords" content="HR Recruitment, Recruitment Consultancies, Contract Staffing, Contract Staffing, Placement Staffing, Contract staffing companies, Best Recruitment and Staffing, IT Jobs, IT Jobs Openings, SAP Job Openings, Job openings, Leading IT Staffing solution, Software Development, Web Development">
    <meta name="theme-color" content="#ffffff">
    <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="img/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="img/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="img/manifest.json">
    <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#005c76">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha256-j+P6EZJVrbXgwSR5Mx+eCS6FvP9Wq27MBRC/ogVriY0=" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <meta name="google-site-verification" content="SPvH6k-fWYKi9R0QxHDYnzY1xZj7aDs2VoNWOA4R7Hc" />
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="50">
    <!--header-->
    <header class="main-header" id="header">
        <div class="bg-color">
            <!--nav-->
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="col-md-12">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" aria-expanded="false" aria-controls="navbar">
                                <span class="fa fa-bars"></span>
                            </button>
                            <a href="http://www.vbclimited.com" class="navbar-brand"><img src="img/logo.png" /></a>
                        </div>
                        <div class="collapse navbar-collapse navbar-right" id="mynavbar">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="#header">Home</a></li>
                                <li><a href="#feature">Aboutus</a></li>
                                <li><a href="#services">Services</a></li>
                                <!-- <li><a href="#portfolio">Portfolio</a></li> -->
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="career.php" target="blank">Career</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <!--/ nav-->
            <div class="container text-center">
                <div class="wrapper wow fadeInUp delay-05s">
                    <h4 class="title">VBC LIMITED</h4>
                    <h4 class="sub-title">We are a dedicated team of professionals with a combined experience.</h4>
                    <!--<button type="submit" class="btn btn-submit">Download Now</button-->
                </div>
            </div>
        </div>
    </header>
    <!--/ header-->
    <!---->
    <section id="cta-1">
        <div class="container">
            <div class="row">
                <div class="cta-info text-center">
                    <h3><span class="dec-tec">“ </span>It doesn’t make sense to hire smart people and then tell them what to do; we hire smart people so they can tell us what to do.<span class="dec-tec">”</span> - Steve Jobs</h3>
                </div>
            </div>
        </div>
    </section>
    <!---->
    <!---->
    <section id="feature" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeInLeft delay-05s">
                    <div class="section-title">
                        <h2 class="head-title">About us</h2>
                        <hr class="botm-line">
                        <p class="sec-para">VBC is the best in providing IT services and solutions. Over Years we are the King in the realms of Recruitment consulting. We are the reckoning service providers for staffing
                            for our valuable Clients. VBC is a vibrant and growing company with a nationwide footprint and employees throughout the country.</p>
                        <p class="sec-para">We are delivering business values through the combination of process excellence, quality framework and service delivering, innovation to clients across different vertical industries. We strongly believe that this can
                            be achieved by providing the best services to our clients in various segments, combining the technological skills, domain expertise, process focus and a commitment to long-term client relationships. We are equipped with all
                            advanced technologies that are useful for our team.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="img/abstract.png" class="img-responsive">
                </div>
            </div>
        </div>
    </section>
    <!---->
    <!---->
    <section id="services" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeInRight delay-02s">
                    <div class="icon">
                        <i class="fa fa-sitemap"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">Professional Manpower Solution</h3>
                        <p class="txt-para">VB Consulting Service (UK) Pvt. Ltd. is established in London with main motto of understanding the human values and give the value identity to the society which in turn supporting the clients to achieve their business objectives
                            in each & every sphere of business operations.</p>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInRight delay-02s">
                    <div class="icon">
                        <i class="glyphicon glyphicon-phone"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">Mobile Apps Development</h3>
                        <p class="txt-para">Your enterprise may be dealing with hundreds of applications. We can streamline your application management processes for maximum efficiency and control. VBC provides a comprehensive set of application management services including
                            maintenance, re-engineering, migration and testing. </p>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInRight delay-04s">
                    <div class="icon">
                        <i class="fa fa-paint-brush"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">Web Designing & Hosting</h3>
                        <p class="txt-para">Designing intuitive and effective user interfaces helps an organization to achieve success in very early stage. We help you in that part by designing application that well suits your business needs. Employees at VBC identify, select,
                            and implement appropriate navigation models used to build intuitive navigation structures. </p>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInRight delay-04s">
                    <div class="icon">
                        <i class="fa fa-desktop"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">Software Development</h3>
                        <ul>
                            <li>Inventory Software</li>
                            <li>Accounting Software - Cloud Accounting</li>
                            <li>Client-Driven</li>
                            <li>Performance Engineering Project Risk Estimation</li>
                            <li>Custom Application Development</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInRight delay-06s">
                    <div class="icon">
                        <i class="fa fa-lightbulb-o fa-2x"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">Quality Assurance</h3>
                        <ul>
                            <li>Functional Testing</li>
                            <li>Test Automation</li>
                            <li>Compatibility Testing</li>
                            <li>Performance Testing</li>
                            <li>Regression Testing</li>
                            <li>Security Testing</li>
                            <li>Selenium Testing</li>
                            <li>Testing Center of Excellence</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInRight delay-06s">
                    <div class="icon">
                        <i class="fa fa-group"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">Recruitment Services</h3>
                        <p class="txt-para">As the employer of choice for some of the world’s leading organizations, VBC is a key player in providing a comprehensive array of workforce solutions which includes consulting and recruitment on a permanent, temporary-to-hire
                            and temporary placement basis. </p>
                    </div>
                </div>
                <div class="col-md-12 wow fadeInRight delay-06s">
                    <div class="icon">
                        <i class="fa fa-wrench"></i>
                    </div>
                    <div class="icon-text">
                        <h3 class="txt-tl">TEST AUTOMATION FRAMEWORK FEATURES & BENEFITS</h3>
                        <p class="txt-para">TAF’s support for extensibility, Service Virtualization, portability, forward integration, and just-in-time reporting add value leading to more than 50% overall cost savings in automation design, execution cycle, and maintenance.</p>
                        <br>
                        <p class="txt-para">Key features and benefits of VBC's TAF include:</p>
                        <ul>
                            <li>Smart tagging of test cases helps selection for execution based on “release objectives”.</li>
                            <li>Continuous integration testing with leading CI server tools and multiple test data sources.</li>
                            <li>Compatibility with leading ERPs, packaged solutions, Web, mobile, and thick-client applications.</li>
                            <li>Large repository of keywords for a common, scalable knowledge base that promotes reuse of functional libraries.</li>
                            <li>Dashboards with in-depth visibility into project status, test execution results & analysis reports.</li>
                            <li>Single point maintenance methodology reduces complex operating costs, overall testing time, & brings about quicker ROI.</li>
                            <li>Enables clients to run comprehensive regression tests for major and minor releases improving improve the overall quality of applications.</li>
                            <li>Integration with open and commercial tools to make validation of complex business processes easy.</li>
                        </ul>
                    </div>
                </div>


            </div>

            <!-- <div class="col-md wow fadeInRight delay-06s"></div> -->


        </div>
    </section>
    <!---->
    <section class="section-padding parallax bg-image-2 section wow fadeIn delay-08s" id="cta-2">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="cta-txt">
                        <h3>Subscribe For Updates</h3>
                        <p>Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!</p>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <a href="#" class="btn btn-submit">Subscribe Now</a>
                </div>
            </div>
        </div>
    </section>
    <!---->

    <!-- <section class="section-padding wow fadeInUp delay-02s" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12">
                    <div class="section-title">
                        <h2 class="head-title">Portfolio</h2>
                        <hr class="botm-line">
                        <p class="sec-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12">
                    <div class="col-md-4 col-sm-6 padding-right-zero">
                        <div class="portfolio-box design">
                            <img src="img/port01.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 padding-right-zero">
                        <div class="portfolio-box design">
                            <img src="img/port02.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 padding-right-zero">
                        <div class="portfolio-box design">
                            <img src="img/port03.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 padding-right-zero">
                        <div class="portfolio-box design">
                            <img src="img/port04.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 padding-right-zero">
                        <div class="portfolio-box design">
                            <img src="img/port05.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 padding-right-zero">
                        <div class="portfolio-box design">
                            <img src="img/port06.jpg" alt="" class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!---->
    <!---->
    <section class="section-padding wow fadeInUp delay-05s" id="contact">
        <div class="container">
            <div class="row white">
                <div class="col-md-8 col-sm-12">
                    <div class="section-title">
                        <h2 class="head-title black">Contact Us</h2>
                        <hr class="botm-line">
                        <p class="sec-para black">If you wish to be considered for employment in Lodon, Please do sent a message, here instead please complete this job application and our Human Resourses Department will contact you after their review of your submitted information.</p>
                    </div>
                </div>
                <div class="col-md-12 col-sm-12">
                    <div class="col-md-4 col-sm-6" style="padding-left:0px;">
                        <h3 class="cont-title">Email Us</h3>
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <div class="contact-info">
                            <form  method="post" role="form" class="contactForm">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div class="validation"></div>
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div class="validation"></div>
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div class="validation"></div>
                                </div>
								<input type="hidden" name="save" value="save" />
                                <button type="submit" class="btn btn-send" value="Send">Send</button>
                            </form>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-6">
                        <h3 class="cont-title">Visit Us</h3>
                        <div class="location-info">
                            <div class="row">
                                <div class="col-xs-1">
                                    <p class="white"><span aria-hidden="true" class="fa fa-map-marker"></span></p>
                                </div>
                                <div class="col-xs-11">
                                    <p class="white">41 Ashpole Avenue, Wootton, Bedford, MK43 9EG.</p>
<!--                                     54 Claredon Road, Watford, Hertfordshire, WD17 1DU. -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-1">
                                    <p class="white"><span aria-hidden="true" class="fa fa-phone"></span></p>
                                </div>
                                <div class="col-xs-11">
                                    <p class="white">Phone: +44 7411 983553</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-1">
                                    <p class="white"><span aria-hidden="true" class="fa fa-envelope"></span></p>
                                </div>
                                <div class="col-xs-11">
                                    <p class="white">Email: <a href="mailto:jobs@vbclimited.com" class="link-dec">jobs@vbclimited.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-icon-container hidden-md hidden-sm hidden-xs">
                            <span aria-hidden="true" class="fa fa-envelope-o"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!---->
    <!---->
    <footer class="" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-7 footer-copyright">
                    <span style="font-size: 20px">VBCLimited</span> <span style="margin-left: 12px;color: silver;font-size: 12px">© Copyright 2017-18. All Rights Reserved</span>
                </div>
                <div class="col-sm-5 footer-social">
                    <div class="pull-right hidden-xs hidden-sm">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!---->
    <!--contact ends-->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https:/cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" integrity="sha256-H3cjtrm/ztDeuhCN9I4yh4iN2Ybx/y1RM7rMmAesA0k=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" integrity="sha256-z6FznuNG1jo9PP3/jBjL6P3tvLMtSwiVAowZPOgo56U=" crossorigin="anonymous"></script>
    <script src="js/custom.js"></script>
</body>

</html>
