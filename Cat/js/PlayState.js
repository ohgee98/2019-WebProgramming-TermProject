var playState;

function PlayState(lv) {
	this._level = lv;
	setLevel(this._level);

	if(lv==1){
		playState = this;
		this.player = new Player(); //플레이어 생성
		this.score = 0; //점수
		this.count = 0; //충돌횟수
	  this.back = new Background(); //배경
		this.ground = new Playground();
	}
	else{
		playState = this;
		this.player = new Player(); //플레이어 생성
		this.score = getFrontScore(); //점수
		this.count = getFrontColl(); //충돌횟수
	  this.back = new Background(); //배경
		this.ground = new Playground();
	}

	this.timer = new Timer(); //타이머 설정

	return this;
}

function addScore(){
	this.score += 100;
}

//현재 게임 상태 rendering 해줌
PlayState.prototype.Render = function(){
	var theCanvas = document.getElementById("GameCanvas");
	// var Context1 = theCanvas.getContext("2d");
	var Context2 = theCanvas.getContext("2d");
	var Context3 = theCanvas.getContext("2d");

	this.back.Render();
	this.ground.Render();
  this.player.Render();

	// Context1.fillStyle = "#000000";
	// Context1.font = "30px Arial";
	// Context1.textBaseline = "top";
	// Context1.fillText( "SCORE : "+this.score,5,5);

	Context2.fillStyle = "#474A51";
	Context2.font = "30px Arial";
	Context2.textBaseline = "top";
	Context2.fillText( "CRASH : "+this.count,5,5);

	Context2.fillStyle = "#000000";
	Context2.font = "30px Arial";
	Context2.textBaseline = "top";
	Context2.fillText( "TIME : "+Math.floor(this.timer.nowFrame/2000),650,5);

};

//게임상태에서 각 Stage에 따른 상태를 Update 해줌
PlayState.prototype.Update = function() {

	this.back.Update();
	this.ground.Update();
  this.player.Update();
	this.ground.CheckCol(this.player.colBox);

	if(this._level<=2){ //2스테이지 까지는 1분
		if(this.timer.nowFrame > 120000){
			console.log(this._level+"stage 1분 지남");
			setFrontScore(this.score);
			setFrontColl(this.count);
			if(this._level==1){
				ChangeGameState(new PlayState(this._level+1));
			}
			else{
				location.replace("Stage3.html");
			}
			this.timer.Reset();
		}
	}

};

//충돌 일어난 경우
PlayState.prototype.Notification = function(msg)
{
	switch (msg) {
		case "COL":

		this.count += 1;

		if(this.count<4){
			this.timer.nowFrame += 4000; //초반 3회 까지는 2초만 증가
			console.log("충돌 후 2초 더해짐"+this.count+"/"+this.timer.nowFrame);
		}
		else{
			this.timer.nowFrame += 10000; // 그 이후부터는 1회 충돌 당 5초 가량 증가시킴
			console.log("충돌 후 5초 더해짐"+this.count+"/"+this.timer.nowFrame);
		}

		break;
	}
};
