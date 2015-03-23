var animation12 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation12',{preload:preload,create: create});

function preload(){
animation12.load.image('car1', 'imgs/car1.png');
}

function create(){

animation12.stage.backgroundColor = '#FFFFFF';
car1 = animation12.add.sprite(0,0,'car1');


}

