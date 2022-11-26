#!/usr/bin/env node
// File that runs (when the package is linked/installed) and roll-dice is ran

import { roll } from "/lib/roll.js";
import minimist from minimist;

const argument = minimist(process.argv.slice(2));

// Can't have a negative num_sides, num_dice, or num_rolls
for (arg in argument) {
	if (arg < 0) {
		console.log("Arguments cannot be negative.")
		process.exit(1);
	}

const roll_json = roll(argument.sides, argument.dice, argument.rolls);

console.log(JSON.stringify(roll_json));
