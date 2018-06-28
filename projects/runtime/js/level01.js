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
        enemy.velocityX = -7;
        enemy.rotationalVelocity = 10;
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
        createEnemy(800,groundY-125);
        createEnemy(1200,groundY-1);
        createEnemy(1600,groundY-125);
        createEnemy(2000,groundY-1);
        createEnemy(2400,groundY-1);
        createEnemy(2800,groundY-125);
        
        function createHealth(x,y) {
        var health =  game.createGameItem('enemy',25);
        var blueSquare = draw.rect(50,50,'blue');
        blueSquare.x = -25;
        blueSquare.y = -25;
        health.addChild(blueSquare);
        health.x = x;
        health.y = y;
        game.addGameItem(health);
        health.velocityX = -5;
        health.rotationalVelocity = 5;
        health.onPlayerCollision = function() {
            game.changeIntegrity(25);
            health.shrink();
        };
        health.onProjectileCollision =function() {
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            health.fadeOut()
        };
        
    };
        createHealth(500,groundY-150);
        createHealth(1700,groundY-50);
        createHealth(2500,groundY-50);
       
                function createReward(x,y) {
        var reward =  game.createGameItem('enemy',25);
        var whiteSquare = draw.rect(50,50,'white');
        whiteSquare.x = -25;
        whiteSquare.y = -25;
        reward.addChild(whiteSquare);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -4;
        reward.rotationalVelocity = 1;
        reward.onPlayerCollision = function() {
            game.changeIntegrity(100);
            reward.shrink();
        };
        reward.onProjectileCollision =function() {
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            reward.fadeOut()
        };
        
    };
        createReward(3500,groundY-150)
        
    };
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
