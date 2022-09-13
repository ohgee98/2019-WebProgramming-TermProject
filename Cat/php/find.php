<?php

  $fid = $_POST["id"];
  $fpass = $_POST["password"];

  $readText = fopen("data/person.txt","r");

  while(!feof($readText)){
    $keyword = fgets($readText);

    if($keyword== ""){
      break;
    }

    $idc = explode("|",$keyword);

    $idArray[$idc[0]]=$idc[1];

  }

  $flag1 = 0;

  foreach ($idArray as $key => $value) {

    if ( ( (string)$key === (string)$fid ) && ( (string)$value === (string)trim($fpass) )){
      $flag1 = 1;
      break;
    }
    else if ( ( (string)$key === (string)$fid ) && ( (string)$value !== (string)trim($fpass) ) ){
      $flag1 = 2;
      break;
    }

  }

  if( $flag1 == 1){
    echo "로그인 되었습니다";
  }
  else if ($flag1 == 2) {
    echo "패스워드가 틀립니다";
  }
  else {
    echo "존재하지 않는 아이디입니다";
  }

?>
