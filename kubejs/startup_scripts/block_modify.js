BlockEvents.modification(e => {
    e.modify('botania:livingrock', block => {
      block.requiresTool = false
    })
  })