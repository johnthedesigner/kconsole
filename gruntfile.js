/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		// Package
		pkg: grunt.file.readJSON('package.json'),
		// Compile Templates
		emberTemplates: {
			compile: {
			    options: {
			      amd: false,
			      templateBasePath: /templates\//
			    },
			    files: {
			      "js/templates.js": ["templates/*.hbs"]
			    }
			}
		},
		// Watch and Recompile Templates
		watch: {
			emberTemplates: {
			    files: 'app/scripts/**/*.handlebars',
			    tasks: ['emberTemplates', 'livereload']
			},
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	
	grunt.registerTask('default', ['emberTemplates']);
};