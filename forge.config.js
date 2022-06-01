module.exports = {
  packagerConfig: {},
  plugins: [
    ['@electron-forge/plugin-local-electron', {
      // Enter the path to your local electron binary here
      electronPath: 'C:/Users/${username}/dev/electron/src/out/Testing',
      enabled: true
    }]
  ],
  makers: [
    {
      name: '@electron-forge/maker-appx',
      config: {}
    }
  ]
}