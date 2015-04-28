
game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameover = false;
        return true;
    },
    update: function() {
        if (game.data.win === true && !this.gameover) {
            this.gameOver(true);
        } else if (game.data.win === false && !this.gameover) {
            this.gameOver(false);
        }

        return true;
    },
    gameOver: function(win) {
        if (win) {
            game.data.exp += 10;
        } else {
            game.data.exp += 1;
        }

        game.data.exp += 10;
        this.gameover = true;
        me.save.exp = game.data.exp;
        //For testing purposes only
        me.save.exp2 = 4;
    }

});

