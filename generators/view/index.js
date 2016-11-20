var generators = require('yeoman-generator');
var assert = require('yeoman-assert');
var yosay = require('yosay');
var chalk = require('chalk');
var package = require("../../package.json");

var BASE_PATH = 'src/pages/';

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },
  initializing: function () {
    this.log(yosay(chalk.red("Welcome to use \nMSBU omp\n generator\nv" + package.version)));
  },
  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'pageName',
      message: 'Your page name',
      default: 'template',
      validate: function (input) {
        var fileName = this.destinationPath(BASE_PATH + input + '/Page.vue');
        if (!this.fs.exists(fileName)) {
          return "The page is not exists.Please check it.";
        }
        this.pageName = input;
        return true;
      }.bind(this)
    }, {
      type: 'input',
      name: 'viewName',
      message: 'Your view name',
      default: this.viewName,
      validate: function (input) {
        var fileName = this.destinationPath(BASE_PATH + this.pageName + '/' + input + '.vue');
        if (this.fs.exists(fileName)) {
          return "The view already exists.Please check it.";
        }
        return true;
      }.bind(this)
    }]).then(function (answers) {
      this.pageName = answers.pageName;
      this.viewName = answers.viewName;
    }.bind(this));
  },
  configuring: function () {
  },
  default: function () {
  },
  writing: function () {
    this.copy('../../templates/View_template.vue', this.destinationPath(BASE_PATH + this.pageName) + '/' + this.viewName + '.vue');
  },
  conflicts: function () {
  },
  install: function () {
  },
  end: function () {
    this.log(yosay(chalk.red("See you.\nAny questions please contact me\nGithub@langjun")));
  }
});
