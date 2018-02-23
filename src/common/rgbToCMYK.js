export default function rgb2cmyk(r,g,b) {
  var computedC = 1 - (r/255);
  var computedM = 1 - (g/255);
  var computedY = 1 - (b/255);
  var computedK = 0;

  var minCMY    = Math.min(computedC, computedM,computedY);

  computedC = (computedC - minCMY) / (1 - minCMY) ;
  computedM = (computedM - minCMY) / (1 - minCMY) ;
  computedY = (computedY - minCMY) / (1 - minCMY) ;
  computedK = minCMY;

  return [ computedC, computedM, computedY, computedK ];
}