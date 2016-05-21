Rectangle = function(x, y, w, h)
{
	if(x == null || y == null || w == null || h == null)
	{
		alert("You did not pass all the required variables(x,y,w,h");

		var errorMsg = "The following was not provided:";
		if (x == null)
			errorMsg += " 'x' ";
		if (y == null)
			errorMsg += " 'y' ";
		if(w == null)
			errorMsg += " 'width' ";
		if(h == null)
			errorMsg += " 'height' ";

		throw new Error(errorMsg);  
	};

	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.Contains = function(x, y)
	{
		if(x >= this.x && x<= this.x + this.width &&
			y>= this.y && y <= this.y + this.height)
		{
			return true;
		}
		else
			return false;
	};
	this.Intersects = function(shape)
	{
		var offset = 0;
		if (shape.radius != null)
			offset = shape.radius;

		if (shape.x - offset >= this.x &&
			shape.x - offset <=this.x + this.width &&
			shape.y - offset >= this.y &&
			shape.y - offset <= this.y + this.height ||
			this.x >= shape.x - offset &&
			this.x <= shape.x - offset + shape.width &&
			this.y >= shape.y - offset &&
			this.y <= shape.y -offset + shape.height ||
			shape.x - offset + shape.width >= this.x &&
			shape.x - offset + shape.width <= this.x + this.width &&
			shape.y - offset >= this.y &&
			shape.y - offset <= this.y + this.height ||
			this.x + this.width >= shape.x - offset &&
			this.x + this.width <= shape.x - offset + shape.width &&
			this.y >= shape.y - offset &&
			this.y <= shape.y - offset + shape.height)
			{
				return true;
			}
			else
				return false;


	};	
	this.Draw = function(ctx, color)
	{
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height
		);
	}





	
};