import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _146ac726 = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _05229fba = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _1adb9d82 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _8ab45134 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/edit",
    component: _146ac726,
    name: "edit"
  }, {
    path: "/list",
    component: _05229fba,
    name: "list"
  }, {
    path: "/register",
    component: _1adb9d82,
    name: "register"
  }, {
    path: "/",
    component: _8ab45134,
    name: "index"
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
