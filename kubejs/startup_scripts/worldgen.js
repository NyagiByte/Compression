WorldgenEvents.remove(event => {
    event.removeOres(ores => {
        ores.blocks = ["minecraft:coal_ore",
        "minecraft:iron_ore",
        "minecraft:gold_ore",
        "minecraft:diamond_ore",
        "minecraft:redstone_ore",
        "minecraft:lapis_ore",
        "minecraft:copper_ore",
        "thermal:tin_ore",
        "thermal:apatite_ore",
        "thermal:sulfur_ore",
        "thermal:niter_ore",
        "thermal:nickel_ore",
        "thermal:cinnabar_ore",
        "thermal:silver_ore",
        "thermal:lead_ore"]
    })
})