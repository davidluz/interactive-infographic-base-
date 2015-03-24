var animation5 = new Phaser.Game(301, 150, Phaser.CANVAS, 'animation5', {preload:preload,create: create});

function preload() {
animation5.load.image('car20', 'imgs/car7.png');
animation5.load.image('car21', 'imgs/car8.png');  
animation5.load.image('car22', 'imgs/car9.png');     
}




function create() {

animation5.stage.backgroundColor = '#FFFFFF';
car20 = animation5.add.sprite(180,0,'car20');
car21 = animation5.add.sprite(-100,13,'car21');
car22 = animation5.add.sprite(-120,5,'car22');

car20.inputEnabled= true;
car21.inputEnabled= true;
car22.inputEnabled= true;

var tween1 = animation5.add.tween(car20).to({ x: 180  }, 400, Phaser.Easing.Linear.None, false, 0, 0, false);
var tween2 = animation5.add.tween(car21).to({ x: 100}, 400, Phaser.Easing.Linear.None, false, 0, 0, false);
var tween3 = animation5.add.tween(car22).to({ x: 10  }, 400, Phaser.Easing.Linear.None, false, 0, 0, false);


	car20.events.onInputOver.add(over, this);
	car21.events.onInputOver.add(over, this);
	car22.events.onInputOver.add(over, this);


tween1.chain(tween2);
tween2.chain(tween3);

	function over(){
    tween1.start();

	}
	
	function out(){
    /*tween1.resume();*/

	}
	




}


	

	
