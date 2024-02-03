ServerEvents.recipes(e => {
//------------------------------------------------------------------
	//Tools
    	e.remove({output: ['minecraft:wooden_shovel', 'minecraft:wooden_sword','minecraft:wooden_pickaxe','minecraft:wooden_axe','minecraft:wooden_hoe']})
    	e.remove({output: ['minecraft:stone_shovel', 'minecraft:stone_sword','minecraft:stone_pickaxe','minecraft:stone_axe','minecraft:stone_hoe']})
    	e.remove({output: ['minecraft:iron_shovel', 'minecraft:iron_sword','minecraft:iron_pickaxe','minecraft:iron_axe','minecraft:iron_hoe']})
    	e.remove({output: ['minecraft:golden_shovel', 'minecraft:golden_sword','minecraft:golden_pickaxe','minecraft:golden_axe','minecraft:golden_hoe']})
    	e.remove({output: ['minecraft:diamond_shovel', 'minecraft:diamond_sword','minecraft:diamond_pickaxe','minecraft:diamond_axe','minecraft:diamond_hoe']})
    	e.remove({output: ['minecraft:netherite_shovel','minecraft:netherite_sword','minecraft:netherite_pickaxe','minecraft:netherite_axe','minecraft:netherite_hoe']})
    //Items
    	e.remove({output:'minecraft:bucket'})
    	e.remove({output: 'minecraft:paper'})
        e.remove({output: 'minecraft:book'})
    //Blocks
    	e.remove({output: 'minecraft:white_wool'})
    	e.remove({output:'minecraft:crafting_table'})
    	e.remove({id:'minecraft:cobblestone_slab'})
    	e.remove({output:'minecraft:furnace'})
    	e.remove({output:'minecraft:blast_furnace'})
    	e.remove({output:'minecraft:piston'})
    	e.remove({output:'minecraft:glass'})
//------------------------------------------------------------------
})