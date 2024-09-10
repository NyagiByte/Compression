ServerEvents.recipes(e => {

    //I'd rather shove a light bulb up my ass and shatter it than remove these one by one with the .mcmeta
    e.remove({ output: 'chemlib:helium', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:lithium', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:beryllium', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:boron', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:carbon', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:nitrogen', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:oxygen', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:fluorine', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:neon', type: 'alchemistry:fusion' })
    e.remove({ output: 'chemlib:sodium', type: 'alchemistry:fusion' })

})
