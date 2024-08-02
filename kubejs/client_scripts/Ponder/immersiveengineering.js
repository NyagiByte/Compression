Ponder.tags((e) => {e.createTag("compression:immersiveengineering", "immersiveengineering:manual", "Immersive Engineering", "The factory must grow.", ["immersiveengineering:hammer"])});
Ponder.registry((e) => {
    e.create("immersiveengineering:hammer")
        .scene("ie_hammah", "HAMMAH!", "kubejs:ie_base_5x5", (scene,util) => {
            scene.showBasePlate();
            scene.idle(10);
            scene.text(60, "The Engineer's Hammer is one of the most important tools when working with Immersive Engineering,", [2.5,1,2.5]);
            var hammers = [];
            hammers.push(scene.world.createItemEntity([2.5,1,2.5], [0,0.4,0], "immersiveengineering:hammer"))
            for(let i = 0; i<20;i++){
                hammers.push(scene.world.createItemEntity([2.5,1,2.5], [
                    (Math.random()/3)-0.16,
                    (Math.random())/2,
                    (Math.random()/3)-0.16
                ], "immersiveengineering:hammer"));
                scene.idle(2)
            }
            scene.idle(10);
            
            hammers.forEach((hammer) => {
                scene.world.modifyEntity(hammer, (e) => {e.discard()});
                scene.idle(1)
            })
            
            scene.idle(15);
            scene.addKeyframe();

            scene.world.setBlock([2,1,2], "minecraft:piston", false);
            scene.world.modifyBlock([2,1,2], (p) => p.with("facing", "north"), false)
            scene.world.showSection([2,1,2], Facing.DOWN);
            scene.idle(20);
            scene.showControls(120, [2.5, 2.5, 2.5], "down")
                    .rightClick()
                    .withItem("immersiveengineering:hammer");
            scene.text(50, "The hammer can be used to rotate many blocks.", [2.5,1,2.5]);

            scene.idle(60);
            let piston = scene.world.makeSectionIndependent([2,1,2]);
            for(let i=1;i<=4;i++){
                scene.world.rotateSection(piston, 0, 90, 0, 1)
                scene.idle(15);
            }
            scene.world.hideIndependentSection(piston, Facing.UP)
            scene.idle(20)
            scene.addKeyframe();

            scene.idle(5);
            scene.world.setBlock([2,1,2], "immersiveengineering:capacitor_lv", false);
            scene.world.showSection([2,1,2], Facing.DOWN);
            scene.idle(10);
            scene.showControls(140, [2.5, 2.5, 2.5], "down")
                    .rightClick()
                    .withItem("immersiveengineering:hammer");
            scene.text(60, "The hammer can be also used to configure certain blocks.", [2.5,1,2.5]);
            scene.idle(60);
            scene.text(80, "For example, right-clicking a side of an accumulator, will set whether it's an input, an output, or neither.", [2.5,1,2.5]);
            scene.idle(20);
            scene.world.modifyTileNBT([2,1,2], (nbt) => {
                nbt.sideConfig_1 = 2;
            }, true)
            scene.idle(20)
            scene.world.modifyTileNBT([2,1,2], (nbt) => {
                nbt.sideConfig_1 = 0;
            }, true)
            scene.idle(20)
            scene.world.modifyTileNBT([2,1,2], (nbt) => {
                nbt.sideConfig_1 = 1;
            }, true)
            scene.idle(20)


            scene.markAsFinished();
        })
        .scene("ie_multiblock_assembly", "Assembling Immersive Engineering Multiblocks", "kubejs:arc_furnace_ponder", (scene, util) => {
            scene.showBasePlate();
            scene.text(60, "The hammer is needed to assemble Immersive Engineering's multiblocks.");
            scene.idle(50)
            scene.scaleSceneView(0.7);
            scene.idle(10);
            scene.text(80, "First, build the multiblock. Follow the instructions in the Engineer's manual, or use the Multiblock Projector.", [4,1,2]);
            for(var i = 1; i<=5 ; i++){
                scene.world.showSection([2,i,2, 6,i,6], Facing.DOWN);
                scene.idle(15);
            }
            scene.idle(20);
            scene.addKeyframe();
            scene.idle(5);
            scene.text(60, "Once the multiblock is built, right click the correct block with the hammer.", [4.5,1.5,2.5]);
            scene.showControls(130, [4.5, 2, 2.5], "down")
                    .rightClick()
                    .withItem("immersiveengineering:hammer");
            scene.idle(70)
            scene.overlay.showOutline(PonderPalette.RED, "airgap", [4,1,2], 80);
            scene.text(60, "The correct block is highlighted in the manual.", [4.5,1.5,2.5]);
            var arc = scene.world.showIndependentSection([2,9,2, 6,13,6], Facing.DOWN);
            scene.world.moveSection(arc, [0,100,0], 0);
            scene.idle(40);
            scene.world.setBlocks([2,1,2, 6,5,6], "minecraft:air", false);          
            scene.world.moveSection(arc, [0,-108,0], 0);
            scene.idle(20);
            scene.text(60, "If the multiblock is built incorrectly, nothing happens instead.");
            scene.markAsFinished();
        })
})
