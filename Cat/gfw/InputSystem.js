window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);


//마우스와 키보드의 입력을 받음
function InputSystem()
{
	this.mouseX=0;
	this.mouseY=0;
	this.mouseClick = false;
	this.mouseButton =-1;
	this.isKeyPressed = [];
	return this;
}
//키보드의 키가 눌릴 때
InputSystem.prototype.isKeyDown = function(keyCode)
{
	if(this.isKeyPressed[keyCode] == true)
		return true;
	
	else
		return false;
};
//마우스의 X값을 리턴
InputSystem.prototype.getMousePositionX = function()
{
	return this.mouseX;
};
//마우스의 Y값을 리턴
InputSystem.prototype.getMousePositionY = function()
{
	return this.mouseY;
};
InputSystem.prototype.getMouseButton = function()
{
	return this.mouseButton;
};
InputSystem.prototype.getMouseClick = function()
{
	return this.mouseClick;
};
//마우스의 움직임을 저장
function onMouseMove(e)
{
	var theCanvas = document.getElementById("GameCanvas");
	inputSystem.mouseX = e.clientX/* - theCanvas.offsetLeft*/;
	inputSystem.mouseY = e.clientY/* - theCanvas.offsetTop*/;
	inputSystem.mouseClick = true;
	inputSystem.mouseButton = e.button;
}
function onKeyDown(e)
{
	inputSystem.isKeyPressed[e.keyCode] = true;
}
function onKeyUp(e)
{
	inputSystem.isKeyPressed[e.keyCode] = false;
}
var inputSystem = new InputSystem();
