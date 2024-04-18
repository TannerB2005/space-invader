import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js"

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png";

const playerBulletController = new BulletController(canvas, 10, "red", true)
const enemyBulletController = new BulletController(canvas, 4, "white", false)
const enemyController = new EnemyController(
    canvas, 
    enemyBulletController,
    playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;

function game() {
    ctx.drawImage(background,0,0,canvas.width, canvas.height);
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
}

function checkGameOver() {
    if(isGameOver) {
        return;
    }

    if(enemyBulletController.collideWith(player)){
        isGameOver = true;
    }
}

setInterval(game, 1000 / 60);