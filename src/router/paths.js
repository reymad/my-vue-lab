import Hello from '@/components/Hello'
import Jesus from '@/components/Jesus'
import Comp1 from '@/components/component1/Comp1'
import ApiTest from '@/components/Api'

export default [

    {
        path: '/',
        name: 'Hello',
        component: Hello
      },
      {
        path: '/jesus/:id?', // Para recoger este parametro p.ej: this.$route.params.id en algún componente
        name: 'Jesus',
        meta: { layout: 'backend'},
        component: Jesus
      },
      {
        path: '/component1',
        name: 'component1',
        component: Comp1
      },
      {
        path: '/apitest',
        name: 'apitest',
        component: ApiTest
      }

      /*
            {
            path: '*',
            meta: {
            public: true,
            },
            redirect: {
            path: '/404'
            }
        },  
        {
            path: '/404',
            meta: {
            public: true,
            },
            name: 'NotFound',
            component: () => import(
            // webpackChunkName: "routes" 
            `@/views/NotFound.vue`
            )
        },
        {
            path: '/403',
            meta: {
            public: true,
            },
            name: 'AccessDenied',
            component: () => import(
            // webpackChunkName: "routes" 
            `@/views/Deny.vue`
            )
        },
        {
            path: '/500',
            meta: {
            public: true,
            },
            name: 'ServerError',
            component: () => import(
            // webpackChunkName: "routes" 
            `@/views/Error.vue`
            )
        },
      */

]