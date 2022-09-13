window.addEventListener("load", onPageLoadComplete, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
var temp_text_x = 400;
var temp_text_y = 300;
var game_state;
var after_loading_state;

//Frame Per Second 계산
function onPageLoadComplete()
{
	var FPS = 30;
	setInterval(gameLoop, 1000/FPS);
	game_state = new LoadingState();
}
function onMouseDown(e)
{
	if(game_state.onMouseDown != undefined)
		game_state.onMouseDown(e);
}
function onMouseUp(e)
{
	if(game_state.onMouseUp != undefined)
		game_state.onMouseUp(e);
}

//게임의 상태변화를 Update & Rendering
function ChangeGameState(nextGameState)
{
	if(nextGameState.Update == undefined)
		return ;
	if(nextGameState.Render == undefined)
		return ;

	game_state = nextGameState;
}

//Sound 삽입
function MainSoundSystem()
{
	//soundSystem.PlaySound("노래.mp3");
}
//마우스의 x,y좌표를 Update 해줌
function Update()
{
	temp_text_x = inputSystem.getMousePositionX();
	temp_text_y = inputSystem.getMousePositionY();
	game_state.Update();

	timerSystem.Update();

}
// Canvas에 해당하는 그림들을 Rendering 해줌
function Render()
{
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#000000";
	Context.fillRect(0,0,1280,650);
	game_state.Render();
	// if(getLevel() !=1){ fps 화면에 출력하는 부분
		// Context.fillStyle = "#ffffff";
		// Context.font = '15px Arial';
		// Context.textBaseline = "top";
		// Context.fillText("fps : "+frameCounter.Lastfps,10,10);
	// }

}
//게임은 항상 무한루프로 돌면서 Update와 Rendering의 연속임
function gameLoop()
{
	Update();
	Render();
	frameCounter.countFrame();
}
