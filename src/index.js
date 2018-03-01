import './index.css';
import './index.less'
import './main.scss';
document.getElementById('app').innerHTML = 'hello2';
const name = 'zfpx';
let getName = ()=>{
    console.log('getName');
}
getName();
console.log(name);
//import $ from 'jquery';
import $ from 'jquery';
$('#container').html('hello');

console.log(require('./common'));