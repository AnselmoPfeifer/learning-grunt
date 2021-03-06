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
		},

		coffee: {
			compilar: {
				expand: true,
				cwd: 'public/coffee',
				src: ['**/*.coffee'],
				dest: 'public/js',
				ext: '.js'
			}
		} ,

		less: {
			compilar: {
				expand: true,
				cwd: 'public/less',
				src: ['**/*.less'],
				dest: 'public/css',
				ext: '.css'
			}
		},

		watch: {

			coffee: {
				options: {
					event: ['added', 'changed']
				},
				files: 'public/coffee/**/*.coffee',
				tasks: 'coffee:compilar'
			},

			less: {
				options: {
					event: ['added', 'changed'] // default all
				},
				files: 'public/less/**/*.less',
				tasks: 'less:compilar'
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

	// carregando tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.loadNpmTasks('grunt-rev');

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

}