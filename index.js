// Code your solution here:
function driversWithRevenueOver (array, revenue) {
  const newarr =  array.filter (function (element) { return  element['revenue'] > revenue})
  return newarr
}

function driverNamesWithRevenueOver (array, revenue) {
  const newarr = array.map (function (element) { if (element['revenue'] > revenue) {element['name']; }
  })
  return newarr
}