Ponder.tags((e) => {e.createTag("compression:botania", "botania:lexicon", "Botania", "For all your floral needs", ["#forge:petal_apothecary", "botania:pure_daisy"])})
//------------------------------------------------------------------
Ponder.registry((e) => {
//------------------------------------------------------------------
    //Petal Apothecary
        e.create("#forge:petal_apothecary")
            .scene("Apothecary", "Crafting Using Apothecary", "kubejs:botania_5x5", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([2,1,2], "botania:apothecary_default", false);
                scene.world.showSection([2,1,2], Facing.down);
                scene.idle(20);
                scene.overlay.showOutline(PonderPalette.GREEN, "airgap", [2,1,2], 60);
                scene.text(60, "This is a Petal Apothecary, it is heavily used in Botania for creating flowers", [2,1.5,2]);
                scene.idle(70);
                scene.text(60, "As an example let's make a pure daisy", [2,1.5,2])
                    .attachKeyFrame();
                scene.idle(70);
                scene.showControls(40, [2.5, 2.5, 2.5], "down")
                    .rightClick()
                    .withItem("minecraft:water_bucket");
                scene.idle(50);
                scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(5);
                scene.world.modifyBlock([2,1,2], () => Block.id("botania:apothecary_default").with("fluid", "water"), true);
                scene.idle(40);
                const petal1 = scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal");
                scene.idle(10);
                scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
                scene.idle(5);
                scene.world.modifyEntity(petal1, (r) => { r.discard()});
                scene.idle(10);
                const petal2 = scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal");
                scene.idle(10);
                scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
                scene.idle(5);
                scene.world.modifyEntity(petal2, (r) => { r.discard()});
                scene.idle(10);
                const petal3 = scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal");
                scene.idle(10);
                scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
                scene.idle(5);
                scene.world.modifyEntity(petal3, (r) => { r.discard()});
                scene.idle(10);
                const petal4 = scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "botania:white_petal");
                scene.idle(10);
                scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
                scene.idle(5);
                scene.world.modifyEntity(petal4, (r) => { r.discard()});
                scene.idle(10);
                scene.text(60, "With all the resources added we then need to add our catalyst to combine them", [2,1.5,2])
                    .attachKeyFrame();
                scene.idle(70);
                const seed = scene.world.createItemEntity([2.5, 5, 2.5], [0, 0, 0], "minecraft:wheat_seeds");
                scene.idle(10);
                scene.particles.simple(5, "splash", [2.5,2.5,2.5]).density(1);
                scene.idle(5);
                scene.world.modifyEntity(seed, (r) => {r.discard()});
                const daisy = scene.world.createItemEntity([2.5,2,2.5], [-0.1,0.5,-0.1], "botania:pure_daisy");
                scene.world.modifyBlock([2,1,2], () => Block.id("botania:apothecary_default").with("fluid", "empty"), true);
                scene.markAsFinished()
            });
    //Pure Daisy
        e.create("botania:pure_daisy")
            .scene("PureDaisy", "Utilising The Pure Daisy", "kubejs:botania_7x7", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([3,1,3], "botania:pure_daisy", false);
                scene.world.showSection([3,1,3], Facing.down);
                scene.idle(20);
                scene.overlay.showOutline(PonderPalette.WHITE, "airgap", [3,1,3], 60);
                scene.text(60, "This is a Pure Daisy it is a Functional Flower that changes blocks or fluids placed around it", [3,1.5,3]);
                scene.idle(70);
                scene.world.setBlock([2,1,2], "minecraft:stone",true);
                scene.world.showSection([2,1,2], Facing.down);
                scene.idle(5);
                scene.world.setBlock([3,1,2], "minecraft:stone",true);
                scene.world.showSection([3,1,2], Facing.down);
                scene.idle(5);
                scene.world.setBlock([4,1,2], "minecraft:stone",true);
                scene.world.showSection([4,1,2], Facing.down);
                scene.idle(5);
                scene.world.setBlock([4,1,3], "minecraft:stone",true);
                scene.world.showSection([4,1,3], Facing.down);
                scene.idle(5);
                scene.world.setBlock([4,1,4], "minecraft:stone",true);
                scene.world.showSection([4,1,4], Facing.down);
                scene.idle(5);
                scene.world.setBlock([3,1,4], "minecraft:stone",true);
                scene.world.showSection([3,1,4], Facing.down);
                scene.idle(5);
                scene.world.setBlock([2,1,4], "minecraft:stone",true);
                scene.world.showSection([2,1,4], Facing.down);
                scene.idle(5);
                scene.world.setBlock([2,1,3], "minecraft:stone",true);
                scene.world.showSection([2,1,3], Facing.down);
                scene.idle(5);
                scene.text(60, "Now we wait for a short period of time and the stone should be changed into livingrock", [3,1.5,3]);
                scene.idle(70);
                scene.particles.block(5, "botania:livingrock", [2.5,1.5,2.5]).density(5);
                scene.world.modifyBlock([2,1,2], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [3.5,1.5,2.5]).density(5);
                scene.world.modifyBlock([3,1,2], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [4.5,1.5,2.5]).density(5);
                scene.world.modifyBlock([4,1,2], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [4.5,1.5,3.5]).density(5);
                scene.world.modifyBlock([4,1,3], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [4.5,1.5,4.5]).density(5);
                scene.world.modifyBlock([4,1,4], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [3.5,1.5,4.5]).density(5);
                scene.world.modifyBlock([3,1,4], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [2.5,1.5,4.5]).density(5);
                scene.world.modifyBlock([2,1,4], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.particles.block(5, "botania:livingrock", [2.5,1.5,3.5]).density(5);
                scene.world.modifyBlock([2,1,3], () => Block.id("botania:livingrock"), true);
                scene.idle(5);
                scene.markAsFinished()
            });
    //Endoflame
        e.create("botania:endoflame")
            .scene("Endoflame", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([3,1,3], "botania:endoflame", false);
                scene.world.showSection([3,1,3], Facing.down);
                scene.idle(20);
                scene.overlay.showOutline(PonderPalette.WHITE, "airgap", [3,1,3], 60);
                scene.text(60, "This is an Endoflame it is a Mana Generating Flower that changes blocks or fluids placed around it", [3,1.5,3]);
                scene.idle(70);
                const coal = scene.world.createItemEntity([3.5, 3, 3.5], [0, 0, 0], "minecraft:coal");
                scene.idle(10);
                scene.world.modifyEntity(coal, (r) => { r.discard()});
                scene.particles.simple(40, "flame", [3.5,2.5,3.5]).density(2);
                scene.text(60, "Dropping fuel such as coal infront of the Endoflame will cause it to be consumed by the flower and generate mana", [3,1.5,3]);
                scene.idle(70);
                scene.addKeyframe();
                scene.world.modifyBlock([3,1,3], () => Block.id("minecraft:air"), true)
                scene.world.setBlock([5,1,3], "botania:endoflame", false);
                scene.world.showSection([5,1,3], Facing.down);
                scene.idle(10);
                scene.world.setBlock([3,1,3], "botania:mana_spreader", false);
                scene.world.showSection([3,1,3], Facing.east);
                scene.idle(10);
                scene.world.setBlock([1,1,3], "botania:mana_pool", false);
                scene.world.showSection([1,1,3], Facing.down);
                scene.idle(10);
                //scene.particles.dust(10, "#5fcf14", [3.5,1.5,3.5]).density(10).physics(false).motion([0,0,-1]).area([3,1,3], [1,1,3]).roll(10);
                scene.particles.simple(20, "glow", [3, 1.5, 3]).physics(false).area([1,1.5,3])
                });
                scene.markAsFinished()
            })
            //.scene("Endoflame Decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {



            //})
});
//------------------------------------------------------------------