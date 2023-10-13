ServerEvents.recipes(event => {
    //Nyagi's Bits & Bytes - Ores
    //Each material type gets its own .forEach due to divergances in input materials later down the line
    //Iron
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
        const associatedSideOne = [
            'create:crushed_raw_iron',
            'create:crushed_raw_iron',
            'create:crushed_raw_iron',
            'thermal:sulfur_dust',
            'create:crushed_raw_iron',
            'create:crushed_raw_iron',
            'minecraft:clay_ball',
            
            'create:crushed_raw_iron'
        ]
        rawOresIron.forEach(element => {
            //Stage 0, Smelting
            event.smelting('minecraft:iron_ingot', element)
            //Stage 1, Wheel Crushing
            event.remove({id:'create:crushed_raw_iron'})
            //event.recipes.createCrushing(['3x create:crushed_raw_iron',associatedSideOne[element]],[element])
        });
    //Copper
        const rawOresCopper = [
            'nyagibits_bytes:raw_chalcopyrite',
            'nyagibits_bytes:raw_malachite',
            'nyagibits_bytes:raw_azurite',
            'nyagibits_bytes:raw_tetrahedrite',
            'nyagibits_bytes:raw_enargite',
            'nyagibits_bytes:raw_chrysocolla',
            'nyagibits_bytes:raw_tennanite',
            'nyagibits_bytes:raw_dioptase'
        ]
        rawOresCopper.forEach(element => {
            event.smelting('minecraft:copper_ingot', element)
        });
    //Note recipes dont need removal since the core mod has no recipes
})
    //------------------------------------------------------------------
    //Create Sequenced Assembly
    ServerEvents.recipes(e => {
       
        })
