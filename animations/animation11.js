var animation11 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation11',{preload:preload,create: create});

function preload(){
animation11.load.image('car_tombado', 'imgs/car_tombado.png');
}

function create(){

animation11.stage.backgroundColor = '#FFFFFF';
car_tombado = animation11.add.sprite(50,30,'car_tombado');


car_tombado.inputEnabled=true;
car_tombado.events.onInputOver.add(over, this);

car_tombado.scale.x = 0.1;
car_tombado.scale.y = 0.1;
car_tombado.anchor.setTo(0.5, 0.5);
tween1 = animation11.add.tween(car_tombado.scale).to({x: 0.5, y: 0.5}, 2000);
tween2 = animation11.add.tween(car_tombado.scale).to({x: 1, y: 1}, 1000)
tween3 = animation11.add.tween(car_tombado).to({angle: 90}, 1000); 
tween1.chain(tween2);

  tween2.onStart.add(function()
          {
		
            tween3.start();
			car_tombado.inputEnabled=false;
          }, this);




function over(){
tween1.start();

}

}

