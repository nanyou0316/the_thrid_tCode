/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const patch = snabbdom.patch
const h = snabbdom.h
const container = document.querySelector('#container')
const btn = document.querySelector('button')
const input = document.querySelector('input')
// 业务：创建一个vdom，然后将vdom渲染成真实dom，插入到id为container的容器中
// 1. 创建vdom
var data = {
  username: 'lakers'
}
const vdom = h('div',props = {},[
  h('h3',props = {
    style: {
      width: '100px',
      height: '100px',
      background: '#ccc'
    }
  },data.username),
  h('span',props = {},'你好吗')
])

console.log('vdom',vdom)

// 2. 将vdom渲染成真实dom，并插入到页面中
patch(container,vdom)


//3. 当我们的数据发生改变时
btn.onclick = function () {
  data.username = '兵哥'
  //4. 重新生成vdom
  const newVdom  = h('div',props = {},[
    h('h3',props = {
      style: {
        width: '100px',
        height: '100px',
        background: '#ccc'
      }
    },data.username),
    h('span',props = {},'你好吗')
  ])
  //5. 两次新旧vdom对比,会得到一个patch补丁对象
  const patchObj = patch(vdom,newVdom)
  // console.log(patchObj)
  //6. 将patch补丁对象渲染到界面
  patch(container,patchObj)
}



// 业务： input输入值，实时反馈到界面当中
input.oninput = function (e) {
  const newVdom  = h('div',props = {},[
    h('h3',props = {
      style: {
        width: '100px',
        height: '100px',
        background: '#ccc'
      }
    },e.target.value ),
    h('span',props = {},'你好吗')
  ])
  const patchObj = patch(vdom,newVdom)
  patch(container,patchObj)
}

/***/ })
/******/ ]);