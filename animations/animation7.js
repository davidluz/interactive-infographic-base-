var animation7 = new Phaser.Game (301, 150,Phaser.CANVAS,'animation7',{preload:preload,create: create});

function preload(){
animation7.load.image('car1', 'imgs/car1.png');
}

function create(){

animation7.stage.backgroundColor = '#FFFFFF';
car1 = animation7.add.sprite(0,0,'car1');


}
