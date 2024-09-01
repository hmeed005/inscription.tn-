<?php
$con=mysqli_connect("127.0.0.1","root","") or die(mysqli_connect_error());
mysqli_select_db($con,"inscrit") or die(mysqli_connect_error());
?>