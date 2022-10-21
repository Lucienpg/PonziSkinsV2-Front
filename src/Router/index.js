import { createRouter, createWebHashHistory } from "vue-router";

import AllItems from "@/Views/AllItems.vue";
import DescriptionsItems from "@/Views/DescriptionsItems.vue";
import Graphiques from "@/Views/Graphiques.vue";

const routes = [
  {
    path: "/",
    name: "AllItems",
    component: AllItems
  },
  {
    path: "/Graphiques",
    name: "Graphiques",
    component: Graphiques

  },
  {
    path: "/about",
    name: "DescriptionsItems",
    component: DescriptionsItems
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;