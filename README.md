# Node.js API server based on fastify + MongoDB project template

[![neostandard javascript style][neostandard-image]][neostandard-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
![GitHub Actions CI][github-action-nodejs-ci-url]
[![Coverage Status][coveralls-badge-url]][coveralls-repo-url]
[![MegaLinter](https://github.com/mihaur/node-fastify-template/workflows/MegaLinter/badge.svg?branch=main)](https://github.com/mihaur/node-fastify-template/actions?query=workflow%3AMegaLinter+branch%3Amain)

Node.js API server/backend based on [fastify][fastify-site-url] and [MongoDB][mongodb-uri] as a database for persisting data, GitHub Actions build and code linter, minimal tooling and native node test runner with native coverage. Can be used as a template to quickly bootstrap your Node.js API HTTP server project.

## All features

* automatic reloading using [fastify-cli][fastify-cli-url]
* native [ESM][esm-url] module ([ECMAScript][ecma-script-url]) with imports/exports
* load .env into the environment and validate it using [fastify-env][fastify-env-url] and [dotenv][dotenv-url]
* linting and fixing using [neostandard][neostandard-url]
* git pre-commit hooks using [husky][husky-url]
* integration tests with [node test runner][node-test-url]
* API client [Bruno][bruno-url]
* coverage report using [native node coverage][node-coverage-url]
* continuous integration using [GitHub Actions CI][github-actions-url]
  * code coverage tracking using [coveralls][coveralls-url]
  * dependency update notifications using [dependabot][dependabot-url]
  * dependency merging using [GitHub Action Merge Dependabot][github-action-merge-dependabot]
  * authoring of release notes using [release-drafter][release-drafter-url]
  * code linting with [MegaLinter][mega-linter-url]

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing.

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

Use .env to store your environment-dependent configuration options and secrets; this file should not be checked into your repository. Use .env.example as an example but exclude real secrets.

The server accepts two environment variables:

* `FASTIFY_PORT` &ndash; listening port. It defaults to `3000` and must be an integer.
* `MONGODB_URI` &ndash; MongoDB connection string. This variable is required and must not be empty.

### Linting and code fixing

Linting is done using [neostandard][neostandard-url]. Use `npm run lint` to run the linter. You can also automatically fix linter errors by running `npm run lint:fix`.

### Unit tests

Unit tests are located in src/*component*/__test/*component*.test.js. They are executed by the [Node test runner][node-test-url] using `npm run test:unit`.

### Integration tests

Integration tests are located in test/**.test.js. They are executed by the [Node test runner][node-test-url] using `npm run test`.

### API client test

[Bruno][bruno-url] serves as the API client testing tool, with its configuration stored in the `bruno/` directory. Run the server in a separate terminal and execute API client tests, use the command `npm run bruno` to run all tests, or `npm run bruno -- ping` to run just ping collection.

#### Coverage reports

Use `npm run coverage` to show coverage in the console, or `npm run coverage:lcov` to generate an lcov report.

[bruno-url]: https://www.usebruno.com/
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[coveralls-url]: https://coveralls.io/
[coveralls-repo-url]: https://coveralls.io/github/mihaur/node-fastify-template?branch=main
[coveralls-badge-url]: https://coveralls.io/repos/github/mihaur/node-fastify-template/badge.svg?branch=main
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
[neostandard-url]: https://github.com/neostandard/neostandard
[neostandard-image]: https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat
[node-test-url]: https://nodejs.org/api/test.html
[node-coverage-url]: https://nodejs.org/docs/latest/api/test.html#collecting-code-coverage
[node-url]: https://nodejs.org/en/
[npm-url]: https://www.npmjs.com/
[mega-linter-url]: https://megalinter.github.io
[mongodb-uri]: https://www.mongodb.com/
[release-drafter-url]: https://github.com/marketplace/actions/release-drafter
