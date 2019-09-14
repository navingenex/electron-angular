const {app, BrowserWindow ,Menu,Tray} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
          nodeIntegration: true
        }
      })

      // mainWindow.loadURL(
      //   url.format({
      //     pathname: path.join(__dirname, `/dist/index.html`),
      //     protocol: "file:",
      //     slashes: true
      //   })
      // );
     mainWindow.loadURL(`http://localhost:4200/index.html`)
      // Open the DevTools.
      mainWindow.webContents.openDevTools();
      mainWindow.removeMenu();

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }
let tray=null;

    app.on('ready',createWindow);

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })