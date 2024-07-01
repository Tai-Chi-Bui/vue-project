<template>
    <div>
        <p>{{ reversedMessage }}</p>
        <button @click="updateMessage">Update Message</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello, Vue!'
        };
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        updateMessage() {
            this.message = 'Updated message';
        }
    },
    watch: {
        message(newVal, oldVal) {
            console.log(`Message changed from ${oldVal} to ${newVal}`);
        }
    },
    created() {
        console.log('Component created');
    }
};
</script>

<style scoped>
/* Styles here */
</style>