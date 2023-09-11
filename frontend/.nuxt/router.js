import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bc1b5eb = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _89e7f4f4 = () => interopDefault(import('../pages/main.vue' /* webpackChunkName: "pages/main" */))
const _6b2e7220 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _32486bcf = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _2c83e742 = () => interopDefault(import('../pages/auth/signUp.vue' /* webpackChunkName: "pages/auth/signUp" */))
const _056b5afd = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _0bc1b5eb,
    name: "list"
  }, {
    path: "/main",
    component: _89e7f4f4,
    name: "main"
  }, {
    path: "/register",
    component: _6b2e7220,
    name: "register"
  }, {
    path: "/auth/login",
    component: _32486bcf,
    name: "auth-login"
  }, {
    path: "/auth/signUp",
    component: _2c83e742,
    name: "auth-signUp"
  }, {
    path: "/:id?",
    component: _056b5afd,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
