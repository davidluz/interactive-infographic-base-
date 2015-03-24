var animation7 = new Phaser.Game(301, 150, Phaser.CANVAS, 'animation7', {preload:preload,create: create});

function preload() {
animation7.load.image('car20x', 'imgs/car7.png');
animation7.load.image('car21x', 'imgs/car8.png');  
animation7.load.image('car22x', 'imgs/car9.png');     
}




function create() {

animation7.stage.backgroundColor = '#FFFFFF';
car20x = animation7.add.sprite(180,0,  'car20x');
car21x = animation7.add.sprite(-100,13,'car21x');
car22x = animation7.add.sprite(-120,5, 'car22x');

car20x.inputEnabled= true;
car21x.inputEnabled= true;
car22x.inputEnabled= true;

var tween1 = animation7.add.tween(car20x).to({ x: 180  }, 400, Phaser.Easing.Linear.None, false, 0, 0, false);
var tween2 = animation7.add.tween(car21x).to({ x: 100}, 400, Phaser.Easing.Linear.None, false, 0, 0, false);
var tween3 = animation7.add.tween(car22x).to({ x: 10  }, 400, Phaser.Easing.Linear.None, false, 0, 0, false);


	car20x.events.onInputOver.add(over, this);
	car21x.events.onInputOver.add(over, this);
	car22x.events.onInputOver.add(over, this);


tween1.chain(tween2);
tween2.chain(tween3);

	function over(){
    tween1.start();

	}
	
	function out(){
    /*tween1.resume();*/

	}
	




}


	

	
