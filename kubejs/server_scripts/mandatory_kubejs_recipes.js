ServerEvents.recipes(event => {
    //This file is for recipes that have specific requirements like:
    //Consume/Not Consume item/Specific NBT
    //1.19.2 datapacks are unable to support this function
    //CompressionTweaks can override the leftover items for a given recipe. See its recipes for usage.

    /*event.shapeless('1x nyagibits_bytes:bucket_of_salt_water', [
        'minecraft:water_bucket',
        'mekanism:salt'
    ]).replaceIngredient("minecraft:water_bucket", "minecraft:air"),*/

    /*event.shaped('nyagibits_bytes:crude_statics_test', [
        'ABC', 
        ' D ' 
      ], {
        A: 'create:copper_nugget', 
        B: '#forge:torn_fabric',
        C: 'chemlib:zinc_nugget',
        D: 'nyagibits_bytes:bucket_of_salt_water'   
      }
    ).replaceIngredient("nyagibits_bytes:bucket_of_salt_water", "minecraft:air"),*/

    event.shaped('nyagibits_bytes:immersive_assembly', 
      [
        'ABC',
        'DEF',
        'GHI'
      ],
      {
        A: 'nyagibits_bytes:triple_bay_4s_series_toolbox',
        B: 'nyagibits_bytes:duct_tape',
        C: 'nyagibits_bytes:wd_40',
        D: 'nyagibits_bytes:high_strength_concrete',
        E: 'create:brass_casing',
        F: 'nyagibits_bytes:osha_approved_gear',
        G: Item.of('nyagibits_bytes:acetylene_tank', '{Damage:0}').strongNBT(),
        H: 'nyagibits_bytes:crate_of_industrial_components',
        I: 'nyagibits_bytes:high_temperature_heat_exchanger'
      }).replaceIngredient('nyagibits_bytes:acetylene_tank', 'minecraft:air')

    event.shapeless(Item.of('botania:lexicon', '{"botania:elven_unlock":1b}'), [
      'botania:lexicon',
      'botania:corporea_spark'
  ])

})