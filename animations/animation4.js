var animation4 = new Phaser.Game(301, 150, Phaser.CANVAS, 'animation4', {preload:preload,create: create });

function preload() {

    animation4.load.image('car5', 'imgs/car5.png');
    animation4.load.image('car6', 'imgs/car6.png');

    
}



function create() {

    animation4.stage.backgroundColor = '#FFFFFF';
    car5 = animation4.add.sprite(0, 0, 'car5');
	car6 = animation4.add.sprite(110, 5, 'car6');
	
	car5.inputEnabled=true;
	car6.inputEnabled= true;
    var tween1 = animation4.add.tween(car5).to({ x: 25 }, 400, Phaser.Easing.Linear.None, true, 0, 0, false);
   
    car5.events.onInputOver.add(over, this);
	car5.events.onInputOut.add(out, this);
	car6.events.onInputOver.add(over, this);
    car6.events.onInputOut.add(out, this);
	
	tween1.pause();
	

	function over(){
    tween1.resume();
	
	}
	
	function out(){
/*tween1.pause();
	tween2.pause();*/

	}

 

}
	
