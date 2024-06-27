import { onMounted, ref } from 'vue'

export function getConfig() {
  const config = ref({});

  const fetchAndSetConfig = async () => {
    try {
      const res = await fetch('/json/config.env.json');
      config.value = await res.json();
    } catch (error) {
      console.error('Error fetching config:', error);
    }
  };

  onMounted(fetchAndSetConfig);

  return {
    config,
  };
}