import { program } from 'commander';
import genDiff from '../src/gen-diff.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(() => {
    console.log(genDiff(program.args[0], program.args[1], program.opts().format));
  });

program.parse();
