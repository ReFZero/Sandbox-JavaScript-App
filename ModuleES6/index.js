//ES6 wprowadzony jako czesc ECMAScript 2015. Umozliwia importowanie elementow do innych plików JS

import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);
console.log(getArea(10).toFixed(2)+ "cm^2");
console.log(getVolume(10).toFixed(2)+ "cm^3");
