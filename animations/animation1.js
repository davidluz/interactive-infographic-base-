var animation1 = new Phaser.Game(201, 150, Phaser.CANVAS, 'animation1', {preload:preload,create: create });

function preload() {

    animation1.load.image('car1', 'imgs/car1.png');
    animation1.load.image('car2', 'imgs/car2.png');

    
}



function create() {

    animation1.stage.backgroundColor = '#FFFFFF';
    car1 = animation1.add.sprite(0, 0, 'car1');
	car2 = animation1.add.sprite(0, 60, 'car2');
	car1.inputEnabled=true;
	car2.inputEnabled= true;
	
   var tween1 = animation1.add.tween(car1).to({ x: 20, y: 20 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, false);
   var tween2 = animation1.add.tween(car2).to({ x: 20 }, 800,        Phaser.Easing.Linear.None, true, 0, 1000, false);


	
	car1.events.onInputOver.add(over, this);
	car1.events.onInputOut.add(out, this);
	car2.events.onInputOver.add(over, this);
    car2.events.onInputOut.add(out, this);
	
    tween1.pause();
	tween2.pause();
	 	   
	function over(){
    tween1.resume();
	tween2.resume();
	}
	
	function out(){
	tween1.pause();
	tween2.pause();
	}

	
	
	
	

}
	
