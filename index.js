// Code your solution here:
function driversWithRevenueOver (array, revenue) {
  const newarr =  array.filter (function (element) { return  element['revenue'] > revenue})
  return newarr
}