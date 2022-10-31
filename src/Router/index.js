import { createRouter, createWebHashHistory } from "vue-router";

import AllItems from "@/Views/AllItems.vue";
import DescriptionsItems from "@/Views/DescriptionsItems.vue";
import Propos from "@/Views/Propos.vue";

const routes = [
  {
    path: "/",
    name: "AllItems",
    component: AllItems
  },
  {
    path: "/Propos",
    name: "Propos",
    component: Propos

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