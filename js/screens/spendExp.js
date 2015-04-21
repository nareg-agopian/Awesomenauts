game.SpendExp = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title-screen')), -10); // TODO

        me.input.bindKey(me.input.KEY.F1, "F1");
        me.input.bindKey(me.input.KEY.F2, "F2");
        me.input.bindKey(me.input.KEY.F3, "F3");
        me.input.bindKey(me.input.KEY.F4, "F4");
        me.input.bindKey(me.input.KEY.F5, "F5");
        var exp1coast = ((game.data.exp1 + 1) + 10);

        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [270, 240, 300, 50]);
                this.font = new me.Font("Arial", 46, "white");
            },
            draw: function(rendere) {
                this.font.draw(rendere.getContext(), "PRESS F1-F4 TO BUY, F5 TO skip", this.pos.x, this.pos.y);
                this.font.draw(rendere.getContext(), "CURRENT EXP: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);
                this.font.draw(rendere.getContext(), "F1: INCREASE GOLD PRODUCTION CURRENT LEVLE" +game.data.exp1.toString() + " COST: " + ((game.data.exp1 + 1) * 10), this.pos.x, this.pos.y + 100);
                this.font.draw(rendere.getContext(), "F2: ADD STARTING GOLD ", this.pos.x + 200, this.pos.y + 150);
                this.font.draw(rendere.getContext(), "F3: Increase ATTACK DAMAGE: ", this.pos.x + 200, this.pos.y + 200);
                this.font.draw(rendere.getContext(), "F4: Increase STARTING HEALTH ", this.pos.x + 200, this.pos.y + 250);
            },
            update: function(dt) {
                return true;
            }
        })));

        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
            if(action === "F1"){
                if(game.data.exp >= exp1coast){
                    game.data.exp1 += 1;
                    game.data.exp -= exp1coast;
                    me.state.change(me.state.PLAY);
                }
            }else if(action === "F2"){
                
            }else if(action === "F3"){
                
            }else if(action === "F4"){
                
            }else if(action === "F5"){
                me.state.change(me.state.PLAY);
            }else{
                console.log ("not enough experience");
            }
        });

   },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.F1, "F1");
        me.input.unbindKey(me.input.KEY.F2, "F2");
        me.input.unbindKey(me.input.KEY.F3, "F3");
        me.input.unbindKey(me.input.KEY.F4, "F4");
        me.input.unbindKey(me.input.KEY.F5, "F5");
        me.event.unsubscribe(this.handler);
    }
});