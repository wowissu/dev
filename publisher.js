#!/usr/bin/env node
const yargs = require('yargs/yargs');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const { hideBin } = require('yargs/helpers')
const { execSync } = require('child_process');

const argv = yargs(hideBin(process.argv))
  .command('$0 <cwd>', 'Publish via dir path', (yargs) => {
    yargs
      .positional('cwd', {
        desc: 'Working dir also publish dir, should include package.json.',
        type: 'string',
        coerce: (cwd) => cwd ? path.resolve(__dirname, cwd) : cwd
      })
  })
  .showHelpOnFail(true)
  .demandCommand(1)
  .check((argv) => {
    // check cwd path
    if (!argv.cwd || !fs.existsSync(argv.cwd)) {
      return chalk.yellow`<!> Working dir "${argv.cwd}" is not exists. \n`;
    }

    return true;
  })
  .argv

const pkg = require(path.join(argv.cwd, 'package.json'));
const stdout = execSync(`yarn publish --access public --no-git-tag-version --no-commit-hooks --new-version ${pkg.version}`, { cwd: argv.cwd });

console.log(`${stdout}`);