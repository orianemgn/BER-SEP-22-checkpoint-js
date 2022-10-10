/*
Write a function which, given two angles from a triangle, will return the value of the third one.
(Reminder: the sum of the values of the three angles in a triangle is **always** 180°)
Ex: 
thirdAngle(90, 30) should return 60
thirdAngle(20, 80) should return 80
*/

function thirdAngle(a, b) {
  return 180 - (a + b); 
}

module.exports = thirdAngle;
