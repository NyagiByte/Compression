const livingrock = tier => {
    tier.uses = 250 //This isn't doing anything
    tier.speed = 6.0
    tier.attackDamageBonus = 2.0
    tier.level = 2 //This however, is. Why? Great Question(tm)
    tier.enchantmentValue = 14
    tier.repairIngredient = 'botania:livingrock'
}

const manasteel = tier => {
    tier.uses = 1521
    tier.speed = 8.0
    tier.attackDamageBonus = 3.0
    tier.level = 3
    tier.enchantmentValue = 10
    tier.repairIngredient = '#forge:ingots/manasteel'
}

const elementium = tier => {
    tier.uses = 2031
    tier.speed = 9.0
    tier.attackDamageBonus = 4.0
    tier.level = 4
    tier.enchantmentValue = 15
    tier.repairIngredient = '#forge:ingots/elementium'
}

const terrasteel = tier => {
    tier.uses = 3473
    tier.speed = 10.0
    tier.attackDamageBonus = 5.0
    tier.level = 5
    tier.enchantmentValue = 16
    tier.repairIngredient = '#forge:ingots/terrasteel'
}

const alfsteel = tier => {
    tier.uses = 5127
    tier.speed = 11.0
    tier.attackDamageBonus = 6.0
    tier.level = 6
    tier.enchantmentValue = 17
    tier.repairIngredient = 'mythicbotany:alfsteel_ingot'
}

const bedrock = tier => {
    tier.uses = 7398 // not so unbreakable huh
    tier.speed = 12.0
    tier.attackDamageBonus = 7.0
    tier.level = 7
    tier.enchantmentValue = 18
    tier.repairIngredient = 'minecraft:bedrock'
}

//Does this do anything?
ItemEvents.toolTierRegistry(event => {
event.add('livingrock', livingrock)
event.add('manasteel', manasteel)
event.add('elementium', elementium)
event.add('terrasteel', terrasteel)
event.add('alfsteel', alfsteel)
event.add('bedrock', bedrock)
})

//Saw a thread saying item.tier didn't work. So i went for setTier instead.
ItemEvents.modification(event => {
event.modify('aiotbotania:livingrock_sword', item => {
    item.setTier(livingrock)
})
event.modify('aiotbotania:livingrock_axe', item => {
    item.setTier(livingrock)
})
event.modify('aiotbotania:livingrock_pickaxe', item => {
    item.setTier(livingrock)
})
event.modify('aiotbotania:livingrock_hoe', item => {
    item.setTier(livingrock)
})
event.modify('aiotbotania:livingrock_shovel', item => {
    item.setTier(livingrock)
})
event.modify('aiotbotania:livingrock_aiot', item => {
    item.setTier(livingrock)
})
})