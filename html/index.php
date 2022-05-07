<html>

<head>
    <title>PHP INITIALIZATION</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <style type="text/css">

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;

        }

        body {

            background: #bbdaca;
        }



    </style>
  
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script>
        $( function() {
    $( "#accordion" ).accordion();
  } );
    
</script>
</head>

<body>
    <?php 

for ($i = 0; $i < 10 ; $i++) {


print("Line" . $i . "<br />");

}



?>

<div id="accordion">
  <h3>Section 1</h3>
  <div>
    <p>
    Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
    ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
    amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
    odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </p>
  </div>
  <h3>Section 2</h3>
  <div>
    <p>
    Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
    purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
    velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
    suscipit faucibus urna.
    </p>
  </div>
</div>


<script type="text/javascript">

var bod = document.querySelector('body')

bod.addEventListener('click', () => {

// alert('Welcome to the website!')


})

</script>
</body>


</html>