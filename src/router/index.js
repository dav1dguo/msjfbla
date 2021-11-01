import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase"
import SignIn from "@/components/SignIn"
import MemberSignUp from "@/components/MemberSignUp"
import Admin from "@/components/Admin"
import Calendar from "@/components/Calendar"
import faq from "@/components/faq"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
    meta: {
      guest: true,
    },
  },
  {
    path: "/MemberSignUp",
    name: "MemberSignUp",
    component: MemberSignUp,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
    meta: {
      auth: true,
    }
  },
  {
    path: "/Calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/faq",
    name: "faq",
    component: faq,
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        next({
          path: "/SignIn",
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router
