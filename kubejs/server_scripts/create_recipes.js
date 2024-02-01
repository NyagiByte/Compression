ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Shapeless
        e.shapeless(Item.of('create:sand_paper', '{Damage:0}'),['minecraft:paper', 'nyagibits_bytes:crude_abrasive'])
//------------------------------------------------------------------
    //Shaped
        //Shaft
            e.shaped('8x create:shaft', 
                [ 
                    'A', 
                    'A'  
                ], {
                    A: 'nyagibits_bytes:livisite_alloy'
                }).id('compression:compression/create/shaped/shaft')
        //Small Cog
            //Tier 0
                e.shaped('2x create:cogwheel', 
                    [
                        'CA ',
                        'CBC',
                        ' AC'
                    ], {
                        A: 'create:shaft',
                        B: 'botania:livingwood_planks_slab',
                        C: 'botania:livingwood_planks_stairs'
                    }).id('compression:compression/create/shaped/cogwheel/tier0')
            //Tier 1
                e.shaped('16x create:cogwheel', 
                    [
                        'CAD',
                        'CBC',
                        'DAC'
                    ], {
                        A: 'create:shaft',
                        B: 'botania:livingwood_planks_slab',
                        C: 'botania:livingwood_planks_stairs',
                        D: 'create:brass_nugget'
                    }).id('compression:compression/create/shaped/cogwheel/tier1')
        //Large Cog
            e.shaped('2x create:large_cogwheel',
                [
                    'CAC',                                                                                          
                    'BDB',
                    'CAC'
                ], {
                    A: 'create:shaft',
                    B: 'botania:stripped_livingwood_slab',
                    C: 'botania:livingwood_planks_stairs',
                    D: 'create:cogwheel'
                }).id('compression:compression/create/shaped/large_cogwheel')
        //Water Wheel
            e.shaped('create:water_wheel',
                [
                    'ABA',
                    'CDC',
                    'ABA'
                ], {
                    A: 'botania:livingwood_fence',
                    B: 'create:large_cogwheel',
                    C: 'botania:livingwood_slab',
                    D: 'create:andesite_casing'
                }).id('compression:compression/create/shaped/water_wheel')
        //Basin
            e.shaped('create:basin',
                [
                    'A A',
                    'ABA'
                ], {
                    A: 'nyagibits_bytes:livisite_alloy',
                    B: 'botania:livingrock_bricks'
                }).id('compression:compression/create/shaped/basin')
        //Depot
            e.shaped('create:depot',
                [
                    'ABA'
                ], {
                    A: 'botania:livingrock_stairs',
                    B: 'create:andesite_alloy_block'
                }).id('compression:compression/create/shaped/depot')
        //Press
            //Tier 0
                e.shaped('create:mechanical_press',
                    [
                        'A',
                        'B',
                        'C'
                    ], {
                        A: 'create:piston_extension_pole',
                        B: 'create:vertical_gearbox',
                        C: 'quark:iron_plate'
                    }).id('compression:compression/create/shaped/mechanical_press')
        //Whisk
            e.shaped('create:whisk',
                [
                    ' A ',
                    'BAB',
                    'BBB'
                ], {
                    A: 'nyagibits_bytes:livisite_alloy',
                    B: 'create:iron_sheet'
                }).id('compression:compression/create/shaped/whisk')
        //Belt
            e.shaped('create:belt_connector',
                [
                    'BAB'
                ], {
                    A: 'thermal:rubber',
                    B: 'immersiveengineering:hemp_fiber'
                }).id('compression:compression/create/shaped/belt_connector')  
        //Drill
            //Tier 0
                e.shaped('create:mechanical_drill',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:andesite_casing',
                        E: 'thermal:drill_head'
                    }).id('compression:compression/create/shaped/mechanical_drill/tier0')  
            //Tier 1
                e.shaped('2x create:mechanical_drill',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:brass_casing',
                        E: 'thermal:drill_head'
                    }).id('compression:compression/create/shaped/mechanical_drill/tier1')   
        //Saw
            //Tier 0
                e.shaped('create:mechanical_saw',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:andesite_casing',
                        E: 'thermal:saw_blade'
                    }).id('compression:compression/create/shaped/mechanical_saw/tier0')     
            //Tier 1
                e.shaped('2x create:mechanical_saw',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:brass_casing',
                        E: 'thermal:saw_blade'
                    }).id('compression:compression/create/shaped/mechanical_saw/tier1') 
        //Harvester
            //Tier 0
                e.shaped('create:mechanical_harvester',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:andesite_casing',
                        E: 'quark:grate'
                    }).id('compression:compression/create/shaped/mechanical_harvester/tier0')   
            //Tier 1
                e.shaped(Item.of('2x create:mechanical_harvester'), [
                    ' AB',
                    'CDE',
                    ' AB'
                ], {
                    A: 'create:industrial_iron_block',
                    B: 'nyagibits_bytes:livisite_alloy',
                    C: 'create:shaft',
                    D: 'create:brass_casing',
                    E: 'quark:grate'
                }).id('compression:compression/create/shaped/mechanical_harvester/tier1')  
        //Fan
            //Tier 0
                e.shaped('create:encased_fan',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:andesite_casing',
                        E: 'create:propeller'
                    }).id('compression:compression/create/shaped/encased_fan/tier0')  
            //Tier 1
                e.shaped('2x create:encased_fan',
                    [
                        ' AB',
                        'CDE',
                        ' AB'
                    ], {
                        A: 'create:industrial_iron_block',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'create:shaft',
                        D: 'create:brass_casing',
                        E: 'create:propeller'
                    }).id('compression:compression/create/shaped/encased_fan/tier1')    
        //Millstone
            //Tier 0
                e.shaped('create:millstone',
                    [
                        ' A ',
                        'BCB',
                        'DED'
                    ], {
                        A: 'create:chute',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'nyagibits_bytes:pile_of_cogs',
                        D: 'nyagibits_bytes:polished_livisite',
                        E: 'create:andesite_casing'
                    }).id('compression:compression/create/shaped/millstone/tier0')     
            //Millstone - T1
                e.shaped('2x create:millstone',
                    [
                        ' A ',
                        'BCB',
                        'DED'
                    ], {
                        A: 'create:chute',
                        B: 'nyagibits_bytes:livisite_alloy',
                        C: 'nyagibits_bytes:pile_of_cogs',
                        D: 'nyagibits_bytes:polished_livisite',
                        E: 'create:brass_casing'
                    }).id('compression:compression/create/shaped/millstone/tier1') 
        //Blaze Burner
            e.shaped('create:empty_blaze_burner',
                [
                    'A A',
                    'BCB',
                    'DED'
                ], {
                    A: 'quark:iron_plate_stairs',
                    B: 'create:ornate_iron_window_pane',
                    C: 'minecraft:netherrack',
                    D: 'pneumaticcraft:ingot_iron_compressed',
                    E: 'minecraft:blast_furnace'
                }).id('compression:compression/create/shaped/empty_blaze_burner')  
        //Brass Hand
            e.shaped('create:brass_hand',
                [
                    ' A ',
                    'BCB',
                    ' B '
                ], {
                    A: 'nyagibits_bytes:livisite_alloy',
                    B: 'create:brass_nugget',
                    C: 'create:brass_ingot'
                }).id('compression:compression/create/shaped/brass_hand')  
        //Hand Crank
            e.shaped('create:hand_crank',
                [
                    'AAB',
                    ' CD'
                ], {
                    A: 'nyagibits_bytes:etched_living_wood',
                    B: 'nyagibits_bytes:pile_of_cogs',
                    C: 'create:brass_nugget',
                    D: 'create:shaft'
                }).id('compression:compression/create/shaped/hand_crank')  
        //Rose Quartz
            //Tier 0
                e.shaped('2x create:rose_quartz',
                    [
                        'ABA',
                        'CDC',
                        'ACA'
                    ], {
                        A: 'minecraft:redstone',
                        B: 'minecraft:red_dye',
                        C: 'quark:clear_shard',
                        D: 'minecraft:quartz'
                    }).id('compression:compression/create/shaped/rose_quartz/tier0')   
            //Tier 1
                e.shaped('8x create:rose_quartz',
                    [
                        'ABA',
                        'CDC',
                        'ACA'
                    ], {
                        A: 'minecraft:redstone',
                        B: 'minecraft:red_dye',
                        C: 'quark:clear_shard',
                        D: 'nyagibits_bytes:raw_rose_quartz'
                    }).id('compression:compression/create/shaped/rose_quartz/tier1') 
        //Crafter
            e.shaped('8x create:mechanical_crafter',
                [
                    'ABA',
                    'CDC'
                ], {
                    A: 'nyagibits_bytes:pile_of_cogs',
                    B: 'create:brass_casing',
                    C: 'create:shaft',
                    D: 'create:belt_connector'
                }).id('compression:compression/create/shaped/mechanical_crafter')
        //Wrench
            e.shaped('create:wrench',
                [
                    'AD',
                    'AC',
                    ' B'
                ], {
                    A: 'create:golden_sheet',
                    B: '#minecraft:wooden_fences',
                    C: 'create:cogwheel',
                    D: 'minecraft:gold_nugget'
                }).id('compression:compression/create/shaped/wrench')
   //Shapeless
        e.shapeless(Item.of('create:sand_paper', '{Damage:0}'),['minecraft:paper', 'nyagibits_bytes:crude_abrasive']).id('compression:compression/create/shapeless/sand_paper')                            
//------------------------------------------------------------------
    //Mixing
    //Compacting
        //Raw Rubber
            e.recipes.create.compacting('thermal:rubber', ['minecraft:vine', 'minecraft:dried_kelp', Fluid.of('water', 100)]).id('compression:compression/create/compacting/rubber')
    //Pressing
        //Chute
            e.recipes.create.pressing('create:chute', ['quark:iron_plate']).id('compression:compression/create/pressing/chute')
    //In-World / Deploying
        //Andesite Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
                e.shapeless('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy']).id('compression:compression/create/shapeless/andesite_casing')
            e.recipes.createDeploying('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy']).id('compression:compression/create/deploying/andesite_casing')
        //Brass Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
                e.shapeless('create:brass_casing',['nyagibits_bytes:pile_of_crude_mechanical_parts', 'create:andesite_casing']).id('compression:compression/create/shapeless/brass_casing')
            e.recipes.createDeploying('create:brass_casing',['nyagibits_bytes:pile_of_crude_mechanical_parts', 'create:andesite_casing']).id('compression:compression/create/deploying/brass_casing')
    //Mechanical Crafting
        //Deployer
            e.recipes.create.mechanicalCrafting('create:deployer', [
                ' ABCD ',
                'EFGHHH',
                ' ABCD '
            ], {
                A: 'nyagibits_bytes:pile_of_cogs',
                B: 'nyagibits_bytes:livisite_alloy',
                C: 'botania:polished_livingrock_slab',
                D: 'nyagibits_bytes:livisite_slate',
                E: 'create:brass_hand',
                F: 'create:brass_casing',
                G: 'create:mechanical_piston',
                H: 'create:piston_extension_pole'
            })
        //Press
            //Tier 1
                e.recipes.create.mechanicalCrafting('2x create:mechanical_press', [
                    'A',
                    'B',
                    'D',
                    'C'
                ], {
                    A: 'create:piston_extension_pole',
                    B: 'create:vertical_gearbox',
                    C: 'quark:iron_plate',
                    D: 'create:brass_casing'
                }).id('compression:compression/create/crafting/mechanical_press/tier1')
//------------------------------------------------------------------
})