'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
var addFix = grunt.file.read('test/fixtures/add');
var updateFix = grunt.file.read('test/fixtures/update');

exports.gitexclude = {  
  setUp: function(done) {
    grunt.file.write('tmp/add/.git/info/exclude', addFix);
    grunt.file.write('tmp/update/.git/info/exclude', updateFix);
    done();
  },
  add_new_excludes: function (test) {
    test.expect(1);
    var actual = grunt.file.read('test/fixtures/addDir/.git/info/exclude');
    var expected = grunt.file.read('test/expected/add');
    test.equal(actual.trim(), expected.trim(), 'should add new sections (via grunt)');
    test.done();
  },
  add_new_excludes_unit: function(test) {
    test.expect(1);
    var GitExclude = require('../lib/gitexclude');
    GitExclude.exclude("FOO", 'tmp/add', ['one/two', 'three/four']);
    var actual = grunt.file.read('tmp/add/.git/info/exclude');
    var expected = grunt.file.read('test/expected/add');
    test.equal(actual.trim(), expected.trim(), 'should add new sections (via module code)');
    test.done();
  },
  update_excludes: function (test) {
    test.expect(1);
    var actual = grunt.file.read('test/fixtures/updateDir/.git/info/exclude');
    var expected = grunt.file.read('test/expected/update');
    test.equal(actual.trim(), expected.trim(), 'should update sections rather than keep adding them (via grunt)');
    test.done();
  },
  update_excludes_unit: function(test) {
    test.expect(1);
    var GitExclude = require('../lib/gitexclude');
    GitExclude.exclude("FOO", 'tmp/update', ['bar/bash', 'lorem/ipsum', 'dolor']);
    var actual = grunt.file.read('tmp/update/.git/info/exclude');
    var expected = grunt.file.read('test/expected/update');
    test.equal(actual.trim(), expected.trim(), 'should update sections rather than keep adding them (via module code)');
    test.done();
  }
};
