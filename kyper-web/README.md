# Kyper Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/4f49dbb7-a969-49dc-a7ef-561829482ce9/deploy-status)](https://app.netlify.com/sites/stoic-khorana-8c1729/deploys)

# Dev instructions

### Getting started
1. Install [Node](https://nodejs.org) 12.14.1 or later (I use [fnm](https://github.com/Schniz/fnm) to manage multiple Node versions)
2. Run `npm install` to install dependencies
3. To inspect/debug, installing the [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools) is recommended.

### Commands

Start with hot-reload in development mode:
```
npm run start
```

You can add arguments to the commands like so:
```
npm run start -- --help
```

Compile and minify for production:
```
npm run build
```

Lint and fix files:
```
npm run lint-fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
