<template>
  <div class="about-container">
    <h1 class="title">Topics to Learn in Vue 3</h1>
    <ul class="topics-list">
      <li v-for="section in topics" :key="section.name">
        <h3 class="section">{{ section.name }}</h3>
        <ul class="subtopics-list">
          <li v-for="topic in section.topics" :key="topic.name">
            <RouterLink :to="topic.route" class="topic-link">
              <strong class="topic">{{ topic.name }}</strong>
              <br />
              <span class="desc">{{ topic.description }}</span>
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
  name: 'About',
  components: {
    RouterLink
  },
  data() {
    return {
      topics: [
        {
          name: 'Fundamental',
          topics: [
            {
              name: 'Basic Single File Components (SFC)',
              description: "Learn about SFC's syntax, component registration, props, events, v-model, and attribute inheritance.",
              route: '/basic-sfc'
            },
            {
              name: 'Directives',
              description: 'List of directives available in Vue and their use cases.',
              route: '/directives'
            },
            {
              name: 'API Styles',
              description: 'Understand the Options API and Composition API.',
              route: '/api-styles'
            }
          ]
        },
        {
          name: 'Advanced',
          topics: [
            {
              name: 'Async Components',
              description: 'Explore the creation and usage of components that are loaded asynchronously.',
              route: '/async-components'
            },
            {
              name: 'Teleport Components',
              description: 'Learn how to use Teleport to move components in the DOM hierarchy.',
              route: '/teleport-components'
            },
            {
              name: 'Provide / Inject',
              description: 'Understand the provide/inject mechanism for dependency injection.',
              route: '/provide-inject'
            },
            {
              name: 'Custom Directives',
              description: 'Create and use custom directives in Vue.',
              route: '/custom-directives'
            },
            {
              name: 'Plugins',
              description: 'Learn how to develop and use plugins to extend Vue’s functionality.',
              route: '/plugins'
            },
            {
              name: 'Watchers',
              description: 'Utilize watchers to respond to data changes.',
              route: '/watchers'
            },
            {
              name: 'Slots',
              description: 'Learn about slots for content distribution in components.',
              route: '/slots'
            },
            {
              name: 'Animations',
              description: 'Create animations using Transition and Transition Group components.',
              route: '/animations'
            }
          ]
        },
        {
          name: 'Ecosystem',
          topics: [
            {
              name: 'Forms',
              description: 'Build and validate forms using FormKit and Vuelidate.',
              route: '/forms'
            },
            {
              name: 'VueUse',
              description: 'Discover VueUse, a collection of essential Vue Composition API utilities.',
              route: '/vueuse'
            },
            {
              name: 'State Management',
              description: 'Manage state efficiently with Pinia.',
              route: '/state-management'
            },
            {
              name: 'API Calls',
              description: 'Handle API calls and manage server state with Tanstack Query.',
              route: '/api-calls'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-container {
  max-height: 400px;
  overflow: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #e3f2fd;
    /* Light blue background */
    color: #0d47a1;
    /* Dark blue text */
    font-family: 'Arial', sans-serif;
  }
  
  .title {
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 20px;
    color: #01579b;
    /* Slightly lighter blue */
  }
  
  .section {
    font-weight: 600;
    color: #0288d1;
    font-size: 1.5em;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .topic-link {
    display: block;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    /* White background for each topic */
    color: #0d47a1;
    text-decoration: none;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .topic-link:hover {
    background-color: #bbdefb;
    /* Lighter blue on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* Slight shadow effect */
  }
  
  .topic {
    font-weight: 500;
    font-size: 1.2em;
  }
  
  .desc {
    color: #546e7a;
    /* Darker grey */
    font-size: 1em;
  }
  
  .topics-list,
  .subtopics-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  
  .topics-list>li {
    margin: 10px 0;
  }
  
  .subtopics-list>li {
    margin: 5px 0;
  }
  
  /* Custom scrollbar */
  .about-container::-webkit-scrollbar {
    width: 8px;
  }
  
  .about-container::-webkit-scrollbar-track {
    background: #e1f5fe;
    /* Lighter blue track */
    border-radius: 10px;
  }
  
  .about-container::-webkit-scrollbar-thumb {
    background: #0288d1;
    /* Blue thumb */
    border-radius: 10px;
  }
  
  .about-container::-webkit-scrollbar-thumb:hover {
    background: #0277bd;
    /* Darker blue on hover */
  }
</style>
