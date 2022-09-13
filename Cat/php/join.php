<?php
  class FileInfo {
    public $id, $pass;

    function saveInfo() {

      $myfile = fopen("data/person.txt","a") or die("Unable to open file!");
      $join = $this->id."|".$this->pass."|";
      fwrite($myfile,$join."\n");
      fclose($myfile);

    }

  }

  $tempid = $_POST["id"];
  $tempps = $_POST["password"];

  $readText = fopen("data/person.txt","r");

  while(!feof($readText)){
    $keyword = fgets($readText);

    if($keyword== ""){
      break;
    }

    $idc = explode("|",$keyword);

    $infoArray[$keyword]=$idc[0];

  }


  if( ($tempid=="") || ($tempps=="") ){
    echo "아이디 또는 패스워드를 입력해주세요.";
  }
  else{

    $check = 0;

    foreach ($infoArray as $key => $value) {
      if( $value == $tempid ){
        $check = 1;
        break;
      }
    }

    if($check==1){
      echo "이미 존재하는 아이디가 있습니다.";
    }
    else {
      $new = new FileInfo;
      $new->id = $tempid;
      $new->pass = $tempps;

      $new->saveinfo();

      echo "성공적으로 저장되었습니다.";
    }

  }



 ?>
