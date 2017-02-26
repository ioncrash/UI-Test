'use strict';
const store = require('./store');
const turtles = store.turtles;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDrop() {
    this.nextElementSibling.classList.toggle('show')
}
$('.dropbtn').on('click', toggleDrop);

// build dropdown menus from store data w/ data attributes for filtering
for (let i = 0; i < store.turtles.length; i++) {
  $('.name-drop').append('<a href="#"><div class="filter-div" data-keyType="name" data-name="' + store.names[i] + '">' + store.names[i] + '</div></a>')
  $('.color-drop').append('<a href="#"><div class="filter-div" data-keyType="color" data-color="' + store.colors[i] + '">' + store.colors[i] + '</div></a>')
  $('.weapon-drop').append('<a href="#"><div class="filter-div" data-keyType="weapon" data-weapon="' + store.weapons[i] + '">' + store.weapons[i] + '</div></a>')
}

const detailTurtle = function(e) {
  e.preventDefault();
  let turtle = turtles[e.target.parentElement.dataset.index];
  // console.log(turtle)
  $('.turtle-grid').html('<div class="detail-wrap"><img class="turtle-img" src="./assets/' + turtle.imageSource + '"><p>Name: ' + turtle.name + '<br><br>Color: ' + turtle.color + '<br><br>Weapon: ' + turtle.weapon + '<br><br> ' + turtle.description + '</p></div>');
  $('.drop-row').toggleClass('hidden');
  $('.detail-name').text(turtle.name)
}

const indexTurtles = function() {
  $('.turtle-grid').html('');
  for (let i = 0; i < turtles.length; i++) {
    $('.turtle-grid').append('<div data-index="' + i + '" class="turtle"><a href="#">' + turtles[i].name + '</a></div>');
  }
  $('.turtle').on('click', detailTurtle);
}

function filterTurtles(e) {
  e.preventDefault();
  let filterKey = e.target.dataset[e.target.dataset.keytype];
  $('.turtle-grid').html('');
  for (let i = 0; i < turtles.length; i++) {
    if (filterKey === turtles[i][e.target.dataset.keytype])
    $('.turtle-grid').append('<div data-index="' + i + '" class="turtle"><a href="#">' + turtles[i].name + '</a></div>');
  }
  $('.turtle').on('click', detailTurtle);
}

function logoClick() {
  indexTurtles();
  $('.drop-row').toggleClass('hidden');
}

$('.filter-div').on('click', filterTurtles);
$('.no-filter-btn').on('click', indexTurtles);
$('.turtle-logo').on('click', logoClick);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



indexTurtles();
