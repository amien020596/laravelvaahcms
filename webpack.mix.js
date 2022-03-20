const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');

/*
| 
| CMS themes 
| BulmaBlogTheme
|
*/
mix.js([
    'VaahCms/Themes/BulmaBlogTheme/Resources/assets/js/frontend/app.js',
    'VaahCms/Themes/BulmaBlogTheme/Resources/assets/js/backend/app.js',
    'VaahCms/Themes/BulmaBlogTheme/Resources/assets/js/script.js',
], 'public/vaahcms/js/bulmablogtheme.js')
    .react()
    .sass('resources/sass/app.scss', 'public/css').version().sourceMaps();


/*
| 
| CMS modules 
| BulmaBlogTheme
|
*/
mix.js([
    'VaahCms/Modules/Cms/Resources/assets/js/frontend/app.js',
    'VaahCms/Modules/Cms/Resources/assets/js/backend/app.js',
    'VaahCms/Modules/Cms/Resources/assets/js/script.js',
], 'public/vaahcms/js/bulmablogtheme.js')
    .react()
    .sass('resources/sass/app.scss', 'public/css').version().sourceMaps();

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css').version().sourceMaps();

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css').version().sourceMaps();