const { ElectronEgg } = require('ee-core');
const { Lifecycle } = require('./preload/lifecycle');
const { preload } = require('./preload');
// const path = require('path');
// require('electron-reload')(path.join(__dirname, '../'), {
//   electron: path.join(__dirname, '../node_modules/.bin/electron'),
// });

// new app
const app = new ElectronEgg();

// register lifecycle
const life = new Lifecycle();
app.register("ready", life.ready);
app.register("electron-app-ready", life.electronAppReady);
app.register("window-ready", life.windowReady);
app.register("before-close", life.beforeClose);

// register preload
app.register("preload", preload);

// run
app.run();