ServerEvents.recipes(event => {
    //MOD NUKING
        event.remove({mod: 'aiotbotania'})
    //------------------------------------------------------------------
    //AIOT Items
        //Living Rock Sword
        event.shaped(Item.of('aiotbotania:livingrock_sword', '{Damage:0}'), [
            'A',
            'A',
            'B'
        ], {
            A: 'botania:livingrock',
            B: 'botania:livingwood_twig'
        })
    //Living Rock Axe
        event.shaped(Item.of('aiotbotania:livingrock_axe', '{Damage:0}'), [
            'AA',
            'AB',
            ' B'
        ], {
            A: 'botania:livingrock',
            B: 'botania:livingwood_twig'
        })
    //Living Rock Pick
        event.shaped(Item.of('aiotbotania:livingrock_pickaxe', '{Damage:0}'), [
            'AAA',
            ' B ',
            ' B '
        ], {
            A: 'botania:livingrock',
            B: 'botania:livingwood_twig'
        })
    //Living Rock Shovel
        event.shaped(Item.of('aiotbotania:livingrock_shovel', '{Damage:0}'), [
            'A',
            'B',
            'B'
        ], {
            A: 'botania:livingrock',
            B: 'botania:livingwood_twig'
        })
    //Living Rock Hoe
        event.shaped(Item.of('aiotbotania:livingrock_hoe', '{Damage:0}'), [
            'AA',
            ' B',
            ' B'
        ], {
            A: 'botania:livingrock',
            B: 'botania:livingwood_twig'
        })
    //Living Shears
        event.shaped(Item.of(Item.of('aiotbotania:livingrock_shears', '{Damage:0}')), [
            'A ',
            ' A'
        ], {
            A: 'botania:livingrock'
        })
    //Living AIOT
        event.shaped(Item.of(Item.of('aiotbotania:livingrock_aiot', '{Damage:0}')), [
            ' F ',
            'CAE',
            'BD '
        ], {
            A: 'nyagibits_bytes:livisite_alloy',
            B: Item.of('aiotbotania:livingrock_sword', '{Damage:0}'),
            C: Item.of('aiotbotania:livingrock_axe', '{Damage:0}'),
            D: Item.of('aiotbotania:livingrock_pickaxe', '{Damage:0}'),
            E: Item.of('aiotbotania:livingrock_hoe', '{Damage:0}'),
            F: Item.of('aiotbotania:livingrock_shovel', '{Damage:0}')
        })
    //------------------------------------------------------------------
    
})