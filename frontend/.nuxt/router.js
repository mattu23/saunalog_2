import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ac7326a = () => interopDefault(import('../pages/editUser.vue' /* webpackChunkName: "pages/editUser" */))
const _aa295f54 = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _1d772118 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _09ae4812 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _7fb17c1a = () => interopDefault(import('../pages/auth/signUp.vue' /* webpackChunkName: "pages/auth/signUp" */))
const _4284c3a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2c9d703e = () => interopDefault(import('../pages/list/_id.vue' /* webpackChunkName: "pages/list/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editUser",
    component: _0ac7326a,
    name: "editUser"
  }, {
    path: "/list",
    component: _aa295f54,
    name: "list"
  }, {
    path: "/register",
    component: _1d772118,
    name: "register"
  }, {
    path: "/auth/login",
    component: _09ae4812,
    name: "auth-login"
  }, {
    path: "/auth/signUp",
    component: _7fb17c1a,
    name: "auth-signUp"
  }, {
    path: "/",
    component: _4284c3a6,
    name: "index"
  }, {
    path: "/list/:id",
    component: _2c9d703e,
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
