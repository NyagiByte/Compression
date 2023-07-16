ServerEvents.recipes(event => {
//Vanilla

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
                Item.of('minecraft:furnace', 1), 
                [ 
                    'AAA',
                    'B B',
                    'BBB'
                ],
                {
                    A: 'minecraft:cobblestone_slab', 
                    B: 'minecraft:cobblestone'
                })  
    //------------------------------------------------------------------
            

})