var animation5 = new Phaser.Game(301, 150, Phaser.CANVAS, 'animation5', {preload:preload,create: create });

function preload() {

    animation5.load.image('car7', 'imgs/car7.png');
    animation5.load.image('car8', 'imgs/car8.png');
	animation5.load.image('car9', 'imgs/car9.png');

    
}



function create() {

    animation5.stage.backgroundColor = '#FFFFFF';
    car7 = animation5.add.sprite(0, 0, 'car7');
	car8 = animation5.add.sprite(0, 0, 'car8');
	car9 = animation5.add.sprite(0, 0, 'car9');
	
	car7.inputEnabled=true;
	car8.inputEnabled= true;
	car9.inputEnabled= true;
	
    var tween1 = animation5.add.tween(car7).to({ x: 200 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, false);
	var tween2 = animation5.add.tween(car8).to({ x: 100 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, false);
	var tween3 = animation5.add.tween(car9).to({ x: 50 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, false);
   
    car7.events.onInputOver.add(over, this);
	car7.events.onInputOut.add(out, this);
	car8.events.onInputOver.add(over, this);
    car8.events.onInputOut.add(out, this);
	car9.events.onInputOver.add(over, this);
    car9.events.onInputOut.add(out, this);
	
	
	tween1.pause();
	tween2.pause();
	tween3.pause();
	
	


	function over(){
    tween1.resume();
	tween2.resume();
	tween3.resume();
	}
	
	function out(){
	tween1.pause();
	tween2.pause();
	tween3.pause();
	}
	
	

		
		
	


	
	
	
	

}
	

	
