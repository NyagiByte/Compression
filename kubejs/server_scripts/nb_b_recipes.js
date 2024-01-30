ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Note recipes dont need removal since the core mod has no recipes    
//------------------------------------------------------------------
    //Shaped Crafting
        //Livisite Alloy Hand Craft
            e.shaped('nyagibits_bytes:livisite_alloy', 
                [ 
                    'AB', 
                    'BA'  
                ],
                {
                    A: 'nyagibits_bytes:livisite_stone', 
                    B: 'minecraft:iron_nugget'
                }).id('compression:compression/nyagibits_bytes/shaped/livisite_alloy')      
        //Etched Living Wood
            e.shaped('4x nyagibits_bytes:etched_living_wood', 
                [ 
                    'ABA', 
                    'BCB',
                    'ABA'
                ],
                {
                    A: 'botania:pattern_framed_livingwood', 
                    B: 'botania:framed_livingwood',
                    C: 'nyagibits_bytes:livisite_alloy'
                }).id('compression:compression/nyagibits_bytes/shaped/etched_living_wood')
        //Sturdy Box
            e.shaped('nyagibits_bytes:sturdy_box', 
                [ 
                    'A A', 
                    'ABA'
                ],
                {
                    A: 'nyagibits_bytes:etched_living_wood', 
                    B: 'botania:open_crate'
                }).id('compression:compression/nyagibits_bytes/shaped/sturdy_box')
        //Crude Compression Test
            e.shaped('nyagibits_bytes:crude_compression_test', 
                [ 
                    'A', 
                    'B',
                    'C'
                ],
                {
                    A: 'minecraft:piston', 
                    B: 'nyagibits_bytes:soil_sample',
                    C: 'nyagibits_bytes:sturdy_box'
                }).id('compression:compression/nyagibits_bytes/shaped/crude_compression_test')
        //Sealed Pouch
            e.shaped('2x nyagibits_bytes:sealed_pouch', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/sealed_pouch')
        //Crude Entropy Test
            e.shaped('nyagibits_bytes:crude_entropy_test', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/crude_entropy_test')
        //Crude Static Test
            e.shaped('nyagibits_bytes:crude_statics_test', 
                [ 
                    'BCD', 
                    ' A '
                ],
                {
                    A: 'nyagibits_bytes:bucket_of_salt_water', 
                    B: 'create:copper_nugget',
                    C: 'nyagibits_bytes:torn_wool_ball',
                    D: 'create:zinc_nugget'
                }).id('compression:compression/nyagibits_bytes/shaped/crude_statics_test')
        //Ae2 Schematic
            e.shaped('nyagibits_bytes:ae2_schematic', 
                [ 
                    ' C ', 
                    'BAD'
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_statics_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_compression_data',
                    D: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data'
                }).id('compression:compression/nyagibits_bytes/shaped/ae2_schematic')
        //Botania Schematic
            e.shaped('nyagibits_bytes:botania_schematic', 
                [ 
                    'BAC'
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_natural_arcana_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data'
                }).id('compression:compression/nyagibits_bytes/shaped/botania_schematic')
        //Alchemistry Schematic
            e.shaped('nyagibits_bytes:alchemistry_schematic', 
                [ 
                    'BAC',
                    ' D '
                ],
                {
                    A: 'nyagibits_bytes:blank_blueprint', 
                    B: 'nyagibits_bytes:lab_notebook_with_crude_acidics_data',
                    C: 'nyagibits_bytes:lab_notebook_with_crude_entropy_data',
                    D: 'nyagibits_bytes:lab_notebook_with_crude_statics_data'
                }).id('compression:compression/nyagibits_bytes/shaped/alchemistry_schematic')
        //Immsersive Engineering Schematic
            e.shaped('nyagibits_bytes:immersive_engineering_schematic', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/immersive_engineering_schematic')
        //Ae2 Assembly
            e.shaped('nyagibits_bytes:ae2_assembly', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/ae2_assembly')
        //Processor Stack
            e.shaped('nyagibits_bytes:processor_stack', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/processor_stack')
        //Matter Converters
            e.shaped('nyagibits_bytes:matter_converters', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/matter_converters')
        //Decorative Paneling
            e.shaped('nyagibits_bytes:decorative_paneling', 
                [ 
                    ' A ', 
                    'ABA',
                    ' A '
                ],
                {
                    A: 'ae2:cable_anchor', 
                    B: 'nyagibits_bytes:livisite_slate'
                }).id('compression:compression/nyagibits_bytes/shaped/decorative_paneling')
        //Chemistry Rack
            e.shaped('nyagibits_bytes:chemistry_rack', 
                [ 
                    'AAA', 
                    'B B',
                    'AAA'
                ],
                {
                    A: 'botania:livingwood_planks_slab', 
                    B: 'botania:livingwood_twig'
                }).id('compression:compression/nyagibits_bytes/shaped/chemistry_rack')
        //Crude Acidics Test
            e.shaped('nyagibits_bytes:crude_acidics_test', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/crude_acidics_test')
        //Crude Natural Arcana Test
            e.shaped('nyagibits_bytes:crude_natural_arcana_test', 
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
                }).id('compression:compression/nyagibits_bytes/shaped/crude_natural_arcana_test')
        //Crude Material Properties Test
            e.shaped('nyagibits_bytes:crude_material_properties_test', 
                [ 
                    'A', 
                    'B',
                    'C'
                ],
                {
                    A: 'nyagibits_bytes:lab_notebook_with_crude_acidics_data', 
                    B: 'nyagibits_bytes:basic_composite_material',
                    C: 'nyagibits_bytes:sturdy_box'
                }).id('compression:compression/nyagibits_bytes/shaped/crude_material_properties_test') 
    //Shapeless Crafting
        //Crude Abrasive
            e.shapeless('4x nyagibits_bytes:crude_abrasive',['minecraft:sand', 'minecraft:gravel']).id('compression:compression/nyagibits_bytes/shapeless/crude_abrasive') 
        //Pile Of Cogs
            e.shapeless('nyagibits_bytes:pile_of_cogs',['create:large_cogwheel', '3x create:cogwheel']).id('compression:compression/nyagibits_bytes/shapeless/pile_of_cogs')
        //Bucket of Salt Water
            e.shapeless('nyagibits_bytes:bucket_of_salt_water',['mekanism:salt', 'minecraft:water_bucket']).id('compression:compression/nyagibits_bytes/shapeless/bucket_of_salt_water')
        //Pen Assembly
            e.shapeless('nyagibits_bytes:pen_assembly',['nyagibits_bytes:ball_bearing', 'nyagibits_bytes:thin_casing', 'nyagibits_bytes:tiny_spring', 'nyagibits_bytes:ink_cartridge']).id('compression:compression/nyagibits_bytes/shapeless/pen_assembly')
        //Lab Notebook
            e.shapeless('nyagibits_bytes:lab_notebook',['nyagibits_bytes:pen', 'minecraft:book']).id('compression:compression/nyagibits_bytes/shapeless/lab_notebook')
//------------------------------------------------------------------
    //Botania Crafting
        //Pure Daisy
            //Livisite
                e.recipes.botania.pure_daisy({
                    output: {
                        name: 'nyagibits_bytes:livisite_stone'
                    },
                    input: {
                        type: 'block', //object type, can be "block", "state", "blocks" or "tag"
                        block: 'minecraft:andesite'
                    },
                        time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
                }).id('compression:compression/nyagibits_bytes/pure_daisy/livisite_stone')
        //Apothecary
            //Used Crude Natural Arcana Test
                e.recipes.botania.petal_apothecary("nyagibits_bytes:used_crude_natural_arcana_test", ['nyagibits_bytes:crude_natural_arcana_test','minecraft:pumpkin_seeds','minecraft:hay_block','farmersdelight:tomato_seeds']).id('compression:compression/nyagibits_bytes/petal_apothecary/used_crude_natural_arcana_test')
//------------------------------------------------------------------
    //Create Crafting
        //Polishing
            //Polished Living Rock
                e.recipes.createSandpaperPolishing('nyagibits_bytes:polished_livisite',['nyagibits_bytes:livisite_stone']).id('compression:compression/nyagibits_bytes/polishing/polished_livisite')
        //Compacting
            //Pile of Crude Mechanical Parts
                e.recipes.create.compacting(['nyagibits_bytes:pile_of_crude_mechanical_parts'], ['create:wrench', 'create:electron_tube', 'create:gantry_shaft', 'create:brass_hand', 'nyagibits_bytes:pile_of_cogs', 'create:hand_crank', 'create:andesite_casing', 'create:brass_sheet']).id('compression:compression/nyagibits_bytes/compacting/pile_of_crude_mechanical_parts')
            //Used Crude Compression Test
                e.recipes.create.compacting(['nyagibits_bytes:used_crude_compression_test'], ['nyagibits_bytes:crude_compression_test']).id('compression:compression/nyagibits_bytes/compacting/used_crude_compression_test')
            //Micro Tools
                e.recipes.create.compacting(['nyagibits_bytes:micro_tools'], ['create:andesite_casing', 'ae2:certus_quartz_wrench', 'ae2:nether_quartz_wrench', 'ae2:crank', Item.of('ae2:nether_quartz_cutting_knife', '{Damage:0}'), Item.of('ae2:certus_quartz_cutting_knife', '{Damage:0}')]).id('compression:compression/nyagibits_bytes/compacting/micro_tools')
            //Basic Composite Material
                e.recipes.create.compacting(['nyagibits_bytes:basic_composite_material'], ['create:copper_sheet','create:iron_sheet','nyagibits_bytes:livisite_slate','minecraft:brick','minecraft:coal','ae2:certus_quartz_dust']).id('compression:compression/nyagibits_bytes/compacting/basic_composite_plate')
            //Empty Schematic
                e.recipes.create.compacting(['nyagibits_bytes:blank_blueprint'], ['minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper']).id('compression:compression/nyagibits_bytes/compacting/blank_blueprint')
        //Mixing
            //Soild Sample
                e.recipes.create.mixing('4x nyagibits_bytes:soil_sample',['minecraft:coarse_dirt', 'minecraft:sand', 'minecraft:clay', 'minecraft:mud']).id('compression:compression/nyagibits_bytes/mixing/soil_sample')
            //Used Crude Entropy Test
                e.recipes.create.mixing('nyagibits_bytes:used_crude_entropy_test',['nyagibits_bytes:crude_entropy_test']).heated().id('compression:compression/nyagibits_bytes/mixing/used_crude_entropy_test')
            //Ink
                e.recipes.create.mixing('2x nyagibits_bytes:ink',['minecraft:ink_sac', Fluid.of('water', 1000)]).heated().id('compression:compression/nyagibits_bytes/mixing/ink')
            //Crude Silicon Boule
                //Note '16x minecraft:sand' does not work to add 16 sand to the mix recipe for some reason
                e.recipes.create.mixing('nyagibits_bytes:crude_silicon_boule',['minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand']).superheated().id('compression:compression/nyagibits_bytes/mixing/crude_silicon_boule')
            //Bottle of Anthocyanin
                e.recipes.create.mixing('nyagibits_bytes:bottle_of_anthocyanin',[Fluid.of('water', 250), 'farmersdelight:cabbage', 'minecraft:glass_bottle']).heated().id('compression:compression/nyagibits_bytes/mixing/bottle_of_anthocyanin')
            //Bottle of Malic & Citric Acid
                e.recipes.create.mixing('nyagibits_bytes:bottle_of_malic_and_citric_acid',[Fluid.of('water', 250), 'farmersdelight:tomato', 'minecraft:glass_bottle']).heated().id('compression:compression/nyagibits_bytes/mixing/bottle_of_malic_and_citric_acid')
            //Soild Sample
                e.recipes.create.mixing('nyagibits_bytes:used_crude_acidics_test',['nyagibits_bytes:crude_acidics_test']).id('compression:compression/nyagibits_bytes/mixing/used_crude_acidics_test')
        //Milling
            //Ball Bearing
                e.recipes.create.milling('8x nyagibits_bytes:ball_bearing',['minecraft:iron_nugget']).id('compression:compression/nyagibits_bytes/milling/ball_bearing')
        //Cutting
            //Thin Casing
                e.recipes.create.cutting('2x nyagibits_bytes:thin_casing',['create:shaft']).id('compression:compression/nyagibits_bytes/cutting/thin_casing')
        //Mechanical Crafting
            //Lab Notebook with Crude Compression Data
                e.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_compression_data', [
                    'A',
                    'B'
                ], {
                    A: 'nyagibits_bytes:lab_notebook',
                    B: 'nyagibits_bytes:used_crude_compression_test'
                }).id('compression:compression/nyagibits_bytes/crafting/lab_notebook_with_crude_compression_data')
            //Lab Notebook with Crude Statics Data
                e.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_statics_data', [
                    'A',
                    'B'
                ], {
                    A: 'nyagibits_bytes:lab_notebook',
                    B: 'nyagibits_bytes:used_crude_statics_test'
                }).id('compression:compression/nyagibits_bytes/crafting/lab_notebook_with_crude_statistics_data')
            //Lab Notebook with Crude Entropy Data
                e.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_entropy_data', [
                    'A',
                    'B'
                ], {
                    A: 'nyagibits_bytes:lab_notebook',
                    B: 'nyagibits_bytes:used_crude_entropy_test'
                }).id('compression:compression/nyagibits_bytes/crafting/lab_notebook_with_crude_entropy_data')
            //Lab Notebook with Crude Acidics Data
                e.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_acidics_data', [
                    'A',
                    'B'
                ], {
                    A: 'nyagibits_bytes:lab_notebook',
                    B: 'nyagibits_bytes:used_crude_acidics_test'
                }).id('compression:compression/nyagibits_bytes/crafting/lab_notebook_with_crude_acidics_data')
            //Lab Notebook with Crude Natural Arcana Data
                e.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_natural_arcana_data', [
                    'A',
                    'B'
                ], {
                    A: 'nyagibits_bytes:lab_notebook',
                    B: 'nyagibits_bytes:used_crude_natural_arcana_test'
                }).id('compression:compression/nyagibits_bytes/crafting/lab_notebook_with_crude_natural_arcana_data')
            //Lab Notebook with Crude Natural Arcana Data
                e.recipes.create.mechanicalCrafting('nyagibits_bytes:lab_notebook_with_crude_material_properties_data', [
                    'A',
                    'B'
                ], {
                    A: 'nyagibits_bytes:lab_notebook',
                    B: 'nyagibits_bytes:used_crude_material_properties_test'
                }).id('compression:compression/nyagibits_bytes/crafting/lab_notebook_with_crude_compression_data')
        //Create Sequenced Assembly
            //Used Crude Statics Test
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:used_crude_statics_test',
                    ], 'nyagibits_bytes:crude_statics_test',
                        [
                            e.recipes.createDeploying('nyagibits_bytes:crude_statics_test', ['nyagibits_bytes:crude_statics_test', 'nyagibits_bytes:torn_wool_ball'])
                        ]).loops(8).transitionalItem('nyagibits_bytes:crude_statics_test').id('compression:compression/nyagibits_bytes/assembly/used_crude_statics_test')
            //Tiny Spring
                e.recipes.createSequencedAssembly([
                    '8x nyagibits_bytes:tiny_spring',
                    ], 'create:iron_sheet',
                        [
                            e.recipes.createCutting('create:iron_sheet', ['create:iron_sheet']),
                            e.recipes.createPressing('create:iron_sheet', ['create:iron_sheet'])
                        ]).loops(2).transitionalItem('create:iron_sheet').id('compression:compression/nyagibits_bytes/assembly/tiny_spring')
            //Ink Cartridge
                e.recipes.createSequencedAssembly([
                    '4x nyagibits_bytes:ink_cartridge',
                    ], 'nyagibits_bytes:ink',
                        [
                            e.recipes.createDeploying('nyagibits_bytes:ink', ['nyagibits_bytes:ink', 'nyagibits_bytes:thin_casing'])
                        ]).loops(4).transitionalItem('nyagibits_bytes:ink').id('compression:compression/nyagibits_bytes/assembly/ink_cartridge')
            //Pen
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:pen',
                    ], 'nyagibits_bytes:pen_assembly',
                        [
                            e.recipes.createDeploying('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly', 'thermal:cured_rubber']),
                            e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly']),
                            e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly']),
                            e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly']),
                            e.recipes.createPressing('nyagibits_bytes:pen_assembly', ['nyagibits_bytes:pen_assembly'])
                        ]).loops(1).transitionalItem('nyagibits_bytes:ink').id('compression:compression/nyagibits_bytes/assembly/pen')
            //Crystal Harmonizer
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:crystal_harmonizer',
                    ], 'minecraft:comparator',
                        [
                            e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'ae2:certus_quartz_crystal']),
                            e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'ae2:fluix_crystal']),
                            e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'ae2:charged_certus_quartz_crystal']),
                            e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'byg:quartz_crystal']),
                            e.recipes.createDeploying('minecraft:comparator', ['minecraft:comparator', 'minecraft:redstone'])
                        ]).loops(2).transitionalItem('minecraft:comparator').id('compression:compression/nyagibits_bytes/assembly/crystal_harmonizer')
            //Energized Frame
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:energized_frame',
                    ], 'quark:framed_glass',
                        [
                            e.recipes.createDeploying('quark:framed_glass', ['quark:framed_glass', 'ae2:certus_quartz_dust']),
                            e.recipes.createDeploying('quark:framed_glass', ['quark:framed_glass', 'create:sturdy_sheet']),
                            e.recipes.createDeploying('quark:framed_glass', ['quark:framed_glass', 'create:brass_sheet'])
                        ]).loops(1).transitionalItem('quark:framed_glass').id('compression:compression/nyagibits_bytes/assembly/energized_frame')
            //Energized Wires
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:energized_wires',
                    ], 'ae2:quartz_fiber',
                        [
                            e.recipes.createDeploying('ae2:quartz_fiber', ['ae2:quartz_fiber', 'ae2:certus_quartz_dust']),
                            e.recipes.createDeploying('ae2:quartz_fiber', ['ae2:quartz_fiber', 'create:sturdy_sheet']),
                            e.recipes.createDeploying('ae2:quartz_fiber', ['ae2:quartz_fiber', 'create:brass_sheet'])
                        ]).loops(1).transitionalItem('ae2:quartz_fiber').id('compression:compression/nyagibits_bytes/assembly/energized_wires')
            //Skystone Shielding
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:skystone_shielding',
                    ], 'create:sturdy_sheet',
                        [
                            e.recipes.createDeploying('create:sturdy_sheet', ['create:sturdy_sheet', 'ae2:sky_stone_slab']),
                            e.recipes.createDeploying('create:sturdy_sheet', ['create:sturdy_sheet', 'ae2:sky_dust']),
                            e.recipes.createDeploying('create:sturdy_sheet', ['create:sturdy_sheet', 'create:iron_sheet'])
                        ]).loops(4).transitionalItem('create:sturdy_sheet').id('compression:compression/nyagibits_bytes/assembly/skystone_shielding')
            //Diamond Shard
                e.recipes.createSequencedAssembly([
                    '4x nyagibits_bytes:diamond_shard',
                    ], 'minecraft:diamond',
                        [
                            e.recipes.createPressing('minecraft:diamond', ['minecraft:diamond']),
                        ]).loops(16).transitionalItem('minecraft:diamond').id('compression:compression/nyagibits_bytes/assembly/diamond_shard')
            //Etched Redstone Plates
                e.recipes.createSequencedAssembly([
                    '9x nyagibits_bytes:etched_redstone_plate',
                    ], 'minecraft:redstone_block',
                        [
                            e.recipes.createDeploying('minecraft:redstone_block', ['minecraft:redstone_block', 'ae2:quartz_fiber']),
                            e.recipes.createPressing('minecraft:redstone_block', ['minecraft:redstone_block']),
                            e.recipes.createCutting('minecraft:redstone_block', ['minecraft:redstone_block'])
                        ]).loops(1).transitionalItem('minecraft:redstone_block').id('compression:compression/nyagibits_bytes/assembly/etched_redstone_plate')
            //Basic Composite Plates
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:basic_composite_plate',
                    ], 'nyagibits_bytes:basic_composite_material',
                        [
                            e.recipes.createPressing('nyagibits_bytes:basic_composite_material', ['nyagibits_bytes:basic_composite_material']),
                        ]).loops(4).transitionalItem('nyagibits_bytes:basic_composite_material').id('compression:compression/nyagibits_bytes/assembly/basic_composite_plate')
            //Used Crude Materials Properties Test
                e.recipes.createSequencedAssembly([
                    'nyagibits_bytes:used_crude_material_properties_test',
                    ], 'nyagibits_bytes:crude_material_properties_test',
                        [
                            e.recipes.createPressing('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test']),
                            e.recipes.createDeploying('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test','nyagibits_bytes:bottle_of_malic_and_citric_acid']),
                            e.recipes.createFilling('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test', Fluid.lava(100)]),
                            e.recipes.createCutting('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test']),
                            e.recipes.createDeploying('nyagibits_bytes:crude_material_properties_test', ['nyagibits_bytes:crude_material_properties_test','nyagibits_bytes:pen'])
                        ]).loops(1).transitionalItem('nyagibits_bytes:crude_material_properties_test').id('compression:compression/nyagibits_bytes/assembly/crude_material_properties_test')

    })