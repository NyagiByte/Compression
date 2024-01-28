ServerEvents.recipes(event => {
    //Applied Energistics 2
    //------------------------------------------------------------------
    //Removal 
        event.remove({output: 'minecraft:white_wool'});
        event.remove({output: ['ae2:certus_quartz_shovel', 'ae2:certus_quartz_sword','ae2:certus_quartz_pickaxe','ae2:certus_quartz_axe','ae2:certus_quartz_hoe']})
        event.remove({output: ['ae2:nether_quartz_shovel', 'ae2:nether_quartz_sword','ae2:nether_quartz_pickaxe','ae2:nether_quartz_axe','ae2:nether_quartz_hoe']})
        event.remove({output: ['ae2:fluix_shovel', 'ae2:fluix_sword','ae2:fluix_pickaxe','ae2:fluix_axe','ae2:fluix_hoe']})
    
    //------------------------------------------------------------------
    //Applied Energistics 2 Shaped
        //Meteorite
            event.remove({output: 'ae2:meteorite_compass'});
            event.shaped(
                Item.of('ae2:meteorite_compass'), 
                [ 
                    ' AB', 
                    'ACA',
                    ' A '  
                ],
                {
                    A: 'create:iron_sheet', 
                    B: 'minecraft:amethyst_shard',
                    C: 'botania:solegnolia'
                })


//------------------------------------------------------------------
    //Applied Energistics 2 Cutting
        //Silicon
            event.remove({output: 'ae2:silicon'});
            event.recipes.create.cutting('2x ae2:silicon',['nyagibits_bytes:crude_silicon_boule'])

//------------------------------------------------------------------
})
//------------------------------------------------------------------
    //Create Sequenced Assembly
    ServerEvents.recipes(e => {
        //Controller
            e.remove({output: 'ae2:controller'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:controller'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:controller', 'ae2:energy_acceptor']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:controller', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:controller')
        //Energy Acceptor
            e.remove({output: 'ae2:energy_acceptor'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:energy_acceptor'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:energy_acceptor', 'nyagibits_bytes:energized_frame']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:energy_acceptor', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:energy_acceptor')
        //Drive
            e.remove({output: 'ae2:drive'});
            e.recipes.createSequencedAssembly([
                    Item.of('2x ae2:drive'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:drive', 'ae2:sky_stone_chest']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:drive', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:drive')
        //Inscription Press
            e.remove({output: 'ae2:inscriber'});
            e.recipes.createSequencedAssembly([
                    Item.of('2x ae2:inscriber'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:inscriber', 'create:mechanical_press']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:inscriber', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:inscriber')
        //Fluix Cables
            e.remove({output: 'ae2:fluix_glass_cable'});
            e.recipes.createSequencedAssembly([
                    Item.of('64x ae2:fluix_glass_cable'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:fluix_glass_cable', 'ae2:quartz_fiber']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:fluix_glass_cable', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:fluix_glass_cable')
        //Smart Fluix Cables
            e.remove({output: 'ae2:fluix_smart_cable'});
            e.recipes.createSequencedAssembly([
                    Item.of('32x ae2:fluix_smart_cable'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:fluix_smart_cable', 'ae2:fluix_covered_cable']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:fluix_smart_cable', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:fluix_smart_cable')
        //Dense Fluix Cables
            e.remove({output: 'ae2:fluix_smart_dense_cable'});
            e.recipes.createSequencedAssembly([
                    Item.of('16x ae2:fluix_smart_dense_cable'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:fluix_smart_dense_cable', 'ae2:fluix_covered_dense_cable']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:fluix_smart_dense_cable', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:fluix_smart_dense_cable')
        //Charged Light Fixture
            e.remove({output: 'ae2:quartz_fixture'});
            e.recipes.createSequencedAssembly([
                    Item.of('128x ae2:quartz_fixture'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:quartz_fixture', 'byg:glowstone_lantern']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:quartz_fixture', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:quartz_fixture')
        //Light Detecting Fixture
            e.remove({output: 'ae2:light_detector'});
            e.recipes.createSequencedAssembly([
                    Item.of('128x ae2:light_detector'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:light_detector', 'minecraft:daylight_detector']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:light_detector', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:light_detector')
        //Skystone Tank
            e.remove({output: 'ae2:sky_stone_tank'});
            e.recipes.createSequencedAssembly([
                    Item.of('10x ae2:sky_stone_tank'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:sky_stone_tank', 'create:fluid_tank']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:sky_stone_tank', 'ae2:smooth_sky_stone_block']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:sky_stone_tank', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:sky_stone_tank')
        //Charger
            e.remove({output: 'ae2:charger'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:charger'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:charger', 'nyagibits_bytes:raw_magnetite']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:charger', 'thermal:rf_potato']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:charger', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:sky_stone_tank')
        //Vibration Chamber
            e.remove({output: 'ae2:vibration_chamber'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:vibration_chamber'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:vibration_chamber', 'create:blaze_burner']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:vibration_chamber', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:vibration_chamber')
        //Interface
            e.remove({output: 'ae2:interface'});
            e.recipes.createSequencedAssembly([
                    Item.of('4x ae2:interface'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:interface', 'minecraft:trapped_chest']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:interface', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:interface')
        //Cell Workbench
            e.remove({output: 'ae2:cell_workbench'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:cell_workbench'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:cell_workbench', 'immersiveengineering:craftingtable']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:cell_workbench', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:cell_workbench')
        //IO Port
            e.remove({output: 'ae2:io_port'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:io_port'),
                ], 'ae2:cell_workbench',
                    [
                        e.recipes.createDeploying('ae2:cell_workbench', ['ae2:io_port', 'botania:lens_magnet']),
                        e.recipes.createDeploying('ae2:cell_workbench', ['ae2:io_port', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:io_port')
        //Item Cell Housing
            e.remove({output: 'ae2:item_cell_housing'});
            e.recipes.createSequencedAssembly([
                    Item.of('5x ae2:item_cell_housing'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:item_cell_housing', 'ironchests:diamond_chest']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:item_cell_housing', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:item_cell_housing')
        //Fluid Cell Housing
            e.remove({output: 'ae2:fluid_cell_housing'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:fluid_cell_housing'),
                ], 'ae2:item_cell_housing',
                    [
                        e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:fluid_cell_housing', 'immersiveengineering:slab_sheetmetal_constantan']),
                        e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:fluid_cell_housing', 'pneumaticcraft:small_tank']),
                        e.recipes.createDeploying('ae2:item_cell_housing', ['ae2:fluid_cell_housing', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:fluid_cell_housing')
        //Ae2 Chest
            e.remove({output: 'ae2:chest'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:chest'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:chest', 'ae2:smooth_sky_stone_chest']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:chest', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:chest')
        //1k Item Storage Cell
            e.remove({output: 'ae2:cell_component_1k'});
            e.recipes.createSequencedAssembly([
                    Item.of('20x ae2:cell_component_1k'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:cell_component_1k', 'ae2:chest']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['ae2:cell_component_1k', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:cell_component_1k')
        //4k Item Storage Cell
            e.remove({output: 'ae2:cell_component_4k'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:cell_component_4k'),
                ], 'ae2:cell_component_1k',
                    [
                        e.recipes.createDeploying('ae2:cell_component_1k', ['ae2:cell_component_4k', 'botania:quartz_mana']),
                        e.recipes.createDeploying('ae2:cell_component_1k', ['ae2:cell_component_4k', 'immersiveengineering:circuit_board']),
                        e.recipes.createDeploying('ae2:cell_component_1k', ['ae2:cell_component_4k', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('ae2:cell_component_4k')

        //To-be-added
            e.remove({output: 'ae2:wireless_access_point'});
            e.remove({output: 'ae2:tiny_tnt'});
            e.remove({output: 'ae2:security_station'});
            e.remove({output: 'ae2:quantum_ring'});
            e.remove({output: 'ae2:quantum_link'});
            e.remove({output: 'ae2:spatial_pylon'});
            e.remove({output: 'ae2:spatial_io_port'});
            e.remove({output: 'ae2:condenser'});
            e.remove({output: 'ae2:quartz_growth_accelerator'});
            e.remove({output: 'ae2:energy_cell'});
            e.remove({output: 'ae2:dense_energy_cell'});
            e.remove({output: 'ae2:crafting_unit'});
            e.remove({output: 'ae2:crafting_accelerator'});
            e.remove({output: 'ae2:1k_crafting_storage'});
            e.remove({output: 'ae2:4k_crafting_storage'});
            e.remove({output: 'ae2:16k_crafting_storage'});
            e.remove({output: 'ae2:64k_crafting_storage'});
            e.remove({output: 'ae2:256k_crafting_storage'});
            e.remove({output: 'ae2:crafting_monitor'});
            e.remove({output: 'ae2:pattern_provider'});
            e.remove({output: 'ae2:molecular_assembler'});
            e.remove({output: 'ae2:spatial_anchor'});
            e.remove({output: 'ae2:crank'});
            e.remove({output: 'ae2:cell_component_16k'});
            e.remove({output: 'ae2:cell_component_64k'});
            e.remove({output: 'ae2:cell_component_256k'});
            e.remove({output: 'ae2:spatial_cell_component_2'});
            e.remove({output: 'ae2:spatial_cell_component_16'});
            e.remove({output: 'ae2:spatial_cell_component_128'});
            e.remove({output: 'ae2:item_storage_cell_1k'});
            e.remove({output: 'ae2:item_storage_cell_4k'});
            e.remove({output: 'ae2:item_storage_cell_16k'});
            e.remove({output: 'ae2:item_storage_cell_64k'});
            e.remove({output: 'ae2:item_storage_cell_256k'});
        //Logic Processor
            e.remove({output: 'ae2:logic_processor'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:logic_processor'),
                ], 'create:golden_sheet',
                    [
                        e.recipes.createDeploying('create:golden_sheet', ['create:golden_sheet', 'ae2:fluix_covered_dense_cable'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
    //------------------------------------------------------------------
    })