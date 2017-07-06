# Konnekt Cli
> Konnekt Framework Interactive Cli Tool

[![NPM version][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]

A cli tool for interacting with the Konnekt framework quickly and easily from the command line

## Table of Contents

- [What is it?](#what-is-it)
- [Installation](#installation)
- [Usage](#usage)
  - [Init](#init)
  - [Create](#create)
  - [Build](#build)
  - [Group](#group)
  - [Server](#server)
- [How to contribute](#how-to-contribute)
- [License](#license)

## What is it?

This is quick start tool to easily automate many of the functionalities of the [Konnekt](https://github.com/keleko34/konnekt) framework, it also allows the tooling for local development and building of the components in your project.

## Installation

This libray can be installed directly using [NPM](https://www.npmjs.com)

```
  npm install -g konnekt-cli
```

## Usage

Tools and commands avaliable in this cli tool.

Each command has easy to follow command prompts.

*`[]` are optional params*

### Init

 The init tool allows you to create a project in any directory and does all the automatic setup of the project for You.
 
 ```
   konnekt init [title]
 ```
 
 **Params**
 
  - title: "The title for the project"
  
 **Prompts**
 
  - title: "The title for the project"
  - description: "The description of what this project is for"
  - helpers: "Whether to add extra commented out helpers to the initial files"
  
### Create

 The create tool allows you to create new components very easily within your project
 
 ```
   konnekt create [name] [description] [author]
 ```
 
 **Params**
 
  - name: "The name of the component"
  - description: "The description of what the component does"
  - author: "The author that is creating and coding the component"
  
 **Prompts**
 
  - name: "The name of the component"
  - description: "The description of what the component does"
  - author: "The author that is creating and coding the component"
  
### Build

  The build tool allows you to build your components to different channels to be used within your environment.
  
  ```
    konnekt build [channel]
  ```
  
  **Params**
  
   - channel: "The channel that you want to build to [qa,uat,prod]"
   
  **Prompts**
  
   - names: "Multi select tool for the names of the components you want to build"
   - channel: "The channel that you want to build to [qa,uat,prod]"
   - buildfrom: "If [uat/prod] is selected you can choose to deploy direct from `dev` or the previous channel"

### Group

  The group tool allows you to group components to be built into a single file such as a page.
  
  ```
    konnekt group [name]
  ```
  
  **Params**
  
   - name: "The name of the base component you want to group others into"
   
  **Prompts**
  
   - name: "The name of the base component you want to group others into"
   - auto: "allows the component to autogroup itself based on the components in its html"
   - grouped: "Multi select tool for the names of the components you want to group into this one"

### Server

  This allows for runnig an instance of a local server for local development
  
  ```
    konnekt server [port]
  ```
  
  **Params**
  
   - port: "The port you want to run the server on"
   
  **Prompts**
  
   - port: "The port you want to run the server on"
   
## How to contribute

If You would like to contributem here are the steps

1. Clone Repo: [konnekt-cli Github Repo](https://github.com/keleko34/konnekt-cli)

2. Make a request for your changes :)

## License

You can view the license here: [License](https://github.com/keleko34/Konnekt-cli/blob/master/LICENSE)

[npm-url]: https://www.npmjs.com/package/konnekt-cli
[npm-image]: https://img.shields.io/npm/v/konnekt-cli.svg
[gitter-url]: https://gitter.im/konnektjs/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[gitter-image]: https://badges.gitter.im/konnektjs/Lobby.svg