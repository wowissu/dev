const fs = require('fs');
const eslint = require('eslint');
const glob = require('glob');
const path = require('path');

describe ('Validate ESLint configs', () => {

  async function getErrors(configFile, content) {
    const cli = new eslint.ESLint({
      overrideConfigFile: configFile,
      useEslintrc: false,
    });

    const results = await cli.lintText(content);

    return eslint.ESLint.getErrorResults(results);
  }

  const attrs = glob.sync(path.join(__dirname, '/!(node_modules)/*.js')).map(f => [f, ''])

  test.each(attrs)('load config %s in ESLint to validate all rules are correct', async (fname, textContent)=>{
    try {
      const errs = await getErrors(fname, textContent);

      expect(errs.length).toEqual(0);
    } catch (err) {
      throw err;
    }
  });
});