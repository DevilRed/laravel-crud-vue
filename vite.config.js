import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';


/*
add vue
npm install vue@latest vue-router@4
*/
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        // add vue config to compile it
        vue({
            template: {
                transformAssetUrls: {
                   base: null,
                   includeAbsolute: false,
                },
            },
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});

/*
now create vue components

We will have three routes: company index, create, and edit forms
create routes file in resources/js/router/index.js

*/