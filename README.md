# Node.js API server based on fastify/MongoDB project template

[![js-standard-style][standard-image]][standard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
![GitHub Actions CI][github-action-nodejs-ci-url]
[![Coverage Status][coveralls-badge-url]][coveralls-repo-url]

Node.js API server/backend build with [fastify][fastify-site-url] and [MongoDB][mongodb-uri] as a database for persisting data, GitHub Actions build, esm, minimal tooling (nodemon, standard), and tap tests. Can be used as a template to quickly bootstrap yor Node.js API server project.

## All features
* automatic reloading using [nodemon][nodemon-url]
* load .env to environment and validate using [fastify-env][fastify-env-url] and [dotenv][dotenv-url]
* linting and fixing using [standard][standard-url]
* git pre-commit hooks using [pre-commit][pre-commit-url]
* ESM modules using [esm][esm-url]
* unit and integration tests with coverage using [tap][tap-url]
* continuous integration using [Github Actions CI][github-actions-url]
* code coverage tracking using [coveralls][coveralls-url]
* automated dependency updates using [dependabot][dependabot-url]
* automated authoring of release notes using [release drafter][release-drafter-uri]

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [node][node-url] with [npm][npm-url]
* [git][git-book-url]

### Installing

* `git clone git@github.com:mihaur/node-fastify-template.git`
* `cd cd node-fastify-template`
* `cp .env.sample .env`
* `npm install`
* `npm start`

### Configuring

Use .env to store your environment dependant configuration options and secrets. This file should not be checked in to your repository, use .env.sample as example but exclude real secrets.

### Linting and code fixing

Linting is done using [standard][standard-url]. Use `npm run lint` to run linter. Linter output is piped trough [snazzy][snazzy-url] which converts "compact" text from a linter to "stylish". You can also automatically fix linter errors by running `npm run lint:fix`.

### Tests

Tests are run by [tap][tap-url]. Run `npm run test` to run both unit and integration tests.

#### Unit tests
Unit tests are stored in src/**.spec.js.

#### Integration tests
Integration tests are stored in test/**.spec.js.

#### Coverage tests
Run `npm run coverage` to generate HTML test coverage report. Browser is opened after tests are run.

[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[coveralls-url]: https://coveralls.io/
[coveralls-repo-url]: https://coveralls.io/github/mihaur/node-fastify-template?branch=master
[coveralls-badge-url]: https://coveralls.io/repos/github/mihaur/node-fastify-template/badge.svg?branch=master
[dependabot-url]: https://dependabot.com/
[dotenv-url]: https://github.com/motdotla/dotenv
[esm-url]: https://github.com/standard-things/esm
[fastify-url]: https://github.com/fastify/fastify
[fastify-site-url]: fastify.io/
[fastify-env-url]: https://github.com/fastify/fastify-env
[git-book-url]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[github-action-nodejs-ci-url]: https://github.com/mihaur/node-fastify-template/workflows/Node.JS%20CI/badge.svg
[github-actions-url]: https://github.com/features/actions
[jsdoc-url]: https://devdocs.io/
[mongodb-uri]: https://www.mongodb.com/
[node-doc-url]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[node-url]: https://nodejs.org/en/
[nodemon-url]: https://nodemon.io/
[npm-url]: https://www.npmjs.com/
[pre-commit-url]: https://github.com/observing/pre-commit
[release-drafter-url]: https://github.com/release-drafter/release-drafter
[snazzy-url]: https://github.com/standard/snazzy
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[tap-url]: https://node-tap.org/
