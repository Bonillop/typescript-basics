# Typescript study project

## Dependencies
- lite-server: light server that serves the `index.html` next to `package.json` and offers hot reloading

## Compiling typescript
Typescript compiles to plain javascript, if you want to generate all js files you have to run the following code
`tsc [filename.ts]`

We can also watch a file, so it gets recompiled automatically when we save it by running
`tsc [filename.ts] -w or --watch` 

We can initialize the project as a typescript project to watch at all times all typescript files. You have to run this code
`tsc --init`

This creates a `tsconfig.json` file which manages the compile configuration. From now on everytime we run `tsc` in the root folder, all typescript files will be compiled (default config). This can also be combined with watch mode `tsc -w`

inside `tsconfig.json` uncomenting the option `sourceMap` generates files that let us debug typescript in the chrome browser console. Also there's this `outDir` which indicates the folder where are going to be generated all the js files (tipically `./dist`). `rootDir` does the same but for where to look the ts files, tipically (`./src`)

## Core types
- number (all numbers, incuding integers and floats)
- string
- boolean (true or false, not truthy or falsy)
- object and specialized ({key: type})
- any (basically you skip typescript checks, accepts any type)
- Array (You can add type to the array like so, number[], string[], boolean[], etc)
- Tuple (Fixed length array, with fixed type)
- Enum (ex. enum Role {PEPE, PIPI, POPO}) then Role.PEPE = 0, Role.PIPI = 1, and so on
- Function (you guess it)
- unknown, like any but more restrictive
- never, used when a function never returns a value, for example in an error handling function
