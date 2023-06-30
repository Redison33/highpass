const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const htmlMin = require('gulp-htmlmin');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create();

const clean = () => {
    return del(['dist'])
}

const libs = () => {
    return src('src/libs/**')
    .pipe(dest('dist'))
}

const fonts = () => {
    return src('src/font/**')
    .pipe(dest('dist/font'))
}

const norm = () => {
    return src('src/css/normalize.css')
    .pipe(dest('dist'))
}

const convertSass = () => {
    return src('src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
        cascade: false
    }))
    .pipe(gulpif(argv.prod, cleanCSS({
        level: 2
    })))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}


const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(gulpif(argv.prod, htmlMin({
        collapseWhitespace: true,
    })))

    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

// const svgSprites = () => {
//         return src('src/img/svg/**/*.svg')
//         .pipe(svgSprite({
//             mode: {
//                 stack: {
//                     sprite: '../sprite.svg'
//                 }
//             }
//         }))
//         .pipe(dest('dist/img'))
//     }

    
    
    const scripts = () => {
        return src('src/js/main.js')
        .pipe(gulpif(argv.prod, sourcemaps.init()))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulpif(argv.prod, uglify({
            toplevel: true
        }).on('error', notify.onError())))

        .pipe(gulpif(argv.prod, sourcemaps.write()))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
    }
    
    const watchFiles = () => {
        browserSync.init({
            server: {
                baseDir: 'dist'
            }
        })
    }
    
    const images = () => {
        return src([
            'src/img/**/*.jpg',
            'src/img/**/*.png', 
            'src/img/**/*.svg',
            'src/img/**/*.jpeg',
        ])
        .pipe(image())
        .pipe(dest('dist/img'))
    }


watch('src/**/*.html', htmlMinify)
watch('src/css/**/*.scss', convertSass)
// watch('src/img/svg/**/*.svg', svgSprite)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', libs)


exports.default = series(clean, libs, norm, fonts, convertSass, htmlMinify, images, scripts, watchFiles)