import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [{ path: '', component: () => import('pages/LogIn.vue') }],
  },
  {
    path: '/cadastro',
    component: () => import('layouts/PublicLayout.vue'),
    children: [{ path: '', component: () => import('pages/SignUp.vue') }],
  },
  {
    path: '/recuperar-senha',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ForgottenPassword.vue') },
    ],
  },
  {
    path: '/encontre-uma-obra',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FindPublicWorks.vue') },
    ],
  },
  {
    path: '/encontre-uma-obra-2',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FindPublicWorks2.vue') },
    ],
  },
  {
    path: '/encontre-uma-obra-3',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FindPublicWorks3.vue') },
    ],
  },
  {
    path: '/obra-exemplo',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PublicWorksDetails.vue') },
    ],
  },
  {
    path: '/nova-obra',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewPublicWorks.vue') },
    ],
  },
  {
    path: '/sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutUs.vue') }],
  },
  {
    path: '/configuracoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/UserSettings.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
