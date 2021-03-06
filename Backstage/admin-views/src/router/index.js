import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const components = {
  login: () => import('../views/login/login'),
  home: () => import('../views/home/home'),
  index: () => import('../views/index/index'),
  users: () => import('../views/users/index'),
  userslist: () => import('../views/userslist/index'),
  usersadd: () => import('../views/usersadd/index'),
  userInfoEdit: () => import('../views/userInfoEdit/index'),
  upload: () => import('../views/upload/index'),
  userDetail: () => import('../views/userDetail/index'),
  books: () => import('../views/books/index'),
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: components.login
    },
    {
      path: '/home',
      name: 'home',
      component: components.home,
      redirect: '/home/index',
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'index',
          component: components.index
        },
        {
          path: 'users',
          meta: {
            title: '用户管理'
          },
          component: components.users
        },
        {
          path: 'userslist',
          meta: {
            title: '用户列表'
          },
          component: components.userslist
        },
        {
          path: 'usersadd',
          meta: {
            title: '用户添加'
          },
          component: components.usersadd
        },
        {
          path: 'userInfoEdit',
          meta: {
            title: '编辑信息'
          },
          component: components.userInfoEdit
        },
        {
          path: 'upload',
          meta: {
            title: '用户添加'
          },
          component: components.upload
        },
        {
          path: 'userDetail',
          meta: {
            title: '用户添加'
          },
          component: components.userDetail
        },
        {
          path: 'books',
          meta: {
            title: '图书管理'
          },
          component: components.books
        },
      ]
    },
  ]
})
