# A 3-node Qworum simulation

To show that [Qworum](https://qworum.net) is an object-oriented system in the classical OOP sense, 
this project implements a CLI-based simulation of 3 Qworum services 
(aka Qworum APIs, aka [Qworum classes](https://qworum.net/en/specification/v1/#class)) where:

- each Qworum class is implemented by a TypeScript class.
- the Qworum class methods are implemented by TypeScript class methods.
- the Qworum class properties are implemented by TypeScript class properties.

This simulation is truthful to what happens on the Qworum platform, where:

- there is no concept of a static class, or a static method, or a static property.
- each endpoint call or property access happens within the context of a [Qworum object](https://qworum.net/en/specification/v1/#object).

In that sense, this simulation is a faithful representation of what happens on the Qworum platform.

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
