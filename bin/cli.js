#!/usr/bin/env node

const { readFileSync, existsSync, writeFileSync } = require('fs');
const { mkdirpSync } = require('fs-extra');
const chalk = require('chalk');
const { dirname, resolve } = require('path');
const meow = require('meow');
const yaml = require('js-yaml');
const { default: swaggerToTS } = require('../dist-node');

const cli = meow(
  `
Usage
  $ swagger-to-ts [input] [options]

Options
  --help                display this
  --wrapper, -w         specify wrapper (default: "declare namespace OpenAPI2")
  --camelcase, -c       convert snake_case properties to camelCase (default: off)
  --swagger, -s         specify Swagger version (default: 2)
  --nowrapper -nw       disables rendering the wrapper
  --injectWarning -iw   injects a warning at the top of the generated file (default: off)
  --npmServer           推送到的npm私服地址
  --npmUser             登录用户
  --npmPassword         登录密码
  --npmPrefix           发布前缀, 比如swagger里面name是test, 配置项为@xxx, 那么会推送过去变为 @xxx/test 这样
`,
  {
    flags: {
      camelcase: {
        type: 'boolean',
        default: false,
        alias: 'c',
      },
      wrapper: {
        type: 'string',
        default: 'declare namespace OpenAPI2',
        alias: 'w',
      },
      swagger: {
        type: 'number',
        alias: 's',
      },
      namespace: {
        type: 'string',
        alias: 'n',
      },
      export: {
        type: 'boolean',
        alias: 'e',
      },
      nowrapper: {
        type: 'boolean',
        alias: 'nw',
      },
      injectWarning: {
        type: 'boolean',
        alias: 'iw',
      },
      npmServer: {
        type: 'string',
      },
      npmUser: {
        type: 'string',
      },
      npmPassword: {
        type: 'string',
      },
      npmPrefix: {
        type: 'string',
      },
    },
  }
);

let spec = cli.input[0];

if (typeof cli.flags.namespace === 'string' && cli.flags.namespace.length > 0) {
  console.error(chalk.red('--namespace option is deprecated. Please use --wrapper instead.'));
  return;
}

if (cli.flags.export === true) {
  console.error(chalk.red('--export option is deprecated. Please use --wrapper instead.'));
  return;
}

// If input is a file, load it
const pathname = resolve(process.cwd(), spec);
if (existsSync(pathname)) {
  spec = readFileSync(pathname, 'UTF-8');
}

// Attempt to parse YAML
try {
  if (/\.ya?ml$/i.test(spec) || spec[0] !== '{') {
    spec = yaml.safeLoad(spec);
  }
} catch (e) {
  console.error(
    chalk.red(`❌ "${spec}" seems to be YAML, but it couldn’t be parsed.
  ${e}`)
  );
}

// Attempt to parse JSON
try {
  if (typeof spec === 'string') {
    spec = JSON.parse(spec);
  }
} catch (e) {
  console.error(
    chalk.red(`❌ Could not parse JSON for "${spec}." Is this a valid Swagger spec?
  ${e}`)
  );
}

if (cli.flags.nowrapper) {
  cli.flags.wrapper = false;
}

const result = swaggerToTS(spec, cli.flags);


//
const timeStart = process.hrtime();
const outputFile = resolve(process.cwd(), cli.flags.output);
const parent = dirname(outputFile);
mkdirpSync(parent);
writeFileSync(outputFile, result);

const timeEnd = process.hrtime(timeStart);
const time = timeEnd[0] + Math.round(timeEnd[1] / 1e6);
console.log(chalk.green(`🚀 ${cli.input[0]} -> ${chalk.bold(cli.flags.output)} [${time}ms]`));
return;

// Otherwise, return result
return result;
