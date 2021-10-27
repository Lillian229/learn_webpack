import {numa,numb} from './utils/a'
import {add,minus} from './utils/b'
import $ from 'jquery'
import './2.css'
console.log(add(numa,numb));



console.log(minus(numa,numb));

let btn = document.getElementById('btn')
btn.onclick = function() {
    console.log(add(numa,numb))
    // $.ajax({
    //     url:'https://leetcode-cn.com/graphql/',
    //     method:"post"
    // })
}

console.log(PRODUCTION);
console.log(VERSION);
console.log(BROWSER_SUPPORTS_HTML5);
console.log(TWO);
console.log(typeof window);
console.log(process.env.NODE_ENV);
console.log(123456);
console.log(6789123);