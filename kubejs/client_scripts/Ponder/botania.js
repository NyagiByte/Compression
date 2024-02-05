Ponder.registry((e) => {
//------------------------------------------------------------------
    //Field Projector
        e.create("botania:apothecary_default").scene("Apothecary", "Crafting Using Apothecary", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([2,1,2], "botania:apothecary_default", false);
            scene.world.showSection([2,1,2], Facing.down);
            scene.idle(20);
            scene.overlay.showOutline(PonderPalette.GREEN, "airgap", [2,1,2], 20);
            scene.text(20, "This Is A Petal Apothecary, It Is Heavily Used In Botania For Creating Flowers", [2,1.5,2]);
            scene.idle(30);
            scene.text(20, "As An Example Let's Make A Pure Daisy", [2,1.5,2]);
            scene.idle(30)
            scene.showControls(20, [2.5, 2.5, 2.5], "down")
                .rightClick()
                .withItem("minecraft:water_bucket");
            scene.idle(30)
            scene.particles.simple(7, "splash", [2.5,2.5,2.5]).density(2);
            scene.world.modifyBlock([2,1,2], () => Block.id("botania:apothecary_default").with("fluid", "water"), true);
            scene.idle(20)
            scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal")
            scene.idle(5)
            scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
            scene.idle(10)
            scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal")
            scene.idle(5)
            scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
            scene.idle(10)
            scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal")
            scene.idle(5)
            scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
            scene.idle(5)
            scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal")
            scene.idle(5)
            scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
            scene.idle(10)
            scene.text(20, "With All The Resources Added We Then Need To Add Our Catalyst To Combine Them", [2,1.5,2]);
            scene.idle(30)
            scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "minecraft:wheat_seeds")
            scene.idle(10)
        });
//------------------------------------------------------------------
});