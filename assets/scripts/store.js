'use strict';

const store = {
  turtles: [],
  names: [],
  colors: [],
  weapons: []
};

const buildStore = function() {

  let request = new XMLHttpRequest();
  request.open("GET", "./assets/TMNT.xml", false);
  request.send();
  let xml = request.responseXML;
  let turtles = xml.getElementsByTagName("turtle");
  let xmlDoc = $.parseXML( turtles );


  for(let i = 0; i < turtles.length; i++) {
      let turtle = turtles[i];
      let names = turtle.getElementsByTagName("name");
      let colors = turtle.getElementsByTagName("color");
      let weapons = turtle.getElementsByTagName("weapon");
      let descriptions = turtle.getElementsByTagName("description");
      let imageSources = turtle.getElementsByTagName("imageSource");
      store.turtles[i] = {
        name: names[0].childNodes[0].nodeValue,
        color: colors[0].childNodes[0].nodeValue,
        weapon: weapons[0].childNodes[0].nodeValue,
        description: descriptions[0].childNodes[0].nodeValue,
        imageSource: imageSources[0].childNodes[0].nodeValue
      }
      store.names.push(store.turtles[i].name);
      store.colors.push(store.turtles[i].color);
      store.weapons.push(store.turtles[i].weapon)
  }
}

buildStore();
module.exports = store;
