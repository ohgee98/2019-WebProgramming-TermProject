function Playground() { //지형 및 장애물 생성자, 기본 값들 설정

  this.imgBox = resourcePreLoader.GetImage("img/ground3.png");
  this.imgFoot = resourcePreLoader.GetImage("img/foot3.png");

  this._level=getLevel();

  if(getLevel()==1 || getLevel()==2){
    this.intBoxY = 600 - 136 - 20;
    this.intFootY = 600 - 186 - 30;
  }

  this._backup=0;
  this.coll = 0;

  this.Init();

}

function setLevel(lev) { //각 Stage 단계 setter
	this.level = lev;
}

function getLevel() {  //각 Stage 단계 getter
	this.lev=this.level;
	return this.lev;
}

function setFrontScore(fs){
  this.fronts = fs;
}

function getFrontScore(){
  this.fs = this.fronts;
  return this.fs;
}

function setFrontColl(fc){
  this.frontc = fc;
}

function getFrontColl(){
  this.fc = this.frontc;
  return this.fc;
}

function getBackup(){ //스테이지 백업 getter
	return this.backup;
}
function setBackup(back){ //스테이지 백업 setter
	this.backup=back;
}

Playground.prototype.AddObject = function(type) {

  var obj;

  if(type=="box"){

    obj = new GraphicObject(this.imgBox);
    obj.SetPosition(0, this.intBoxY);
    obj.type = "box";

    if(this.lastObj){
      this.GotoLast(obj);
    }
  }
  else if( type == "foot"){

    obj = new SpriteAnimation(this.imgFoot,100,250,2,2);
    obj.SetPosition(0, this.intFootY);
    obj.type = "foot";

    if(this.lastObj){
      this.GotoLast(obj);
    }

  }

  this.arrObj.push(obj);
  this.lastObj = obj;

};

Playground.prototype.Render = function() { //각각 스테이지와 조건에 맞게 canvas에 Rendering 해줌

	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");


	if(getLevel()==1){
    for(var i=0;i<this.arrObj.length;i++){
      this.arrObj[i].Render(Context);
    }
	}

  if(getLevel()==2){
    for(var i=0;i<this.arrObj.length;i++){
      this.arrObj[i].Render(Context);
    }
	}

  if(getLevel()==3){

  }

	this._level = getLevel();

};

Playground.prototype.Update = function() {

  var speed;

  if(getLevel()==1){
    speed = 8.5;
  }

  if(getLevel()==2){
    speed = 11;
  }

  if(getLevel()==1||getLevel()==2){

    for( var i=0; i<this.arrObj.length;i++){

      var obj = this.arrObj[i];
      obj.Translate(-speed,0);

      if(obj.x < -237){

        this.GotoLast(obj);

        this.lastObj = obj;
        obj.Translate(-speed,0);
      }
    }

    this.arrObj.sort(function(obj1,obj2){return obj1.x - obj2.x});
  }

};

Playground.prototype.GotoLast = function(obj) {

  if(obj.type == "box"){

    if(this.lastObj.type == "foot"){
      obj.SetPosition( this.lastObj.x + 97, this.intBoxY);
    }
    else{
      obj.SetPosition(this.lastObj.x + 237 - 26, this.intBoxY);
    }
  }
  else {
    obj.SetPosition(this.lastObj.x + 237, this.intFootY);
  }

};


//충돌처리
Playground.prototype.CheckCol = function(player) {

  if(getLevel()==1 || getLevel()==2){

    for(var i=0; i < this.arrObj.length; i++){
      var obj = this.arrObj[i];

      if ( obj.type == "foot"){

        var colBox = {left: obj.x + 10,
                      top: obj.y + 200,
                      right: obj.x + 70,
                      bottom: obj.y + 170};


        if( colBox.left < player.right && colBox.bottom > player.top && colBox.right > player.left && colBox.top < player.bottom )
        {
          this.coll++;
        }

      }

    }

    if(this.coll>6){
      playState.Notification("COL");
      this.coll = 0;
      this.Init();
    }

  }

};

Playground.prototype.Init = function(){

  this.lastObj = null;
  this.arrObj = new Array();

  if(getLevel()==1){
    this.AddObject("box");
    this.AddObject("box");
    this.AddObject("foot");
    this.AddObject("box");
    this.AddObject("box");
    this.AddObject("foot");
  }

  if(getLevel()==2){
    this.AddObject("box");
    this.AddObject("box");
    this.AddObject("box");
    this.AddObject("foot");
    this.AddObject("box");
    this.AddObject("foot");
    this.AddObject("box");
    this.AddObject("foot");
    this.AddObject("box");
    this.AddObject("box");
    this.AddObject("foot");
  }

}
