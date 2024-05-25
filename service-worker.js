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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "5ee4eb0b6bad2fc9306505474ef45e3e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e789a666.css",
    "revision": "e02e557c87fcf97706c27f96f6e1924b"
  },
  {
    "url": "assets/img/create-role.cd7217e5.png",
    "revision": "cd7217e5a2903cd81530c2f8206d6796"
  },
  {
    "url": "assets/img/create-user.92265f87.png",
    "revision": "92265f87279073367afec32eb2e3e41b"
  },
  {
    "url": "assets/img/delete-role.53482e06.png",
    "revision": "53482e0687a40c435cabeeb7431b990a"
  },
  {
    "url": "assets/img/delete-user.0ec023ca.png",
    "revision": "0ec023ca6d864d461cbe06cf1c59a3b6"
  },
  {
    "url": "assets/img/get-role.ae8aa95b.png",
    "revision": "ae8aa95b45dda5b15098505d6c631962"
  },
  {
    "url": "assets/img/get-user.8696ef2b.png",
    "revision": "8696ef2b9143a5fb2732e0c83c922d49"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-role.1cb0f959.png",
    "revision": "1cb0f959a6c8f46ebc9008112cffc876"
  },
  {
    "url": "assets/img/update-user.307680a1.png",
    "revision": "307680a1637cfc00c0b2f0dac35b86f5"
  },
  {
    "url": "assets/js/1.3821db0e.js",
    "revision": "bc23430f3622d1ff64460a1a70aab2e6"
  },
  {
    "url": "assets/js/10.a5df9b2f.js",
    "revision": "5de79581f423b210f5d5a8e2f3ea0302"
  },
  {
    "url": "assets/js/13.5246634f.js",
    "revision": "39d7f3f192e2c0b6412d8513da36b03f"
  },
  {
    "url": "assets/js/14.62caeaf9.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.5671b8fc.js",
    "revision": "2e7250645916b920ea40883cdd8a40d1"
  },
  {
    "url": "assets/js/16.b1429eb5.js",
    "revision": "395b1305be3e354313c5967f083967c5"
  },
  {
    "url": "assets/js/17.ec9a3652.js",
    "revision": "8c4d40346c50712ec6350737b6635125"
  },
  {
    "url": "assets/js/18.a28aa46b.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9e3373bf.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.3f5594c1.js",
    "revision": "af0f3553e1464dddbc2882957973b055"
  },
  {
    "url": "assets/js/20.64ede6c1.js",
    "revision": "f6d1d532f03bfb2fc049cdc89ac88694"
  },
  {
    "url": "assets/js/21.fa5aae74.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.3a79e4e1.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.f4d44da0.js",
    "revision": "1b45c609c2c90f319375683d348beb6a"
  },
  {
    "url": "assets/js/25.09b15147.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.140674e5.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.98d12d8e.js",
    "revision": "51fdea0fecd715e5dc72d1ce4f5fddf9"
  },
  {
    "url": "assets/js/28.719d92d0.js",
    "revision": "29b328cca29c9f61cb86c58257807e0f"
  },
  {
    "url": "assets/js/29.cd473d78.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.657fbc73.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.3a7b1815.js",
    "revision": "08aa376e3dfd05db6369edd1b050303d"
  },
  {
    "url": "assets/js/31.718e2135.js",
    "revision": "3e488cc925016b4051609b169a4f93fb"
  },
  {
    "url": "assets/js/32.b3b1dd17.js",
    "revision": "32f888d30ba0991376652215465eb8c1"
  },
  {
    "url": "assets/js/33.8fc62a55.js",
    "revision": "1115862eb56d9b08ada91b98135e66d9"
  },
  {
    "url": "assets/js/34.7a12aac2.js",
    "revision": "e19ea43200fd8892518a1edae0f82d9d"
  },
  {
    "url": "assets/js/35.c2de6abe.js",
    "revision": "6e2b752c3b396e9b25984c5188e1d8e0"
  },
  {
    "url": "assets/js/36.d2099d70.js",
    "revision": "e7495ec079f7dbb047785676eafacec0"
  },
  {
    "url": "assets/js/37.acfc7dc8.js",
    "revision": "61de4d7c4d5ca603d4fc0fe01b02ec91"
  },
  {
    "url": "assets/js/38.0a299628.js",
    "revision": "d5688b62f72269663aea06e78750c7da"
  },
  {
    "url": "assets/js/39.0970820f.js",
    "revision": "e6dcb11362166875af7c315dff4ce9c6"
  },
  {
    "url": "assets/js/4.52a0ea67.js",
    "revision": "6d5e1b8ccac1695fdb1566e842fdf399"
  },
  {
    "url": "assets/js/41.7ff780a8.js",
    "revision": "f7861ac2cf1b4cf0eec9a376c5fcc171"
  },
  {
    "url": "assets/js/5.0982914e.js",
    "revision": "f013a056ec15455d7a26d92377c738bf"
  },
  {
    "url": "assets/js/6.c890551b.js",
    "revision": "99b64cb9cbb72c0123d748510b0e905c"
  },
  {
    "url": "assets/js/7.a6371a1e.js",
    "revision": "0be0afc01b6adc279ccd6a2bbcd94d18"
  },
  {
    "url": "assets/js/8.09b195b1.js",
    "revision": "56728f14f7679fca4ddd89df1ad91983"
  },
  {
    "url": "assets/js/9.4d8c35f9.js",
    "revision": "b853c0e0f53f74e735a9533e114d874f"
  },
  {
    "url": "assets/js/app.70d1bf13.js",
    "revision": "a59f2b9400bef84e5f7764870522a413"
  },
  {
    "url": "assets/js/vendors~docsearch.d9caf52d.js",
    "revision": "1015302ec2df79fb1c997feb521ec771"
  },
  {
    "url": "conclusion/index.html",
    "revision": "916038c5723f92af6eb0d42be846d88b"
  },
  {
    "url": "design/index.html",
    "revision": "28c6cbf88deaf572a75b0c88ebec3206"
  },
  {
    "url": "index.html",
    "revision": "93fa10e6ea216b9bbf12b9ad05f3601e"
  },
  {
    "url": "intro/index.html",
    "revision": "9a6b11bcb0a906241cba8ad6b88b731e"
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
    "revision": "c2a13b84bed7b507dd97a1a7f3ba4a49"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fa6908fc820c713d531e3ef8b9a9d277"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ac1cb69826b64a890f1de6f2ad00ebc8"
  },
  {
    "url": "software/index.html",
    "revision": "7c97012d58ff24c4f4d58201aea763ea"
  },
  {
    "url": "test/index.html",
    "revision": "1818785cb5b1503675e88fe8213691f6"
  },
  {
    "url": "use cases/index.html",
    "revision": "376ced05bff1f9b3412097df16f9d038"
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
