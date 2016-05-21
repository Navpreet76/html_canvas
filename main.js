var canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var ctx = canvas.getContext('2d');

var rect = new Rectangle(15, 15, 50, 50);
var rect2 = new Rectangle(80, 15, 50, 50);
var rect3 = new Rectangle(150, 15, 50, 50);
var rect4 = new Rectangle(230, 15, 50, 50);
var rect5 = new Rectangle(300, 15, 50, 50);
var movement = -3;
setInterval(function()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	rect.Draw(ctx, "red");
	rect2.Draw(ctx, "blue");
	rect3.Draw(ctx, "red");
	rect4.Draw(ctx, "blue");
	rect5.Draw(ctx, "red");

	rect2.x -= movement;
	rect4.x += movement;

	if(rect2.Intersects(rect) || rect2.Intersects(rect3))
		movement *= -1;
	if(rect4.Intersects(rect3) || rect4.Intersects(rect5))
		movement *= -3;
	//alert(rect.Intersects(rect2));
}, 33);