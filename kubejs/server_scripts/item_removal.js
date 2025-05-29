ServerEvents.recipes(e => {
//------------------------------------------------------------------    
//------------------------------------------------------------------
    //Potions are hardcoded, pack.mcmeta is unable to remove them
            e.remove({output: 'minecraft:potion'});
    //Hiding processes from unimplemented mods
            e.remove({type: 'pneumaticcraft:amadron' }),
            e.remove({type: 'thermal:bottler' }),
            e.remove({type: 'thermal:centrifuge' }),
            e.remove({type: 'thermal:chiller' }),
            e.remove({type: 'thermal:crucible' }),
            e.remove({type: 'thermal:crystallizer' }),
            e.remove({type: 'thermal:brewer' }),
            e.remove({type: 'thermal:furnace' }),
            e.remove({type: 'thermal:insolator' }),
            e.remove({type: 'thermal:press' }),
            e.remove({type: 'thermal:pulverizer' }),
            e.remove({type: 'thermal:pyrolyzer' }),
            e.remove({type: 'thermal:refinery' }),
            e.remove({type: 'thermal:rock_gen' }),
            e.remove({type: 'thermal:sawmill' }),
            e.remove({type: 'thermal:smelter' }),
            e.remove({type: 'thermal:machines' }),
            e.remove({type: 'mekanism:crystallizing' }),
            e.remove({type: 'mekanism:washing' }),
            e.remove({type: 'mekanism:dissolution' }),
            e.remove({type: 'mekanism:chemical_infusing' }),
            e.remove({type: 'mekanism:injecting' }),
            e.remove({type: 'mekanism:oxidizing' }),
            e.remove({type: 'mekanism:chemical_washer' }),
            e.remove({type: 'mekanism:combining' }),
            e.remove({type: 'mekanism:rotary' }),
            e.remove({type: 'mekanism:crushing' }),
            e.remove({type: 'mekanism:separating' }),
            e.remove({type: 'mekanism:enriching' }),
            e.remove({type: 'mekanism:gas_conversion' }),
            e.remove({type: 'mekanism:lategame' }),
            e.remove({type: 'mekanism:metallurgic_infusing' }),
            e.remove({type: 'mekanism:painting' }),
            e.remove({type: 'mekanism:pigment_extracting' }),
            e.remove({type: 'mekanism:pigment_mixing' }),
            e.remove({type: 'mekanism:sawing' }),
            e.remove({type: 'mekanism:reaction' }),
            e.remove({type: 'mekanism:evaporating' }),
            e.remove({type: 'mekanism:nucleosynthesizing' }),
            e.remove({type: 'mekanism:compressing' }),
            e.remove({type: 'mekanism:injecting' }),
            e.remove({type: 'mekanism:purifying' }),
    //Sequenced Assembly
        //To-be-added
            e.remove({output: 'ae2:wireless_access_point'});
            e.remove({output: 'ae2:security_station'});
            e.remove({output: 'ae2:quantum_ring'});
            e.remove({output: 'ae2:quantum_link'});
            e.remove({output: 'ae2:spatial_pylon'});
            e.remove({output: 'ae2:spatial_io_port'});
            e.remove({output: 'ae2:condenser'});
            e.remove({output: 'ae2:energy_cell'});
            e.remove({output: 'ae2:dense_energy_cell'});
            e.remove({output: 'ae2:crafting_unit'});
            e.remove({output: 'ae2:crafting_accelerator'});
            e.remove({output: 'ae2:1k_crafting_storage'});
            e.remove({output: 'ae2:4k_crafting_storage'});
            e.remove({output: 'ae2:16k_crafting_storage'});
            e.remove({output: 'ae2:64k_crafting_storage'});
            e.remove({output: 'ae2:256k_crafting_storage'});
            e.remove({output: 'ae2:crafting_monitor'});
            e.remove({output: 'ae2:pattern_provider'});
            e.remove({output: 'ae2:molecular_assembler'});
            e.remove({output: 'ae2:spatial_anchor'});
            e.remove({output: 'ae2:cell_component_16k'});
            e.remove({output: 'ae2:cell_component_64k'});
            e.remove({output: 'ae2:cell_component_256k'});
            e.remove({output: 'ae2:spatial_cell_component_2'});
            e.remove({output: 'ae2:spatial_cell_component_16'});
            e.remove({output: 'ae2:spatial_cell_component_128'});
            e.remove({output: 'ae2:item_storage_cell_16k'});
            e.remove({output: 'ae2:item_storage_cell_64k'});
            e.remove({output: 'ae2:item_storage_cell_256k'});
            e.remove({output: 'ae2:wireless_terminal'});
            e.remove({output: 'ae2:wireless_crafting_terminal'});
            e.remove({output: 'ae2:biometric_card'});
            e.remove({output: 'ae2:wireless_receiver'});
            e.remove({output: 'ae2:wireless_booster'});
            e.remove({output: 'ae2:pattern_encoding_terminal'});
            e.remove({output: 'ae2:cabel_pattern_provider'});
            e.remove({output: 'ae2:pattern_access_terminal'});
        //Ae2 Tools
            e.remove({output: 'ae2:certus_quartz_axe'});
            e.remove({output: 'ae2:certus_quartz_hoe'});
            e.remove({output: 'ae2:certus_quartz_sword'});
            e.remove({output: 'ae2:certus_quartz_shovel'});
            e.remove({output: 'ae2:certus_quartz_pickaxe'});
            e.remove({output: 'ae2:nether_quartz_axe'});
            e.remove({output: 'ae2:nether_quartz_hoe'});
            e.remove({output: 'ae2:nether_quartz_sword'});
            e.remove({output: 'ae2:nether_quartz_shovel'});
            e.remove({output: 'ae2:nether_quartz_pickaxe'});
            e.remove({output: 'ae2:fluix_axe'});
            e.remove({output: 'ae2:fluix_hoe'});
            e.remove({output: 'ae2:fluix_sword'});
            e.remove({output: 'ae2:fluix_shovel'});
            e.remove({output: 'ae2:fluix_pickaxe'});
        //Shit that refuses to be removed normally
            e.remove({not: {type: 'create:cutting'}, output: 'ae2:silicon'});
            e.remove({not: {type: 'create:sequenced_assembly'}, output: 'ae2:formation_plane'});
            e.remove({not: {type: 'create:sequenced_assembly'}, output: 'ae2:annihilation_plane'});
            e.remove({not: {type: 'create:sequenced_assembly'}, output: 'ae2:item_storage_cell_1k'});
            e.remove({not: {type: 'create:sequenced_assembly'}, output: 'ae2:item_storage_cell_4k'});
            e.remove({not: {type: 'create:sequenced_assembly'}, output: 'ae2:fluid_storage_cell_1k'});
            e.remove({not: {type: 'create:sequenced_assembly'}, output: 'ae2:fluid_storage_cell_4k'});
        //Temp Alchemistry Removals
            //e.remove([{type: 'alchemistry:dissolver', output: 'chemlib:silicon'}]);
//Removal of other stoof
    //Botania
        e.remove({output: 'botania:fabulous_pool'});
        e.remove({output: 'botania:conjuration_catalyst'});
        e.remove({output: 'botania:terra_plate'});
        e.remove({output: 'botania:alfheim_portal'});
        e.remove({output: 'botania:natura_pylon'});
        e.remove({output: 'botania:gaia_pylon'});
        e.remove({output: 'botania:elven_spreader'});
        e.remove({output: 'botania:gaia_spreader'});
        e.remove({output: 'botania:spawner_claw'});
        e.remove({output: 'botania:spark_charger'});
        e.remove({output: 'botania:mana_bomb'});
        e.remove({output: 'botania:shimmerrock'});
        e.remove({output: 'botania:shimmerwood_planks'});
        e.remove({output: 'botania:elementium_ingot'});
        e.remove({output: 'botania:pixie_dust'});
        e.remove({output: 'botania:dragonstone'});
        e.remove({output: 'botania:quartz_dark'});
        e.remove({output: 'botania:quartz_blaze'});
        e.remove({output: 'botania:quartz_lavender'});
        e.remove({output: 'botania:quartz_red'});
        e.remove({output: 'botania:quartz_elven'});
        e.remove({output: 'botania:quartz_sunny'});
        e.remove({output: 'botania:tripwire'});
        e.remove({output: 'botania:elementium_helmet'});
        e.remove({output: 'botania:elementium_chestplate'});
        e.remove({output: 'botania:elementium_leggings'});
        e.remove({output: 'botania:elementium_boots'});
        e.remove({output: 'botania:terrasteel_helmet'});
        e.remove({output: 'botania:terrasteel_chestplate'});
        e.remove({output: 'botania:terrasteel_leggings'});
        e.remove({output: 'botania:terrasteel_boots'});
        e.remove({output: 'botania:terra_pick'});
        e.remove({output: 'botania:terra_axe'});
        e.remove({output: 'botania:terra_sword'});
        e.remove({output: 'botania:star_sword'});
        e.remove({output: 'botania:thunder_sword'});
        e.remove({output: 'botania:crystal_bow'});
        e.remove({output: 'botania:thorn_chakram'});
        e.remove({output: 'botania:flare_chakram'});
        e.remove({output: 'botania:clip'});
        e.remove({output: 'botania:open_bucket'});
        e.remove({output: 'botania:spawner_mover'});
        e.remove({output: 'botania:spell_cloth'});
        e.remove({output: 'botania:black_hole_talisman'});
        e.remove({output: 'botania:temperance_stone'});
        e.remove({output: 'botania:mana_ring_greater'});
        e.remove({output: 'botania:aura_ring_greater'});
        e.remove({output: 'botania:magnet_ring_greater'});
        e.remove({output: 'botania:super_travel_belt'});
        e.remove({output: 'botania:speed_up_belt'});
        e.remove({output: 'botania:knockback_belt'});
        e.remove({output: 'botania:super_lava_pendant'});
        e.remove({output: 'botania:cloud_pendant'});
        e.remove({output: 'botania:super_cloud_pendant'});
        e.remove({output: 'botania:holy_cloak'});
        e.remove({output: 'botania:unholy_cloak'});
        e.remove({output: 'botania:balance_cloak'});
        e.remove({output: 'botania:invisibility_cloak'});
        e.remove({output: 'botania:third_eye'});
        e.remove({output: 'botania:diva_charm'});
        e.remove({output: 'botania:flight_tiara'});
        e.remove({output: 'botania:laputa_shard'});
        e.remove({output: 'botania:spark'});
        e.remove({output: 'botania:spark_upgrade_dispersive'});
        e.remove({output: 'botania:spark_upgrade_dominant'});
        e.remove({output: 'botania:spark_upgrade_recessive'});
        e.remove({output: 'botania:spark_upgrade_isolated'});
        e.remove({output: 'botania:black_lotus'});
        e.remove({output: 'botania:blacker_lotus'});
        e.remove({output: 'botania:overgrowth_seed'});
        e.remove({output: 'botania:placeholder'});
        e.remove({output: 'botania:pattern_1_1'});
        e.remove({output: 'botania:pattern_2_2'});
        e.remove({output: 'botania:pattern_1_2'});
        e.remove({output: 'botania:pattern_2_1'});
        e.remove({output: 'botania:pattern_1_3'});
        e.remove({output: 'botania:pattern_3_1'});
        e.remove({output: 'botania:pattern_2_3'});
        e.remove({output: 'botania:pattern_3_2'});
        e.remove({output: 'botania:pattern_donut'});
        e.remove({output: 'botania:blood_pendant'});
        e.remove({output: 'botania:kekimurus'});
        e.remove({output: 'botania:spectrolus'});
        e.remove({output: 'botania:dandelifeon'});
        e.remove({output: 'botania:rafflowsia'});
        e.remove({output: 'botania:shulk_me_not'});
        e.remove({output: 'botania:orechid'});
        e.remove({output: 'botania:fallen_kanade'});
        e.remove({output: 'botania:loonium'});
        e.remove({output: 'botania:orechid_ignem'});
    //Immersive Engineering
        e.remove({output: 'immersiveengineering:gunpart_barrel'});
        e.remove({output: 'immersiveengineering:gunpart_drum'});
        e.remove({output: 'immersiveengineering:gunpart_hammer'});
        e.remove({output: 'immersiveengineering:circuit_backplate'});
        e.remove({output: 'immersiveengineering:empty_casing'});
        e.remove({output: 'immersiveengineering:empty_shell'});
        e.remove({output: 'immersiveengineering:drill'});
        e.remove({output: 'immersiveengineering:drillhead_steel'});
        e.remove({output: 'immersiveengineering:drillhead_iron'});
        e.remove({output: 'immersiveengineering:buzzsaw'});
        e.remove({output: 'immersiveengineering:sawblade'});
        e.remove({output: 'immersiveengineering:rockcutter'});
        e.remove({output: 'immersiveengineering:grindingdisk'});
        e.remove({output: 'immersiveengineering:glider'});
        e.remove({output: 'immersiveengineering:armor_steel_head'});
        e.remove({output: 'immersiveengineering:armor_steel_chest'});
        e.remove({output: 'immersiveengineering:armor_steel_legs'});
        e.remove({output: 'immersiveengineering:armor_steel_feet'});
        e.remove({output: 'immersiveengineering:revolver'});
        e.remove({output: 'immersiveengineering:speedloader'});
        e.remove({output: 'immersiveengineering:railgun'});
        e.remove({output: 'immersiveengineering:casull'});
        e.remove({output: 'immersiveengineering:armor_piercing'});
        e.remove({output: 'immersiveengineering:buckshot'});
        e.remove({output: 'immersiveengineering:he'});
        e.remove({output: 'immersiveengineering:silver'});
        e.remove({output: 'immersiveengineering:dragons_breath'});
        e.remove({output: 'immersiveengineering:potion'});
        e.remove({output: 'immersiveengineering:flare'});
        e.remove({output: 'immersiveengineering:firework'});
        e.remove({output: 'immersiveengineering:homing'});
        e.remove({output: 'immersiveengineering:wolfpack'});
        e.remove({output: 'immersiveengineering:jerrycan'});
        e.remove({output: 'immersiveengineering:blueprint'});
        e.remove({output: 'immersiveengineering:graphite_electrode'});
        e.remove({output: 'immersiveengineering:fluorescent_tube'});
        e.remove({output: 'immersiveengineering:powerpack'});
        e.remove({output: 'immersiveengineering:shield'});
        e.remove({output: 'immersiveengineering:toolupgrade_drill_damage'});
        e.remove({output: 'immersiveengineering:toolupgrade_drill_fortune'});
        e.remove({output: 'immersiveengineering:toolupgrade_drill_capacity'});
        e.remove({output: 'immersiveengineering:toolupgrade_revolver_bayonet'});
        e.remove({output: 'immersiveengineering:toolupgrade_revolver_magazine'});
        e.remove({output: 'immersiveengineering:toolupgrade_revolver_electro'});
        e.remove({output: 'immersiveengineering:toolupgrade_railgun_scope'});
        e.remove({output: 'immersiveengineering:toolupgrade_railgun_capacitors'});
        e.remove({output: 'immersiveengineering:toolupgrade_shield_flash'});
        e.remove({output: 'immersiveengineering:toolupgrade_shield_shock'});
        e.remove({output: 'immersiveengineering:toolupgrade_shield_magnet'});
        e.remove({output: 'immersiveengineering:toolupgrade_chemthrower_multitank'});
        e.remove({output: 'immersiveengineering:toolupgrade_buzzsaw_spareblades'});
        e.remove({output: 'immersiveengineering:toolupgrade_powerpack_antenna'});
        e.remove({output: 'immersiveengineering:toolupgrade_powerpack_induction'});
        e.remove({output: 'immersiveengineering:toolupgrade_powerpack_tesla'});
        e.remove({output: 'immersiveengineering:alloybrick'});
        e.remove({output: 'immersiveengineering:gunpowder_barrel'});
        e.remove({output: 'immersiveengineering:sorter'});
        e.remove({output: 'immersiveengineering:item_batcher'});
        e.remove({output: 'immersiveengineering:fluid_sorter'});
        e.remove({output: 'immersiveengineering:logic_unit'});
        e.remove({output: 'immersiveengineering:razor_wire'});
        e.remove({output: 'immersiveengineering:metal_barrel'});
        e.remove({output: 'immersiveengineering:charging_station'});
        e.remove({output: 'immersiveengineering:tesla_coil'});
        e.remove({output: 'immersiveengineering:turret_chem'});
        e.remove({output: 'immersiveengineering:turret_gun'});
        e.remove({output: 'immersiveengineering:cloche'});
        e.remove({output: 'immersiveengineering:alu_fence'});
    //Mekanism
        e.remove({mod: 'mekansim'});
    //Thermal
        e.remove({output: 'thermal:machine_frame'});
        e.remove({output: 'thermal:energy_cell_frame'});
        e.remove({output: 'thermal:fluid_cell_frame'});
        e.remove({output: 'thermal:obsidian_glass'});
        e.remove({output: 'thermal:signalum_glass'});
        e.remove({output: 'thermal:lumium_glass'});
        e.remove({output: 'thermal:enderium_glass'});
        e.remove({output: 'thermal:device_composter'});
        e.remove({output: 'thermal:device_water_gen'});
        e.remove({output: 'thermal:device_rock_gen'});
        e.remove({output: 'thermal:device_collector'});
        e.remove({output: 'thermal:device_nullifier'});
        e.remove({output: 'thermal:device_potion_diffuser'});
        e.remove({output: 'thermal:tinker_bench'});
        e.remove({output: 'thermal:energy_cell'});
        e.remove({output: 'thermal:fluid_cell'});
        e.remove({output: 'thermal:iron_gear'});
        e.remove({output: 'thermal:gold_gear'});
        e.remove({output: 'thermal:copper_gear'});
        e.remove({output: 'thermal:netherite_gear'});
        e.remove({output: 'thermal:lapis_gear'});
        e.remove({output: 'thermal:diamond_gear'});
        e.remove({output: 'thermal:emerald_gear'});
        e.remove({output: 'thermal:quartz_gear'});
        e.remove({output: 'thermal:signalum_gear'});
        e.remove({output: 'thermal:lumium_gear'});
        e.remove({output: 'thermal:enderium_gear'});
        e.remove({output: 'thermal:signalum_ingot'});
        e.remove({output: 'thermal:lumium_ingot'});
        e.remove({output: 'thermal:enderium_ingot'});
        e.remove({output: 'thermal:signalum_dust'});
        e.remove({output: 'thermal:lumium_dust'});
        e.remove({output: 'thermal:enderium_dust'});
        e.remove({output: 'thermal:redstone_servo'});
        e.remove({output: 'thermal:rf_coil'});
        e.remove({output: 'thermal:upgrade_augment_1'});
        e.remove({output: 'thermal:upgrade_augment_2'});
        e.remove({output: 'thermal:upgrade_augment_3'});
        e.remove({output: 'thermal:xp_storage_augment'});
        e.remove({output: 'thermal:rf_coil_augment'});
        e.remove({output: 'thermal:rf_coil_storage_augment'});
        e.remove({output: 'thermal:rf_coil_xfer_augment'});
        e.remove({output: 'thermal:fluid_tank_augment'});
        e.remove({output: 'thermal:item_filter_augment'});
        e.remove({output: 'thermal:fluid_filter_augment'});
        e.remove({output: 'thermal:machine_speed_augment'});
        e.remove({output: 'thermal:machine_effiency_augment'});
        e.remove({output: 'thermal:machine_output_augment'});
        e.remove({output: 'thermal:machine_catalyst_augment'});
        e.remove({output: 'thermal:machine_cycle_augment'});
        e.remove({output: 'thermal:mahcine_null_augment'});
        e.remove({output: 'thermal:dynamo_output_augment'});
        e.remove({output: 'thermal:dynamo_fuel_augment'});
        e.remove({output: 'thermal:dynamo_throttle_augment'});
        e.remove({output: 'thermal:area_radius_augment'});
        e.remove({output: 'thermal:wrench'});
        e.remove({output: 'thermal:xp_crystal'});
        e.remove({output: 'thermal:lock'});
        e.remove({output: 'thermal:satchel'});
        e.remove({output: 'thermal:phytogro'});
        e.remove({output: 'thermal:junk_net'});
        e.remove({output: 'thermal:aquachow'});
        e.remove({output: 'thermal:deep_aquachow'});
        e.remove({output: 'thermal:earth_charge'});
        e.remove({output: 'thermal:ice_charge'});
        e.remove({output: 'thermal:lighting_charge'});
        e.remove({output: 'thermal:detonator'});
        e.remove({output: 'thermal:mahine_furnace'});
        e.remove({output: 'thermal:machine_sawmill'});
        e.remove({output: 'thermal:machine_pulverizer'});
        e.remove({output: 'thermal:machine_smelter'});
        e.remove({output: 'thermal:machine_isolator'});
        e.remove({output: 'thermal:machine_centrifuge'});
        e.remove({output: 'thermal:machine_press'});
        e.remove({output: 'thermal:machine_crucible'});
        e.remove({output: 'thermal:machine_chiller'});
        e.remove({output: 'thermal:machine_refinery'});
        e.remove({output: 'thermal:machine_pyrolyzer'});
        e.remove({output: 'thermal:machine_bottler'});
        e.remove({output: 'thermal:machine_brewer'});
        e.remove({output: 'thermal:machine_crystallizer'});
        e.remove({output: 'thermal:machine_crafter'});
        e.remove({output: 'thermal:dynamo_striling'});
        e.remove({output: 'thermal:dynamo_compression'});
        e.remove({output: 'thermal:dynamo_magmatic'});
        e.remove({output: 'thermal:dynamo_nuismatic'});
        e.remove({output: 'thermal:dynamo_lapidary'});
        e.remove({output: 'thermal:dynamo_disenchantment'});
        e.remove({output: 'thermal:dynamo_gourmand'});
        e.remove({output: 'thermal:tin_gear'});
        e.remove({output: 'thermal:tin_plate'});
        e.remove({output: 'thermal:lead_gear'});
        e.remove({output: 'thermal:lead_plate'});
        e.remove({output: 'thermal:silver_gear'});
        e.remove({output: 'thermal:silver_plate'});
        e.remove({output: 'thermal:nickel_gear'});
        e.remove({output: 'thermal:bronze_gear'});
        e.remove({output: 'thermal:bronze_dust'});
        e.remove({output: 'thermal:electrum_gear'});
        e.remove({output: 'thermal:invar_gear'});
        e.remove({output: 'thermal:invar_plate'});
        e.remove({output: 'thermal:invar_dust'});
        e.remove({output: 'thermal:constantan_gear'});
        e.remove({output: 'thermal:slot_seal'});
        e.remove({output: 'thermal:press_coin_die'});
        e.remove({output: 'thermal:press_gear_die'});
        e.remove({output: 'thermal:press_packing_2x2_die'});
        e.remove({output: 'thermal:press_packing_3x3_die'});
        e.remove({output: 'thermal:press_unpacking_die'});
        e.remove({output: 'thermal:chiller_ball_cast'});
        e.remove({output: 'thermal:chiller_ingot_cast'});
        e.remove({output: 'thermal:chiller_rod_cast'});

        e.remove({ output: 'thermal:rubber', type: 'minecraft:crafting_shaped' })
    //MEGA CELLS
        e.remove({mod: 'megacells'})
    //Bedrock Miner
        e.remove({mod: 'bedrockminer'})
    //Nuclearcraft
        e.remove({mod: 'nuclearcraft'})
    //Compact Machines
        e.remove({mod: 'compactmachines'})
    //Biomancy
        e.remove({mod: 'biomancy'})
    //PneumaticCraft
        e.remove({output: 'pneumaticcraft:pressure_gauge'});
        e.remove({output: 'pneumaticcraft:stone_base'});
        e.remove({output: 'pneumaticcraft:cannon_barrel'});
        e.remove({output: 'pneumaticcraft:turbine_blade'});
        e.remove({output: 'pneumaticcraft:plastic'});
        e.remove({output: 'pneumaticcraft:pneumatic_cylinder'});
        e.remove({output: 'pneumaticcraft:turbine_rotor'});
        e.remove({output: 'pneumaticcraft:pcb_blueprint'});
        e.remove({output: 'pneumaticcraft:transistor'});
        e.remove({output: 'pneumaticcraft:capacitor'});
        e.remove({output: 'pneumaticcraft:printed_circuit_board'});
        e.remove({output: 'pneumaticcraft:solar_wafer'});
        e.remove({output: 'pneumaticcraft:solar_cell'});
        e.remove({output: 'pneumaticcraft:stop_worm'});
        e.remove({output: 'pneumaticcraft:nuke_virus'});
        e.remove({output: 'pneumaticcraft:compressed_iron_gear'});
        e.remove({output: 'pneumaticcraft:programming_puzzle'});
        e.remove({output: 'pneumaticcraft:module_expansion_card'});
        e.remove({output: 'pneumaticcraft:logistics_core'});
        e.remove({output: 'pneumaticcraft:spawner_core_shell'});
        e.remove({output: 'pneumaticcraft:reinforced_chest_kit'});
        e.remove({output: 'pneumaticcraft:smart_chest_kit'});
        e.remove({output: 'pneumaticcraft:unassembeled_netherite_drill_bit'});
        e.remove({output: 'pneumaticcraft:gps_tool'});
        e.remove({output: 'pneumaticcraft:gps_area_tool'});
        e.remove({output: 'pneumaticcraft:remote'});
        e.remove({output: 'pneumaticcraft:seismic_sensor'});
        e.remove({output: 'pneumaticcraft:micromissiles'});
        e.remove({output: 'pneumaticcraft:memory_stick'});
        e.remove({output: 'pneumaticcraft:glycerol'});
        e.remove({output: 'pneumaticcraft:bandage'});
        e.remove({output: 'pneumaticcraft:spawner_core'});
        e.remove({output: 'pneumaticcraft:air_canister'});
        e.remove({output: 'pneumaticcraft:reinforced_air_canister'});
        e.remove({output: 'pneumaticcraft:vortex_cannon'});
        e.remove({output: 'pneumaticcraft:pneumatic_wrench'});
        e.remove({output: 'pneumaticcraft:manometer'});
        e.remove({output: 'pneumaticcraft:logistics_configurator'});
        e.remove({output: 'pneumaticcraft:amadron_tablet'});
        e.remove({output: 'pneumaticcraft:minigun'});
        e.remove({output: 'pneumaticcraft:camo_applicator'});
        e.remove({output: 'pneumaticcraft:jackhammer'});
        e.remove({output: 'pneumaticcraft:compressed_iron_helmet'});
        e.remove({output: 'pneumaticcraft:compressed_iron_chestplate'});
        e.remove({output: 'pneumaticcraft:compressed_iron_leggings'});
        e.remove({output: 'pneumaticcraft:compressed_iron_boots'});
        e.remove({output: 'pneumaticcraft:pneumatic_helmet'});
        e.remove({output: 'pneumaticcraft:pneumatic_chestplate'});
        e.remove({output: 'pneumaticcraft:pneumatic_leggings'});
        e.remove({output: 'pneumaticcraft:pneumatic_boots'});
        e.remove({output: 'pneumaticcraft:assembly_program_laser'});
        e.remove({output: 'pneumaticcraft:assembly_program_drill'});
        e.remove({output: 'pneumaticcraft:assembly_program_drill_laser'});
        e.remove({output: 'pneumaticcraft:empty_pcb'});
        e.remove({output: 'pneumaticcraft:unassembled_pcb'});
        e.remove({output: 'pneumaticcraft:failed_pcb'});
        e.remove({output: 'pneumaticcraft:diagnostic'});
        e.remove({output: 'pneumaticcraft:network_api'});
        e.remove({output: 'pneumaticcraft:network_data_storage'});
        e.remove({output: 'pneumaticcraft:network_io_port'});
        e.remove({output: 'pneumaticcraft:network_registry'});
        e.remove({output: 'pneumaticcraft:network_node'});
        e.remove({output: 'pneumaticcraft:drill_bit_iron'});
        e.remove({output: 'pneumaticcraft:drill_bit_compressed_iron'});
        e.remove({output: 'pneumaticcraft:drill_bit_diamond'});
        e.remove({output: 'pneumaticcraft:drill_bit_netherite'});
        e.remove({output: 'pneumaticcraft:drone'});
        e.remove({output: 'pneumaticcraft:logistics_drone'});
        e.remove({output: 'pneumaticcraft:harvesting_drone'});
        e.remove({output: 'pneumaticcraft:guard_drone'});
        e.remove({output: 'pneumaticcraft:collector_drone'});
        e.remove({output: 'pneumaticcraft:logistics_frame_requester'});
        e.remove({output: 'pneumaticcraft:logistics_frame_storage'});
        e.remove({output: 'pneumaticcraft:logistics_frame_default_storage'});
        e.remove({output: 'pneumaticcraft:logistics_frame_passive_provider'});
        e.remove({output: 'pneumaticcraft:logistics_frame_active_provider'});
        e.remove({output: 'pneumaticcraft:heat_frame'});
        e.remove({output: 'pneumaticcraft:spawner_agitator'});
        e.remove({output: 'pneumaticcraft:crop_support'});
        e.remove({output: 'pneumaticcraft:transfer_gadget'});
        e.remove({output: 'pneumaticcraft:gun_ammo'});
        e.remove({output: 'pneumaticcraft:gun_ammo_incindiary'});
        e.remove({output: 'pneumaticcraft:gun_ammo_weighted'});
        e.remove({output: 'pneumaticcraft:gun_ammo_ap'});
        e.remove({output: 'pneumaticcraft:gun_ammo_explosive'});
        e.remove({output: 'pneumaticcraft:gun_ammo_freezing'});
        e.remove({output: 'pneumaticcraft:safety_tube_module'});
        e.remove({output: 'pneumaticcraft:pressure_gauge_module'});
        e.remove({output: 'pneumaticcraft:flow_detecter_module'});
        e.remove({output: 'pneumaticcraft:air_grate_module'});
        e.remove({output: 'pneumaticcraft:regulator_tube_module'});
        e.remove({output: 'pneumaticcraft:charging_module'});
        e.remove({output: 'pneumaticcraft:logistics_module'});
        e.remove({output: 'pneumaticcraft:redstone_module'});
        e.remove({output: 'pneumaticcraft:vacuum_module'});
        e.remove({output: 'pneumaticcraft:volume_upgrade'});
        e.remove({output: 'pneumaticcraft:item_life_upgrade'});
        e.remove({output: 'pneumaticcraft:block_tracker_upgrade'});
        e.remove({output: 'pneumaticcraft:search_upgrade'});
        e.remove({output: 'pneumaticcraft:coordinate_tracker_upgrade'});
        e.remove({output: 'pneumaticcraft:range_upgrade'});
        e.remove({output: 'pneumaticcraft:security_upgrade'});
        e.remove({output: 'pneumaticcraft:magnet_upgrade'});
        e.remove({output: 'pneumaticcraft:charging_upgrade'});
        e.remove({output: 'pneumaticcraft:armor_upgrade'});
        e.remove({output: 'pneumaticcraft:jet_boots_upgrade_1'});
        e.remove({output: 'pneumaticcraft:jet_boots_upgrade_2'});
        e.remove({output: 'pneumaticcraft:jet_boots_upgrade_3'});
        e.remove({output: 'pneumaticcraft:jet_boots_upgrade_4'});
        e.remove({output: 'pneumaticcraft:jet_boots_upgrade_5'});
        e.remove({output: 'pneumaticcraft:night_vision_upgrade'});
        e.remove({output: 'pneumaticcraftscuba_upgrade:'});
        e.remove({output: 'pneumaticcraft:creative_upgrade'});
        e.remove({output: 'pneumaticcraft:inventory_upgrade'});
        e.remove({output: 'pneumaticcraft:jumping_upgrade_1'});
        e.remove({output: 'pneumaticcraft:jumping_upgrade_2'});
        e.remove({output: 'pneumaticcraft:jumping_upgrade_3'});
        e.remove({output: 'pneumaticcraft:jumping_upgrade_4'});
        e.remove({output: 'pneumaticcraft:flippers_upgrade'});
        e.remove({output: 'pneumaticcraft:standby_upgrade'});
        e.remove({output: 'pneumaticcraft:minigun_upgrade'});
        e.remove({output: 'pneumaticcraft:radiation_shielding_upgrade'});
        e.remove({output: 'pneumaticcraft:gilded_upgrade'});
        e.remove({output: 'pneumaticcraft:ender_visor_upgrade'});
        e.remove({output: 'pneumaticcraft:stomp_upgrade'});
        e.remove({output: 'pneumaticcraft:elytra_upgrade'});
        e.remove({output: 'pneumaticcraft:pressure_tube'});
        e.remove({output: 'pneumaticcraft:pressure_chamber_wall'});
        e.remove({output: 'pneumaticcraft:pressure_chamber_glass'});
        e.remove({output: 'pneumaticcraft:pressure_chamber_valve'});
        e.remove({output: 'pneumaticcraft:pressure_chamber_interface'});
        e.remove({output: 'pneumaticcraft:charging_station'});
        e.remove({output: 'pneumaticcraft:elevator_base'});
        e.remove({output: 'pneumaticcraft:pneumatic_door'});
        e.remove({output: 'pneumaticcraft:assembly_platform'});
        e.remove({output: 'pneumaticcraft:air_compressor'});
        e.remove({output: 'pneumaticcraft:advanced_air_compressor'});
        e.remove({output: 'pneumaticcraft:vortex_tube'});
        e.remove({output: 'pneumaticcraft:programmable_controller'});
        e.remove({output: 'pneumaticcraft:gas_lift'});
        e.remove({output: 'pneumaticcraft:refinery'});
        e.remove({output: 'pneumaticcraft:refinery_ouput'});
        e.remove({output: 'pneumaticcraft:thermopneumatic_processing_plant'});
        e.remove({output: 'pneumaticcraft:sentry_turrets'});
        e.remove({output: 'pneumaticcraft:flux_compressor'});
        e.remove({output: 'pneumaticcraft:pneumatic_dynamo'});
        e.remove({output: 'pneumaticcraft:heat_pipe'});
        e.remove({output: 'pneumaticcraft:etching_tank'});
        e.remove({output: 'pneumaticcraft:small_tank'});
        e.remove({output: 'pneumaticcraft:smart_chest'});
        e.remove({output: 'pneumaticcraft:display_table'});
        e.remove({output: 'pneumaticcraft:thermal_lagging'});
        e.remove({output: 'pneumaticcraft:fluid_mixer'});
        e.remove({output: 'pneumaticcraft:vacuum_trap'});
    //Compact Crafting
        e.remove({mod: 'compactcrafting'});

//------------------------------------------------------------------
})
