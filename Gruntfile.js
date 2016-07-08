module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      sass: {
          dist: {
              files: {
                  'dist/css/main.css': 'src/scss/main.scss'
              }
          }
      },
      clean: {
        content: ['dist/']
      },
      watch: {
        sass: {
          files: ['src/scss/*.scss'],
          tasks: ['sass'],
        },
        livereload: {
          options: { livereload: true },
          files: ['dist/**/*'],
        },
        configFiles: {
          files: [ 'src/js/*.js', 'src/*.html', 'dist/*.html' ],
          options: {
            livereload: true,
          }
        }
      },
      browserSync: {
        dev: {
          bsFiles: {
              src : [
                'src/scss/*.scss',
                'src/*.html'
              ]
          },
          options: {
            watchTask: true,
            server: './dist'
          }
        }
      },
      copy: {
        main: {
          files: [
            {expand: true, cwd: 'src', dest: 'dist', src: ['*.html', 'fonts/*', 'img/*']}
          ],
        },
      }
    });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['clean','sass','copy','browserSync','watch']);

};