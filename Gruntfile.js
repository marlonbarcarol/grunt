module.exports = function(grunt) {

  grunt.initConfig({

    path: {
        scripts: 'scripts/',
        deploy: 'deploy/'
    },
 
    concat: {
        dist: {
            src: [
            	'<%= path.scripts %>*.js',
            	'!<%= path.scripts %>app.js'
            ],
            dest: '<%= path.scripts %>app.js',
        },
    },
    uglify: {
    	option: {
    		mangle: false,
    		compress: {
		    	drop_console: true
		    }
    	},
    	my_target: {
			files: {
				'<%= path.deploy %>app-min.js': ['<%= path.scripts %>app.js']
			}
		},
	},

	watch: {
		scripts: {
			files: ['<%= path.scripts %>*.js'],
			tasks: ['concat', 'uglify'],
			options: {
				spawn: false,
			}
		}
    }


  });

  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [/*'concat', 'uglify',*/ 'watch']);

};