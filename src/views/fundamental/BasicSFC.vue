<template>
    <!-- This is where the HTML for the component goes -->
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
          <h2>Using v-model</h2>
          <input v-model="inputValue" class="input-box" placeholder="Type something..."/>
          <p>You typed: {{ inputValue }}</p>
        </div>
  
        <!-- Without using v-model -->
        <div class="input-section">
          <h2>Without using v-model</h2>
          <input :value="manualInputValue" @input="updateManualInput" class="input-box" placeholder="Type something..."/>
          <p>You typed: {{ manualInputValue }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // This is where the JavaScript for the component goes
  export default {
    // Name of the component
    name: 'BasicSFC',
  
    // Component props
    props: {
      propMessage: {
        type: String,
        default: 'Default prop message'
      }
    },
  
    // Component data
    data() {
      return {
        title: 'Welcome to BasicSFC Component',
        message: 'This is a simple Vue 3 Single File Component example.',
        counter: 0,
        inputValue: '',
        manualInputValue: ''
      };
    },
  
    // Component methods
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
  /* This is where the CSS for the component goes */
  /* The `scoped` attribute ensures these styles are only applied to this component */
  
  .basic-sfc {
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: black;
    max-width: 800px;
    margin: auto;
  }
  
  h1 {
    color: #333;
  }
  
  button.increment-button {
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  button.increment-button:hover {
    background-color: #0056b3;
  }
  
  .input-sections {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .input-section {
    flex: 1;
    margin: 0 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #e9ecef;
  }
  
  h2 {
    color: #007bff;
  }
  
  input.input-box {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #333;
  }

  .counter-num {
    color: red
  }
  </style>
  