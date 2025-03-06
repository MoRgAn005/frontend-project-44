#!/usr/bin/env node

import runGame from '../src/index.js';
import getGameData, { description } from '../src/games/gcd.js';

runGame(description, getGameData);