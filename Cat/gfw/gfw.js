function onGameInit()
{
	document.title = "캔을 따라 집사!";
	GAME_FPS = 30;
	var IS = new ImgSoundAdd();
	after_loading_state = new TitleState();
	setInterval(gameLoop, 1000/GAME_FPS);
}
//img파일들을 추가해줌
function ImgSoundAdd()
{
	resourcePreLoader.AddImage("img/cat.png"); //플레이어 아이콘

	resourcePreLoader.AddImage("img/newresult.png"); //결과 화면
	resourcePreLoader.AddImage("img/result.png");

	resourcePreLoader.AddImage("img/title.png"); //타이틀
	resourcePreLoader.AddImage("img/sample.png");

	resourcePreLoader.AddImage("img/stage1.png"); //스테이지 배경
	resourcePreLoader.AddImage("img/stage2.png");
	resourcePreLoader.AddImage("img/stage3.png");

	resourcePreLoader.AddImage("img/ground3.png"); //바닥
	resourcePreLoader.AddImage("img/foot3.png"); //장애물

	resourcePreLoader.AddImage("img/start.png"); //시작버튼
	resourcePreLoader.AddImage("img/login.png"); //로그인버튼

}
window.addEventListener("load",onGameInit, false);
