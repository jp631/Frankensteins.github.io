<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Landing for XML Coporation">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/d032d92b90.js" crossorigin="anonymous"></script>
    <meta name="keywords" content="XML, xml licence, exam">
    <link rel="stylesheet" href="FrankensteinsStyle.css">
    <title> Frankenstein’s Monster Style/contact </title>
  </head>
  <body>
    <div class="container">
      <h1 id="title"> Frankenstein’s Monster Style</h1>

      <nav class="navigation">
      <div class="menu_bar">
      <div id="first_bar">
      </div>
      <div id="second_bar">
      </div >
      <div id="third_bar">
      </div>
      <p id="menu_text">Menu</p>
      </div>

      <ul  id="menu_ul">
        <li> <a href="index.html"> Home </a></li>
        <li> <a href="contact.php"> Contact </a></li>
        <li> <a href="about.html"> About </a> </li>
      </ul>
      </nav>

      <div class="main_contact">
        <?php
        $num = 1.4345343;
          echo "<h2> Contact</h2>";
          echo "<form action='form.php' method='post'>";
          echo  "<label for='first_name'> First Name</label>";
          echo  "<input required type='text' name='first_name'>";
            echo "<label for='last_name'> Last Name</label>";
            echo "<input required type='text' name='last_name'>";
            echo "<label for='email'> Email</label>";
            echo "<input required type='email' name='email'>";
            echo "<label for='comment'> Comment</label>";
            echo "<textarea required type='text' name='comment'>";
            echo "</textarea>";
          echo "<button type='clear'> Clear</button>";
            echo "<button type='submit'> Submit </button>";
          echo "</form>";
          ?>
      </div>

      <footer>
        <nav class="footer_menu">
          <ul>
            <li> <a href="index.html"> Home </a></li>
            <li> <a href="contact.html"> Contact </a></li>
            <li> <a href="about.html"> About </a> </li>
            <li> <a href="index.html"> Terms and condition </a></li>
            <li> <a href="contact.php"> privacy policy </a></li>
            <li> <a href="about.html"> FQA </a> </li>
          </ul>
           <div class="copyright">
             <p><i class="fas fa-user-edit"></i> Developer: Jerry Prophete</p>
            <p>All right are  reserved &copy;</p>
            <p><a href="mailto:someone@example.com">frenk@FrankensteinsMonsterStyle.com</a>.</p>
          </div>
        </nav>
      </footer>
    </div>
    <script type="text/javascript" src="FrankensteinsMonsterStyleContact.js"> </script>
  </body>
<html>
