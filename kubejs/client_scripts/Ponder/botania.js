Ponder.registry((e) => {
//------------------------------------------------------------------
    //Field Projector
        e.create("botania:apothecary_default").scene("Apothecary", "Crafting Using Apothecary", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([2,1,2], "botania:apothecary_default", false);
            scene.world.showSection([2,1,2], Facing.down);
            scene.idle(10);
            scene.text(80, "This Is A Petal Apothecary, It Is Heavily Used In Botania", [2,1.5,2]);
            scene.overlay.showOutline(PonderPalette.GREEN, "airgap", [2,1,2], 60)
            scene.idle(10);
        });
//------------------------------------------------------------------
});