import {fileURLToPath} from 'node:url'
import {mergeConfig, defineConfig, configDefaults} from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/**'],
            root: fileURLToPath(new URL('./', import.meta.url)),
            coverage: {
                enabled: true,
                provider: 'v8',
                reportsDirectory: './tests/unit/coverage',
                include: [
                    '**/components/**',
                    '**/views/**',
                    '**/store/**',
                ]
            },
            server: {
                deps: {
                    inline: ['vuetify']
                }
            },
            setupFiles: ['./tests/unit/setup.ts']
        }
    })
)