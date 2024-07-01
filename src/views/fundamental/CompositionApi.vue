<template>
    <div>
        <p>{{ message }}</p>
        <button @click="updateMessage">Update</button>
    </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';

export default {
    setup() {
        const message = ref('Hello, Vue!');
        const updateMessage = () => {
            message.value = 'Updated message';
        };
        const reversedMessage = computed(() => message.value.split('').reverse().join(''));

        watch(message, (newVal, oldVal) => {
            console.log(`Message changed from ${oldVal} to ${newVal}`);
        });

        onMounted(() => {
            console.log('Component mounted');
        });

        return {
            message,
            updateMessage,
            reversedMessage
        };
    }
};
</script>