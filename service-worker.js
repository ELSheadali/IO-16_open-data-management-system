/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "42eb1644f7863ebc63d3a65ad2f19bc1"
  },
  {
    "url": "assets/css/0.styles.ef1aa35f.css",
    "revision": "5ef7c29d9cda26a077e5a63926790e38"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.b741f403.js",
    "revision": "018e6623401de0a4d9c1dd0c0b39eacf"
  },
  {
    "url": "assets/js/16.6a73ab67.js",
    "revision": "039a459ce7877806245e67226e4a6dcc"
  },
  {
    "url": "assets/js/17.611a35e0.js",
    "revision": "66740b68665ab238f7eb50576e46b66f"
  },
  {
    "url": "assets/js/18.c3d72cd6.js",
    "revision": "627a403243e5c82bd0d18ed8f6ebe007"
  },
  {
    "url": "assets/js/19.d9264299.js",
    "revision": "69183e74e1240e02d805b0978db4dfb8"
  },
  {
    "url": "assets/js/2.0228c63c.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.59e3aa51.js",
    "revision": "7d705adcc7b85b6fed89daf509e7c071"
  },
  {
    "url": "assets/js/21.716490d1.js",
    "revision": "1999091502df11c00884ddc0875dfa89"
  },
  {
    "url": "assets/js/22.013fd3ef.js",
    "revision": "d6957276f730f0a731c2077daf9882af"
  },
  {
    "url": "assets/js/23.e8c02261.js",
    "revision": "ce9c5f36a7913a9aff4ad8a95c44a97a"
  },
  {
    "url": "assets/js/24.af3559a2.js",
    "revision": "e468602895e44c0b528919e49a50c754"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.107b843f.js",
    "revision": "66486d0204dfd18705eac7ff43734afc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2973a06f5e2374aa47b8d831be6708ec"
  },
  {
    "url": "design/index.html",
    "revision": "da60a946dcc6e1c18db4eed07a78c6c3"
  },
  {
    "url": "index.html",
    "revision": "3e18dcd7796489097d0a4f5a8cf917a8"
  },
  {
    "url": "intro/index.html",
    "revision": "4920cf23982ca931ce17d8a1c6b3bb4b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "4190faeea93c1ab1f5f3e7f163162b00"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "36c339cb71407aba987760effe7cbeaa"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ddce82f17d5e8918b265d765571610d7"
  },
  {
    "url": "software/index.html",
    "revision": "f09b3da8dea0d3f23c07d69741d1c8d2"
  },
  {
    "url": "test/index.html",
    "revision": "c4f5971c781ca062cf73fef1cfed6d85"
  },
  {
    "url": "use cases/index.html",
    "revision": "c051dd39972160c8da3c4af663a39bc7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
