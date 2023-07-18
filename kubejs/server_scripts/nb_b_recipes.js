ServerEvents.recipes(event => {
    //Nyagi's Bits & Bytes Shaped

    //Note recipes dont need removal since the core mod has no recipes
    
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Shaped
        //Livisite Alloy Hand Craft
            event.shaped(
                Item.of('nyagibits_bytes:livisite_alloy', 1), 
                [ 
                    'AB', 
                    'BA'  
                ],
                {
                    A: 'nyagibits_bytes:livisite_stone', 
                    B: 'minecraft:iron_nugget'
                })
        //Livisite Alloy Hand Craft
            event.shaped(
                Item.of('nyagibits_bytes:etched_living_wood', 4), 
                [ 
                    'ABA', 
                    'BCB',
                    'ABA'
                ],
                {
                    A: 'botania:pattern_framed_livingwood', 
                    B: 'botania:framed_livingwood',
                    C: 'nyagibits_bytes:livisite_alloy'
                })
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Shapeless 
        event.shapeless('4x nyagibits_bytes:crude_abrasive',['minecraft:sand', 'minecraft:gravel'])
    //Nyagi's Bits & Bytes Shapeless 
        event.shapeless('nyagibits_bytes:pile_of_cogs',['create:large_cogwheel', '3x create:cogwheel'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Pure Daisy recipes
        //Livisite
            event.recipes.botania.pure_daisy({
                output: {
                    name: 'nyagibits_bytes:livisite_stone'
                },
                input: {
                    type: 'block', //object type, can be "block", "state", "blocks" or "tag"
                    block: 'minecraft:andesite'
                },
                    time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
            })
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Sandpaper recipes
        //Polished Living Rock
        event.recipes.createSandpaperPolishing('nyagibits_bytes:polished_livisite',['nyagibits_bytes:livisite_stone'])
    //------------------------------------------------------------------
    //Nyagi's Bits & Bytes Compacting recipes
        //Pile of Crude Mechanical Parts
            event.recipes.create.compacting(['nyagibits_bytes:pile_of_crude_mechanical_parts'], ['create:wrench', 'create:electron_tube', 'create:gantry_shaft', 'create:brass_hand', 'nyagibits_bytes:pile_of_cogs', 'create:hand_crank', 'create:andesite_casing', 'create:brass_sheet'])
    //------------------------------------------------------------------
    })