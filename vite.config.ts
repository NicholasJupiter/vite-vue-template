import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import eslint from '@rollup/plugin-eslint';
import VueJSXPlugin from '@vitejs/plugin-vue-jsx';


// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: 'import { h } from \'vue\';'
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/assets/styles/var.scss" ;
                `
            },
        }
    },
    plugins: [
        vue(), 
        {
            ...eslint({
                include: 'src/**/*.+(js|ts|vue)',
                /* your options */
            }),
            enforce: 'pre',
            apply: 'serve'
        },
        VueJSXPlugin({})
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@c': resolve(__dirname, 'src/components'),
            '@p': resolve(__dirname, 'src/views'),
            '@assets': resolve(__dirname, 'src/assets')
        }
    },
});
