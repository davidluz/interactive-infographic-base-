/*!
 * HTML5 Animations v1.0.0
 * http://github.com/davidluz
 * Date: 2015-01-03 
 */

Atividade1 = {};

//States da Atividade
Atividade1.Game = function(){ }; 
Atividade1.Play = function(){ }; 
Atividade1.Feedback = function(){ }; 
 

//Global configuration
var game = new Phaser.Game(680, 50, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

function preload(){

	game.load.image('item1','imgs/item1.png');
	game.load.image('item1','imgs/item2.png');

}










function create(){

game.stage.backgroundColor = '#fff';
item1 = game.add.sprite(0, 0, 'item1');

tween1 = game.add.tween(item1).to({ x: 250 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);



}




function update(){


}





