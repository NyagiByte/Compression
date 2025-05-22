//Forgive me, for i am about to sin.
const WispParticleData = Java.loadClass("vazkii.botania.client.fx.WispParticleData")
const ParticleTypes = Java.loadClass("net.minecraft.core.particles.ParticleTypes")

Ponder.tags((e) => {e.createTag("compression:botania", "botania:lexicon", "Botania", "For all your floral needs", ["#forge:petal_apothecary", "botania:pure_daisy", "botania:endoflame"])})
//------------------------------------------------------------------
Ponder.registry((e) => {
//------------------------------------------------------------------
    //Petal Apothecary
        e.create("#forge:petal_apothecary")
            .scene("apothecary", "Crafting Using Apothecary", "kubejs:botania_5x5", (scene, util) => {
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
            .scene("pure_daisy", "Utilising The Pure Daisy", "kubejs:botania_7x7", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([3,1,3], "botania:pure_daisy", false);
                scene.world.showSection([3,1,3], Facing.down);
                scene.idle(20);
                scene.overlay.showOutline(PonderPalette.WHITE, "airgap", [3,1,3], 60);
                scene.text(60, "This is a Pure Daisy it is a Functional Flower that changes blocks or fluids placed around it", [3,1.5,3]);
                scene.idle(70);
                scene.world.setBlock([2,1,2], "minecraft:smooth_stone",true);
                scene.world.showSection([2,1,2], Facing.down);
                scene.idle(5);
                scene.world.setBlock([3,1,2], "minecraft:smooth_stone",true);
                scene.world.showSection([3,1,2], Facing.down);
                scene.idle(5);
                scene.world.setBlock([4,1,2], "minecraft:smooth_stone",true);
                scene.world.showSection([4,1,2], Facing.down);
                scene.idle(5);
                scene.world.setBlock([4,1,3], "minecraft:smooth_stone",true);
                scene.world.showSection([4,1,3], Facing.down);
                scene.idle(5);
                scene.world.setBlock([4,1,4], "minecraft:smooth_stone",true);
                scene.world.showSection([4,1,4], Facing.down);
                scene.idle(5);
                scene.world.setBlock([3,1,4], "minecraft:smooth_stone",true);
                scene.world.showSection([3,1,4], Facing.down);
                scene.idle(5);
                scene.world.setBlock([2,1,4], "minecraft:smooth_stone",true);
                scene.world.showSection([2,1,4], Facing.down);
                scene.idle(5);
                scene.world.setBlock([2,1,3], "minecraft:smooth_stone",true);
                scene.world.showSection([2,1,3], Facing.down);
                scene.idle(5);
                scene.text(60, "Now we wait for a short period of time and the smooth stone should be changed into livingrock", [3,1.5,3]);
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
            .scene("endoflame", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);
                scene.world.setBlock([3,1,3], "botania:endoflame", false);
                scene.world.showSection([3,1,3], Facing.down);
                scene.idle(20);
                scene.text(50, "This is an Endoflame, one of the many mana generating flowers", [3,1.5,3]);
                scene.idle(55);
                const coal = scene.world.createItemEntity([2.5, 3, 2.5], [0, 0, 0], "minecraft:coal");
                scene.idle(10);
                //Looks like using the scene particle spawner inside of this is a no-go.
                scene.world.modifyEntity(coal, (r) => { 
                    r.getLevel().addParticle(ParticleTypes.FLAME, r.getX(), r.getY(), r.getZ(), 0,0,0)
                    r.getLevel().addParticle(ParticleTypes.LARGE_SMOKE, r.getX(), r.getY()+0.1, r.getZ(), 0,0,0)
                    r.discard(); 
                });
                scene.particles.simple(40, "flame", [3.2,1.75,3.4]).density(1);
                scene.text(60, "Dropping fuel such as coal near the Endoflame will cause it to be consumed by the flower and generate mana", [3,1.5,3]);
                scene.idle(70);
                scene.addKeyframe()
                scene.text(80, "The flower will consume most furnace fuel in a 7x7 square, centered on itself\n(Consumption sped up for demonstration)", [3,1.5,3]);
                var fuels = ["oak_log", "oak_planks", "stick", "bamboo", "charcoal", "dried_kelp_block", "oak_stairs", "blaze_rod"]
                var items = []
                fuels.forEach((fuel) => {
                    items.push(scene.world.createItemEntity([Math.random()*7, 1, Math.random()*7], [0, 0.2, 0], "minecraft:"+fuel))
                    scene.idle(1)
                })
                scene.idle(30)
                items.forEach((item) => {
                    scene.world.modifyEntity(item, (r) => { 
                        r.getLevel().addParticle(ParticleTypes.FLAME, r.getX(), r.getY(), r.getZ(), 0,0,0)
                        r.getLevel().addParticle(ParticleTypes.LARGE_SMOKE, r.getX(), r.getY()+0.1, r.getZ(), 0,0,0)
                        r.discard(); 
                    });
                    scene.particles.simple(5, "flame", [3.2,1.75,3.4]).density(1);
                    scene.idle(5)
                })           
                scene.idle(5)
                scene.world.hideSection([3,1,3], Facing.up)
                scene.idle(20)
                scene.world.modifyBlock([3,1,3], () => Block.id("minecraft:air"), false)
                scene.addKeyframe();
                spreaderLinking(scene, "endoflame")
                scene.markAsFinished()
                })
                .scene("endoflame_decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {
                    scene.showBasePlate();
                    floralEntropy(scene, "endoflame", ["nyagibits_bytes:endoflame_mush", "create:empty_blaze_burner", "supplementaries:ash"], "minecraft:campfire")
                    scene.markAsFinished()
                });
        });


//This function sets up a scene that illustrates the floral entropy mechanic
//the items parameter should be an array of the possible drops, ideally with the mush as the first one.
function floralEntropy(scene, flower, items, block){
    scene.addKeyframe()
    scene.idle(10)
    scene.world.setBlock([3,1,3], "botania:"+flower, false);
    scene.world.showSection([3,1,3], Facing.down);
    scene.text(75, "§cEntropy comes for all. \n§rThese flowers cannot handle the stress of generating mana forever.", [3,1.5,3]).placeNearTarget();
    scene.idle(80);
    scene.text(55, "After enough time has passed and enough mana has been generated...", [3,1.5,3]).placeNearTarget();
    scene.idle(60)
    scene.addKeyframe()
    scene.text(15, "§c§kgibberishtextgobrrr\n§c§knoneedtotranslatethis\n§c§kitisjustforvisualflair", [3,1.5,3]).placeNearTarget();
    scene.world.setBlock([3,1,3], block, true);
    items.forEach((item) => {
        scene.world.createItemEntity([3.5, 1.5, 3.5], [(Math.random()-0.5)/3,(Math.random()/2),(Math.random()-0.5)/3], item)
    })
    scene.idle(20)
    scene.text(65, "It will crumble into a pile of mush and some other items.", [3,1.5,3]).placeNearTarget();
    //Yeah, you can just do this to show an item without any controls. neat, huh
    scene.showControls(55, [3.5,2,3.5], "down")
                    .withItem(items[0]);
    scene.idle(70) 
    //Ngl, the timings around these keep feeling off. Adjust as needed.
    scene.text(65, "A block can also get left behind where the flower once stood.", [3,1.5,3]).placeNearTarget();
    scene.idle(70)
    scene.text(90, "You will need the mush for progression.\nBetter automate flower production!", [3,1.5,3]).placeNearTarget();
    scene.idle(30)
}

// This function can be called to generate the sequence explaining linking flowers to spreaders.
// Pass it the scene object and the name of the flower you want to show up
function spreaderLinking(scene, flower){
    scene.text(65, "To use a mana generating flower, it must be connected to a mana spreader", [5.5,1.5,3.5]).placeNearTarget();
    scene.world.setBlock([5,1,3], "botania:mana_spreader", false);
    scene.world.showSection([5,1,3], Facing.east);
    scene.idle(35);
    scene.world.setBlock([1,1,3], "botania:mana_pool", false);
    scene.world.showSection([1,1,3], Facing.down);
    scene.idle(35);
    scene.text(50, "Either place the flower near an existing spreader...", [5.5,1.5,1.5]).placeNearTarget();
    scene.world.setBlock([5,1,1], "botania:"+flower, false);
    scene.world.showSection([5,1,1], Facing.down);
    scene.idle(55)
    scene.text(85, "...or link it manually with a Wand of the Forest", [5.5,1.5,1.5]).placeNearTarget();
    scene.idle(20)
    scene.showControls(35, [5.5,2,1.5], "down")
                    .rightClick()
                    .whileSneaking()
                    .withItem("botania:twig_wand");
    scene.overlay.showOutline(PonderPalette.WHITE, "airgap", [5,1,1], 40);                    
    scene.idle(35)
    scene.showControls(35, [5.5,2,3.5], "down")
                    .rightClick()
                    .withItem("botania:twig_wand");
    scene.overlay.showOutline(PonderPalette.WHITE, "airgap", [5,1,3], 40);                    
    scene.idle(35)
    //It's slightly offset because it looks nicer. Fiddle with it if needed
    //NOTE: this calls scene.idle, take that into account
    manaBurst(scene, [5.75, 0.55, 4.55], [2.75, 0.55, 4.55], 20, 1)
    scene.world.modifyBlockEntityNBT([1,1,3], true, (nbt) => {
        nbt.mana = 160;
    })

}

//Oh boy here we go.
//First off, look at the const at the top of this file, and add it if you don't have it in yours.
//Parameters in order. Scene object, start position x, y, z, end position x, y, z, time in ticks to get from start to end and size multiplier (optional)
function manaBurst(scene, start, end, time, size){
    //Calculate the travel distance in each of the 3 axis
    var dX = end[0]-start[0]
    var dY = end[1]-start[1]
    var dZ = end[2]-start[2]
    //And the step size
    dX = (dX/time)
    dY = (dY/time)
    dZ = (dZ/time)

    //Spawn a mana burst, position is irrelevant, it doesn't work.
    const burst = scene.world.createEntity("botania:mana_burst", [0,0,0], b => {
        //All of these are needed for the burst to show up. We set the starting position here.        
        b.load("{color: 2162464, Pos:["+start[0]+"d,"+start[1]+"d,"+start[2]+"d], startingMana: 160, mana: "+(160*size)+", shooterUUID: 0}")
    })
    //This is just for a bit of visual flair at the start of the burst
    for(let n = 0; n<5; n++){
        scene.world.modifyEntity(burst, (r) => {
            r.getLevel().addParticle(WispParticleData.wisp(0.25*size,0.125,1,0.125,false),r.getX(),r.getY(),r.getZ(), (Math.random()-0.5)/25,(Math.random()-0.5)/25,(Math.random()-0.5)/25)
        });
    }

    for(let i = 0; i<time; i++){
        scene.world.modifyEntity(burst, (r) => {
            //Spawn the missing central particle at the burst's location.
            r.getLevel().addParticle(WispParticleData.wisp(0.25*size,0.125,1,0.125,false),r.getX(),r.getY(),r.getZ(), 0,0,0)
            //Move the burst. This is jank. Just setting it to the value of a variable won't work.
            r.setX(r.getX()+dX)
            r.setY(r.getY()+dY)
            r.setZ(r.getZ()+dZ)
        });
        //Wait until the next tick
        scene.idle(1)
    }
    //I don't want to import the other particle. So just spawn a bunch of particles to indicate impact.
    for(let n = 0; n<10; n++){
        scene.world.modifyEntity(burst, (r) => {
            r.getLevel().addParticle(WispParticleData.wisp(0.15*size,0.125,1,0.125,false),r.getX(),r.getY(),r.getZ(), (Math.random()-0.5)/25,(Math.random()-0.5)/25,(Math.random()-0.5)/25)
        });
    }
    //Finally, discard the burst so that it doesn't linger.
    scene.world.modifyEntity(burst, (r) => r.discard())

}

            
//------------------------------------------------------------------
