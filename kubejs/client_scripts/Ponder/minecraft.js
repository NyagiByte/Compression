Ponder.tags((e) => {
	e.createTag("compression:minecraft", "minecraft:crafting_table", "Minecraft Basics.", "The Basics of Basics!",
	["minecraft:cobblestone", "minecraft:glass",
	]);
});
//------------------------------------------------------------------
Ponder.registry((e) => {
//------------------------------------------------------------------
    //Glass
        e.create("minecraft:glass").scene("Glass", "Blasted Sand", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([2,1,2], "minecraft:glass", false);
            scene.world.showSection([2,1,2], Facing.down);
            scene.idle(10);
            scene.text(40, "You can see through this...", [2.5,1,2.5]);
            scene.idle(20);
        });
//------------------------------------------------------------------
	//Cobblestone
        e.create("minecraft:cobblestone") //creates scene for the item
        .scene("cobblestone_pebble", "How do i get cobble?", "kubejs:botania_5x5",(scene, util) => {   //sets the parameters for the scene  Name, Description, Baseplate
            scene.showBasePlate();    //this shows the baseplate selected
            scene.idle(20);
            scene.text(70, "This prison seems to work similarly to the 'Garden of Glass'...");
            scene.idle(80);
			scene.text(60, "...enabling you to harvest pebbles from the soil beneath your feet.", [2.5,1,2.5]); //text that appears pointing towards the cords
    		scene.idle(50);
    		scene.addKeyframe();
            scene.showControls(40, [2.5,1,2.5], "down")                 //setting the instruction of clicking
                .rightClick()
                .whileSneaking();
    		scene.idle(50);
            var pebbles = [];     //hippity hoppity barza's code is now my property
                pebbles.push(scene.world.createItemEntity([2.5,1,2.5], [0,0.4,0], "botania:pebble"))
                    for(let i = 0; i<8;i++){
                        pebbles.push(scene.world.createItemEntity([2.5,1,2.5], [
                            (Math.random()/3)-0.16,
                            (Math.random())/2,
                            (Math.random()/3)-0.16
                        ], "botania:pebble"));
    			    scene.idle(10);                   //delay per item spawn
                    }
			scene.text(60, "With these pebbles, you can craft cobblestone.");
    		scene.idle(20);
			scene.markAsFinished();
        })
        .scene("Cobblestone_Generator", "I want more cobble!", "kubejs:botania_5x5",(scene, util) => {
            scene.showBasePlate();
            scene.idle(20);
            scene.text(70, "This prison seems to work similarly to the 'Garden of Glass'...");
			scene.markAsFinished();
        });
});