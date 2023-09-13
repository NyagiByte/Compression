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
        //Whisk
            event.remove({output: 'create:whisk'});
            event.shaped(Item.of('create:whisk'), [
                ' A ',
                'BAB',
                'BBB'
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: 'create:iron_sheet'
            })
        //Mechanical Belt
            event.remove({output: 'create:belt_connector'});
            event.shaped(Item.of('create:belt_connector'), [
                'BAB'
            ], {
                A: 'thermal:rubber',
                B: 'immersiveengineering:hemp_fiber'
            })  
        //Mechanical Drill
            event.remove({output: 'create:mechanical_drill'});
            event.shaped(Item.of('create:mechanical_drill'), [
                ' AB',
                'CDE',
                ' AB'
            ], {
                A: 'create:industrial_iron_block',
                B: 'nyagibits_bytes:livisite_alloy',
                C: 'create:shaft',
                D: 'create:andesite_casing',
                E: 'thermal:drill_head'
            })  
        //Mechanical Saw
            event.remove({output: 'create:mechanical_saw'});
            event.shaped(Item.of('create:mechanical_saw'), [
                ' AB',
                'CDE',
                ' AB'
            ], {
                A: 'create:industrial_iron_block',
                B: 'nyagibits_bytes:livisite_alloy',
                C: 'create:shaft',
                D: 'create:andesite_casing',
                E: 'thermal:saw_blade'
            })  
        //Mechanical Harvester
            event.remove({output: 'create:mechanical_harvester'});
            event.shaped(Item.of('create:mechanical_harvester'), [
                ' AB',
                'CDE',
                ' AB'
            ], {
                A: 'create:industrial_iron_block',
                B: 'nyagibits_bytes:livisite_alloy',
                C: 'create:shaft',
                D: 'create:andesite_casing',
                E: 'quark:grate'
            })  
        //Encased Fan
            event.remove({output: 'create:encased_fan'});
            event.shaped(Item.of('create:encased_fan'), [
                ' AB',
                'CDE',
                ' AB'
            ], {
                A: 'create:industrial_iron_block',
                B: 'nyagibits_bytes:livisite_alloy',
                C: 'create:shaft',
                D: 'create:andesite_casing',
                E: 'create:propeller'
            })  
        //Millstone
            event.remove({output: 'create:millstone'});
            event.shaped(Item.of('create:millstone'), [
                ' A ',
                'BCB',
                'DED'
            ], {
                A: 'create:chute',
                B: 'nyagibits_bytes:livisite_alloy',
                C: 'nyagibits_bytes:pile_of_cogs',
                D: 'nyagibits_bytes:polished_livisite',
                E: 'create:andesite_casing'
            })  
        //Empty Blaze Burner
            event.remove({output: 'create:empty_blaze_burner'});
            event.shaped(Item.of('create:empty_blaze_burner'), [
                'A A',
                'BCB',
                'DED'
            ], {
                A: 'quark:iron_plate_stairs',
                B: 'create:ornate_iron_window_pane',
                C: 'minecraft:netherrack',
                D: 'pneumaticcraft:ingot_iron_compressed',
                E: 'minecraft:blast_furnace'
            })  
        //Brass Hand
            event.remove({output: 'create:brass_hand'});
            event.shaped(Item.of('create:brass_hand'), [
                ' A ',
                'BCB',
                ' B '
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: 'create:brass_nugget',
                C: 'create:brass_ingot'
            })  
        //Hand Crank
            event.remove({output: 'create:hand_crank'});
            event.shaped(Item.of('create:hand_crank'), [
                'AAB',
                ' CD'
            ], {
                A: 'nyagibits_bytes:etched_living_wood',
                B: 'nyagibits_bytes:pile_of_cogs',
                C: 'create:brass_nugget',
                D: 'create:shaft'
            })  
        //Rose Quartz
            event.remove({output: 'create:rose_quartz'});
            event.shaped(Item.of('2x create:rose_quartz'), [
                'ABA',
                'CDC',
                'ACA'
            ], {
                A: 'minecraft:redstone',
                B: 'minecraft:red_dye',
                C: 'quark:clear_shard',
                D: 'minecraft:quartz'
            })  
        //Mechanical Crafter
            event.remove({output: 'create:mechanical_crafter'});
            event.shaped(Item.of('8x create:mechanical_crafter'), [
                'ABA',
                'CDC'
            ], {
                A: 'nyagibits_bytes:pile_of_cogs',
                B: 'create:brass_casing',
                C: 'create:shaft',
                D: 'create:belt_connector'
            })                            
    //------------------------------------------------------------------
    //Create Mixing recipes
    //------------------------------------------------------------------
    //Create Compacting recipes
        //Raw Rubber
            event.remove({output: 'thermal:rubber'});
            event.recipes.create.compacting(['thermal:rubber'], ['minecraft:vine', 'minecraft:dried_kelp', Fluid.of('water', 100)])
    //------------------------------------------------------------------
    //Create Press recipes
        //Chute
            event.remove({output: 'create:chute'});
            event.recipes.create.pressing(['create:chute'], ['quark:iron_plate'])
    //------------------------------------------------------------------
    //Create right click recipes
        //Andesite Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
            event.remove({output: 'create:andesite_casing'});
                event.shapeless('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
            event.recipes.createDeploying('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
        //Brass Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
            event.remove({output: 'create:brass_casing'});
                event.shapeless('create:brass_casing',['nyagibits_bytes:pile_of_crude_mechanical_parts', 'create:andesite_casing'])
            event.recipes.createDeploying('create:brass_casing',['nyagibits_bytes:pile_of_crude_mechanical_parts', 'create:andesite_casing'])
    //------------------------------------------------------------------
    //Create Mechanical recipes
        //Deployer
            event.remove({output: 'create:deployer'});
            event.recipes.create.mechanicalCrafting('create:deployer', [
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
})