ServerEvents.recipes(event => {
//Vanilla
    //------------------------------------------------------------------
    //Removal 
        event.remove({output: 'minecraft:white_wool'});
        event.remove({output: ['minecraft:wooden_shovel', 'minecraft:wooden_sword','minecraft:wooden_pickaxe','minecraft:wooden_axe','minecraft:wooden_hoe']})
        event.remove({output: ['minecraft:stone_shovel', 'minecraft:stone_sword','minecraft:stone_pickaxe','minecraft:stone_axe','minecraft:stone_hoe']})
        event.remove({output: ['minecraft:iron_shovel', 'minecraft:iron_sword','minecraft:iron_pickaxe','minecraft:iron_axe','minecraft:iron_hoe']})
        event.remove({output: ['minecraft:golden_shovel', 'minecraft:golden_sword','minecraft:golden_pickaxe','minecraft:golden_axe','minecraft:golden_hoe']})
        event.remove({output: ['minecraft:diamond_shovel', 'minecraft:diamond_sword','minecraft:diamond_pickaxe','minecraft:diamond_axe','minecraft:diamond_hoe']})
        event.remove({output: ['minecraft:netherite_shovel','minecraft:netherite_sword','minecraft:netherite_pickaxe','minecraft:netherite_axe','minecraft:netherite_hoe']})
    //------------------------------------------------------------------
    //Vanilla Items Shapeless
        //Paper
        event.remove({output: 'minecraft:paper'});
        event.shapeless('2x minecraft:paper',['farmersdelight:tree_bark', 'farmersdelight:tree_bark', 'farmersdelight:tree_bark'])
    //------------------------------------------------------------------
    //Vanilla Items Shaped
        //Crafting Table 
            event.remove({output:'minecraft:crafting_table'});
            event.shaped( 
                Item.of('minecraft:crafting_table', 1), 
                [ 
                    'AB', 
                    'BA'  
                ],
                {
                    A: '#minecraft:logs', 
                    B: '#minecraft:planks'
                })
        //Cobble Slab
            event.remove({output:'minecraft:cobblestone_slab'});
            event.shaped(
                Item.of('minecraft:cobblestone_slab', 3), 
                [ 
                    'ABA' 
                ],
                {
                    A: 'minecraft:cobblestone', 
                    B: 'minecraft:gravel'
                })     
        //Furnace
            event.remove({output:'minecraft:furnace'});
            event.shaped(
                Item.of('minecraft:furnace'), 
                [ 
                    'AAA',
                    'B B',
                    'BBB'
                ],
                {
                    A: 'minecraft:cobblestone_slab', 
                    B: 'minecraft:cobblestone'
                })    
        //Blast Furnace
            event.remove({output:'minecraft:blast_furnace'});
            event.shaped(
                Item.of('minecraft:blast_furnace'), 
                [ 
                    'DEE',
                    'DCB',
                    'AAA'
                ],
                {
                    A: 'botania:polished_livingrock', 
                    B: 'minecraft:iron_trapdoor',
                    C: 'minecraft:furnace',
                    D: 'create:industrial_iron_block',
                    E: 'create:iron_sheet'

                })    
        //Piston
            event.remove({output:'minecraft:piston'});
            event.shaped(
                Item.of('minecraft:piston'), 
                [ 
                    'AAA',
                    'BCB',
                    'BDB'
                ],
                {
                    A: '#minecraft:planks', 
                    B: 'nyagibits_bytes:livisite_cobble',
                    C: 'create:piston_extension_pole',
                    D: 'minecraft:redstone'

                })    
        //Bucket
            event.remove({output:'minecraft:bucket'});
            event.shaped(
                Item.of('minecraft:bucket'), 
                [ 
                    'A A',
                    ' A '
                ],
                {
                    A: 'create:iron_sheet'

                })       
        
    //------------------------------------------------------------------
    //Blast Furnace
        //Glass
            event.remove({output:'minecraft:glass'});
            event.blasting('minecraft:glass', 'minecraft:sand').xp(1.5);

})