ServerEvents.recipes(e => {
//------------------------------------------------------------------
    //Shaped Crafting
        //Iron Plate
            e.shaped(Item.of(Item.of('quark:iron_plate')), [
                ' A ',
                'ABA',
                ' A '
            ], {
                A: 'minecraft:iron_ingot',
                B: 'nyagibits_bytes:livisite_cobble'
            })
})