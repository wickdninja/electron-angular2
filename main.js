'use strict';

const { app, BrowserWindow, Tray, Menu, ipcMain } = require("electron")

require('electron-reload')(__dirname);

let win = null
let tray = null

function createWindow ()
{
  // create main window
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`file://${__dirname}/dist/index.html`)
  win.on('closed', () => { win = null })

  // show the dev tools
  win.webContents.openDevTools()

  // add system tray
  const trayMenu = Menu.buildFromTemplate([
    {label: 'APP', click () { win.show() } },
    {type: 'separator'},
    {role: 'quit' }
  ])

  tray = new Tray('./dist/assets/img/systray.png')
  tray.setToolTip('APP')
  tray.setContextMenu(trayMenu)
  tray.on('click', () => { win.isVisible() ? win.hide() : win.show() })
}

// events
app.on('ready', createWindow)
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } })
app.on('activate', () => { if (win === null) { createWindow() } })

ipcMain.on('ipctest', () => { console.log('ipc test works'); })
