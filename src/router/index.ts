import { createMemoryHistory, createRouter } from 'vue-router'

import Test from '../components/Test.vue'

const routes = [
  { path: '/test',
    name: 'test',
    component: Test 
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;