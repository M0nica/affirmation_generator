<?php
switch (@$_GET['do'])
 {

 case "send":

      $fname = $_POST['fname'];
      $fquote = $_POST['fquote'];
      $femail = $_POST['femail'];
      $f2email = $_POST['f2email'];
      $saddy = $_POST['saddy'];
      $scity = $_POST['scity'];
      $szip = $_POST['szip'];
      $fphone1 = $_POST['fphone1'];

      $mname = $_POST['mname'];
      $sapt = $_POST['sapt'];
      $sstate = $_POST['sstate'];
      $scountry = $_POST['scountry'];
      $fphone2 = $_POST['fphone2'];
      $fphone3 = $_POST['fphone3'];
       $fsubject = $_POST['fsubject'];
      $secretinfo = $_POST['info'];


    if (!preg_match("/\S+/",$fquote))
    {
      unset($_GET['do']);
      $message = "Quote required. Please try again.";
      break;
    }

    if ($secretinfo == "")
    {
       $myemail = "mmp2181@barnard.edu";
       $emess = "First Name: ".$fname."\n";

       $emess.= "Last Name: ".$fquote."\n";
       $emess.= "Email: ".$femail."\n";

       $emess.= "Phone number: ".$fphone1."\n";

       $emess.= "Subject: ".$fsubject."\n";
       $emess.= "Quote: ".$fquote."\n";

       $ehead = "From: ".$femail."\r\n";
       $subj = "An Email from ".$fname." ".$mname." ".$lname."!";
       $mailsend=mail("$myemail","$subj","$emess","$ehead");
       $message = "Email was sent.";
    }

       unset($_GET['do']);
       header("Location: thank_you.html");
     break;

 default: break;
 }
?>


<html>
<head> <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css"></head>
<body>
<form action="email_form.php?do=send" method="POST">
<p>* Required fields</p>
<?php
   if ($message) echo '<p style="color:red;">'.$message.'</p>';
?>


<form>
    <div class="row">
    <div class="six columns">
      <label for="firstNameInput">First Name</label>
      <input class="u-full-width" type="text" name="fname"  id="firstNameInput" placeholder="Your First Name" value="<?php echo @$fname ?>">
    </div>

    <div class="six columns">
      <label for="exampleEmailInput"> Your Email</label>
      <input class="u-full-width" type="email" name="femail" placeholder="Your Email" id="exampleEmailInput" value="<?php echo @$femail ?>">
    </div>

  </div>

  <label for="exampleMessage">* Quote</label>
  <textarea class="u-full-width" name="fquote" placeholder="You're awesome!" id="exampleMessage"><?php if($fquote) echo $fquote; ?></textarea>

 <label for="exampleSubjectInput">Source</label>
      <input class="u-full-width" type="text" name="fsubject" placeholder="Author" id="exampleSubjectInput" value="<?php echo @$fsubject ?>">
  <input class="button-primary submit-button" type="submit" value="Send Now">
</form>






</body>
</html>
