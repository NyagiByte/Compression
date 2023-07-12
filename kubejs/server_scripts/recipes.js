ServerEvents.recipes(event => {
    //MOD NUKING
    event.remove({mod:'create'});
    event.remove({mod:'botania'});
    event.remove({mod:'quark'});
    event.remove({mod: 'aiot-botania'})
    //--------
    //Individual item nuking
    event.remove({output:'minecraft:crafting_table'});
    event.remove({output:'minecraft:cobblestone_slab'});
    event.remove({output:'minecraft:furnace'});
    event.remove({output: 'minecraft:paper'});
    //------------------------------------------------------------------
    //Vanilla Items Shaped
        //Crafting Table
            event.shaped(
                Item.of('minecraft:crafting_table', 1), 
                [ 
                    'AB', 
                    'BA'  
                ],
                {
                    A: '#minecraft:logs', 
                    B: '#minecraft:planks'
                }),
        //Cobble Slab
            event.shaped(
                Item.of('minecraft:cobblestone_slab', 3), 
                [ 
                    'ABA' 
                ],
                {
                    A: 'minecraft:cobblestone', 
                    B: 'minecraft:gravel'
                }),     
        //Furnace
            event.shaped(
                Item.of('minecraft:furnace', 1), 
                [ 
                    'AAA',
                    'B B',
                    'BBB'
                ],
                {
                    A: 'minecraft:cobblestone_slab', 
                    B: 'minecraft:cobblestone'
                }),  
    //------------------------------------------------------------------
    //Vanilla Items Shapeless
        event.shapeless('2x minecraft:paper',['farmersdelight:tree_bark', 'farmersdelight:tree_bark', 'farmersdelight:tree_bark'])
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
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Shapeless 
        event.shapeless('4x nyagibits_bytes:crude_abrasive',['minecraft:sand', 'minecraft:gravel'])
    //------------------------------------------------------------------
    //Botania Items Shaped
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
    //------------------------------------------------------------------
    //Botania Items Shapeless
        //Living Wood Planks
            event.shapeless(
                Item.of('botania:livingwood_planks', 4), 
                [ 
                    'botania:livingwood_log'
                ]
            )
    //------------------------------------------------------------------
    //Create Shaped
        //Small Cog
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
        //Large Cog
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
    //------------------------------------------------------------------
    //Create Shapeless
        event.shapeless(Item.of('create:sand_paper', '{Damage:0}'),['minecraft:paper', 'nyagibits_bytes:crude_abrasive'])
    //------------------------------------------------------------------
    //Create right click recipies
        //Andesite Casing
                ////////TEMPORARY RECIPE\\\\\\\\\\\\\\
                event.shapeless('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
            event.recipes.createDeploying('create:andesite_casing',['nyagibits_bytes:etched_living_wood', 'nyagibits_bytes:livisite_alloy'])
    //------------------------------------------------------------------
    //Create Sandpaper
        //Polished Living Rock
            event.recipes.createSandpaperPolishing('botania:polished_livingrock',['botania:livingrock'])
    //------------------------------------------------------------------
    //AIOT Items
        //Living Rock Sword
            event.shaped(Item.of('aiotbotania:livingrock_sword', '{Damage:0}'), [
                'A',
                'A',
                'B'
            ], {
                A: 'botania:livingrock',
                B: 'botania:livingwood_twig'
            })
        //Living Rock Axe
            event.shaped(Item.of('aiotbotania:livingrock_axe', '{Damage:0}'), [
                'AA',
                'AB',
                ' B'
            ], {
                A: 'botania:livingrock',
                B: 'botania:livingwood_twig'
            })
        //Living Rock Pick
            event.shaped(Item.of('aiotbotania:livingrock_pickaxe', '{Damage:0}'), [
                'AAA',
                ' B ',
                ' B '
            ], {
                A: 'botania:livingrock',
                B: 'botania:livingwood_twig'
            })
        //Living Rock Shovel
            event.shaped(Item.of('aiotbotania:livingrock_shovel', '{Damage:0}'), [
                'A',
                'B',
                'B'
            ], {
                A: 'botania:livingrock',
                B: 'botania:livingwood_twig'
            })
        //Living Rock Hoe
            event.shaped(Item.of('aiotbotania:livingrock_hoe', '{Damage:0}'), [
                'AA',
                ' B',
                ' B'
            ], {
                A: 'botania:livingrock',
                B: 'botania:livingwood_twig'
            })
        //Living Shears
            event.shaped(Item.of(Item.of('aiotbotania:livingrock_shears', '{Damage:0}')), [
                'A ',
                ' A'
            ], {
                A: 'botania:livingrock'
            })
        //Living AIOT
            event.shaped(Item.of(Item.of('aiotbotania:livingrock_aiot', '{Damage:0}')), [
                ' F ',
                'CAE',
                'BD '
            ], {
                A: 'nyagibits_bytes:livisite_alloy',
                B: Item.of('aiotbotania:livingrock_sword', '{Damage:0}'),
                C: Item.of('aiotbotania:livingrock_axe', '{Damage:0}'),
                D: Item.of('aiotbotania:livingrock_pickaxe', '{Damage:0}'),
                E: Item.of('aiotbotania:livingrock_hoe', '{Damage:0}'),
                F: Item.of('aiotbotania:livingrock_shovel', '{Damage:0}')
            })
        //------------------------------------------------------------------
        //Create Recipes Shaped
            event.shaped(
                Item.of('create:shaft', 8), 
                [ 
                    'A', 
                    'A'  
                ],
                {
                    A: 'nyagibits_bytes:livisite_alloy'
                }
                )
        //------------------------------------------------------------------
        //Botania Recipes Shaped
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
    //Botania Pure Daisy
        //Living Rock
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

})