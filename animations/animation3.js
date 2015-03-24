var animation3 = new Phaser.Game(201, 150, Phaser.CANVAS, 'animation3', {preload:preload,create: create });

function preload() {

    animation3.load.image('car3', 'imgs/car3.png');
    animation3.load.image('car4', 'imgs/car4.png');

    
}



function create() {

    animation3.stage.backgroundColor = '#FFFFFF';
    car5 = animation3.add.sprite(120, 0, 'car3');
	car6 = animation3.add.sprite(0, 70, 'car4');
	car5.inputEnabled=true;
	car6.inputEnabled= true;
    var tween1 = animation3.add.tween(car5).to({ x: 0 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);
    var tween2 = animation3.add.tween(car6).to({ y: 35 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);
    
	
	car5.events.onInputOver.add(over, this);
	car5.events.onInputOut.add(out, this);
	car6.events.onInputOver.add(over, this);
    car6.events.onInputOut.add(out, this);
	
	
	
	tween1.pause();
	tween2.pause();
	 	   
	function over(){
    tween1.resume();
	tween2.resume();
	}
	
	function out(){
/*tween1.pause();
	tween2.pause();*/
	}


 

}
	
