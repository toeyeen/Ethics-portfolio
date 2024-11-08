import config from '@slidev/client/uno.config.ts'
import fs from 'node:fs/promises'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

import { mergeConfigs, presetIcons, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',

    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
      })
    ]
  }
])
