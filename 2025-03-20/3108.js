/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  let array = new Array(n).fill(-1);
  let val = new Array(n).fill(-1);
  for (let edge of edges) {
    let a = edge[0];
    let b = edge[1];
    while (array[a] >= 0) a = array[a];
    while (array[b] >= 0) b = array[b];

    let bit = edge[2];
    if (val[a] != -1) bit &= val[a];
    if (val[b] != -1) bit &= val[b];

    if (a == b) {
      val[a] = bit;
    } else if (array[a] <= array[b]) {
      array[a] += array[b];
      array[b] = a;
      val[a] = bit;
    } else {
      array[b] += array[a];
      array[a] = b;
      val[b] = bit;
    }
  }

  let res = [];

  for (let list of query) {
    let a = list[0];
    let b = list[1];
    while (array[a] >= 0) a = array[a];
    while (array[b] >= 0) b = array[b];
    if (a == b) res.push(val[a]);
    else res.push(-1);
  }
  return res;
};
