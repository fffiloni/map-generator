const infoRecup = [];
let cvn;
let onMark = false;
let getInfo;
let infoBox;
let boxopen = false;
let closeit = false;
const assets = [];
const trees = [];
const pushedTents = [];

const samplePlayer = [
	{
		"info": { "player":'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/381425282&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'}
	}
];

function preload() {
   let img = loadImage('./assets/tente1.png', function(){ assets.push(img); });
	 let img2 = loadImage('./assets/tente2.png', function(){ assets.push(img2); });
	 let img3 = loadImage('./assets/arbre1.png', function(){ trees.push(img3); });
	 let img4 = loadImage('./assets/arbre2.png', function(){ trees.push(img4); });
	 let img5= loadImage('./assets/arbre3.png', function(){ trees.push(img5); });
}


function setup() {
	cnv = createCanvas(1280, 720);
	cnv.id('canvas');
	cnv.parent('main-container');
	cnv.mousePressed(createNewMark);
	background(255);

	for(let i = 0; i < 150; i++) {
		let arbre = new Bubble(random(width), random(height), "arbre", "none");
		arbre.display();
	}
	for(let i = 0; i < 16; i++) {
		let tente = new Bubble(random(200, width - 200), random(100, height - 100), "tente", samplePlayer[0].info);
		pushedTents.push(tente);
	}

	getInfo = createDiv('');
	getInfo.id("product-info");
	getInfo.parent('main-container');
	getInfo.mousePressed(function(){
		if (closeit == true){
			infoRecup.pop();
			boxopen = false;
			loop();
		}
	});

	infoBox = createDiv('');
	infoBox.id('infoBox');
	infoBox.parent('product-info');
	infoBox.mouseOver(function(){ closeit = false; });
	infoBox.mouseOut(function(){ closeit = true; });

}

function draw() {
	for (let tente of pushedTents){
		tente.display();
	}

	if(infoRecup.length > 0){
		 infoBox.html('' + infoRecup[0].player + '');
	} else {
		$("#product-info").css("opacity", "0");
		infoBox.html('');
		$("#product-info").css("visibility", "hidden");
	}
}

function createNewMark() {
	if (keyIsDown(18)) {
		console.log('created a new bubble.');
		let newMark = new Bubble(mouseX, mouseY, "tente");
		pushedTents.push(newMark);
	  // prevent default
	  return false;
  }
}

function mousePressed(){
	if (!keyIsDown(18) && boxopen == false) {
		for(let i = 0; i < pushedTents.length; i++) {
			pushedTents[i].clicked();
		}
	}
}
