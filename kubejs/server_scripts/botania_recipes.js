ServerEvents.recipes(event => {
//------------------------------------------------------------------
    //Shaped
        //Apothecary
            event.shaped('botania:apothecary_default', 
                [ 
                    'ABA', 
                    ' C ',
                    'DDD'

                ], {
                    A: '#minecraft:wooden_stairs',
                    B: '#minecraft:wooden_slabs',
                    C: '#forge:stripped_logs',
                    D: '#minecraft:logs'
                }).id('compression:compression/botania/shaped/apothecary_default')
        //Living Wood Sticks
            event.shaped('4x botania:livingwood_twig', 
                [ 
                    'A', 
                    'A'  
                ], {
                    A: 'botania:livingwood_planks',
                }).id('compression:compression/botania/shaped/livingwood_twig')
        //Living Wood Slabs
            event.shaped('6x botania:livingwood_planks_slab', 
                [ 
                    'AAA'
                ], {
                    A: 'botania:livingwood_planks',
                }).id('compression:compression/botania/shaped/livingwood_planks_slab')
        //Living Stripped Wood Slabs
            event.shaped('6x botania:stripped_livingwood_slab', 
                [ 
                    'AAA'
                ], {
                    A: 'botania:stripped_livingwood',
                }).id('compression:compression/botania/shaped/stripped_livingwood_slab')
        //Living Wood Stairs
            event.shaped('4x botania:livingwood_planks_stairs', 
                [ 
                    'A  ',
                    'AA '
                ], {
                    A: 'botania:livingwood_planks',
                }).id('compression:compression/botania/shaped/livingwood_planks_stairs')
        //Framed Living Wood
            event.shaped('4x botania:framed_livingwood', 
                [ 
                    'A A',
                    ' B ',
                    'A A'
                ], {
                    A: 'botania:livingwood_planks',
                    B: 'botania:polished_livingrock'
                }).id('compression:compression/botania/shaped/framed_livingwood')
        //Pattern Living Wood
            event.shaped('4x botania:pattern_framed_livingwood', 
                [ 
                    ' A ',
                    'ABA',
                    ' A '
                ], {
                    A: 'botania:livingwood_planks',
                    B: 'botania:polished_livingrock'
                }).id('compression:compression/botania/shaped/pattern_framed_livingwood')
        //All side living wood
            event.shaped('3x botania:livingwood', 
                [ 
                    'AA',
                    'AA'
                ], {
                    A: 'botania:livingwood_log'
                }).id('compression:compression/botania/shaped/livingwood')    
        //Living Stripped Wood Slabs
            event.shaped('6x botania:livingwood_slab', 
                [ 
                    'AAA'
                ], {
                    A: 'botania:livingwood'
                }).id('compression:compression/botania/shaped/livingwood_slab') 
        //Living Wood Fence 
            event.shaped('2x botania:livingwood_fence', 
                [ 
                    'ABA',
                    'A A'
                ], {
                    A: 'botania:livingwood_twig',
                    B: 'botania:livingwood_planks_slab'
                }).id('compression:compression/botania/shaped/livingwood_fence')   
        //Living Rock Bricks
            event.shaped('4x botania:livingrock_bricks', 
                [ 
                    'AA',
                    'AA'
                ], {
                    A: 'botania:polished_livingrock'
                }).id('compression:compression/botania/shaped/livingrock_bricks')  
        //Living Rock Stairs
            event.shaped('4x botania:livingrock_stairs', 
                [ 
                    'A  ',
                    'AA '
                ], {
                    A: 'botania:livingrock',
                }).id('compression:compression/botania/shaped/livingrock_stairs')
    //Shapeless
        //Living Wood Planks
            event.shapeless('4x botania:livingwood_planks', [ 'botania:livingwood_log']).id('compression:compression/botania/shapeless/livingwood_planks')
//------------------------------------------------------------------
    //Botania Pure Daisy
        //Living Wood
            event.recipes.botania.pure_daisy({
                output: {
                    name: 'botania:livingwood_log'
                },
                input: {
                    type: 'block', //object type, can be "block", "state", "blocks" or "tag"
                    block: '#minecraft:oak_logs'
                },
                    time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
            }).id('compression:compression/botania/pure_daisy/livingwood_log')
        //Living Rock
            event.recipes.botania.pure_daisy({
                output: {
                    name: 'botania:livingrock'
                },
                input: {
                    type: 'block', //object type, can be "block", "state", "blocks" or "tag"
                    block: 'minecraft:smooth_stone'
                },
                    time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
            }).id('compression:compression/botania/pure_daisy/livingrock')
        //Living Root
            event.recipes.botania.pure_daisy({
                output: {
                    name: 'botania:root'
                },
                input: {
                    type: 'block', //object type, can be "block", "state", "blocks" or "tag"
                    block: 'nyagibits_bytes:etched_living_wood'
                },
                    time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
            }).id('compression:compression/botania/pure_daisy/root')
    //------------------------------------------------------------------
    //Botania Sandpaper
        //Polished Living Rock
        event.recipes.createSandpaperPolishing('botania:polished_livingrock',['botania:livingrock']).id('compression:compression/botania/polishing/polished_livingrock')
    //------------------------------------------------------------------
})