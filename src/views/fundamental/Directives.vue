<template>
    <div class="directives-example">
        <!-- v-if / v-else-if / v-else -->
        <div v-if="showSection === 'first'">
            <h2>v-if / v-else-if / v-else</h2>
            <p>This section is shown when showSection is 'first'.</p>
        </div>
        <div v-else-if="showSection === 'second'">
            <h2>Second Section</h2>
            <p>This section is shown when showSection is 'second'.</p>
        </div>
        <div v-else>
            <h2>Default Section</h2>
            <p>This section is shown when showSection is neither 'first' nor 'second'.</p>
        </div>

        <!-- v-show -->
        <div v-show="isVisible">
            <h2>v-show</h2>
            <p>This content toggles visibility based on the value of isVisible.</p>
        </div>

        <!-- v-for -->
        <h2>v-for</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>

        <!-- v-bind (:) and : -->
        <div :class="{ 'active': isActive }">
            <h2>v-bind (:) and :</h2>
            <p :title="tooltipText">Hover over me</p>
        </div>

        <!-- v-on (@) -->
        <h2>v-on</h2>
        <button @click="handleClick">Click me</button>

        <!-- v-model -->
        <div>
            <h2>v-model</h2>
            <input v-model="message" placeholder="Enter text">
            <p>Input value: {{ message }}</p>
        </div>

        <!-- v-pre -->
        <div v-pre>
            <h2>v-pre</h2>
            <p>This content is not compiled: {{ rawHtml }}</p>
        </div>

        <span>The issue with your rawHtml not rendering correctly lies in the use of v-pre directive within Vue.js. The
            v-pre directive prevents Vue from compiling or interpreting the contents of the element and its children.
            Therefore, any Vue directives or data bindings within that element will not be processed, including
            'rawHtml' in your case.</span>
        <span>Here is how you can do it wihout v-pre:</span>
        <p v-html="rawHtml"></p>

        <!-- v-cloak -->
        <div v-cloak>
            <h2>v-cloak</h2>
            <p>This content will be hidden until Vue.js finishes compilation.</p>
        </div>

        <!-- v-text -->
        <div>
            <h2>v-text</h2>
            <span v-text="textContent"></span>
        </div>

        <!-- v-html -->
        <div>
            <h2>v-html</h2>
            <div v-html="htmlContent"></div>
        </div>

        <!-- v-once -->
        <div>
            <h2>v-once</h2>
            <p v-once>{{ staticContent }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props
defineProps<{
    showSection: string,
    isVisible: boolean,
    items: string[],
    isActive: boolean,
    tooltipText: string,
    message: string,
    rawHtml: string,
    textContent: string,
    htmlContent: string,
    staticContent: string,
}>();

// Methods
const handleClick = () => {
    alert('Button clicked!');
};

// Data
const items = ['Item 1', 'Item 2', 'Item 3'];
const isVisible = true;
const isActive = true;
const tooltipText = 'This is a tooltip';
const message = '';
const showSection = 'first';
const textContent = 'This is dynamic text content';
const htmlContent = '<p>This is <strong>HTML</strong> content</p>';
const staticContent = 'This content will not change after the first render';
const rawHtml = '<p>This is <strong>HTML</strong> content</p>';
</script>

<style scoped>
.directives-example {
    font-family: Arial, sans-serif;
    padding: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}

h2 {
    margin-top: 20px;
    color: #007bff;
}

.active {
    font-weight: bold;
}

button {
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
}

input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
}

p {
    margin-top: 5px;
}
</style>