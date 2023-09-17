import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bea3fa4 = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _6b2e7220 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _32486bcf = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _631efb22 = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _f02cf156 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4ce1d3d4 = () => interopDefault(import('../pages/list/_id.vue' /* webpackChunkName: "pages/list/_id" */))

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
    component: _3bea3fa4,
    name: "list"
  }, {
    path: "/register",
    component: _6b2e7220,
    name: "register"
  }, {
    path: "/auth/login",
    component: _32486bcf,
    name: "auth-login"
  }, {
    path: "/auth/signup",
    component: _631efb22,
    name: "auth-signup"
  }, {
    path: "/",
    component: _f02cf156,
    name: "index"
  }, {
    path: "/list/:id",
    component: _4ce1d3d4,
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
