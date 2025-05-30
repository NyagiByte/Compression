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
        .scene("Cobblestone_Generator", "I want more cobble!", "kubejs:botania_7x7",(scene, util) => {
                    scene.showBasePlate();
                    scene.idle(20);
                    scene.text(80, "Upon gathering some materials, you might want to think of making a Cobblestone Generator.");
        			scene.idle(70);
        			scene.addKeyframe();
        			//first layer of the cobble gen-----------------------------------
                    scene.world.setBlock([3,1,2], "botania:mana_glass", false);
        			scene.world.showSection([3,1,2], Facing.down);
        			scene.world.setBlock([4,1,3], "botania:mana_glass", false);
        			scene.world.showSection([4,1,3], Facing.down);
        			scene.world.setBlock([3,1,4], "botania:mana_glass", false);
        			scene.world.showSection([3,1,4], Facing.down);
        			scene.world.setBlock([2,1,3], "botania:mana_glass", false);
        			scene.world.showSection([2,1,3], Facing.down);
        			scene.world.setBlock([1,1,3], "botania:mana_glass", false);
        			scene.world.showSection([1,1,3], Facing.down);
        			scene.idle(10);
        			//second layer and i already want to fucking die
        			scene.world.setBlock([5,2,3], "botania:mana_glass", false);
        			scene.world.showSection([5,2,3], Facing.down);
        			scene.world.setBlock([4,2,2], "botania:mana_glass", false);
        			scene.world.showSection([4,2,2], Facing.down);
        			scene.world.setBlock([4,2,4], "botania:mana_glass", false);
        			scene.world.showSection([4,2,4], Facing.down);
        			scene.world.setBlock([3,2,2], "botania:mana_glass", false);
        			scene.world.showSection([3,2,2], Facing.down);
        			scene.world.setBlock([1,2,2], "botania:mana_glass", false);
        			scene.world.showSection([1,2,2], Facing.down);
        			scene.world.setBlock([3,2,4], "botania:mana_glass", false);
        			scene.world.showSection([3,2,4], Facing.down);
        			scene.world.setBlock([1,2,4], "botania:mana_glass", false);
        			scene.world.showSection([1,2,4], Facing.down);
        			scene.world.setBlock([0,2,3], "botania:mana_glass", false);
        			scene.world.showSection([0,2,3], Facing.down);
        			scene.idle(10);
        			//how do i make liquid "flow" in fucking ponders
        			scene.showControls(30, [4.5,3,3.5], "down")
                        .rightClick()
        				.withItem("water_bucket")
        			scene.world.showSection([3,2,3], Facing.down);
        			scene.world.showSection([3,1,3], Facing.down);
        			scene.idle(20);
        			scene.world.setBlock([4,2,3], "minecraft:water", false);
        			scene.world.showSection([4,2,3], Facing.down);
        			scene.idle(20);
        			scene.idle(5);
        			//here comes the flowing water
        			scene.world.setBlock([3,2,3], "minecraft:water", false);
        			scene.world.modifyBlock([3,2,3], (water) => water.with("level", "3"), false)
        			scene.idle(5);
        			//the other water
        			scene.world.setBlock([3,1,3], "minecraft:water", false);
        			scene.idle(10);
        			//and here comes the lava
        			scene.showControls(30, [1.5,3,3.5], "down")
                        .rightClick()
        				.withItem("lava_bucket")
        			scene.world.showSection([2,2,3], Facing.down);
        			scene.idle(20);
        			scene.world.setBlock([1,2,3], "minecraft:lava", false);
        			scene.world.showSection([1,2,3], Facing.down);
        			scene.idle(40);
        			//AH FUCK ME I NOW I GOTTA MAKE SMOKE PARTICLES FOR THE COBBLE GENERATOR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        			scene.world.setBlock([2,2,3], "minecraft:cobblestone", true);
        			for(let i = 0; i<5;i++){
        				scene.particles.simple(2, "large_smoke", [Math.random()+2,3,Math.random()+3]).density(1);  //first variable is how long it goes for
        			}
        			scene.idle(40);
        			scene.addKeyframe();
        			scene.text(80, "A Cobblestone Generator works by infinitely flowing lava into contacting water, generating cobblestone as a result.");
        			scene.idle(90);
        			scene.text(50, "If you break the cobbblestone block...", [2.5,2.5,3.5]);
        			scene.idle(60);
        			scene.world.setBlock([2,2,3], "minecraft:air", true);
        			scene.idle(30);
        			scene.world.setBlock([2,2,3], "minecraft:cobblestone", true);
        			for(let i = 0; i<5;i++){
        				scene.particles.simple(2, "large_smoke", [Math.random()+2,3,Math.random()+3]).density(1);  //first variable is how long it goes for
        			}
        			scene.idle(10);
        			scene.text(60, "...another one will take its place.", [2.5,2.5,3.5]);
        			scene.idle(70);
        			scene.addKeyframe();
        			scene.text(80, "It's important to limit the water flow so it doesn't reach the lava source.", [3.5,1.5,3.5]);
        			scene.idle(90);
        			scene.text(80, "If you're not careful, your lava will become Obsidian, thus ruining your Cobblestone Generator.", [1.5,2.5,3.5]);
        			scene.idle(90);
        			scene.addKeyframe();
        			scene.text(80, "The process is very simple, but it can become very monotonous to break cobblestone by hand...");
        			scene.idle(90);
        			scene.text(80, "You might want to find a more §ccreative§r solution to this problem...");
        			scene.idle(30);
        });
});