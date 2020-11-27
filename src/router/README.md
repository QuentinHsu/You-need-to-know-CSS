# Vue Router

## 嵌套路由

### 在使用嵌套路由时，父级路由必须定义个组件

起初是想直接不写父级路由的组件，而直接写其下的子路由组件（省事儿~

```js
{
  path: '/A',
  name: 'A',
  children: [{
      path: 'B',
      name: 'B',
      component: B
    },
    {
      path: 'C',
      name: 'C',
      component: C
    }
  ]
},
```

然后 Vue 报错！

> [Vue Router warn]: Component "default" in record with path "/A" is not a valid component. Received "undefined".

几番折腾后，发现必须给父级路由 `A` 定义一个 component，哪怕是一个 Vue 模板空文件也行。

```js
{
  path: '/A',
  name: 'A',
  component: A,
  children: [{
      path: 'B',
      name: 'B',
      component: B
    },
    {
      path: 'C',
      name: 'C',
      component: C
    }
  ]
},
```