// objects


const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}, {
  name: 'brownie',
  image: 'https://leitesculinaria.com/wp-content/uploads/2019/09/brownie-ice-cream.jpg',
  price: 2
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]


// arrays and variables

let gBuild = [{
  gIce: '',
  gTop: '',
  gCup: '',
}]
let cart = []

let ice = ''
let topp = ''
let cup = ''




// draw functions



function drawCart() {



}

function drawIceCream() {
  let icElem = document.getElementById('Creams')
  let creamLineup = ''

  iceCream.forEach(o => {
    i = 0
    creamLineup +=
      `
                <div class="col-12 col-md-4 saleCard m-3 p-3 text-center" onclick="holdIce('${o.name}')">
                    <img class="imgCard" src="${o.image}">
                    <p>Style: ${o.name}</p>
                </div>
            `
    i++
  });



  icElem.innerHTML = creamLineup
}

function drawToppings() {
  let topsElem = document.getElementById('Toppings')
  let topsLineup = ''

  toppings.forEach(o => {
    i = 0
    topsLineup +=
      `
                <div class="col-12 col-md-4 saleCard m-3 p-3 text-center" onclick="holdTop('${o.name}')">
                    <img class="imgCard" src="${o.image}">
                    <p>Style: ${o.name}</p>
                </div>
            `
    i++
  })
  topsElem.innerHTML = topsLineup
}

function drawCups() {
  let cupElem = document.getElementById('Cups')
  let cupLineup = ''

  containers.forEach(o => {
    i = 0
    cupLineup +=
      `
                <div class="col-12 col-md-4 saleCard m-3 p-3 text-center" onclick="holdCup('${o.name}')">
                    <img class="imgCard" src="${o.image}">
                    <p>Style: ${o.name}</p>
                </div>
            `
    i++
  })
  cupElem.innerHTML = cupLineup
}


function buildItem() {
  if (gBuild[0].gIce == '') {
    gBuild[0] =
    {
      gIce: ice,
      gTop: topp,
      gCup: cup,
      gPrice: totalPrice()
    }
  } else gBuild.push(
    {
      gIce: ice,
      gTop: topp,
      gCup: cup,
    }

  )
  drawCart()

}

function totalPrice() {
  let pIce = findPrice(ice, 1)
  let pTopp = findPrice(topp, 2)
  let pCup = findPrice(cup, 3)
  let result = pIce + pTopp + pCup
  return result
}

function findPrice(str, i) {

  switch (i) {

    case 1: {
      let index = iceCream.findIndex(p => iceCream.name == p.str)
      return iceCream[index].price

    }
    case 2: {
      let index = toppings.findIndex(p => toppings.name == p.str)
      return toppings[index].price
    }
    case 3: {
      let index = containers.findIndex(p => containers.name == p.str)
      return containers[index].price
    }
  }
}

function holdIce(cream) {
  ice = cream
  document.getElementById('Creams').hidden = true
  document.getElementById('Toppings').hidden = false
  drawToppings()
}

function holdTop(cap) {
  topp = cap
  document.getElementById('Toppings').hidden = true
  document.getElementById('Cups').hidden = false
  drawCups()
}
function holdCup(cont) {
  cup = cont
  document.getElementById('Cups').hidden = true
  document.getElementById('Creams').hidden = false
  buildItem()
}





drawIceCream()