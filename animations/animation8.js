var animation8 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation8',{preload:preload,create: create});

function preload(){
animation8.load.image('car11', 'imgs/car10.png');
animation8.load.image('car12', 'imgs/car11.png');
}

function create(){

animation8.stage.backgroundColor = '#FFFFFF';
car11 = animation8.add.sprite(0,0,'car11');
car12 = animation8.add.sprite(180,0,'car12');
car11.inputEnabled=true;
car12.inputEnabled= true;

var tween11 = animation1.add.tween(car11).to({ x: 20}, 800, Phaser.Easing.Linear.None, true, 0, 0, false);
var tween12 = animation1.add.tween(car12).to({ x: 100 }, 800,        Phaser.Easing.Linear.None, true, 0, 0, false);

car11.events.onInputOver.add(over, this);
car11.events.onInputOut.add(out, this);
car12.events.onInputOver.add(over, this);
car12.events.onInputOut.add(out, this);
	
tween11.pause();
tween12.pause();
	
function over(){
  tween11.resume();
	tween12.resume();
	}
	
	function out(){
	/*tween1.pause();
	tween2.pause();*/
	}


}

