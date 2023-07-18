ServerEvents.recipes(event => {
    //Thermal Series

    //------------------------------------------------------------------
    //Thermal Series Shapped
        //Drill
            event.remove({output: 'thermal:drill_head'});
            event.shaped(Item.of('thermal:drill_head'), 
                [ 
                    ' AA', 
                    'ABA',
                    'BA '  
                ],
                {
                    A: 'create:iron_sheet',
                    B: 'create:shaft'
                }
                )
        //Sawblade
            event.remove({output: 'thermal:saw_blade'});
            event.shaped(Item.of('thermal:saw_blade'), 
                [ 
                    'AA ', 
                    'ABA',
                    ' AA'  
                ],
                {
                    A: 'create:iron_sheet',
                    B: 'create:shaft'
                }
                )
    //------------------------------------------------------------------
})