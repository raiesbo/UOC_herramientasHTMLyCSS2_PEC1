/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// import expressions from 'posthtml-expressions';
// import posthtml from 'posthtml';
// import * as fs from 'fs';
// import { readFileSync } from 'fs';
// const {readFileSync} = require('fs');
// console.log("fasdfsfds", readFileSync);
// import posthtml from "posthtml";
// import expressions from 'posthtml-expressions';

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

// (
//   async function() {
//     console.log("pre")
//     const result = await readFileSync('../../index.html', {encoding: 'utf-8'});
//     console.log("fdafas", result)
//   }
// )()
// const data = require('../data/cv-data.json');

// posthtml(expressions({ locals: data }))
//   .process(fs.readFileSync('../../index.html', {encoding: 'utf-8'}))
//   .then((result) => console.log(result.html));
// const result = readFileSync('../../index.html', {encoding: 'utf-8'});
// console.log(result)
// posthtml(expressions({ locals: data }))
//   .process(readFileSync('../../index.html', {encoding: 'utf-8'}))
//   .then(result => console.log(result.html));
// const footer = document.querySelector(
//   '#footer'
// );
// const posthtml = require('posthtml');
// const html = '<button>my supper site: {{title}}</button>';

// function plugin(tree) {
//     let data = { title: 'ololo' };
//     const RE = /\{\{(\S+)\}\}/;

//     tree.match(RE, node => {
//         let key = RE.exec(node)[1];
//         return node.replace(RE, data[key]);
//     });
// }
// footer.innerHTML == html;
// posthtml([plugin]).process(html).then(result => {
//   footer.innerHTML(html);
//     console.log('RESULT: ' + result.html);
// });