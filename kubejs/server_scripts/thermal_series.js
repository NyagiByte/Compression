ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Drill
            e.shaped(Item.of('thermal:drill_head'), 
                [ 
                    ' AA', 
                    'ABA',
                    'BA '  
                ], {
                        A: 'create:iron_sheet',
                        B: 'create:shaft'
                })
        //Sawblade
            e.shaped(Item.of('thermal:saw_blade'), 
                [ 
                    'AA ', 
                    'ABA',
                    ' AA'  
                ], {
                    A: 'create:iron_sheet',
                    B: 'create:shaft'
                })
    //------------------------------------------------------------------
})