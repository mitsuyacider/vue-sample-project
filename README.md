# How to Build

### Version

| Package | Version  |
| ------- | :------- |
| node    | v12.16.1 |
| vue     | v2.6     |
| webpack | v4.44.2  |

### Install

NOTE: Your node version requires at least v12.

```
npm run install
```

### Build (Production)

The following command generates all assets into dist folder. You can test this application by opening the created **index.html** file with an arbitary browser.

```
npm run build
```

### Development

The following command runs local server for development. You can test this application by accessing **http://0.0.0.0:8080/** file with an arbitary browser. If your laptop is running the other application on the port **8080**, change the port defined in **package.json** at script.serve property with specific port. Your can also test this application on smartphone, as long as your smartphone is on same network with your laptop. In that case, input the internal IP of your laptop and the port to the search box on the smartphone. You can also test this application via mobile browser in iOS simulator which is provided by Xcode.

```
npm run serve
```

### Unit Test

I have tested the only side menu item component and routing. The test framework that I used is jest framework.

```
npm run test
```

# Test Admin Account

This test admin account is defined in **<rootDir>/src/store/index.js**.
Initially, I thought this admin interface was used by multiple admin users. But at the moment, I provide just only one admin user to this admin user interface.

| Key         |       Value        |
| ----------- | :----------------: |
| firstName   |       Maxine       |
| lastName    |      Mitchell      |
| email       | test@acmegames.com |
| password    |     acmegames      |
| dateOfBirth |     1985/08/06     |

# Folder Structure

Main source code for development stores in **<rootDir>/src** directory.

```
.
├── README.md
├── designs
├── jest.config.js
├── node_modules
├── package-lock.json
├── package.json
├── src
└── webpack.config.js
```

# Browser Support

I checked the following browsers during development.
| Browser | Version|
| ------- |----- |
| Chrome |v85.0.4183.121|
| Firefox |v81.0.1 |
| Safari |v13.1.2|
| Mobile Safari |iOS v13.4.1|
