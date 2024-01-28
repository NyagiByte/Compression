ServerEvents.recipes(event => {
    //Farmers Delights
    //------------------------------------------------------------------
    //Shaped Crafting
        //Book - FD - T0
            event.remove({output:'minecraft:book'});
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
        //Book - FD - T1
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
    //Create Heated Mixing
        //Straw
            event.recipes.create.mixing('farmersdelight:straw',['#byg:all/saplings']).heated()    
})