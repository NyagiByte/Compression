ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Iron Plate
            e.shaped(Item.of('quark:iron_plate'), [
                ' A ',
                'ABA',
                ' A '
            ], {
                A: 'minecraft:iron_ingot',
                B: 'nyagibits_bytes:livisite_cobble'
            })
        //Iron Plate
            e.shaped(Item.of('quark:grate'), [
                'AA ',
                'AA '
            ], {
                A: 'minecraft:iron_bars'
            })
})