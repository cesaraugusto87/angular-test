/**
 * Created by CesarSanchez on 21/10/2016.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //grunt task configuration will go here
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
};