var animation12 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation12',{preload:preload,create: create});

function preload(){
animation12.load.image('man', 'imgs/man.png');
animation12.load.image('lastcar', 'imgs/car5.png');
}

function create(){

animation12.stage.backgroundColor = '#FFFFFF';
man = animation12.add.sprite(200,20,'man');
lastcar = animation12.add.sprite(0,0,'lastcar');
man.inputEnabled=true;
man.anchor.setTo(0.5, 0.5);
lastcar.inputEnabled=true;

var tweenLastCar = animation12.add.tween(lastcar).to({ x: 120}, 500, Phaser.Easing.Linear.None, false, 0, 0, false);
var tweenMan = animation12.add.tween(man).to({ x: 400}, 800, Phaser.Easing.Linear.None, false, 0, 0, false);
var tweenManRotation = animation12.add.tween(man).to({angle: -960}, 1000); 


man.events.onInputOver.add(over, this);
lastcar.events.onInputOver.add(over, this);


tweenLastCar.chain(tweenMan);

  tweenMan.onStart.add(function()
          {
		   tweenManRotation.start();
          }, this);

function over(){
  tweenLastCar.start();
	}
	


}

