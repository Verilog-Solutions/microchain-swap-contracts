# Getting Started

## Requirements

This project includes both frontend and contracts. To begin, install dependencies:

- [Node.js v16.15.0 or latest stable](https://nodejs.org/en/). We recommend using [nvm](https://github.com/nvm-sh/nvm) to install.
- [PNPM v7.1.7 or latest stable](https://pnpm.io/installation/)
- [Rust toolchain v0.16.0 or latest `stable`](https://www.rust-lang.org/tools/install)
- [Forc v0.18.1](https://fuellabs.github.io/sway/v0.18.1/introduction/installation.html#installing-from-pre-compiled-binaries)
- [Docker v0.8.2 or latest stable](https://docs.docker.com/get-docker/)
- [Docker Compose v2.6.0 or latest stable](https://docs.docker.com/get-docker/)

## Running Project Locally

### 📦 - Install Dependencies

```sh
pnpm install
```

## 📗 Project Overview

This section has a brief description of each directory. More details can be found inside each package, by clicking on the links.

- [packages/init-script](../packages/init-script/) Scripts for initializing deployed contracts
- [packages/contracts](../packages/contracts/) 🌴 Sway contracts
- [packages/scripts](../packages/scripts/) SwaySwap scripts CLI
- [docker](../docker/) Network configurations

## 🧰 Useful Scripts

To make life easier we added as many useful scripts as possible to our [package.json](../package.json). These are some of the most used during development:

```sh
pnpm <command name>
```

| Script             | Description                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `dev`              | Run development server for the WebApp [packages/app](../packages/app/).                                              |
| `contracts`        | Build, generate types, deploy [packages/contracts](../packages/contracts). It should be used when editing contracts. |
| `contracts:build`  | Build and generate types [packages/contracts](../packages/contracts).                                                |
| `contracts:deploy` | Deploy the current binaries.                                                                                         |
| `scripts:setup`    | Setup [swayswap-scripts](../packages/scripts/) used to build and deploy contracts and generate types.                |
| `services:clean`   | Stop and remove all development containers that are running locally.                                                 |
| `services:setup`   | Run the local network, setup `swayswap-scripts` and build and deploy contracts normally used on the first run.       |

> Other scripts can be found in [package.json](../package.json).

## Running Tests

Please make sure you have done these steps first:

- [📚 - Getting the Repository](#---getting-the-repository)
- [📦 - Install Dependencies](#---install-dependencies)
- [📒 - Run Local Node](#---run-local-node)

## Run Tests in Development Mode

To run all tests against the node and contract configured in `packages/app/.env` (or `packages/app/.env.test` if the file exists):

```sh
pnpm test
```

## Run Tests on a Local Test Environment

With this command we are going to:

- launch a local test-specific `fuel-core` node.
- launch a local test-specific `faucet` API.
- Setup `swayswap-scripts`.
- Build and deploy the SwaySwap contracts to the test node.
- Initialize the token contract deployed on the test node.
- Create a `packages/app/.env.test`.
- Run all tests against the configs `packages/app/.env.test`.
- Delete the local test-specific `fuel-core` node.
- Delete the local test-specific `faucet` API.
- Delete `packages/app/.env.test`.

> **Note**:
> `.env.test` is not deleted automatically. It must be deleted manually if desired.

```sh
pnpm ci:test
```
