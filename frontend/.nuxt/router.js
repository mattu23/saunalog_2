import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3cde4164 = () => interopDefault(import('../pages/editPassword.vue' /* webpackChunkName: "pages/editPassword" */))
const _eb680404 = () => interopDefault(import('../pages/editUser.vue' /* webpackChunkName: "pages/editUser" */))
const _5c6b86ea = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _c60826a8 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _a6addaea = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _038fcff4 = () => interopDefault(import('../pages/auth/signUp.vue' /* webpackChunkName: "pages/auth/signUp" */))
const _049ac9ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a7bb885c = () => interopDefault(import('../pages/list/_id.vue' /* webpackChunkName: "pages/list/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editPassword",
    component: _3cde4164,
    name: "editPassword"
  }, {
    path: "/editUser",
    component: _eb680404,
    name: "editUser"
  }, {
    path: "/list",
    component: _5c6b86ea,
    name: "list"
  }, {
    path: "/register",
    component: _c60826a8,
    name: "register"
  }, {
    path: "/auth/login",
    component: _a6addaea,
    name: "auth-login"
  }, {
    path: "/auth/signUp",
    component: _038fcff4,
    name: "auth-signUp"
  }, {
    path: "/",
    component: _049ac9ce,
    name: "index"
  }, {
    path: "/list/:id",
    component: _a7bb885c,
    name: "list-id"
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
