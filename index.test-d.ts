import {expectType} from 'tsd';
import brah = require('.');

expectType<readonly string[]>(brah.all);
expectType<string>(brah.random());
