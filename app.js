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
// let top = ''
let cup = ''



// draw functions



function drawCart() {

}

function drawIce() {
  let icElem = document.getElementById('Creams')
  let creamLineup = ''
  iceCream.forEach(o => {
    i = 0
    creamLineup +=
      `
<div class="col-12 col-md-4 saleCard m-3 p-3 text-center" onclick="holdIce()">
              <img class="imgCard"
                src="${o.image}">
              <p>Style: ${o.name}</p>

            </div>
`
    i++
  })
  icElem.innerHTML = creamLineup
}

function drawTops() {

}

function drawCups() {

}


function buildItem() {
  // gBuild.push(){
  //   gIce: ice,
  //     gTop: top,
  //       gCup: cup,
  // }

}
function holdIce(cream) {
  ice = cream
  console.log(cream);
  console.log(ice);
  // drawTops()
}

function holdTop(cap) {
  top = cap
  drawCups()
}
function holdCup(cont) {
  cup = cont
  buildItem()
}





drawIce()