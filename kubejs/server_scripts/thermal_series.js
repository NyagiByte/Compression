ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Drill
            e.shaped('thermal:drill_head', 
                [ 
                    ' AA', 
                    'ABA',
                    'BA '  
                ], {
                        A: 'create:iron_sheet',
                        B: 'create:shaft'
                }).id('compression:compression/thermal/shaped/drill_head')
        //Sawblade
            e.shaped('thermal:saw_blade', 
                [ 
                    'AA ', 
                    'ABA',
                    ' AA'  
                ], {
                    A: 'create:iron_sheet',
                    B: 'create:shaft'
                }).id('compression:compression/thermal/shaped/saw_blade')
//------------------------------------------------------------------
})