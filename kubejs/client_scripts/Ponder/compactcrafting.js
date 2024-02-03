Ponder.registry((e) => {
//------------------------------------------------------------------
    //Field Projector
        e.create("compactcrafting:field_projector").scene("Miniturization", "Field Projecting", (scene, util) => {
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