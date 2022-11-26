#!/usr/bin/env node
// File that runs (when the package is linked/installed) and roll-dice is ran

import { roll } from "../lib/roll.js";
import minimist from 'minimist';

const argument = minimist(process.argv.slice(2));

// Can't have a negative num_sides, num_dice, or num_rolls
// Why does "console.log(argument.arg);" not work here?
// for (let arg in argument) {
//	console.log(argument.arg);
//	if (argument.arg < 0) {
//		console.log("Arguments cannot be negative.");
//		process.exit(1);
//	}
//}

if (argument.sides < 0 || argument.dice < 0 || argument.rolls < 0) {
	console.log("Arguments cannot be negative.");
	process.exit(1);
}

const roll_json = roll(argument.sides || 6, argument.dice || 2, argument.rolls || 1);

console.log(JSON.stringify(roll_json));
