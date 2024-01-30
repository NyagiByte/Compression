ServerEvents.recipes(event => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Book
            //Tier 0
                event.shaped('minecraft:book', 
                    [ 
                        'AA ', 
                        'AB '
                    ],
                    {
                        A: 'minecraft:paper', 
                        B: 'farmersdelight:canvas'
                    }).id('compression:compression/farmersdelight/shaped/book/tier0')
            //Tier 1
                event.shaped('4x minecraft:book', 
                    [ 
                        'C  ', 
                        ' AA',
                        ' AB'
                    ],
                    {
                        A: 'minecraft:paper', 
                        B: 'farmersdelight:canvas',
                        C: 'minecraft:leather'
                    }).id('compression:compression/farmersdelight/shaped/book/tier1')
//------------------------------------------------------------------
    //Create Mixing
        //Heated        
            //Straw
                event.recipes.create.mixing('farmersdelight:straw',['#byg:all/saplings']).heated().id('compression:compression/farmersdelight/mixing/straw')    
})