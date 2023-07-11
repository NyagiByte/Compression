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
    //Botania Items Shaped
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
    //Create Shapped
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