 <!DOCTYPE html>

<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <title>Angel Hernandez - Website Design &amp; Development</title>
  <meta name="description" content="Website design and development, branding and corporate identity, print design, graphic design, interface design.">
  
  <link rel="stylesheet" href="stylesheets/foundation.css">
  <link rel="stylesheet" href="stylesheets/app.css">
  <link href='https://fonts.googleapis.com/css?family=Magra:400,700' rel='stylesheet' type='text/css'>

  <!-- Favicons
  ================================================== -->
  <link rel="shortcut icon" href="https://angelhernandez.net/images/favicon.ico">
  <link rel="apple-touch-icon" href="https://angelhernandez.net/images/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://angelhernandez.net/images/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://angelhernandez.net/images/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://angelhernandez.net/images/apple-touch-icon-144x144.png" />

  <script src="javascripts/modernizr.foundation.js"></script>
</head>
<body>

<div id="navigation-container">
  <header class="row">
    <div class="twelve columns">
      <hgroup>
        <p class="top-bar-name">Angel <span>Hernandez</span> </p>
        <p class="top-bar-subhead">Front End Engineer</p>
      </hgroup>
      <nav>
        <a id="nav-home" href="#home">Home</a>
        <a id="nav-about" href="#about-me">About Me</a>
        <a id="nav-contact" href="#contact-me">Contact Me</a>
      </nav>
    </div>
  </header>
</div>

<div id="body-text-container">
  <div class="row" id="home-content">
    <div class="four columns">
      <div id="welcome-comp">
        <h1>Design, development & marketing.</h1>
      </div>
      <p>I have a passion for creating applications that function with ease and serve to deliver a message in ways that are natural, intuitive and effortless.</p>
      <p>My focus is Front End Engineering with an emphasis in user experience, pixel-perfect markup and strong javascript development.</p>
      <p>I use design principles such as offline / mobile first, responsive, adaptive, progress enhancements, component based design, etc. to deliver up to date web and interface applications.</p>
      <a id="more-about" href="#contact-me">Contact Me</a>
    </div>
    <div class="eight columns">
      <div id="skills-list">
        <p class="skills-title">Design:</p>
        <ul>
          <li>Atomic design with sketch and adobe software.</li>
          <li>UI / UX, web and interface design.</li>
          <li>Planning, wireframing, style guide and corporate identity.</li>
        </ul>
        <p class="skills-title">Development:</p>
        <ul>
          <li>SPA applications using Vue.js, JavaScript (ES6, jQuery), Node.js.</li>
          <li>Cross-functional, mobile first, responsive markup with sass / less, grid, flexbox, bootstrap.</li>
          <li>REST API architecture, endpoint standardization and testing.</li>
          <li>Performance testing and analytics.</li>
          <li>DataTables, Laravel blade templating.</li>
        </ul>
        <p class="skills-title">Marketing:</p>
        <ul>
          <li>Paid media advertising</li>
          <li>Landing page marketing sales funnels and split testing optimization.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row" id="about-content">
    <div class="four columns" id="about-text">
      <h2>About Me</h2>
      <h3>Why am I the right web developer?</h3>
      <p>I pay close attention to the needs of the client and effectively interpret ideas into websites that not only look unique, modern, and appealing, but that are also carefully constructed and laid out so it is easy for visitors to interact with and follow.</p>
      <p>I use the most advanced web development strategies to maximize conversions and reach the intended audience with the highest possible search engine placement, fast load times, mobile friendliness and true compatibility amongst all major web browsers.</p>
      <p>I am the direct contact for any website needs, no dealing with the many representatives that make up a full web company.  Be assured that I am always easily accessible via phone or email.</p>
    </div>
    <div class="eight columns" id="experience-freelance">
      <h4>Professional Experience</h4>
      <hr>
      <div class="experience-box">
        <h5>Web Design &amp; Development</h5>
        <!-- <span class="experience-subhead">Professional Experience</span> -->
        <div class="experience-date">
          <hr>
          <span>2006 - Present</span>
        </div>
        <h6>OVERVIEW:</h6>
        <p>Since 2006, I have designed and developed a variety of websites that I currently maintain and keep updated.</p>
        <h6>DETAILS:</h6>
        <ul>
          <li>Website design using Photoshop and Illustrator.</li>
          <li>Current HTML 5 / CSS3 / jQuery programming.</li>
          <li>Mobile friendly websites that adapt to devices such as smart phones / tables / readers, etc.</li>
          <li>Established an extensive network of developers for collaboration with projects of any scale and complexity.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row" id="contact-content">
    <div class="seven columns">
      <div id="contact-text-wrapper">
        <h2>Contact Me</h2>
        <h3>I am ready to work for you!</h3>
        <p>If you are looking for a  serious professional web designer, I am the individual with the talent, experience and enthusiasm for your project.</p>
        <p>Whether you are just beginning to explore with the idea of establishing your presence on the web, or seeking to redesign your existing website, please contact me with any questions and I will be eagerly happy to help.</p>
        <h4>Recruiters</h4>
        <p>Resume and source files provided upon request. Thank you.</p>
      </div>
    </div>
    <div class="five columns">
      <form action="php/scripts.php" method="post">
        <fieldset>
          <legend>
            <h5>Thank you for stopping by!</h5>
            <p>Please fill out the following form to contact me.</p>
          </legend>
          <p>
            <label>Name:</label>
            <input type="text" name="name" id="fieldName" maxlength="45">
          </p>
          <p>
            <label>Contact Info:</label>
            <input type="text" name="contact" placeholder="Phone / Email" id="fieldContact" maxlength="100">
          </p>
          <p>
            <label>Message:</label>
            <textarea name="message" id="fieldMessage" maxlength="600"></textarea>
          </p>
          <p>
            <input class="radius button" type="submit" value="Submit Form">
          </p>
        </fieldset>
      </form>
    </div>
  </div>
</div>

<div id="portfolio-container">
  <div class="row">
    <div class="twelve columns">
      <ul id="portfolio-nav">
        <li><a id="portfolio-web" href="#">Web Design</a></li>
        <li><a id="portfolio-emails" href="#emails">Email Designs</a></li>
        <li><a id="portfolio-misc" href="#misc">Misc. Designs</a></li>
      </ul>
    </div>
  </div>
  <div class="row" id="portfolio-content">
    <div class="twelve columns">

      <!-- Web Development -->
      <div class="portfolio-header" id="web">
        <h4>Web Design and Development</h4>
      </div>

      <!-- Email Development -->
      <div class="portfolio-header" id="emails">
        <h4>Email Design and Development</h4>
        <a class="top" href="#">Top</a>
      </div>

      <!-- Misc. Designs -->
      <div class="portfolio-header" id="misc">
        <h4>Miscellaneous Designs</h4>
        <a class="top" href="#">Top</a>
      </div>

    </div>
  </div>
  <div class="row">
    <div class="twelve columns">
      <a id="footer-top-btn" class="top" href="#">Top</a>
      <hr id="footer-line">
      <footer><p>&copy; <?php echo date("Y"); ?> Angel <span>Hernandez</span></p></footer>
    </div>
  </div>
</div>

<div id="myModal" class="reveal-modal large">
  <div id="modalHeader">
    <div id="modalInfo">
      <h5></h5>
      <h6></h6>
      <hr>
    </div>
    <div id="modalThumbs"></div>    
  </div>
  <div id="modalScreenshots"></div>
  <a class="close-reveal-modal"></a>
</div>

<!-- Included JS Files (Compressed) -->
<script src="javascripts/jquery-1.9.1.min.js"></script>
<script src="javascripts/foundation.min.js"></script>
 
  
<!-- Initialize JS Plugins -->
<script src="javascripts/app.js"></script>
<script src="javascripts/underscore-min.js"></script>
<script src="javascripts/backbone-min.js"></script>
<script src="javascripts/portfolio.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51794663-1', 'angelhernandez.net');
  ga('send', 'pageview');

</script>
  
</body>
</html>