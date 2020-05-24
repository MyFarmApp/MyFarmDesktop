const {app, BrowserWindow, dialog, Menu} = require('electron')
var mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.openDevTools();
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
const template = [
  {
    label: "MyFarm Desktop"
  },
  {
    label: "Open MyFarm",
    click(){
      const {shell} = require("electron");
      shell.openExternal("https://myfarmapp-crops.web.app");
    }
  },
  {
    label: "Quit App",
    click(){
      app.quit();
    }
  }
];
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
