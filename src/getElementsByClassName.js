// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  var list = [];

  var getElements = function(element) {
    if (element.classList && element.classList.contains(className)) {
      list.push(element);
    }

    if (element.childNodes) {
      _.each(element.childNodes, function(item) {
        getElements(item);
      });
    }
  }
  getElements(document.body);

  return list;
}