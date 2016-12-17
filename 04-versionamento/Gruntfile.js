module.exports = function(grunt) {
	grunt.initConfig({

		copy: {
			public: {
				expand: true,
				cwd: 'public',
				src: '**', // Globbin Pattern **
				dest: 'dist'
			}
		},

		clean: {
			dist: {
				src: 'dist'
			}
		},

		useminPrepare: {
			html: 'dist/**/*.html'
		},

		usemin: {
			html: 'dist/**/*.html'
		},

		imagemin: {
			public: {
				expand: true,
				cwd: 'dist/images',
				src: '**/*.{png, jpg,gif}',
				dest: 'dist/images'
			}
		}

	});

	// registrando task
	grunt.registerTask('dist', ['clean', 'copy']);

	// task minifica
	grunt.registerTask('minifica', ['useminPrepare',
		'concat', 'uglify', 'cssmin', 'usemin', 'imagemin']);

	// task default
	grunt.registerTask('default', ['dist', 'minifica']);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.loadNpmTasks('grunt-contrib-imagemin');

}