ServerEvents.recipes(event => {
//Quark

//------------------------------------------------------------------
    //Iron Plate
        event.remove({output:'quark:iron_plate'});
        event.shaped(Item.of(Item.of('quark:iron_plate')), [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'minecraft:iron_ingot',
            B: 'nyagibits_bytes:livisite_cobble'
        })
//------------------------------------------------------------------
})