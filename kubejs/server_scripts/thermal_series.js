ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Shaped Crafting
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