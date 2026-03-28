# hugoma

![Hugoma Theme](https://i.imgur.com/mGA3X7m.png)

[![GitHub Issues](https://img.shields.io/github/issues/fvcproductions/hugoma.svg?style=flat-square)](https://github.com/FrancesCoronel/hugoma/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/fvcproductions/hugoma.svg?style=flat-square)](https://github.com/FrancesCoronel/hugoma/pulls) [![MIT License](https://img.shields.io/github/license/fvcproductions/hugoma.svg?style=flat-square)](http://badges.mit-license.org)

A starter theme for Hugo created with Bulma and optimized with modern workflows and tooling. 🌟️

**THIS IS STILL A WORK IN PROGRESS. NOT OFFICIALLY PUBLISHED AS A THEME YET.**

## Installation

```bash
npm i
```

### Start Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Build

To build a static version of the website inside the `/dist` folder

```bash
npm run build
```

## Usage

This website uses [Hugo](https://gohugo.io/) as the static site generator and [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) as the asset pipeline.

It is set up to use [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for Sass and JavaScript compilation and transpilation.

For theme directory issues, refer to [this thread](https://discourse.gohugo.io/t/how-to-check-theme-locally-without-creating-a-hugo-project/12422/2).

### Structure

```text
├── dist                // Static files generated
├── gulpfile.babel.js   // Build processes
├── netlify.toml        // Netlify deployment config
├── package.json        // NPM packages
├── site                // Compiles to dist
|  ├── archetypes       // Default templates
|  ├── config.toml      // Hugo config
|  ├── content          // Content goes here
|  ├── layouts          // Layouts for pages and posts
|  └── static           // Any static files
├── src                 // Go to assets directory in dist
|  ├── img              // Minified
|  ├── js               // Compressed and transpiled
|  └── sass             // Compressed and compiled
└── webpack.config.js   // Webpack config
```

## Showcase

- Website for [Techqueria.org](http://beta.techqueria.org/)

## Contributing

> To get started...

1.  🍴 [Fork this repo](https://github.com/FrancesCoronel/hugoma#fork-destination-box)
2.  🔨 View the contributing guidelines at [CONTRIBUTING.md](CONTRIBUTING.md)
3.  👥 Add yourself as a contributor under the credits section
4.  🔧 [Open a new pull request](https://github.com/FrancesCoronel/hugoma/compare)
5.  🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/FrancesCoronel/hugoma/issues) - any little bit of help counts! 😊

## Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

More details can be found at this project's [code of conduct](.github/CODE_OF_CONDUCT.md).

## Credits

- [FVCproductions](https://github.com/FrancesCoronel) 🍓🍫
- [Bulma](https://bulma.io/)
- [Hugo](https://gohugo.io/)
- [Victor Hugo Boilerplate by Netlify](https://github.com/netlify/victor-hugo)
