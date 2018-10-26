var rains = [];
var acceleration = 0.0098;

function setup() {
	var rainNumber = floor(random(600,1000));
	createCanvas(window.innerWidth, window.innerHeight);
	for (var i = 0; i < rainNumber; i++) {	
		rains.push(new Rain());
	}
	
}
function draw() {
	clear();
	background(128, 222, 234);
	rains.forEach((r) => {
		r.drawAndDrop();
	});

}
var Rain = function() {
	
	this.yVelocity = random();

	this.initX = () => {
		this.x = random() * width;
	}
	this.initY = () => {
		this.y = -random() * height / 3; 
	};
	this.initX();
	this.y = random() * height;

	this.drawAndDrop = () => {
		this.fall();
		this.show();
	}
	this.fall = () => {
		if(this.y < height) {
			this.y += this.yVelocity;
      		this.yVelocity += acceleration;
		} else {
	      this.yVelocity = random();
	      this.initY();
	      this.initX();
	    }
	
	}
	
	this.show = () => {
		
		stroke(this.randomColor());
		line(this.x,this.y,this.x,this.y +(random() * 10));
		
	}
	this.randomColor = () => {
		this.colors = [
		(236, 240, 241),
		(240, 243, 244),
		(244, 246, 247),
		(247, 249, 249),
		(251, 252, 252),
		(253, 254, 254)
		];
		return this.colors[floor(random(0,this.colors.length))];
	}

}