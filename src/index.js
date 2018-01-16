import Deparser from './deparser';
import { walk, all, first, tables, byType, clean } from './utils';

var parse = null;

if (process.platform === 'win32' || process.platform === 'x64') {
  const {execSync} = require('child_process');
  const escapeArgs = require('./escape-args');
  parse = function (query) {
    const parsed = execSync(`docker run -t pg-query-parser ${escapeArgs(query)}`).toString('utf8');
    return {query: parsed};
  };
} else {
  parse = require('bindings')('pg-query').parse;
}

const deparse = Deparser.deparse;

const verify = (query) => {
  const result = deparse(parse(query).query);

  const json1 = clean(parse(query).query);
  const json2 = clean(parse(result).query);

  return JSON.stringify(json1) === JSON.stringify(json2);
};

export { parse, deparse, walk, first, all, tables, byType, clean, verify, Deparser };
