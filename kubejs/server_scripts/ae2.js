ServerEvents.recipes(event => {
    //Applied Energistics 2
    
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
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'ae2:energy_acceptor']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
        //Energy Acceptor
            e.remove({output: 'ae2:energy_acceptor'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:energy_acceptor'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:energized_frame']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
        //Drive
            e.remove({output: 'ae2:drive'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:drive'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'ae2:sky_stone_chest']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
        //Inscription Press
            e.remove({output: 'ae2:inscriber'});
            e.recipes.createSequencedAssembly([
                    Item.of('ae2:inscriber'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'create:mechanical_press']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
        //Fluix Cables
            e.remove({output: 'ae2:fluix_glass_cable'});
            e.recipes.createSequencedAssembly([
                    Item.of('64x ae2:fluix_glass_cable'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'ae2:quartz_fiber']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
        //Smart Fluix Cables
            e.remove({output: 'ae2:fluix_smart_cable'});
            e.recipes.createSequencedAssembly([
                    Item.of('32x ae2:fluix_smart_cable'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'ae2:fluix_covered_cable']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')
        //Dense Fluix Cables
            e.remove({output: 'ae2:fluix_smart_dense_cable'});
            e.recipes.createSequencedAssembly([
                    Item.of('16x ae2:fluix_smart_dense_cable'),
                ], 'nyagibits_bytes:ae2_assembly',
                    [
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'ae2:fluix_covered_dense_cable']),
                        e.recipes.createDeploying('nyagibits_bytes:ae2_assembly', ['nyagibits_bytes:ae2_assembly', 'nyagibits_bytes:ae2_schematic'])
                    ]).loops(1).transitionalItem('nyagibits_bytes:ae2_assembly')

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