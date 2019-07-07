const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'war-worlds', component: () => import('pages/war-of-worlds') },
      { path: 'videodrome', component: () => import('pages/videodrome') },
      { path: 'to-come', component: () => import('pages/things-to-come') },
      { path: 'thing', component: () => import('pages/the-thing') },
      { path: 'star-wars', component: () => import('pages/star-wars') },
      { path: 'metropolis', component: () => import('pages/metropolis') },
      { path: 'fell-to-earth', component: () => import('pages/man-who-fell') },
      { path: 'mad-mel', component: () => import('pages/mad-max') },
      { path: 'lost-planet', component: () => import('pages/lost-planet-airmen') },
      { path: 'old-frankenstein', component: () => import('pages/frankenstein') },
      { path: 'flash', component: () => import('pages/flash-gordon') },
      { path: 'existenz', component: () => import('pages/existenz') },
      { path: 'earth-still', component: () => import('pages/earth-stood-still') },
      { path: 'fell-to-earth', component: () => import('pages/man-who-fell') },
      { path: 'alien', component: () => import('pages/alien') },
      { path: 'barbarella', component: () => import('pages/barbarella') },
      { path: 'duck-dodgers', component: () => import('pages/buck-rogers') },
      { path: 'blade-runner', component: () => import('pages/blade-runner') },
      { path: '2001', component: () => import('pages/2001') },
      { path: 'buckaroo-banzai', component: () => import('pages/buckaroo-banzai') },
      { path: 'naked-lunch', component: () => import('pages/naked-lunch') },
      { path: 'leagues', component: () => import('pages/leagues-undersea') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
