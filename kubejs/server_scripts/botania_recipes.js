ServerEvents.recipes(event => {
//Botania

//------------------------------------------------------------------
    //Botania Items Shapeless
        //Living Wood Planks
        event.shapeless(Item.of('botania:livingwood_planks', 4), [ 'botania:livingwood_log'])
//------------------------------------------------------------------
//Botania Recipes Shaped
    //Apothecary
        event.shaped(
            Item.of('botania:apothecary_default', 1), 
            [ 
                'ABA', 
                ' C ',
                'DDD'

            ],
            {
                A: '#minecraft:wooden_stairs',
                B: '#minecraft:wooden_slabs',
                C: '#forge:stripped_logs',
                D: '#minecraft:logs'
            }
            )
    //Living Wood Sticks
        event.shaped(
            Item.of('botania:livingwood_twig', 4), 
            [ 
                'A', 
                'A'  
            ],
            {
                A: 'botania:livingwood_planks',
            })
    //Living Wood Slabs
        event.shaped(
            Item.of('botania:livingwood_planks_slab', 6), 
            [ 
                'AAA'
            ],
            {
                A: 'botania:livingwood_planks',
            })
    //Living Stripped Wood Slabs
        event.shaped(
            Item.of('botania:stripped_livingwood_slab', 6), 
            [ 
                'AAA'
            ],
            {
                A: 'botania:stripped_livingwood',
            })
    //Living Wood Stairs
        event.shaped(
            Item.of('botania:livingwood_planks_stairs', 4), 
            [ 
                'A  ',
                'AA '
            ],
            {
                A: 'botania:livingwood_planks',
            })
    //Framed Living Wood
        event.shaped(
            Item.of('botania:framed_livingwood', 4), 
            [ 
                'A A',
                ' B ',
                'A A'
            ],
            {
                A: 'botania:livingwood_planks',
                B: 'botania:polished_livingrock'
            })
    //Pattern Living Wood
        event.shaped(
            Item.of('botania:pattern_framed_livingwood', 4), 
            [ 
                ' A ',
                'ABA',
                ' A '
            ],
            {
                A: 'botania:livingwood_planks',
                B: 'botania:polished_livingrock'
            })
    //All side living wood
        event.shaped(
            Item.of('botania:livingwood', 3), 
            [ 
                'AA',
                'AA'
            ],
            {
                A: 'botania:livingwood_log'
            })    
    //Living Stripped Wood Slabs
        event.shaped(
            Item.of('botania:livingwood_slab', 6), 
            [ 
                'AAA'
            ],
            {
                A: 'botania:livingwood'
            }) 
    //Living Wood Fence 
        event.shaped(
            Item.of('botania:livingwood_fence', 2), 
            [ 
                'ABA',
                'A A'
            ],
            {
                A: 'botania:livingwood_twig',
                B: 'botania:livingwood_planks_slab'
            })   
    //Living Rock Bricks
        event.shaped(
            Item.of('botania:livingrock_bricks', 4), 
            [ 
                'AA',
                'AA'
            ],
            {
                A: 'botania:polished_livingrock'
            })  
    //Living Rock Stairs
        event.shaped(
            Item.of('botania:livingrock_stairs', 4), 
            [ 
                'A  ',
                'AA '
            ],
            {
                A: 'botania:livingrock',
            })   
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
            })
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
            })
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
            })
    //------------------------------------------------------------------
    //Botania Sandpaper
        //Polished Living Rock
        event.recipes.createSandpaperPolishing('botania:polished_livingrock',['botania:livingrock'])
    //------------------------------------------------------------------
})