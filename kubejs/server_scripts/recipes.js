ServerEvents.recipes(event => {
    //MOD NUKING
    event.remove({mod:'create'});
    event.remove({mod:'botania'});
    //------------------------------------------------------------------
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
	}
	)

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
    
})