

export default function () {

}

setTimeout(() => {
  import( /* webpackChunkName: "bar.lazy" */ './foo/bar/bar').then(module => {
    const bar = module.default

    bar()
  })
}, 2000)
