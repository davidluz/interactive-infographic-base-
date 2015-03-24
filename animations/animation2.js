var animation2 = new Phaser.Game(201, 150, Phaser.CANVAS, 'animation2', {preload:preload,create: create });

function preload() {

    animation2.load.image('car3', 'imgs/car3.png');
    animation2.load.image('car4', 'imgs/car4.png');

    
}



function create() {

    animation2.stage.backgroundColor = '#FFFFFF';
    car3 = animation2.add.sprite(120, 0, 'car3');
	car4 = animation2.add.sprite(0, 70, 'car4');
	car3.inputEnabled=true;
	car4.inputEnabled= true;
	
    var tween1 = animation2.add.tween(car3).to({ x: 0 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);
    var tween2 = animation2.add.tween(car4).to({ y: 35 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);

	car3.events.onInputOver.add(over, this);
	car3.events.onInputOut.add(out, this);
	car4.events.onInputOver.add(over, this);
    car4.events.onInputOut.add(out, this);
	
	
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
	
