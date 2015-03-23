var animation8 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation8',{preload:preload,create: create});

function preload(){
animation8.load.image('car1', 'imgs/car1.png');
}

function create(){

animation8.stage.backgroundColor = '#FFFFFF';
car1 = animation8.add.sprite(0,0,'car1');


}

