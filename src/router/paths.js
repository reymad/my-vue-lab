import Hello from '@/components/Hello'
import Jesus from '@/components/Jesus'
import Comp1 from '@/components/component1/Comp1'
import ApiTest from '@/components/Api'

export default [
  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404',
      
    }
  },  
  {
    path: '/404',
    meta: {
      public: true,
      layout: 'none'
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "routes" */
      '@/views/NotFound.vue'
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
      layout: 'none'
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "routes" */
      '@/views/Deny.vue'
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
      layout: 'none'
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "routes" */
      '@/views/Error.vue'
    )
  },
  {
      path: '/',
      name: 'Hello',
      meta: {
        public: true,
      },
      component: Hello
    },
    {
      path: '/jesus/:id?', // Para recoger este parametro p.ej: this.$route.params.id en algún componente
      name: 'jesus',
      meta: { 
        layout: 'backend', 
        public: false
      },
      component: Jesus
    },
    {
      path: '/component1',
      name: 'component1',
      meta: {
        public: true,
      },
      component: Comp1
    },
    {
      path: '/apitest',
      name: 'apitest',
      meta: { 
        layout: 'backend', 
        public: false
      },
      component: ApiTest
    }

]