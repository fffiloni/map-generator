class Bubble {
	constructor(x, y, type, info){
		this.x = x;
		this.y = y;
		this.r = 20;
		this.col = color(255);
		this.info = info;
		this.type = type;
		this.item = assets[Math.floor(Math.random()*assets.length)];
		this.tree = trees[Math.floor(Math.random()*trees.length)];
	}

	display(){
		noStroke();
		// fill(this.col);
		// ellipse(this.x, this.y, this.r *2);
		if (this.type === "tente"){
			image(this.item, this.x - 25, this.y - 15, 50, 30);
		} else if (this.type === "arbre"){
			image(this.tree, this.x, this.y, 10, 15);
		}
	}

	changeColor(){
		this.col = color(random(255), 0, random(255));
	}

	clicked(){
		let d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.r){
			noLoop();
			infoRecup.pop();
			infoRecup.push(this.info);
			// console.log(infoRecup);
			$("#product-info").css("visibility", "visible");
			$("#product-info").css("opacity", "1");
			boxopen = true;
		}
	}
	
}
