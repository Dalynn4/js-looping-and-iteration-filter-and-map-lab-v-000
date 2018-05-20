// Code your solution here:
function driversWithRevenueOver (array, revenue) {
  const newarr =  array.filter (function (element) { return  element['revenue'] > revenue})
  return newarr
}

function driverNamsWithRevenueOver (array, revenue) {
  const newarr = array.map (function (element) { return element['name'] if (element['revenue'] >)})
}