function Player() {
	//캐릭터의 초기화
	this.sprPlayer = new SpriteAnimation(resourcePreLoader.GetImage("img/cat.png"),156,222,1,1);

	this._level=getLevel();

	// console.log(this._level);

	if(getLevel()==1||getLevel()==2){
		this.x = 40;  //캐릭터의 초기 x위치 설정
		this.y = 410;  //캐릭터의 초기 y위치 설정

		//점프상태 초기화
		this.isJumping = false;
		//점프 높이
		this.jumpPower = 0;

		this.colBox = {left: this.x + 15, top : this.y + 10, right : this.x + 60, bottom: this.y + 170};

	}
	else if(getLevel()==3){
		this.x = 10;  //캐릭터의 초기 x위치 설정
		this.y = 120;  //캐릭터의 초기 y위치 설정
		this.speedX = 0;
		this.speedY = 0; 
	}

	this.Invalid();

}

function setLevel(lev) { //각 Stage 단계 setter
	this.level = lev;
}

function getLevel() {  //각 Stage 단계 getter
	this.lev=this.level;
	return this.lev;
}

//캐릭터를 Canvas에 Rendering 해줌
Player.prototype.Render = function() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	this.sprPlayer.Render(Context);

};

//캐릭터의 상태를 Update해줌
Player.prototype.Update = function() {

	this.sprPlayer.Update();

	if(getLevel()==1||getLevel()==2){
		if(this.isJumping == false){

			if(inputSystem.isKeyDown(38)){ //38은 위 40이 아래 32가 스페이스바
				this.isJumping = true;
				this.jumpPower = -18; //원래는 -22
			}
		}
		else {
			this.y += this.jumpPower;
			this.jumpPower += 1.0; //원래는 1.2

			if(this.y >= 410){
				this.y = 410;
				this.isJumping = false;
			}
			this.Invalid();
		}
	}

};

Player.prototype.Invalid = function() {

	this.sprPlayer.SetPosition(this.x, this.y);
	if(getLevel()==1||getLevel()==2){
		this.colBox = {left: this.x + 15,
									top : this.y + 10,
									right : this.x + 60,
									bottom: this.y + 195};
	}
}
