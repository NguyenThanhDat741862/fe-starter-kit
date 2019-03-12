const config = {

    port: 3000,

    js: {
        eslint: {
            parserOptions: {
                "ecmaVersion": 6,
                "sourceType": "module",
                "ecmaFeatures": {
                    "jsx": false
                }
            },
            rules: {
                "semi": "error"
            }
        },

        order: [
            'vendor/jquery.min.js',
            'vendor/**/*.js', 
            '*.js', 
            'main.js'
        ]
    },

    sprite: {
        config: {
            mode: {
                css: {
                    dest: '.',
                    render: {
                        scss: {
                            template: './sprite.template.txt'
                        }
                    }
                }
            }
        },

        folder: 'sprite',
        
        svg: 'sprite/svg/*.svg',

        sass: {
            file: 'sprite/*.scss',
            dest: 'src/assets/sass/components/'
        },

        deleted: ['sprite/', 'sprite.template.txt'],

        template: `
        {{#shapes}}

            {{#first}}
                .icon {
                    background-image: url('../img/sprite.svg');
                }
            {{/first}}

            .icon--{{base}} {
                width: {{width.outer}}px;
                height: {{height.outer}}px;
                background-position: {{position.relative.xy}};
            }
        {{/shapes}}
        `
    },

    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: false
    },

    inject: {
        target: {
            tmp: 'tmp/*.html',
            dist: 'dist/*.html'
        },
        src: {
            tmp: ['tmp/css/*.css', 'tmp/js/*.js'],
            dist: ['dist/css/*.css', 'dist/js/*.js']
        },
        dest: {
            tmp: 'tmp',
            dist: 'dist'
        },
        opt: {
            read: false
        },
        relative: {
            relative: true
        }
    },

    htmlmin: {
        collapseWhitespace: true
    },

    dir: {
        src: 'src/',
        tmp: 'tmp/',
        dist: 'dist/'
    },

    src: {
        file: {
            fonts: 'src/assets/fonts/**/*.*',
            img: 'src/assets/img/content/**/*.*',
            icon: 'src/assets/img/icons/**/*.*',
            js: 'src/assets/js/**/*.*',
            sass: 'src/assets/sass/main.scss',
            html: {
                header: 'src/templates/includes/_header.html',
                footer: 'src/templates/includes/_footer.html',
                content: 'src/templates/*.html'
            }
        }
    },

    tmp: {
        file: {
            fonts: 'tmp/fonts/**/*.*',
            img: 'tmp/img/**/*.*',
            js: 'tmp/js/*.js',
            css: 'tmp/css/*.css',
            html: 'tmp/*.html'
        },

        folder: {
            fonts: 'tmp/fonts/',
            img: 'tmp/img/',
            js: 'tmp/js/',
            css: 'tmp/css/'
        }

    },

    dist: {
        folder: {
            fonts: 'dist/fonts/',
            img: 'dist/img/',
            js: 'dist/js/',
            css: 'dist/css/',
            html: 'dist/'
        }    
    },

    watch: {
        font: 'src/assets/fonts/**/*.*',
        img: 'src/assets/img/content/*.*',
        icon: 'src/assets/img/icons/*.*',
        js: 'src/assets/js/**/*.*',
        sass: 'src/assets/sass/**/*.*',
        html: 'src/templates/**/*.html'
    }

};

module.exports = config;