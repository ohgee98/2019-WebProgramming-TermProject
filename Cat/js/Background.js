function Background() { //Background 생성자, 기본 값들 설정
  this.imgStage1 = resourcePreLoader.GetImage("img/stage1.png");
  this.imgStage2 = resourcePreLoader.GetImage("img/stage2.png");
  this.imgStage3 = resourcePreLoader.GetImage("img/stage3.png");

  this._backup=0;

  this._level=getLevel();
}


function setLevel(lev) { //각 Stage 단계 setter
	this.level = lev;
}

function getLevel() {  //각 Stage 단계 getter
	this.lev=this.level;
	return this.lev;
}

function getBackup(){ //스테이지 백업 getter
	return this.backup;
}
function setBackup(back){ //스테이지 백업 setter
	this.backup=back;
}

Background.prototype.Render = function() { //백그라운드 스테이지에 맞게 canvas에 Rendering 해줌

	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");


	if(getLevel()==1){
		setBackup(this._level);
		this._level=getLevel();
    Context.drawImage(this.imgStage1,0,0);
	}

	if(getLevel()==2){
		setBackup(this._level);
		this._level=getLevel();
    Context.drawImage(this.imgStage2,0,0);
	}
	if(getLevel()==3){
		setBackup(this._level);
		this._level=getLevel();
    Context.drawImage(this.imgStage3,0,0);
	}
	this._level = getLevel();

};

Background.prototype.Update = function() {

};
