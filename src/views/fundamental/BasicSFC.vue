<template>
  <div class="basic-sfc">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>

    <!-- Using props -->
    <p>{{ propMessage }}</p>

    <!-- Handling events -->
    <button @click="incrementCounter" class="increment-button">Click me</button>
    <p>You've clicked the button <span class="counter-num">{{ counter }}</span> times.</p>

    <!-- Flex container for v-model and without v-model sections -->
    <div class="input-sections">
      <!-- Using v-model for two-way data binding -->
      <div class="input-section">
        <h2>With v-model</h2>
        <input v-model="inputValue" class="input-box" placeholder="Type something..." />
        <p>You typed: {{ inputValue }}</p>
      </div>

      <!-- Without using v-model -->
      <div class="input-section">
        <h2>Without v-model</h2>
        <input :value="manualInputValue" @input="updateManualInput" class="input-box" placeholder="Type something..." />
        <p>You typed: {{ manualInputValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicSFC',
  props: {
    propMessage: {
      type: String,
      default: 'Default prop message'
    }
  },
  data() {
    return {
      title: 'Welcome to a basic SFC',
      message: 'This is a simple Vue 3 Single File Component example.',
      counter: 0,
      inputValue: '',
      manualInputValue: ''
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    updateManualInput(event) {
      this.manualInputValue = event.target.value;
    }
  }
};
</script>

<style scoped>
.basic-sfc {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #ffffff;
  color: #333;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #007bff;
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
  font-size: 1.1em;
  color: #555;
}

button.increment-button {
  padding: 12px 24px;
  margin-top: 20px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.3s;
}

button.increment-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.input-sections {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.input-section {
  flex: 1;
  margin: 0 15px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}

input.input-box {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.counter-num {
  color: #d32f2f;
  font-weight: bold;
}
</style>
