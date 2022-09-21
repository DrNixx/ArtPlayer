"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[591],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],s={title:"Third party librarys",sidebar_position:7,slug:"/libraries"},i=void 0,u={unversionedId:"en/Libraries",id:"en/Libraries",title:"Third party librarys",description:"flv.js",source:"@site/docs/en/Libraries.mdx",sourceDirName:"en",slug:"/libraries",permalink:"/document/libraries",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Third party librarys",sidebar_position:7,slug:"/libraries"},sidebar:"en",previous:{title:"Common events",permalink:"/document/events"},next:{title:"Danmuku plugin",permalink:"/document/en/Plugins/danmuku"}},p={},c=[{value:"flv.js",id:"flvjs",level:2},{value:"hls.js",id:"hlsjs",level:2},{value:"dash.js",id:"dashjs",level:2},{value:"shaka-player",id:"shaka-player",level:2},{value:"webtorrent",id:"webtorrent",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"flvjs"},"flv.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Bilibili/flv.js"},"https://github.com/Bilibili/flv.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://unpkg.com/flv.js@1.6.2/dist/flv.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: '/assets/sample/video.flv',\n    customType: {\n        flv: function (video, url) {\n            if (flvjs.isSupported()) {\n                const flvPlayer = flvjs.createPlayer({\n                    type: 'flv',\n                    url: url,\n                });\n                flvPlayer.attachMediaElement(video);\n                flvPlayer.load();\n            } else {\n                art.notice.show = 'Does not support playback of flv';\n            }\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"hlsjs"},"hls.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/video-dev/hls.js"},"https://github.com/video-dev/hls.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdnjs.cloudflare.com/ajax/libs/hls.js/8.0.0-beta.3/hls.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',\n    customType: {\n        m3u8: function (video, url) {\n            if (Hls.isSupported()) {\n                const hls = new Hls();\n                hls.loadSource(url);\n                hls.attachMedia(video);\n            } else {\n                const canPlay = video.canPlayType('application/vnd.apple.mpegurl');\n                if (canPlay === 'probably' || canPlay === 'maybe') {\n                    video.src = url;\n                } else {\n                    art.notice.show = 'Does not support playback of m3u8';\n                }\n            }\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"dashjs"},"dash.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Dash-Industry-Forum/dash.js"},"https://github.com/Dash-Industry-Forum/dash.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdnjs.cloudflare.com/ajax/libs/dashjs/2.6.3/dash.all.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd',\n    customType: {\n        mpd: function (video, url) {\n            var player = dashjs.MediaPlayer().create();\n            player.initialize(video, url, true);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"shaka-player"},"shaka-player"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/shaka-player"},"https://github.com/google/shaka-player"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://unpkg.com/shaka-player@3.3.1/dist/shaka-player.compiled.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',\n    customType: {\n        mpd: function (video, url) {\n            shaka.polyfill.installAll();\n            var player = new shaka.Player(video);\n            player.load(url);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"webtorrent"},"webtorrent"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webtorrent/webtorrent"},"https://github.com/webtorrent/webtorrent"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://unpkg.com/webtorrent@1.8.1/index.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d&dn=sintel.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel-1024-surround.mp4',\n    type: 'torrent',\n    customType: {\n        torrent: function (video, url, art) {\n            var client = new WebTorrent();\n            art.loading.show = true;\n            client.add(url, function (torrent) {\n                var file = torrent.files[0];\n                file.renderTo(video, {\n                    autoplay: true,\n                });\n            });\n        },\n    },\n});\n\nart.on('ready', () => {\n    art.template.$video.controls = false;\n});\n")))}m.isMDXComponent=!0}}]);