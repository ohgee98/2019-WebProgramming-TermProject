function GraphicObject(img) {
   this.x = 0;
   this.y = 0;
   this.img = img;
   
   this.forward=1;
   return this;
}
//캐릭터와 몬스터의 바라보는 방향을 설정해줌
GraphicObject.prototype.ChangeForward = function(forward)
{
   this.forward=forward;
};
//캐릭터와 몬스터의 바라보는 방향을 Canvas에 Rendering 해줌
GraphicObject.prototype.Render = function(context) {
   
   if (this.forward) {
      context.drawImage(this.img, this.x, this.y);
   } else {
      context.save();
      context.translate(40+ this.x * 2, 0);

      context.scale(-1, 1);
      context.drawImage(this.img, this.x, this.y);
      context.restore();
   }

};
//캐릭터와 몬스터의 움직임을 표현
GraphicObject.prototype.Translate = function(x, y) {
   this.x += x;
   this.y += y;
};
//캐릭터와 몬스터의 위치를 Setting 해줌
GraphicObject.prototype.SetPosition = function(x, y) {
   this.x = x;
   this.y = y;
};
GraphicObject.prototype.Update = function() {
};