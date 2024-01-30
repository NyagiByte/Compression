ServerEvents.recipes(e => {
//Create
//------------------------------------------------------------------
    //Create Shapeless
        e.shapeless(Item.of('create:sand_paper', '{Damage:0}'),['minecraft:paper', 'nyagibits_bytes:crude_abrasive'])
//------------------------------------------------------------------
    //Create Shaped
        //Shaft
            e.remove({output:'create:shaft'})
            e.shaped(Item.of('create:shaft', 8), 
                [ 
                    'A', 
                    'A'  
                ],
                {
                    A: 'nyagibits_bytes:livisite_alloy'
                }
                )
        //Small Cog - T0
            e.remove({output:'create:cogwheel'})
            e.shaped(Item.of('create:cogwheel', 2), [
                    'CA ',
                    'CBC',
                    ' AC'
                ], {
                    A: 'create:shaft',
                    B: 'botania:livingwood_planks_slab',
                    C: 'botania:livingwood_planks_stairs'
            })
            //Small Cog - T1
                e.remove({output:'create:cogwheel'})
                e.shaped(Item.of('create:cogwheel', 16), [
                        'CAD',
                        'CBC',
                        'DAC'
                    ], {
                        A: 'create:shaft',
                        B: 'botania:livingwood_planks_slab',
                        C: 'botania:livingwood_planks_stairs',
                        D: 'create:brass_nugget'
                })
        //Large Cog
            e.remove({output:'create:large_cogwheel'})
            e.shaped(Item.of('create:large_cogwheel', 2), [
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
            e.remove({output:'create:water_wheel'})
            e.shaped(Item.of('create:water_wheel'), [
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
            e.remove({output:'create:basin'})
            e.shaped(Item.of('create:basin'), [
                'A A',
                'ABA'
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: 'botania:livingrock_bricks'
            })
        //Depot
            e.remove({output:'create:depot'})
            e.shaped(Item.of('create:depot'), [
                'ABA'
            ], {
                A: 'botania:livingrock_stairs',
                B: 'create:andesite_alloy_block'
            })
        //Press - T0
            e.remove({output:'create:mechanical_press'})
            e.shaped(Item.of('create:mechanical_press'), [
                'A',
                'B',
                'C'
            ], {
                A: 'create:piston_extension_pole',
                B: 'create:vertical_gearbox',
                C: 'quark:iron_plate'
            })
            //Press - T1
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
                })
        //Whisk 
            e.remove({output:'create:whisk'})
            e.shaped(Item.of('create:whisk'), [
                ' A ',
                'BAB',
                'BBB'
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: 'create:iron_sheet'
            })
        //Mechanical Belt
            e.remove({output:'create:belt_connector'})
            e.shaped(Item.of('create:belt_connector'), [
                'BAB'
            ], {
                A: 'thermal:rubber',
                B: 'immersiveengineering:hemp_fiber'
            })  
        //Mechanical Drill - T0
            e.remove({output:'create:mechanical_drill'})
            e.shaped(Item.of('create:mechanical_drill'), [
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
            //Mechanical Drill - T1
                e.shaped(Item.of('2x create:mechanical_drill'), [
                    ' AB',
                    'CDE',
                    ' AB'
                ], {
                    A: 'create:industrial_iron_block',
                    B: 'nyagibits_bytes:livisite_alloy',
                    C: 'create:shaft',
                    D: 'create:brass_casing',
                    E: 'thermal:drill_head'
                })   
        //Mechanical Saw - T0
            e.remove({output:'create:mechanical_saw'})
            e.shaped(Item.of('create:mechanical_saw'), [
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
            //Mechanical Saw - T1
                e.shaped(Item.of('2x create:mechanical_saw'), [
                    ' AB',
                    'CDE',
                    ' AB'
                ], {
                    A: 'create:industrial_iron_block',
                    B: 'nyagibits_bytes:livisite_alloy',
                    C: 'create:shaft',
                    D: 'create:brass_casing',
                    E: 'thermal:saw_blade'
                }) 
        //Mechanical Harvester - T0
            e.remove({output:'create:mechanical_harvester'})
            e.shaped(Item.of('create:mechanical_harvester'), [
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
            //Mechanical Harvester - T1
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
                })  
        //Encased Fan - T0
            e.remove({output:'create:encased_fan'})
            e.shaped(Item.of('create:encased_fan'), [
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
            //Encased Fan - T1
                e.shaped(Item.of('2x create:encased_fan'), [
                    ' AB',
                    'CDE',
                    ' AB'
                ], {
                    A: 'create:industrial_iron_block',
                    B: 'nyagibits_bytes:livisite_alloy',
                    C: 'create:shaft',
                    D: 'create:brass_casing',
                    E: 'create:propeller'
                })    
        //Millstone - T0
            e.remove({output:'create:millstone'})
            e.shaped(Item.of('create:millstone'), [
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
            //Millstone - T1
                e.shaped(Item.of('2x create:millstone'), [
                    ' A ',
                    'BCB',
                    'DED'
                ], {
                    A: 'create:chute',
                    B: 'nyagibits_bytes:livisite_alloy',
                    C: 'nyagibits_bytes:pile_of_cogs',
                    D: 'nyagibits_bytes:polished_livisite',
                    E: 'create:brass_casing'
                }) 
        //Empty Blaze Burner
            e.remove({output:'create:empty_blaze_burner'})
            e.shaped(Item.of('create:empty_blaze_burner'), [
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
            e.remove({output:'create:brass_hand'})
            e.shaped(Item.of('create:brass_hand'), [
                ' A ',
                'BCB',
                ' B '
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: 'create:brass_nugget',
                C: 'create:brass_ingot'
            })  
        //Hand Crank
            e.remove({output:'create:hand_crank'})
            e.shaped(Item.of('create:hand_crank'), [
                'AAB',
                ' CD'
            ], {
                A: 'nyagibits_bytes:etched_living_wood',
                B: 'nyagibits_bytes:pile_of_cogs',
                C: 'create:brass_nugget',
                D: 'create:shaft'
            })  
        //Rose Quartz
            e.remove({output:'create:rose_quartz'})
            //Tier 1
                e.shaped(Item.of('2x create:rose_quartz'), [
                    'ABA',
                    'CDC',
                    'ACA'
                ], {
                    A: 'minecraft:redstone',
                    B: 'minecraft:red_dye',
                    C: 'quark:clear_shard',
                    D: 'minecraft:quartz'
                })   
            //Tier 2
                e.shaped(Item.of('8x create:rose_quartz'), [
                    'ABA',
                    'CDC',
                    'ACA'
                ], {
                    A: 'minecraft:redstone',
                    B: 'minecraft:red_dye',
                    C: 'quark:clear_shard',
                    D: 'nyagibits_bytes:raw_rose_quartz'
                }) 
        //Mechanical Crafter
            e.remove({output:'create:mechanical_crafter'})
            e.shaped(Item.of('8x create:mechanical_crafter'), [
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
            e.recipes.create.compacting(['thermal:rubber'], ['minecraft:vine', 'minecraft:dried_kelp', Fluid.of('water', 100)])
//------------------------------------------------------------------
    //Create Press recipes
        //Chute
            e.remove({output:'create:chute'})
            e.recipes.create.pressing(['create:chute'], ['quark:iron_plate'])
//------------------------------------------------------------------
    //Create In-World recipes
        //Andesite Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
                e.remove({output:'create:andesite_casing'})
                e.shapeless('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
            e.recipes.createDeploying('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
        //Brass Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
                e.remove({output:'create:brass_casing'})
                e.shapeless('create:brass_casing',['nyagibits_bytes:pile_of_crude_mechanical_parts', 'create:andesite_casing'])
            e.recipes.createDeploying('create:brass_casing',['nyagibits_bytes:pile_of_crude_mechanical_parts', 'create:andesite_casing'])
//------------------------------------------------------------------
    //Create Mechanical recipes
        //Deployer
            e.remove({output:'create:deployer'})
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
})