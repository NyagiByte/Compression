ItemEvents.toolTierRegistry(event => {
    event.add('livingrock', livingrock = tier => {
        tier.uses = 250
        tier.speed = 6.0
        tier.attackDamageBonus = 2.0
        tier.level = 2
        tier.enchantmentValue = 14
        tier.repairIngredient = 'botania:livingrock'
    })
    event.add('manasteel', manasteel = tier => {
        tier.uses = 1521
        tier.speed = 8.0
        tier.attackDamageBonus = 3.0
        tier.level = 3
        tier.enchantmentValue = 10
        tier.repairIngredient = '#forge:ingots/manasteel'
    })
    event.add('elementium', elementium = tier => {
        tier.uses = 2031
        tier.speed = 9.0
        tier.attackDamageBonus = 4.0
        tier.level = 4
        tier.enchantmentValue = 15
        tier.repairIngredient = '#forge:ingots/elementium'
    })
    event.add('terrasteel', terrasteel = tier => {
        tier.uses = 3473
        tier.speed = 10.0
        tier.attackDamageBonus = 5.0
        tier.level = 5
        tier.enchantmentValue = 16
        tier.repairIngredient = '#forge:ingots/terrasteel'
    })
    event.add('alfsteel', alfsteel = tier => {
        tier.uses = 5127
        tier.speed = 11.0
        tier.attackDamageBonus = 6.0
        tier.level = 6
        tier.enchantmentValue = 17
        tier.repairIngredient = 'mythicbotany:alfsteel_ingot'
    })
    event.add('bedrock', bedrock = tier => {
        tier.uses = 7398 // not so unbreakable huh
        tier.speed = 12.0
        tier.attackDamageBonus = 7.0
        tier.level = 7
        tier.enchantmentValue = 18
        tier.repairIngredient = 'minecraft:bedrock'
    })
  })

ItemEvents.modification(event => {
    event.modify('aiotbotania:livingrock_sword', item => {
        item.tier = livingrock
    })
    event.modify('aiotbotania:livingrock_axe', item => {
        item.tier = livingrock
    })
    event.modify('aiotbotania:livingrock_pickaxe', item => {
        item.tier = livingrock
    })
    event.modify('aiotbotania:livingrock_hoe', item => {
        item.tier = livingrock
    })
    event.modify('aiotbotania:livingrock_shovel', item => {
        item.tier = livingrock
    })
    event.modify('aiotbotania:livingrock_aiot', item => {
        item.tier = livingrock
    })
})