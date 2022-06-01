# Appx GPU Crash Repro

This repro is a basic repro case for a GPU crash seen when launching a new window from a renderer process in an .appx build.

To use:
1. Clone the repro and run `yarn install`
2. Run `yarn make` to create the appx (_note: you must be on Windows for this to work_). The .appx should be created in your `out/make/appx` directory.
3. Install the .appx certificate to open it when it's unsigned (see instructions below)
4. Install and launch the .appx.
5. Click the "Get GPU Info" button

Expected Behavior: `chrome://gpu` should open in a new window.

Actual Behavior: The app will flash black and may crash (8 times of out 10). If you close the app and try to reopen it, it will not relaunch.

### Installing certificates for unsigned appx

In order to open the .appx, you'll need to install an untrusted certificate. You can do that by following the steps below:

1. From Downloads, right click on the .appx file.
2. Open Properties > Digital Signatures > Details > View Certificate > Install Certificate
3. Some Windows security popup shows > accept
4. Choose Local Machine > then automatically select..  option or place all certificates in Trusted People


### Using a local Electron build

If you'd like to use a local Electron build, change the path in forge.config.js to point at the folder containing your local Electron binary:
```
// example path
  plugins: [
    ['@electron-forge/plugin-local-electron', {
      // Enter the path to your local electron binary here
      electronPath: 'C:/Users/me/dev/electron/src/out/Testing',
      enabled: true
    }]
  ],
```
To use a released version of Electron, comment out of remove the `@electron-forge/plugin-local-electron` plugin from the forge config.