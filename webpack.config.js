const path = require('path');

module.exports = {
 context: path.join(__dirname, 'client'),
 entry: [
   './index.js',
 ],
 output: {
   path: path.join(__dirname, 'client/dist'),
   filename: 'bundle.js',
 },
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
        presets: ['es2015','react']
      }
     },
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, '/node_modules'),
   ],
 },
};