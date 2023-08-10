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
    //Nyagi's Bits & Bytes Sandpaper recipes
        //Polished Living Rock
        event.recipes.createSandpaperPolishing('nyagibits_bytes:polished_livisite',['nyagibits_bytes:livisite_stone'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Compacting recipes
        //Pile of Crude Mechanical Parts
            event.recipes.create.compacting(['nyagibits_bytes:pile_of_crude_mechanical_parts'], ['create:wrench', 'create:electron_tube', 'create:gantry_shaft', 'create:brass_hand', 'nyagibits_bytes:pile_of_cogs', 'create:hand_crank', 'create:andesite_casing', 'create:brass_sheet'])
        //Used Crude Compression Test
            event.recipes.create.compacting(['nyagibits_bytes:used_crude_compression_test'], ['nyagibits_bytes:crude_compression_test'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Create Mixing
        //Soild Sample
            event.recipes.create.mixing('4x nyagibits_bytes:soil_sample',['minecraft:coarse_dirt', 'minecraft:sand', 'minecraft:clay', 'minecraft:mud'])
        //Used Crude Entropy Test
            event.recipes.create.mixing('nyagibits_bytes:used_crude_entropy_test',['nyagibits_bytes:crude_entropy_test']).heated()
        //Ink
            event.recipes.create.mixing('2x nyagibits_bytes:ink',['minecraft:ink_sac', Fluid.of('water', 1000)]).heated()

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
        //------------------------------------------------------------------
        })
