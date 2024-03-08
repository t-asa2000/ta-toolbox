(function(){"use strict";var t={8800:function(t,e,s){var i=s(7024),r=s(4108),a=s(7764);const o={class:"d-flex flex-row ga-3 my-2"};function n(t,e,s,i,n,l){const u=(0,r.E1)("v-text-field"),c=(0,r.E1)("v-btn"),h=(0,r.E1)("TACanvas"),d=(0,r.E1)("SNSPostWidget"),p=(0,r.E1)("TAPageBase");return(0,r.Wz)(),(0,r.Az)(p,{title:t.title,menu:t.menu,buttons:t.buttons},{default:(0,r.Ql)((()=>[(0,r.K2)(h,{title:t.title,icon:"mdi-account-multiple",caption:"分散SNSの投稿をブログやサイトに掲載",class:"mb-3"},{default:(0,r.Ql)((()=>[(0,r.K2)(u,{label:"投稿のURLを入力",modelValue:t.urlInput,"onUpdate:modelValue":e[0]||(e[0]=e=>t.urlInput=e),color:"primary",variant:"outlined",class:"pt-3",clearable:""},null,8,["modelValue"]),(0,r.QD)("div",o,[(0,r.K2)(c,{variant:"tonal","prepend-icon":"mdi-eye-arrow-right",color:"primary",onClick:e[1]||(e[1]=(0,a.Y7)((t=>l.preview()),["stop"]))},{default:(0,r.Ql)((()=>[(0,r.mY)("プレビューを表示")])),_:1})])])),_:1},8,["title"]),void 0!=t.uri?((0,r.Wz)(),(0,r.Az)(h,{title:"プレビュー",icon:"mdi-monitor",headerLevel:"2",class:"mb-3",key:t.uri},{default:(0,r.Ql)((()=>[(0,r.K2)(d,{class:"mx-n5",uri:t.uri},null,8,["uri"])])),_:1})):(0,r.g1)("",!0),(0,r.K2)(h,{title:"更新履歴",icon:"mdi-history",headerLevel:"2",class:"mb-3"})])),_:1},8,["title","menu","buttons"])}var l=s(7688),u=s(8564),c=s(9096);const h=["innerHTML"];function d(t,e,s,i,a,o){const n=(0,r.E1)("v-avatar"),l=(0,r.E1)("v-list-item-title"),u=(0,r.E1)("v-list-item-subtitle"),d=(0,r.E1)("v-list-item"),p=(0,r.E1)("v-card-actions"),m=(0,r.E1)("v-card-text"),f=(0,r.E1)("v-btn"),v=(0,r.E1)("v-card");return(0,r.Wz)(),(0,r.Az)(v,{class:"sns-post-widget pa-2 elevation-0"},{default:(0,r.Ql)((()=>[void 0!=t.postData?((0,r.Wz)(),(0,r.An)(r.ae,{key:0},[(0,r.K2)(p,null,{default:(0,r.Ql)((()=>[(0,r.K2)(d,{style:{overflow:"unset"},class:"w-100 py-2 rounded",href:t.postData.userUri,target:"_blank",rel:"noopener noreferrer"},{prepend:(0,r.Ql)((()=>[(0,r.K2)(n,{image:t.postData.userImg,size:"large",class:"mt-1"},null,8,["image"])])),default:(0,r.Ql)((()=>[(0,r.K2)(l,{style:{"white-space":"unset"},class:"font-weight-bold",innerHTML:t.postData.userDisplayName},null,8,["innerHTML"]),(0,r.K2)(u,{style:{"white-space":"unset","min-height":"1.2em","font-size":"0.7rem"}},{default:(0,r.Ql)((()=>[(0,r.mY)((0,c.WA)(t.postData.userName+"@"+t.postData.server),1)])),_:1}),(0,r.K2)(u,{style:{"white-space":"unset","min-height":"1.2em","font-size":"0.7rem"}},{default:(0,r.Ql)((()=>[(0,r.mY)((0,c.WA)(t.postData.date),1)])),_:1})])),_:1},8,["href"])])),_:1}),1==t.postData.text.length?((0,r.Wz)(),(0,r.Az)(m,{key:0,style:{"font-size":"1.2em","line-height":"1.2"},class:"py-2",innerHTML:t.postData.text[0]},null,8,["innerHTML"])):((0,r.Wz)(),(0,r.Az)(m,{key:1,style:{"font-size":"1.2em","line-height":"1.2"},class:"py-2"},{default:(0,r.Ql)((()=>[((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(t.postData.text,((t,e)=>((0,r.Wz)(),(0,r.An)("p",{key:e,innerHTML:t},null,8,h)))),128))])),_:1})),(0,r.K2)(p,{class:"pt-3"},{default:(0,r.Ql)((()=>[(0,r.K2)(f,{color:"primary",variant:"tonal",class:"ms-2 px-4","prepend-icon":"mdi-open-in-app",href:t.postData.uri,target:"_blank",rel:"noopener noreferrer"},{default:(0,r.Ql)((()=>[(0,r.mY)("元投稿を開く")])),_:1},8,["href"])])),_:1})],64)):((0,r.Wz)(),(0,r.Az)(m,{key:1,style:{"font-size":"1.2em","line-height":"1.2"},class:"py-2"},{default:(0,r.Ql)((()=>[(0,r.mY)((0,c.WA)(t.pleaseWait?"しばらくお待ちください。":"投稿を取得できません。"),1)])),_:1}))])),_:1})}const p="mastodon",m="misskey";class f{constructor(t){this.uri=t.split(/[\#\?]/)[0],this.server=void 0,this.postId=void 0,this.service=this.getServiceName()}getServiceName(){if(this.isHttps()){if(this.isMastodonPost())return p;if(this.isMisskeyPost())return m}}isHttps(){return this.uri.match(/^https:\/\/.+/)}isMastodonPost(){const t=this.uri.split("https://")[1].split("/").filter((t=>""!==t));return this.server=t[0],"users"==t[1]&&"statuses"==t[3]?(this.postId=t[4],!0):t[1].match(/^\@.+/)?(this.postId=t[2],!0):"web"==t[1]&&"statuses"==t[2]&&(this.postId=t[3],!0)}isMisskeyPost(){const t=this.uri.split("https://")[1].split("/").filter((t=>""!==t));return this.server=t[0],"notes"==t[1]&&(this.postId=t[2],!0)}}const v="mastodon",y="misskey";class g{constructor(t,e=!0){t instanceof f||(t=new f(t)),this.uri=t.uri,this.server=t.server,this.postId=t.postId,this.service=t.service,this.redirect=e,this.text=void 0,this.date=void 0,this.userName=void 0,this.userDisplayName=void 0,this.userUri=void 0,this.userImg=void 0}get postData(){return{uri:this.uri,server:this.server,postId:this.postId,text:this.text,date:this.date,userName:this.userName,userDisplayName:this.userDisplayName,userUri:this.userUri,userImg:this.userImg}}async fetchPost(){switch(this.service){case v:await this.fetchMastodonPost();break;case y:await this.fetchMisskeyPost();break}if(void 0==this.text)return;const t=this.redirect?new f(this.uri):void 0;return void 0!=t?.server&&this.server!=t.server?await new g(t,!1).fetchPost():this}async fetchMastodonPost(){const t="https://"+this.server+"/api/v1/statuses/"+this.postId,e=await fetch(t,{method:"GET"}),s=await e.json();console.log(s),this.text=[this.parseMastodonEmojis(s?.content,s?.emojis)],this.postId=s?.id??this.postId,this.uri=s?.uri??"https://"+this.server+"/web/statuses/"+this.postId,this.date=void 0!=s?.created_at?new Date(s.created_at).toLocaleString():void 0,this.userName=s?.account?.username,this.userDisplayName=this.parseMastodonEmojis(s?.account?.display_name,s?.account?.emojis),this.userImg=s?.account?.avatar_static,void 0!=this.userName&&(this.userUri="https://"+this.server+"/@"+this.userName)}createImg(t,e){const s=document.createElement("img");return s.alt=t,s.src=e,s.style.display="inline",s.style.verticalAlign="sub",s.style.maxHeight="1em",s.style.objectFit="contain",s}parseMastodonEmojis(t,e){if(void 0==t||void 0==e)return t;for(var s=0;s<e.length;s++){const i=this.createImg(":"+e[s].shortcode+":",e[s].static_url).outerHTML;t=t.split(":"+e[s].shortcode+":").join(i)}return t}async fetchMisskeyPost(){const t="https://"+this.server+"/api/notes/show",e={noteId:this.postId},s=await fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});var i=await s.json();if(void 0==i?.text&&void 0!=i?.renote?.text&&(i=i.renote),console.log(i),this.text=i?.text?.split("\n"),void 0!=this.text)for(var r=0;r<this.text.length;r++)this.text[r]=await this.parseMisskeyEmojis(this.text[r]);this.postId=i?.id??this.postId,this.uri=i?.uri??"https://"+this.server+"/notes/"+this.postId,this.date=void 0!=i?.createdAt?new Date(i.createdAt).toLocaleString():void 0,this.userName=i?.user?.username,this.userDisplayName=await this.parseMisskeyEmojis(i?.user?.name),this.userImg=i?.user?.avatarUrl,void 0!=this.userName&&(this.userUri="https://"+this.server+"/@"+this.userName)}async getMisskeyEmojiUrl(t){const e="https://"+this.server+"/api/emoji",s={name:t},i=await fetch(e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});var r=await i.json();return r?.url}async parseMisskeyEmojis(t){if(void 0==t)return;const e=t.match(/\:[0-9a-zA-Z\-\_]+\:/g)?.map((t=>t.replace(/\:/g,""))).filter(((t,e,s)=>s.indexOf(t)===e))??[];for(var s=0;s<e.length;s++){const i=await this.getMisskeyEmojiUrl(e[s]),r=this.createImg(":"+e[s]+":",i).outerHTML;t=t.split(":"+e[s]+":").join(r)}return t}}var b={name:"SNSPostWidget",props:{uri:{type:String,default:"",required:!1}},data:()=>({postData:void 0,pleaseWait:!0}),async mounted(){const t=await new g(this.uri).fetchPost();this.postData=t?.postData,this.pleaseWait=!1}},w=s(4100);const k=(0,w.c)(b,[["render",d]]);var I=k,x={name:"App",components:{TACanvas:l.c,TAPageBase:u.c,SNSPostWidget:I},data:()=>({title:"Mastodon/Misskey 投稿埋め込み ウィジェット",menu:["TA道具箱",{title:"ホーム",icon:"mdi-home",href:"../"},"ツール一覧",{title:"デ漢字",icon:"mdi-ideogram-cjk",href:"../dekanji/"},{title:"貨幣カウンター 汎用カウンター",icon:"mdi-counter"},{title:"URL一括修正ツール",icon:"mdi-xml"},{title:"Mastodon/Misskey 投稿埋め込み ウィジェット",icon:"mdi-account-multiple",active:!0},"ソースコード",{title:"GitHub リポジトリ",icon:"mdi-xml",href:"https://github.com/t-asa2000/ta-toolbox",newTab:!0},"開発者 (t-asa2000)",{title:"個人サイト",icon:"mdi-account-circle",href:"https://t-asa2000.net/",newTab:!0},{title:"GitHub",icon:"mdi-link-variant",href:"https://github.com/t-asa2000/",newTab:!0},{title:"Misskey",icon:"mdi-link-variant",href:"https://misskey.io/@asata",newTab:!0},{title:"Fedibird (Mastodon)",icon:"mdi-link-variant",href:"https://fedibird.com/@asata",newTab:!0}],urlInput:"",uri:void 0}),methods:{async preview(){if(this.urlInput){const t=await new g(this.urlInput,!1).fetchPost();this.uri=t?.uri??this.urlInput,this.urlInput=t?.uri??this.urlInput}}}};const M=(0,w.c)(x,[["render",n]]);var j=M;(0,i.c)(j)}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,r,a){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],a=t[c][2];for(var n=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(n=!1,a<o&&(o=a));if(n){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,r,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={582:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],n=i[1],l=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var c=l(s)}for(e&&e(i);u<o.length;u++)a=o[u],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(c)},i=self["webpackChunkta_toolbox"]=self["webpackChunkta_toolbox"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[999,640],(function(){return s(8800)}));i=s.O(i)})();
//# sourceMappingURL=mastodon-misskey.12a87fdc.js.map