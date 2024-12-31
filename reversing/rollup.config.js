import { base64 } from 'rollup-plugin-base64';
import { babel } from '@rollup/plugin-babel';
import nodePolyfills from 'rollup-plugin-polyfill-node';


export default {
  input: 'locator.mjs', // Punto di ingresso del tuo applicativo
  output: {
    file: 'dist/bundle.mjs',
    //format: 'iife',
    format: 'es',
    name: "locator"
  },
  plugins: [
    nodePolyfills(),
    base64({
      include: '**/*.wasm', // Includi tutti i file .wasm
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: '> 0.25%, not dead',
            modules: false,
          },
        ],
      ],
    }),
  ],
};