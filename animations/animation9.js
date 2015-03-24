var animation9 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation9',{preload:preload,create: create});

function preload(){
animation9.load.image('car13', 'imgs/car12.png');
animation9.load.image('car14', 'imgs/car13.png');
}

function create(){

animation9.stage.backgroundColor = '#FFFFFF';

car13 = animation9.add.sprite(0,30,'car13');
car14 = animation9.add.sprite(200,0,'car14');

car13.inputEnabled=true;
car14.inputEnabled=true;

var tween11 = animation1.add.tween(car13).to({ x: 150}, 800, Phaser.Easing.Linear.None, true, 0, 0, false);


car13.events.onInputOver.add(over, this);
car13.events.onInputOut.add(out, this);
car14.events.onInputOver.add(over, this);
car14.events.onInputOut.add(out, this);

tween11.pause();


function over(){
  tween11.resume();

	}
	
	function out(){
	/*tween11.pause();*/
	
	}

	

}

