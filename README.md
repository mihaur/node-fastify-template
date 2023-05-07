# Node.js API server based on fastify + MongoDB project template

[![js-standard-style][standard-image]][standard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
![GitHub Actions CI][github-action-nodejs-ci-url]
[![Coverage Status][coveralls-badge-url]][coveralls-repo-url]
[![MegaLinter](https://github.com/mihaur/node-fastify-template/workflows/MegaLinter/badge.svg?branch=main)](https://github.com/mihaur/node-fastify-template/actions?query=workflow%3AMegaLinter+branch%3Amain)

Node.js API server/backend based on [fastify][fastify-site-url] and [MongoDB][mongodb-uri] as a database for persisting data, GitHub Actions build and code linter, minimal tooling (nodemon, standard), and node-tap tests. Can be used as a template to quickly bootstrap yor Node.js API http server project.

## All features

* automatic reloading using [fastify-cli][fastify-cli-url]
* native [ESM][esm-url] module ([ECMAScript][ecma-script-url]) with imports/exports
* load .env to environment and validate using [fastify-env][fastify-env-url] and [dotenv][dotenv-url]
* linting and fixing using [standard][standard-url]
* git pre-commit hooks using [husky][husky-url]
* integration tests with [node test runner][node-test-url]
* coverage report by [c8][c8-url] that leverages native v8 coverage report
* continuous integration using [GitHub Actions CI][github-actions-url]
  * code coverage tracking using [coveralls][coveralls-url]
  * dependency updates notifications using [dependabot][dependabot-url]
  * dependency merging using [GitHub Action Merge Dependabot][github-action-merge-dependabot]
  * authoring of release notes using [release-drafter][release-drafter-url]
  * code linting with [MegaLinter][mega-litner-url]

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js][node-url] with [npm][npm-url]
* [git][git-book-url]

### Installing

* `git clone git@github.com:mihaur/node-fastify-template.git`
* `cd node-fastify-template`
* `cp .env.example .env`
* `npm install`
* `npm start`

### Configuring

Use .env to store your environment dependant configuration options and secrets. This file should not be checked in to your repository, use .env.sample as example but exclude real secrets.

### Linting and code fixing

Linting is done using [standard][standard-url]. Use `npm run lint` to run linter. Linter output is piped trough [snazzy][snazzy-url] which converts "compact" text from a linter to "stylish". You can also automatically fix linter errors by running `npm run lint:fix`.

### Integration tests

Integration tests are stored in test/**.spec.js. Tests are run by [Node test runner][node-test-url]. Run `npm run test` to run both unit and integration tests.

#### Coverage reports

Run `npm run coverage` to generate HTML test coverage report. Web browser is opened after tests are run.

[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[coveralls-url]: https://coveralls.io/
[coveralls-repo-url]: https://coveralls.io/github/mihaur/node-fastify-template?branch=main
[coveralls-badge-url]: https://coveralls.io/repos/github/mihaur/node-fastify-template/badge.svg?branch=main
[c8-url]: https://github.com/bcoe/c8
[dependabot-url]: https://dependabot.com/
[dotenv-url]: https://github.com/motdotla/dotenv
[ecma-script-url]: https://tc39.es/ecma262/#sec-ecmascript-language-scripts-and-modules
[esm-url]: https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules
[fastify-cli-url]: https://github.com/fastify/fastify-cli
[fastify-env-url]: https://github.com/fastify/fastify-env
[fastify-site-url]: https://www.fastify.io/
[git-book-url]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[github-action-merge-dependabot]: https://github.com/marketplace/actions/github-action-merge-dependabot
[github-action-nodejs-ci-url]: https://github.com/mihaur/node-fastify-template/workflows/Node.JS%20CI/badge.svg
[github-actions-url]: https://github.com/features/actions
[husky-url]: https://typicode.github.io/husky
[mongodb-uri]: https://www.mongodb.com/
[node-test-url]: https://nodejs.org/api/test.html
[node-url]: https://nodejs.org/en/
[npm-url]: https://www.npmjs.com/
[release-drafter-url]: https://github.com/marketplace/actions/release-drafter
[snazzy-url]: https://github.com/standard/snazzy
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[mega-litner-url]: https://megalinter.github.io
