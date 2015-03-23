var animation10 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation10',{preload:preload,create: create});

function preload(){
animation10.load.image('car1', 'imgs/car1.png');
}

function create(){

animation10.stage.backgroundColor = '#FFFFFF';
car1 = animation10.add.sprite(0,0,'car1');


}

