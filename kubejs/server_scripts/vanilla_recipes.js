ServerEvents.recipes(event => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Crafting Table 
            event.shaped('minecraft:crafting_table', 
                [ 
                    'AB', 
                    'BA'  
                ],
                {
                    A: '#minecraft:logs', 
                    B: '#minecraft:planks'
                }).id('compression:compression/vanilla/shaped/crafting_table')
        //Cobble Slab
            event.shaped('3x minecraft:cobblestone_slab', 
                [ 
                    'ABA' 
                ],
                {
                    A: 'minecraft:cobblestone', 
                    B: 'minecraft:gravel'
                }).id('compression:compression/vanilla/shaped/cobblestone_slab')     
        //Furnace
            event.shaped('minecraft:furnace', 
                [ 
                    'AAA',
                    'B B',
                    'BBB'
                ],
                {
                    A: 'minecraft:cobblestone_slab', 
                    B: 'minecraft:cobblestone'
                }).id('compression:compression/vanilla/shaped/furnace')   
        //Blast Furnace
            event.shaped('minecraft:blast_furnace', 
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

                }).id('compression:compression/vanilla/shaped/blast_furnace')    
        //Piston
            event.shaped('minecraft:piston', 
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

                }).id('compression:compression/vanilla/shaped/piston')    
        //Bucket
            event.shaped('minecraft:bucket', 
                [ 
                    'A A',
                    ' A '
                ],
                {
                    A: 'create:iron_sheet'

                }).id('compression:compression/vanilla/shaped/bucket')       
    //Shapeless Crafting
        //Paper
        event.shapeless('2x minecraft:paper',['farmersdelight:tree_bark', 'farmersdelight:tree_bark', 'farmersdelight:tree_bark']).id('compression:compression/vanilla/shapeless/paper')    
//------------------------------------------------------------------
    //Blasting
        //Glass
            event.blasting('minecraft:glass', 'minecraft:sand').xp(1.5).id('compression:compression/vanilla/blasting/glass');
//------------------------------------------------------------------
})