ServerEvents.recipes(event => {
    //Nyagi's Bits & Bytes - Ores
    //Yields:

    /*
        NOTE: THIS FILE IS NO LONGER IN USE TO ADD RECIPES IT ONLY EXISTS TO DOCUMENT THE YIELDS OF THE ORES
              RECIPES ARE NOW IN >.minecraft\config\paxi\datapacks\compression\data\nyagibits_bytes\recipes\ore_processing
    */

    /*
        Furnace/Compacting
        Tier 0 -  (1a)  
               -  1 Total
               
        Crushing/Polishing
        Tier 1 -  (3a)(1b)  
               -  4 Total    
               
        Stintering/Waxing
        Tier 2 -  (12a)(3b)(1c)  
               -  16 Total   

        
        Tier 3 -  (48a)(12b)(3c)(1d) 
               -  64 Total   
        Tier 4 -  (192a)(48b)(12c)(3d)(1e) 
               -  256 Total   
        Tier 5 -  (768a)(192b)(48c)(12d)(3e)(1f) 
               -  1,024 Total   
        Tier 6 -  (3,072a)(768b)(192c)(48d)(12e)(3f)(1g) 
               -  4,096 Total   
        Tier 7 -  (12,288a)(3,072b)(768c)(192d)(48e)(12f)(3g)(1h) 
               -  16,384 Total   
        Tier 8 -  (49,152a)(12,288b)(3,072c)(768d)(192e)(48f)(12g)(3h)(1i) 
               -  65,536 Total   
        Tier 9 -  (196,608a)...
               -  262,144 Total   
        Tier 10 - (786,432a)...
               -  1,048,576 Total   
        Tier 11 - (3,145,728a)...
               -  4,194,304 Total   
        Tier 12 - (12,582,912a)...
               -  16,777,216 Total   
        Tier 13 - (50,331,648a)...
               -  67,108,864 Total   
        Tier 14 - (201,326,592a)...
               -  268,435,456 Total   
        Tier 15 - (805,306,368a)...
               -  1,073,741,824 Total   
    */
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Iron
        //Limonite
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Iron
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Hematite
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Iron
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Magnetite
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Iron
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Pyrite
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Sulfur
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Siderite
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Iron
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Banded Iron
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Iron
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Bog Iron
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Clay
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Meteoric Iron
            //Tier 0 - Iron
            //Tier 1 - 3(Iron), Iron
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Copper
        //Chalcopyrite
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_chalcopyrite')
            //Tier 1 - 3(Copper), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_copper','create:crushed_raw_iron'],'nyagibits_bytes:raw_chalcopyrite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Malachite  
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_malachite')
            //Tier 1 - 3(Copper), Copper
                event.recipes.createCrushing(['3x create:crushed_raw_copper','create:crushed_raw_copper'],'nyagibits_bytes:raw_malachite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Azurite  
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_azurite')
            //Tier 1 - 3(Copper), Copper
                event.recipes.createCrushing(['3x create:crushed_raw_copper','create:crushed_raw_copper'],'nyagibits_bytes:raw_azurite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Tetrahedrite  
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_tetrahedrite')
            //Tier 1 - 3(Copper), Antimony
                event.recipes.createCrushing(['3x create:crushed_raw_copper','chemlib:antimony_dust'],'nyagibits_bytes:raw_tetrahedrite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Enargite
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_enargite')
            //Tier 1 - 3(Copper), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_copper','thermal:sulfur_dust'],'nyagibits_bytes:raw_enargite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Chrysocolla
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_chrysocolla')
            //Tier 1 - 3(Copper), Silicon
                event.recipes.createCrushing(['3x create:crushed_raw_copper','chemlib:silicon_dust'],'nyagibits_bytes:raw_chrysocolla')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Tennanite
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_tennanite')
            //Tier 1 - 3(Copper), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_copper','thermal:sulfur_dust'],'nyagibits_bytes:raw_tennanite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Dioptase
            //Tier 0 - Copper
                event.smelting('minecraft:copper_ingot', 'nyagibits_bytes:raw_dioptase')
            //Tier 1 - 3(Copper), Copper
                event.recipes.createCrushing(['3x create:crushed_raw_copper','create:crushed_raw_copper'],'nyagibits_bytes:raw_dioptase')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Gold
        //Alluvial Slush
            //Tier 0 - Gold
                event.smelting('minecraft:gold_ingot', 'nyagibits_bytes:alluvial_slush')
            //Tier 1 - 3(Gold), Gravel
                event.recipes.createCrushing(['3x create:crushed_raw_gold','minecraft:gravel'],'nyagibits_bytes:alluvial_slush')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Native Gold
            //Tier 0 - Gold
                event.smelting('minecraft:gold_ingot', 'nyagibits_bytes:native_cluster')
            //Tier 1 - 3(Gold), Gold
                event.recipes.createCrushing(['3x create:crushed_raw_gold','create:crushed_raw_gold'],'nyagibits_bytes:native_cluster')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Argentite
            //Tier 0 - Silver
                event.smelting('thermal:silver_ingot', 'nyagibits_bytes:raw_argentite')
            //Tier 1 - 3(Silver), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_silver','thermal:sulfur_dust'],'nyagibits_bytes:raw_argentite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Chlorargyrite
            //Tier 0 - Silver
                event.smelting('thermal:silver_ingot', 'nyagibits_bytes:raw_chlorargyrite')
            //Tier 1 - 3(Silver), Silver
                event.recipes.createCrushing(['3x create:crushed_raw_silver','create:crushed_raw_silver'],'nyagibits_bytes:raw_chlorargyrite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Polybasite
            //Tier 0 - Silver
                event.smelting('thermal:silver_ingot', 'nyagibits_bytes:raw_polybasite')
            //Tier 1 - 3(Silver), Antimony
                event.recipes.createCrushing(['3x create:crushed_raw_silver','chemlib:antimony_dust'],'nyagibits_bytes:raw_polybasite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Proustite
            //Tier 0 - Silver
                event.recipes.create.compacting(['create:crushed_raw_silver'],'nyagibits_bytes:raw_proustite')
            //Tier 1 - 3(Silver), Arsenic
                event.recipes.createCrushing(['3x create:crushed_raw_silver','chemlib:arsenic_dust'],'nyagibits_bytes:raw_proustite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Electrum
            //Tier 0 - Gold
                event.smelting('minecraft:gold_ingot', 'nyagibits_bytes:raw_electrum')
            //Tier 1 - 3(Gold), Silver
                event.recipes.createCrushing(['3x create:crushed_raw_gold','create:crushed_raw_silver'],'nyagibits_bytes:raw_electrum')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Kustelite Electrum
            //Tier 0 - Gold
                event.smelting('minecraft:gold_ingot', 'nyagibits_bytes:raw_kustelite_electrum')
            //Tier 1 - 3(Gold), 2(Gold)
                event.recipes.createCrushing(['3x create:crushed_raw_gold','2x create:crushed_raw_gold'],'nyagibits_bytes:raw_kustelite_electrum')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Redstone 
        //Cinnabar
            //Tier 0 - Redstone
                event.recipes.create.compacting(['minecraft:redstone'],'nyagibits_bytes:raw_cinnabar')
            //Tier 1 - 3(Redstone), Mercury Sulfide
                event.recipes.createCrushing(['3x minecraft:redstone','chemlib:mercury_sulfide_dust'],'nyagibits_bytes:raw_cinnabar')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Metacinnabar  
            //Tier 0 - Redstone
                event.recipes.create.compacting(['minecraft:redstone'],'nyagibits_bytes:raw_metacinnabar')
            //Tier 1 - 3(Redstone), Mercury Sulfide
                event.recipes.createCrushing(['3x minecraft:redstone','chemlib:mercury_sulfide_dust'],'nyagibits_bytes:raw_metacinnabar')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Corderoite  
            //Tier 0 - Redstone
                event.recipes.create.compacting(['minecraft:redstone'],'nyagibits_bytes:raw_corderoite')
            //Tier 1 - 3(Redstone), Sulfur
                event.recipes.createCrushing(['3x minecraft:redstone','thermal:sulfur_dust'],'nyagibits_bytes:raw_corderoite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Basaltic Powder 
            //Tier 0 - Silicon
                event.recipes.create.compacting(['chemlib:silicon_dust'],'nyagibits_bytes:raw_basaltic_powder')
            //Tier 1 - 3(Silicon), Magnesium
                event.recipes.createCrushing(['3x chemlib:silicon_dust','chemlib:magnesium_dust'],'nyagibits_bytes:raw_basaltic_powder')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Calomel 
            //Tier 0 - Redstone
                event.recipes.create.compacting(['minecraft:redstone'],'nyagibits_bytes:raw_calomel')
            //Tier 1 - 3(Redstone), Mercury
                event.recipes.createCrushing(['3x minecraft:redstone','chemlib:mercury'],'nyagibits_bytes:raw_calomel')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Native Mercury Spherules 
            //Tier 0 - Mercury
                event.recipes.create.compacting(['chemlib:mercury'],'nyagibits_bytes:raw_native_mercury_spherules')
            //Tier 1 - 3(Mercury), Mercury Sulfide
                event.recipes.createCrushing(['3x chemlib:mercury','chemlib:mercury_sulfide_dust'],'nyagibits_bytes:raw_native_mercury_spherules')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Montroydite
            //Tier 0 - Redstone
                event.recipes.create.compacting(['minecraft:redstone'],'nyagibits_bytes:raw_montroydite')
            //Tier 1 - 3(Redstone), Mercury
                event.recipes.createCrushing(['3x minecraft:redstone','chemlib:mercury'],'nyagibits_bytes:raw_montroydite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Granulated Obsidian
            //Tier 0 - Powdered Obsidian
                event.recipes.create.compacting(['create:powdered_obsidian'],'nyagibits_bytes:raw_granulated_obsidian')
            //Tier 1 - 3(Powdered Obsidian), Silicon
                event.recipes.createCrushing(['3x create:powdered_obsidian','chemlib:silicon_dust'],'nyagibits_bytes:raw_granulated_obsidian')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Coal
        //Bituminous
            //Tier 0 - Coal
                event.recipes.create.splashing(['minecraft:coal'],'nyagibits_bytes:raw_bituminous')
            //Tier 1 - 3(Coal), Coal /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise
                event.recipes.createSandpaperPolishing(['4x minecraft:coal'],'nyagibits_bytes:raw_bituminous')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Subbituminous
            //Tier 0 - Coal
                event.recipes.create.splashing(['minecraft:coal'],'nyagibits_bytes:raw_subbituminous')
            //Tier 1 - 3(Coal), Coal /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise
                event.recipes.createSandpaperPolishing(['4x minecraft:coal'],'nyagibits_bytes:raw_subbituminous')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Lignite
            //Tier 0 - Coal
                event.recipes.create.splashing(['minecraft:coal'],'nyagibits_bytes:raw_lignite')
            //Tier 1 - 3(Coal), Coal /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise
                event.recipes.createSandpaperPolishing(['4x minecraft:coal'],'nyagibits_bytes:raw_lignite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Anthracite
            //Tier 0 - 2(Coal)
                event.recipes.create.splashing(['2x minecraft:coal'],'nyagibits_bytes:raw_anthracite')
            //Tier 1 - 6(Coal), 2(Coal) /- output set to x8 and not x6 + 2 due to it not yielding correctly otherwise
                event.recipes.createSandpaperPolishing(['8x minecraft:coal'],'nyagibits_bytes:raw_anthracite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Cannel Coal
            //Tier 0 - Coal
                event.recipes.create.splashing(['minecraft:coal'],'nyagibits_bytes:raw_cannel_coal')
            //Tier 1 - 3(Coal), Coal /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise
                event.recipes.createSandpaperPolishing(['4x minecraft:coal'],'nyagibits_bytes:raw_cannel_coal')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Jet Lignite
            //Tier 0 - Coal
                event.recipes.create.splashing(['minecraft:coal'],'nyagibits_bytes:raw_jet')
            //Tier 1 - 3(Coal), Coal /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise
                event.recipes.createSandpaperPolishing(['4x minecraft:coal'],'nyagibits_bytes:raw_jet')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Peat
            //Tier 0 - Clay
                event.recipes.create.splashing(['minecraft:clay_ball'],'nyagibits_bytes:raw_peat')
            //Tier 1 - 3(Clay), 0.5(Dirt) 0.5(Straw)
                event.recipes.createCrushing(['3x minecraft:clay_ball', 
                                            Item.of('farmersdelight:straw').withChance(0.5), 
                                            Item.of('minecraft:dirt').withChance(0.5)],'nyagibits_bytes:raw_peat')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Graphite
            //Tier 0 - Carbon
                event.recipes.create.compacting(['chemlib:carbon_dust'],'nyagibits_bytes:raw_graphite')
            //Tier 1 - 3(Carbon), Carbon
                event.recipes.createCrushing(['3x chemlib:carbon_dust','chemlib:carbon_dust'],'nyagibits_bytes:raw_graphite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Gemstones
        //Kimberlite
            /*Tier 0 - Diamond[Splashing]
                       4(Diamond Shard)[Compacting]
            */
                    event.recipes.create.splashing(['minecraft:diamond'],'nyagibits_bytes:raw_kimberlite')
                    event.recipes.create.compacting(['4x nyagibits_bytes:diamond_shard'], 'nyagibits_bytes:raw_kimberlite')
            /*Tier 1 - 3(Diamond), Diamond /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                       12(Diamond Shard), 0.75(Carbon), 0.25(Raw Graphite Ore)[Crushing]
            */
                    event.recipes.createSandpaperPolishing(['4x minecraft:diamond'],'nyagibits_bytes:raw_kimberlite')
                    event.recipes.createCrushing(['12x nyagibits_bytes:diamond_shard',
                                                Item.of('nyagibits_bytes:raw_graphite').withChance(0.25),
                                                Item.of('chemlib:carbon_dust').withChance(0.75)], 'nyagibits_bytes:raw_kimberlite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Lamproite
            /*Tier 0 - Diamond[Splashing]
                       4(Diamond Shard)[Compacting]
            */
                    event.recipes.create.splashing(['minecraft:diamond'],'nyagibits_bytes:raw_lamproite')
                    event.recipes.create.compacting(['4x nyagibits_bytes:diamond_shard'], 'nyagibits_bytes:raw_lamproite')
            /*Tier 1 - 3(Diamond), Diamond /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                       12(Diamond Shard), 0.75(Carbon), 0.25(Raw Graphite Ore)[Crushing]
            */
                    event.recipes.createSandpaperPolishing(['4x minecraft:diamond'],'nyagibits_bytes:raw_lamproite')
                    event.recipes.createCrushing(['12x nyagibits_bytes:diamond_shard',
                                                Item.of('nyagibits_bytes:raw_basaltic_powder').withChance(0.25),
                                                Item.of('chemlib:potassium_dust').withChance(0.75)], 'nyagibits_bytes:raw_lamproite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Lazurite
            /*Tier 0 - Lapis[Splashing]
                       2(Lapis Dust)[Compacting]
            */
                    event.recipes.create.splashing(['minecraft:lapis_lazuli'],'nyagibits_bytes:raw_lazurite')
                    event.recipes.create.compacting(['2x thermal:lapis_dust'], 'nyagibits_bytes:raw_lazurite')
            /*Tier 1 - 3(Lapis), Lapis /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                       6(Lapis Dust), 0.75(Calcite), 0.25(Compacted Limstone)[Crushing]
            */
                    event.recipes.createSandpaperPolishing(['4x minecraft:lapis_lazuli'],'nyagibits_bytes:raw_lazurite')
                    event.recipes.createCrushing(['24x thermal:lapis_dust',
                                                Item.of('nyagibits_bytes:raw_compacted_limestone').withChance(0.25),
                                                Item.of('minecraft:calcite').withChance(0.75)], 'nyagibits_bytes:raw_lazurite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Lapis Lazuli
            /*Tier 0 - 2(Lapis)[Splashing]
                       4(Lapis Dust)[Compacting]
            */
                    event.recipes.create.splashing(['2x minecraft:lapis_lazuli'],'nyagibits_bytes:raw_lapis_lazuli')
                    event.recipes.create.compacting(['4x thermal:lapis_dust'], 'nyagibits_bytes:raw_lapis_lazuli')
            /*Tier 1 - 6(Lapis), Lapis /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                       12(Lapis Dust), 0.75(Calcite), 0.25(Compacted Limstone)[Crushing]
            */
                    event.recipes.createSandpaperPolishing(['7x minecraft:lapis_lazuli'],'nyagibits_bytes:raw_lapis_lazuli')
                    event.recipes.createCrushing(['12x thermal:lapis_dust',
                                                Item.of('nyagibits_bytes:raw_pyrite').withChance(0.25),
                                                Item.of('minecraft:calcite').withChance(0.75)], 'nyagibits_bytes:raw_lapis_lazuli')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Prime Beryllic Cluster
            /*Tier 0 - 0.3333(Emerald)0.3333(Ruby)0.3333(Sapphire)[Splashing]
                       0.5(Emerald Dust)0.5(Ruby Dust)0.5(Sapphire Dust)[Compacting]
            */
                    event.recipes.create.splashing([Item.of('nyagibits_bytes:ruby').withChance(0.33),
                                                    Item.of('nyagibits_bytes:sapphire').withChance(0.33),
                                                    Item.of('minecraft:emerald').withChance(0.33)],'nyagibits_bytes:raw_prime_beryllic_cluster')
                    event.recipes.create.compacting([Item.of('nyagibits_bytes:ruby_dust').withChance(0.5),
                                                     Item.of('nyagibits_bytes:sapphire_dust').withChance(0.5),
                                                     Item.of('thermal:emerald_dust').withChance(0.5)],'nyagibits_bytes:raw_prime_beryllic_cluster')
            /*Tier 1 - 1(Emerald), 1(Ruby), 1(Sapphire), Aluminum /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                       1.5(Emerald Dust), 1.5(Ruby Dust), 1.5(Sapphire Dust), 0.1(Emerald/Ruby/Sapphire Dust)[Sequence Processing]
            */
                    event.recipes.createSequencedAssembly([
                    Item.of('3x nyagibits_bytes:ruby'),
                    Item.of('3x nyagibits_bytes:sapphire'),
                    Item.of('3x minecraft:emerald'),
                    Item.of('nyagibits_bytes:ruby_dust').withChance(0.1),
                    Item.of('nyagibits_bytes:sapphire_dust').withChance(0.1),
                    Item.of('thermal:emerald_dust').withChance(0.1),
                ], 'nyagibits_bytes:raw_prime_beryllic_cluster',
                    [
                        event.recipes.createFilling('nyagibits_bytes:raw_prime_beryllic_cluster', ['nyagibits_bytes:raw_prime_beryllic_cluster', Fluid.water(100)]),
                        event.recipes.createDeploying('nyagibits_bytes:raw_prime_beryllic_cluster', ['nyagibits_bytes:raw_prime_beryllic_cluster', '#create:sandpaper'])

                    ]).loops(1).transitionalItem('nyagibits_bytes:raw_prime_beryllic_cluster')

                    event.recipes.createCrushing(['chemlib:aluminum_dust',
                                                  Item.of('nyagibits_bytes:ruby_dust').withChance(1.5),
                                                  Item.of('nyagibits_bytes:sapphire_dust').withChance(1.5),
                                                  Item.of('thermal:emerald_dust').withChance(1.5)],'nyagibits_bytes:raw_prime_beryllic_cluster')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Fluorite
            //Tier 0 - Fluorite Dust
                event.recipes.create.compacting(['mekanism:dust_fluorite'],'nyagibits_bytes:raw_fluorite')
            //Tier 1 - 3(Fluorite Dust), Calcium
                event.recipes.createCrushing(['3x mekanism:dust_fluorite','chemlib:calcium_dust'],'nyagibits_bytes:raw_fluorite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Chalcogenide Crystal Cluster
            //Tier 0 - Antimony
                event.recipes.create.compacting(['chemlib:antimony_dust'],'nyagibits_bytes:raw_chalcogenide_crystal_cluster')
            //Tier 1 - 3(Antimony), Bismuth
                event.recipes.createCrushing(['3x chemlib:antimony_dust','chemlib:bismuth_dust'],'nyagibits_bytes:raw_chalcogenide_crystal_cluster')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Salt Cluster
            //Tier 0 - Salt
                event.recipes.create.compacting(['mekanism:salt'],'nyagibits_bytes:raw_salt_cluster')
            //Tier 1 - 3(Salt), Potassium Chloride
                event.recipes.createCrushing(['3x mekanism:salt','chemlib:potassium_chloride_dust'],'nyagibits_bytes:raw_salt_cluster')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Quartz
        //Kerkimer Diamond
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_herkimer_diamond')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_herkimer_diamond')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), 0.75(Quartz Dust), 0.25(Compacted Limestone)[Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_herkimer_diamond')
                       event.recipes.createCrushing(['6x thermal:quartz_dust',
                                                   Item.of('nyagibits_bytes:raw_compacted_limestone').withChance(0.25),
                                                   Item.of('thermal:quartz_dust').withChance(0.75)], 'nyagibits_bytes:raw_herkimer_diamond')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Dendritic Agate
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_dendritic_agate')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_dendritic_agate')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), 0.75(Quartz Dust), 0.25(Compacted Limestone)[Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_dendritic_agate')
                       event.recipes.createCrushing(['6x thermal:quartz_dust',
                                                   Item.of('nyagibits_bytes:raw_basaltic_powder').withChance(0.25),
                                                   Item.of('thermal:quartz_dust').withChance(0.75)], 'nyagibits_bytes:raw_dendritic_agate')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Chalcedony
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_chalcedony')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_chalcedony')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), Silicon [Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_chalcedony')
                       event.recipes.createCrushing(['6x thermal:quartz_dust', 'chemlib:silicon_dust'], 'nyagibits_bytes:raw_chalcedony')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Rutilated Quartz
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_rutilated_quartz')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_rutilated_quartz')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), Titanium [Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_rutilated_quartz')
                       event.recipes.createCrushing(['6x thermal:quartz_dust', 
                                                    Item.of('chemlib:titanium_dust').withChance(0.25)], 'nyagibits_bytes:raw_rutilated_quartz')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Amertrine
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_ametrine')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_ametrine')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), Iron [Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_ametrine')
                       event.recipes.createCrushing(['6x thermal:quartz_dust', 'create:crushed_raw_iron'], 'nyagibits_bytes:raw_ametrine')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Rose Quartz
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_rose_quartz')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_rose_quartz')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), Redstone [Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_rose_quartz')
                       event.recipes.createCrushing(['6x thermal:quartz_dust', 'minecraft:redstone'], 'nyagibits_bytes:raw_rose_quartz')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Prasiolite
            /*Tier 0 - Quartz[Splashing]
                       2(Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['minecraft:quartz'],'nyagibits_bytes:raw_prasiolite')
                       event.recipes.create.compacting(['2x thermal:quartz_dust'], 'nyagibits_bytes:raw_prasiolite')
               /*Tier 1 - 3(Quartz), Quartz /- output set to x4 and not x3 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          6(Quartz Dust), Iron [Crushing]
               */
                       event.recipes.createSandpaperPolishing(['4x minecraft:quartz'],'nyagibits_bytes:raw_prasiolite')
                       event.recipes.createCrushing(['6x thermal:quartz_dust', 'create:crushed_raw_iron'], 'nyagibits_bytes:raw_prasiolite')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
        //Meteoric Certus
            /*Tier 0 - 2(Certus Quartz)[Splashing]
                       4(Certus Quartz Dust)[Compacting]
            */
                       event.recipes.create.splashing(['2x ae2:certus_quartz_crystal'],'nyagibits_bytes:raw_meteoric_certus')
                       event.recipes.create.compacting(['4x ae2:certus_quartz_dust'], 'nyagibits_bytes:raw_meteoric_certus')
               /*Tier 1 - 6(Certus Quartz), Quartz /- output set to x7 and not x6 + 1 due to it not yielding correctly otherwise[Sandpaper]
                          12(Certus Quartz Dust), 2(Skystone Dust) [Crushing]
               */
                       event.recipes.createSandpaperPolishing(['7x ae2:certus_quartz_crystal'],'nyagibits_bytes:raw_meteoric_certus')
                       event.recipes.createCrushing(['12x ae2:certus_quartz_dust', '2x ae2:sky_dust'], 'nyagibits_bytes:raw_meteoric_certus')
               //Tier 2
               //Tier 3
               //Tier 4
               //Tier 5
               //Tier 6
               //Tier 7
               //Tier 8
               //Tier 9
               //Tier 10
               //Tier 11
               //Tier 12
               //Tier 13
               //Tier 14
               //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Zinc
        //Zinc Carbonate
            //Tier 0 - Zinc
                event.smelting('create:zinc_ingot', 'nyagibits_bytes:raw_zinc_carbonate')
            //Tier 1 - 3(Zinc), Zinc
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','create:crushed_raw_zinc'],'nyagibits_bytes:raw_zinc_carbonate')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Sphalterite
            //Tier 0 - Zinc
                event.smelting('create:zinc_ingot', 'nyagibits_bytes:raw_sphalerite')
            //Tier 1 - 3(Zinc), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','thermal:sulfur_dust'],'nyagibits_bytes:raw_sphalerite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Smithsonite
            //Tier 0 - Zinc
                event.smelting('create:zinc_ingot', 'nyagibits_bytes:raw_smithsonite')
            //Tier 1 - 3(Zinc), Zinc
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','create:crushed_raw_zinc'],'nyagibits_bytes:raw_smithsonite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Hemimorphite
            //Tier 0 - Zinc
                event.recipes.create.compacting(['create:crushed_raw_zinc'], 'nyagibits_bytes:raw_hemimorphite')
            //Tier 1 - 3(Zinc), Zinc
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','create:crushed_raw_zinc'],'nyagibits_bytes:raw_hemimorphite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Wurtzite
            //Tier 0 - Zinc
                event.smelting('create:zinc_ingot', 'nyagibits_bytes:raw_wurtzite')
            //Tier 1 - 3(Zinc), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','create:crushed_raw_iron'],'nyagibits_bytes:raw_wurtzite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Hydrozincite
            //Tier 0 - Zinc
                event.recipes.create.compacting(['create:crushed_raw_zinc'], 'nyagibits_bytes:raw_hydrozincite')
            //Tier 1 - 3(Zinc), Carbon
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','chemlib:carbon_dust'],'nyagibits_bytes:raw_hydrozincite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Willemite
            //Tier 0 - Zinc
                event.recipes.create.compacting(['create:crushed_raw_zinc'], 'nyagibits_bytes:raw_willemite')
            //Tier 1 - 3(Zinc), Silicon
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','chemlib:silicon_dust'],'nyagibits_bytes:raw_willemite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Franklinite
            //Tier 0 - Zinc
                event.smelting('create:zinc_ingot', 'nyagibits_bytes:raw_franklinite')
            //Tier 1 - 3(Zinc), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_zinc','create:crushed_raw_iron'],'nyagibits_bytes:raw_franklinite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Aluminum
        //Bauxite
            //Tier 0 - Aluminum
                event.smelting('chemlib:aluminum_ingot', 'nyagibits_bytes:raw_bauxite')
            //Tier 1 - 3(Aluminum), Aluminum
                event.recipes.createCrushing(['3x create:crushed_raw_aluminum','create:crushed_raw_aluminum'],'nyagibits_bytes:raw_bauxite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Feldspar
            //Tier 0 - Aluminum
                event.smelting('chemlib:aluminum_ingot', 'nyagibits_bytes:raw_feldspar')
            //Tier 1 - 3(Aluminum), Aluminum
                event.recipes.createCrushing(['3x create:crushed_raw_aluminum','chemlib:sodium_dust'],'nyagibits_bytes:raw_feldspar')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
            //Prime Beryllic Cluster
            /*Tier 0 - 0.3333(Emerald)0.3333(Ruby)0.3333(Sapphire)[Splashing]
                       0.5(Emerald Dust)0.5(Ruby Dust)0.5(Sapphire Dust)[Compacting]
            */
                    event.recipes.create.splashing([Item.of('nyagibits_bytes:pezzottaite').withChance(0.14),
                                                    Item.of('nyagibits_bytes:bixbite').withChance(0.14),
                                                    Item.of('nyagibits_bytes:goshenite').withChance(0.14),
                                                    Item.of('nyagibits_bytes:heliodor').withChance(0.14),
                                                    Item.of('nyagibits_bytes:morganite').withChance(0.14),
                                                    Item.of('nyagibits_bytes:aquamarine').withChance(0.14),
                                                    Item.of('minecraft:emerald').withChance(0.14)],'nyagibits_bytes:raw_clustered_beryl')
                    event.recipes.create.compacting([Item.of('nyagibits_bytes:pezzottaite_dust').withChance(0.25),
                                                     Item.of('nyagibits_bytes:bixbite_dust').withChance(0.25),
                                                     Item.of('nyagibits_bytes:goshenite_dust').withChance(0.25),
                                                     Item.of('nyagibits_bytes:heliodor_dust').withChance(0.25),
                                                     Item.of('nyagibits_bytes:morganite_dust').withChance(0.25),
                                                     Item.of('nyagibits_bytes:aquamarine_dust').withChance(0.25),
                                                     Item.of('thermal:emerald_dust').withChance(0.25)],'nyagibits_bytes:raw_clustered_beryl')
            /*Tier 1 - 3/7(Pezzottaite),3/7(Bixbite),3/7(Goshenite),3/7(Heliodor),3/7(Morganite),3/7(Aquamarine),3/7(Emerald),
                       1/4(Pezzottaite_Dust),1/4(Bixbite_Dust),1/4(Goshenite_Dust),1/4(Goshenite_Dust),1/4(Goshenite_Dust),1/4(Goshenite_Dust),1/4(Goshenite_Dust),
                       1.5(Emerald Dust), 1.5(Ruby Dust), 1.5(Sapphire Dust), 0.1(Emerald/Ruby/Sapphire Dust)[Sequence Processing]
            */
                    event.recipes.createSequencedAssembly([
                    Item.of('12x nyagibits_bytes:pezzottaite'),
                    Item.of('12x nyagibits_bytes:bixbite'),
                    Item.of('12x nyagibits_bytes:goshenite'),
                    Item.of('12x nyagibits_bytes:heliodor'),
                    Item.of('12x nyagibits_bytes:morganite'),
                    Item.of('12x nyagibits_bytes:aquamarine'),
                    Item.of('12x minecraft:emerald'),
                    Item.of('nyagibits_bytes:pezzottaite_dust').withChance(0.25),
                    Item.of('nyagibits_bytes:bixbite_dust').withChance(0.25),
                    Item.of('nyagibits_bytes:goshenite_dust').withChance(0.25),
                    Item.of('nyagibits_bytes:heliodor_dust').withChance(0.25),
                    Item.of('nyagibits_bytes:morganite_dust').withChance(0.25),
                    Item.of('nyagibits_bytes:aquamarine_dust').withChance(0.25),
                    Item.of('thermal:emerald_dust').withChance(0.25),
                ], 'nyagibits_bytes:raw_clustered_beryl',
                    [
                        event.recipes.createFilling('nyagibits_bytes:raw_clustered_beryl', ['nyagibits_bytes:raw_clustered_beryl', Fluid.water(100)]),
                        event.recipes.createDeploying('nyagibits_bytes:raw_clustered_beryl', ['nyagibits_bytes:raw_clustered_beryl', '#create:sandpaper'])

                    ]).loops(1).transitionalItem('nyagibits_bytes:raw_clustered_beryl')

                    event.recipes.createCrushing(['4x chemlib:aluminum_dust',
                                                  Item.of('nyagibits_bytes:pezzottaite_dust').withChance(0.75),
                                                  Item.of('nyagibits_bytes:bixbite_dust').withChance(0.75),
                                                  Item.of('nyagibits_bytes:goshenite_dust').withChance(0.75),
                                                  Item.of('nyagibits_bytes:heliodor_dust').withChance(0.75),
                                                  Item.of('nyagibits_bytes:morganite_dust').withChance(0.75),
                                                  Item.of('nyagibits_bytes:aquamarine_dust').withChance(0.75),
                                                  Item.of('thermal:emerald_dust').withChance(0.75)],'nyagibits_bytes:raw_clustered_beryl')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Cryolite
            //Tier 0 - Aluminum
                event.smelting('chemlib:aluminum_ingot', 'nyagibits_bytes:raw_cryolite')
            //Tier 1 - 3(Aluminum), Fluorite
                event.recipes.createCrushing(['3x create:crushed_raw_aluminum','mekanism:dust_fluorite'],'nyagibits_bytes:raw_cryolite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Spinel
            //Tier 0 - Aluminum
                event.recipes.create.compacting(['create:crushed_raw_zinc'], 'nyagibits_bytes:raw_spinel')
            //Tier 1 - 3(Aluminum), Magnesium
                event.recipes.createCrushing(['3x create:crushed_raw_aluminum','chemlib:magnesium_dust'],'nyagibits_bytes:raw_spinel')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Turquoise
            //Tier 0 - Aluminum
                event.smelting('chemlib:aluminum_ingot', 'nyagibits_bytes:raw_turquoise')
            //Tier 1 - 3(Aluminum), Magnesium
                event.recipes.createCrushing(['3x create:crushed_raw_aluminum','chemlib:phosphate_dust'],'nyagibits_bytes:raw_turquoise')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Garnet Slush
            //Tier 0 - Silicon
                event.recipes.create.compacting(['chemlib:silicon_dust'], 'nyagibits_bytes:raw_garnet_slush')
            //Tier 1 - 3(Silicon), Aluminum
                event.recipes.createCrushing(['3x chemlib:silicon_dust','create:crushed_raw_aluminum'],'nyagibits_bytes:raw_garnet_slush')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
        //Native Aluminum
            //Tier 0 - Aluminum
                event.smelting('chemlib:aluminum_ingot', 'nyagibits_bytes:raw_native_aluminum')
            //Tier 1 - 3(Aluminum), Aluminum
                event.recipes.createCrushing(['3x create:crushed_raw_aluminum','create:crushed_raw_aluminum'],'nyagibits_bytes:raw_native_aluminum')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Lead
        //Galena
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_galena')
            //Tier 1 - 3(Lead), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_lead','thermal:sulfur_dust'],'nyagibits_bytes:raw_galena')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Lead Sulphide
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_lead_sulphide')
            //Tier 1 - 3(Lead), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_lead','thermal:sulfur_dust'],'nyagibits_bytes:raw_lead_sulphide')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Pyromorphite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_pyromorphite')
            //Tier 1 - 3(Lead), Phosphorus
                event.recipes.createCrushing(['3x create:crushed_raw_lead','chemlib:phosphorus_dust'],'nyagibits_bytes:raw_pyromorphite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Cerussite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_cerussite')
            //Tier 1 - 3(Lead), Phosphorus
                event.recipes.createCrushing(['3x create:crushed_raw_lead','create:crushed_raw_lead'],'nyagibits_bytes:raw_cerussite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Cerussite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_cerussite')
            //Tier 1 - 3(Lead), Phosphorus
                event.recipes.createCrushing(['3x create:crushed_raw_lead','create:crushed_raw_lead'],'nyagibits_bytes:raw_cerussite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Anglesite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_anglesite')
            //Tier 1 - 3(Lead), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_lead','thermal:sulfur_dust'],'nyagibits_bytes:raw_anglesite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Wulfenite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_wulfenite')
            //Tier 1 - 3(Lead), Molybdenum
                event.recipes.createCrushing(['3x create:crushed_raw_lead','chemlib:molybdenum_dust'],'nyagibits_bytes:raw_wulfenite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Vanadinite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_vanadinite')
            //Tier 1 - 3(Lead), Vanadium
                event.recipes.createCrushing(['3x create:crushed_raw_lead','chemlib:vanadium_dust'],'nyagibits_bytes:raw_vanadinite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Mimetite
            //Tier 0 - Lead
            event.smelting('thermal:lead_ingot', 'nyagibits_bytes:raw_mimetite')
            //Tier 1 - 3(Lead), Arsenic
                event.recipes.createCrushing(['3x create:crushed_raw_lead','chemlib:arsenic_dust'],'nyagibits_bytes:raw_mimetite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Nickel
        //Pentlandite
            //Tier 0 - Nickel
            event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_pentlandite')
            //Tier 1 - 3(Nickel), 3(Iron)
                event.recipes.createCrushing(['3x create:crushed_raw_nickel','3x create:crushed_raw_iron'],'nyagibits_bytes:raw_pentlandite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Garnierite
            //Tier 0 - Nickel
            event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_garnierite')
            //Tier 1 - 3(Nickel), Granite
                event.recipes.createCrushing(['3x create:crushed_raw_nickel','minecraft:granite'],'nyagibits_bytes:raw_garnierite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Saprolite
            //Tier 0 - Nickel
            event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_saprolite')
            //Tier 1 - 3(Nickel), 0.1(Bog Iron)
                event.recipes.createCrushing(['3x create:crushed_raw_nickel',
                                            Item.of('nyagibits_bytes:raw_bog_iron').withChance(0.1)],'nyagibits_bytes:raw_saprolite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Millerite
            //Tier 0 - Nickel
            event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_millerite')
            //Tier 1 - 3(Nickel), 0.1(Pyrite)
                event.recipes.createCrushing(['3x create:crushed_raw_nickel',
                                            Item.of('nyagibits_bytes:raw_pyrite').withChance(0.1)],'nyagibits_bytes:raw_millerite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Hardened Sulfide Flow
            //Tier 0 - Sulfur
                event.recipes.create.compacting(['thermal:sulfur_dust'], 'nyagibits_bytes:raw_hardened_sulfide_flow')
            //Tier 1 - 3(Sulfur), Nickel
                event.recipes.createCrushing(['3x thermal:sulfur_dust','create:crushed_raw_nickel'],'nyagibits_bytes:raw_hardened_sulfide_flow')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Nickeline
            //Tier 0 - Nickel
                event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_nickeline')
            //Tier 1 - 3(Nickel), Arsenic
                event.recipes.createCrushing(['3x create:crushed_raw_nickel','chemlib:arsenic_dust'],'nyagibits_bytes:raw_nickeline')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Taenite
            //Tier 0 - Nickel
                event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_meteoric_taenite')
            //Tier 1 - 3(Nickel), 0.1(Meteoric Iron)
                event.recipes.createCrushing(['3x create:crushed_raw_nickel',
                                            Item.of('nyagibits_bytes:raw_meteoric_iron').withChance(0.1)],'nyagibits_bytes:raw_meteoric_taenite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Kamacite
            //Tier 0 - Nickel
                    event.smelting('thermal:nickel_ingot', 'nyagibits_bytes:raw_meteoric_kamacite')
                //Tier 1 - 3(Nickel), 0.1(Meteoric Iron), 0.5(Cobalt)
                    event.recipes.createCrushing(['3x create:crushed_raw_nickel',
                                                Item.of('nyagibits_bytes:raw_meteoric_iron').withChance(0.1),
                                                Item.of('chemlib:cobalt_dust').withChance(0.5)],'nyagibits_bytes:raw_meteoric_kamacite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Uranium & Thorium
        //Pitchblende
            //Tier 0 - Uranium
                event.recipes.create.compacting(['create:crushed_raw_uranium'],'nyagibits_bytes:raw_pitchblende')
            //Tier 1 - 3(Uranium), Cadmium
                event.recipes.createCrushing(['3x create:crushed_raw_uranium','chemlib:cadmium_dust'],'nyagibits_bytes:raw_pitchblende')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Carnotite
            //Tier 0 - 2(Uranium)
                event.recipes.create.compacting(['chemlib:potassium_dust'],'nyagibits_bytes:raw_carnotite')
            //Tier 1 - 3(Potassium), Uranium
                event.recipes.createCrushing(['3x chemlib:potassium_dust','chemlib:cadmium_dust'],'nyagibits_bytes:raw_carnotite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Tyuyamunite
            //Tier 0 - 2(Uranium)
                event.recipes.create.compacting(['create:crushed_raw_uranium'],'nyagibits_bytes:raw_tyuyamunite')
            //Tier 1 - 6(Uranium), Calcium
                event.recipes.createCrushing(['6x create:crushed_raw_uranium','chemlib:calcium_dust'],'nyagibits_bytes:raw_tyuyamunite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Torbernite
            //Tier 0 - Copper
                event.recipes.create.compacting(['create:crushed_raw_copper'],'nyagibits_bytes:raw_torbernite')
            //Tier 1 - 3(Copper), Uranium
                event.recipes.createCrushing(['3x create:crushed_raw_copper','create:crushed_raw_uranium'],'nyagibits_bytes:raw_torbernite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Autunite
            //Tier 0 - Phosphorus
                event.recipes.create.compacting(['chemlib:phosphorus_dust'],'nyagibits_bytes:raw_autunite')
            //Tier 1 - 3(Phosphorus), Uranium
                event.recipes.createCrushing(['3x chemlib:phosphorus_dust','create:crushed_raw_uranium'],'nyagibits_bytes:raw_autunite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Thorite
            //Tier 0 - Thorium
                event.recipes.create.compacting('chemlib:thorium_dust','nyagibits_bytes:raw_thorite')
            //Tier 1 - 3(Thorium), Silicon
                event.recipes.createCrushing(['3x chemlib:thorium_dust','chemlib:silicon_dust'],'nyagibits_bytes:raw_thorite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Uranothorite
            //Tier 0 - Thorium
                event.recipes.create.compacting(['chemlib:thorium_dust'],'nyagibits_bytes:raw_uranothorite')
            //Tier 1 - 3(Thorium), Silicon
                event.recipes.createCrushing(['3x chemlib:thorium_dust','create:crushed_raw_uranium'],'nyagibits_bytes:raw_uranothorite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Thorianite
            //Tier 0 - Thorium
                event.recipes.create.compacting(['chemlib:thorium_dust'],'nyagibits_bytes:raw_thorianite')
            //Tier 1 - 3(Thorium), Thorium
                event.recipes.createCrushing(['3x chemlib:thorium_dust','chemlib:thorium_dust'],'nyagibits_bytes:raw_thorianite')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Tin
        //Cassiterite
            //Tier 0 - Tin
                    event.smelting('thermal:tin_ingot','nyagibits_bytes:raw_cassiterite')
                //Tier 1 - 3(Tin), Tin
                    event.recipes.createCrushing(['3x create:crushed_raw_tin','create:crushed_raw_tin'],'nyagibits_bytes:raw_cassiterite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Stannite
            //Tier 0 - Tin
                    event.smelting('thermal:tin_ingot','nyagibits_bytes:raw_stannite')
                //Tier 1 - 3(Tin), Copper
                    event.recipes.createCrushing(['3x create:crushed_raw_tin','create:crushed_raw_copper'],'nyagibits_bytes:raw_stannite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Cylindrite
            //Tier 0 - Tin
                    event.smelting('thermal:tin_ingot','nyagibits_bytes:raw_cylindrite')
                //Tier 1 - 3(Tin), Lead
                    event.recipes.createCrushing(['3x create:crushed_raw_tin','create:crushed_raw_lead'],'nyagibits_bytes:raw_cylindrite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Franckeite
            //Tier 0 - Tin
                    event.smelting('thermal:tin_ingot','nyagibits_bytes:raw_franckeite')
                //Tier 1 - 3(Tin), Silver
                    event.recipes.createCrushing(['3x create:crushed_raw_tin','create:crushed_raw_silver'],'nyagibits_bytes:raw_franckeite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Canfieldite
            //Tier 0 - Silver
                    event.smelting('thermal:silver_ingot','nyagibits_bytes:raw_canfieldite')
                //Tier 1 - 3(Silver), Tin
                    event.recipes.createCrushing(['3x create:crushed_raw_silver','create:crushed_raw_tin'],'nyagibits_bytes:raw_canfieldite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Teallite
            //Tier 0 - Tin
                    event.smelting('thermal:tin_ingot','nyagibits_bytes:raw_teallite')
                //Tier 1 - 3(Tin), Sulfur
                    event.recipes.createCrushing(['3x create:crushed_raw_tin','thermal:sulfur_dust'],'nyagibits_bytes:raw_teallite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Brannerite
            //Tier 0 - Tin
                    event.recipes.create.compacting(['create:crushed_raw_tin'],'nyagibits_bytes:raw_brannerite')
                //Tier 1 - 3(Tin), Granite
                    event.recipes.createCrushing(['3x create:crushed_raw_tin','minecraft:granite'],'nyagibits_bytes:raw_brannerite')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        //Orthoclase
            //Tier 0 - Silicon
                    event.recipes.create.compacting(['chemlib:silicon_dust'],'nyagibits_bytes:raw_orthoclase')
                //Tier 1 - 3(Silicon), Tin
                    event.recipes.createCrushing(['3x chemlib:silicon_dust','create:crushed_raw_tin'],'nyagibits_bytes:raw_orthoclase')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    //Misc - Random
        //Saltpeter
            //Tier 0 - Potassium Nitrate
                        event.recipes.create.compacting('chemlib:potassium_nitrate_dust','nyagibits_bytes:raw_saltpeter')
                    //Tier 1 - 3(Potassium Nitrate), Potassium Nitrate
                        event.recipes.createCrushing(['3x chemlib:potassium_nitrate_dust','chemlib:potassium_nitrate_dust'],'nyagibits_bytes:raw_saltpeter')
                    //Tier 2
                    //Tier 3
                    //Tier 4
                    //Tier 5
                    //Tier 6
                    //Tier 7
                    //Tier 8
                    //Tier 9
                    //Tier 10
                    //Tier 11
                    //Tier 12
                    //Tier 13
                    //Tier 14
                    //Tier 15
        //Borax
            //Tier 0 - Borax Powder
                        event.recipes.create.compacting('nuclearcraft:borax_dust','nyagibits_bytes:raw_borax')
            //Tier 1 - 3(Borax Powder), Borax Powder
                        event.recipes.createCrushing(['3x nuclearcraft:borax_dust','nuclearcraft:borax_dust'],'nyagibits_bytes:raw_borax')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Compacted Limestone
            //Tier 0 - 4(Limestone)
                        event.recipes.create.splashing(['3x create:limestone'],'nyagibits_bytes:raw_compacted_limestone')
            //Tier 1 - 12(Limestone), 4(Limestone)
                        event.recipes.createCrushing(['12x create:limestone','4x create:limestone'],'nyagibits_bytes:raw_compacted_limestone')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Volcanic Sulfur
            //Tier 0 - 2(Sulfur)
                event.recipes.create.compacting(['2x mekanism:dust_sulfur'],'nyagibits_bytes:raw_volcanic_sulfur')
            //Tier 1 - 6(Sulfur), 0.5(Cadmium), 0.5(Indium)
                event.recipes.createCrushing(['6x mekanism:dust_sulfur',
                                                    Item.of('chemlib:cadmium_dust').withChance(0.5),
                                                    Item.of('chemlib:indium_dust').withChance(0.5)],'nyagibits_bytes:raw_volcanic_sulfur')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Rainbow Obsidian
            //Tier 0 - Granulated Obsidian
                event.recipes.create.compacting(['nyagibits_bytes:raw_granulated_obsidian'],'nyagibits_bytes:raw_rainbow_obsidian')
            //Tier 1 - 3(Granulated Obsidian), Granulated Obsidian
                event.recipes.createCrushing(['3x nyagibits_bytes:raw_granulated_obsidian', 'nyagibits_bytes:raw_granulated_obsidian'], 'nyagibits_bytes:raw_rainbow_obsidian')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Petrified
            //Tier 0 - Silicon Dioxide
                event.recipes.create.compacting(['chemlib:silicon_dioxide'],'nyagibits_bytes:raw_petrified_wood')
            //Tier 1 - 3(Silicon Dioxide), Silicon Dioxide
                event.recipes.createCrushing(['3x chemlib:silicon_dioxide', 'chemlib:silicon_dioxide'], 'nyagibits_bytes:raw_petrified_wood')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Chalk
            //Tier 0 - Silicon Dioxide
                event.recipes.create.compacting(['chemlib:silicon_dioxide'],'nyagibits_bytes:raw_petrified_wood')
            //Tier 1 - 3(Silicon Dioxide), Silicon Dioxide
                event.recipes.createCrushing(['3x chemlib:silicon_dioxide', 'chemlib:silicon_dioxide'], 'nyagibits_bytes:raw_petrified_wood')
            //Tier 2
            //Tier 3
            //Tier 4
            //Tier 5
            //Tier 6
            //Tier 7
            //Tier 8
            //Tier 9
            //Tier 10
            //Tier 11
            //Tier 12
            //Tier 13
            //Tier 14
            //Tier 15
        //Trona
            //Tier 0 - Sodium Carbonate
                event.recipes.create.compacting(['chemlib:sodium_carbonate_dust'],'nyagibits_bytes:raw_trona')
                //Tier 1 - 3(Sodium Carbonate), Sodium Carbonate
                    event.recipes.createCrushing(['3x chemlib:sodium_carbonate_dust', 'chemlib:sodium_carbonate_dust'], 'nyagibits_bytes:raw_trona')
                //Tier 2
                //Tier 3
                //Tier 4
                //Tier 5
                //Tier 6
                //Tier 7
                //Tier 8
                //Tier 9
                //Tier 10
                //Tier 11
                //Tier 12
                //Tier 13
                //Tier 14
                //Tier 15
        
})
    //------------------------------------------------------------------
    //Create Sequenced Assembly
    ServerEvents.recipes(e => {
       
        })
