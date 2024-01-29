ServerEvents.recipes(event => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Book
            //Tier 0
                event.shaped(
                    Item.of('minecraft:book'), 
                    [ 
                        'AA ', 
                        'AB '
                    ],
                    {
                        A: 'minecraft:paper', 
                        B: 'farmersdelight:canvas'
                    })
            //Tier 1
                event.shaped(
                    Item.of('4x minecraft:book'), 
                    [ 
                        'C  ', 
                        ' AA',
                        ' AB'
                    ],
                    {
                        A: 'minecraft:paper', 
                        B: 'farmersdelight:canvas',
                        C: 'minecraft:leather'
                    })
//------------------------------------------------------------------
    //Create Mixing
        //Heated        
            //Straw
                event.recipes.create.mixing('farmersdelight:straw',['#byg:all/saplings']).heated()    
})