# grunt-gitexclude

> Add and update a list of files into git exclude

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install https://github.com/nature/grunt-gitexclude/tarball/v0.1.0 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gitexclude');
```

## The "gitexclude" task

### Overview
In your project's Gruntfile, add a section named `gitexclude` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gitexclude: {
    options: {
      id: "unique_identifier_for_the_list_of_files_to_ignore"
    },
    your_target: {
      destDir: 'foo/bar', //project folder where .git folder can be found. don't include .git/info/exclude, that is handled in the code
      src: ['folder/file', 'folder/folder'] //lines to add to git exclude
    },
  },
})
```

### Options

#### options.id
Type: `String`
Default value: `''`

A string value that is used to demark the start and end of your list of files in the exclude file.  This allows you to overwrite a block when you run the task rather than continually append to the file.


## Release History
0.1.0 first release
