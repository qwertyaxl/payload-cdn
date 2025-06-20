import _ from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.js';

const output = document.createElement('p');
output.textContent = _.capitalize('halo dari script eksternal!');
document.body.appendChild(output);