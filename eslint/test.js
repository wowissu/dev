const eslint = require('eslint');
const glob = require('glob');
const path = require('path');
const expect = require('chai').expect;

describe ('Validate ESLint configs', () => {

  async function getErrors(configFile, content) {
    console.log(configFile);

    const cli = new eslint.ESLint({
      overrideConfigFile: configFile,
      useEslintrc: false,
    });

    const results = await cli.lintText(content);

    return eslint.ESLint.getErrorResults(results);
  }

  const files = glob.sync(path.join(__dirname, '/!(node_modules)/**/*.js'));

  const textContent = '';

  files.forEach((fname) => {
    it(`load config ${fname} in ESLint to validate all rules are correct`, (done)=>{
      getErrors(fname, textContent)
        .then((errs) => {

          if (errs.length) {
            return Promise.reject(errs[0])
          } else {
            expect(errs.length).to.eql(0);
          }

          done();
        })
        .catch((err) => {
          console.log(err.messages.map((m)=>`[${m.ruleId}]: ${m.message}`));

          done(new Error(`Got ${err.messages.length} error message.`));
        })
    })
  })
});