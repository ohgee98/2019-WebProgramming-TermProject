var resourcePreLoader = new ResourcePreLoader();

function ResourcePreLoader()
{
	this.isLoadComplete =false;
	this.nowResourceLoadedCount = 0;
	this.intAllResourceCount = 0;
	this.arrResource = new Array();
	return this;
}

//img파일을 Load함
ResourcePreLoader.prototype.AddImage = function(fileName)
{
	var img = new Image();
	img.src = fileName;
	img.addEventListener("load",onLoadImageResourceComplete, false);
	this.arrResource.push({name:fileName, image:img});
	this.intAllResourceCount++;
};
//Load한 img파일을 가져오는 Getter
ResourcePreLoader.prototype.GetImage = function(fileName)
{
	for(var i = 0; i<this.arrResource.length; i++)
	{
		if(this.arrResource[i].name == fileName)
		{
			return this.arrResource[i].image;
		}
	}
	return null;
};

//img의 Load가 성공했는지 여부 판단
function onLoadImageResourceComplete()
{
	resourcePreLoader.nowResourceLoadedCount++;
	if(resourcePreLoader.nowResourceLoadedCount <= resourcePreLoader.intAllResourceCount)
	{
		resourcePreLoader.isLoadComplete = true;
	}
}
function LoadingState()
{
	return this;
}
LoadingState.prototype.Render = function()
{
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	var totalResourceCount = resourcePreLoader.intAllResourceCount /*+ soundSystem.intAllResourceCount*/;
	var nowCompleteResourceCount = resourcePreLoader.nowResourceLoadedCount /*+ soundSystem.nowResourceLoadedCount*/;
	Context.fillText("Now Loading..." + nowCompleteResourceCount +"/"+ totalResourceCount, 350, 280);
};
LoadingState.prototype.Update = function()
{
	if(resourcePreLoader.isLoadComplete /*&& soundSystem.isLoadComplete*/)
	{
		ChangeGameState(new TitleState);
	}
};
