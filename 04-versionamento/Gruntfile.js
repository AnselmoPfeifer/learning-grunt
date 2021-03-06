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
		},

		rev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 8
			},

			imagens: {
				src: ['dist/images/**/*.{png,jpg,gif}']
			},

			minificados: {
				src: ['dist/js/**/*.min.js', 'dist/css/**/*.min.css']
			}
		}

	});

	// registrando task
	grunt.registerTask('dist', ['clean', 'copy']);

	// task minifica
	// grunt.registerTask('minifica', ['useminPrepare',
	// 	'concat', 'uglify', 'cssmin', 'rev', 'usemin', 'imagemin']);
	grunt.registerTask('minifica', ['useminPrepare',
		'concat', 'uglify', 'cssmin', 'rev:imagens','rev:minificados', 'usemin', 'imagemin']);

	// task default
	grunt.registerTask('default', ['dist', 'minifica']);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.loadNpmTasks('grunt-rev');

}