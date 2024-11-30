# A 3-node Qworum simulation

To show that [Qworum](https://qworum.net) is an object-oriented system in the classical OOP sense, 
this project implements a CLI-based simulation of 3 Qworum services 
(aka Qworum APIs, aka [Qworum classes](https://qworum.net/en/specification/v1/#class)),
with these correspondances:

- Qworum class → TypeScript class.
- Qworum class method → TypeScript class method.
- Qworum class property → TypeScript class property.

This simulation is truthful to what happens on the Qworum platform, where:

- each endpoint call or property access happens within the context of a [Qworum object](https://qworum.net/en/specification/v1/#object).
- there is no concept of a static method or a static property (but any object method can behave as if it were static by not using any object property).

## How the code base is organized

The `services` directory contains 3 simulated Qworum services: `identity`, `pm`, and `hcm`.

## Running the project

First [install Deno](https://docs.deno.com/runtime/getting_started/installation/).

Then type this in the terminal:

```shell
deno task run
```

## To do

- Implement the `hcm` service.
- Color-code each service's output.

∎
