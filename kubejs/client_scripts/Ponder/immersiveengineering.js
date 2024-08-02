Ponder.tags((e) => {e.createTag("compression:immersiveengineering", "immersiveengineering:manual", "Immersive Engineering", "The factory must grow.", ["immersiveengineering:hammer"])});
Ponder.registry((e) => {
    e.create("immersiveengineering:hammer")
        .scene("ie_multiblock_assembly", "Assembling Immersive Engineering Multiblocks", "kubejs:arc_furnace_ponder", (scene, util) => {
            scene.scaleSceneView(0.7);
            scene.showBasePlate();
            scene.idle(5);
            
            for(var i = 1; i<=5 ; i++){
                scene.world.showSection([2,i,2, 6,i,6], Facing.DOWN);
                scene.idle(10);
            }     
            scene.overlay.showOutline(PonderPalette.RED, "airgap", [4,1,2], 60);
            var arc = scene.world.showIndependentSection([2,9,2, 6,13,6], Facing.DOWN);
            scene.world.moveSection(arc, [0,100,0], 0);

            scene.idle(20);
            scene.world.setBlocks([2,1,2, 6,5,6], "minecraft:air", false);          
            scene.world.moveSection(arc, [0,-108,0], 0);

            scene.markAsFinished();
        })
})