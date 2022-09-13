
document.write("<script type='text/javascript' src='js/loginM.js'><"+"/script>"); //로그인 위해서 다른 js의 함수 불러오기 위함

function TitleState()
{
	//Title 화면 초기화
	this.imgBackground =resourcePreLoader.GetImage("img/title.png");	   //타이틀 이미지
	this.imgStart= resourcePreLoader.GetImage("img/start.png");		  //시작버튼 이미지
  this.imgLog= resourcePreLoader.GetImage("img/login.png"); //로그인버튼 이미지
  this.flagButtonLog = false;                   //로그인 버튼의 상태
	this.flagButtonStrat = false;                //시작 버튼의 상태

	this.x=0;									 //마우스의 x좌표 초기화
	this.y=0;									 //마우스의 y좌표 초기화

	return this;
}

TitleState.prototype.Render = function()
{
	//Title 화면을 Canvas에 뿌려줌
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	//Title 화면을 출력
	Context.drawImage(this.imgBackground,0,0);
  Context.drawImage(this.imgLog,60,330);
  Context.drawImage(this.imgStart,60,430);

};

//Title화면을 Canvas에서 Update 해줌
TitleState.prototype.Update = function()
{
	this.flagButtonStart=false;
	this.flagButtonLog=false;

  // 로그인 버튼 눌렸을 때 화면 넘어감 && 시작 버튼 눌렸을 때 화면 넘어감
	if(inputSystem.mouseX>=60 && inputSystem.mouseY>=330 && inputSystem.mouseX <=300 && inputSystem.mouseY <=390){
		if(this.flagButtonLog==false){
			this.flagButtonLog=true;
		}
	}else if(inputSystem.mouseX>=60 && inputSystem.mouseY>=435 && inputSystem.mouseX <=300 && inputSystem.mouseY <=490){
		if(this.flagButtonStart==false){
			this.flagButtonStart=true;
		}
	}

};

// 타이틀에서 버튼 눌렸을 때 이벤트 처리
TitleState.prototype.onMouseDown=function()
{
	if(this.flagButtonStart){
    ChangeGameState(new PlayState(1));
	}
	if(this.flagButtonLog){
    modalbox();
	}
};

TitleState.prototype.Invalid = function() {
	this.imgIntro.SetPosition(this.x, this.y);
};
