import {WebpackConfig, get} from '@easy-webpack/core'
import * as webpack from 'webpack'

export function jQuery() {
  return function jQuery(this: WebpackConfig): WebpackConfig {
    return {
      plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
          'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but exposes it to every module
        })
      ].concat(get(this, 'plugins', []))
    }
  }
}