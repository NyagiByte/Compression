BlockEvents.modification(e => {
    e.modify('botania:livingrock', block => {
      block.requiresTool = false
    })
    e.modify('botania:apothecary_default', block => {
      block.requiresTool = false
    })
  })