'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bee03e3892c200abd53f74de058181a7",
"assets/AssetManifest.bin.json": "ddaa3588aff9b9df86985b4cd2572f76",
"assets/AssetManifest.json": "c5b7b5bbd35ff3d4364441279c348788",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/activitytype/activity_alphabet.png": "462bcfcdf768b5779891dee078bc9cb1",
"assets/assets/images/activitytype/activity_cards.png": "019cc54c26d0b5745992151f5145a142",
"assets/assets/images/activitytype/activity_carmode.png": "c146a39d0d3b3a77f4f22a98211712ff",
"assets/assets/images/activitytype/activity_conversation.png": "d1c428562a0f471ce7307b7163a29c59",
"assets/assets/images/activitytype/activity_flashcard.png": "b51c1fc055e9aee06272ce8cd47684ea",
"assets/assets/images/activitytype/activity_match.png": "71f20a291356681098d65510c7e4d0c0",
"assets/assets/images/activitytype/activity_quiz.png": "179c004d90452eaac2f20cb8f28c97a7",
"assets/assets/images/activitytype/activity_scenario.png": "bb97dce00ae68a166f396a586a57221e",
"assets/assets/images/activitytype/activity_tf.png": "7268a1d00ab5810b93fc6740638cfe81",
"assets/assets/images/activitytype/activity_typing.png": "5ca6ce8d357e2a3b5ae41165c4c41b36",
"assets/assets/images/activitytype/activity_voice.png": "a484254801ea49ba10cc58b0f3ba8e16",
"assets/assets/images/activitytype/activity_wheel.png": "318dd075e557ad4069659943f6648985",
"assets/assets/images/activitytype/cloud.png": "6e2f9e2a2548ea9d45c89ea58e6471ec",
"assets/assets/images/common/back.png": "2771c5da803e21dab2714492a0923bee",
"assets/assets/images/common/com_backl.png": "6e9b46b4aee380a6c585a74b2f656b20",
"assets/assets/images/common/com_back_look.png": "b421986d00ac29cc5f6702b900d088ed",
"assets/assets/images/common/com_change.png": "5da38df18318c43d680936afc75cb689",
"assets/assets/images/common/com_coming_soon.png": "94b533604e8fa869f131d0305cb8cefe",
"assets/assets/images/common/com_download.png": "a5e4219ed8ef2dac65b47bd480f735c0",
"assets/assets/images/common/com_fab_profile.png": "81486d0ebd85335f2762bc22eed5141a",
"assets/assets/images/common/com_info.png": "73fbf1da5e887cf12e31cdfac825923b",
"assets/assets/images/common/com_lang.png": "033de5a6bab4e00455e66177a5e6e94f",
"assets/assets/images/common/com_loading_splash.gif": "fdbd5bd071f2fff103d95716df2df709",
"assets/assets/images/common/com_lock.png": "cefce975c8fe5059a2e9d610c99a6044",
"assets/assets/images/common/com_microphone_use.png": "7ad167a3015749425811996186e2ebef",
"assets/assets/images/common/com_minus.png": "9b55ee42ccdcbbf44b45f6c99013b75e",
"assets/assets/images/common/com_music_off.png": "24265ab1668363267b532976245920f8",
"assets/assets/images/common/com_music_on.png": "6b6d078b4f284f0652bbb95831e82dcd",
"assets/assets/images/common/com_next_look.png": "2766562387b541a4e856053b277c687e",
"assets/assets/images/common/com_online.png": "81bc7943368bef68c20b1d1d4a3a96c9",
"assets/assets/images/common/com_plus.png": "4a1399feb9dced9612c043686ab4ebdd",
"assets/assets/images/common/com_popup.png": "861cf7085cbb4b7f7a98cffa053f56ae",
"assets/assets/images/common/com_sad_ghost_g.png": "7c4837d76c993627f171f5b112bb19ec",
"assets/assets/images/common/com_sad_ghost_v.png": "872316b7a2a02de44de0af4d1a8dce9d",
"assets/assets/images/common/com_settings.png": "7400bac3aedcf5f2c85769f49f5b9044",
"assets/assets/images/common/com_settings_fab.png": "acaf88b79405e8292b3b9a29d7ef2bf5",
"assets/assets/images/common/com_sound_off.png": "1e7b32d46f0e0f8da1633c5c6519504c",
"assets/assets/images/common/com_sound_on.png": "2254c007b61c0b4ccd76ed6b1505f2de",
"assets/assets/images/common/com_sound_play.png": "751b192b0abc2ddbaf97ba611d5b1d49",
"assets/assets/images/common/com_sound_violet.png": "d2f0677c6eed3df6f9b5db340977b9d9",
"assets/assets/images/common/com_target1.png": "1e476f3ecdcf8ac6da5180c4dd1340be",
"assets/assets/images/common/com_target2.png": "076c09edcd8b6440537b2eec5b10e17d",
"assets/assets/images/common/com_translator.png": "bda67bc6b4aeaaf2bcb80a99afce5fde",
"assets/assets/images/common/com_user.png": "9df79e5525992e5c08f0bc26572c8db1",
"assets/assets/images/common/com_vibro_off.png": "1a2048d3cf0801483e7701abf0c9a8bc",
"assets/assets/images/common/com_vibro_on.png": "2f5b26e85b35c5d1fd9e9d2301efdef9",
"assets/assets/images/common/com_volume.png": "9d16994555cf5dc2b595ca60e8c29902",
"assets/assets/images/common/com_wave_1.png": "32919ab196398be2b003908ae85d0e32",
"assets/assets/images/common/com_wave_2.png": "337a00bf765896a24869140467306783",
"assets/assets/images/common/nextlb.png": "96e01e9056064cf11969c6bc951479dd",
"assets/assets/images/common/nextlg.png": "7f2eb62608f85ee8150ef4bed3ff38a0",
"assets/assets/images/common/nextlv.png": "3e1c49b9bb1494284ddc0670fe6c0d1b",
"assets/assets/images/common/translate.png": "619afe3e90e0b5cf86842fcfdb14a1a8",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/lang/lang_china.png": "e9fe6c1c483312862c03986a54db9141",
"assets/assets/images/lang/lang_russia.png": "7db6896f821849a7d2b394f7bd8887f9",
"assets/assets/images/lang/lang_usa.png": "bff9fa1e3c746ba0b61821903c8f3b22",
"assets/assets/images/lang/lang_vietnam.png": "b9c08520676d35dad64e5adc6bc0eb38",
"assets/assets/images/level/all_dict.png": "1584093e7773cad21a85fe9c5be0e021",
"assets/assets/images/level/level_0.jpg": "17787006ad4a11daa0ba19b47804dcb0",
"assets/assets/images/level/level_done.png": "bb693c85cc86ef5895a619149cf0e120",
"assets/assets/images/level/level_maths.jpg": "356c8b93cf3dbb83dc30ede4969d4b22",
"assets/assets/images/level/level_pre.png": "50edafdfd023b87c71a09a50ebdb4851",
"assets/assets/images/logo/me_eng_1.svg": "1d27b979370af37fdfc35ff83ab04856",
"assets/assets/images/logo/me_logo.png": "27a8e12cfc0674df2048d9ac5800b225",
"assets/assets/images/logo/me_logo_xl.png": "f236f5f1e9b46611de4d2bef0c20bd12",
"assets/assets/images/logo/me_logo_xxl.png": "b4bc8998bafb550387d0d253f760003a",
"assets/assets/images/logo/me_logo_xxxl.png": "ff7ed660c48ee994b3a0676766ca2b87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3f13d89979eebddc3eeabb4052c33c89",
"assets/NOTICES": "081ce2e252dc781c1a350c44ea4dad62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "003b9124a9a1efa940698711d62ac1f7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3ec028ba5cc25d3af0dfa90df076decc",
"icons/Icon-192.png": "4343f2ca9bfd1323253cd27cdfc5d0e0",
"icons/Icon-512.png": "0d2ac7d3837e2f4d23290add4494ab69",
"icons/Icon-maskable-192.png": "4343f2ca9bfd1323253cd27cdfc5d0e0",
"icons/Icon-maskable-512.png": "0d2ac7d3837e2f4d23290add4494ab69",
"img/me_eng_1.svg": "1d27b979370af37fdfc35ff83ab04856",
"img/me_logo.png": "27a8e12cfc0674df2048d9ac5800b225",
"img/me_logo_xl.png": "f236f5f1e9b46611de4d2bef0c20bd12",
"img/me_logo_xxl.png": "b4bc8998bafb550387d0d253f760003a",
"img/me_logo_xxxl.png": "ff7ed660c48ee994b3a0676766ca2b87",
"index.html": "6006588f6b735d813f2b218716cd8759",
"/": "6006588f6b735d813f2b218716cd8759",
"main.dart.js": "b7955ee54c85dd51f37605e49b0c5196",
"manifest.json": "0be94ee7e3af1bbde846d46eb554dfe8",
"version.json": "3a75fae0450174dc6e6c4bf65cc21005"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
