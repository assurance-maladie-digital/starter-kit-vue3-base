import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
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
                include: ['**/components/**', '**/views/**', '**/stores/**'],
            },
            server: {
                deps: {
                    inline: [
                        'vuetify',
                        '@cnamts/synapse-bridge',
                        '@cnamts/design-tokens',
                    ],
                },
            },
            silent: true,
            setupFiles: ['./tests/unit/setup.ts'],
        },
    })
)
