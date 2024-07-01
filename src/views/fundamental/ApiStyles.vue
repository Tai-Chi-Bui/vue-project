<template>
    <div class="api-styles">
        <h1>API Styles in Vue.js</h1>
        <p>Select an API style to learn more about it:</p>
        <div class="options">
            <router-link to="/options-api" class="option-card">
                <h2>Options API</h2>
                <p>Learn about the traditional way of defining component logic in Vue.</p>
            </router-link>
            <router-link to="/composition-api" class="option-card">
                <h2>Composition API</h2>
                <p>Explore the new, more flexible way of defining component logic.</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApiStyles',
};
</script>

<style scoped>
.api-styles {
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    color: black;
}

h1 {
    font-size: 2em;
    margin-bottom: 10px;
    color: rgb(160, 151, 165);
    font-weight: 500;
}

h2 {
    font-weight: 500;
}

p {
    font-size: 1.2em;
    color: #b4b2b2;
}

.options {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.option-card {
    display: block;
    text-align: left;
    width: 45%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    background-color: #f9f9f9;
    transition: background-color 0.3s, transform 0.3s;
}

.option-card:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
}

.option-card h2 {
    margin-top: 0;
    font-size: 1.5em;
}

.option-card p {
    font-size: 1em;
    color: #333;
}
</style>