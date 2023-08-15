/**
 * Using iteration, write a function fibs which takes a number and returns an array containing
 * that many numbers from the fibonacci sequence. Using an example input of 8,
 * this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
 */

let a = Date.now();
function fibIt(num) {
  const fibSecuence = [0, 1];
  //we have two values so it would be num - 2 or we start with the i = 2
  for (let i = 2; i < num; i++) {
    const nextFib =
      fibSecuence.at(fibSecuence.length - 1) +
      fibSecuence.at(fibSecuence.length - 2);
    fibSecuence.push(nextFib);
  }

  return fibSecuence;
}

console.log(fibIt(8));
let b = Date.now();

console.log(`ITERATION ${(b - a) / 1000}`); //0.009 s

/**
 * Now write another function fibsRec which solves the same problem recursively.
 * This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
 */
a = Date.now();
let fibSecuence = [0, 1];
function fibRec(num) {
  if (num === 2) {
    return fibSecuence;
  }

  fibSecuence = [
    ...fibRec(num - 1),
    fibSecuence.at(fibSecuence.length - 1) +
      fibSecuence.at(fibSecuence.length - 2),
  ];
  return fibSecuence;
}
console.log(fibRec(8));
b = Date.now();
console.log(`RECURSIVE ${(b - a) / 1000}`);
