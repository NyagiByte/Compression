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
});