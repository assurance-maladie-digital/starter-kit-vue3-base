import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

interface Config {
    title: string
    message: string
}

export function getConfig(): { config: Ref<Config | {}> } {
    const config = ref<Config | {}>({})

    const fetchAndSetConfig = async () => {
        try {
            const res = await fetch('/json/config.env.json')
            config.value = await res.json()
        } catch (error) {
            console.error('Error fetching config:', error)
        }
    }

    onMounted(fetchAndSetConfig)

    return {
        config,
    }
}
