import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Work from '@/pages/Work.vue'
import Contact from '@/pages/Contact.vue'
import ClothesShop from '@/component/project/ClothesShop.vue'
import GroceryShop from '@/component/project/GroceryShop.vue'
import NoteBook from '@/component/project/NoteBook.vue'
import OpenNFT from '@/component/project/OpenNft.vue'
import WeddingInvitation from '@/component/project/WeddingInvitation.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {
    path: '/work',
    name: 'Work',
    component: Work,
    children: [
      {
        path: 'clothes-shop',
        name: 'ClothesShop',
        component: ClothesShop
      },
      {
        path: 'grocery-shop',
        name: 'GroceryShop',
        component: GroceryShop
      },
      {
        path: 'note-book',
        name: 'NoteBook',
        component: NoteBook
      },
      {
        path: 'opennft',
        name: 'OpenNFT',
        component: OpenNFT
      },
      {
        path: 'wedding-invitation',
        name: 'WeddingInvitation',
        component: WeddingInvitation
      },
    ]
  },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
