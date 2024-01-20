ServerEvents.recipes(event => {
    //Nyagi's Bits & Bytes - Ores
    //Yields:
    /*
        Tier 0 -  (1a)  
               -  1 Total                                                  
        Tier 1 -  (3a)(1b)  
               -  4 Total      
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_limonite')
            //Tier 1 - 3(Iron), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_iron','create:crushed_raw_iron'],'nyagibits_bytes:raw_limonite')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_hematite')
            //Tier 1 - 3(Iron), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_iron','create:crushed_raw_iron'],'nyagibits_bytes:raw_hematite')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_magnetite')
            //Tier 1 - 3(Iron), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_iron','create:crushed_raw_iron'],'nyagibits_bytes:raw_magnetite')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_pyrite')
            //Tier 1 - 3(Iron), Sulfur
                event.recipes.createCrushing(['3x create:crushed_raw_iron','thermal:sulfur_dust'],'nyagibits_bytes:raw_pyrite')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_siderite')
            //Tier 1 - 3(Iron), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_iron','create:crushed_raw_iron'],'nyagibits_bytes:raw_siderite')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_banded_iron')
            //Tier 1 - 3(Iron), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_iron','create:crushed_raw_iron'],'nyagibits_bytes:raw_banded_iron')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_bog_iron')
            //Tier 1 - 3(Iron), Clay
                event.recipes.createCrushing(['3x create:crushed_raw_iron','minecraft:clay_ball'],'nyagibits_bytes:raw_bog_iron')
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
                event.smelting('minecraft:iron_ingot', 'nyagibits_bytes:raw_meteoric_iron')
            //Tier 1 - 3(Iron), Iron
                event.recipes.createCrushing(['3x create:crushed_raw_iron','create:crushed_raw_iron'],'nyagibits_bytes:raw_meteoric_iron')
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
        
        
})
    //------------------------------------------------------------------
    //Create Sequenced Assembly
    ServerEvents.recipes(e => {
       
        })
