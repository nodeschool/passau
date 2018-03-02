const shell = require('shelljs');

if (!shell.test('-e', './website/dist/index.html')) {
    console.error('Run yarn build in the master branch first to build the static website');
    console.error('Then switch to the gh-pages branch and run this script');
    process.exit(1);
}

shell.cp('-Rf', 'website/dist/*', '.');