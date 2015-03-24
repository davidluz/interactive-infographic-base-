var animation10 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation10',{preload:preload,create: create});

function preload(){
animation10.load.image('car_capotado', 'imgs/car_tombado.png');
}

function create(){

animation10.stage.backgroundColor = '#FFFFFF';
car_capotado = animation10.add.sprite(50,30,'car_capotado');

car_capotado.inputEnabled=true;
car_capotado.events.onInputOver.add(over, this);

car_capotado.scale.x = 0.1;
car_capotado.scale.y = 0.1;
car_capotado.anchor.setTo(0.5, 0.5);
tween_cap1 = animation10.add.tween(car_capotado.scale).to({x: 0.5, y: 0.5}, 2000);
tween_cap2 = animation10.add.tween(car_capotado.scale).to({x: 1, y: 1}, 1000)
tween_cap3 = animation10.add.tween(car_capotado).to({angle: -180}, 1000); 
tween_cap1.chain(tween_cap2);

  tween_cap2.onStart.add(function()
          {
		            car_capotado.inputEnabled=false;
		            tween_cap3.start();
          }, this);


function over(){
tween_cap1.start();
}
}
