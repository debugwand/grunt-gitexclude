/*
 * grunt-gitexclude
 * https://github.com/nature/grunt-gitexclude.git
 *
 * Copyright (c) 2013 Dawn Budge
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('gitexclude', 'Add and update a list of files into git exclude', function() {
    var GitExclude = require('../lib/gitexclude');
    var options = this.options({
      id: ''
    });
    var run = GitExclude.exclude(options.id, this.data.destDir, this.data.src);
    var result = (run.success) ? grunt.log.ok : grunt.fail.warn;
    result.call(grunt, run.msg);
  });
};
