var animation11 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation11',{preload:preload,create: create});

function preload(){
animation11.load.image('car1', 'imgs/car1.png');
}

function create(){

animation11.stage.backgroundColor = '#FFFFFF';
car1 = animation11.add.sprite(0,0,'car1');


}

