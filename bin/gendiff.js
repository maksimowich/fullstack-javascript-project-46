const { program } = require('commander');

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-f, --format <type>', 'output format')

program.parse();