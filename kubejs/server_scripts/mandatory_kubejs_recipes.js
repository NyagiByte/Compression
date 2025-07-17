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

    event.shapeless(Item.of('botania:lexicon', '{"botania:elven_unlock":1b}'), [
      'botania:lexicon',
      'botania:corporea_spark'
  ])

})