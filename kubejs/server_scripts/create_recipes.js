ServerEvents.recipes(event => {
    //Create

    //------------------------------------------------------------------
    //Create Shapeless
    event.shapeless(Item.of('create:sand_paper', '{Damage:0}'),['minecraft:paper', 'nyagibits_bytes:crude_abrasive'])
    //------------------------------------------------------------------
    //Create Shaped
        //Shaft
            event.remove({output: 'create:shaft'});
            event.shaped(Item.of('create:shaft', 8), 
                [ 
                    'A', 
                    'A'  
                ],
                {
                    A: 'nyagibits_bytes:livisite_alloy'
                }
                )
        //Small Cog
            event.remove({output: 'create:cogwheel'});
            event.shaped(Item.of('create:cogwheel', 2), [
                    'CA ',
                    'CBC',
                    ' AC'
                ], {
                    A: 'create:shaft',
                    B: 'botania:livingwood_planks_slab',
                    C: 'botania:livingwood_planks_stairs'
            })
        //Large Cog
            event.remove({output: 'create:large_cogwheel'});
            event.shaped(Item.of('create:large_cogwheel', 2), [
                'CAC',
                'BDB',
                'CAC'
            ], {
                A: 'create:shaft',
                B: 'botania:stripped_livingwood_slab',
                C: 'botania:livingwood_planks_stairs',
                D: 'create:cogwheel'
            })
        //Water Wheel
            event.remove({output: 'create:water_wheel'});
            event.shaped(Item.of('create:water_wheel'), [
                'ABA',
                'CDC',
                'ABA'
            ], {
                A: 'botania:livingwood_fence',
                B: 'create:large_cogwheel',
                C: 'botania:livingwood_slab',
                D: 'create:andesite_casing'
            })
        //Basin
            event.remove({output: 'create:basin'});
            event.shaped(Item.of('create:basin'), [
                'A A',
                'ABA'
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: 'botania:livingrock_bricks'
            })
        //Depot
            event.remove({output: 'create:depot'});
            event.shaped(Item.of('create:depot'), [
                'ABA'
            ], {
                A: 'botania:livingrock_stairs',
                B: 'create:andesite_alloy_block'
            })
        //Press
            event.remove({output: 'create:mechanical_press'});
            event.shaped(Item.of('create:mechanical_press'), [
                'A',
                'B',
                'C'
            ], {
                A: 'create:piston_extension_pole',
                B: 'create:vertical_gearbox',
                C: 'quark:iron_plate'
            })
    //------------------------------------------------------------------
    //Create right click recipies
        //Andesite Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
                event.shapeless('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
            event.recipes.createDeploying('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
    //------------------------------------------------------------------
    //Create Sandpaper
        //Polished Living Rock
            event.recipes.createSandpaperPolishing('botania:polished_livingrock',['botania:livingrock'])
    //------------------------------------------------------------------
})