//Forgive me, for i am about to sin.
const WispParticleData = Java.loadClass("vazkii.botania.client.fx.WispParticleData")
const ParticleTypes = Java.loadClass("net.minecraft.core.particles.ParticleTypes")

Ponder.tags((e) => {e.createTag("compression:botania", "botania:lexicon", "Botania", "For all your floral needs", ["#forge:petal_apothecary", "botania:pure_daisy", "botania:endoflame", "botania:entropinnyum", "botania:munchdew", "botania:gourmaryllis", "botania:narslimmus"])})
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
                var positions = [[2,1,2], [3,1,2], [4,1,2], [4,1,3], [4,1,4], [3,1,4], [2,1,4], [2,1,3]];
                positions.forEach((pos) => {
                    scene.world.setBlock(pos, "minecraft:smooth_stone",true);
                    scene.world.showSection(pos, Facing.down);
                    scene.idle(5);
                });
                scene.text(60, "Now we wait for a short period of time and the smooth stone should be changed into livingrock", [3,1.5,3]);
                scene.idle(70);
                positions.forEach((pos) => {
                    scene.particles.block(5, "botania:livingrock", [pos[0]+0.5, pos[1]+0.5, pos[2]+0.5]).density(5);
                    scene.world.modifyBlock(pos, () => Block.id("botania:livingrock"), true);
                    scene.idle(5);
                });
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


    //Entropinnyum                    
            e.create("botania:entropinnyum")
                .scene("entropinnyum", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                    scene.showBasePlate();
                    scene.idle(10);
                    scene.world.setBlock([3,1,3], "botania:entropinnyum", false);
                    scene.world.showSection([3,1,3], Facing.down);
                    scene.idle(20);
                    scene.text(50, "This is an Entropinnyum, one of the many mana generating flowers", [3,1.5,3]);
                    scene.idle(55);
                    scene.addKeyframe()
                    scene.world.setBlock([3,1,2], "minecraft:tnt", false);
                    scene.world.showSection([3,1,2], Facing.down);
                    scene.idle(25);
                    scene.world.setBlock([3,1,2], "minecraft:air", false);
                    scene.world.createEntity("minecraft:tnt", [3.5,1,2.5])
                    scene.idle(20)
                    scene.text(60, "It generates sizeable chunks of mana by absorbing TNT explosions", [3,1.5,3]);
                    scene.idle(60)
                    for(let i = 0;i<10; i++){
                        scene.particles.simple(5, "smoke", [3.5, 1, 2.5])
                        scene.idle(1)
                    }
                    scene.text(60, "TNT generated from a duplicator machine will function, but yield far less mana.", [3,1.5,3]);
                    scene.idle(30)
                    scene.world.createEntity("minecraft:tnt", [3.5,1,2.5])
                    scene.idle(50)
                    scene.text(60, "It will §cNOT§r absorb the explosion if its mana buffer is not empty!", [3,1.5,3]);
                    scene.addKeyframe()
                    scene.idle(30)
                    scene.world.modifyBlock([3,1,3], () => Block.id("minecraft:air"), true)
                    //kablooey
                    for(let i = 0;i<5;i++){
                        scene.particles.simple(1, "explosion", [3.5+(Math.random()*6-3),1+(Math.random()),2.5+(Math.random()*6-3)])
                    }
                    scene.idle(2)
                    for(let i = 0;i<5;i++){
                        scene.particles.simple(1, "explosion", [3.5+(Math.random()*6-3),1+(Math.random()),2.5+(Math.random()*6-3)])
                    }
                    scene.idle(30)
                    scene.addKeyframe()
                    spreaderLinking(scene, "entropinnyum")
                    scene.markAsFinished()
                    })
                    .scene("entropinnyum_decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {
                        scene.showBasePlate();
                        floralEntropy(scene, "entropinnyum", ["nyagibits_bytes:entropinnyum_mush", "immersiveengineering:blastbrick", "minecraft:gunpowder"], "minecraft:tnt")
                        scene.idle(45)
                        scene.addKeyframe()
                        scene.text(60, "I sure hope you got something to shut off the flow of primed tnt when that happens.", [3,1.5,3]).placeNearTarget();
                        scene.idle(40)
                        scene.world.createEntity("minecraft:tnt", [3.5,1,2.5])
                        scene.idle(25)
                        scene.text(60, "Otherwise...", [3,1.5,3]).placeNearTarget();
                        scene.idle(55)
                        scene.world.modifyBlock([3,1,3], () => Block.id("minecraft:air"), false)
                        //kablooey
                        for(let i = 0;i<5;i++){
                            scene.particles.simple(1, "explosion", [3.5+(Math.random()*6-3),1+(Math.random()),3.5+(Math.random()*6-3)])
                        }
                        scene.idle(2)
                        for(let i = 0;i<5;i++){
                            scene.particles.simple(1, "explosion", [3.5+(Math.random()*6-3),1+(Math.random()),3.5+(Math.random()*6-3)])
                        }
                        scene.markAsFinished()
                    });



        //Munchdew

            e.create("botania:munchdew")
                .scene("munchdew", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                    scene.showBasePlate();
                    scene.idle(10);
                    scene.world.setBlock([3,1,3], "botania:munchdew", false);
                    scene.world.showSection([3,1,3], Facing.down);
                    scene.idle(20);
                    scene.text(50, "This is a Munchdew, one of the many mana generating flowers", [3,1.5,3]);
                    scene.idle(55);
                    scene.addKeyframe()
                    var leaves = []
                    for(let x = 1; x<6; x++){
                        for(let z = 1; z<6; z++){
                            var pos = [x, 1, z]
                            if(!(x == 3 && z == 3)){
                                leaves.push(pos)
                                scene.world.setBlock(pos, "minecraft:oak_leaves", false);
                                scene.world.showSection(pos, Facing.down);
                                scene.idle(1)
                            }
                        }
                    }
                    leaves.sort(() => Math.random() - 0.5)
                    scene.text(100, "It generates mana by devouring any leaves in a\n17x16x17 cube at a rate of 5 blocks per second.", [3,1.5,3]);
                    scene.idle(10)
                    leaves.forEach((leaf) => {
                        scene.world.setBlock(leaf, "minecraft:air", true);
                        scene.idle(4)
                    })
                    scene.world.hideSection([3,1,1], Facing.down);
                    scene.world.hideSection([3,1,2], Facing.down);
                    scene.idle(20)
                    scene.addKeyframe();
                    scene.text(80, "Once it misses a chance to eat, it will stop and enter a 80s cooldown.", [3,1.5,3]);
                    scene.world.setBlock([3,1,1], "minecraft:oak_leaves", false)
                    scene.world.showSection([3,1,1], Facing.down);
                    scene.idle(10)
                    scene.world.setBlock([3,1,1], "minecraft:air", true)
                    scene.idle(20)
                    scene.world.setBlock([3,1,2], "minecraft:oak_leaves", false)
                    scene.world.showSection([3,1,2], Facing.down);
                    scene.idle(40)

                    scene.world.hideSection(util.select.layer(1), Facing.up);
                    scene.idle(15)
                    scene.addKeyframe()
                    spreaderLinking(scene, "munchdew")
                    scene.markAsFinished()
                    })
                    .scene("munchdew_decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {
                        scene.showBasePlate();
                        floralEntropy(scene, "munchdew", ["nyagibits_bytes:munchdew_mush", "nyagibits_bytes:raw_petrified_wood", "byg:leaf_pile"], "minecraft:mangrove_propagule")
                        scene.markAsFinished()
                    });

        //Gourmaryllis

            e.create("botania:gourmaryllis")
                .scene("gourmaryllis", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                    scene.showBasePlate();
                    scene.idle(10);
                    scene.world.setBlock([3,1,3], "botania:gourmaryllis", false);
                    scene.world.showSection([3,1,3], Facing.down);
                    scene.idle(20);
                    scene.text(50, "This is a Gourmaryllis, one of the many mana generating flowers", [3,1.5,3]);
                    scene.idle(55);
                    scene.addKeyframe()
                    const apple = scene.world.createItemEntity([2.5, 4, 2.5], [0, 0.1, 0], "minecraft:apple");
                    scene.idle(10)
                    scene.world.modifyEntity(apple, (r) => { r.discard() });
                    scene.text(60, "It generates mana by consuming food items dropped within a block of it.", [3,1.5,3]);
                    for(let i = 0;i<10;i++){
                        scene.particles.item(2, "minecraft:apple", [3.1, 1.8, 3.3]).motion([(Math.random()-0.5)/5,(Math.random())/5,(Math.random()-0.5)/5])
                        scene.idle(4)
                    }
                    scene.idle(25)
                    scene.addKeyframe()
                    const steak = scene.world.createItemEntity([2.5, 4, 2.5], [0, 0.1, 0], "minecraft:cooked_beef");
                    scene.idle(10)
                    scene.world.modifyEntity(steak, (r) => { r.discard() });
                    scene.text(80, "The more nutritious a food is, the longer it takes to digest.\nHowever, the generated mana scales up exponentially.", [3,1.5,3]);
                    for(let i = 0;i<20;i++){
                        scene.particles.item(2, "minecraft:cooked_beef", [3.1, 1.8, 3.3]).motion([(Math.random()-0.5)/5,(Math.random())/5,(Math.random()-0.5)/5])
                        scene.idle(4)
                    }
                    scene.idle(10)
                    scene.addKeyframe()
                    const steak2 = scene.world.createItemEntity([2.5, 4, 2.5], [0, 0.1, 0], "minecraft:cooked_beef");
                    scene.idle(10)
                    scene.world.modifyEntity(steak2, (r) => { r.discard() });
                    scene.text(80, "Only a single item at a time can be digested.\nAny more food in the meantime\n§cwill be wasted.", [3,1.5,3]);
                    var steak3
                    for(let i = 0;i<20;i++){
                        
                        if(i==10) steak3 = scene.world.createItemEntity([2.5, 4, 2.5], [0, 0.1, 0], "minecraft:cooked_beef");
                        if(i==12) scene.world.modifyEntity(steak3, (r) => { r.discard() });
                        scene.particles.item(2, "minecraft:cooked_beef", [3.1, 1.8, 3.3]).motion([(Math.random()-0.5)/5,(Math.random())/5,(Math.random()-0.5)/5])
                        scene.idle(4)
                    }
                    scene.idle(10)
                    scene.addKeyframe()
                    var foods = ["minecraft:cod", "minecraft:cookie", "minecraft:glow_berries", "minecraft:sweet_berries", "farmersdelight:minced_beef", "farmersdelight:bacon", "minecraft:mutton", "minecraft:chicken"]
                    scene.text(80, "Variety is key. The more varied the foods are, the more mana it will produce, capping out at 8 different foods.", [3,1.5,3]);
                    foods.forEach((food) => {
                        var foodItem = scene.world.createItemEntity([2.5, 3, 2.5], [0, 0.1, 0], food);
                        scene.idle(5)
                        scene.world.modifyEntity(foodItem, (r) => { r.discard() });
                        for(let i = 0;i<5;i++){
                            scene.particles.item(1, food, [3.1, 1.8, 3.3]).motion([(Math.random()-0.5)/5,(Math.random())/5,(Math.random()-0.5)/5])
                            scene.idle(1)
                        }
                    })
                    scene.idle(15)
                    scene.addKeyframe()
                    scene.text(80, "However, using the same food multiple times in a row slows digestion and gives severely diminishing returns.", [3,1.5,3]);
                    var bread = scene.world.createItemEntity([2.5, 3, 2.5], [0, 0.1, 0], "minecraft:bread");
                    scene.idle(5)
                    scene.world.modifyEntity(bread, (r) => { r.discard() });
                    for(let i = 0;i<5;i++){
                        scene.particles.item(2, "minecraft:bread", [3.1, 1.8, 3.3]).motion([(Math.random()-0.5)/5,(Math.random())/5,(Math.random()-0.5)/5])
                        scene.idle(4)
                    }
                    scene.idle(5)
                    var bread2 = scene.world.createItemEntity([2.5, 3, 2.5], [0, 0.1, 0], "minecraft:bread");
                    scene.idle(5)
                    scene.world.modifyEntity(bread2, (r) => { r.discard() });
                    for(let i = 0;i<5;i++){
                        scene.particles.item(2, "minecraft:bread", [3.1, 1.8, 3.3]).motion([(Math.random()-0.5)/5,(Math.random())/5,(Math.random()-0.5)/5])
                        scene.idle(8)
                    }
                    scene.idle(10)
                    scene.world.hideSection([3,1,3], Facing.up)
                    scene.idle(15)
                    scene.addKeyframe()
                    spreaderLinking(scene, "gourmaryllis")
                    scene.markAsFinished()
                    })
                    .scene("gourmaryllis_decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {
                        scene.showBasePlate();
                        floralEntropy(scene, "gourmaryllis", ["nyagibits_bytes:gourmaryllis_mush", "nyagibits_bytes:mixed_seeds", "farmersdelight:rotten_tomato"], "architects_palette:bread_slab")
                        scene.markAsFinished()
                    });



            //Narslimmus

            e.create("botania:narslimmus")
                .scene("narslimmus", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                    scene.showBasePlate();
                    scene.idle(10);
                    scene.world.setBlock([3,1,3], "botania:narslimmus", false);
                    scene.world.showSection([3,1,3], Facing.down);
                    scene.idle(20);
                    scene.text(50, "This is a Narslimmus, one of the many mana generating flowers", [3,1.5,3]);
                    scene.idle(55);
                    scene.addKeyframe()
                    scene.text(70, "It generates mana by absorbing any slime mobs that wander within 2 blocks of the flower", [3,1.5,3]);
                    scene.idle(20)
                    const slime = scene.world.createEntity("minecraft:slime", [2.5,1,2.5], b => {
                        b.load("{Size: 1, Pos: [2.5d, 1d, 2.5d], Rotation: [135.0f, 0.0f]}")
                    })
                    scene.idle(30)
                    scene.world.modifyEntity(slime, (r) => { r.discard() });
                    for(let i = 0;i<10;i++) scene.particles.item(1, "minecraft:slime_ball", [2.5,1,2.5]).motion([(Math.random()-0.5)/3, (Math.random())/3, (Math.random()-0.5)/3])
                    scene.idle(25)
                    scene.addKeyframe()
                    scene.text(60, "Larger slimes will produce more mana.", [3,1.5,3]);
                    scene.idle(20)
                    const slimeBig = scene.world.createEntity("minecraft:slime", [2.5,1,2.5], b => {
                        b.load("{Size: 3, Pos: [2.5d, 1d, 2.5d], Rotation: [135.0f, 0.0f]}")
                    })
                    scene.idle(30)
                    scene.world.modifyEntity(slimeBig, (r) => { r.discard() });
                    for(let i = 0;i<30;i++) scene.particles.item(1, "minecraft:slime_ball", [2.5,1,2.5]).motion([(Math.random()-0.5)/2, (Math.random())/2, (Math.random()-0.5)/2])
                    scene.idle(25)
                    scene.addKeyframe()
                    scene.showControls(80, [3,2,3], "down").withItem(Item.of("botania:slime_bottle", "{active:1b}"));
                    scene.text(80, "The slime must be naturally spawned. Use the slime in a bottle to find a suitable location.", [3,1.5,3]);
                    scene.idle(75)
                    scene.world.hideSection([3,1,3], Facing.up)
                    scene.idle(15)
                    scene.addKeyframe()
                    spreaderLinking(scene, "narslimmus")
                    scene.markAsFinished()
                    })
                    .scene("narslimmus_decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {
                        scene.showBasePlate();
                        floralEntropy(scene, "narslimmus", ["nyagibits_bytes:narslimmus_mush", "minecraft:slime_ball", "botania:rune_wrath"], "minecraft:slime_block")
                        scene.markAsFinished()
                    });                    


            //Hydroangeas

            e.create("botania:hydroangeas")
                .scene("hydroangeas", "Generating Mana", "kubejs:botania_7x7", (scene, util) => {
                    scene.showBasePlate();
                    scene.idle(10);
                    scene.world.setBlock([3,1,3], "botania:hydroangeas", false);
                    scene.world.showSection([3,1,3], Facing.down);
                    scene.idle(20);
                    scene.text(50, "This is a Hydroangeas, one of the many mana generating flowers", [3,1.5,3]);
                    scene.idle(55);
                    scene.addKeyframe()
                    var positions = [[2,1,3], [2,1,3], [4,1,3], [3,1,4], [2,1,1], [4,1,1], [2,1,5], [4,1,5], [1,1,2], [1,1,4], [5,1,2], [5,1,4]]
                    positions.forEach((pos) => {
                        scene.world.setBlock(pos, "minecraft:cobblestone",true);
                        scene.world.showSection(pos, Facing.down);
                        scene.idle(2);
                    });
                    var water = [[2,1,2], [2,1,4], [4,1,2], [4,1,4]]
                    water.forEach((pos) => {
                        scene.world.setBlock(pos, "minecraft:water",true);
                        scene.world.showSection(pos, Facing.down);
                        scene.idle(2);
                    });
                    scene.text(70, "It generates small amounts of mana by absorbing source water blocks around it.", [3,1.5,3]);
                    scene.idle(75)
                    water.forEach((pos) => {
                        scene.world.setBlock(pos, "minecraft:air",true);
                        scene.idle(15);
                    });
                    scene.idle(10)
                    scene.text(70, "Rainy weather can speed up the production rate, but it is still meager.", [3,1.5,3]);
                    scene.idle(75)
                    scene.addKeyframe()
                    spreaderLinking(scene, "hydroangeas")
                    scene.markAsFinished()
                    })
                    .scene("hydroangeas_decay","Decaying Flowers", "kubejs:botania_7x7", (scene, util) => {
                        scene.showBasePlate();
                        floralEntropy(scene, "hydroangeas", ["nyagibits_bytes:hydroangeas_mush", "minecraft:pufferfish", "minecraft:seagrass"], "minecraft:tube_coral_block")
                        scene.idle(45)
                        scene.text(70, "Note: The normal 3-day decay timer of the hydroangeas is disabled here.", [3,1.5,3]);
                        scene.idle(75)
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
    var itemEntities = []
    items.forEach((item) => {
        itemEntities.push(scene.world.createItemEntity([3.5, 1.5, 3.5], [(Math.random()-0.5)/3,(Math.random()/2),(Math.random()-0.5)/3], item))
    })
    scene.idle(20)
    scene.text(65, "It will crumble into a pile of mush and some other items.", [3,1.5,3]).placeNearTarget();
    //Yeah, you can just do this to show an item without any controls. neat, huh
    scene.showControls(100, [3.5,2,3.5], "down")
                    .withItem(items[0]);
    scene.idle(70) 
    //Ngl, the timings around these keep feeling off. Adjust as needed.
    scene.text(65, "A block can also get left behind where the flower once stood.", [3,1.5,3]).placeNearTarget();
    scene.idle(70)
    scene.text(70, "You will need the mush for progression.\nBetter automate flower production!", [3,1.5,3]).placeNearTarget();
    scene.idle(30)
    itemEntities.forEach((item) => {
        scene.world.modifyEntity(item, (r) => { r.discard() })
    })
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
