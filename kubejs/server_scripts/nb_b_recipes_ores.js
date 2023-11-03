ServerEvents.recipes(event => {
    //Nyagi's Bits & Bytes - Ores
    //Each material type gets its own .forEach due to divergances in input materials later down the line
    //Iron
        //2D array dont touch -----------------------------------
         let rawOresrawOresIronProcessing = new Array(2);
         for(var i = 0; i< rawOresrawOresIronProcessing.length; i++){
             rawOresrawOresIronProcessing[i] = new Array(8);
        }
        //-------------------------------------------------------
        //Ores
        const rawOresIron = [
            'nyagibits_bytes:raw_limonite', 
            'nyagibits_bytes:raw_hematite', 
            'nyagibits_bytes:raw_magnetite', 
            'nyagibits_bytes:raw_pyrite', 
            'nyagibits_bytes:raw_siderite', 
            'nyagibits_bytes:raw_banded_iron', 
            'nyagibits_bytes:raw_bog_iron', 
            'nyagibits_bytes:raw_meteoric_iron'
        ]
        //-------------------------------------------------------
        //Products by tier [0-15]
            //Furnacing
            rawOresrawOresIronProcessing[0] = [
                //Limonite
                'minecraft:iron_ingot',
                //Hematite 
                'minecraft:iron_ingot',
                //Magnetite
                'minecraft:iron_ingot',
                //Pyrite
                'minecraft:iron_ingot',
                //Siderite
                'minecraft:iron_ingot',
                //Banded Iron
                'minecraft:iron_ingot',
                //Bog Iron
                'minecraft:iron_ingot',
                //Meteoric Iron
                'minecraft:iron_ingot'
            ]
            //Crushing
            rawOresrawOresIronProcessing[1] = [
                //Limonite
                'create:crushed_raw_iron',
                //Hematite 
                'create:crushed_raw_iron',
                //Magnetite
                'create:crushed_raw_iron',
                //Pyrite
                'thermal:sulfur_dust',
                //Siderite
                'create:crushed_raw_iron',
                //Banded Iron
                'create:crushed_raw_iron',
                //Bog Iron
                'minecraft:clay_ball',
                //Meteoric Iron
                'create:crushed_raw_iron'
            ]
            //Bees
            rawOresrawOresIronProcessing[2] = [
                //Limonite
                'create:crushed_raw_iron',
                //Hematite 
                'create:crushed_raw_iron',
                //Magnetite
                'create:crushed_raw_iron',
                //Pyrite
                'thermal:sulfur_dust',
                //Siderite
                'create:crushed_raw_iron',
                //Banded Iron
                'create:crushed_raw_iron',
                //Bog Iron
                'minecraft:clay_ball',
                //Meteoric Iron
                'create:crushed_raw_iron'
            ]
        
        //-------------------------------------------------------
        //Removal of vanilla recipes
        event.remove({id:'create:crushed_raw_iron'})
        //-------------------------------------------------------
        //The amount of blood shed for an off by 1 error is crazy, thank you Flooter & KillerQ
        //Anyways this is the big loop for all of the processing
        for(var i = 0; i < rawOresrawOresIronProcessing.length - 1; i++){
            for(var j = 0; j < rawOresrawOresIronProcessing[i].length; j++){
                switch (i){
                    //Stage 0, Furnace
                    case 0:
                        event.smelting(rawOresrawOresIronProcessing[i][j], rawOresIron[j])
                        event.blasting(rawOresrawOresIronProcessing[i][j], rawOresIron[j])
                        break;
                    //Stage 1, Crushing
                    case 1:
                        event.recipes.createCrushing(['3x create:crushed_raw_iron',rawOresrawOresIronProcessing[i][j]],rawOresIron[j])
                        break;
                }
            }
        }
        //-------------------------------------------------------
})
    //------------------------------------------------------------------
    //Create Sequenced Assembly
    ServerEvents.recipes(e => {
       
        })
