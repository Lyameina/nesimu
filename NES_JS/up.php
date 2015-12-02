<?php
    //print_r($_FILES);
    $arr = explode('.',$_FILES['fileName']['name']);
    $uploads_dir="./roms";
    echo $arr[sizeof($arr)-1];
    if($arr[sizeof($arr)-1] == "nes"){
        print_r($_FILES);
        $tmp_name = $_FILES["fileName"]["tmp_name"];
        $name = $_FILES["fileName"]["name"];
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
        echo "<script>alert('the file has been upload succefully');</script>";
    }
    else{
        echo "Please select a .nes file";
    }
    echo "<script>location.href=\"http://meulon.olympe.in/NES_JS/\";</script>";
?>