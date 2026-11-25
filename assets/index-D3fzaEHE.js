const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./garden-3d-D2yEDBfV.js","./vendor-three-moeYV9s7.js","./recipes-yt-D6Rb2z0Q.js","./recipes-ig-Dk_S9Vt8.js"])))=>i.map(i=>d[i]);
import{D as Xe,S as De,P as F,a as X,E as D,b as Ze,A as et,c as vt,G as Me,y as $t}from"./garden-3d-D2yEDBfV.js";import{W as wt,l as xt,A as St,s as Tt,t as It,H as Pt,u as Ge,S as Ct,g as U,f as Lt,z as Et,h as Dt,d as Mt,G as At,a as Rt}from"./vendor-three-moeYV9s7.js";import"./recipes-yt-D6Rb2z0Q.js";import"./recipes-ig-Dk_S9Vt8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Bt="modulepreload",Ft=function(e,n){return new URL(e,n).href},He={},Ot=function(n,t,o){let s=Promise.resolve();if(t&&t.length>0){let u=function(g){return Promise.all(g.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const d=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=u(t.map(g=>{if(g=Ft(g,o),g in He)return;He[g]=!0;const m=g.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(!!o)for(let p=d.length-1;p>=0;p--){const f=d[p];if(f.href===g&&(!m||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${v}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":Bt,m||(l.as="script"),l.crossOrigin="",l.href=g,c&&l.setAttribute("nonce",c),document.head.appendChild(l),m)return new Promise((p,f)=>{l.addEventListener("load",p),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${g}`)))})}))}function r(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&r(d.reason);return n().catch(r)})},ge=["Produce","Proteins","Dairy & Eggs","Snacks & Bakery","Pantry & Grains","Drinks & Mixers","Frozen & Ready"],tt=[{name:"Seedless Grapes",aisle:"Produce",price:4.95},{name:"Mini Watermelon",aisle:"Produce",price:5.67},{name:"Butter Croissants",aisle:"Snacks & Bakery",price:4.97},{name:"Digestive Cookies",aisle:"Snacks & Bakery",price:3.47},{name:"Cheese Sticks / Cubes",aisle:"Dairy & Eggs",price:4.47},{name:"Crackers",aisle:"Snacks & Bakery",price:2.97},{name:"Frozen Kiwi",aisle:"Frozen & Ready",price:3.97},{name:"Coffee Pods",aisle:"Drinks & Mixers",price:14.97},{name:"Coke / Soda Cans",aisle:"Drinks & Mixers",price:6.97}];function Ae(e){const n=String(e).toLowerCase();return/hibiscus|jamaica|tea|juice|soda|coke|seltzer|sparkling|matcha|panela|sugar|honey|coffee/.test(n)?"Drinks & Mixers":/cookie|cracker|croissant|chip|dorito|snack/.test(n)?"Snacks & Bakery":/chicken|beef|steak|shrimp|salmon|tuna|sausage|charcuterie|prosciutto|ham/.test(n)?"Proteins":/egg|cheese|bocconcini|milk|butter|yogurt|cream/.test(n)?"Dairy & Eggs":/frozen|dumpling|gyoza|ice cream|kiwi/.test(n)?"Frozen & Ready":/tomato|onion|cucumber|salad|banana|plantain|strawberr|berr|mango|lime|lemon|avocado|garlic|pepper|mint|carrot|grape|watermelon/.test(n)?"Produce":"Pantry & Grains"}function Re(e,n){const t=String(e).toLowerCase();return/shrimp|salmon|beef|steak|rotisserie/.test(t)?8.97:/chicken|charcuterie/.test(t)?6.97:/cheese|bocconcini|yogurt/.test(t)?4.47:/egg|milk|butter/.test(t)?3.97:/dumpling|gyoza|frozen/.test(t)?4.97:/salad|strawberr|berr|avocado/.test(t)?3.47:/baguette|bread|rice cake/.test(t)?1.97:/hibiscus|matcha|soda|juice/.test(t)?3.49:n==="Proteins"?6.5:n==="Produce"?2.5:n==="Dairy & Eggs"?3.8:n==="Drinks & Mixers"?3.2:n==="Frozen & Ready"?4.5:2.75}function de(e){return String(e||"").trim().replace(/\s+/g," ").slice(0,50)}function Oe(e,n={}){const t={};for(const[o,s]of Object.entries(n||{}))!s||!s.name||(t[o]={id:o,name:s.name,aisle:s.aisle||Ae(s.name),price:Number(s.price)>0?Number(s.price):Re(s.name,s.aisle),inKitchen:!!s.inKitchen,everyday:!!s.everyday,usedBy:[]});for(const o of tt){const s=o.name.toLowerCase();t[s]?t[s].everyday=!0:t[s]={id:s,name:o.name,aisle:o.aisle,price:o.price,inKitchen:!1,everyday:!0,usedBy:[]}}for(const o of e)for(const s of o.ingredients||[]){const r=de(s);if(!r)continue;const u=r.toLowerCase();if(t[u])t[u].usedBy.includes(o.id)||t[u].usedBy.push(o.id);else{const d=Ae(r);t[u]={id:u,name:r,aisle:d,price:Re(r,d),inKitchen:!1,usedBy:[o.id]}}}return t}const Ke=[{id:"survival",label:"Survival Week",emoji:"😴",desc:"Zero & hands-off meals + grab-and-go drinks"},{id:"balanced",label:"Balanced Week",emoji:"⚖️",desc:"Batch anchor + quick meals + agua fresca pitcher"},{id:"cooking",label:"Cooking Mood",emoji:"🔥",desc:"Includes fun weekend dishes + fresh drinks"},{id:"custom",label:"Custom Pick",emoji:"🎯",desc:"Hand-picked recipes from your library"}];function ue(e,n,t,o=[]){let s=[];if(e==="custom"){const m=new Set(o);s=n.filter(v=>m.has(v.id)),s.length||(s=n.slice(0,4))}else if(e==="survival"){const m=n.filter(l=>l.kind==="meal"&&(l.effort==="nocook"||l.effort==="handsoff")).slice(0,5),v=n.filter(l=>l.kind==="drink"&&(l.effort==="nocook"||l.effort==="handsoff")).slice(0,2),i=n.filter(l=>l.kind==="snack"&&(l.effort==="nocook"||l.effort==="handsoff")).slice(0,2);s=[...m,...v,...i]}else if(e==="cooking"){const m=n.filter(p=>p.kind==="meal"&&p.effort==="project").slice(0,3),v=n.filter(p=>p.kind==="meal"&&p.effort==="quick").slice(0,3),i=n.filter(p=>p.kind==="drink"&&p.portions>=4).slice(0,2),l=n.filter(p=>p.kind==="snack").slice(0,2);s=[...m,...v,...i,...l]}else{const m=n.filter(p=>p.kind==="meal"&&p.portions>=4).slice(0,2),v=n.filter(p=>p.kind==="meal"&&(p.effort==="nocook"||p.effort==="quick")&&p.portions<4).slice(0,4),i=n.filter(p=>p.kind==="drink"&&p.portions>=4).slice(0,1),l=n.filter(p=>p.kind==="snack").slice(0,2);s=[...m,...v,...i,...l]}const r=new Map;let u=0;const d=new Set;for(const m of s)for(const v of m.ingredients||[]){const i=de(v).toLowerCase(),l=t[i];if(l){if(l.inKitchen){d.has(i)||(d.add(i),u+=1);continue}if(!r.has(i))r.set(i,{...l,tripRecipes:[m.title]});else{const p=r.get(i);p.tripRecipes.includes(m.title)||p.tripRecipes.push(m.title)}}}if(e!=="custom"){const m=e==="survival"?4:3;let v=0;for(const i of tt){if(v>=m)break;const l=i.name.toLowerCase(),p=t[l];!p||p.inKitchen||r.has(l)||(r.set(l,{...p,tripRecipes:["Everyday Fruit & Snacks"]}),v+=1)}}const a=Array.from(r.values()),c={};for(const m of ge)c[m]=[];for(const m of a){const v=ge.includes(m.aisle)?m.aisle:"Pantry & Grains";c[v].push(m)}const g=a.reduce((m,v)=>m+(Number(v.price)||0),0);return{selectedRecipes:s,items:a,byAisle:c,alreadyHaveCount:u,estimatedTotal:g}}const at="meal_cheat_v3",nt=new Set(["rotisserie chicken","bagged salad","flour tortillas","cherry tomatoes","eggs","rice","soy sauce","butter","garlic","onions","bananas","limes","dried beans","pasta","jarred salsa","chicken breast","shredded cheese","bread","milk","potatoes","instant noodles","canned tuna","ground beef","beef","pork","shrimp","tofu","sugar / panela","masa harina","avocados","mayo","carrots","chicken broth","bell peppers","plantains","cinnamon","condensed milk","strawberries","mango"]);function M(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function he(e=new Date){const n=new Date(e);n.setHours(0,0,0,0);const t=(n.getDay()+6)%7;return n.setDate(n.getDate()-t),M(n)}function st(e=new Date){return new Date(e.getFullYear(),e.getMonth(),1)}function ot(e=new Date){const n=new Date(e);n.setHours(0,0,0,0);const t=(n.getDay()+6)%7;return n.setDate(n.getDate()-t),n}function h(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ce(e,{allowDataImage:n=!1}={}){const t=String(e??"").trim();return t&&(/^https?:\/\//i.test(t)||n&&/^data:image\/(?:jpeg|jpg|png|webp|gif);base64,[A-Za-z0-9+/=\s]+$/i.test(t))?t:""}function x(e){return"$"+(Number(e)||0).toFixed(2).replace(/\.00$/,"")}function Ne(){const e=Oe(De,{});for(const o of Object.keys(e))nt.has(o)&&(e[o].inKitchen=!0);const n=new Date().getHours();return{activeTab:"eat",eatKind:"meal",eatSlot:n<11?"breakfast":n<16?"lunch":"dinner",energy:"zero",pickIndex:0,pantryVersion:2,eatFridgeOnly:!0,grocerySchedule:{shopDay:"Sunday",reminderTime:"10:00 AM",lockedWeek:"",listLocked:!1},takeoutPlan:{weeklyTakeouts:2,weeklyPlatters:1,maxPerServing:12},recipes:De,catalog:e,shopMood:"balanced",shopChecked:[],shopCustomItems:[],customRecipeIds:["r_rotisserie_wrap","r_ip_salsa_chicken","d_jamaica","s_guac_snack"],shopSubTab:"trip",recipesSubTab:"all",recipeSearch:"",recipeSourceFilter:"all",recipesLimit:60,exploreFilter:"all",exploreSearch:"",exploreLimit:48,activeProfile:"u_me",profiles:[{id:"u_me",name:"Guillermo",color:"green",textSize:"normal",simpleMode:!1,avoid:[]}],planDays:4,planSwaps:{},coachSkip:{},weekPlan:[{day:"Monday",type:"Batch Cook"},{day:"Tuesday",type:"Batch Leftovers"},{day:"Wednesday",type:"Quick Night"},{day:"Thursday",type:"Batch Leftovers"},{day:"Friday",type:"Pickup Night"},{day:"Saturday",type:"Flexible / Out"},{day:"Sunday",type:"Batch Cook"}],recipeKindFilter:"all",recipeEffortFilter:"all",recipeCanMakeOnly:!1,recipeMatchMyFridge:!1,catalogSearch:"",userProfile:{name:"Guillermo Areas",handle:"@areasmina",city:"London, ON",roots:"El Salvador & Canada",savedInstaFoodCount:546,youtubePlaylistCount:441},budget:{monthlyCap:340,weeklyGrocery:55,monthlyTreatPot:80},spends:[],dayLog:{},fridgeMeals:3,fridgeDrinks:4,perishables:[{id:"p_1",name:"Organic Bananas & Plantains",daysLeft:"Eat Days 1–4",eaten:!1},{id:"p_2",name:"Bagged Salad Kit",daysLeft:"Eat Days 1–3",eaten:!1},{id:"p_3",name:"Butter Croissants & Baguette",daysLeft:"Eat Days 1–3",eaten:!1},{id:"p_4",name:"Mini Bocconcini",daysLeft:"Eat Days 2–5",eaten:!1}],gardenShoots:4,gardenWater:0,gardenSay:"",gardenTab:"play",gardenSketch:!1,weeklyWins:[],schedule:{wake:"07:00",breakfast:"08:00",lunch:"12:30",dinner:"18:00",shift:"",groceryDay:"Sunday",groceryTime:"17:00"},simpleMode:!1,introStep:0,pandaRosterVersion:2,pandaStyle:"base",gardenLineup:!1,gardenView:"front",gardenTurntable:!1,pandaOutlines:!1,equippedAcc:{HeadSocket:"diner_cap",FaceSocket:null,NeckSocket:null,TorsoSocket:"red_apron",HandSocket_R:"rice_bowl"},placedProps:["lantern"],theme:"dark",takeout:Xe,cheerUntil:0,clapPoints:10,pandaBond:65,companionExpanded:!1,cookProgress:null,communityPosts:[{id:"cp_1",author:"Mateo R.",recipeTitle:"Rice Cooker Cheat Oyakodon",caption:"Came home exhausted after work, tossed everything in the rice cooker and Bao cheered me on!",image:"https://i.ytimg.com/vi/rxL3ISxqxrQ/hqdefault.jpg",claps:14,starsSum:24,starsCount:5,myClapped:!1,myRating:0,ts:Date.now()-36e5*3},{id:"cp_2",author:"Sofia L.",recipeTitle:"Agua de Jamaica Pitcher",caption:"Made a full pitcher for $2 total — way better than buying $4 sodas all week.",image:"https://i.ytimg.com/vi/AwudGelkZw0/hqdefault.jpg",claps:21,starsSum:39,starsCount:8,myClapped:!1,myRating:0,ts:Date.now()-36e5*7},{id:"cp_3",author:"Kenji T.",recipeTitle:"6-Minute Air Fryer Garlic Shrimp",caption:"6 minutes flat and saved $15 vs ordering takeout!",image:"https://i.ytimg.com/vi/ZCC6jyH5hm8/hqdefault.jpg",claps:19,starsSum:29,starsCount:6,myClapped:!1,myRating:0,ts:Date.now()-36e5*14}]}}function it(e,n=Ne()){if(!e||typeof e!="object")return n;const t={...n,...e};t.budget={...n.budget,...e.budget||{}},t.equippedAcc={...n.equippedAcc,...e.equippedAcc||{}},t.grocerySchedule={...n.grocerySchedule,...e.grocerySchedule||{}},t.takeoutPlan={...n.takeoutPlan,...e.takeoutPlan||{}},t.eatFridgeOnly=e.eatFridgeOnly!==void 0?!!e.eatFridgeOnly:!0;const s=(Array.isArray(e.recipes)?e.recipes:[]).filter(a=>a&&typeof a=="object"&&!a.builtIn);if(t.recipes=[...s,...De],t.catalog=Oe(t.recipes,e.catalog||n.catalog),e.pantryVersion!==2){for(const a of Object.keys(t.catalog))nt.has(a)&&(t.catalog[a].inKitchen=!0);t.pantryVersion=2}e.pandaRosterVersion!==2&&(t.equippedAcc={...n.equippedAcc},t.pandaRosterVersion=2);const r=Array.isArray(e.takeout)&&e.takeout.length?e.takeout:[],u=new Set(r.map(a=>a==null?void 0:a.id).filter(Boolean));t.takeout=[...Xe.filter(a=>!u.has(a.id)),...r.filter(a=>a&&typeof a=="object")],t.userProfile=n.userProfile,t.recipeSourceFilter=e.recipeSourceFilter||"all",t.recipesLimit=Number(e.recipesLimit)||60,t.spends=Array.isArray(e.spends)?e.spends.slice(-500):[],t.shopChecked=Array.isArray(e.shopChecked)?e.shopChecked:[],t.shopCustomItems=Array.isArray(e.shopCustomItems)?e.shopCustomItems:[],t.placedProps=Array.isArray(e.placedProps)?e.placedProps:["lantern"],t.weeklyWins=Array.isArray(e.weeklyWins)?e.weeklyWins:[],t.dayLog=e.dayLog&&typeof e.dayLog=="object"?e.dayLog:{},t.perishables=Array.isArray(e.perishables)?e.perishables:n.perishables,t.clapPoints=typeof e.clapPoints=="number"?e.clapPoints:n.clapPoints,t.pandaBond=typeof e.pandaBond=="number"?Math.min(100,Math.max(0,e.pandaBond)):n.pandaBond,t.gardenLineup=!!e.gardenLineup,t.gardenTurntable=!!e.gardenTurntable,t.pandaOutlines=!!e.pandaOutlines,t.gardenDrawerHidden=!!e.gardenDrawerHidden,t.schedule={...n.schedule,...e.schedule&&typeof e.schedule=="object"?e.schedule:{}},t.simpleMode=!!e.simpleMode,t.gardenWater=Math.min(4,Math.max(0,Number(e.gardenWater)||0)),t.gardenSay=typeof e.gardenSay=="string"?e.gardenSay.slice(0,160):"",t.gardenTab=["play","squad","outfits","props","goals"].includes(e.gardenTab)?e.gardenTab:"play",t.gardenView=["front","threeQuarter","right","left","back"].includes(e.gardenView)?e.gardenView:"front",["eat","recipes","shop","explore","garden"].includes(t.activeTab)||(t.activeTab="eat"),t.exploreFilter=e.exploreFilter||"all",t.exploreSearch=typeof e.exploreSearch=="string"?e.exploreSearch:"",t.exploreLimit=Number(e.exploreLimit)||48,t.profiles=Array.isArray(e.profiles)&&e.profiles.length?e.profiles.slice(0,8):n.profiles,t.profiles.some(a=>a.id===t.activeProfile)||(t.activeProfile=t.profiles[0].id),t.planDays=e.planDays===7?7:4,t.planSwaps=e.planSwaps&&typeof e.planSwaps=="object"?e.planSwaps:{},t.coachSkip=e.coachSkip&&typeof e.coachSkip=="object"?e.coachSkip:{},t.weekPlan=Array.isArray(e.weekPlan)&&e.weekPlan.length===7?e.weekPlan:n.weekPlan;const d=F.find(a=>a.id===t.pandaStyle)||F[0];return Y(d,t)||(t.pandaStyle="base",t.equippedAcc={...F[0].defaultAcc}),t}function Nt(e){const n=Object.keys(e.dayLog||{}).sort(),t={};for(const o of n.slice(-400))t[o]=e.dayLog[o];return{...e,recipes:(e.recipes||[]).filter(o=>o&&!o.builtIn),dayLog:t,spends:(e.spends||[]).slice(-500),communityPosts:void 0}}function jt(){const e=Ne();try{const n=localStorage.getItem(at);return n?it(JSON.parse(n),e):e}catch{return e}}let P=jt();const Be=new Set;function w(){return P}function k(e,n={}){const{persist:t=!0,notify:o=!0}=typeof n=="boolean"?{notify:n}:n||{},s=P.recipes,r=typeof e=="function"?e(P):{...P,...e};if(r.recipes!==s&&(r.catalog=Oe(r.recipes,r.catalog)),P=r,t)try{localStorage.setItem(at,JSON.stringify(Nt(P)))}catch{}return o&&Be.forEach(u=>u(P)),P}function qt(e){return Be.add(e),()=>Be.delete(e)}function _t(){const e=Ne();k(e)}function ve(e=P){const n=M();return e.dayLog[n]||{meals:{b:!1,l:!1,d:!1},drinks:0,snacks:0,cooked:[],takeoutCount:0}}function H(e){return!e||!e.meals?0:X.filter(n=>e.meals[n.key]).length}function rt(e=P){return Object.values(e.dayLog||{}).filter(n=>H(n)===3).length}function lt(e=P){let n=0;const t=new Date;for(H(e.dayLog[M(t)])<3&&t.setDate(t.getDate()-1);H(e.dayLog[M(t)])===3;)n+=1,t.setDate(t.getDate()-1);return n}function je(e=P){const n=st().getTime();return(e.spends||[]).filter(t=>(t.ts||0)>=n).reduce((t,o)=>t+(Number(o.amount)||0),0)}function dt(e=P){const n=ot().getTime();return(e.spends||[]).filter(t=>(t.ts||0)>=n&&t.category!=="treat").reduce((t,o)=>t+(Number(o.amount)||0),0)}function Z(e=P){var s;const n=st().getTime(),t=Number((s=e.budget)==null?void 0:s.monthlyTreatPot)||80,o=(e.spends||[]).filter(r=>(r.ts||0)>=n&&r.category==="treat").reduce((r,u)=>r+(Number(u.amount)||0),0);return{pot:t,used:o,left:t-o}}function zt(e=P){var r;const n=new Date,t=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),o=Math.max(1,t-n.getDate()+1),s=(Number((r=e.budget)==null?void 0:r.monthlyCap)||340)-je(e);return Math.max(0,s)/o}function $e(e=P){var d;const n=Number((d=e.budget)==null?void 0:d.weeklyGrocery)||55,t=dt(e),o=Math.min(140,Math.round(t/Math.max(1,n)*100)),s=he(),r=(e.weeklyWins||[]).includes(s),u=t<=n;return{target:n,spent:t,left:n-t,pct:o,wk:s,claimed:r,underBudget:u}}function Y(e,n=P){return e?e.unlockType==="starter"?!0:e.unlockType==="days"?rt(n)>=e.need:e.unlockType==="budget"?(n.weeklyWins||[]).length>=e.need:e.unlockType==="shoots"?(n.gardenShoots||0)>=e.need:!1:!1}function Wt(e){return Math.round((e.price*.3+4.99)*100)/100}function q(e,n=P.catalog){const t=[];let o=0;for(const s of e.ingredients||[]){const r=de(s).toLowerCase(),u=n[r];u&&u.inKitchen?o+=1:t.push(s)}return{ready:t.length===0,haveCount:o,totalCount:(e.ingredients||[]).length,missing:t}}const K=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function ct(e=P){const n=e.grocerySchedule||{},t=K.includes(n.shopDay)?n.shopDay:"Sunday",o=n.reminderTime||"10:00 AM",s=K.indexOf(t),r=new Date().getDay(),u=(s-r+7)%7,d=u===0?"Today is Grocery Day!":u===1?"Tomorrow":`In ${u} days`,a=n.lockedWeek===he()&&!!n.listLocked;return{shopDay:t,reminderTime:o,daysUntil:u,isToday:u===0,isTomorrow:u===1,listLocked:a,label:d}}function we(e=P){const n=e.takeoutPlan||{},t=Math.max(0,Number(n.weeklyTakeouts??2)),o=Math.max(0,Number(n.weeklyPlatters??1)),s=ot().getTime(),r=(e.spends||[]).filter(a=>(a.ts||0)>=s&&a.category==="treat");let u=0,d=0;for(const a of r)a.kind==="platter"||(Number(a.serves)||1)>1?u+=1:d+=1;return{usedTakeouts:d,plannedTakeouts:t,usedPlatters:u,plannedPlatters:o,takeoutsLeft:Math.max(0,t-d),plattersLeft:Math.max(0,o-u)}}function me(e,n=P){var i;const t=Math.max(1,Number(e==null?void 0:e.serves)||1),o=Number(e==null?void 0:e.price)||0,s=o/t,u=s/3.15,d=Math.max(4,Number((i=n.takeoutPlan)==null?void 0:i.maxPerServing)||12),a=Z(n),c=we(n),g=(e==null?void 0:e.kind)==="platter"||t>1,m=g?c.plattersLeft:c.takeoutsLeft,v=o<=a.left;return s<=6.5?{tier:"steal",badge:"Steal · Great Platter Value",tone:"ok",reason:`${x(s)}/meal (${t} meals) — nearly homemade cost!`,perServing:s,fitsPot:v,quotaLeft:m,isPlatter:g}:s<=d&&v?{tier:"good",badge:"Good Price · Worth It",tone:"ok",reason:`${x(s)}/serving fits your <=${x(d)} target & budget.`,perServing:s,fitsPot:v,quotaLeft:m,isPlatter:g}:s<=16.5&&v?{tier:"fair",badge:"Fair Treat · Pricey vs Fridge",tone:"warn",reason:`${x(s)}/serving (~${Math.round(u)}x homemade cost).`,perServing:s,fitsPot:v,quotaLeft:m,isPlatter:g}:{tier:"over",badge:v?"Overpriced per Serving":"Over Treat Pot",tone:"warn",reason:v?`${x(s)}/serving exceeds your ${x(d)} target — cook a fridge meal instead!`:`${x(o-Math.max(0,a.left))} over remaining treat pot.`,perServing:s,fitsPot:v,quotaLeft:m,isPlatter:g}}const Gt={Sunday:"SU",Monday:"MO",Tuesday:"TU",Wednesday:"WE",Thursday:"TH",Friday:"FR",Saturday:"SA"};function se(e,n){const t=/^(\d{1,2}):(\d{2})$/.exec(String(e||"").trim());if(t)return Number(t[1])*60+Number(t[2]);const o=/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(String(e||"").trim());if(!o)return n;let s=Number(o[1])%12;return o[3].toUpperCase()==="PM"&&(s+=12),s*60+Number(o[2])}function pe(e,n){const t=se(e,-1);if(t<0)return n;const o=String(Math.floor(t/60)%24).padStart(2,"0"),s=String(t%60).padStart(2,"0");return`${o}${s}00`}function Ht(){const e=new Date;return e.getHours()*60+e.getMinutes()}function qe(e=P){var m,v,i,l;const n=e.schedule||{},t=se(n.breakfast,480),o=se(n.lunch,750),s=se(n.dinner,1080),r=Ht(),u=ve(e),d=r<o?"breakfast":r<s?"lunch":"dinner";let a=null;r>=s&&!((m=u.meals)!=null&&m.d)?a={key:"d",id:"dinner",label:"dinner",time:n.dinner||"18:00"}:r>=o&&!((v=u.meals)!=null&&v.l)?a={key:"l",id:"lunch",label:"lunch",time:n.lunch||"12:30"}:r>=t&&!((i=u.meals)!=null&&i.b)&&(a={key:"b",id:"breakfast",label:"breakfast",time:n.breakfast||"08:00"});const c=K.includes(n.groceryDay)?n.groceryDay:((l=e.grocerySchedule)==null?void 0:l.shopDay)||"Sunday",g=K[new Date().getDay()]===c&&r>=se(n.groceryTime,1020);return{nowSlotId:d,dueMeal:a,groceryDue:g,groceryDay:c}}function Kt(e=P){const n=e.schedule||{},t=M().replace(/-/g,""),o=(r,u,d,a)=>["BEGIN:VEVENT",`UID:${r}@meal-cheat`,`DTSTAMP:${t}T000000`,`DTSTART:${t}T${u}`,"DURATION:PT10M",`RRULE:${d}`,`SUMMARY:${a}`,"BEGIN:VALARM","ACTION:DISPLAY",`DESCRIPTION:${a}`,"TRIGGER:-PT0M","END:VALARM","END:VEVENT"],s=Gt[n.groceryDay]||"SU";return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Meal Cheat//EN",...o("breakfast",pe(n.breakfast,"080000"),"FREQ=DAILY","Meal Cheat: breakfast"),...o("lunch",pe(n.lunch,"123000"),"FREQ=DAILY","Meal Cheat: lunch"),...o("dinner",pe(n.dinner,"180000"),"FREQ=DAILY","Meal Cheat: dinner"),...o("groceries",pe(n.groceryTime,"170000"),`FREQ=WEEKLY;BYDAY=${s}`,"Meal Cheat: grocery order"),"END:VCALENDAR"].join(`\r
`)}const Q={green:"#3ddc97",coral:"#ff7a59",blue:"#4c9aff",purple:"#b38cff",pink:"#ff6fae",gold:"#f5b62f"},pt={normal:{label:"Normal",zoom:""},large:{label:"Large",zoom:"1.12"},xl:{label:"Extra Large",zoom:"1.22"}},ut={pork:{label:"Pork",re:/\b(pork|sausage|bacon|ham|chorizo|carnitas|al pastor)\b/i},beef:{label:"Beef",re:/\b(beef|steak|bulgogi|carne asada|ground beef|birria)\b/i},shellfish:{label:"Shrimp",re:/\b(shrimp|prawn|camaron)\b/i},fish:{label:"Fish",re:/\b(tuna|salmon|tilapia|fish|cod|sardine)\b/i},eggs:{label:"Eggs",re:/\b(eggs?|huevo|oyakodon|omelet|frittata)\b/i},dairy:{label:"Dairy",re:/\b(cheese|butter|milk|cream|mozzarella|parmesan|queso|bocconcini|yogurt)\b/i},spicy:{label:"Spicy",re:/\b(sriracha|chili|jalapen|habanero|spicy|hot sauce|cayenne)\b/i},gluten:{label:"Gluten",re:/\b(bread|baguette|pasta|spaghetti|noodle|tortilla|flour|croissant|pizza|soy sauce|gyoza|dumpling)\b/i}};function xe(e=P){const n=e.profiles||[];return n.find(t=>t.id===e.activeProfile)||n[0]||{id:"u_me",name:"Me",color:"green",textSize:"normal",simpleMode:!1,avoid:[]}}function Se(e,n=P){const t=xe(n).avoid||[];if(!t.length)return!0;const o=`${e.title||""} ${(e.ingredients||[]).join(" ")} ${(e.tags||[]).join(" ")}`;return!t.some(s=>{var r;return(r=ut[s])==null?void 0:r.re.test(o)})}function mt(e=P){return!!(e.simpleMode||xe(e).simpleMode)}function Ut(e=P){const n=M(),t=d=>!!(e.coachSkip&&e.coachSkip[`${n}:${d}`]),o=(e.spends||[]).length>0,s=Z(e),r=$e(e),u=qe(e);return u.groceryDue&&!t("grocery")?{id:"grocery",text:`It's <b>${u.groceryDay}</b> grocery time — review your list so your fridge stays 100% stocked all week.`,action:"go-shop-plan",label:"Open Shop List"}:o&&!r.underBudget&&!t("tight")?{id:"tight",text:`Groceries are ${x(Math.abs(r.left))} over your weekly target — stick to <b>Fridge-Ready</b> meals for a few days.`,action:"toggle-eat-fridge-only",label:"Fridge-Ready Only"}:o&&s.left>=10&&!t("ahead")?{id:"ahead",text:`You're on track with ${x(s.left)} left in your treat pot — check <b>Best pick now</b> under Takeout if you're wiped out.`,action:"go-takeout",label:"See Takeout Picks"}:null}const Yt=["Batch Cook","Batch Leftovers","Quick Night","Pickup Night","Cheat Day","Free Night"];function bt(e=P){const n=e.planDays===7?7:4,t=(e.recipes||[]).filter(f=>Se(f,e)),o=f=>[...f].sort(($,S)=>Number(q(S,e.catalog).ready)-Number(q($,e.catalog).ready)||$.cost-S.cost),s=o(t.filter(f=>(f.slots||[]).includes("breakfast"))),r=o(t.filter(f=>(f.slots||[]).includes("lunch")||f.effort==="nocook")),u=o(t.filter(f=>["nocook","quick"].includes(f.effort)&&f.kind!=="drink"&&f.kind!=="snack")),d=o(t.filter(f=>["handsoff","project"].includes(f.effort)&&f.kind!=="drink")),a=o(t.filter(f=>f.kind==="snack"||f.kind==="drink")),c=e.planSwaps||{},g=Z(e),m=(f,$,S=0)=>{if(!f.length)return null;const C=Number(c[$])||0;return f[(S+C)%f.length]},v=[];let i=0,l=0,p=null;for(let f=0;f<n;f++){const $=new Date;$.setDate($.getDate()+f);const S=K[$.getDay()],C=(e.weekPlan||[]).find(V=>V.day===S),T=(C==null?void 0:C.type)||"Quick Night",L=M($),O=m(s,`${L}-b`,f),N=p&&f>0?p:m(r,`${L}-l`,f);let A=null,ee=null;(T==="Pickup Night"||T==="Cheat Day")&&(ee=(e.takeout||[]).find(V=>V.price<=g.left)||(e.takeout||[])[0]||null,ee&&(l+=Number(ee.price)||0)),ee||(T==="Batch Cook"?(A=m(d,`${L}-d`,f)||m(u,`${L}-d`,f),p=A):T==="Batch Leftovers"&&p?A=p:A=m(u,`${L}-d`,f));const kt=m(a,`${L}-s`,f),We=[{slot:"Breakfast",key:`${L}-b`,recipe:O},{slot:"Lunch",key:`${L}-l`,recipe:N},{slot:"Dinner",key:`${L}-d`,recipe:A,takeout:ee},{slot:"Snack",key:`${L}-s`,recipe:kt}];for(const V of We)V.recipe&&(i+=Number(V.recipe.cost)||0);v.push({date:$,dayName:S,type:T,meals:We})}return{days:v,groceriesEst:i,treatsEst:l}}function y(e,n=20,t=""){const o=n*2,s=t?`aria-label="${String(t).replace(/"/g,"&quot;")}" role="img"`:'aria-hidden="true"';return`<canvas class="ic3d" data-icon="${e}" width="${o}" height="${o}" style="width:${n}px;height:${n}px" ${s}></canvas>`}let te=null;function Vt(){const e=(n,t={})=>new Mt({color:n,roughness:t.rough??.68,metalness:t.metal??0,clearcoat:t.coat??.12,clearcoatRoughness:.35,emissive:t.emit??0,emissiveIntensity:t.estr??0});return{white:e(16052198),cream:e(16446428),charcoal:e(2040361),slate:e(4343892),mint:e(4054167,{emit:1070390,estr:.16}),emerald:e(1947752),leaf:e(2672480,{emit:872482,estr:.15}),gold:e(16760379,{metal:.35,emit:6701056,estr:.18}),warm:e(16752451),amber:e(15045434),honey:e(16241300),ice:e(13361644),powder:e(9023943),milkTea:e(14134910),coral:e(16739164),ruby:e(15080526,{emit:4523286,estr:.15}),pink:e(16742571),purple:e(12944895),sky:e(4827391),wood:e(11892034,{coat:.35,rough:.5}),silver:e(13489892,{metal:.65,rough:.22})}}function b(e,n,t=[0,0,0],o=[0,0,0],s=[1,1,1]){const r=new Rt(e,n);return r.position.set(...t),r.rotation.set(...o),r.scale.set(...s),r}function Qt(e){const n=new Map,t=new Ct(1,20,14),o=new U(1,1,1,20),s=new Lt(1,1,18),r=new Et(1,1,1),u=new Dt(1,.26,12,24),d=(a,c)=>{const g=new At;c(g);const m=Array.isArray(a)?a:[a];for(const v of m)n.set(v,g)};return d(["panda","pet"],a=>{a.add(b(t,e.white,[0,0,0],[0,0,0],[.78,.68,.68]));for(const c of[-1,1])a.add(b(t,e.charcoal,[.52*c,.52,-.04],[0,0,0],[.26,.26,.16])),a.add(b(s,e.white,[.8*c,-.1,0],[0,0,-c*Math.PI/2],[.14,.28,.14])),a.add(b(t,e.charcoal,[.28*c,.06,.56],[0,0,-.25*c],[.19,.23,.11])),a.add(b(t,e.white,[.26*c,.12,.66],[0,0,0],[.055,.055,.04])),a.add(b(t,e.pink,[.46*c,-.16,.52],[0,0,0],[.11,.07,.06]));a.add(b(t,e.charcoal,[0,-.1,.66],[0,0,0],[.11,.08,.07])),a.add(b(t,e.leaf,[-.26,-.26,.68],[.2,.3,.5],[.18,.07,.09]))}),d(["meal","rice_bowl","dinner"],a=>{const c=new U(.75,.42,.58,22);a.add(b(c,e.coral,[0,-.16,0])),a.add(b(o,e.cream,[0,0,0],[0,0,0],[.72,.12,.72])),a.add(b(t,e.white,[0,.14,0],[0,0,0],[.64,.38,.64])),a.add(b(o,e.wood,[.22,.42,.08],[.2,0,-.75],[.04,.95,.04])),a.add(b(o,e.wood,[.28,.36,-.05],[.1,0,-.82],[.04,.95,.04]))}),d(["drink","agua_fresca"],a=>{const c=new U(.54,.38,.96,22);a.add(b(c,e.ruby,[0,-.06,0])),a.add(b(u,e.white,[0,.42,0],[Math.PI/2,0,0],[.54,.54,.25])),a.add(b(o,e.leaf,[.46,.48,0],[Math.PI/2,.5,0],[.24,.09,.24])),a.add(b(o,e.mint,[.1,.48,.05],[0,0,-.24],[.06,.85,.06]))}),d(["snack","cookie"],a=>{a.add(b(o,e.warm,[0,0,0],[Math.PI/2-.25,0,0],[.74,.24,.74]));for(const[c,g,m]of[[-.26,.22,.14],[.24,.12,.16],[0,-.24,.18],[-.15,-.05,.2],[.26,-.22,.14]])a.add(b(t,e.charcoal,[c,g,m],[0,0,0],[.12,.12,.08]))}),d(["comfort","soup"],a=>{a.add(b(o,e.coral,[0,-.14,0],[0,0,0],[.68,.62,.68])),a.add(b(o,e.warm,[0,.16,0],[0,0,0],[.62,.08,.62]));for(const c of[-1,1])a.add(b(u,e.silver,[.74*c,.02,0],[Math.PI/2,0,0],[.18,.18,.2]));for(const[c,g,m]of[[-.18,.48,.16],[.16,.62,.14],[0,.78,.12]])a.add(b(t,e.white,[c,g,0],[0,0,0],[m,m,m]))}),d("breakfast",a=>{a.add(b(t,e.gold,[0,.12,-.12],[0,0,0],[.46,.46,.38]));for(let c=0;c<8;c++){const g=c/8*Math.PI*2;a.add(b(s,e.warm,[Math.cos(g)*.66,.12+Math.sin(g)*.66,-.12],[0,0,g-Math.PI/2],[.11,.24,.11]))}}),d("lunch",a=>{const c=new U(.68,.78,.42,3);a.add(b(c,e.white,[0,.05,0],[Math.PI/2,0,0])),a.add(b(r,e.charcoal,[0,-.34,0],[0,0,0],[.58,.36,.48]))}),d(["nocook","bolt"],a=>{a.add(b(s,e.gold,[.1,.26,0],[0,0,-.45],[.28,.76,.24])),a.add(b(s,e.warm,[-.1,-.26,0],[0,0,Math.PI-.45],[.28,.76,.24]))}),d(["handsoff","appliance"],a=>{a.add(b(o,e.silver,[0,-.1,0],[0,0,0],[.64,.68,.64])),a.add(b(t,e.white,[0,.24,0],[0,0,0],[.63,.26,.63])),a.add(b(r,e.charcoal,[0,-.1,.58],[0,0,0],[.4,.24,.14])),a.add(b(t,e.mint,[0,-.1,.66],[0,0,0],[.08,.08,.04]))}),d(["quick","pan"],a=>{a.add(b(o,e.charcoal,[-.12,-.05,0],[.45,0,0],[.66,.18,.66])),a.add(b(o,e.slate,[.64,-.05,.12],[.45,0,-Math.PI/2],[.1,.68,.1])),a.add(b(o,e.white,[-.12,.04,.05],[.45,0,0],[.42,.08,.42])),a.add(b(t,e.gold,[-.12,.12,.1],[0,0,0],[.18,.14,.18]))}),d(["project","chef_hat"],a=>{a.add(b(o,e.cream,[0,-.26,0],[0,0,0],[.54,.34,.54])),a.add(b(o,e.coral,[0,-.4,0],[0,0,0],[.56,.08,.56]));for(const[c,g,m,v]of[[0,.22,0,.52],[-.36,.12,0,.34],[.36,.12,0,.34],[0,.12,.32,.34]])a.add(b(t,e.white,[c,g,m],[0,0,0],[v,v*.85,v]))}),d("bamboo",a=>{for(const[c,g,m]of[[-.2,1.35,.14],[.18,1.05,.12]])a.add(b(o,e.mint,[c,-.1,0],[0,0,-.08*Math.sign(c)],[m,g,m])),a.add(b(o,e.emerald,[c,.15,0],[0,0,0],[m*1.25,.08,m*1.25]));a.add(b(t,e.leaf,[.32,.45,0],[0,0,-.6],[.24,.08,.08]))}),d(["sprout","leafy"],a=>{a.add(b(o,e.emerald,[0,-.18,0],[0,0,0],[.08,.72,.08])),a.add(b(t,e.mint,[-.28,.25,0],[0,0,.45],[.34,.13,.14])),a.add(b(t,e.leaf,[.28,.32,0],[0,0,-.45],[.3,.12,.13]))}),d("trophy",a=>{const c=new U(.56,.28,.68,20);a.add(b(c,e.gold,[0,.18,0])),a.add(b(o,e.gold,[0,-.24,0],[0,0,0],[.16,.36,.16])),a.add(b(o,e.wood,[0,-.48,0],[0,0,0],[.44,.18,.44]));for(const g of[-1,1])a.add(b(u,e.gold,[.56*g,.22,0],[0,0,0],[.22,.22,.22]))}),d("takeout",a=>{const c=new U(.56,.4,.78,4);a.add(b(c,e.white,[0,-.05,0],[0,Math.PI/4,0])),a.add(b(r,e.coral,[0,.02,.36],[0,0,0],[.42,.32,.08])),a.add(b(o,e.wood,[.22,.42,.05],[0,0,-.5],[.04,.75,.04]))}),d("pizza",a=>{a.add(b(s,e.gold,[0,-.04,0],[Math.PI+.35,0,0],[.68,1.15,.2])),a.add(b(o,e.warm,[0,.46,-.18],[0,0,Math.PI/2],[.14,.82,.14]));for(const[c,g]of[[-.14,.16],[.16,.06],[0,-.16]])a.add(b(o,e.coral,[c,g,.12],[Math.PI/2+.35,0,0],[.12,.06,.12]))}),d("platter",a=>{a.add(b(r,e.charcoal,[0,0,0],[.45,0,0],[1.28,.18,.92])),a.add(b(r,e.coral,[-.28,.08,-.12],[.45,0,0],[.48,.12,.34])),a.add(b(r,e.mint,[.28,.08,-.12],[.45,0,0],[.48,.12,.34])),a.add(b(r,e.gold,[0,.14,.22],[.45,0,0],[1.05,.12,.28]))}),d(["shop","cart"],a=>{a.add(b(r,e.mint,[0,-.12,0],[0,0,0],[.95,.78,.56])),a.add(b(u,e.white,[0,.32,0],[0,0,0],[.28,.28,.25]))}),d(["kitchen","fridge"],a=>{a.add(b(r,e.sky,[0,0,0],[0,0,0],[.82,1.24,.68])),a.add(b(r,e.charcoal,[0,.18,.36],[0,0,0],[.8,.04,.04])),a.add(b(r,e.white,[.26,.36,.38],[0,0,0],[.06,.24,.06])),a.add(b(r,e.white,[.26,-.18,.38],[0,0,0],[.06,.32,.06]))}),d(["catalog","book"],a=>{a.add(b(r,e.purple,[0,0,0],[.2,.3,0],[.86,1.08,.26])),a.add(b(r,e.cream,[.05,0,.02],[.2,.3,0],[.76,.96,.2])),a.add(b(r,e.gold,[0,.18,.16],[.2,.3,0],[.46,.2,.04]))}),d(["camera","club"],a=>{a.add(b(r,e.slate,[0,-.05,0],[0,0,0],[1.18,.78,.48])),a.add(b(r,e.silver,[-.26,.4,0],[0,0,0],[.36,.16,.32])),a.add(b(o,e.charcoal,[.06,-.05,.32],[Math.PI/2,0,0],[.3,.22,.3])),a.add(b(t,e.sky,[.06,-.05,.4],[0,0,0],[.22,.22,.12]))}),d(["heart","clap"],a=>{a.add(b(t,e.pink,[-.26,.16,0],[0,0,0],[.36,.36,.3])),a.add(b(t,e.pink,[.26,.16,0],[0,0,0],[.36,.36,.3])),a.add(b(s,e.pink,[0,-.2,0],[Math.PI,0,0],[.58,.78,.34]))}),d("star",a=>{for(let c=0;c<5;c++){const g=c/5*Math.PI*2;a.add(b(s,e.gold,[Math.sin(g)*.34,Math.cos(g)*.34,0],[0,0,-g],[.24,.56,.2]))}a.add(b(t,e.gold,[0,0,0],[0,0,0],[.32,.32,.22]))}),d("timer",a=>{a.add(b(o,e.warm,[0,-.06,0],[Math.PI/2,0,0],[.68,.26,.68])),a.add(b(o,e.cream,[0,-.06,.12],[Math.PI/2,0,0],[.54,.08,.54])),a.add(b(o,e.charcoal,[0,.68,0],[0,0,0],[.16,.18,.16])),a.add(b(r,e.coral,[.12,.04,.18],[0,0,-.6],[.06,.32,.04]))}),d("video",a=>{a.add(b(r,e.coral,[0,0,0],[0,0,0],[1.24,.86,.28])),a.add(b(s,e.white,[.04,0,.16],[0,0,-Math.PI/2],[.24,.38,.14]))}),d("gear",a=>{a.add(b(u,e.silver,[0,0,0],[0,0,0],[.46,.46,.45]));for(let c=0;c<8;c++){const g=c/8*Math.PI*2;a.add(b(r,e.silver,[Math.cos(g)*.66,Math.sin(g)*.66,0],[0,0,g],[.24,.2,.26]))}}),d("check",a=>{a.add(b(o,e.mint,[0,0,0],[Math.PI/2,0,0],[.68,.22,.68])),a.add(b(r,e.white,[-.16,-.06,.14],[0,0,.72],[.14,.36,.08])),a.add(b(r,e.white,[.12,.04,.14],[0,0,-.78],[.14,.62,.08]))}),d("lock",a=>{a.add(b(r,e.gold,[0,-.22,0],[0,0,0],[.78,.64,.38])),a.add(b(u,e.silver,[0,.22,0],[0,0,0],[.28,.28,.26]))}),d("moon",a=>a.add(b(t,e.purple,[0,0,0],[0,0,0],[.62,.62,.62]))),d("sun",a=>n.get("breakfast").clone()),d("bow",a=>{a.add(b(t,e.pink,[0,0,0],[0,0,0],[.22,.22,.22])),a.add(b(t,e.pink,[-.42,0,0],[0,0,.2],[.38,.28,.18])),a.add(b(t,e.pink,[.42,0,0],[0,0,-.2],[.38,.28,.18]))}),d("scarf",a=>{a.add(b(u,e.coral,[0,.14,0],[Math.PI/2,0,0],[.46,.46,.4])),a.add(b(r,e.coral,[.22,-.26,.34],[0,0,-.2],[.22,.56,.16]))}),d(["flower","sakura"],a=>{a.add(b(t,e.gold,[0,0,.14],[0,0,0],[.22,.22,.16]));for(let c=0;c<5;c++){const g=c/5*Math.PI*2;a.add(b(t,e.pink,[Math.cos(g)*.4,Math.sin(g)*.4,0],[0,0,g],[.28,.22,.14]))}}),d("apron",a=>{a.add(b(r,e.mint,[0,-.06,0],[0,0,0],[.76,.92,.18])),a.add(b(r,e.cream,[0,-.2,.1],[0,0,0],[.46,.28,.08]))}),d("sunglasses",a=>{for(const c of[-1,1])a.add(b(o,e.charcoal,[.38*c,0,0],[Math.PI/2,0,0],[.3,.14,.3])),a.add(b(u,e.gold,[.38*c,0,0],[0,0,0],[.3,.3,.2]));a.add(b(r,e.gold,[0,.06,0],[0,0,0],[.28,.06,.08]))}),d("crown",a=>{a.add(b(o,e.gold,[0,-.22,0],[0,0,0],[.64,.3,.64]));for(let c=0;c<5;c++){const g=c/5*Math.PI*2;a.add(b(s,e.gold,[Math.cos(g)*.48,.12,Math.sin(g)*.48],[0,0,0],[.16,.42,.16]))}a.add(b(t,e.ruby,[0,-.22,.64],[0,0,0],[.1,.1,.1]))}),d("lantern",a=>{a.add(b(o,e.slate,[0,-.4,0],[0,0,0],[.42,.22,.42])),a.add(b(r,e.gold,[0,.02,0],[0,0,0],[.48,.46,.48])),a.add(b(s,e.slate,[0,.42,0],[0,0,0],[.58,.34,.58]))}),d("picnic",a=>{a.add(b(r,e.coral,[0,-.18,0],[.3,.3,0],[.95,.14,.72])),a.add(b(r,e.wood,[0,.1,0],[.3,.3,0],[.52,.36,.38]))}),d("pond",a=>{a.add(b(o,e.sky,[0,-.1,0],[.35,0,0],[.76,.14,.76])),a.add(b(t,e.coral,[.14,.08,.12],[0,0,-.4],[.28,.12,.12])),a.add(b(o,e.emerald,[-.26,.06,-.12],[.35,0,0],[.22,.06,.22]))}),d("stand",a=>{a.add(b(r,e.wood,[0,-.26,0],[0,0,0],[.95,.42,.46])),a.add(b(r,e.mint,[0,.36,0],[.25,0,0],[1.05,.16,.54])),a.add(b(o,e.ruby,[-.26,.06,0],[0,0,0],[.13,.26,.13])),a.add(b(o,e.cream,[0,.06,0],[0,0,0],[.13,.26,.13])),a.add(b(o,e.leaf,[.26,.06,0],[0,0,0],[.13,.26,.13]))}),d(["wardrobe","custom"],a=>{a.add(b(r,e.sky,[0,-.05,0],[0,0,0],[.88,.92,.24])),a.add(b(r,e.sky,[-.52,.14,0],[0,0,.4],[.36,.34,.22])),a.add(b(r,e.sky,[.52,.14,0],[0,0,-.4],[.36,.34,.22]))}),d(["garden","note","export","import","edit","sparkles","wave","bag"],a=>{a.add(b(t,e.mint,[0,0,0],[0,0,0],[.52,.52,.52])),a.add(b(t,e.gold,[.42,.42,.22],[0,0,0],[.22,.22,.22]))}),d("panda_brioche",a=>{a.add(b(t,e.amber,[0,0,0],[0,0,0],[.78,.68,.68]));for(const c of[-1,1])a.add(b(t,e.amber,[.52*c,.52,-.04],[0,0,0],[.26,.26,.16])),a.add(b(t,e.charcoal,[.28*c,.04,.56],[0,0,-.25*c],[.19,.22,.11]));a.add(b(t,e.charcoal,[0,.42,.54],[0,0,0],[.16,.14,.08])),a.add(b(t,e.honey,[0,-.14,.6],[0,0,0],[.34,.22,.18])),a.add(b(t,e.pink,[0,-.28,.66],[0,0,0],[.13,.1,.08]))}),d("panda_boba",a=>{a.add(b(t,e.ice,[0,0,0],[0,0,0],[.78,.68,.68]));for(const c of[-1,1])a.add(b(t,e.slate,[.52*c,.52,-.04],[0,0,0],[.26,.26,.16])),a.add(b(t,e.slate,[.28*c,.04,.56],[0,0,-.25*c],[.19,.22,.11]));a.add(b(t,e.powder,[0,-.14,.6],[0,0,0],[.34,.22,.18])),a.add(b(t,e.sky,[-.08,-.32,.72],[0,0,0],[.12,.16,.12]))}),d("diner_cap",a=>{a.add(b(r,e.cream,[0,0,0],[.15,.2,0],[.95,.56,.68])),a.add(b(r,e.ruby,[0,.16,0],[.15,.2,0],[.98,.12,.72]))}),d("red_apron",a=>{a.add(b(r,e.ruby,[0,-.06,0],[0,0,0],[.76,.92,.18])),a.add(b(u,e.ruby,[0,.42,0],[0,0,0],[.3,.26,.12]))}),d("gingham_apron",a=>{a.add(b(r,e.white,[0,-.06,0],[0,0,0],[.76,.92,.16]));for(const c of[-.24,0,.24])for(const g of[-.22,.04,.28])a.add(b(r,e.ruby,[g-.04,c-.06,.1],[0,0,0],[.16,.16,.06]))}),d("croissant",a=>{a.add(b(u,e.amber,[0,-.08,0],[.25,0,.2],[.52,.42,.34])),a.add(b(t,e.gold,[0,-.02,.18],[0,0,0],[.34,.26,.24]))}),d("green_cap",a=>{a.add(b(t,e.emerald,[0,.08,-.08],[0,0,0],[.68,.52,.66])),a.add(b(o,e.leaf,[0,-.1,.48],[.18,0,0],[.54,.08,.38]))}),d("green_apron",a=>{a.add(b(r,e.emerald,[0,-.06,0],[0,0,0],[.76,.92,.18])),a.add(b(r,e.leaf,[0,-.22,.11],[0,0,0],[.44,.26,.06]))}),d("boba_cup",a=>{const c=new U(.48,.34,.88,20);a.add(b(c,e.milkTea,[0,-.1,0])),a.add(b(t,e.white,[0,.34,0],[0,0,0],[.48,.26,.48])),a.add(b(o,e.wood,[.06,.52,.04],[0,0,-.15],[.07,.82,.07]));for(const g of[-.16,0,.16])a.add(b(t,e.charcoal,[g,-.4,.22],[0,0,0],[.1,.1,.1]))}),d("panda_mochi",a=>{a.add(b(t,e.cream,[0,-.04,0],[0,0,0],[.78,.64,.68]));for(const c of[-1,1])a.add(b(t,e.emerald,[.5*c,.46,-.04],[0,0,0],[.25,.25,.15])),a.add(b(t,e.emerald,[.27*c,0,.56],[0,0,-.25*c],[.19,.21,.1])),a.add(b(r,e.charcoal,[.27*c,.02,.66],[0,0,0],[.18,.05,.05]));a.add(b(t,e.leaf,[0,.58,-.1],[0,0,.3],[.22,.32,.14])),a.add(b(t,e.gold,[.56,.52,.28],[0,0,0],[.16,.16,.16]))}),n}function Jt(){if(te)return te;let e;try{e=new wt({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return null}const n=96;e.setSize(n,n,!1),e.setPixelRatio(1),e.outputColorSpace=xt,e.toneMapping=St,e.toneMappingExposure=1.12;const t=new Tt,o=new It(32,1,.1,20);o.position.set(.25,.65,3.35),o.lookAt(0,0,0),t.add(new Pt(16775149,2503236,1.35));const s=new Ge(16774112,2.2);s.position.set(-2.2,3.4,3.2),t.add(s);const r=new Ge(9103103,1.1);r.position.set(2.5,2,-2.5),t.add(r);const u=Vt(),d=Qt(u),a=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let c=null,g=0,m=0;function v(l){if(g=requestAnimationFrame(v),l-m<40)return;m=l;const p=document.querySelectorAll("canvas.ic3d[data-icon]");if(!p.length)return;const f=window.innerHeight||900,$=window.innerWidth||1200,S=new Map;for(const T of p){const L=T.getBoundingClientRect();if(L.width===0||L.height===0||L.bottom<-120||L.top>f+120||L.right<-60||L.left>$+60)continue;const O=T.dataset.icon||"meal";S.has(O)||S.set(O,[]),S.get(O).push(T)}if(!S.size)return;const C=a?0:l*.001;for(const[T,L]of S.entries()){const O=d.get(T)||d.get("meal");c&&t.remove(c),c=O,c.rotation.y=Math.sin(C*1.55)*.36,c.rotation.x=.14+Math.cos(C*1.2)*.06,c.position.y=Math.sin(C*2.1)*.04,t.add(c),e.render(t,o);for(const N of L){const A=N.getContext("2d");A&&(A.clearRect(0,0,N.width,N.height),A.drawImage(e.domElement,0,0,N.width,N.height))}}}g=requestAnimationFrame(v);const i=new MutationObserver(()=>{m=0});return i.observe(document.body,{childList:!0,subtree:!0}),te={dispose(){cancelAnimationFrame(g),i.disconnect(),e.dispose(),te=null}},te}function Te(e,{hero:n=!1,extraPill:t=""}={}){const o=D[e.effort]||D.quick,s=n?"hero-photo-wrap":"recipe-photo-wrap",r=ce(e.image,{allowDataImage:!0}),u=!!r;return`
    <div class="${s}${u?"":" img-broken"}">
      ${u?`<img src="${h(r)}" alt="${h(e.title)}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('img-broken')">`:""}
      <span class="photo-fallback-em" aria-hidden="true">${y(e.kind||"meal",44)}</span>
      <div class="photo-overlay">
        <span class="photo-pill">${y(o.id,14)} ${h(o.short)} · ${h(e.time)}</span>
        ${t?`<span class="photo-pill">${t}</span>`:""}
      </div>
    </div>
  `}function gt(e,n=64,t=8,o="var(--accent)"){const s=(n-t)/2,r=2*Math.PI*s,u=Math.max(0,Math.min(100,e));return`
    <svg width="${n}" height="${n}" viewBox="0 0 ${n} ${n}" aria-hidden="true">
      <circle cx="${n/2}" cy="${n/2}" r="${s}" fill="none" stroke="var(--surface-2)" stroke-width="${t}"/>
      <circle cx="${n/2}" cy="${n/2}" r="${s}" fill="none" stroke="${o}" stroke-width="${t}"
        stroke-linecap="round" stroke-dasharray="${r.toFixed(1)}" stroke-dashoffset="${((1-u/100)*r).toFixed(1)}"/>
    </svg>
  `}function Xt(e){const n=Ze[e.energy]||"nocook",t=e.eatFridgeOnly!==!1,o=e.recipes.filter(a=>Se(a,e)),s=e.eatKind==="comfort"?o.filter(a=>a.kind==="comfort"||(a.tags||[]).includes("comfort")):o.filter(a=>a.kind===e.eatKind),r=a=>a.map(c=>({r:c,match:q(c,e.catalog)})),u=a=>[...a].sort((c,g)=>Number(g.match.ready)-Number(c.match.ready)||c.match.missing.length-g.match.missing.length||c.r.cost-g.r.cost);if(t){let a=e.eatKind==="meal"?r(s.filter(c=>c.slots.includes(e.eatSlot)&&c.effort===n)).filter(c=>c.match.ready):r(s.filter(c=>c.effort===n)).filter(c=>c.match.ready);return a.length||(a=r(s.filter(c=>c.effort===n)).filter(c=>c.match.ready)),a.length||(a=r(s).filter(c=>c.match.ready)),u(a)}let d=s;if(e.eatKind==="meal"){const a=d.filter(c=>c.slots.includes(e.eatSlot)&&c.effort===n);if(a.length)d=a;else{const c=d.filter(g=>g.effort===n);c.length&&(d=c)}}else{const a=d.filter(c=>c.effort===n);a.length&&(d=a)}return u(r(d))}function Zt(e){const n=Xt(e),t=n.length?(e.pickIndex%n.length+n.length)%n.length:0,o=n.length?n[t]:null,s=o==null?void 0:o.r,r=(o==null?void 0:o.match)||{ready:!1,missing:[]},u=ve(e),d=H(u),a=Z(e);ct(e),we(e);const c=qe(e),g=mt(e),m=Ut(e),v=D[Ze[e.energy]||"nocook"]||D.nocook,i=n.map((p,f)=>({p,i:f})).filter(p=>p.i!==t).slice(0,4),l=[D.nocook,D.handsoff,D.quick,D.project];return`
    <section class="screen" aria-labelledby="eatHeading">
      ${m?`
        <article class="card highlight" style="padding:10px 14px" aria-live="polite">
          <p style="margin:0;font-size:var(--fs-sm)">${m.text}</p>
          <div class="row" style="gap:6px">
            <button type="button" class="btn small primary" data-action="${h(m.action)}">${h(m.label)}</button>
            <button type="button" class="btn small" data-action="coach-skip" data-tip="${h(m.id)}">Not now</button>
          </div>
        </article>
      `:""}

      ${c.dueMeal||c.groceryDue?`
        <div class="row" style="gap:6px;flex-wrap:wrap">
          ${c.dueMeal?`
            <span class="tag ok">${y("timer",13)} Time for ${h(c.dueMeal.label)} (${h(c.dueMeal.time)})</span>
          `:""}
          ${c.groceryDue?`
            <button type="button" class="tag warn" style="border:0;cursor:pointer" data-action="go-shop-plan">${y("cart",13)} ${h(c.groceryDay)}: grocery day →</button>
          `:""}
        </div>
      `:""}

      <div class="segmented" role="group" aria-label="What are you looking for?">
        <button type="button" data-action="eat-kind" data-kind="meal" aria-pressed="${e.eatKind==="meal"}">${y("meal",16)} Meal</button>
        <button type="button" data-action="eat-kind" data-kind="drink" aria-pressed="${e.eatKind==="drink"}">${y("drink",16)} Drink</button>
        <button type="button" data-action="eat-kind" data-kind="snack" aria-pressed="${e.eatKind==="snack"}">${y("snack",16)} Snack</button>
        <button type="button" data-action="eat-kind" data-kind="comfort" aria-pressed="${e.eatKind==="comfort"}">${y("comfort",16)} Comfort</button>
      </div>

      <article class="card">
        <div class="today-top">
          <div>
            <h2 style="margin:0">Today's Meals</h2>
            <p class="sub" style="margin:4px 0 0">${g?"Pick a meal to filter recipes, or mark it eaten (+1 bamboo shoot)":`Pick a meal or mark it eaten · ${x(zt(e))} daily pace · ${x(Math.max(0,a.left))} treat left`}</p>
          </div>
          <div class="meal-ring" aria-label="${d} of 3 meals today">
            ${gt(d/3*100,64,8)}
            <span>${d}/3</span>
          </div>
        </div>

        <div class="slots-grid" role="group" aria-label="Tap a meal when you eat it">
          ${X.map(p=>{var $;const f=!!(($=u.meals)!=null&&$[p.key]);return`
              <button type="button" class="slot-btn" data-action="toggle-slot" data-slot="${p.id}" data-slot-key="${p.key}" aria-pressed="${f}">
                <span class="sl-em">${y(p.id,22)}</span>
                <span>${p.label}${c.nowSlotId===p.id?" · now":""}</span>
              </button>
            `}).join("")}
        </div>

        <div class="row-between" style="border-top:1px solid var(--line);padding-top:10px">
          <span class="sub">${y("fridge",16)} Prepped in Fridge: <b>${e.fridgeMeals}</b> meals · <b>${e.fridgeDrinks}</b> drinks</span>
          <button type="button" class="btn small" data-action="go-takeout">${y("takeout",16)} Order Takeout?</button>
        </div>
        ${g?"":`
          <div style="display:grid;gap:6px;padding-top:2px">
            <span class="sub" style="font-size:var(--fs-xs)">Quick-log what you spent today (updates your budget):</span>
            <div class="chips">
              <button type="button" class="chip" data-action="quick-spend" data-amt="5" data-cat="treat" data-label="$5 Pizza Pickup">Spent $5 Pizza</button>
              <button type="button" class="chip" data-action="quick-spend" data-amt="10" data-cat="treat" data-label="$10 Pizza Pickup">Spent $10 Pizza</button>
              <button type="button" class="chip" data-action="quick-spend" data-amt="48" data-cat="grocery" data-label="Weekly Grocery Order">Spent $48 Groceries</button>
            </div>
          </div>
        `}
      </article>

      <div>
        <h1 id="eatHeading" style="font-size:clamp(18px,3vw,22px);margin:0 0 10px">How's your energy right now?</h1>
        <div class="energy-grid" role="group" aria-label="Energy level">
          ${l.map(p=>`
            <button type="button" class="energy-btn" data-action="set-energy" data-energy="${p.energy}" aria-pressed="${e.energy===p.energy}">
              <span class="em" aria-hidden="true">${y(p.id,26)}</span>
              <strong>${p.energyTitle}</strong>
              <small>${p.energyHint}</small>
            </button>
          `).join("")}
        </div>
      </div>

      ${s?`
        <article class="card highlight" aria-live="polite">
          ${Te(s,{hero:!0,extraPill:`${x(s.cost)} / serving`})}
          <div class="row-between">
            <div>
              <span class="tag ok" style="margin-bottom:4px">
                ${y("fridge",13)} ${e.eatFridgeOnly!==!1?`In Your Fridge Now · Idea ${t+1} of ${n.length} for ${h(v.energyTitle)}`:`${s.kind} · Idea ${t+1} of ${n.length}`}
              </span>
              <h2>${h(s.title)}</h2>
            </div>
          </div>
          <div class="row">
            ${r.ready?`<span class="tag ok">${y("check",14)} You have all ${r.totalCount} ingredients</span>`:`<span class="tag warn">Need: ${h(r.missing.join(", "))}</span>`}
            ${s.portions>1?`<span class="tag">Makes ${s.portions} ${s.kind==="drink"?"glasses":"portions"}</span>`:""}
            ${s.source==="instagram"?`<span class="tag">${y("camera",12)} ${h(s.author||"IG Reel")}</span>`:""}
          </div>
          <button type="button" class="btn primary block" data-action="open-cook" data-id="${h(s.id)}">Show me how</button>
          ${n.length>1?`
            <div class="row" style="gap:6px">
              <button type="button" class="btn small" data-action="prev-pick">← Prev</button>
              <button type="button" class="btn small" style="flex:1" data-action="next-pick">
                Another ${h(v.energyTitle)} Recipe (${t+1}/${n.length}) ↻
              </button>
              <button type="button" class="btn small" data-action="shuffle-pick">Shuffle</button>
            </div>
          `:""}
          ${i.length?`
            <div style="border-top:1px solid var(--line);padding-top:8px">
              <p class="sub" style="margin:0 0 6px;font-size:12px">More Fridge-Ready Ideas in This Mood:</p>
              <div class="chips">
                ${i.map(({p,i:f})=>`
                  <button type="button" class="chip" data-action="select-pick" data-idx="${f}">
                    ${y(p.r.kind||"meal",13)} ${h(p.r.title.slice(0,32))}${p.r.title.length>32?"...":""}
                  </button>
                `).join("")}
              </div>
            </div>
          `:""}
        </article>
      `:`
        <article class="card">
          <h2>No 100% Fridge-Ready ${h(e.eatKind)} recipes here yet</h2>
          <p class="sub">You turned on <b>Fridge-Ready Only</b> so you don't have to shop. Stock ingredients in <b>Shop → My Kitchen</b> or set your weekly grocery trip.</p>
          <div class="row">
            <button type="button" class="btn primary small" data-action="go-shop-plan">Open Kitchen &amp; Trip List</button>
            <button type="button" class="btn small" data-action="toggle-eat-fridge-only">Show Closest Recipes</button>
          </div>
        </article>
      `}



      <article class="card">
        <div class="row-between">
          <div>
            <h2>${y("sprout",20)} Eat First (Perishables)</h2>
            <p class="sub">Clear these early in the week so nothing rots.</p>
          </div>
        </div>
        <form data-form="add-perishable" class="row">
          <input class="input" style="flex:1" name="name" required placeholder="Add fridge item (e.g. Bagged salad)...">
          <button type="submit" class="btn small">Add</button>
        </form>
        <div>
          ${(e.perishables||[]).map(p=>`
            <div class="shop-item${p.eaten?" done":""}">
              <input type="checkbox" ${p.eaten?"checked":""} data-action="toggle-perishable" data-id="${h(p.id)}" aria-label="Mark ${h(p.name)} eaten">
              <div class="shop-item-main">
                <span class="shop-item-name">${h(p.name)}</span>
                <span class="shop-item-sub">${h(p.daysLeft||"Eat First")}</span>
              </div>
              <button type="button" class="btn small ghost" data-action="del-perishable" data-id="${h(p.id)}" aria-label="Remove">×</button>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `}function ea(e){var g;const n=(e.recipeSearch||"").trim().toLowerCase(),t=e.recipeSourceFilter||"all",o=e.recipes.filter(m=>m.source==="instagram").length,s=e.recipes.length-o;let r=e.recipes.filter(m=>!(!Se(m,e)||t==="instagram"&&m.source!=="instagram"||t==="youtube"&&m.source==="instagram"||e.recipeKindFilter!=="all"&&m.kind!==e.recipeKindFilter||e.recipeEffortFilter!=="all"&&m.effort!==e.recipeEffortFilter||n&&!`${m.title} ${m.author||""} ${(m.ingredients||[]).join(" ")} ${(m.tags||[]).join(" ")} ${m.transcript||""}`.toLowerCase().includes(n)||e.recipeCanMakeOnly&&!q(m,e.catalog).ready));e.recipeMatchMyFridge&&(r=[...r].map(m=>({r:m,m:q(m,e.catalog)})).filter(({m})=>m.haveCount>0).sort((m,v)=>v.m.haveCount/Math.max(1,v.m.totalCount)-m.m.haveCount/Math.max(1,m.m.totalCount)||v.m.haveCount-m.m.haveCount).map(({r:m})=>m));const u=e.recipesLimit||60,d=r.slice(0,u),a=[t!=="all"?t==="instagram"?"Instagram":"YouTube":null,e.recipeKindFilter!=="all"?e.recipeKindFilter:null,e.recipeEffortFilter!=="all"?((g=D[e.recipeEffortFilter])==null?void 0:g.short)||e.recipeEffortFilter:null].filter(Boolean),c=a.length;return`
    <div class="search-bubble">
      <input id="recipeSearchInput" class="input" type="search" placeholder="Search dish, @creator, ingredient, or transcript (e.g. pupusa, salpicón, mapo tofu)..." value="${h(e.recipeSearch)}" data-input="recipe-search">
      <button type="button" class="btn primary search-add-btn" data-action="open-add-recipe">+ Add</button>
    </div>

    <div class="chips" role="group" aria-label="Recipe filters">
      <button type="button" class="chip" data-action="toggle-recipe-filters" aria-expanded="${!!e.recipeFiltersOpen}" aria-pressed="${c>0||!!e.recipeFiltersOpen}">
        ${y("catalog",15)} Filters${c?` (${c})`:""} ${e.recipeFiltersOpen?"▴":"▾"}
      </button>
      <button type="button" class="chip" data-action="toggle-match-fridge" aria-pressed="${e.recipeMatchMyFridge}">${y("fridge",15)} Match Fridge</button>
      <button type="button" class="chip" data-action="toggle-can-make" aria-pressed="${e.recipeCanMakeOnly}">${y("check",15)} Ready</button>
      ${a.map(m=>`<span class="tag ok" style="flex:0 0 auto;align-self:center">${h(m)}</span>`).join("")}
      ${c>0?'<button type="button" class="chip" data-action="reset-recipe-filters">Clear ×</button>':""}
    </div>

    ${e.recipeFiltersOpen?`
      <div class="filter-drawer">
        <div class="filter-group">
          <span class="filter-label">Source</span>
          <div class="chips" role="group" aria-label="Filter by source">
            <button type="button" class="chip" data-action="filter-source" data-v="all" aria-pressed="${t==="all"}">All (${e.recipes.length})</button>
            <button type="button" class="chip" data-action="filter-source" data-v="instagram" aria-pressed="${t==="instagram"}">${y("camera",15)} Instagram (${o})</button>
            <button type="button" class="chip" data-action="filter-source" data-v="youtube" aria-pressed="${t==="youtube"}">${y("video",15)} YouTube (${s})</button>
          </div>
        </div>
        <div class="filter-group">
          <span class="filter-label">Category</span>
          <div class="chips" role="group" aria-label="Filter by category">
            ${[["all","All",""],["meal","Meals","meal"],["drink","Drinks","drink"],["snack","Snacks","snack"],["comfort","Comfort","comfort"]].map(([m,v,i])=>`
              <button type="button" class="chip" data-action="filter-kind" data-v="${m}" aria-pressed="${e.recipeKindFilter===m}">
                ${i?y(i,15):""} ${v}
              </button>
            `).join("")}
          </div>
        </div>
        <div class="filter-group">
          <span class="filter-label">Effort</span>
          <div class="chips" role="group" aria-label="Filter by effort">
            <button type="button" class="chip" data-action="filter-effort" data-v="all" aria-pressed="${e.recipeEffortFilter==="all"}">Any effort</button>
            ${Object.values(D).map(m=>`
              <button type="button" class="chip" data-action="filter-effort" data-v="${m.id}" aria-pressed="${e.recipeEffortFilter===m.id}">${y(m.id,15)} ${m.short}</button>
            `).join("")}
          </div>
        </div>
      </div>
    `:""}

    <p class="sub">Showing <b>${d.length}</b> of ${r.length} matching (${e.recipes.length} total) · tap any card for Ingredients &amp; Transcript</p>

    <div class="recipe-grid">
      ${d.map(m=>{const v=q(m,e.catalog),i=(m.ingredients||[]).filter(l=>!v.missing.includes(l));return`
          <button type="button" class="recipe-card" data-action="open-cook" data-id="${h(m.id)}">
            ${Te(m,{extraPill:x(m.cost)})}
            <div class="recipe-card-body">
              <div class="recipe-card-title">${h(m.title)}</div>
              <div class="recipe-card-meta">
                ${v.ready?`<span class="tag ok">✓ Ready (${v.totalCount}/${v.totalCount})</span>`:`<span class="tag warn">${v.haveCount}/${v.totalCount} in fridge</span>`}
                ${m.portions>1?`<span class="tag">×${m.portions}</span>`:""}
                ${m.source==="instagram"?`<span class="tag">${y("camera",12)} ${h(m.author||"IG Reel")}</span>`:m.sourceUrl?`<span class="tag">${y("video",12)} YT Video</span>`:""}
              </div>
              ${e.recipeMatchMyFridge&&i.length?`
                <div class="chips" style="margin-top:2px">
                  ${i.slice(0,4).map(l=>`<span class="tag ok">✓ ${h(l)}</span>`).join("")}
                </div>
              `:""}
            </div>
          </button>
        `}).join("")}
    </div>

    ${r.length>u?`
      <button type="button" class="btn block" style="margin-top:12px" data-action="more-recipes">
        Show More Recipes (${r.length-u} remaining)
      </button>
    `:""}
  `}function ta(e){var u,d;const n=Z(e),t=Math.min(100,n.used/Math.max(1,n.pot)*100),o=we(e),s=Math.max(4,Number((u=e.takeoutPlan)==null?void 0:u.maxPerServing)||12),r=[...e.takeout].sort((a,c)=>{const g=a.price<=n.left,m=c.price<=n.left;return g!==m?g?-1:1:Number(c.fav)-Number(a.fav)||a.price/a.serves-c.price/c.serves});return`
    <article class="card treat">
      <div class="row-between">
        <div>
          <h2>Takeout &amp; Platters Pot</h2>
          <p class="sub">Guillermo's ${h(((d=e.userProfile)==null?void 0:d.city)||"London, ON")} &amp; Salvadoran Spots · ${x(Math.max(0,n.left))} left of ${x(n.pot)} pot</p>
        </div>
        <div class="meal-ring">
          ${gt(t,64,8,t>90?"var(--danger)":"var(--treat)")}
          <span>${Math.round(t)}%</span>
        </div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${t}%;background:${t>90?"var(--danger)":"var(--treat)"}"></div>
      </div>

      <div style="border-top:1px solid var(--line);padding-top:10px;display:grid;gap:8px">
        <div class="row-between">
          <span><b>Takeouts this week:</b> ${o.usedTakeouts} / ${o.plannedTakeouts} planned</span>
          <div class="stepper">
            <button type="button" data-action="step-takeout-plan" data-field="weeklyTakeouts" data-delta="-1" aria-label="Decrease planned takeouts">−</button>
            <b style="min-width:22px;text-align:center">${o.plannedTakeouts}</b>
            <button type="button" data-action="step-takeout-plan" data-field="weeklyTakeouts" data-delta="1" aria-label="Increase planned takeouts">+</button>
          </div>
        </div>
        <div class="row-between">
          <span><b>Food Platters this week:</b> ${o.usedPlatters} / ${o.plannedPlatters} planned</span>
          <div class="stepper">
            <button type="button" data-action="step-takeout-plan" data-field="weeklyPlatters" data-delta="-1" aria-label="Decrease planned platters">−</button>
            <b style="min-width:22px;text-align:center">${o.plannedPlatters}</b>
            <button type="button" data-action="step-takeout-plan" data-field="weeklyPlatters" data-delta="1" aria-label="Increase planned platters">+</button>
          </div>
        </div>
        <div class="row-between">
          <span><b>Target max price / serving:</b> ${x(s)}</span>
          <div class="stepper">
            <button type="button" data-action="step-takeout-plan" data-field="maxPerServing" data-delta="-1" aria-label="Decrease max per serving">−</button>
            <b style="min-width:34px;text-align:center">${x(s)}</b>
            <button type="button" data-action="step-takeout-plan" data-field="maxPerServing" data-delta="1" aria-label="Increase max per serving">+</button>
          </div>
        </div>
      </div>
    </article>

    ${r.map((a,c)=>{const g=a.price<=n.left,m=a.price/Math.max(1,a.serves),v=Wt(a),i=me(a,e),l=a.kind==="pizza"?"pizza":a.kind==="platter"?"platter":"takeout";return`
        <article class="card">
          <div class="row-between">
            <div>
              <h3>${y(l,20)} ${h(a.name)}</h3>
              <p class="sub">${h(a.place||"Local spot")} · ${a.serves>1?`Feeds ${a.serves} (${x(m)}/each)`:"Single meal"}</p>
            </div>
            <strong style="font-size:var(--fs-lg)">${x(a.price)}</strong>
          </div>
          <div class="row" style="flex-wrap:wrap">
            ${c===0&&g?`<span class="tag ok">${y("sparkles",12)} Best pick now</span>`:""}
            <span class="tag ${i.tone}">${h(i.badge)}</span>
            <span class="tag">${i.quotaLeft} planned ${i.isPlatter?"platter":"takeout"} slot${i.quotaLeft===1?"":"s"} left</span>
            ${a.serves>1?`<span class="tag">Platter · +${a.serves-1} leftovers</span>`:""}
            <span class="tag ok">${y("heart",12)} Saves ~${x(v)} vs delivery app</span>
          </div>
          <p class="sub" style="margin:2px 0 0">${h(i.reason)}</p>
          <div class="row">
            <button type="button" class="btn ${g?"primary":""} small" style="flex:1" data-action="buy-takeout" data-id="${h(a.id)}">
              I got this (${x(a.price)})
            </button>
            ${ce(a.sourceUrl)?`
              <a class="btn small" href="${h(ce(a.sourceUrl))}" target="_blank" rel="noopener noreferrer">${y("video",13)} Reel</a>
            `:""}
            ${a.serves>1?`
              <button type="button" class="btn small" data-action="platter-leftovers" data-portions="${a.serves-1}">
                +${a.serves-1} to fridge
              </button>
            `:""}
            <button type="button" class="btn small" data-action="fav-takeout" data-id="${h(a.id)}" aria-label="Favorite">${a.fav?"★":"☆"}</button>
            <button type="button" class="btn small danger" data-action="del-takeout" data-id="${h(a.id)}" aria-label="Remove">×</button>
          </div>
        </article>
      `}).join("")}

    <article class="card">
      <h3>Add &amp; Assess a Takeout or Platter</h3>
      <p class="sub">Check if the price is worth it vs your ${x(s)}/serving target &amp; $3.15 homemade average.</p>
      <form data-form="add-takeout" style="display:grid;gap:10px">
        <div class="field"><label>Meal or Platter</label><input class="input" name="name" required placeholder="e.g. Family Taco Platter"></div>
        <div class="row">
          <div class="field" style="flex:1"><label>Price ($)</label><input id="takeoutPriceInput" class="input" name="price" type="number" step="0.01" min="1" required value="24" data-input="assess-takeout"></div>
          <div class="field" style="flex:1"><label>Feeds</label><input id="takeoutServesInput" class="input" name="serves" type="number" min="1" max="12" value="3" data-input="assess-takeout"></div>
        </div>
        <div id="takeoutAssessPreview" class="tag ok">
          ${h(me({price:24,serves:3,kind:"platter"},e).badge)} — ${h(me({price:24,serves:3,kind:"platter"},e).reason)}
        </div>
        <div class="field"><label>Where from (optional)</label><input class="input" name="place" placeholder="e.g. Taqueria down the street"></div>
        <button type="submit" class="btn primary block">Save takeout option</button>
      </form>
    </article>
  `}function aa(e){return`
    <section class="screen" aria-labelledby="recipesHeading">
      <div>
        <h1 id="recipesHeading">Recipes & Takeout</h1>
        <p class="sub">Adding any recipe syncs ingredients straight to your Master Catalog.</p>
      </div>

      <div class="segmented" role="group" aria-label="Recipes view">
        <button type="button" data-action="recipes-sub" data-sub="all" aria-pressed="${e.recipesSubTab==="all"}">${y("catalog",16)} My Recipes</button>
        <button type="button" data-action="recipes-sub" data-sub="takeout" aria-pressed="${e.recipesSubTab==="takeout"}">${y("takeout",16)} Takeout & Platters</button>
      </div>

      ${e.recipesSubTab==="takeout"?ta(e):ea(e)}
    </section>
  `}const na={survival:"nocook",balanced:"meal",cooking:"quick",custom:"custom"},sa={Sunday:"Sun",Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat"};function oa(e){var d;const n=ue(e.shopMood,e.recipes,e.catalog,e.customRecipeIds),t=$e(e),o=ct(e),s=we(e),r=new Set(e.shopChecked),u=n.items.filter(a=>r.has(a.id)).reduce((a,c)=>a+(Number(c.price)||0),0)+e.shopCustomItems.filter(a=>a.checked).reduce((a,c)=>a+(Number(c.price)||0),0);return`
    <article class="card highlight">
      <div class="row-between">
        <div>
          <h2>${y("timer",18)} Weekly Grocery Reminder &amp; Plan</h2>
          <p class="sub">Pick your grocery day so your fridge stays stocked for 0-shopping-trip meals.</p>
        </div>
        <span class="tag ${o.isToday||o.listLocked?"ok":""}">${h(o.label)}</span>
      </div>

      <div>
        <div class="sub" style="margin-bottom:6px">Grocery Day Reminder</div>
        <div class="chips" role="group" aria-label="Grocery shopping day">
          ${K.map(a=>`
            <button type="button" class="chip" data-action="set-shop-day" data-day="${a}" aria-pressed="${o.shopDay===a}">
              ${sa[a]}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="row-between">
        <span class="sub">Reminder time on ${h(o.shopDay)}</span>
        <select class="input" style="width:auto;min-height:36px;padding:4px 10px" data-action="set-shop-time" aria-label="Grocery reminder time">
          ${["9:00 AM","10:00 AM","12:00 PM","5:00 PM","7:00 PM"].map(a=>`
            <option value="${a}" ${o.reminderTime===a?"selected":""}>${a}</option>
          `).join("")}
        </select>
      </div>

      <div class="row-between" style="border-top:1px solid var(--line);padding-top:10px">
        <div>
          <strong>Planned Takeouts / wk</strong>
          <p class="sub">${s.usedTakeouts} used this week</p>
        </div>
        <div class="stepper">
          <button type="button" data-action="step-takeout-plan" data-field="weeklyTakeouts" data-delta="-1" aria-label="Decrease planned takeouts">−</button>
          <b style="min-width:24px;text-align:center">${s.plannedTakeouts}</b>
          <button type="button" data-action="step-takeout-plan" data-field="weeklyTakeouts" data-delta="1" aria-label="Increase planned takeouts">+</button>
        </div>
      </div>

      <div class="row-between">
        <div>
          <strong>Planned Platters / wk</strong>
          <p class="sub">${s.usedPlatters} used this week (multi-meal value)</p>
        </div>
        <div class="stepper">
          <button type="button" data-action="step-takeout-plan" data-field="weeklyPlatters" data-delta="-1" aria-label="Decrease planned platters">−</button>
          <b style="min-width:24px;text-align:center">${s.plannedPlatters}</b>
          <button type="button" data-action="step-takeout-plan" data-field="weeklyPlatters" data-delta="1" aria-label="Increase planned platters">+</button>
        </div>
      </div>

      <div class="btn-pair">
        <button type="button" class="btn ${o.listLocked?"":"primary"}" data-action="lock-weekly-list">
          ${o.listLocked?`${y("check",15)} ${h(o.shopDay)} List Set (${n.items.length} · ${x(n.estimatedTotal)})`:`Lock ${h(o.shopDay)} List (${n.items.length} · ${x(n.estimatedTotal)})`}
        </button>
        ${n.items.length?`
          <button type="button" class="btn" data-action="stock-all-trip">Stock All into Fridge</button>
        `:""}
      </div>

      <div class="chips" style="border-top:1px solid var(--line);padding-top:10px">
        <button type="button" class="chip" data-action="open-plan">${y("catalog",14)} ${e.planDays||4}-Day Plan</button>
        <button type="button" class="chip" data-action="open-settings">${y("timer",14)} My Times &amp; Calendar (.ics)</button>
        <button type="button" class="chip" data-action="meet-bao">${y("panda",14)} Meet Bao Tour</button>
      </div>
    </article>

    <div class="card">
      <div class="row-between">
        <div>
          <h2>Shopping Mood</h2>
          <p class="sub">Builds a focused trip list from your recipes, skipping what's in your kitchen.</p>
        </div>
      </div>
      <div class="chips" role="group" aria-label="Shopping list mood">
        ${Ke.map(a=>`
          <button type="button" class="chip" data-action="shop-mood" data-mood="${a.id}" aria-pressed="${e.shopMood===a.id}">
            ${y(na[a.id]||"meal",16)} ${a.label}
          </button>
        `).join("")}
      </div>
      <p class="sub">${y("sprout",14)} ${h(((d=Ke.find(a=>a.id===e.shopMood))==null?void 0:d.desc)||"")}</p>
      ${e.shopMood==="custom"?`
        <details>
          <summary style="cursor:pointer;font-weight:700;color:var(--accent)">Pick custom recipes (${e.customRecipeIds.length} selected)</summary>
          <div class="chips" style="margin-top:10px">
            ${e.recipes.map(a=>`
              <button type="button" class="chip" data-action="toggle-custom-recipe" data-id="${h(a.id)}" aria-pressed="${e.customRecipeIds.includes(a.id)}">
                ${y(a.kind||"meal",14)} ${h(a.title)}
              </button>
            `).join("")}
          </div>
        </details>
      `:""}
    </div>

    <article class="card">
      <div class="row-between">
        <div>
          <span class="sub">Trip estimate (${n.items.length} to buy · ${n.alreadyHaveCount} already in kitchen)</span>
          <div style="font-size:var(--fs-xl);font-weight:700">${x(n.estimatedTotal)}</div>
        </div>
        <div style="text-align:right">
          <span class="sub">Weekly target</span>
          <div style="font-weight:700">${x(t.spent)} / ${x(t.target)}</div>
        </div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${Math.min(100,t.pct)}%;background:${t.pct>100?"var(--danger)":"var(--accent)"}"></div>
      </div>
      <details>
        <summary style="cursor:pointer;font-size:var(--fs-sm);color:var(--muted)">Included recipes (${n.selectedRecipes.length})</summary>
        <div class="chips" style="margin-top:8px">
          ${n.selectedRecipes.map(a=>`<span class="tag">${y(a.kind||"meal",13)} ${h(a.title)}</span>`).join("")}
        </div>
      </details>
    </article>

    <article class="card">
      ${n.items.length===0&&e.shopCustomItems.length===0?`
        <p class="sub">You already have everything in your kitchen for this mood! ${y("check",16)}</p>
      `:""}

      ${ge.map(a=>{const c=n.byAisle[a]||[];return c.length?`
          <div class="aisle-group">
            <div class="aisle-head">${h(a)}</div>
            ${c.map(g=>{const m=r.has(g.id);return`
                <div class="shop-item${m?" done":""}">
                  <input type="checkbox" ${m?"checked":""} data-action="toggle-shop-item" data-id="${h(g.id)}" aria-label="Check ${h(g.name)}">
                  <div class="shop-item-main">
                    <span class="shop-item-name">${h(g.name)}</span>
                    <span class="shop-item-sub">For: ${h(g.tripRecipes.slice(0,2).join(", "))}${g.tripRecipes.length>2?` +${g.tripRecipes.length-2}`:""}</span>
                  </div>
                  <span class="shop-price">${x(g.price)}</span>
                </div>
              `}).join("")}
          </div>
        `:""}).join("")}

      ${e.shopCustomItems.length?`
        <div class="aisle-group">
          <div class="aisle-head">Extras</div>
          ${e.shopCustomItems.map(a=>`
            <div class="shop-item${a.checked?" done":""}">
              <input type="checkbox" ${a.checked?"checked":""} data-action="toggle-custom-shop" data-id="${h(a.id)}">
              <div class="shop-item-main"><span class="shop-item-name">${h(a.name)}</span></div>
              <span class="shop-price">${x(a.price)}</span>
              <button type="button" class="btn small ghost" data-action="del-custom-shop" data-id="${h(a.id)}">×</button>
            </div>
          `).join("")}
        </div>
      `:""}

      <form data-form="add-shop-extra" class="row" style="margin-top:8px">
        <input class="input" style="flex:2" name="name" required placeholder="Add extra item (e.g. Paper towels)">
        <input class="input" style="width:92px" name="price" type="number" step="0.01" min="0" placeholder="$3.50">
        <button type="submit" class="btn small">+ Add</button>
      </form>

      ${r.size>0||e.shopCustomItems.some(a=>a.checked)?`
        <button type="button" class="btn primary block" data-action="finish-shopping">
          Done shopping → Move checked to My Kitchen (${x(u)})
        </button>
      `:""}
    </article>
  `}function ia(e){const n=Object.values(e.catalog).sort((o,s)=>o.name.localeCompare(s.name)),t=n.filter(o=>o.inKitchen).length;return`
    <article class="card">
      <h2>Fridge Batch Portions</h2>
      <p class="sub">Cooked a big batch or bought a platter? Track ready portions here.</p>
      <div class="row-between">
        <div><strong>${y("meal",18)} Ready Meals</strong><p class="sub">Instant lunch or dinner</p></div>
        <div class="stepper">
          <button type="button" data-action="step-fridge" data-kind="meals" data-delta="-1" aria-label="Remove meal portion">−</button>
          <b style="min-width:28px;text-align:center">${e.fridgeMeals}</b>
          <button type="button" data-action="step-fridge" data-kind="meals" data-delta="1" aria-label="Add meal portion">+</button>
        </div>
      </div>
      <div class="row-between">
        <div><strong>${y("drink",18)} Pitcher Glasses</strong><p class="sub">Aguas frescas, iced tea, juice</p></div>
        <div class="stepper">
          <button type="button" data-action="step-fridge" data-kind="drinks" data-delta="-1" aria-label="Remove drink glass">−</button>
          <b style="min-width:28px;text-align:center">${e.fridgeDrinks}</b>
          <button type="button" data-action="step-fridge" data-kind="drinks" data-delta="1" aria-label="Add drink glass">+</button>
        </div>
      </div>
    </article>

    <article class="card">
      <div class="row-between">
        <div>
          <h2>My Kitchen Pantry</h2>
          <p class="sub">${t} of ${n.length} ingredients ticked · tap to toggle what you currently have</p>
        </div>
      </div>
      ${ge.map(o=>{const s=n.filter(r=>r.aisle===o);return s.length?`
          <div>
            <div class="aisle-head" style="margin-bottom:6px">${h(o)}</div>
            <div class="chips">
              ${s.map(r=>`
                <button type="button" class="chip" data-action="toggle-kitchen-item" data-id="${h(r.id)}" aria-pressed="${r.inKitchen}">
                  ${r.inKitchen?"✓ ":""}${h(r.name)}
                </button>
              `).join("")}
            </div>
          </div>
        `:""}).join("")}
    </article>
  `}function ra(e){const n=(e.catalogSearch||"").trim().toLowerCase(),t=Object.values(e.catalog).filter(o=>!n||o.name.toLowerCase().includes(n)||o.aisle.toLowerCase().includes(n)).sort((o,s)=>s.usedBy.length-o.usedBy.length||o.name.localeCompare(s.name));return`
    <article class="card">
      <div>
        <h2>Master Grocery Catalog</h2>
        <p class="sub">Synced from all recipes + everyday fruits, cheeses & snacks (${Object.keys(e.catalog).length} items). Add custom staples or edit prices anytime.</p>
      </div>
      <form data-form="add-catalog-item" class="row">
        <input class="input" style="flex:2" name="name" required placeholder="Add snack, fruit, cheese (e.g. Oreos, Apples, Cheddar)...">
        <input class="input" style="width:92px" name="price" type="number" step="0.01" min="0" placeholder="$3.99">
        <button type="submit" class="btn small primary">+ Catalog</button>
      </form>
      <input class="input" type="search" placeholder="Search master ingredients..." value="${h(e.catalogSearch)}" data-input="catalog-search">
      <div>
        ${t.map(o=>`
          <div class="catalog-row">
            <div>
              <div style="font-weight:700">${h(o.name)}</div>
              <div class="sub">${h(o.aisle)} · Used in <b>${o.usedBy.length}</b> ${o.usedBy.length===1?"recipe":"recipes"} ${o.inKitchen?'· <span style="color:var(--accent)">In kitchen</span>':""}</div>
            </div>
            <input class="price-input" type="number" step="0.01" min="0" value="${Number(o.price).toFixed(2)}" data-action="catalog-price" data-id="${h(o.id)}" aria-label="Price for ${h(o.name)}">
            <button type="button" class="btn small" data-action="toggle-kitchen-item" data-id="${h(o.id)}" title="Toggle in kitchen">
              ${o.inKitchen?`${y("kitchen",14)} Have`:"+ Stock"}
            </button>
          </div>
        `).join("")}
      </div>
    </article>
  `}function la(e){return`
    <section class="screen" aria-labelledby="shopHeading">
      <div>
        <h1 id="shopHeading">Shop & Kitchen</h1>
        <p class="sub">Your Master Catalog feeds your mood-based Trip List automatically.</p>
      </div>

      <div class="segmented" role="group" aria-label="Shop view">
        <button type="button" data-action="shop-sub" data-sub="trip" aria-pressed="${e.shopSubTab==="trip"}">${y("shop",16)} Trip List</button>
        <button type="button" data-action="shop-sub" data-sub="kitchen" aria-pressed="${e.shopSubTab==="kitchen"}">${y("kitchen",16)} My Kitchen</button>
        <button type="button" data-action="shop-sub" data-sub="catalog" aria-pressed="${e.shopSubTab==="catalog"}">${y("catalog",16)} Catalog</button>
      </div>

      ${e.shopSubTab==="kitchen"?ia(e):e.shopSubTab==="catalog"?ra(e):oa(e)}
    </section>
  `}const da=[{id:"all",label:"All Recipes",icon:"catalog"},{id:"youtube",label:"YouTube Videos",icon:"video"},{id:"instagram",label:"Instagram Reels",icon:"camera"},{id:"ready",label:"Ready in Fridge",icon:"fridge"},{id:"quick",label:"Quick ≤10m",icon:"quick"},{id:"drink",label:"Drinks & Boba",icon:"drink"},{id:"snack",label:"Snacks",icon:"snack"},{id:"comfort",label:"Comfort",icon:"comfort"}];function ca(e){const n=e.exploreFilter||"all",t=(e.exploreSearch||"").trim().toLowerCase(),o=e.exploreLimit||48,s=e.recipes.filter(d=>Se(d,e)),r=s.filter(d=>!(n==="youtube"&&d.source==="instagram"||n==="instagram"&&d.source!=="instagram"||n==="ready"&&!q(d,e.catalog).ready||n==="quick"&&!["nocook","quick"].includes(d.effort)||n==="drink"&&d.kind!=="drink"||n==="snack"&&d.kind!=="snack"||n==="comfort"&&d.kind!=="comfort"&&!(d.tags||[]).includes("comfort")||t&&!`${d.title} ${d.author||""} ${(d.ingredients||[]).join(" ")} ${(d.tags||[]).join(" ")} ${d.transcript||""}`.toLowerCase().includes(t))),u=r.slice(0,o);return`
    <section class="screen" aria-labelledby="exploreHeading">
      <div>
        <h1 id="exploreHeading">Explore Recipes</h1>
        <p class="sub">Browse visual video thumbnails across all <b>${s.length}</b> dishes — tap any card to watch, read transcripts &amp; cook.</p>
      </div>

      <div class="search-bubble">
        <input id="exploreSearchInput" class="input" type="search" placeholder="Search video title, @creator, ingredient, or transcript..." value="${h(e.exploreSearch||"")}" data-input="explore-search">
        <button type="button" class="btn primary search-add-btn" data-action="open-add-recipe">+ Add</button>
      </div>

      <div class="chips" role="group" aria-label="Explore filters">
        ${da.map(d=>`
          <button type="button" class="chip" data-action="explore-filter" data-v="${d.id}" aria-pressed="${n===d.id}">
            ${y(d.icon,15)} ${d.label}
          </button>
        `).join("")}
      </div>

      <p class="sub">Showing <b>${u.length}</b> of ${r.length} recipes · tap any thumbnail to open video &amp; steps</p>

      <div class="recipe-grid">
        ${u.map(d=>{const a=q(d,e.catalog);return`
            <button type="button" class="recipe-card" data-action="open-cook" data-id="${h(d.id)}">
              ${Te(d,{extraPill:e.simpleMode?"":x(d.cost)})}
              <div class="recipe-card-body">
                <div class="recipe-card-title">${h(d.title)}</div>
                <div class="recipe-card-meta">
                  ${a.ready?'<span class="tag ok">✓ Ready</span>':`<span class="tag warn">${a.haveCount}/${a.totalCount} in fridge</span>`}
                  ${d.source==="instagram"?`<span class="tag">${y("camera",12)} ${h(d.author||"IG Reel")}</span>`:`<span class="tag">${y("video",12)} ${h(d.time||"Video")}</span>`}
                </div>
              </div>
            </button>
          `}).join("")}
      </div>

      ${r.length>o?`
        <button type="button" class="btn block" data-action="more-explore">
          Show More Videos (${r.length-o} remaining)
        </button>
      `:""}
    </section>
  `}const pa=[{id:"play",label:"Care",icon:"bamboo"},{id:"squad",label:"Squad",icon:"panda"},{id:"outfits",label:"Outfits",icon:"wardrobe"},{id:"props",label:"Island",icon:"garden"},{id:"goals",label:"Quests",icon:"trophy"}];function ua(e){const n=Math.min(4,Math.max(0,Number(e.gardenWater)||0)),t=ve(e),o=H(t),s=Math.round(o/3*100),r=Math.min(100,Math.max(0,Number(e.pandaBond)||65));return`
    <div class="garden-panel-stack">
      <div class="garden-meters">
        <div class="garden-meter">
          <div class="row-between"><span class="meter-lbl">Fullness</span><b>${o}/3 meals</b></div>
          <div class="progress-track"><div class="progress-fill" style="width:${s}%;background:var(--accent)"></div></div>
        </div>
        <div class="garden-meter">
          <div class="row-between"><span class="meter-lbl">Dew (<span id="waterCount">${5-n} left</span>)</span><b>${n}/5</b></div>
          <div class="progress-track"><div id="waterBar" class="progress-fill" style="width:${n/5*100}%;background:var(--info)"></div></div>
        </div>
        <div class="garden-meter">
          <div class="row-between"><span class="meter-lbl">Bond</span><b>${r}%</b></div>
          <div class="progress-track"><div class="progress-fill" style="width:${r}%;background:var(--treat)"></div></div>
        </div>
      </div>

      <div class="garden-action-grid" role="group" aria-label="Care actions">
        <button type="button" class="garden-action-btn primary" data-action="water-garden">
          ${y("drink",20)}
          <strong>Water</strong>
          <small>${n}/5 → +1 Shoot</small>
        </button>
        <button type="button" class="garden-action-btn" data-action="garden-feed" data-food="bamboo">
          ${y("bamboo",20)}
          <strong>Bamboo</strong>
          <small>+3% Bond</small>
        </button>
        <button type="button" class="garden-action-btn" data-action="garden-feed" data-food="apple">
          ${y("snack",20)}
          <strong>Apple</strong>
          <small>+2% Bond</small>
        </button>
        <button type="button" class="garden-action-btn" data-action="garden-feed" data-food="carrot">
          ${y("sprout",20)}
          <strong>Carrot</strong>
          <small>+2% Bond</small>
        </button>
      </div>
    </div>
  `}function ma(e){return`
    <div class="garden-panel-stack">
      <div class="garden-squad-grid" role="group" aria-label="Panda squad">
        ${F.map(n=>{const t=Y(n,e),o=!e.gardenLineup&&e.pandaStyle===n.id;return`
            <button type="button"
              class="garden-squad-card${t?"":" locked"}"
              data-action="panda-style"
              data-style="${h(n.id)}"
              aria-pressed="${o}"
              ${t?"":"disabled"}>
              <span class="sq-ic">${t?y(n.icon||"panda",26):y("lock",20)}</span>
              <span class="sq-info">
                <strong>${h(n.name)}</strong>
                <small>${t?o?"Active Companion ✓":h(n.hint):`Locked · ${h(n.hint)}`}</small>
              </span>
            </button>
          `}).join("")}
      </div>

      <div class="chips" role="group" aria-label="Turnaround views">
        <button type="button" class="chip" data-action="garden-lineup" aria-pressed="${!!e.gardenLineup}">
          ${y("sparkles",14)} All 4 Lineup
        </button>
        ${[{id:"front",label:"Front"},{id:"threeQuarter",label:"3/4 View"},{id:"right",label:"Right"},{id:"left",label:"Left"},{id:"back",label:"Back"}].map(n=>`
          <button type="button" class="chip" data-action="garden-view" data-view="${n.id}" aria-pressed="${!e.gardenTurntable&&(e.gardenView||"front")===n.id}">
            ${n.label}
          </button>
        `).join("")}
      </div>
    </div>
  `}function ba(e){const n=Object.values(e.equippedAcc||{}).filter(Boolean).length;return`
    <div class="garden-panel-stack">
      <div class="row-between">
        <span class="sub" style="font-size:12px"><b>${n}</b> item${n===1?"":"s"} worn · mix &amp; match across 5 sockets</span>
        <button type="button" class="btn small" style="min-height:30px;padding:3px 10px;font-size:12px" data-action="reset-outfit">Signature Outfit</button>
      </div>
      <div class="garden-mini-grid">
        ${et.map(t=>{const o=Y(t,e),s=e.equippedAcc[t.socket]===t.id;return`
            <button type="button"
              class="garden-mini-tile${o?"":" locked"}"
              data-action="toggle-acc"
              data-id="${h(t.id)}"
              aria-pressed="${s}"
              ${o?"":"disabled"}>
              <span class="re">${o?y(t.id,24,t.name):y("lock",20,"Locked")}</span>
              <strong>${h(t.name)}</strong>
              <small>${o?s?"Equipped ✓":vt[t.socket]:h(t.hint)}</small>
            </button>
          `}).join("")}
      </div>
    </div>
  `}function ga(e){return`
    <div class="garden-panel-stack">
      <div class="row-between">
        <span class="sub" style="font-size:12px"><b>${e.placedProps.length}</b> / ${Me.length} island props placed</span>
        <span class="sub" style="font-size:12px">Tap a prop to place or store</span>
      </div>
      <div class="garden-mini-grid">
        ${Me.map(n=>{const t=Y(n,e),o=e.placedProps.includes(n.id);return`
            <button type="button"
              class="garden-mini-tile${t?"":" locked"}"
              data-action="toggle-prop"
              data-id="${h(n.id)}"
              aria-pressed="${o}"
              ${t?"":"disabled"}>
              <span class="re">${t?y(n.id,24,n.name):y("lock",20,"Locked")}</span>
              <strong>${h(n.name)}</strong>
              <small>${t?o?"On Island ✓":"Tap to Place":h(n.hint)}</small>
            </button>
          `}).join("")}
      </div>
    </div>
  `}function ha(e){const n=$e(e),t=rt(e),o=lt(e),s=H(ve(e));return`
    <div class="garden-panel-stack">
      <div class="garden-quest-row">
        <div>
          <strong style="font-size:13px">${y("meal",15)} Daily 3-Meal Quest</strong>
          <p class="sub" style="font-size:12px;margin-top:2px">Eat 3 home meals today to unlock new pandas &amp; props (${t} full day${t===1?"":"s"} total)</p>
        </div>
        <span class="tag ${s===3?"ok":""}">${s}/3 today</span>
      </div>

      <div class="garden-quest-row">
        <div>
          <strong style="font-size:13px">${y("trophy",15)} Weekly Grocery Quest</strong>
          <p class="sub" style="font-size:12px;margin-top:2px">${o}d streak · ${x(n.spent)} / ${x(n.target)} spent</p>
        </div>
        <span class="tag ${n.underBudget?"ok":"warn"}">${n.underBudget?`${x(Math.max(0,n.left))} left`:"Over target"}</span>
      </div>

      <div class="progress-track" style="height:8px">
        <div class="progress-fill" style="width:${Math.min(100,n.pct)}%;background:${n.underBudget?"var(--accent)":"var(--danger)"}"></div>
      </div>

      ${n.claimed?`<span class="tag ok">${y("check",14)} Weekly reward claimed (+3 Shoots)!</span>`:`<button type="button" class="btn small primary block" style="min-height:38px" data-action="claim-weekly-win" ${n.underBudget?"":"disabled"}>
            ${n.underBudget?`${y("sparkles",14)} Claim Weekly Win (+3 Shoots)`:"Stay under weekly target to claim"}
          </button>`}
    </div>
  `}function Ue(e){const n=lt(e),t=F.find(a=>a.id===e.pandaStyle)||F[0],o=e.gardenTab||"play",s=Math.min(100,Math.max(0,Number(e.pandaBond)||65)),r=!!e.gardenDrawerHidden;let u="";o==="squad"?u=ma(e):o==="outfits"?u=ba(e):o==="props"?u=ga(e):o==="goals"?u=ha(e):u=ua(e);const d=e.gardenSay||`Tap ${t.name} to pet (+1% Bond) · Drag sky to orbit!`;return`
    <section class="screen garden-game-screen" aria-labelledby="gardenHeading">
      <h1 id="gardenHeading" class="sr-only">Panda Garden Island</h1>
      <div class="garden-game-world">
        <div id="gardenDiorama" class="garden-canvas-layer" aria-label="Interactive 3D bamboo garden island"></div>
        <div id="gardenFxLayer" class="garden-fx-layer" aria-hidden="true"></div>

        <div class="garden-overlay-ui">
          <div class="garden-top-stack">
            <div class="garden-top-hud">
              <div class="garden-hud-pills">
                <span class="garden-stat-pill">${y(t.icon||"panda",15)} <b>${h(t.name)}</b></span>
                <span class="garden-stat-pill">${y("heart",13)} <b>${s}%</b></span>
                <span class="garden-stat-pill">${y("bamboo",14)} <b>${e.gardenShoots}</b></span>
                <span class="garden-stat-pill">${y("sprout",13)} ${n}d</span>
              </div>
              <div class="garden-hud-pills">
                <button type="button" class="garden-ctrl-pill" data-action="garden-lineup" aria-pressed="${!!e.gardenLineup}">
                  ${y("sparkles",13)} All 4
                </button>
                <button type="button" class="garden-ctrl-pill" data-action="toggle-turntable" aria-pressed="${!!e.gardenTurntable}">
                  Spin
                </button>
                <button type="button" class="garden-ctrl-pill" data-action="toggle-outlines" aria-pressed="${!!e.pandaOutlines}">
                  Ink
                </button>
                <button type="button" class="garden-ctrl-pill" data-action="toggle-garden-drawer" aria-pressed="${!r}" aria-label="${r?"Show menu drawer":"Hide menu drawer"}">
                  ${r?"Menu ▴":"Hide ▾"}
                </button>
              </div>
            </div>

            <div class="garden-speech-wrap">
              <p id="gardenSay" class="garden-speech-chip" aria-live="polite">
                ${h(d)}
              </p>
            </div>
          </div>

          <div class="garden-bottom-hud">
            ${r?"":`
              <div class="garden-drawer">
                ${u}
              </div>
            `}
            <div class="garden-dock-tabs" role="tablist" aria-label="Garden menus">
              ${pa.map(a=>`
                <button type="button"
                  role="tab"
                  data-action="garden-tab"
                  data-gtab="${a.id}"
                  aria-selected="${!r&&o===a.id}"
                  aria-pressed="${!r&&o===a.id}">
                  ${y(a.icon,17)}
                  <span>${a.label}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `}let fe=null,J=new Set,W=null,ye=0;function fa(e){const n=String(e).match(/(\d+)\s*(?:–|-|to)?\s*(\d+)?\s*min/i);return n&&Number(n[2]||n[1])||0}function ke(){const e=document.getElementById("cookTimerBox");if(!e)return;if(!ye){e.hidden=!0;return}const n=Math.max(0,ye-Date.now()),t=Math.ceil(n/1e3),o=Math.floor(t/60),s=String(t%60).padStart(2,"0");e.hidden=!1,e.querySelector(".timer-clock").textContent=n<=0?"Done!":`${o}:${s}`,n<=0&&W&&(clearInterval(W),W=null)}function ya(e){W&&clearInterval(W),ye=Date.now()+e*60*1e3,ke(),W=setInterval(ke,500)}function ka(){W&&clearInterval(W),W=null,ye=0,ke()}function ht(e,n){const t=document.getElementById("cookOverlay");if(!t||!e)return;fe!==e.id&&(fe=e.id,J=new Set);const o=D[e.effort]||D.quick,s=q(e,n.catalog),r=X.find(u=>u.id===n.eatSlot)||X[2];t.innerHTML=`
    <div class="wrap" style="padding-block:16px 110px;display:grid;gap:14px">
      <div class="row-between">
        <button type="button" class="btn small" data-action="close-cook">← Back</button>
        <div class="row">
          ${ce(e.sourceUrl)?`<a class="btn small" href="${h(ce(e.sourceUrl))}" target="_blank" rel="noopener noreferrer">${y("video",15)} ${e.source==="instagram"?"Open Instagram Reel":"Watch Source Video"}</a>`:""}
          ${e.builtIn?"":`<button type="button" class="btn small danger" data-action="delete-recipe" data-id="${h(e.id)}">Delete</button>`}
        </div>
      </div>

      <div id="cookTimerBox" class="card highlight" hidden style="padding:10px 14px">
        <div class="row-between">
          <span>${y("timer",15)} Timer: <b class="timer-clock">0:00</b></span>
          <button type="button" class="btn small" data-action="stop-cook-timer">Dismiss</button>
        </div>
      </div>

      ${Te(e,{hero:!0,extraPill:`${x(e.cost)} / serving`})}

      <div>
        <div class="row" style="margin-bottom:6px">
          <span class="tag">${y(o.id,14)} ${h(o.label)}</span>
          <span class="tag">${y("timer",14)} ${h(e.time)}</span>
          ${e.author?`<span class="tag">${y("camera",13)} ${h(e.author)}</span>`:""}
          ${e.portions>1?`<span class="tag ok">Makes ${e.portions} ${e.kind==="drink"?"glasses":"portions"}</span>`:""}
        </div>
        <h1 style="font-size:var(--fs-xl)">${h(e.title)}</h1>
      </div>

      <article class="card">
        <div class="row-between">
          <h2>Ingredients</h2>
          ${s.missing.length?`
            <button type="button" class="btn small" data-action="add-missing-to-trip" data-id="${h(e.id)}">
              ${y("cart",15)} Add ${s.missing.length} missing to Trip
            </button>
          `:`<span class="tag ok">${y("check",13)} All in your kitchen</span>`}
        </div>
        <div class="chips">
          ${(e.ingredients||[]).map(u=>{const d=s.missing.includes(u);return`<span class="tag ${d?"warn":"ok"}">${d?"Need: ":`${y("check",12)} `}${h(u)}</span>`}).join("")}
        </div>
      </article>

      <div style="display:grid;gap:10px">
        <h2>Steps (tap to check off)</h2>
        ${(e.steps||[]).map((u,d)=>{const a=fa(u),c=J.has(d);return`
            <div style="display:grid;gap:6px">
              <button type="button" class="step-btn" data-action="toggle-step" data-idx="${d}" aria-pressed="${c}">
                <span class="step-num">${c?y("check",14):d+1}</span>
                <span>${h(u)}</span>
              </button>
              ${a>0?`<button type="button" class="btn small" style="justify-self:start" data-action="start-cook-timer" data-min="${a}">${y("timer",14)} Start ${a} min timer</button>`:""}
            </div>
          `}).join("")}
      </div>

      ${e.transcript?`
        <details class="card" open>
          <summary style="cursor:pointer;font-weight:700">${y("note",16)} Description & Spoken Transcript</summary>
          <p class="sub" style="margin-top:8px;white-space:pre-line;line-height:1.45;color:var(--fg)">${h(e.transcript)}</p>
        </details>
      `:""}

      <div style="display:grid;gap:8px">
        <button type="button" class="btn primary block" data-action="complete-recipe" data-id="${h(e.id)}">
          ${e.kind==="meal"||e.kind==="comfort"?`${y("sparkles",16)} I ate this for ${r.label}! (+1 bamboo shoot${e.portions>1?`, +${e.portions-1} fridge portions`:""})`:e.kind==="drink"?`${y("agua_fresca",16)} I made / poured this! (${e.portions>1?`+${e.portions} pitcher glasses`:"+1 drink logged"})`:`${y("cookie",16)} I had this snack!`}
        </button>
      </div>
    </div>
  `,t.hidden=!1,t.scrollTop=0,document.body.style.overflow="hidden",ke()}function ft(e){return e?{title:e.title,done:J.size,total:(e.steps||[]).length}:null}function va(e,n){J.has(e)?J.delete(e):J.add(e);const t=n.recipes.find(o=>o.id===fe);return t&&ht(t,n),ft(t)}function Ie(){const e=document.getElementById("cookOverlay");e&&(e.hidden=!0),document.body.style.overflow="",fe=null}let _="youtube",G="",R="";const $a=["chicken breast","chicken thigh","chicken","ground beef","beef","pork","bacon","sausage","salmon","shrimp","tuna","tilapia","tofu","eggs","egg","white rice","jasmine rice","brown rice","rice","pasta","spaghetti","noodles","ramen","udon","bread","tortilla","tortillas","flour","oats","quinoa","beans","black beans","chickpeas","lentils","olive oil","sesame oil","vegetable oil","butter","ghee","coconut milk","heavy cream","milk","yogurt","sour cream","cream cheese","mozzarella","cheddar","parmesan","feta","cheese","garlic","onion","red onion","green onion","scallion","scallions","shallot","ginger","tomato","tomatoes","cherry tomatoes","tomato paste","jarred salsa","salsa","marinara","avocado","lime","lemon","cilantro","parsley","basil","spinach","kale","lettuce","cabbage","broccoli","bell pepper","jalapeno","chili","carrot","carrots","celery","cucumber","corn","potato","potatoes","sweet potato","mushroom","mushrooms","zucchini","mango","banana","strawberry","soy sauce","fish sauce","oyster sauce","chili oil","sriracha","hot sauce","vinegar","rice vinegar","honey","maple syrup","sugar","brown sugar","salt","black pepper","pepper","cumin","paprika","oregano","chili flakes","red pepper flakes","broth","chicken broth","vegetable broth","water","ice"],wa=/\b(add|mix|stir|whisk|combine|toss|cook|heat|warm|fry|pan-fry|saute|sauté|sear|brown|bake|roast|boil|simmer|steam|blend|puree|chop|dice|slice|mince|pour|drizzle|serve|season|sprinkle|top|preheat|air fry|microwave|marinate|drain|rinse|fold|mash|grill)\b/i;function ie(e){return String(e||"").replace(/!\[[^\]]*\]\([^)]+\)/g," ").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`~]/g,"").replace(/^[\s•▢☐□✓✕\-\*]+(?:\[\s*[xX ]?\s*\])?\s*/,"").replace(/^\d+[.)]\s+/,"").replace(/\s+/g," ").trim()}function Ye(e,n,t,{preferNumberedOrBulleted:o=!0,maxItems:s=18}={}){const r=String(e||"").split(/\n/),u=[];for(let a=0;a<r.length;a++){const c=r[a].trim(),g=(r[a+1]||"").trim(),m=/^[-=]{3,}$/.test(g),v=ie(c.replace(/^#{1,6}\s*/,""));(/^#{1,6}\s*/.test(c)||m||/^(?:\*\*|__)?[A-Za-z &/]+(?:\*\*|__)?\s*:?$/.test(c))&&n.test(v)&&u.push(m?a+2:a+1)}let d=[];for(const a of u){const c=[];for(let g=a;g<r.length;g++){const m=r[g].trim();if(!m){if(c.length>=2&&g+1<r.length&&/^#{1,6}\s*/.test(r[g+1].trim()))break;continue}if(/^[-=]{3,}$/.test(m))continue;const v=/^#{1,6}\s+/.test(m)||g+1<r.length&&/^[-=]{3,}$/.test(r[g+1].trim()),i=ie(m.replace(/^#{1,6}\s*/,""));if(v||t.test(i)){if(c.length)break;continue}if(/^!\[.*\]\(.*\)$/.test(m))continue;const l=/^([-*•▢☐□]|\[[ xX]?\]|\d+[.)])\s+/.test(m);if(o&&!l&&m.length>140)continue;const p=ie(m);if(p.length>=2&&p.length<=260&&!/^(US Customary|Metric|1x|2x|3x|Print|Pin|Jump to)/i.test(p)&&(c.push(p),c.length>=s))break}c.length>=d.length&&c.length>=2&&(d=c)}return d}const xa=/^(?:[-*•]\s+(?:[▢☐□✓]|\[[ xX]?\])\s*|\s*(?:[▢☐□✓]|\[[ xX]?\])\s+|[-*•]\s+(?:[¼½¾⅓⅔⅛]|\d+(?:[./]\d+)?)\s*(?:cups?|tbsp|tsp|tablespoons?|teaspoons?|oz|ounces?|lbs?\.?|g|kg|ml|cloves?|cans?|slices?|pinch|dash)\b)/i;function Sa(e){const n=String(e||"").split(/\n/),t=[];let o=[];for(let a=0;a<n.length;a++){const c=n[a].trim();if(xa.test(c)&&c.length<180)o.push({idx:a,text:ie(c).replace(/\s*\*+$/,"").replace(/\([^)]*\$\d[^)]*\)/g,"").trim()});else if(c)o.length>=2&&t.push(o),o=[];else continue}if(o.length>=2&&t.push(o),!t.length)return{ingredients:[],steps:[]};const s=t.reduce((a,c)=>c.length>a.length?c:a,[]),r=s[s.length-1].idx+1,u=[];let d=!1;for(let a=r;a<Math.min(n.length,r+45);a++){const c=n[a].trim();if(!c)continue;if(/^#{1,6}\s+/.test(c)&&/nutrition|notes|video|storage|reheat|more|related/i.test(c))break;if(!/^(?:[-*•]\s+|\d+[.)]\s+)/.test(c)){if(d&&!/^\[Video/i.test(c)&&!/^!\[/i.test(c))break;continue}d=!0;const m=ie(c).replace(/\s*\*+$/,"").trim();if(m.length>=10&&m.length<=280&&(u.push(m),u.length>=10))break}return{ingredients:s.map(a=>a.text).filter(Boolean).slice(0,18),steps:u}}function Ta(e,n={}){const t=String(e||"").replace(/WEBVTT/gi," ").replace(/\d{1,2}:\d{2}:\d{2}[.,]\d{3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[.,]\d{3}/g," ").replace(/\[?\b\d{1,2}:\d{2}(?::\d{2})?\b\]?/g," ").replace(/\r+/g,`
`).trim();if(!t)return{ingredients:[],steps:[],timeHint:""};const o=Sa(t),s=Ye(t,/^ingredients\b/i,/^(instructions|directions|steps|method|preparation|notes|nutrition|equipment|video|leave a|comments?|rate this)\b/i,{preferNumberedOrBulleted:!0,maxItems:18}),r=Ye(t,/^(instructions|directions|steps|method|preparation|how to make)\b/i,/^(notes|nutrition|equipment|video|leave a|comments?|rate this|more recipes|related)\b/i,{preferNumberedOrBulleted:!1,maxItems:10}),u=t.replace(/^\s*\d+\s*$/gm," ").trim(),d=u.toLowerCase(),a=Object.values(n||{}).map(l=>String((l==null?void 0:l.name)||"").trim()).filter(Boolean),c=[...new Set([...a,...$a])].sort((l,p)=>p.length-l.length);let g=s.length>=2?s:o.ingredients;if(!g.length){g=[];const l=new Set;for(const $ of c){const S=$.toLowerCase();if(S.length<3||l.has(S))continue;const C=S.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`\\b${C}s?\\b`,"i").test(d)&&(l.add(S),g.push($.replace(/\b\w/g,L=>L.toUpperCase())))}const p=/\b(?:\d+(?:\/\d+)?|half|a|one|two|three)\s+(?:cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|cloves?|cans?|slices?|handfuls?)\s+(?:of\s+)?([a-z][a-z\s-]{2,24}?)(?=[,.;!\n]|\band\b|\binto\b|\bto\b|$)/gi;let f;for(;(f=p.exec(u))!==null;){const $=f[1].trim(),S=$.toLowerCase();S.length>=3&&!l.has(S)&&!/^(water|heat|oil)$/i.test(S)&&(l.add(S),g.push($.replace(/\b\w/g,C=>C.toUpperCase())))}}let m=r.length>=2?r:o.steps;m.length||(m=u.split(/[\n.!?]+/).map(p=>p.replace(/^\s*(?:hey guys|welcome back|today we(?:'re| are)|subscribe|like and follow|don't forget to)[^,]*,?\s*/i,"").trim()).filter(p=>p.length>=12&&p.length<=180&&wa.test(p)).slice(0,6).map(p=>p.charAt(0).toUpperCase()+p.slice(1)+"."));const v=t.match(/(?:total time|cook time|prep time|ready in)?[:\s]*\b(\d{1,2})\s*(?:min|mins|minutes?)\b/i),i=v?`${v[1]} min`:"";return{ingredients:g.slice(0,16),steps:m,timeHint:i}}function yt(e){const n=String(e||"").trim();if(!n)return"";const t=n.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);return t?t[1]:""}function Ia(e="youtube"){_=e,G="",R="";const n=document.getElementById("modalRoot");n&&(n.innerHTML=`
    <div class="modal-card">
      <div class="row-between">
        <h2>+ Add Recipe</h2>
        <button type="button" class="btn small ghost" data-action="close-modal" aria-label="Close">✕</button>
      </div>
      <p class="sub">Ingredients automatically sync into your Master Grocery Catalog.</p>

      <div class="segmented" role="group" aria-label="Import method">
        <button type="button" data-action="add-mode" data-mode="youtube" aria-pressed="${_==="youtube"||_==="link"}">${y("video",15)} Link / Video</button>
        <button type="button" data-action="add-mode" data-mode="text" aria-pressed="${_==="text"}">${y("note",15)} Text / File</button>
      </div>

      <form id="addRecipeForm" data-form="save-recipe" style="display:grid;gap:14px">
        <div id="addUrlWrap" class="field" ${_==="text"?"hidden":""}>
          <div class="row-between">
            <label id="addUrlLabel" for="addUrlInput">Link (YouTube, IG, FB, Reddit, Blog)</label>
            <button type="button" id="autoFetchBtn" class="btn small">Auto-Fill</button>
          </div>
          <input id="addUrlInput" class="input" name="sourceUrl" type="url" placeholder="Paste YouTube, Instagram, Facebook, Reddit, or blog URL...">
        </div>

        <div id="addImgWrap" class="field" ${_==="youtube"?"hidden":""}>
          <label>Photo URL or Upload</label>
          <input id="addImageInput" class="input" name="imageUrl" type="url" placeholder="https://.../food-photo.jpg">
          <input id="addFileInput" type="file" accept="image/*" style="font-size:13px">
        </div>

        <div id="addPhotoPreview" class="hero-photo-wrap img-broken" style="max-height:140px" hidden>
          <img id="addPreviewImg" alt="Recipe preview">
          <span class="photo-fallback-em">${y("camera",34)}</span>
        </div>

        <div id="addThumbPicker" class="thumb-picker" hidden>
          <div class="row-between">
            <span class="sub" style="font-size:12px">Pick best food frame:</span>
            <button type="button" id="toggleCustomPhotoBtn" class="btn small">Upload photo</button>
          </div>
          <div id="addThumbGrid" class="thumb-picker-grid" role="group" aria-label="Choose video frame thumbnail"></div>
        </div>

        <div id="addTranscriptWrap" class="field">
          <div class="row-between" style="gap:6px;flex-wrap:wrap">
            <label for="addTranscriptInput">Transcript / Recipe Text</label>
            <div class="row" style="gap:6px">
              <label class="btn small" style="cursor:pointer;margin:0">
                Load .txt/.srt
                <input id="addTextFileInput" type="file" accept=".txt,.md,.srt,.vtt,text/plain" hidden>
              </label>
              <button type="button" id="pullTranscriptBtn" class="btn small">Pull Ingredients</button>
            </div>
          </div>
          <textarea id="addTranscriptInput" class="input" name="transcript" style="min-height:80px" placeholder="Auto-filled from Reddit/Blogs/YouTube when available, or paste captions / drop a .txt or .srt file..."></textarea>
          <span id="transcriptStatus" class="sub" style="font-size:12px">Paste any link above or drop text/transcript below to extract ingredients &amp; steps.</span>
        </div>

        <div class="field">
          <label for="addTitleInput">Title *</label>
          <input id="addTitleInput" class="input" name="title" required maxlength="80" placeholder="e.g. Spicy Mango Agua Fresca">
        </div>

        <div class="form-grid-2">
          <div class="field">
            <label>Category</label>
            <select class="input" name="kind">
              <option value="meal">Meal</option>
              <option value="comfort">Comfort Food</option>
              <option value="drink">Drink / Agua</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          <div class="field">
            <label>Effort Level</label>
            <select class="input" name="effort">
              ${Object.values(D).map(t=>`<option value="${t.id}">${h(t.short)}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="form-grid-3">
          <div class="field">
            <label>Time</label>
            <input id="addTimeInput" class="input" name="time" value="10 min" maxlength="30">
          </div>
          <div class="field">
            <label>Cost ($)</label>
            <input class="input" name="cost" type="number" step="0.1" min="0" value="2.50">
          </div>
          <div class="field">
            <label>Portions</label>
            <input class="input" name="portions" type="number" min="1" max="20" value="1">
          </div>
        </div>

        <div class="field">
          <label for="addIngredientsInput">Ingredients * (comma or line separated)</label>
          <textarea id="addIngredientsInput" class="input" name="ingredients" required placeholder="Chicken Breast, Rice, Jarred Salsa, Limes"></textarea>
        </div>

        <div class="field">
          <label for="addStepsInput">Steps (one per line)</label>
          <textarea id="addStepsInput" class="input" name="steps" placeholder="Dump everything into rice cooker.&#10;Press start and relax for 20 min."></textarea>
        </div>

        <button type="submit" class="btn primary block">Save Recipe &amp; Sync Catalog</button>
      </form>
    </div>
  `,n.hidden=!1,Ca())}function re(e){const n=document.getElementById("addPhotoPreview"),t=document.getElementById("addPreviewImg");!n||!t||(e?(n.hidden=!1,t.onload=()=>n.classList.remove("img-broken"),t.onerror=()=>n.classList.add("img-broken"),t.src=e):(n.hidden=!0,n.classList.add("img-broken"),t.removeAttribute("src")))}function Fe(e){const n=document.getElementById("addThumbPicker"),t=document.getElementById("addThumbGrid");if(!n||!t)return;if(!e){n.hidden=!0,t.innerHTML="",R="";return}const o=[{key:"hqdefault",label:"Cover",url:`https://i.ytimg.com/vi/${e}/hqdefault.jpg`},{key:"hq1",label:"25%",url:`https://i.ytimg.com/vi/${e}/hq1.jpg`},{key:"hq2",label:"50%",url:`https://i.ytimg.com/vi/${e}/hq2.jpg`},{key:"hq3",label:"75%",url:`https://i.ytimg.com/vi/${e}/hq3.jpg`}];(!R||!o.some(s=>s.url===R))&&(R=o[0].url),G||re(R),t.innerHTML=o.map(s=>`
    <button type="button" class="thumb-opt" data-thumb-url="${s.url}" aria-pressed="${!G&&R===s.url}">
      <img src="${s.url}" alt="${s.label} video frame" loading="lazy">
      <span>${s.label}</span>
    </button>
  `).join(""),n.hidden=!1,t.querySelectorAll(".thumb-opt").forEach(s=>{s.addEventListener("click",()=>{G="",R=s.dataset.thumbUrl||"",t.querySelectorAll(".thumb-opt").forEach(r=>{r.setAttribute("aria-pressed",String(r===s))}),re(R)})})}function Pa(e){_=e==="link"?"youtube":e;const n=document.getElementById("addUrlWrap"),t=document.getElementById("addImgWrap");document.querySelectorAll('[data-action="add-mode"]').forEach(o=>{o.setAttribute("aria-pressed",String(o.dataset.mode===_))}),_==="youtube"?(n.hidden=!1,t.hidden=!0):(n.hidden=!0,t.hidden=!1)}function le(e,{overwrite:n=!1}={}){const t=document.getElementById("addIngredientsInput"),o=document.getElementById("addStepsInput"),s=document.getElementById("addTimeInput"),r=document.getElementById("transcriptStatus");if(!t||!o)return;const{ingredients:u,steps:d,timeHint:a}=Ta(e,w().catalog);u.length&&(n||!t.value.trim())&&(t.value=u.join(", ")),d.length&&(n||!o.value.trim())&&(o.value=d.join(`
`)),a&&s&&(n||s.value==="10 min")&&(s.value=a),r&&(r.textContent=u.length||d.length?`Pulled ${u.length} ingredient${u.length===1?"":"s"} & ${d.length} step${d.length===1?"":"s"} ✓`:"No ingredients matched yet — add more cooking details or type them below.")}async function Ve(e){const n=String(e||"").trim();if(!n)return;const t=document.getElementById("addTitleInput");document.getElementById("addImageInput");const o=document.getElementById("addTranscriptInput"),s=document.getElementById("transcriptStatus"),r=d=>{s&&(s.textContent=d)},u=yt(n);if(u){if(Fe(u),r("Loading YouTube title & frames..."),t&&!t.value.trim())try{const d=await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${u}&format=json`,{signal:AbortSignal.timeout(7e3)});if(d.ok){const a=await d.json();a.title&&!t.value.trim()&&(t.value=String(a.title).slice(0,80))}}catch{}o&&!o.value.trim()&&r("Pick the best food frame above, and paste the transcript/description below (YouTube blocks auto-captions in browsers).");return}if(Fe(""),/(instagram\.com|instagr\.am|facebook\.com|fb\.watch)/i.test(n)){const d=document.getElementById("addImgWrap");d&&(d.hidden=!1),r("Instagram/Facebook blocks direct browser fetch — paste the Reel caption/transcript or load a .txt/.srt file below.");return}if(/^https?:\/\/(?:www\.|old\.|new\.)?reddit\.com\/r\//i.test(n)){r("Fetching Reddit post & recipe text...");try{const d=await fetch(`https://r.jina.ai/${n}`,{signal:AbortSignal.timeout(9e3)});if(d.ok){const a=await d.text(),c=a.match(/^Title:\s*(.+)$/m);t&&c&&!t.value.trim()&&(t.value=c[1].replace(/\s*:\s*r\/\w+.*$/,"").trim().slice(0,80));const g=a.replace(/^Title:.*$/m,"").replace(/^URL Source:.*$/m,"").replace(/^Markdown Content:\s*/m,"").trim();if(g.length>80&&!/whoa there, pardner|blocked|just a moment/i.test(g.slice(0,400))){o&&(o.value=g.slice(0,8e3)),le(g,{overwrite:!1});return}}}catch{}r("Reddit blocked automated fetch — copy & paste the post recipe text or load a .txt file below.");return}if(/^https?:\/\//i.test(n)){r("Reading blog / recipe page...");try{const d=await fetch(`https://r.jina.ai/${n}`,{signal:AbortSignal.timeout(9e3)});if(d.ok){const a=await d.text(),c=a.match(/^Title:\s*(.+)$/m)||a.match(/^#\s+(.+)$/m);t&&c&&!t.value.trim()&&(t.value=c[1].trim().slice(0,80));const g=a.replace(/^Title:.*$/m,"").replace(/^URL Source:.*$/m,"").replace(/^Markdown Content:\s*/m,"").trim();if(g&&o){const m=g.toLowerCase().lastIndexOf("ingredients");o.value=m>400?g.slice(Math.max(0,m-120),m+7880):g.slice(0,8e3),le(g,{overwrite:!1});return}}}catch{}r("Could not auto-read that link — paste the recipe text or load a .txt file below.")}}function Ca(){const e=document.getElementById("addUrlInput"),n=document.getElementById("autoFetchBtn"),t=document.getElementById("addImageInput"),o=document.getElementById("addFileInput"),s=document.getElementById("addTextFileInput"),r=document.getElementById("addTranscriptInput"),u=document.getElementById("pullTranscriptBtn");u==null||u.addEventListener("click",()=>{le((r==null?void 0:r.value)||"",{overwrite:!0})}),r==null||r.addEventListener("paste",()=>{setTimeout(()=>le(r.value,{overwrite:!1}),20)}),s==null||s.addEventListener("change",g=>{var i;const m=(i=g.target.files)==null?void 0:i[0];if(!m)return;const v=new FileReader;v.onload=()=>{const l=String(v.result||"");r&&(r.value=l),le(l,{overwrite:!0})},v.readAsText(m)});const d=document.getElementById("toggleCustomPhotoBtn"),a=document.getElementById("addImgWrap");d==null||d.addEventListener("click",()=>{a&&(a.hidden=!a.hidden)}),n==null||n.addEventListener("click",()=>{Ve(e==null?void 0:e.value)});let c=0;e==null||e.addEventListener("input",()=>{clearTimeout(c);const g=e.value.trim();if(!g){Fe(""),re("");return}c=setTimeout(()=>Ve(g),450)}),t==null||t.addEventListener("input",()=>{G="",R="",re(t.value.trim())}),o==null||o.addEventListener("change",g=>{var i;const m=(i=g.target.files)==null?void 0:i[0];if(!m)return;const v=new FileReader;v.onload=()=>{const l=new Image;l.onload=()=>{const f=Math.min(1,640/l.width),$=document.createElement("canvas");$.width=Math.round(l.width*f),$.height=Math.round(l.height*f),$.getContext("2d").drawImage(l,0,0,$.width,$.height),G=$.toDataURL("image/jpeg",.78),re(G)},l.src=String(v.result)},v.readAsDataURL(m)})}function La(){return G||R}function z(){const e=document.getElementById("modalRoot");e&&(e.hidden=!0,e.innerHTML="")}function ae(e){const n=document.getElementById("modalRoot");if(!n)return;const t=Z(e),o=e.schedule||{},s=e.userProfile||{name:"Guillermo Areas",handle:"@areasmina",city:"London, ON",roots:"El Salvador & Canada"},r=e.recipes.filter(a=>a.source==="instagram").length,u=e.recipes.length-r;n.innerHTML=`
    <div class="modal-card">
      <div class="row-between">
        <h2>Budget &amp; Settings</h2>
        <button type="button" class="btn small ghost" data-action="close-modal">✕</button>
      </div>

      <article class="card highlight" style="padding:12px">
        <div class="row" style="gap:10px;align-items:center">
          ${y("panda",22)}
          <div>
            <strong>${h(s.name)} (${h(s.handle)})</strong>
            <p class="sub" style="margin:2px 0 0">${h(s.city)} · ${h(s.roots)} roots</p>
          </div>
        </div>
        <p class="sub" style="margin:6px 0 0">${r} Instagram Saved Food Reels + ${u} YouTube Recipes = <b>${e.recipes.length} Recipes</b></p>
      </article>

      <article class="card" style="padding:12px">
        <div class="row-between">
          <span>Month spent: <b>${x(je(e))}</b></span>
          <span>Cap: <b>${x(e.budget.monthlyCap)}</b></span>
        </div>
        <div class="row-between">
          <span>This week grocery: <b>${x(dt(e))}</b></span>
          <span>Treat left: <b>${x(Math.max(0,t.left))}</b></span>
        </div>
      </article>

      <form data-form="save-budget" style="display:grid;gap:10px">
        <div class="field">
          <label>Monthly Food Budget ($)</label>
          <input class="input" name="monthlyCap" type="number" min="50" max="5000" value="${e.budget.monthlyCap}">
        </div>
        <div class="row">
          <div class="field" style="flex:1">
            <label>Weekly Grocery Goal ($)</label>
            <input class="input" name="weeklyGrocery" type="number" min="15" max="1000" value="${e.budget.weeklyGrocery}">
          </div>
          <div class="field" style="flex:1">
            <label>Monthly Treat / Takeout Pot ($)</label>
            <input class="input" name="monthlyTreatPot" type="number" min="0" max="1000" value="${e.budget.monthlyTreatPot}">
          </div>
        </div>
        <button type="submit" class="btn primary block">Save Budget</button>
      </form>

      <form data-form="save-schedule" style="display:grid;gap:10px;border-top:1px solid var(--line);padding-top:12px">
        <div>
          <strong>${y("timer",16)} My Times &amp; Phone Calendar (.ics)</strong>
          <p class="sub" style="margin:2px 0 0">Meal times power live nudges on Eat and export to your phone calendar.</p>
        </div>
        <div class="row" style="gap:8px;flex-wrap:wrap">
          <div class="field" style="flex:1;min-width:95px">
            <label>Wake-up</label>
            <input class="input" name="wake" type="time" value="${h(o.wake||"07:00")}">
          </div>
          <div class="field" style="flex:1;min-width:95px">
            <label>Breakfast</label>
            <input class="input" name="breakfast" type="time" value="${h(o.breakfast||"08:00")}">
          </div>
          <div class="field" style="flex:1;min-width:95px">
            <label>Lunch</label>
            <input class="input" name="lunch" type="time" value="${h(o.lunch||"12:30")}">
          </div>
          <div class="field" style="flex:1;min-width:95px">
            <label>Dinner</label>
            <input class="input" name="dinner" type="time" value="${h(o.dinner||"18:00")}">
          </div>
        </div>
        <div class="field">
          <label>Work or shift hours (optional)</label>
          <input class="input" name="shift" maxlength="60" value="${h(o.shift||"")}" placeholder="e.g. Mon to Fri, 9am to 5pm">
        </div>
        <div class="row" style="gap:8px">
          <div class="field" style="flex:1">
            <label>Grocery Day</label>
            <select class="input" name="groceryDay">
              ${K.map(a=>`<option value="${a}" ${(o.groceryDay||"Sunday")===a?"selected":""}>${a}</option>`).join("")}
            </select>
          </div>
          <div class="field" style="flex:1">
            <label>Grocery Time</label>
            <input class="input" name="groceryTime" type="time" value="${h(o.groceryTime||"17:00")}">
          </div>
        </div>
        <div class="row" style="gap:8px;flex-wrap:wrap">
          <button type="submit" class="btn primary small" style="flex:1">Save My Times</button>
          <button type="button" class="btn small" style="flex:1" data-action="ics-export">${y("export",15)} Add Reminders to My Calendar (.ics)</button>
        </div>
      </form>

      <div class="row-between" style="border-top:1px solid var(--line);padding-top:12px;gap:8px;flex-wrap:wrap">
        <div>
          <span><b>Simple Mode</b></span>
          <p class="sub" style="margin:2px 0 0">Hides budget dollar amounts on Eat &amp; top bar.</p>
        </div>
        <button type="button" class="chip" data-action="toggle-simple-mode" aria-pressed="${!!e.simpleMode}">
          ${e.simpleMode?"✓ Simple Mode ON":"Simple Mode OFF"}
        </button>
      </div>

      <div class="row-between" style="border-top:1px solid var(--line);padding-top:12px">
        <span><b>5-Step Walkthrough &amp; Family</b></span>
        <div class="row" style="gap:6px">
          <button type="button" class="btn small" data-action="open-family">${y("heart",14)} Family Profiles</button>
          <button type="button" class="btn small" data-action="meet-bao">${y("panda",15)} Meet Bao Tour</button>
        </div>
      </div>

      <div class="row-between" style="border-top:1px solid var(--line);padding-top:12px">
        <span><b>Appearance</b></span>
        <div class="segmented" style="width:170px">
          <button type="button" data-action="set-theme" data-theme="dark" aria-pressed="${e.theme==="dark"}">${y("moon",15)} Dark</button>
          <button type="button" data-action="set-theme" data-theme="light" aria-pressed="${e.theme==="light"}">${y("sun",15)} Light</button>
        </div>
      </div>

      <div class="row" style="border-top:1px solid var(--line);padding-top:12px">
        <button type="button" class="btn small" style="flex:1" data-action="export-backup">${y("export",15)} Export JSON</button>
        <label class="btn small" style="flex:1;cursor:pointer">
          ${y("import",15)} Import JSON
          <input id="importJsonInput" type="file" accept="application/json" hidden>
        </label>
      </div>

      ${(e.spends||[]).length?`
        <details style="border-top:1px solid var(--line);padding-top:10px">
          <summary style="cursor:pointer;font-weight:700">Recent Expenses (${e.spends.length})</summary>
          <div style="margin-top:8px;max-height:160px;overflow-y:auto">
            ${e.spends.slice(-10).reverse().map(a=>`
              <div class="row-between" style="padding:4px 0;font-size:14px">
                <span>${h(a.label)} (${a.category})</span>
                <div class="row" style="gap:6px">
                  <b>${x(a.amount)}</b>
                  <button type="button" class="btn small ghost" data-action="del-spend" data-id="${h(a.id)}">×</button>
                </div>
              </div>
            `).join("")}
          </div>
        </details>
      `:""}

      <button type="button" class="btn small danger" data-action="reset-app">Reset App Data</button>
    </div>
  `,n.hidden=!1;const d=document.getElementById("importJsonInput");d==null||d.addEventListener("change",a=>{var m;const c=(m=a.target.files)==null?void 0:m[0];if(!c)return;const g=new FileReader;g.onload=()=>{window.dispatchEvent(new CustomEvent("mealcheat:import",{detail:String(g.result)}))},g.readAsText(c)})}const Qe=["Meet Bao & the Bistro Crew","Pick tonight's meal","Meals grow your bamboo","Dress up in Modular 3D","Play in the Bamboo Garden"],Ea=["Hi, I'm Bao! Switch anytime between Bao, Brioche, Boba, and Mochi in your bamboo garden or the Eat screen.","Tap your energy level on Eat and turn on Fridge-Ready Only to see only meals you can make right now without shopping.","Log Breakfast, Lunch, or Dinner as you eat them. Every home-cooked meal grows a bamboo shoot in your garden!","3 full meal days unlock new hats, aprons, eyewear, and drinks — tap items in Garden to snap them onto your 3D panda.","In the Garden you can water the bamboo (5 splashes = +1 shoot!), feed bamboo treats, orbit in 3D, or toggle Ink Outlines!"];function Pe(e){const n=document.getElementById("modalRoot");if(!n)return;const t=Math.min(4,Math.max(0,Number(e.introStep)||0)),o=t===4;n.innerHTML=`
    <div class="modal-card" style="text-align:center">
      <div class="row-between">
        <span class="tag ok">Step ${t+1} of 5</span>
        <button type="button" class="btn small ghost" data-action="intro-skip">Skip tour ✕</button>
      </div>
      <div style="display:grid;place-items:center;padding:8px 0">
        ${y("panda",64,Qe[t])}
      </div>
      <h2 style="margin:4px 0">${h(Qe[t])}</h2>
      <p class="sub" style="margin:0 0 10px;line-height:1.5">${h(Ea[t])}</p>
      <div class="row" style="justify-content:center;gap:6px;margin-bottom:8px">
        ${[0,1,2,3,4].map(s=>`<span style="width:8px;height:8px;border-radius:50%;background:${s===t?"var(--accent)":"var(--line)"}"></span>`).join("")}
      </div>
      <div class="row" style="gap:8px">
        ${t>0?'<button type="button" class="btn small" style="flex:1" data-action="intro-back">Back</button>':""}
        <button type="button" class="btn primary small" style="flex:2" data-action="intro-next">${o?"Set My Times →":"Next →"}</button>
      </div>
    </div>
  `,n.hidden=!1}function ne(e){const n=document.getElementById("modalRoot");if(!n)return;const t=e.profiles||[],o=xe(e);n.innerHTML=`
    <div class="modal-card">
      <div class="row-between">
        <h2>${y("heart",20)} Who's Eating? (Family)</h2>
        <button type="button" class="btn small ghost" data-action="close-modal">✕</button>
      </div>
      <p class="sub">Each person gets their own accent color, text size, Simple Mode, and <b>Foods to avoid</b> filter.</p>

      <div class="chips" role="group" aria-label="Switch person">
        ${t.map(s=>`
          <button type="button" class="chip" data-action="who-pick" data-id="${h(s.id)}" aria-pressed="${s.id===o.id}">
            <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${Q[s.color]||Q.green};margin-right:4px"></span>
            ${h(s.name)}
          </button>
        `).join("")}
        ${t.length<8?'<button type="button" class="chip" data-action="person-add">+ Add Person</button>':""}
      </div>

      <article class="card highlight" style="padding:12px;display:grid;gap:10px">
        <div class="row-between">
          <strong>Editing: ${h(o.name)}</strong>
          ${t.length>1?`<button type="button" class="btn small danger" data-action="person-del" data-id="${h(o.id)}">Remove</button>`:""}
        </div>
        <div class="field">
          <label>Name</label>
          <input class="input" data-input="pf-name" maxlength="20" value="${h(o.name)}">
        </div>
        <div>
          <label class="sub">Accent Color</label>
          <div class="chips" style="margin-top:4px">
            ${Object.entries(Q).map(([s,r])=>`
              <button type="button" class="chip" data-action="pf-color" data-v="${s}" aria-pressed="${o.color===s}">
                <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${r};margin-right:4px"></span>${s}
              </button>
            `).join("")}
          </div>
        </div>
        <div>
          <label class="sub">Text Size</label>
          <div class="chips" style="margin-top:4px">
            ${Object.entries(pt).map(([s,r])=>`
              <button type="button" class="chip" data-action="pf-text" data-v="${s}" aria-pressed="${(o.textSize||"normal")===s}">${r.label}</button>
            `).join("")}
          </div>
        </div>
        <div class="row-between">
          <span class="sub">Simple Mode for ${h(o.name)}</span>
          <button type="button" class="chip" data-action="pf-simple" aria-pressed="${!!o.simpleMode}">
            ${o.simpleMode?"✓ Simple ON":"Simple OFF"}
          </button>
        </div>
        <div>
          <label class="sub">Foods to Avoid (filters Eat, Explore &amp; Plan)</label>
          <div class="chips" style="margin-top:4px">
            ${Object.entries(ut).map(([s,r])=>`
              <button type="button" class="chip" data-action="pf-avoid" data-v="${s}" aria-pressed="${(o.avoid||[]).includes(s)}">
                ${h(r.label)}
              </button>
            `).join("")}
          </div>
        </div>
      </article>
    </div>
  `,n.hidden=!1}function be(e){const n=document.getElementById("modalRoot");if(!n)return;const t=bt(e),o=qe(e);n.innerHTML=`
    <div class="modal-card">
      <div class="row-between">
        <h2>${y("catalog",20)} My ${e.planDays===7?"7-Day":"4-Day"} Meal Plan</h2>
        <button type="button" class="btn small ghost" data-action="close-modal">✕</button>
      </div>

      <div class="row-between" style="gap:8px;flex-wrap:wrap">
        <div class="segmented" style="width:210px">
          <button type="button" data-action="plan-days" data-v="4" aria-pressed="${e.planDays!==7}">4 Days</button>
          <button type="button" data-action="plan-days" data-v="7" aria-pressed="${e.planDays===7}">7 Days</button>
        </div>
        <button type="button" class="btn small primary" data-action="plan-to-shop">${y("cart",14)} Add Missing to Shop</button>
      </div>

      <p class="sub" style="margin:0">Estimated home food: <b>${x(t.groceriesEst)}</b> · Planned takeout: <b>${x(t.treatsEst)}</b></p>

      <div style="display:grid;gap:10px;max-height:50vh;overflow-y:auto;padding-right:2px">
        ${t.days.map((s,r)=>`
          <article class="card" style="padding:12px">
            <div class="row-between">
              <strong>${r===0?"Today":r===1?"Tomorrow":h(s.dayName)}</strong>
              <span class="tag">${h(s.type)}</span>
            </div>
            ${s.meals.map(u=>`
              <div class="row-between" style="border-top:1px solid var(--line);padding-top:6px;margin-top:6px;gap:6px">
                <div style="min-width:0;flex:1">
                  <small class="sub">${u.slot}${r===0&&u.slot.toLowerCase()===o.nowSlotId?" · now":""}</small>
                  <div style="font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
                    ${u.takeout?`${h(u.takeout.name)} (${x(u.takeout.price)})`:u.recipe?`<button type="button" class="btn small ghost" style="padding:0;min-height:auto;text-align:left" data-action="open-cook" data-id="${h(u.recipe.id)}">${h(u.recipe.title)}</button>`:"Flexible meal"}
                  </div>
                </div>
                <button type="button" class="btn small" data-action="plan-swap" data-key="${h(u.key)}" aria-label="Swap ${h(u.slot)}">↻</button>
              </div>
            `).join("")}
          </article>
        `).join("")}
      </div>

      <details style="border-top:1px solid var(--line);padding-top:8px">
        <summary style="cursor:pointer;font-weight:700">Edit Weekly Pattern (Mon–Sun)</summary>
        <div style="display:grid;gap:6px;margin-top:8px">
          ${(e.weekPlan||[]).map((s,r)=>`
            <div class="row-between">
              <span>${h(s.day)}</span>
              <select class="input" style="width:auto;min-height:34px;padding:4px 8px" data-action="week-day-type" data-idx="${r}">
                ${Yt.map(u=>`<option value="${h(u)}" ${s.type===u?"selected":""}>${h(u)}</option>`).join("")}
              </select>
            </div>
          `).join("")}
        </div>
      </details>
    </div>
  `,n.hidden=!1}let Ce=null,B=null;function Da(){return Ce||(Ce=Ot(()=>import("./garden-3d-D2yEDBfV.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>(B=e,e))),Ce}const j=()=>{var e;return((e=B==null?void 0:B.getActiveGarden)==null?void 0:e.call(B))||null},Ma=()=>{var e;return(e=B==null?void 0:B.disposeGardenDiorama)==null?void 0:e.call(B)};function oe(e){const n=document.getElementById("gardenFxLayer");if(!n)return;const t=document.createElement("span");t.className="garden-fx-pop",t.style.left=`${44+Math.random()*12}%`,t.textContent=e,n.appendChild(t),setTimeout(()=>t.remove(),1100)}let Je=null;function I(e){const n=document.getElementById("toast");n&&(n.textContent=e,n.hidden=!1,clearTimeout(Je),Je=setTimeout(()=>{n.hidden=!0},2600))}function Aa(e){document.documentElement.setAttribute("data-theme",e==="light"?"light":"dark");const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e==="light"?"#f6f7f9":"#0e1116")}function Ra(e){var d;const n=xe(e),t=Q[n.color]||Q.green;document.documentElement.style.setProperty("--accent",t),document.body.style.zoom=((d=pt[n.textSize])==null?void 0:d.zoom)||"";const o=document.getElementById("whoBtn");if(o){const a=/^#[0-9a-fA-F]{3,8}$/.test(t)?t:"#3ddc97";o.innerHTML=`<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${a};margin-right:4px"></span>${h(n.name)}`}const s=document.getElementById("petChip");if(s){const a=F.find(c=>c.id===e.pandaStyle)||F[0];s.innerHTML=`${y("bamboo",14)} ${h(a.name)} · ${e.gardenShoots||0}`}const r=document.getElementById("budgetPill");if(!r)return;r.hidden=mt(e);const u=e.budget.monthlyCap-je(e);r.textContent=u<0?`${x(Math.abs(u))} over`:`${x(u)} left`,r.classList.remove("tight","over"),u<0?r.classList.add("over"):u<e.budget.monthlyCap*.2&&r.classList.add("tight"),document.querySelectorAll(".tabbar button").forEach(a=>{a.dataset.tab===e.activeTab?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")})}let Le=null;function E(e,{preserveThree:n=!1}={}){var d;Aa(e.theme),Ra(e);const t=document.getElementById("view");if(!t)return;const o=document.activeElement,s=o==null?void 0:o.id,r=(d=o==null?void 0:o.dataset)==null?void 0:d.input,u=typeof(o==null?void 0:o.selectionStart)=="number"?o.selectionStart:null;if((!n||Le!==e.activeTab)&&Ma(),e.activeTab==="eat")t.innerHTML=Zt(e);else if(e.activeTab==="recipes")t.innerHTML=aa(e);else if(e.activeTab==="shop")t.innerHTML=la(e);else if(e.activeTab==="explore"||e.activeTab==="club")t.innerHTML=ca(e);else if(e.activeTab==="garden")if(n&&Le==="garden"&&document.getElementById("gardenDiorama")){const a=document.createElement("div");a.innerHTML=Ue(e);const c=document.getElementById("gardenDiorama"),g=t.querySelector(".screen"),m=a.querySelector(".screen");if(g&&m&&c){const v=c.parentElement,i=v==null?void 0:v.querySelector(".garden-overlay-ui"),l=m.querySelector(".garden-overlay-ui");i&&l&&i.replaceWith(l)}}else{t.innerHTML=Ue(e);const a=document.getElementById("gardenDiorama");Da().then(({mountGardenDiorama:c})=>{if(w().activeTab!=="garden"||!document.body.contains(a))return;const g=w();c(a,{pandaStyle:g.pandaStyle,equippedAcc:g.equippedAcc,shoots:g.gardenShoots,placedProps:g.placedProps,gardenView:g.gardenView,gardenLineup:g.gardenLineup,gardenTurntable:g.gardenTurntable,pandaOutlines:g.pandaOutlines,onTapPanda:()=>{const m=["Hehe! Happy hop! (+1% Bond)","Breeze feels so cozy in the grove!","Ready for our next home meal together!","Water the bamboo below to grow +1 shoot!"],v=m[Math.floor(Math.random()*m.length)];k(i=>({...i,pandaBond:Math.min(100,(i.pandaBond||65)+1),gardenSay:v}),{notify:!1}),oe("+1% Bond ♥"),E(w(),{preserveThree:!0})}})})}if(Le=e.activeTab,requestAnimationFrame(()=>ze(document)),s||r){const a=s?document.getElementById(s):document.querySelector(`[data-input="${r}"]`);if(a&&(a.focus(),u!==null&&a.setSelectionRange))try{a.setSelectionRange(u,u)}catch{}}}function Ba(e){k(n=>{const t=M(),o=n.dayLog[t]||{meals:{b:!1,l:!1,d:!1},drinks:0,snacks:0,cooked:[],takeoutCount:0},s=H(o),r=!!o.meals[e],u={...o.meals,[e]:!r},d={...n.dayLog,[t]:{...o,meals:u}},a=H(d[t]),c=r?-1:1,g=Math.max(0,(n.gardenShoots||0)+c);return s<3&&a===3&&I("All 3 meals eaten today! Full day unlocked."),{...n,dayLog:d,gardenShoots:g,cheerUntil:r?n.cheerUntil:Date.now()+3500}})}document.addEventListener("click",e=>{var r,u,d,a,c,g,m,v;const n=e.target.closest("[data-tab]");if(n){k(i=>({...i,activeTab:n.dataset.tab})),window.scrollTo({top:0,behavior:"smooth"});return}const t=e.target.closest("[data-action]");if(!t){e.target.id==="modalRoot"&&z();return}const o=t.dataset.action,s=w();switch(o){case"eat-kind":k(i=>({...i,eatKind:t.dataset.kind,pickIndex:0}));break;case"eat-slot":k(i=>({...i,eatSlot:t.dataset.slot,pickIndex:0}));break;case"set-energy":k(i=>({...i,energy:t.dataset.energy,pickIndex:0}));break;case"next-pick":k(i=>({...i,pickIndex:i.pickIndex+1}));break;case"prev-pick":k(i=>({...i,pickIndex:Math.max(0,(i.pickIndex||0)-1+987)}));break;case"shuffle-pick":k(i=>({...i,pickIndex:(i.pickIndex||0)+Math.floor(Math.random()*17)+2}));break;case"select-pick":k(i=>({...i,pickIndex:Number(t.dataset.idx)||0}));break;case"toggle-eat-fridge-only":k(i=>({...i,eatFridgeOnly:i.eatFridgeOnly===!1,pickIndex:0}));break;case"go-shop-plan":k(i=>({...i,activeTab:"shop",shopSubTab:"trip"})),window.scrollTo({top:0,behavior:"smooth"});break;case"toggle-slot":t.dataset.slot&&k(i=>({...i,eatSlot:t.dataset.slot,pickIndex:0}),!1),Ba(t.dataset.slotKey);break;case"toggle-recipe-filters":k(i=>({...i,recipeFiltersOpen:!i.recipeFiltersOpen}));break;case"reset-recipe-filters":k(i=>({...i,recipeSourceFilter:"all",recipeKindFilter:"all",recipeEffortFilter:"all",recipesLimit:60}));break;case"quick-spend":{const i=Number(t.dataset.amt)||0,l=t.dataset.cat||"grocery",p=t.dataset.label||"Food spend";if(i<=0)break;k(f=>({...f,spends:[...f.spends,{id:"sp_"+Date.now(),label:p,amount:i,category:l,ts:Date.now()}]})),I(`Logged ${x(i)} (${p})`);break}case"del-spend":k(i=>({...i,spends:i.spends.filter(l=>l.id!==t.dataset.id)})),ae(w());break;case"toggle-perishable":k(i=>({...i,perishables:(i.perishables||[]).map(l=>l.id===t.dataset.id?{...l,eaten:!l.eaten}:l)}));break;case"del-perishable":k(i=>({...i,perishables:(i.perishables||[]).filter(l=>l.id!==t.dataset.id)}));break;case"go-takeout":k(i=>({...i,activeTab:"recipes",recipesSubTab:"takeout"}));break;case"recipes-sub":k(i=>({...i,recipesSubTab:t.dataset.sub}));break;case"filter-source":k(i=>({...i,recipeSourceFilter:t.dataset.v||"all",recipesLimit:60}));break;case"more-recipes":k(i=>({...i,recipesLimit:(i.recipesLimit||60)+60}));break;case"filter-kind":k(i=>({...i,recipeKindFilter:t.dataset.v,recipesLimit:60}));break;case"filter-effort":k(i=>({...i,recipeEffortFilter:t.dataset.v,recipesLimit:60}));break;case"toggle-can-make":k(i=>({...i,recipeCanMakeOnly:!i.recipeCanMakeOnly,recipesLimit:60}));break;case"toggle-match-fridge":k(i=>({...i,recipeMatchMyFridge:!i.recipeMatchMyFridge,recipesLimit:60}));break;case"open-cook":{const i=s.recipes.find(l=>l.id===t.dataset.id);i&&(ht(i,s),k(l=>({...l,cookProgress:ft(i)})));break}case"close-cook":Ie(),k(i=>({...i,cookProgress:null}));break;case"toggle-step":{const i=va(Number(t.dataset.idx),s);k(l=>({...l,cookProgress:i}));break}case"start-cook-timer":ya(Number(t.dataset.min)),I(`Timer started for ${t.dataset.min} min`);break;case"stop-cook-timer":ka();break;case"add-missing-to-trip":{const i=s.recipes.find(l=>l.id===t.dataset.id);if(!i)break;k(l=>{const p=new Set(l.customRecipeIds||[]);return p.add(i.id),{...l,shopMood:"custom",customRecipeIds:Array.from(p)}}),I(`Added "${i.title}" missing items to Shop → Custom Pick!`);break}case"complete-recipe":case"complete-and-post":{const i=s.recipes.find(l=>l.id===t.dataset.id);if(!i)break;Ie(),k(l=>{var O;const p=M(),f=l.dayLog[p]||{meals:{b:!1,l:!1,d:!1},drinks:0,snacks:0,cooked:[],takeoutCount:0};let $={...f.meals},S=l.fridgeMeals,C=l.fridgeDrinks,T=l.gardenShoots;if(i.kind==="meal"||i.kind==="comfort"){const N=((O=X.find(A=>A.id===l.eatSlot))==null?void 0:O.key)||"d";$[N]||($[N]=!0,T+=1),i.portions>1&&(S+=i.portions-1)}else i.kind==="drink"?(f.drinks=(f.drinks||0)+1,i.portions>1&&(C+=i.portions),T+=1):f.snacks=(f.snacks||0)+1;const L={...l.dayLog,[p]:{...f,meals:$,cooked:[...f.cooked||[],i.id].slice(-20)}};return{...l,cookProgress:null,dayLog:L,fridgeMeals:S,fridgeDrinks:C,gardenShoots:T,pandaBond:Math.min(100,(l.pandaBond||0)+8),cheerUntil:Date.now()+4e3}}),I(`Logged ${i.title}! Bamboo garden grew (+1 shoot).`);break}case"delete-recipe":{const i=t.dataset.id;Ie(),k(l=>({...l,recipes:l.recipes.filter(p=>p.id!==i)})),I("Recipe deleted & Master Catalog updated.");break}case"open-add-recipe":Ia("youtube");break;case"add-mode":Pa(t.dataset.mode);break;case"open-settings":ae(s);break;case"close-modal":z();break;case"set-theme":k(i=>({...i,theme:t.dataset.theme})),ae(w());break;case"toggle-simple-mode":{const i=!w().simpleMode;k(l=>({...l,simpleMode:i})),ae(w()),I(i?"Simple Mode ON — budget numbers hidden on Eat.":"Simple Mode OFF — full budget view active.");break}case"meet-bao":k(i=>({...i,introStep:0}),{notify:!1}),Pe(w());break;case"intro-next":{const i=Number(w().introStep)||0;i<4?(k(l=>({...l,introStep:i+1}),{notify:!1}),Pe(w())):(k(l=>({...l,introStep:0}),{notify:!1}),ae(w()));break}case"intro-back":{const i=Math.max(0,(Number(w().introStep)||0)-1);k(l=>({...l,introStep:i}),{notify:!1}),Pe(w());break}case"intro-skip":k(i=>({...i,introStep:0}),{notify:!1}),z();break;case"ics-export":{const i=Kt(w()),l=new Blob([i],{type:"text/calendar;charset=utf-8"}),p=URL.createObjectURL(l),f=document.createElement("a");f.href=p,f.download="meal-cheat-reminders.ics",document.body.appendChild(f),f.click(),f.remove(),setTimeout(()=>URL.revokeObjectURL(p),1e3),I("Calendar file ready! Open it to add reminders.");break}case"go-garden":k(i=>({...i,activeTab:"garden"})),window.scrollTo({top:0,behavior:"smooth"});break;case"water-garden":{const i=(Number(w().gardenWater)||0)+1;if(i>=5){const l=(w().gardenShoots||0)+1;k(f=>({...f,gardenWater:0,gardenShoots:l,pandaBond:Math.min(100,(f.pandaBond||0)+5),gardenSay:"The bamboo drank up! New shoot sprouted! (+1 shoot)"}),{notify:!1});const p=j();(r=p==null?void 0:p.updateShoots)==null||r.call(p,l),(u=p==null?void 0:p.poke)==null||u.call(p),oe("+1 Shoot! 🌱"),I("Bamboo watered! +1 shoot grown in your garden.")}else k(l=>({...l,gardenWater:i,gardenSay:`Dew ${i}/5! ${5-i} more splash${5-i===1?"":"es"} to sprout a shoot!`}),{notify:!1}),oe(`💧 ${i}/5`);E(w(),{preserveThree:w().activeTab==="garden"});break}case"garden-feed":{const i=t.dataset.food||"bamboo",l={bamboo:{bond:3,fx:"+3% Bond 🎋",msg:"Crunch! Fresh bamboo shoots are the best!"},apple:{bond:2,fx:"+2% Bond 🍎",msg:"Yum! Sweet crisp apple slice!"},carrot:{bond:2,fx:"+2% Bond 🥕",msg:"Crunchy garden carrot! Thank you!"}},p=l[i]||l.bamboo;k(f=>({...f,pandaBond:Math.min(100,(f.pandaBond||0)+p.bond),gardenSay:p.msg}),{notify:!1}),(a=(d=j())==null?void 0:d.poke)==null||a.call(d),oe(p.fx),E(w(),{preserveThree:w().activeTab==="garden"});break}case"buy-takeout":{const i=s.takeout.find(l=>l.id===t.dataset.id);if(!i)break;k(l=>{var C;const p=M(),f=l.dayLog[p]||{meals:{b:!1,l:!1,d:!1},drinks:0,snacks:0,cooked:[],takeoutCount:0},$=((C=X.find(T=>T.id===l.eatSlot))==null?void 0:C.key)||"d",S={...f.meals,[$]:!0};return{...l,spends:[...l.spends,{id:"sp_"+Date.now(),label:i.name,amount:i.price,category:"treat",kind:i.kind,serves:i.serves,ts:Date.now()}],dayLog:{...l.dayLog,[p]:{...f,meals:S,takeoutCount:(f.takeoutCount||0)+1}}}}),I(`Enjoy ${i.name}! Logged to your weekly takeout plan.`);break}case"set-shop-day":{const i=t.dataset.day;k(l=>({...l,schedule:{...l.schedule||{},groceryDay:i},grocerySchedule:{...l.grocerySchedule||{},shopDay:i}})),I(`Grocery day reminder set to ${i}.`);break}case"lock-weekly-list":{const i=ue(s.shopMood,s.recipes,s.catalog,s.customRecipeIds);k(l=>({...l,grocerySchedule:{...l.grocerySchedule||{},lockedWeek:he(),listLocked:!0}})),I(`Weekly list locked (${i.items.length} items · ${x(i.estimatedTotal)}) for ${((c=s.grocerySchedule)==null?void 0:c.shopDay)||"Sunday"}!`);break}case"stock-all-trip":{const i=ue(s.shopMood,s.recipes,s.catalog,s.customRecipeIds);let l=0,p=0;k(f=>{const $={...f.catalog};for(const T of i.items)$[T.id]&&($[T.id]={...$[T.id],inKitchen:!0},l+=Number($[T.id].price)||0);const S=[];for(const T of f.shopCustomItems)l+=Number(T.price)||0;const C=l>0?[...f.spends,{id:"sp_"+Date.now(),label:"Weekly grocery stock-up",amount:Math.round(l*100)/100,category:"grocery",ts:Date.now()}]:f.spends;return p=f.recipes.filter(T=>q(T,$).ready).length,{...f,catalog:$,shopChecked:[],shopCustomItems:S,spends:C,grocerySchedule:{...f.grocerySchedule||{},lockedWeek:he(),listLocked:!0}}}),I(`Stocked ${i.items.length} items (${x(l)})! ${p} recipes now fridge-ready.`);break}case"step-takeout-plan":{const i=t.dataset.field,l=Number(t.dataset.delta)||0;k(p=>{const f=p.takeoutPlan||{weeklyTakeouts:2,weeklyPlatters:1,maxPerServing:12},C=Math.max(i==="maxPerServing"?4:0,Math.min(i==="maxPerServing"?40:14,(Number(f[i])||0)+l));return{...p,takeoutPlan:{...f,[i]:C}}});break}case"platter-leftovers":{const i=Number(t.dataset.portions)||1;k(l=>({...l,fridgeMeals:l.fridgeMeals+i})),I(`Added +${i} platter leftovers to your fridge!`);break}case"fav-takeout":k(i=>({...i,takeout:i.takeout.map(l=>l.id===t.dataset.id?{...l,fav:!l.fav}:l)}));break;case"del-takeout":k(i=>({...i,takeout:i.takeout.filter(l=>l.id!==t.dataset.id)}));break;case"shop-sub":k(i=>({...i,shopSubTab:t.dataset.sub}));break;case"shop-mood":k(i=>({...i,shopMood:t.dataset.mood,shopChecked:[]}));break;case"toggle-custom-recipe":{const i=t.dataset.id;k(l=>{const p=new Set(l.customRecipeIds||[]);return p.has(i)?p.delete(i):p.add(i),{...l,customRecipeIds:Array.from(p)}});break}case"toggle-shop-item":{const i=t.dataset.id;k(l=>{const p=new Set(l.shopChecked||[]);return p.has(i)?p.delete(i):p.add(i),{...l,shopChecked:Array.from(p)}});break}case"toggle-custom-shop":{const i=t.dataset.id;k(l=>({...l,shopCustomItems:l.shopCustomItems.map(p=>p.id===i?{...p,checked:!p.checked}:p)}));break}case"del-custom-shop":k(i=>({...i,shopCustomItems:i.shopCustomItems.filter(l=>l.id!==t.dataset.id)}));break;case"finish-shopping":{const i=ue(s.shopMood,s.recipes,s.catalog,s.customRecipeIds),l=new Set(s.shopChecked);let p=0;k(f=>{const $={...f.catalog};for(const T of i.items)l.has(T.id)&&$[T.id]&&($[T.id]={...$[T.id],inKitchen:!0},p+=Number($[T.id].price)||0);const S=[];for(const T of f.shopCustomItems)T.checked?p+=Number(T.price)||0:S.push(T);const C=p>0?[...f.spends,{id:"sp_"+Date.now(),label:"Grocery trip",amount:Math.round(p*100)/100,category:"grocery",ts:Date.now()}]:f.spends;return{...f,catalog:$,shopChecked:[],shopCustomItems:S,spends:C}}),I(`Moved items into My Kitchen & logged ${x(p)}!`);break}case"step-fridge":{const i=Number(t.dataset.delta)||0,l=t.dataset.kind;k(p=>({...p,fridgeMeals:l==="meals"?Math.max(0,p.fridgeMeals+i):p.fridgeMeals,fridgeDrinks:l==="drinks"?Math.max(0,p.fridgeDrinks+i):p.fridgeDrinks}));break}case"toggle-kitchen-item":{const i=t.dataset.id;k(l=>({...l,catalog:{...l.catalog,[i]:l.catalog[i]?{...l.catalog[i],inKitchen:!l.catalog[i].inKitchen}:l.catalog[i]}}));break}case"panda-style":{const i=t.dataset.style,l=F.find($=>$.id===i);if(!l||!Y(l,s)){I(l!=null&&l.hint?`Unlock ${l.name}: ${l.hint}`:"Panda locked!");break}const p=l!=null&&l.defaultAcc?{...l.defaultAcc}:w().equippedAcc;k($=>({...$,pandaStyle:i,gardenLineup:!1,equippedAcc:p}),{notify:!1});const f=j();f&&f.updatePandaStyle(i,p),E(w(),{preserveThree:w().activeTab==="garden"});break}case"explore-filter":k(i=>({...i,exploreFilter:t.dataset.v||"all",exploreLimit:48}));break;case"more-explore":k(i=>({...i,exploreLimit:(i.exploreLimit||48)+48}));break;case"coach-skip":{const i=t.dataset.tip;if(!i)break;k(l=>({...l,coachSkip:{...l.coachSkip||{},[`${M()}:${i}`]:!0}}));break}case"open-family":ne(w());break;case"who-pick":k(i=>({...i,activeProfile:t.dataset.id})),ne(w());break;case"person-add":{const i="u_"+Date.now(),l=Object.keys(Q),p=l[(w().profiles||[]).length%l.length];k(f=>({...f,activeProfile:i,profiles:[...f.profiles||[],{id:i,name:`Member ${(f.profiles||[]).length+1}`,color:p,textSize:"normal",simpleMode:!1,avoid:[]}].slice(0,8)})),ne(w());break}case"person-del":{const i=t.dataset.id;k(l=>{const p=(l.profiles||[]).filter(f=>f.id!==i);return p.length?{...l,profiles:p,activeProfile:p[0].id}:l}),ne(w());break}case"pf-color":case"pf-text":case"pf-simple":case"pf-avoid":{const i=t.dataset.v;k(l=>({...l,profiles:(l.profiles||[]).map(p=>{if(p.id!==l.activeProfile)return p;if(o==="pf-color")return{...p,color:i};if(o==="pf-text")return{...p,textSize:i};if(o==="pf-simple")return{...p,simpleMode:!p.simpleMode};const f=new Set(p.avoid||[]);return f.has(i)?f.delete(i):f.add(i),{...p,avoid:Array.from(f)}})})),ne(w());break}case"open-plan":be(w());break;case"plan-days":k(i=>({...i,planDays:Number(t.dataset.v)===7?7:4})),be(w());break;case"plan-swap":{const i=t.dataset.key;if(!i)break;k(l=>{var p;return{...l,planSwaps:{...l.planSwaps||{},[i]:(Number((p=l.planSwaps)==null?void 0:p[i])||0)+1}}}),be(w());break}case"plan-to-shop":{const i=bt(w()),l=[];for(const p of i.days)for(const f of p.meals)(g=f.recipe)!=null&&g.id&&l.push(f.recipe.id);k(p=>({...p,shopMood:"custom",customRecipeIds:Array.from(new Set([...p.customRecipeIds||[],...l])).slice(-24),activeTab:"shop",shopSubTab:"trip"})),z(),I("Planned meals added to Shop → Custom Pick!");break}case"garden-lineup":{const i=!w().gardenLineup;k(p=>({...p,gardenLineup:i}),{notify:!1});const l=j();l&&l.setLineupMode(i),E(w(),{preserveThree:!0});break}case"garden-tab":{const i=t.dataset.gtab||"play";k(l=>({...l,gardenTab:i,gardenDrawerHidden:!1}),{notify:!1}),E(w(),{preserveThree:!0});break}case"toggle-garden-drawer":{k(i=>({...i,gardenDrawerHidden:!i.gardenDrawerHidden}),{notify:!1}),E(w(),{preserveThree:!0});break}case"reset-outfit":{const l={...(F.find(p=>p.id===w().pandaStyle)||F[0]).defaultAcc||{}};k(p=>({...p,gardenLineup:!1,equippedAcc:l}),{notify:!1}),(v=(m=j())==null?void 0:m.updateOutfits)==null||v.call(m,l),oe("Signature Outfit ✨"),E(w(),{preserveThree:!0});break}case"garden-view":{const i=t.dataset.view||"front";k(p=>({...p,gardenView:i,gardenTurntable:!1}),{notify:!1});const l=j();l&&(l.setTurntable(!1),l.setViewAngle(i)),E(w(),{preserveThree:!0});break}case"toggle-turntable":{const i=!w().gardenTurntable;k(p=>({...p,gardenTurntable:i}),{notify:!1});const l=j();l&&l.setTurntable(i),E(w(),{preserveThree:!0});break}case"toggle-outlines":{const i=!w().pandaOutlines;k(p=>({...p,pandaOutlines:i}),{notify:!1});const l=j();l&&l.setOutlines(i),E(w(),{preserveThree:!0});break}case"toggle-acc":{const i=et.find($=>$.id===t.dataset.id);if(!i||!Y(i,s))break;const l=s.equippedAcc[i.socket],p={...s.equippedAcc,[i.socket]:l===i.id?null:i.id};k($=>({...$,gardenLineup:!1,equippedAcc:p}),{notify:!1});const f=j();f&&f.updateOutfits(p),E(w(),{preserveThree:!0});break}case"toggle-prop":{const i=Me.find($=>$.id===t.dataset.id);if(!i||!Y(i,s))break;const l=new Set(s.placedProps);l.has(i.id)?l.delete(i.id):l.add(i.id);const p=Array.from(l);k($=>({...$,placedProps:p}),{notify:!1});const f=j();f&&f.updateProps(p),E(w(),{preserveThree:!0});break}case"claim-weekly-win":{const i=$e(s);if(!i.underBudget||i.claimed)break;k(l=>({...l,weeklyWins:[...l.weeklyWins||[],i.wk],gardenShoots:l.gardenShoots+3}),{notify:!1}),E(w(),{preserveThree:!0}),I("Weekly Budget Win claimed! +3 bamboo shoots & new rewards unlocked.");break}case"export-backup":{const i=new Blob([JSON.stringify(w(),null,2)],{type:"application/json"}),l=URL.createObjectURL(i),p=document.createElement("a");p.href=l,p.download=`meal-cheat-backup-${M()}.json`,p.click(),URL.revokeObjectURL(l),I("Backup JSON downloaded.");break}case"reset-app":confirm("Reset all recipes, kitchen pantry, budget logs, and garden progress?")&&(_t(),z(),I("App reset to fresh defaults."));break}});document.addEventListener("input",e=>{var t,o;const n=e.target;if(n.dataset.input==="recipe-search")k(s=>({...s,recipeSearch:n.value,recipesLimit:60}));else if(n.dataset.input==="explore-search")k(s=>({...s,exploreSearch:n.value,exploreLimit:48}));else if(n.dataset.input==="pf-name"){const s=n.value.slice(0,20);k(r=>({...r,profiles:(r.profiles||[]).map(u=>u.id===r.activeProfile?{...u,name:s||"Me"}:u)}))}else if(n.dataset.input==="catalog-search")k(s=>({...s,catalogSearch:n.value}));else if(n.dataset.input==="assess-takeout"){const s=document.getElementById("takeoutAssessPreview"),r=Math.max(0,Number((t=document.getElementById("takeoutPriceInput"))==null?void 0:t.value)||0),u=Math.max(1,Math.round(Number((o=document.getElementById("takeoutServesInput"))==null?void 0:o.value)||1));if(s){const d=me({price:r,serves:u,kind:u>1?"platter":"meal"},w());s.className=`tag ${d.tone}`,s.textContent=`${d.badge} — ${d.reason}`}}});document.addEventListener("change",e=>{const n=e.target;if(n.dataset.action==="catalog-price"){const t=n.dataset.id,o=Math.max(0,Math.round((Number(n.value)||0)*100)/100);k(s=>({...s,catalog:{...s.catalog,[t]:s.catalog[t]?{...s.catalog[t],price:o}:s.catalog[t]}}))}else if(n.dataset.action==="set-shop-time")k(t=>({...t,grocerySchedule:{...t.grocerySchedule||{},reminderTime:n.value}})),I(`Grocery reminder time updated to ${n.value}.`);else if(n.dataset.action==="week-day-type"){const t=Number(n.dataset.idx);k(o=>({...o,weekPlan:(o.weekPlan||[]).map((s,r)=>r===t?{...s,type:n.value}:s)})),be(w())}});document.addEventListener("submit",e=>{const n=e.target.closest("[data-form]");if(!n)return;e.preventDefault();const t=new FormData(n),o=n.dataset.form;if(o==="save-recipe"){const s=String(t.get("title")||"").trim(),u=String(t.get("ingredients")||"").split(/[\n,]+/).map(de).filter(Boolean);if(!s||!u.length)return;const d=String(t.get("sourceUrl")||"").trim(),a=yt(d),g=La()||String(t.get("imageUrl")||"").trim()||(a?$t(a):""),m=String(t.get("steps")||"").trim(),v=m?m.split(`
`).map(S=>S.trim()).filter(Boolean):["Gather ingredients and prep according to your taste.","Enjoy!"],i=String(t.get("kind")||"meal"),l={id:"u_"+Date.now(),title:s,kind:i,slots:["breakfast","lunch","dinner"],effort:String(t.get("effort")||"quick"),time:String(t.get("time")||"10 min").trim(),cost:Math.max(0,Number(t.get("cost"))||2.5),portions:Math.max(1,Math.round(Number(t.get("portions"))||1)),videoId:a,sourceUrl:d,image:g,ingredients:u,steps:v,transcript:String(t.get("transcript")||"").trim(),tags:[],emoji:i==="drink"?"🥤":i==="snack"?"🍿":i==="comfort"?"🫂":"🍲",builtIn:!1},p=new Set(Object.keys(w().catalog));k(S=>({...S,recipes:[l,...S.recipes],customRecipeIds:[...S.customRecipeIds||[],l.id]}));const $=Object.keys(w().catalog).filter(S=>!p.has(S)).length;z(),I(`Saved "${s}"! Synced ${$} new ingredient${$===1?"":"s"} to Master Catalog.`)}else if(o==="add-takeout"){const s=String(t.get("name")||"").trim(),r=Math.max(1,Number(t.get("price"))||10),u=Math.max(1,Math.round(Number(t.get("serves"))||1)),d=String(t.get("place")||"").trim();if(!s)return;k(a=>({...a,takeout:[{id:"to_"+Date.now(),name:s,place:d,price:r,serves:u,kind:u>1?"platter":"meal",deal:u>1,fav:!1},...a.takeout]})),n.reset(),I(`Added "${s}" to Takeout & Platters.`)}else if(o==="add-shop-extra"){const s=String(t.get("name")||"").trim(),r=Math.max(0,Number(t.get("price"))||3);if(!s)return;k(u=>({...u,shopCustomItems:[...u.shopCustomItems,{id:"sc_"+Date.now(),name:s,price:r,checked:!1}]})),n.reset()}else if(o==="add-catalog-item"){const s=de(t.get("name"));if(!s)return;const r=s.toLowerCase(),u=Ae(s),d=Math.max(0,Number(t.get("price"))||Re(s,u));k(a=>{var c;return{...a,catalog:{...a.catalog,[r]:{id:r,name:s,aisle:u,price:d,inKitchen:!1,everyday:!0,usedBy:((c=a.catalog[r])==null?void 0:c.usedBy)||[]}}}}),n.reset(),I(`Added "${s}" (${u}) to Master Catalog!`)}else if(o==="add-perishable"){const s=String(t.get("name")||"").trim();if(!s)return;k(r=>({...r,perishables:[...r.perishables||[],{id:"p_"+Date.now(),name:s,daysLeft:"Eat First",eaten:!1}]})),n.reset(),I(`Added "${s}" to Eat First list.`)}else if(o==="save-budget")k(s=>({...s,budget:{monthlyCap:Math.max(50,Number(t.get("monthlyCap"))||340),weeklyGrocery:Math.max(15,Number(t.get("weeklyGrocery"))||55),monthlyTreatPot:Math.max(0,Number(t.get("monthlyTreatPot"))||80)}})),z(),I("Budget updated.");else if(o==="save-schedule"){const s=(a,c)=>{const g=String(t.get(a)||"").trim();return/^\d{2}:\d{2}$/.test(g)?g:c},r=w().schedule||{},u=K.includes(String(t.get("groceryDay")))?String(t.get("groceryDay")):r.groceryDay||"Sunday",d=s("groceryTime",r.groceryTime||"17:00");k(a=>({...a,schedule:{wake:s("wake",r.wake||"07:00"),breakfast:s("breakfast",r.breakfast||"08:00"),lunch:s("lunch",r.lunch||"12:30"),dinner:s("dinner",r.dinner||"18:00"),shift:String(t.get("shift")||"").trim().slice(0,60),groceryDay:u,groceryTime:d},grocerySchedule:{...a.grocerySchedule||{},shopDay:u}})),z(),I("Saved! Reminders and calendar export use your new times.")}});window.addEventListener("mealcheat:import",e=>{try{const n=JSON.parse(e.detail);if(!n||typeof n!="object"||!Array.isArray(n.recipes))throw new Error("Invalid");k(it(n)),z(),I("Backup restored safely!")}catch{I("Invalid JSON backup file.")}});"serviceWorker"in navigator&&/^https?:/.test(location.protocol)&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});function _e(e){var o;if(!e||!((o=e.classList)!=null&&o.contains("chips")))return;const n=Math.max(0,e.scrollWidth-e.clientWidth),t=n>4;e.dataset.scrollLeft=t&&e.scrollLeft>4?"true":"false",e.dataset.scrollRight=t&&e.scrollLeft<n-4?"true":"false"}function ze(e=document){e.querySelectorAll(".chips").forEach(_e)}document.addEventListener("scroll",e=>{e.target instanceof Element&&e.target.classList.contains("chips")&&_e(e.target)},!0);document.addEventListener("wheel",e=>{const n=e.target instanceof Element?e.target.closest(".chips"):null;if(!n||e.deltaX!==0||e.deltaY===0)return;const t=n.scrollWidth-n.clientWidth;if(t<=4)return;const o=n.scrollLeft+e.deltaY;(e.deltaY>0&&n.scrollLeft<t-1||e.deltaY<0&&n.scrollLeft>1)&&(e.preventDefault(),n.scrollLeft=Math.max(0,Math.min(t,o)),_e(n))},{passive:!1});window.addEventListener("resize",()=>ze(document));const Ee=document.getElementById("modalRoot")||document.body;Ee&&typeof MutationObserver<"u"&&new MutationObserver(()=>requestAnimationFrame(()=>ze(Ee))).observe(Ee,{childList:!0,subtree:!1});qt(e=>E(e));E(w());Jt();
