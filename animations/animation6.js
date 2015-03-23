var animation6 = new Phaser.Game(301, 150, Phaser.CANVAS, 'animation6', {preload:preload,create: create });

function preload() {

    animation6.load.image('car5', 'imgs/car5.png');
    animation6.load.image('car6', 'imgs/car6.png');

    
}



function create() {

    animation6.stage.backgroundColor = '#FFFFFF';
    car5 = animation6.add.sprite(0, 0, 'car5');
	car6 = animation6.add.sprite(110, 5, 'car6');
	
	car5.inputEnabled=true;
	car6.inputEnabled= true;
    var tween1 = animation6.add.tween(car5).to({ x: 25 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, false);
   
    car5.events.onInputOver.add(over, this);
	car5.events.onInputOut.add(out, this);
	car6.events.onInputOver.add(over, this);
    car6.events.onInputOut.add(out, this);
	
	tween1.pause();
	

	function over(){
    tween1.resume();
	
	}
	
	function out(){
	tween1.pause();

	}

 

}
	