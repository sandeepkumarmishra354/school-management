const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
isDev ? require("electron-reload") : {};

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    center: true,
    minWidth: 1200,
    minHeight: 700,
    autoHideMenuBar: true,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  //mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
