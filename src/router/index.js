import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Work from "@/pages/Work.vue";
import Contact from "@/pages/Contact.vue";
import GroceryShop from "@/component/project/GroceryShop.vue";
import NoteBook from "@/component/project/NoteBook.vue";
import OpenNFT from "@/component/project/OpenNft.vue";
import WeddingInvitation from "@/component/project/WeddingInvitation.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "About | Dylan Dao Portfolio" },
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
    meta: { title: "Work | Dylan Dao Portfolio" },
  },
  {
    path: "/work/grocery-shop",
    name: "GroceryShop",
    component: GroceryShop,
    meta: { title: "GroceryShop | Online Selling and Buying Groceries" },
  },
  {
    path: "/work/note-book",
    name: "NoteBook",
    component: NoteBook,
    meta: { title: "NoteBook | Storage all of datas" },
  },
  {
    path: "/work/open-nft",
    name: "OpenNFT",
    component: OpenNFT,
    meta: { title: "OpenNFT | Million of NFTs and Tokens" },
  },
  {
    path: "/work/wedding-invitation",
    name: "WeddingInvitation",
    component: WeddingInvitation,
    meta: { title: "WeddingInvitation | Save the Date" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { title: "Contact | Dylan Dao Portfolio" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta?.title);
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = "Dylan Dao Portfolio";
  }
  next();
});

export default router;
