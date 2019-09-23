import _ from "lodash";
import './style.less';
import Icon from './icon.jpg'
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['你好', '工程化,heiheihei!'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
  //es6
  var x = [1,2,3,4,5,6,7,8];
  x.forEach((value,index)=>{
    console.log(value)
  })
  return element;
}

document.body.appendChild(component());
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}