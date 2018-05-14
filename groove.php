 <!DOCTYPE html>

<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <title>Angel Hernandez - PlayList</title>
  <meta name="description" content="Angel Hernandez music playlist">
  
  <link href='http://fonts.googleapis.com/css?family=Magra:400,700' rel='stylesheet' type='text/css'>

  <!-- Favicons
  ================================================== -->
  <link rel="shortcut icon" href="http://angelsportfolio.com/images/favicon.ico">
  <link rel="apple-touch-icon" href="http://angelsportfolio.com/images/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="72x72" href="http://angelsportfolio.com/images/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="114x114" href="http://angelsportfolio.com/images/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="144x144" href="http://angelsportfolio.com/images/apple-touch-icon-144x144.png" />

  <script src="javascripts/modernizr.foundation.js"></script>
</head>
<body>


<!-- Included JS Files (Compressed) -->
<script src="javascripts/jquery-1.9.1.min.js"></script>

<script>
  
$.getJSON( "grooveshark.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
  console.log(items);

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

</script>

  
</body>
</html>