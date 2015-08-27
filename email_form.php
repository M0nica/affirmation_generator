<?php
switch (@$_GET['do'])
 {

 case "send":

      $fname = $_POST['fname'];
      //$lname = $_POST['lname'];
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
     // $fsendmail = $_POST['fsendmail'];
      $secretinfo = $_POST['info'];

    /*if (!preg_match("/\S+/",$fname))
    {
      unset($_GET['do']);
      $message = "First Name required. Please try again.";
      break;
    }*/
    if (!preg_match("/\S+/",$fquote))
    {
      unset($_GET['do']);
      $message = "Quote required. Please try again.";
      break;
    }
    /*if (!preg_match("/^\S+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/",$femail))
    {
      unset($_GET['do']);
      $message = "Primary Email Address is incorrect. Please try again.";
      break;
    }
    if ($f2email){
      if (!preg_match("/^\S+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/",$f2email))
      {
        unset($_GET['do']);
        $message = "Secondary Email Address is incorrect. Please try again.";
        break;
      }
    }
    /* if (!preg_match("/\S+/",$fsendmail))
    {
      unset($_GET['do']);
      $message = "A message is required. Please try again!";
      break;
    }*/
    /*if (!preg_match("/\S+/",$saddy))
    {
      unset($_GET['do']);
      $message = "Street Address required. Please try again.";
      break;
    }
    if (!preg_match("/\S+/",$scity))
    {
      unset($_GET['do']);
      $message = "City required. Please try again.";
      break;
    }
    if (!preg_match("/^[0-9A-Za-z -]+$/",$szip))
    {
      unset($_GET['do']);
      $message = "Zip/Post Code required. Please try again.";
      break;
    }*/
    /*if (!preg_match("/^[0-9 #\-\*\.\(\)]+$/",$fphone1))
    {
      unset($_GET['do']);
      $message = "Phone Number 1 required. No letters, please.";
      break;
    }
 */
    if ($secretinfo == "")
    {
       $myemail = "mmp2181@barnard.edu";
       $emess = "First Name: ".$fname."\n";
       //$emess.= "Middle Name: ".$mname."\n";
       $emess.= "Last Name: ".$fquote."\n";
       $emess.= "Email: ".$femail."\n";
      // $emess.= "Email 2: ".$f2email."\n";
      // $emess.= "Street Address: ".$saddy."\nApt/Ste: ".$sapt."\n";
     //  $emess.= "City: ".$scity."\nState: ".$sstate."\nZip/Post Code:".$szip."\n";
      // $emess.= "Country: ".$scountry."\n";
       $emess.= "Phone number: ".$fphone1."\n";
      // $emess.= "Phone number 2: ".$fphone2."\n";
       //$emess.= "Phone number 3: ".$fphone3."\n";
       $emess.= "Subject: ".$fsubject."\n";
       $emess.= "Quote: ".$fquote."\n";
       //$emess.= "Message: ".$fsendmail;
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
  <!-- <div class="six columns">
       <label for="lastNameInput"> Quote</label>
       <input class="u-full-width" type="text" name="fquote" id="QuoteInput" placeholder="Your Last Name" value="<?php echo @$lname ?>">
    </div>
  </div>
  <div class="row">-->
    <div class="six columns">
      <label for="exampleEmailInput"> Your Email</label>
      <input class="u-full-width" type="email" name="femail" placeholder="Your Email" id="exampleEmailInput" value="<?php echo @$femail ?>">
    </div>
    <!--
    <div class="six columns">
     <label for="examplePhoneInput">Phone Number</label>
      <input class="u-full-width" type="text" name="fphone1" placeholder="000-000-0000" id="examplePhoneInput" value="<?php echo @$fphone1 ?>">
    </div>-->
  </div>
   
  <label for="exampleMessage">* Quote</label>
  <textarea class="u-full-width" name="fquote" placeholder="You're awesome!" id="exampleMessage"><?php if($fquote) echo $fquote; ?></textarea>
  
 <label for="exampleSubjectInput">Source</label>
      <input class="u-full-width" type="text" name="fsubject" placeholder="Author" id="exampleSubjectInput" value="<?php echo @$fsubject ?>">
  <input class="button-primary submit-button" type="submit" value="Send Now">
</form>






</body>
</html>
