ServerEvents.recipes(event => {
    //This file is for recipes that have specific requirements like:
    //Consume/Not Consume item
    //1.19.2 datapacks are unable to support this function

    event.shapeless('1x nyagibits_bytes:bucket_of_salt_water', [
        'minecraft:water_bucket',
        'mekanism:salt'
    ]).replaceIngredient("minecraft:water_bucket", "minecraft:air"),

    event.shaped('nyagibits_bytes:crude_statics_test', [
        'ABC', 
        ' D ' 
      ], {
        A: 'create:copper_nugget', 
        B: '#forge:torn_fabric',
        C: 'create:zinc_nugget',
        D: 'nyagibits_bytes:bucket_of_salt_water'   
      }
    ).replaceIngredient("nyagibits_bytes:bucket_of_salt_water", "minecraft:air")

})