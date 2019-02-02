function getCoords(grid) {
  let coords = {}

  grid.forEach((row, i) => {
    row.forEach((key, j) => {
      coords[key] = [i, j]
    })
  })

  return coords
}

function getAdjustments(coords, origin) {
  let originCoords = coords[origin]
  let adjustments = {}
  Object.keys(coords).forEach((key) => {
    if (key == origin) {
      adjustments[key] = [true, true]
      return
    }
    if (coords[key][0] == originCoords[0]) {
      console.log(`${key} and ${origin} share a width`)
      adjustments[key] = [false, true]
      return
    }
    if (coords[key][1] == originCoords[1]) {
      console.log(`${key} and ${origin} share a height`)
      adjustments[key] = [true, false]
      return
    }
    adjustments[key] = [false, false]
  })

  return adjustments
}

function applyAdjustments(adjustments) {
  Object.keys(adjustments).forEach((key) => {
    let adjustment = adjustments[key]
    let element = document.querySelector(`.quadrant.${key}`)

    element.style.width = adjustment[0] ? "85%" : "15%"
    element.style.height = adjustment[1] ? "85%" : "15%"
  })
}

function resetQuadrants(quadrants) {
  document.querySelectorAll(".quadrant").forEach((element) => {
    element.style.width = null
    element.style.height = null
  })
}

let grid = [
  [ "one",   "two"  ],
  [ "three", "four" ]
]
let coords = getCoords(grid)

document.querySelectorAll(".quadrant").forEach((elem) => {
  let quadrant = elem.classList[1] // FIXME: not the best
  let adjustments = getAdjustments(coords, quadrant)

  elem.onmouseover = (e) => {
    console.log(`over ${quadrant}`)
    applyAdjustments(adjustments)
  }
  elem.onmouseleave = (e) => {
    console.log(`leave ${quadrant}`)
    resetQuadrants()
  }
})

