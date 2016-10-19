var Item = require('./item');

var Items = function(){

  var item1 = new Item({
    name: "Gjallarhorn",
    description: "Exotic Rocket Launcher",
    quote: "If there is beauty in destruction, why not also in its delivery? - Feizel Crux",
    icon: "eb8377390504838c0190d8d56e70d28e"
    //http://www.bungie.net/common/destiny_content/icons/eb8377390504838c0190d8d56e70d28e.jpg
  });

  var item2 = new Item({
    name: "Thorn",
    description: "Exotic Hand Cannon",
    quote: "To rend one's enemies is to see them not as equals, but objects—hollow of spirit and meaning. - 13th Understanding, 7th Book of Sorrow",
    icon: "781b003ced00037c0c238f0a33dc30e0"
    //http://www.bungie.net/common/destiny_content/icons/781b003ced00037c0c238f0a33dc30e0.jpg
  });

  return [item1, item2, item3, item4]
}