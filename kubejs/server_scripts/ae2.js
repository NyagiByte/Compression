ServerEvents.recipes(event => {
    //Applied Energistics 2
    
    //------------------------------------------------------------------
    //Applied Energistics 2 Shaped
        //Meteorite
            event.remove({output: 'ae2:meteorite_compass'});
            event.shaped(
                Item.of('ae2:meteorite_compass'), 
                [ 
                    ' AB', 
                    'ACA',
                    ' A '  
                ],
                {
                    A: 'create:iron_sheet', 
                    B: 'minecraft:amethyst_shard',
                    C: 'botania:solegnolia'
                })

})