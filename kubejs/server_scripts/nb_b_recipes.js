ServerEvents.recipes(event => {
    //Nyagi's Bits & Bytes

    //Note recipes dont need removal since the core mod has no recipes
    
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Shaped
        //Livisite Alloy Hand Craft
            event.shaped(
                Item.of('nyagibits_bytes:livisite_alloy', 1), 
                [ 
                    'AB', 
                    'BA'  
                ],
                {
                    A: 'nyagibits_bytes:livisite_stone', 
                    B: 'minecraft:iron_nugget'
                })
        //Livisite Alloy Hand Craft
            event.shaped(
                Item.of('nyagibits_bytes:etched_living_wood', 4), 
                [ 
                    'ABA', 
                    'BCB',
                    'ABA'
                ],
                {
                    A: 'botania:pattern_framed_livingwood', 
                    B: 'botania:framed_livingwood',
                    C: 'nyagibits_bytes:livisite_alloy'
                })
        //Sturdy Box
            event.shaped(
                Item.of('nyagibits_bytes:sturdy_box'), 
                [ 
                    'A A', 
                    'ABA'
                ],
                {
                    A: 'nyagibits_bytes:etched_living_wood', 
                    B: 'botania:open_crate'
                })
        //Crude Compression Test
            event.shaped(
                Item.of('nyagibits_bytes:crude_compression_test'), 
                [ 
                    'A', 
                    'B',
                    'C'
                ],
                {
                    A: 'minecraft:piston', 
                    B: 'nyagibits_bytes:soil_sample',
                    C: 'nyagibits_bytes:sturdy_box'
                })
        //Sealed Pouch
            event.shaped(
                Item.of('2x nyagibits_bytes:sealed_pouch'), 
                [ 
                    'ACA', 
                    'BDB',
                    'ACA'
                ],
                {
                    A: 'immersiveengineering:hemp_fiber', 
                    B: 'minecraft:string',
                    C: 'minecraft:paper',
                    D: 'minecraft:leather'
                })
        //Crude Entropy Test
            event.shaped(
                Item.of('nyagibits_bytes:crude_entropy_test'), 
                [ 
                    ' A ', 
                    'BCD',
                    ' E '
                ],
                {
                    A: 'minecraft:gunpowder', 
                    B: 'minecraft:redstone',
                    C: 'ae2:certus_quartz_dust',
                    D: 'mekanism:dust_charcoal',
                    E: 'nyagibits_bytes:sealed_pouch'
                })
        //Crude Static Test
            event.shaped(
                Item.of('nyagibits_bytes:crude_statics_test'), 
                [ 
                    'BCD', 
                    ' A '
                ],
                {
                    A: 'nyagibits_bytes:bucket_of_salt_water', 
                    B: 'create:copper_nugget',
                    C: 'nyagibits_bytes:torn_wool_ball',
                    D: 'create:zinc_nugget'
                })
        //Ae2 Schematic
            event.shaped(
                Item.of('nyagibits_bytes:ae2_schematic'), 
                [ 
                    ' C ', 
                    'BAD'
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_statics_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_compression_data',
                    D: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data'
                })
        //Botania Schematic
            event.shaped(
                Item.of('nyagibits_bytes:botania_schematic'), 
                [ 
                    'BAC'
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_natural_arcana_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data'
                })
        //Alchemistry Schematic
            event.shaped(
                Item.of('nyagibits_bytes:alchemistry_schematic'), 
                [ 
                    'BAC',
                    ' D '
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_acidics_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data',
                    D: 'nyagibits_bytes:lab_notebook_with_crude_statics_data'
                })
        //Immsersive Engineering Schematic
            event.shaped(
                Item.of('nyagibits_bytes:immersive_engineering_schematic'), 
                [   
                    ' E ',
                    'BAC',
                    ' D '
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_compression_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data',
                    D: 'nyagibits_bytes:lab_notebook_with_crude_statics_data',
                    E: 'nyagibits_bytes:lab_notebook_with_crude_material_properties_data'
                })
        //Ae2 Assembly
            event.shaped(
                Item.of('nyagibits_bytes:ae2_assembly'), 
                [ 
                    'ABC', 
                    'DEF',
                    'GHI'
                ],
                {
                    A: 'nyagibits_bytes:crystal_harmonizer', 
                    B: 'nyagibits_bytes:processor_stack',
                    C: 'nyagibits_bytes:energized_frame',
                    D: 'nyagibits_bytes:energized_wires',
                    E: 'create:brass_casing',
                    F: 'nyagibits_bytes:skystone_shielding',
                    G: 'nyagibits_bytes:matter_converters',
                    H: 'nyagibits_bytes:decorative_paneling',
                    I: 'nyagibits_bytes:micro_tools'
                })
        //Processor Stack
            event.shaped(
                Item.of('nyagibits_bytes:processor_stack'), 
                [ 
                    'ACA', 
                    'BDB',
                    'AEA'
                ],
                {
                    A: 'create:iron_sheet', 
                    B: 'create:shaft',
                    C: 'ae2:engineering_processor',
                    D: 'ae2:calculation_processor',
                    E: 'ae2:logic_processor'
                })
        //Matter Converters
            event.shaped(
                Item.of('nyagibits_bytes:matter_converters'), 
                [ 
                    ' AC', 
                    'ADA',
                    'BA '
                ],
                {
                    A: 'ae2:sky_stone_brick_slab', 
                    B: 'ae2:formation_core',
                    C: 'ae2:annihilation_core',
                    D: 'ae2:tiny_tnt'
                })
        //Decorative Paneling
            event.shaped(
                Item.of('nyagibits_bytes:decorative_paneling'), 
                [ 
                    ' A ', 
                    'ABA',
                    ' A '
                ],
                {
                    A: 'ae2:cable_anchor', 
                    B: 'nyagibits_bytes:livisite_slate'
                })
        //Chemistry Rack
            event.shaped(
                Item.of('nyagibits_bytes:chemistry_rack'), 
                [ 
                    'AAA', 
                    'B B',
                    'AAA'
                ],
                {
                    A: 'botania:livingwood_planks_slab', 
                    B: 'botania:livingwood_twig'
                })
        //Crude Acidics Test
            event.shaped(
                Item.of('nyagibits_bytes:crude_acidics_test'), 
                [ 
                    ' A ', 
                    'BAC',
                    ' D '
                ],
                {
                    A: 'nyagibits_bytes:bottle_of_anthocyanin', 
                    B: 'nyagibits_bytes:bucket_of_salt_water',
                    C: 'nyagibits_bytes:bottle_of_malic_and_citric_acid',
                    D: 'nyagibits_bytes:chemistry_rack'
                })
        //Crude Natural Arcana Test
            event.shaped(
                Item.of('nyagibits_bytes:crude_natural_arcana_test'), 
                [ 
                    'ABC', 
                    'DEF',
                    ' G '
                ],
                {
                    A: 'minecraft:carved_pumpkin', 
                    B: 'botania:pure_daisy',
                    C: 'botania:livingwood_twig',
                    D: 'botania:living_root',
                    E: 'nyagibits_bytes:soil_sample',
                    F: 'minecraft:kelp',
                    G: 'botania:flower_bag'
                })
        //Crude Material Properties Test
            event.shaped(
                Item.of('nyagibits_bytes:crude_material_properties_test'), 
                [ 
                    'A', 
                    'B',
                    'C'
                ],
                {
                    A: 'nyagibits_bytes:lab_notebook_with_crude_acidics_data', 
                    B: 'nyagibits_bytes:basic_composite_material',
                    C: 'nyagibits_bytes:sturdy_box'
                })
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Shapeless 
        //Crude Abrasive
            event.shapeless('4x nyagibits_bytes:crude_abrasive',['minecraft:sand', 'minecraft:gravel']) 
        //Pile Of Cogs
            event.shapeless('nyagibits_bytes:pile_of_cogs',['create:large_cogwheel', '3x create:cogwheel'])
        //Bucket of Salt Water
            event.shapeless('nyagibits_bytes:bucket_of_salt_water',['mekanism:salt', 'minecraft:water_bucket'])
        //Pen Assembly
            event.shapeless('nyagibits_bytes:pen_assembly',['nyagibits_bytes:ball_bearing', 'nyagibits_bytes:thin_casing', 'nyagibits_bytes:tiny_spring', 'nyagibits_bytes:ink_cartridge'])
        //Lab Notebook
            event.shapeless('nyagibits_bytes:lab_notebook',['nyagibits_bytes:pen', 'minecraft:book'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Pure Daisy recipes
        //Livisite
            event.recipes.botania.pure_daisy({
                output: {
                    name: 'nyagibits_bytes:livisite_stone'
                },
                input: {
                    type: 'block', //object type, can be "block", "state", "blocks" or "tag"
                    block: 'minecraft:andesite'
                },
                    time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
            })
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Petal Apothecary recipes
        //Used Crude Natural Arcana Test
            event.recipes.botania.petal_apothecary("nyagibits_bytes:used_crude_natural_arcana_test", ['nyagibits_bytes:crude_natural_arcana_test','minecraft:pumpkin_seeds','minecraft:hay_block','farmersdelight:tomato_seeds'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Sandpaper recipes
        //Polished Living Rock
        event.recipes.createSandpaperPolishing('nyagibits_bytes:polished_livisite',['nyagibits_bytes:livisite_stone'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Compacting recipes
        //Pile of Crude Mechanical Parts
            event.recipes.create.compacting(['nyagibits_bytes:pile_of_crude_mechanical_parts'], ['create:wrench', 'create:electron_tube', 'create:gantry_shaft', 'create:brass_hand', 'nyagibits_bytes:pile_of_cogs', 'create:hand_crank', 'create:andesite_casing', 'create:brass_sheet'])
        //Used Crude Compression Test
            event.recipes.create.compacting(['nyagibits_bytes:used_crude_compression_test'], ['nyagibits_bytes:crude_compression_test'])
        //Micro Tools
            event.recipes.create.compacting(['nyagibits_bytes:micro_tools'], ['create:andesite_casing', 'ae2:certus_quartz_wrench', 'ae2:nether_quartz_wrench', 'ae2:crank', Item.of('ae2:nether_quartz_cutting_knife', '{Damage:0}'), Item.of('ae2:certus_quartz_cutting_knife', '{Damage:0}')])
        //Basic Composite Material
            event.recipes.create.compacting(['nyagibits_bytes:basic_composite_material'], ['create:copper_sheet','create:iron_sheet','nyagibits_bytes:livisite_slate','minecraft:brick','minecraft:coal','ae2:certus_quartz_dust'])
        //Empty Schematic
            event.recipes.create.compacting(['nyagibits_bytes:blank_blueprint'], ['minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Create Mixing
        //Soild Sample
            event.recipes.create.mixing('4x nyagibits_bytes:soil_sample',['minecraft:coarse_dirt', 'minecraft:sand', 'minecraft:clay', 'minecraft:mud'])
        //Used Crude Entropy Test
            event.recipes.create.mixing('nyagibits_bytes:used_crude_entropy_test',['nyagibits_bytes:crude_entropy_test']).heated()
        //Ink
            event.recipes.create.mixing('2x nyagibits_bytes:ink',['minecraft:ink_sac', Fluid.of('water', 1000)]).heated()
        //Crude Silicon Boule
            //Note '16x minecraft:sand' does not work to add 16 sand to the mix recipe for some reason
            event.recipes.create.mixing('nyagibits_bytes:crude_silicon_boule',['minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand']).superheated()
        //Bottle of Anthocyanin
            event.recipes.create.mixing('nyagibits_bytes:bottle_of_anthocyanin',[Fluid.of('water', 250), 'farmersdelight:cabbage', 'minecraft:glass_bottle']).heated()
        //Bottle of Malic & Citric Acid
            event.recipes.create.mixing('nyagibits_bytes:bottle_of_malic_and_citric_acid',[Fluid.of('water', 250), 'farmersdelight:tomato', 'minecraft:glass_bottle']).heated()
        //Soild Sample
            event.recipes.create.mixing('nyagibits_bytes:used_crude_acidics_test',['nyagibits_bytes:crude_acidics_test'])

    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Create Milling
        //Ball Bearing
            event.recipes.create.milling('8x nyagibits_bytes:ball_bearing',['minecraft:iron_nugget'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Create Cutting
        //Thin Casing
            event.recipes.create.cutting('2x nyagibits_bytes:thin_casing',['create:shaft'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Create Mechanical recipes
        //Lab Notebook with Crude Compression Data
            event.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_compression_data', [
                'A',
                'B'
            ], {
                A: 'nyagibits_bytes:lab_notebook',
                B: 'nyagibits_bytes:used_crude_compression_test'
            })
        //Lab Notebook with Crude Statics Data
            event.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_statics_data', [
                'A',
                'B'
            ], {
                A: 'nyagibits_bytes:lab_notebook',
                B: 'nyagibits_bytes:used_crude_statics_test'
            })
        //Lab Notebook with Crude Entropy Data
            event.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_entropy_data', [
                'A',
                'B'
            ], {
                A: 'nyagibits_bytes:lab_notebook',
                B: 'nyagibits_bytes:used_crude_entropy_test'
            })
        //Lab Notebook with Crude Acidics Data
            event.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_acidics_data', [
                'A',
                'B'
            ], {
                A: 'nyagibits_bytes:lab_notebook',
                B: 'nyagibits_bytes:used_crude_acidics_test'
            })
        //Lab Notebook with Crude Natural Arcana Data
            event.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_natural_arcana_data', [
                'A',
                'B'
            ], {
                A: 'nyagibits_bytes:lab_notebook',
                B: 'nyagibits_bytes:used_crude_natural_arcana_test'
            })
        //Lab Notebook with Crude Natural Arcana Data
            event.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_material_properties_data', [
                'A',
                'B'
            ], {
                A: 'nyagibits_bytes:lab_notebook',
                B: 'nyagibits_bytes:used_crude_material_properties_test'
            })
    //------------------------------------------------------------------
        })
    //------------------------------------------------------------------
    //Create Sequenced Assembly
    ServerEvents.recipes(e => {
        //Used Crude Statics Test
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:used_crude_statics_test'),
                ], 'nyagibits_bytes:crude_statics_test',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:crude_statics_test', ['nyagibits_bytes:crude_statics_test', 'nyagibits_bytes:torn_wool_ball'])
                    ]).loops(8).transitionalItem('nyagibits_bytes:crude_statics_test')
        //Tiny Spring
            e.recipes.createSequencedAssembly([
                    Item.of('8x nyagibits_bytes:tiny_spring'),
                ], 'create:iron_sheet',
                    [
                        e.recipes.createCutting('create:iron_sheet', ['create:iron_sheet']),
                        e.recipes.createPressing('create:iron_sheet', ['create:iron_sheet'])
                    ]).loops(2).transitionalItem('create:iron_sheet')
        //Ink Cartridge
            e.recipes.createSequencedAssembly([
                    Item.of('4x nyagibits_bytes:ink_cartridge'),
                ], 'nyagibits_bytes:ink',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ink', ['nyagibits_bytes:ink', 'nyagibits_bytes:thin_casing'])
                    ]).loops(4).transitionalItem('nyagibits_bytes:ink')
        //Pen
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:pen'),
                ], 'nyagibits_bytes:pen_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly', 'thermal:cured_rubber']),
                        e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly']),
                        e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly']),
                        e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly']),
                        e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly'])

                    ]).loops(1).transitionalItem('nyagibits_bytes:ink')
        //Crystal Harmonizer
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:crystal_harmonizer'),
                ], 'minecraft:comparator',
                    [
                        e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'ae2:certus_quartz_crystal']),
                        e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'ae2:fluix_crystal']),
                        e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'ae2:charged_certus_quartz_crystal']),
                        e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'byg:quartz_crystal']),
                        e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'minecraft:redstone'])

                    ]).loops(2).transitionalItem('minecraft:comparator')
        //Energized Frame
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:energized_frame'),
                ], 'quark:framed_glass',
                    [
                        e.recipes.createDeploying('quark:framed_glass', ['quark:framed_glass', 'ae2:certus_quartz_dust']),
                        e.recipes.createDeploying('quark:framed_glass', ['quark:framed_glass', 'create:sturdy_sheet']),
                        e.recipes.createDeploying('quark:framed_glass', ['quark:framed_glass', 'create:brass_sheet'])

                    ]).loops(1).transitionalItem('quark:framed_glass')
        //Energized Wires
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:energized_wires'),
                ], 'ae2:quartz_fiber',
                    [
                        e.recipes.createDeploying('ae2:quartz_fiber', ['ae2:quartz_fiber', 'ae2:certus_quartz_dust']),
                        e.recipes.createDeploying('ae2:quartz_fiber', ['ae2:quartz_fiber', 'create:sturdy_sheet']),
                        e.recipes.createDeploying('ae2:quartz_fiber', ['ae2:quartz_fiber', 'create:brass_sheet'])

                    ]).loops(1).transitionalItem('ae2:quartz_fiber')
        //Skystone Shielding
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:skystone_shielding'),
                ], 'create:sturdy_sheet',
                    [
                        e.recipes.createDeploying('create:sturdy_sheet', ['create:sturdy_sheet', 'ae2:sky_stone_slab']),
                        e.recipes.createDeploying('create:sturdy_sheet', ['create:sturdy_sheet', 'ae2:sky_dust']),
                        e.recipes.createDeploying('create:sturdy_sheet', ['create:sturdy_sheet', 'create:iron_sheet'])

                    ]).loops(4).transitionalItem('create:sturdy_sheet')
        //Diamond Shard
            e.recipes.createSequencedAssembly([
                    Item.of('4x nyagibits_bytes:diamond_shard'),
                ], 'minecraft:diamond',
                    [
                        e.recipes.createPressing('minecraft:diamond', ['minecraft:diamond']),

                    ]).loops(16).transitionalItem('minecraft:diamond')
        //Etched Redstone Plates
            e.recipes.createSequencedAssembly([
                    Item.of('9x nyagibits_bytes:etched_redstone_plate'),
                ], 'minecraft:redstone_block',
                    [
                        e.recipes.createDeploying('minecraft:redstone_block', ['minecraft:redstone_block', 'ae2:quartz_fiber']),
                        e.recipes.createPressing('minecraft:redstone_block', ['minecraft:redstone_block']),
                        e.recipes.createCutting('minecraft:redstone_block', ['minecraft:redstone_block'])

                    ]).loops(1).transitionalItem('minecraft:redstone_block')
        //Basic Composite Plates
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:basic_composite_plate'),
                ], 'nyagibits_bytes:basic_composite_material',
                    [
                        e.recipes.createPressing('nyagibits_bytes:basic_composite_material', ['nyagibits_bytes:basic_composite_material']),

                    ]).loops(4).transitionalItem('nyagibits_bytes:basic_composite_material')
        //Used Crude Materials Properties Test
            e.recipes.createSequencedAssembly([
                    Item.of('nyagibits_bytes:used_crude_material_properties_test'),
                ], 'nyagibits_bytes:crude_material_properties_test',
                    [
                        e.recipes.createPressing('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test']),
                        e.recipes.createDeploying('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test','nyagibits_bytes:bottle_of_malic_and_citric_acid']),
                        e.recipes.createFilling('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test', Fluid.lava(100)]),
                        e.recipes.createCutting('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test']),
                        e.recipes.createDeploying('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test','nyagibits_bytes:pen'])

                    ]).loops(1).transitionalItem('nyagibits_bytes:crude_material_properties_test')
        //------------------------------------------------------------------
        })
