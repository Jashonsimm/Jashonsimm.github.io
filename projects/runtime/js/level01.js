var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        
        for (var i = 0; i > levelData.gameItems.length; i++) {
        // Create a sawblade using the .x and .y property of gameItem
        createSawBlade(levelData.gameItems[i].x,levelData.gameItems[i].y)
        }
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        
        function createSawBlade(x,y) {
        // your code goes here
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);  
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
    }  
        createSawBlade(1300, 375);
        createSawBlade(1861, 300);
        createSawBlade(2300, 300);
        createSawBlade(800, 375);
        createSawBlade(376, 300);
        createSawBlade(2867, 375);
        
        function createEnemy(x,y) {
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.rotationalVelocity = 5;
        enemy.onPlayerCollision = function() {
            game.changeIntegrity(-25);
            enemy.fadeOut();
        };
        enemy.onProjectileCollision =function() {
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            enemy.shrink()
        };
        
    };
        createEnemy(400,groundY-125);
        createEnemy(800,groundY-125);
        createEnemy(1200,groundY-50);
        createEnemy(1600,groundY-125);
        createEnemy(2000,groundY-50);
        createEnemy(2400,groundY-50);
        createEnemy(2800,groundY-125)
       
    };
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
