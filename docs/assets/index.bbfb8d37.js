import {
  S as o,
  P as n,
  W as t,
  T as e,
  M as i,
  a,
  b as s,
  A as r,
  c as d,
  B as w,
  d as c,
  e as p,
  f as l
} from './vendor.37082f73.js'
const m = new o(),
  g = new n(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
  u = new t({ canvas: document.querySelector('#bg') })
u.setPixelRatio(window.devicePixelRatio),
  u.setSize(window.innerWidth, window.innerHeight),
  g.position.setZ(30),
  g.position.setX(-3),
  u.render(m, g)
const y = new e(10, 3, 16, 100),
  f = new i({ color: 16737095 }),
  x = new a(y, f)
m.add(x)
const z = new s(16777215)
z.position.set(5, 5, 5)
const b = new r(16777215)
m.add(z, b),
  Array(200)
    .fill()
    .forEach(function () {
      const o = new p(0.25, 24, 24),
        n = new i({ color: 16777215 }),
        t = new a(o, n),
        [e, s, r] = Array(3)
          .fill()
          .map(() => l.randFloatSpread(100))
      t.position.set(e, s, r), m.add(t)
    })
const h = new d().load('./assets/bg.jpg')
m.background = h
const j = new d().load('./assets/mo.png'),
  A = new a(new w(2.5, 2.5, 2.5), new c({ map: j }))
m.add(A)
const S = new d().load('./assets/moon.jpg'),
  v = new d().load('./assets/normal.jpg'),
  P = new a(new p(3, 32, 32), new i({ map: S, normalMap: v }))
function R() {
  const o = document.body.getBoundingClientRect().top
  ;(P.rotation.x += 0.05),
    (P.rotation.y += 0.075),
    (P.rotation.z += 0.05),
    (A.rotation.y += 0.01),
    (A.rotation.z += 0.01),
    (g.position.z = -0.01 * o),
    (g.position.x = -2e-4 * o),
    (g.rotation.y = -2e-4 * o)
}
m.add(P),
  (P.position.z = 30),
  P.position.setX(-10),
  (A.position.z = -5),
  (A.position.y = 0.3),
  (A.position.x = 2.5),
  (document.body.onscroll = R),
  R(),
  (function o() {
    requestAnimationFrame(o),
      (x.rotation.x += 0.01),
      (x.rotation.y += 0.005),
      (x.rotation.z += 0.01),
      (P.rotation.x += 0.005),
      u.render(m, g)
  })()
