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