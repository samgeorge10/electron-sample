/**
 * Entry file
 * 
 * @file index.js
 * @author Sam George
 * @since 1.0.0
 */

 const { app, BrowserWindow } = require('electron');

 /**
  * Create a new browser window
  *
  */
 function createBrowserWindow() {
  // create the browser window
  const currentWindow = new BrowserWindow({
    width: 1380,
    height: 700
  });

  // maximize the window
  currentWindow.maximize();

  // load the index file of the application
  currentWindow.loadFile('./public/index.html');
  //open dev tools
  // currentWindow.webContents.openDevTools();
 }

 // app on ready
 app.on('ready', createBrowserWindow);
