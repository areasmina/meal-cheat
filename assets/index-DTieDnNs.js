import{P as we}from"./recipes-yt-D6Rb2z0Q.js";import{I as Se}from"./recipes-ig-Dk_S9Vt8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const A={nocook:{id:"nocook",energy:"zero",label:"No-Cook / 2-Min",short:"2-Min",emoji:"⚡",energyTitle:"Wiped out",energyHint:"0–3 min, zero effort"},handsoff:{id:"handsoff",energy:"low",label:"Hands-Off",short:"Hands-Off",emoji:"🤖",energyTitle:"Hands-off",energyHint:"Air fryer / rice cooker"},quick:{id:"quick",energy:"some",label:"Quick Cook",short:"Quick",emoji:"🍳",energyTitle:"Quick cook",energyHint:"5–15 min active"},project:{id:"project",energy:"mood",label:"Cooking Mood",short:"Mood",emoji:"👨‍🍳",energyTitle:"Cooking mood",energyHint:"Fun weekend dish"}},Ie={zero:"nocook",low:"handsoff",some:"quick",mood:"project"},Y=[{id:"breakfast",key:"b",label:"Breakfast",emoji:"🌅"},{id:"lunch",key:"l",label:"Lunch",emoji:"🥪"},{id:"dinner",key:"d",label:"Dinner",emoji:"🍲"}],le=e=>e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:"",$e=e=>e?`https://www.youtube.com/watch?v=${e}`:"";function h(e){return{id:e.id,title:e.title,kind:e.kind||"meal",slots:e.slots||["lunch","dinner"],effort:e.effort,time:e.time,cost:e.cost,portions:e.portions||1,videoId:e.videoId||"",sourceUrl:e.sourceUrl||(e.videoId?$e(e.videoId):""),image:e.image||(e.videoId?le(e.videoId):""),ingredients:e.ingredients,steps:e.steps,tags:e.tags||[],emoji:e.emoji||(e.kind==="drink"?"🥤":e.kind==="snack"?"🍿":e.kind==="comfort"?"🫂":"🍲"),builtIn:!0}}const ce=[h({id:"r_rotisserie_wrap",title:"Rotisserie Chicken Salad Wraps",slots:["lunch","dinner"],effort:"nocook",time:"2 min",cost:3.5,videoId:"JpEYi3Q5nFA",emoji:"🌯",ingredients:["Rotisserie Chicken","Bagged Salad","Flour Tortillas","Cherry Tomatoes"],steps:["Pull a handful of warm or cold rotisserie chicken.","Toss bagged salad with its dressing packet right in the bag.","Roll chicken, salad, and halved cherry tomatoes into tortillas."]}),h({id:"r_kewpie_tuna",title:"Kewpie Tuna Rice & Onigiri",slots:["breakfast","lunch","dinner"],effort:"nocook",time:"3 min",cost:2.3,videoId:"mSFKI1I259k",emoji:"🍙",ingredients:["Canned Tuna","Rice","Mayo","Soy Sauce"],steps:["Microwave leftover or pouch rice for 90 seconds.","Mix drained tuna with 1 tbsp mayo and a splash of soy sauce.","Pile onto warm rice (or press into onigiri triangles for later)."]}),h({id:"r_prosciutto_sub",title:"Prosciutto & Mozzarella Baguette",slots:["lunch","dinner"],effort:"nocook",time:"3 min",cost:4.5,videoId:"diXnlEkkE4w",emoji:"🥖",ingredients:["Baguette","Charcuterie Trio","Mini Bocconcini","Cherry Tomatoes"],steps:["Slice baguette lengthwise without cutting all the way through.","Layer prosciutto/charcuterie, halved mini bocconcini, and cherry tomatoes.","Drizzle with olive oil, salt, and pepper."]}),h({id:"r_overnight_oats",title:"6-Flavor Overnight Oats",slots:["breakfast"],effort:"nocook",time:"2 min prep",cost:1.15,portions:2,videoId:"Lkl9_3-jX6c",emoji:"🥣",ingredients:["Rolled Oats","Milk","Bananas","Honey"],steps:["Stir 1/2 cup oats, 1/2 cup milk, and a drizzle of honey in a jar.","Chill overnight (or 20 minutes for a quick soft bowl).","Top with sliced banana before eating."]}),h({id:"r_avo_egg_toast",title:"Avocado & Egg Protein Toast",slots:["breakfast","lunch"],effort:"nocook",time:"4 min",cost:2.1,videoId:"Ghs-gKe4nVo",emoji:"🥑",ingredients:["Bread","Avocados","Eggs","Cherry Tomatoes"],steps:["Toast 2 slices of bread and mash half an avocado with salt and lime.","Top with a sliced boiled egg (or quick fried egg) and cherry tomatoes."]}),h({id:"r_micro_omelet",title:"45-Second Microwave Mug Omelet",slots:["breakfast","lunch"],effort:"nocook",time:"2 min",cost:1.25,videoId:"RvfNiTkJzGk",emoji:"🍳",ingredients:["Eggs","Shredded Cheese","Green Onions"],steps:["Whisk 2 eggs with a splash of water, salt, and chopped green onion in a greased mug.","Microwave 45 seconds, top with cheese, and microwave 15 seconds more."]}),h({id:"r_pocket_soup",title:"Pocket Instant Noodle Soup Jar",slots:["lunch","dinner"],effort:"nocook",time:"3 min",cost:1.85,videoId:"jaEEazdCNyI",emoji:"🍜",ingredients:["Instant Noodles","Beef Bouillon","Green Onions","Frozen Dumplings"],steps:["Pack dry noodles, bouillon, sliced green onions, and 3 frozen dumplings in a heat-safe bowl or jar.","Pour boiling water to cover, lid for 3 minutes, and eat."]}),h({id:"r_cucumber_salad",title:"Crunchy Sesame Cucumber Salad",slots:["lunch"],effort:"nocook",time:"3 min",cost:1.4,videoId:"sfY71cQ9QkE",emoji:"🥒",ingredients:["Cucumbers","Soy Sauce","Garlic","Sesame Oil"],steps:["Slice or smash cucumbers into bite-size chunks.","Toss with 1 tbsp soy sauce, grated garlic, and a drizzle of sesame oil."]}),h({id:"r_rc_gyudon",title:"Rice Cooker Beef Gyudon",slots:["lunch","dinner"],effort:"handsoff",time:"20 min hands-off",cost:3.8,portions:2,videoId:"ba1ugzx40j0",emoji:"🥩",ingredients:["Rice","Thin Sliced Beef","Onions","Soy Sauce"],steps:["Rinse rice and add normal water level plus 2 tbsp soy sauce and 1 tsp sugar.","Layer sliced onions and thin beef right on top and press Cook.","Fluff and serve in bowls when the rice cooker clicks warm."]}),h({id:"r_rc_oyakodon",title:"Rice Cooker Cheat Oyakodon",slots:["lunch","dinner"],effort:"handsoff",time:"18 min hands-off",cost:2.9,portions:2,videoId:"rxL3ISxqxrQ",emoji:"🍚",ingredients:["Rice","Chicken Thighs","Onions","Eggs","Soy Sauce"],steps:["Add rice, water, 2 tbsp soy sauce, sliced onions, and diced chicken thighs to the rice cooker.","Run the normal white rice cycle.","Pour 2 beaten eggs over the hot rice right at the end and close lid 2 minutes to set."]}),h({id:"r_rc_egg_rice",title:"Addictive Rice Cooker Egg Rice",slots:["breakfast","lunch","dinner"],effort:"handsoff",time:"15 min hands-off",cost:1.1,videoId:"YqI73j71bO8",emoji:"🥚",ingredients:["Rice","Eggs","Butter","Soy Sauce","Green Onions"],steps:["Cook rice with a pat of butter and 1 tbsp soy sauce.","Crack an egg on top during the final 4 minutes (or stir in raw egg into piping-hot rice)."]}),h({id:"r_rc_honey_soy",title:"Rice Cooker Honey Soy Chicken",slots:["lunch","dinner"],effort:"handsoff",time:"25 min hands-off",cost:3.1,portions:3,videoId:"YPiXdNr_O1c",emoji:"🍗",ingredients:["Rice","Chicken Thighs","Soy Sauce","Honey","Garlic"],steps:["Combine washed rice, water, soy sauce, honey, and smashed garlic in the rice cooker.","Lay chicken thighs skin-side up on top and press Cook."]}),h({id:"r_ip_frijoles",title:"Instant Pot Frijoles de la Olla",slots:["lunch","dinner"],effort:"handsoff",time:"40 min passive (6 portions)",cost:.45,portions:6,videoId:"6_qorIHQdbA",emoji:"🫘",ingredients:["Dried Beans","Onions","Garlic","Beef Bouillon"],steps:["Add 450g dry black or pinto beans, halved onion, garlic cloves, bouillon, and 6 cups water.","Pressure cook High for 38 minutes, then natural release 15 minutes.","Portion leftovers into fridge/freezer containers for instant weeknight meals."]}),h({id:"r_ip_salsa_chicken",title:"Instant Pot Salsa Shredded Chicken",slots:["lunch","dinner"],effort:"handsoff",time:"15 min passive (4 portions)",cost:2.2,portions:4,videoId:"U6EiaSHggpI",emoji:"🍲",ingredients:["Chicken Breast","Jarred Salsa","Rice"],steps:["Place chicken breasts and 1 jar salsa in the Instant Pot.","Pressure cook High 12 minutes, quick release, and shred with two forks.","Serve over rice or pack 3 portions for the fridge."]}),h({id:"r_ip_salmon",title:"Instant Pot Salmon (From Frozen)",slots:["lunch","dinner"],effort:"handsoff",time:"10 min passive",cost:4.5,portions:2,videoId:"XhiswOvQgVQ",emoji:"🐟",ingredients:["Salmon Fillets","Limes","Garlic","Butter"],steps:["Pour 1 cup water into Instant Pot and place frozen salmon on the trivet with butter, garlic, and lime.","Pressure cook High 4 minutes (5 min if thick), quick release."]}),h({id:"r_af_shrimp",title:"6-Minute Air Fryer Garlic Shrimp",slots:["lunch","dinner"],effort:"handsoff",time:"6 min passive",cost:4,videoId:"ZCC6jyH5hm8",emoji:"🍤",ingredients:["Raw Shrimp","Garlic","Bagged Salad","Baguette"],steps:["Toss shrimp with oil, garlic powder, salt, and paprika.","Air fry at 390°F for 6 minutes until pink and curled.","Dump over bagged salad with crusty baguette."]}),h({id:"r_af_fajitas",title:"Air Fryer Chicken Fajitas",slots:["lunch","dinner"],effort:"handsoff",time:"12 min passive",cost:3.4,portions:2,videoId:"Rtj26E-0hwk",emoji:"🌮",ingredients:["Chicken Breast","Bell Peppers","Onions","Flour Tortillas"],steps:["Toss sliced chicken, bell peppers, and onions with oil and taco seasoning.","Air fry at 390°F for 12 minutes, shaking halfway. Load into warm tortillas."]}),h({id:"r_af_gyoza",title:"Air Fryer Crispy Gyoza",slots:["lunch","dinner"],effort:"handsoff",time:"10 min passive",cost:2.5,videoId:"nYRBebHO5pE",emoji:"🥟",ingredients:["Frozen Dumplings","Soy Sauce","Bagged Salad"],steps:["Spray frozen gyoza lightly with oil.","Air fry at 375°F for 9–10 minutes until golden and crunchy.","Serve with soy dipping sauce and quick bagged salad."]}),h({id:"r_af_tunamelt",title:"Air Fryer Crispy Tuna Melt",slots:["lunch","dinner"],effort:"handsoff",time:"6 min passive",cost:3.2,videoId:"wHAezRFLZ_g",emoji:"🥪",ingredients:["Canned Tuna","Baguette","Mayo","Mini Bocconcini"],steps:["Mix tuna with 1 tbsp mayo and black pepper; spread onto split baguette.","Top with sliced mozzarella/bocconcini and air fry at 360°F for 5 minutes."]}),h({id:"r_ip_spaghetti",title:"One-Pot Instant Pot Spaghetti",slots:["lunch","dinner"],effort:"handsoff",time:"15 min passive (4 portions)",cost:1.9,portions:4,videoId:"djCJoYUjM5M",emoji:"🍝",ingredients:["Pasta","Jarred Pasta Sauce","Beef Bouillon","Garlic"],steps:["Break spaghetti into the pot, pour jarred sauce + 1 jar water + bouillon over top without stirring.","Pressure cook High 6 minutes, quick release, stir to thicken."]}),h({id:"r_breakfast_burrito",title:"Freezer Breakfast Burrito Prep",slots:["breakfast"],effort:"handsoff",time:"20 min (5 portions)",cost:1.75,portions:5,videoId:"xdwLxfJBOWE",emoji:"🌯",ingredients:["Flour Tortillas","Eggs","Sausages","Shredded Cheese"],steps:["Scramble 6 eggs with sliced cooked sausage and shredded cheese.","Roll tightly into 5 tortillas and wrap individually.","Microwave 90 seconds from fridge on rushed mornings."]}),h({id:"r_gallo_pinto",title:"Gallo Pinto with Fried Egg",slots:["breakfast","lunch"],effort:"quick",time:"8 min",cost:1.5,videoId:"_XJhySbWpqU",emoji:"🍛",ingredients:["Dried Beans","Rice","Onions","Eggs"],steps:["Sauté diced onion in oil for 3 minutes.","Add cooked beans with a splash of broth and leftover rice; stir-fry 4 minutes.","Top with a crispy fried egg (plus Salsa Lizano if you have it!)."]}),h({id:"r_huevos_rancheros",title:"Huevos Rancheros",slots:["breakfast","lunch"],effort:"quick",time:"8 min",cost:2.1,videoId:"zQKXLmw3yYY",emoji:"🍳",ingredients:["Eggs","Flour Tortillas","Jarred Salsa","Dried Beans"],steps:["Warm tortillas in a dry skillet until pliable.","Fry 2 eggs sunny-side up and warm jarred salsa in the same pan.","Layer tortillas, warm beans, eggs, and hot salsa."]}),h({id:"r_green_onion_toast",title:"5-Min Green Onion Egg Toast",slots:["breakfast"],effort:"quick",time:"5 min",cost:1.3,videoId:"xzuw5sy9d4M",emoji:"🍞",ingredients:["Bread","Eggs","Green Onions","Butter"],steps:["Melt butter in a pan and sprinkle chopped green onions.","Pour 2 beaten eggs over the onions, press bread slice on top while wet, flip, and fold."]}),h({id:"r_halal_cart",title:"Halal-Cart Chicken Over Rice",slots:["lunch","dinner"],effort:"quick",time:"12 min",cost:3.5,portions:2,videoId:"XVTSUyrM9vs",emoji:"🍗",ingredients:["Chicken Thighs","Rice","Bagged Salad","Mayo"],steps:["Pan-sear diced seasoned chicken thighs 6–7 minutes until browned.","Mix white sauce: 2 tbsp mayo, splash of lemon/vinegar, pinch of sugar & pepper.","Serve over yellow or white rice with shredded salad."]}),h({id:"r_midnight_pasta",title:"2 AM Garlic Butter Spaghetti",slots:["lunch","dinner"],effort:"quick",time:"10 min",cost:1.4,videoId:"iQS65cKsvq0",emoji:"🍝",ingredients:["Pasta","Garlic","Butter","Eggs"],steps:["Boil spaghetti in salted water.","Gently sizzle sliced garlic in butter and olive oil until fragrant.","Toss hot pasta with garlic butter and splash of pasta water (plus optional egg yolk off heat)."]}),h({id:"r_chilaquiles",title:"Crispy Chilaquiles Verdes",slots:["breakfast","lunch"],effort:"quick",time:"10 min",cost:2.3,videoId:"BI7yH2VtPW8",emoji:"🌶️",ingredients:["Tortilla Chips","Jarred Salsa","Eggs","Shredded Cheese"],steps:["Simmer jarred salsa verde in a skillet for 2 minutes.","Toss in tortilla chips briefly so edges stay crisp.","Top with fried eggs and shredded cheese."]}),h({id:"r_bang_salmon",title:"Bang Bang Salmon Bites",slots:["lunch","dinner"],effort:"quick",time:"10 min",cost:4.8,videoId:"xTYeHdPQyQg",emoji:"🍣",ingredients:["Salmon Fillets","Mayo","Rice","Cucumbers"],steps:["Cube salmon, toss with oil and paprika, and air fry or pan-sear 6 minutes.","Drizzle with quick mayo + sweet chili/hot sauce mix over rice and cucumber."]}),h({id:"r_milanesa",title:"Crispy Steak Milanesa",slots:["dinner"],effort:"project",time:"25 min",cost:5.2,portions:2,videoId:"sRgge7qVW9U",emoji:"🥩",ingredients:["Thin Sliced Beef","Eggs","Breadcrumbs","Limes"],steps:["Pound thin beef cutlets flat; season with salt, garlic, and pepper.","Dip in beaten egg, press firmly into breadcrumbs.","Pan-fry in shallow oil 2–3 minutes per side until golden; squeeze fresh lime."]}),h({id:"r_pupusas",title:"Salvadoran Pupusas + Curtido",slots:["lunch","dinner"],effort:"project",time:"35 min",cost:2.8,portions:4,videoId:"ujAXjSmekno",emoji:"🫓",ingredients:["Masa Harina","Shredded Cheese","Dried Beans","Jarred Salsa"],steps:["Mix masa harina with warm water and salt into soft dough.","Stuff dough balls with refried beans and mozzarella, pat flat into discs.","Griddle 3–4 minutes per side until blistered; serve with curtido and red salsa."]}),h({id:"r_chow_mein",title:"Takeout-Style Beef Chow Mein",slots:["dinner"],effort:"project",time:"20 min",cost:4.2,portions:2,videoId:"CKAWnyk-fKw",emoji:"🥡",ingredients:["Instant Noodles","Thin Sliced Beef","Onions","Soy Sauce"],steps:["Parboil noodles 2 minutes, drain and toss with a drop of oil.","High-heat sear velveted beef slices, then stir-fry onions and noodles with dark soy sauce."]}),h({id:"r_bulgogi",title:"Korean BBQ Beef (Bulgogi)",slots:["dinner"],effort:"project",time:"25 min",cost:5.1,portions:3,videoId:"djM3z5VHSAY",emoji:"🥩",ingredients:["Thin Sliced Beef","Soy Sauce","Garlic","Green Onions","Rice"],steps:["Marinate thin sliced beef with soy sauce, brown sugar/honey, garlic, and sesame oil 15 min.","Sear hot and fast in a skillet 3–4 minutes until caramelized; serve over rice."]}),h({id:"r_katsu",title:"Crispy Chicken Katsu Rice Bowl",slots:["lunch","dinner"],effort:"project",time:"25 min",cost:3.9,portions:2,videoId:"oypSqpGstog",emoji:"🍛",ingredients:["Chicken Breast","Eggs","Breadcrumbs","Rice","Bagged Salad"],steps:["Butterfly chicken breast thin, dip in egg and panko breadcrumbs.","Pan-fry or air fry until crisp and golden; slice over rice and shredded salad."]}),h({id:"r_croque",title:"Cheesy Croque Monsieur",slots:["breakfast","lunch"],effort:"project",time:"18 min",cost:3.8,videoId:"2ZTOUyUBCz4",emoji:"🧀",ingredients:["Bread","Charcuterie Trio","Shredded Cheese","Butter","Milk"],steps:["Make a 3-minute butter-flour-milk cheese sauce.","Assemble ham & cheese sandwich, spoon sauce on top, and broil or air fry until bubbly."]}),h({id:"d_jamaica",title:"Agua de Jamaica Pitcher",kind:"drink",slots:["breakfast","lunch","dinner"],effort:"handsoff",time:"10 min (6 glasses)",cost:.35,portions:6,videoId:"AwudGelkZw0",emoji:"🌺",ingredients:["Dried Hibiscus Flowers","Sugar / Panela","Limes"],steps:["Boil 4 cups water with 1 cup dried hibiscus (jamaica) flowers for 5 minutes; steep 10 minutes.","Strain into a pitcher with 4 cups cold water, sweeten to taste, and squeeze 1 lime.","Stocks your fridge with 6 refreshing glasses!"]}),h({id:"d_fresa_crema",title:"Creamy Strawberry Agua Fresca",kind:"drink",slots:["lunch","dinner"],effort:"quick",time:"5 min (6 glasses)",cost:.85,portions:6,videoId:"dz-5oBg4m1Y",emoji:"🍓",ingredients:["Strawberries","Milk","Sugar / Panela"],steps:["Blend 1 lb strawberries with water, milk (or evaporated milk), and sugar until smooth.","Pour over plenty of ice in a pitcher for 6 cold glasses."]}),h({id:"d_panela_lemonade",title:"Limonada con Panela Pitcher",kind:"drink",slots:["lunch","dinner"],effort:"quick",time:"5 min (4 glasses)",cost:.45,portions:4,videoId:"zbeXleLEKnw",emoji:"🍋",ingredients:["Limes","Sugar / Panela"],steps:["Dissolve grated panela (or brown sugar) in 1 cup warm water.","Stir with fresh lime juice and 3 cups cold ice water."]}),h({id:"d_mint_lemonade",title:"Egyptian Mint Lemonade",kind:"drink",slots:["lunch","dinner"],effort:"quick",time:"4 min (4 glasses)",cost:.55,portions:4,videoId:"Hy61ea9EEg8",emoji:"🌿",ingredients:["Lemons","Fresh Mint","Sugar / Panela"],steps:["Blend peeled lemons, a big handful of mint leaves, cold water, and sugar for 20 seconds.","Strain over ice for a bright, frothy mint limonada."]}),h({id:"d_iced_tea",title:"Cold-Brew Iced Tea Pitcher",kind:"drink",slots:["breakfast","lunch","dinner"],effort:"handsoff",time:"2 min prep (6 glasses)",cost:.25,portions:6,videoId:"3dObh-JKk-w",emoji:"🧊",ingredients:["Tea Bags","Lemons","Honey"],steps:["Drop 4 tea bags in a pitcher of cold water and steep in the fridge.","Add sliced lemon and honey when ready to pour."]}),h({id:"d_protein_smoothie",title:"Berry Protein Smoothie",kind:"drink",slots:["breakfast","lunch"],effort:"quick",time:"3 min",cost:1.65,portions:1,videoId:"HH-b7u-3SZI",emoji:"🫐",ingredients:["Frozen Berries","Bananas","Milk","Greek Yogurt"],steps:["Blend frozen berries, half a banana, milk, and a spoon of yogurt for 30 seconds.","Pour cold into a tall glass."]}),h({id:"d_matcha_shake",title:"Cafe Matcha Milkshake",kind:"drink",slots:["breakfast","lunch"],effort:"quick",time:"3 min",cost:1.8,portions:1,videoId:"mRU8GyaZw0Y",emoji:"🍵",ingredients:["Matcha Powder","Milk","Sugar / Panela"],steps:["Whisk 1 tsp matcha in 2 tbsp warm water.","Blend with cold milk, ice, and sweetener (or a scoop of vanilla ice cream) until frosty."]}),h({id:"d_pb_shake",title:"Peanut Butter Banana Shake",kind:"drink",slots:["breakfast","dinner"],effort:"quick",time:"3 min",cost:1.4,portions:1,videoId:"JFoUeeTvXWw",emoji:"🥜",ingredients:["Peanut Butter","Bananas","Milk","Honey"],steps:["Blend 2 tbsp peanut butter, 1 frozen banana, cold milk, ice, and honey until thick."]}),h({id:"d_baja_diy",title:"$1 Lime Citrus Fizz (DIY Baja)",kind:"drink",slots:["lunch","dinner"],effort:"nocook",time:"1 min",cost:.7,portions:1,videoId:"NorqSYgAy0I",emoji:"🥤",tags:["treat"],ingredients:["Seltzer / Sparkling Water","Limes","Orange Juice"],steps:["Fill a tall glass with ice and 1/4 cup orange juice + juice of 1 lime.","Top with sparkling water for a crisp citrus soda without buying overpriced takeout drinks."]}),h({id:"d_coke_oj",title:"Cold Coke or Orange Juice Pour",kind:"drink",slots:["breakfast","lunch","dinner"],effort:"nocook",time:"30 sec",cost:.85,portions:1,videoId:"TDkH3EbWTYc",emoji:"🍊",tags:["treat"],ingredients:["Coke / Soda Cans","Orange Juice"],steps:["Pour ice-cold Coke or 100% orange juice over ice and enjoy guilt-free.","Keeping a multipack in the fridge saves $3+ per takeout drink."]}),h({id:"s_banana_icecream",title:"2-Ingredient Banana Ice Cream",kind:"snack",slots:["lunch","dinner"],effort:"quick",time:"3 min",cost:.55,videoId:"PEEnVIljUS4",emoji:"🍌",tags:["sweet"],ingredients:["Bananas","Peanut Butter"],steps:["Blend frozen sliced bananas until creamy soft-serve texture.","Swirl in 1 tbsp peanut butter."]}),h({id:"s_mango_sorbet",title:"3-Min Mango Lime Sorbet",kind:"snack",slots:["lunch","dinner"],effort:"quick",time:"3 min",cost:1.2,videoId:"KY8wQgHRKkw",emoji:"🥭",tags:["sweet"],ingredients:["Frozen Mango","Limes","Honey"],steps:["Pulse frozen mango chunks with lime juice and a touch of honey until smooth."]}),h({id:"s_homemade_chips",title:"Crispy Air Fryer Tortilla Chips",kind:"snack",slots:["lunch","dinner"],effort:"handsoff",time:"6 min passive",cost:.65,videoId:"0qXc9w-CFbk",emoji:"🔺",tags:["crunchy"],ingredients:["Flour Tortillas","Jarred Salsa"],steps:["Cut tortillas into triangles, mist with oil and salt.","Air fry at 370°F for 5–6 minutes until crisp; dip in salsa."]}),h({id:"s_potato_chips",title:"2-Ingredient Microwave Potato Chips",kind:"snack",slots:["lunch","dinner"],effort:"quick",time:"5 min",cost:.5,videoId:"aeAFbTYM8qM",emoji:"🥔",tags:["crunchy"],ingredients:["Potatoes"],steps:["Thinly slice a potato, pat dry, brush lightly with oil & salt.","Microwave on parchment 3–4 minutes until crisp."]}),h({id:"s_tostones",title:"Crispy Air Fryer Patacones",kind:"snack",slots:["lunch","dinner"],effort:"handsoff",time:"12 min",cost:.9,videoId:"H9GhpG4PUXY",emoji:"🍌",tags:["savory"],ingredients:["Plantains","Garlic"],steps:["Slice green plantains into thick coins and air fry 6 minutes.","Smash flat with a mug bottom, mist with garlic oil, and air fry 5 more minutes until golden."]}),h({id:"s_rice_cake_avo",title:"Avocado & Egg Rice Cakes",kind:"snack",slots:["breakfast","lunch"],effort:"nocook",time:"2 min",cost:1.15,videoId:"4inNoypMHWE",emoji:"🍙",tags:["protein"],ingredients:["Rice Cakes","Avocados","Eggs"],steps:["Spread mashed avocado on 2 crispy rice cakes and top with sliced boiled egg + chili flakes."]}),h({id:"s_uncrustables",title:"Homemade PB&J Pocket Bites",kind:"snack",slots:["breakfast","lunch"],effort:"nocook",time:"2 min",cost:.7,videoId:"rbgmT9R1Pdk",emoji:"🥪",tags:["sweet"],ingredients:["Bread","Peanut Butter","Honey"],steps:["Spread peanut butter and jam or honey between soft bread slices.","Press with a drinking glass rim to seal into a pocket."]}),h({id:"s_guac_snack",title:"Fresh 5-Min Guacamole & Chips",kind:"snack",slots:["lunch","dinner"],effort:"nocook",time:"4 min",cost:2.1,videoId:"tHVzFLtvbGQ",emoji:"🥑",tags:["savory"],ingredients:["Avocados","Limes","Onions","Tortilla Chips"],steps:["Mash ripe avocados with lime juice, minced onion, and salt.","Serve with crisp tortilla chips."]}),h({id:"c_chicken_noodle",title:"Instant Pot Chicken Noodle Soup",kind:"comfort",slots:["lunch","dinner"],effort:"handsoff",time:"18 min passive (4 portions)",cost:2.4,portions:4,videoId:"ZEc2-BhAjEI",emoji:"🍜",tags:["comfort"],ingredients:["Chicken Thighs","Egg Noodles","Carrots","Beef Bouillon","Onions"],steps:["Add chicken thighs, sliced carrots, onion, bouillon, and 6 cups water to Instant Pot; pressure cook 8 minutes.","Shred chicken, stir in egg noodles, and simmer on Sauté for 5 minutes until tender."]}),h({id:"c_potato_soup",title:"Creamy Healing Potato Soup",kind:"comfort",slots:["lunch","dinner"],effort:"quick",time:"15 min",cost:1.6,portions:3,videoId:"cFWM4pXxHH4",emoji:"🥣",tags:["comfort"],ingredients:["Potatoes","Butter","Milk","Onions","Shredded Cheese"],steps:["Dice potatoes small and simmer in butter, diced onion, and water/broth until fork-tender (10 min).","Mash half the potatoes right in the pot, stir in a splash of milk and cheese until velvety."]}),h({id:"c_steamed_egg",title:"Silky Chinese Steamed Egg Custard",kind:"comfort",slots:["breakfast","lunch","dinner"],effort:"nocook",time:"6 min",cost:.9,videoId:"zKW9dvfa4Yo",emoji:"🍮",tags:["comfort"],ingredients:["Eggs","Soy Sauce","Green Onions","Sesame Oil"],steps:["Whisk 2 eggs with 1.5x warm water and a pinch of salt; skim bubbles.","Steam or microwave covered on 50% power for 4–5 minutes until jiggly like pudding; top with soy, sesame oil & green onions."]}),h({id:"c_grilled_cheese",title:"Crispy Restaurant Grilled Cheese",kind:"comfort",slots:["breakfast","lunch","dinner"],effort:"quick",time:"6 min",cost:1.85,videoId:"I0a0n1vCRus",emoji:"🧀",tags:["comfort"],ingredients:["Bread","Shredded Cheese","Butter","Mayo"],steps:["Spread a thin layer of mayo on the outside of two bread slices for even golden crunch.","Melt butter in a skillet and toast low and slow with plenty of cheese until gooey."]}),h({id:"c_arroz_con_leche",title:"Instant Pot Arroz con Leche",kind:"comfort",slots:["breakfast","dinner"],effort:"handsoff",time:"15 min passive (4 portions)",cost:.95,portions:4,videoId:"JUv8d8SHfDc",emoji:"🍚",tags:["comfort","sweet"],ingredients:["Rice","Milk","Sugar / Panela","Cinnamon"],steps:["Pressure cook 1 cup rice, 2 cups water, and a cinnamon stick for 4 minutes; quick release.","Stir in milk and sugar/panela on Sauté for 4 minutes until warm, creamy, and cozy."]}),h({id:"c_goulash",title:"Cozy Beef & Paprika Goulash",kind:"comfort",slots:["dinner"],effort:"project",time:"30 min (4 portions)",cost:3.9,portions:4,videoId:"yiX9YZzwbaA",emoji:"🥘",tags:["comfort"],ingredients:["Thin Sliced Beef","Onions","Bell Peppers","Jarred Pasta Sauce","Pasta"],steps:["Sauté onions and bell peppers in butter, then brown beef with sweet paprika.","Simmer with tomato/pasta sauce and broth 15 minutes; ladle over buttered noodles."]}),...we,...Se],H=["Produce","Proteins","Dairy & Eggs","Snacks & Bakery","Pantry & Grains","Drinks & Mixers","Frozen & Ready"],de=[{name:"Seedless Grapes",aisle:"Produce",price:4.95},{name:"Mini Watermelon",aisle:"Produce",price:5.67},{name:"Butter Croissants",aisle:"Snacks & Bakery",price:4.97},{name:"Digestive Cookies",aisle:"Snacks & Bakery",price:3.47},{name:"Cheese Sticks / Cubes",aisle:"Dairy & Eggs",price:4.47},{name:"Crackers",aisle:"Snacks & Bakery",price:2.97},{name:"Frozen Kiwi",aisle:"Frozen & Ready",price:3.97},{name:"Coffee Pods",aisle:"Drinks & Mixers",price:14.97},{name:"Coke / Soda Cans",aisle:"Drinks & Mixers",price:6.97}];function z(e){const i=String(e).toLowerCase();return/hibiscus|jamaica|tea|juice|soda|coke|seltzer|sparkling|matcha|panela|sugar|honey|coffee/.test(i)?"Drinks & Mixers":/cookie|cracker|croissant|chip|dorito|snack/.test(i)?"Snacks & Bakery":/chicken|beef|steak|shrimp|salmon|tuna|sausage|charcuterie|prosciutto|ham/.test(i)?"Proteins":/egg|cheese|bocconcini|milk|butter|yogurt|cream/.test(i)?"Dairy & Eggs":/frozen|dumpling|gyoza|ice cream|kiwi/.test(i)?"Frozen & Ready":/tomato|onion|cucumber|salad|banana|plantain|strawberr|berr|mango|lime|lemon|avocado|garlic|pepper|mint|carrot|grape|watermelon/.test(i)?"Produce":"Pantry & Grains"}function F(e,i){const t=String(e).toLowerCase();return/shrimp|salmon|beef|steak|rotisserie/.test(t)?8.97:/chicken|charcuterie/.test(t)?6.97:/cheese|bocconcini|yogurt/.test(t)?4.47:/egg|milk|butter/.test(t)?3.97:/dumpling|gyoza|frozen/.test(t)?4.97:/salad|strawberr|berr|avocado/.test(t)?3.47:/baguette|bread|rice cake/.test(t)?1.97:/hibiscus|matcha|soda|juice/.test(t)?3.49:i==="Proteins"?6.5:i==="Produce"?2.5:i==="Dairy & Eggs"?3.8:i==="Drinks & Mixers"?3.2:i==="Frozen & Ready"?4.5:2.75}function B(e){return String(e||"").trim().replace(/\s+/g," ").slice(0,50)}function V(e,i={}){const t={};for(const[o,n]of Object.entries(i||{}))!n||!n.name||(t[o]={id:o,name:n.name,aisle:n.aisle||z(n.name),price:Number(n.price)>0?Number(n.price):F(n.name,n.aisle),inKitchen:!!n.inKitchen,everyday:!!n.everyday,usedBy:[]});for(const o of de){const n=o.name.toLowerCase();t[n]?t[n].everyday=!0:t[n]={id:n,name:o.name,aisle:o.aisle,price:o.price,inKitchen:!1,everyday:!0,usedBy:[]}}for(const o of e)for(const n of o.ingredients||[]){const s=B(n);if(!s)continue;const a=s.toLowerCase();if(t[a])t[a].usedBy.includes(o.id)||t[a].usedBy.push(o.id);else{const r=z(s);t[a]={id:a,name:s,aisle:r,price:F(s,r),inKitchen:!1,usedBy:[o.id]}}}return t}function Ce(e,i,t,o=[]){let n=[];{const u=i.filter(b=>b.kind==="meal"&&b.portions>=4).slice(0,2),d=i.filter(b=>b.kind==="meal"&&(b.effort==="nocook"||b.effort==="quick")&&b.portions<4).slice(0,4),p=i.filter(b=>b.kind==="drink"&&b.portions>=4).slice(0,1),g=i.filter(b=>b.kind==="snack").slice(0,2);n=[...u,...d,...p,...g]}const s=new Map;let a=0;const r=new Set;for(const u of n)for(const d of u.ingredients||[]){const p=B(d).toLowerCase(),g=t[p];if(g){if(g.inKitchen){r.has(p)||(r.add(p),a+=1);continue}if(!s.has(p))s.set(p,{...g,tripRecipes:[u.title]});else{const b=s.get(p);b.tripRecipes.includes(u.title)||b.tripRecipes.push(u.title)}}}{let d=0;for(const p of de){if(d>=3)break;const g=p.name.toLowerCase(),b=t[g];!b||b.inKitchen||s.has(g)||(s.set(g,{...b,tripRecipes:["Everyday Fruit & Snacks"]}),d+=1)}}const l=Array.from(s.values()),c={};for(const u of H)c[u]=[];for(const u of l){const d=H.includes(u.aisle)?u.aisle:"Pantry & Grains";c[d].push(u)}const m=l.reduce((u,d)=>u+(Number(d.price)||0),0);return{selectedRecipes:n,items:l,byAisle:c,alreadyHaveCount:a,estimatedTotal:m}}const ue="meal_cheat_v3",me=new Set(["rotisserie chicken","bagged salad","flour tortillas","cherry tomatoes","eggs","rice","soy sauce","butter","garlic","onions","bananas","limes","dried beans","pasta","jarred salsa","chicken breast","shredded cheese","bread","milk","potatoes","instant noodles","canned tuna","ground beef","beef","pork","shrimp","tofu","avocados","mayo","carrots","chicken broth","bell peppers","plantains","cinnamon","condensed milk","strawberries","mango"]);function x(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ie(e=new Date){const i=new Date(e);i.setHours(0,0,0,0);const t=(i.getDay()+6)%7;return i.setDate(i.getDate()-t),x(i)}function S(e){const i=Number(e)||0;return Number.isInteger(i)?`$${i}`:`$${i.toFixed(2)}`}function f(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pe(e,{allowDataImage:i=!1}={}){const t=String(e??"").trim();return t&&(/^https?:\/\//i.test(t)||i&&/^data:image\/(?:jpeg|jpg|png|webp|gif);base64,[A-Za-z0-9+/=\s]+$/i.test(t))?t:""}function Z(){const e=[...ce],i=V(e,{});for(const o of Object.keys(i))me.has(o)&&(i[o].inKitchen=!0);const t=x();return{activeTab:"eat",theme:"dark",energy:"zero",browseFilter:"all",search:"",browseLimit:30,pickIndex:0,shopSubTab:"list",shopSearch:"",budget:{monthlyCap:340,weeklyGrocery:55},recipes:e,catalog:i,shopList:[],spends:[],dayLog:{[t]:{meals:{b:!1,l:!1,d:!1},cooked:[]}}}}function he(e,i=Z()){var r,l;if(!e||typeof e!="object")return i;const n=[...(Array.isArray(e.recipes)?e.recipes:[]).filter(c=>c&&typeof c=="object"&&!c.builtIn),...ce],s=V(n,e.catalog||i.catalog);if(e.pantryVersion!==2&&Object.values(s).every(c=>!c.inKitchen))for(const c of Object.keys(s))me.has(c)&&(s[c].inKitchen=!0);const a=Array.isArray(e.shopList)?e.shopList.filter(c=>c&&typeof c=="object"&&c.name).map(c=>{const m=B(c.name),u=c.aisle||z(m);return{id:String(c.id||m.toLowerCase()),name:m,aisle:u,price:Math.max(0,Number(c.price)||F(m,u)),checked:!!c.checked}}):[];return{activeTab:e.activeTab==="shop"?"shop":"eat",theme:e.theme==="light"?"light":"dark",energy:["zero","low","some","mood"].includes(e.energy)?e.energy:"zero",browseFilter:["all","ready","meal","drink","snack","comfort"].includes(e.browseFilter)?e.browseFilter:"all",search:typeof e.search=="string"?e.search:"",browseLimit:Math.max(20,Number(e.browseLimit)||30),pickIndex:Math.max(0,Number(e.pickIndex)||0),shopSubTab:e.shopSubTab==="kitchen"?"kitchen":"list",shopSearch:typeof e.shopSearch=="string"?e.shopSearch:"",budget:{monthlyCap:Math.max(20,Number((r=e.budget)==null?void 0:r.monthlyCap)||340),weeklyGrocery:Math.max(10,Number((l=e.budget)==null?void 0:l.weeklyGrocery)||55)},recipes:n,catalog:s,shopList:a,spends:Array.isArray(e.spends)?e.spends.slice(-500):[],dayLog:e.dayLog&&typeof e.dayLog=="object"?e.dayLog:i.dayLog}}function je(e){const i=Object.keys(e.dayLog||{}).sort(),t={};for(const o of i.slice(-400))t[o]=e.dayLog[o];return{...e,pantryVersion:2,recipes:(e.recipes||[]).filter(o=>o&&!o.builtIn),dayLog:t,spends:(e.spends||[]).slice(-500)}}function Le(){const e=Z();try{const i=localStorage.getItem(ue);return i?he(JSON.parse(i),e):e}catch{return e}}let w=Le();const J=new Set;function M(){return w}function k(e,i={}){const{persist:t=!0,notify:o=!0}=typeof i=="boolean"?{notify:i}:i||{},n=w.recipes,s=typeof e=="function"?e(w):{...w,...e};if(s.recipes!==n&&(s.catalog=V(s.recipes,s.catalog)),w=s,t)try{localStorage.setItem(ue,JSON.stringify(je(w)))}catch{}return o&&J.forEach(a=>a(w)),w}function xe(e){return J.add(e),()=>J.delete(e)}function Be(){k(Z())}function ge(e=w){const i=x();return e.dayLog[i]||{meals:{b:!1,l:!1,d:!1},cooked:[]}}function N(e){return!e||!e.meals?0:(e.meals.b?1:0)+(e.meals.l?1:0)+(e.meals.d?1:0)}function fe(e=w){const i=x().slice(0,7);return(e.spends||[]).filter(t=>t.ts&&x(new Date(t.ts)).startsWith(i)).reduce((t,o)=>t+(Number(o.amount)||0),0)}function Te(e=w){const i=ie();return(e.spends||[]).filter(t=>t.ts&&ie(new Date(t.ts))===i).reduce((t,o)=>t+(Number(o.amount)||0),0)}function Ee(e=w){const i=x().slice(0,7);let t=0;for(const[o,n]of Object.entries(e.dayLog||{}))o.startsWith(i)&&(t+=N(n));return t*11}const Me={egg:["eggs"],eggs:["egg"],rice:["white rice","jasmine rice","brown rice","arroz"],"soy sauce":["salsa de soya","shoyu"],garlic:["ajo","garlic cloves","minced garlic"],onions:["onion","cebolla","red onion","green onion","scallions"],onion:["onions","cebolla"],limes:["lime","limon","limón","lemon"],milk:["leche"],butter:["mantequilla"],potatoes:["potato","papa","papas"],tomatoes:["cherry tomatoes","tomato","tomate","jitomate"],"cherry tomatoes":["tomatoes","tomato"],"chicken breast":["chicken","pollo","pechuga de pollo","rotisserie chicken"],"rotisserie chicken":["chicken breast","chicken","pollo"],"ground beef":["beef","carne molida"],"dried beans":["beans","frijoles","black beans"],"shredded cheese":["cheese","queso","mozzarella","cheddar"],avocados:["avocado","aguacate"],bananas:["banana","platano","plátano"]};function _e(e,i){var n;const t=B(e).toLowerCase();if(!t)return!1;if((n=i[t])!=null&&n.inKitchen||(Me[t]||[]).some(s=>{var a;return(a=i[s])==null?void 0:a.inKitchen}))return!0;for(const[s,a]of Object.entries(i||{}))if(!(!(a!=null&&a.inKitchen)||s.length<3)&&(t.includes(s)||s.includes(t)))return!0;return!1}function E(e,i=w.catalog){const t=(e==null?void 0:e.ingredients)||[];let o=0;const n=[];for(const s of t)_e(s,i)?o+=1:n.push(s);return{ready:n.length===0&&t.length>0,haveCount:o,totalCount:t.length,missing:n}}function Pe(e=w){const i=ge(e),t=new Date().getHours(),o=t<11?["breakfast","lunch","dinner"]:t<16?["lunch","dinner","breakfast"]:["dinner","lunch","breakfast"],n={breakfast:"b",lunch:"l",dinner:"d"};return o.find(s=>{var a;return!((a=i.meals)!=null&&a[n[s]])})||o[0]}const Re={meal:"🍲",drink:"🥤",snack:"🍿",comfort:"🫂"};function X(e,{hero:i=!1,extraPill:t=""}={}){const o=A[e.effort]||A.quick,n=i?"hero-photo-wrap":"recipe-photo-wrap",s=pe(e.image,{allowDataImage:!0}),a=!!s,r=e.emoji||Re[e.kind]||"🍲";return`
    <div class="${n}${a?"":" img-broken"}">
      ${a?`<img src="${f(s)}" alt="${f(e.title)}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('img-broken')">`:""}
      <span class="photo-fallback-em" aria-hidden="true">${r}</span>
      <div class="photo-overlay">
        <span class="photo-pill">${o.emoji||"⚡"} ${f(o.short)} · ${f(e.time||"5 min")}</span>
        ${t?`<span class="photo-pill">${f(t)}</span>`:""}
      </div>
    </div>
  `}function Ae(e,i=60,t=7,o="var(--accent)"){const n=(i-t)/2,s=2*Math.PI*n,a=Math.max(0,Math.min(100,e));return`
    <svg width="${i}" height="${i}" viewBox="0 0 ${i} ${i}" aria-hidden="true">
      <circle cx="${i/2}" cy="${i/2}" r="${n}" fill="none" stroke="var(--surface-2)" stroke-width="${t}"/>
      <circle cx="${i/2}" cy="${i/2}" r="${n}" fill="none" stroke="${o}" stroke-width="${t}"
        stroke-linecap="round" stroke-dasharray="${s.toFixed(1)}" stroke-dashoffset="${((1-a/100)*s).toFixed(1)}"/>
    </svg>
  `}const ze=[{key:"zero",label:"No-Cook · 2m",emoji:"⚡"},{key:"low",label:"Hands-Off",emoji:"🤖"},{key:"some",label:"Quick · 10m",emoji:"🍳"},{key:"mood",label:"Cooking Mood",emoji:"👨‍🍳"}],Fe=[{id:"all",label:"All"},{id:"ready",label:"Ready in Kitchen"},{id:"meal",label:"Meals"},{id:"drink",label:"Drinks"},{id:"snack",label:"Snacks"},{id:"comfort",label:"Comfort"}];function Oe(e,i,t){const o=E(e,t),n=e.effort===i?1:0,s=o.ready?2:0,a=o.totalCount>0?o.haveCount/o.totalCount:0;return s*100+n*40+a*10-(e.cost||0)*.2}function qe(e){const i=Ie[e.energy]||"nocook",t=e.recipes.filter(s=>s.effort===i).map(s=>({r:s,match:E(s,e.catalog),s:Oe(s,i,e.catalog)})),o=t.filter(s=>s.match.ready),n=o.length?o:t;return n.sort((s,a)=>a.s-s.s),n}function He(e){const i=qe(e),t=i.length?Math.abs(e.pickIndex||0)%i.length:0,o=i[t]||null,n=ge(e),s=N(n),a=Ee(e),r=String(e.search||"").trim().toLowerCase(),l=e.browseFilter||"all",c=e.recipes.filter(d=>!(l==="ready"&&!E(d,e.catalog).ready||["meal","drink","snack","comfort"].includes(l)&&d.kind!==l||r&&!`${d.title} ${d.author||""} ${(d.ingredients||[]).join(" ")} ${d.transcript||""}`.toLowerCase().includes(r))),m=e.browseLimit||30,u=c.slice(0,m);return`
    <section class="screen" aria-labelledby="eatHeading">
      <div>
        <h1 id="eatHeading">What can I eat right now?</h1>
        <p class="sub">Pick your energy — we’ll prioritize what’s already in your kitchen.</p>
      </div>

      <div class="chips" role="group" aria-label="How tired are you?">
        ${ze.map(d=>`
          <button type="button" class="chip" data-action="set-energy" data-energy="${d.key}" aria-pressed="${e.energy===d.key}">
            <span>${d.emoji}</span> ${d.label}
          </button>
        `).join("")}
      </div>

      ${o?`
        <article class="card highlight" aria-live="polite">
          ${X(o.r,{hero:!0,extraPill:`${S(o.r.cost)} / serving`})}
          <div>
            <div class="row" style="margin-bottom:6px">
              <span class="tag ${o.match.ready?"ok":"warn"}">
                ${o.match.ready?"✓ Ready in kitchen":`Need ${o.match.missing.length} item${o.match.missing.length===1?"":"s"}`}
              </span>
              <span class="tag">${f(o.r.time||"5 min")}</span>
              ${i.length>1?`<span class="tag">Idea ${t+1} of ${i.length}</span>`:""}
            </div>
            <h2>${f(o.r.title)}</h2>
            <p class="sub" style="margin-top:4px">${f((o.r.ingredients||[]).slice(0,6).join(", "))}</p>
          </div>
          <div class="row">
            <button type="button" class="btn primary" style="flex:1" data-action="open-cook" data-id="${f(o.r.id)}">Cook This</button>
            <button type="button" class="btn" data-action="next-pick">Next Idea ↻</button>
            ${o.match.missing.length?`
              <button type="button" class="btn small" data-action="add-missing-to-trip" data-id="${f(o.r.id)}">+ Add ${o.match.missing.length} Missing</button>
            `:""}
          </div>
        </article>
      `:`
        <article class="card">
          <p class="sub">No recipes in this energy level yet. Tap <b>+ Add</b> below or switch to <b>My Kitchen</b> in Shop.</p>
        </article>
      `}

      <article class="card">
        <div class="today-top">
          <div>
            <h2>Today’s Home Meals</h2>
            <p class="sub" style="margin-top:4px">Tap a meal when you eat at home · <b>Est. saved this month: ${S(a)}</b></p>
          </div>
          <div class="meal-ring" aria-label="${s} of 3 home meals today">
            ${Ae(s/3*100,60,7)}
            <span>${s}/3</span>
          </div>
        </div>

        <div class="slots-grid" role="group" aria-label="Log today's 3 home meals">
          ${Y.map(d=>{var p;return`
            <button type="button" class="slot-btn" data-action="toggle-slot" data-slot-key="${d.key}" aria-pressed="${!!((p=n.meals)!=null&&p[d.key])}">
              <span class="sl-em">${d.emoji}</span>
              <span>${d.label}</span>
            </button>
          `}).join("")}
        </div>
      </article>

      <div class="browse-head">
        <h2>Browse Recipes</h2>
        <span class="sub">${c.length} recipes</span>
      </div>

      <div class="search-bubble">
        <input id="eatSearchInput" class="input" type="search" placeholder="Search recipe, @creator, or ingredient..." value="${f(e.search||"")}" data-input="eat-search">
        <button type="button" class="btn primary search-add-btn" data-action="open-add-recipe">+ Add</button>
      </div>

      <div class="chips" role="group" aria-label="Filter recipes">
        ${Fe.map(d=>`
          <button type="button" class="chip" data-action="browse-filter" data-v="${d.id}" aria-pressed="${l===d.id}">
            ${d.label}
          </button>
        `).join("")}
      </div>

      <div class="recipe-grid">
        ${u.map(d=>{const p=E(d,e.catalog);return`
            <button type="button" class="recipe-card" data-action="open-cook" data-id="${f(d.id)}">
              ${X(d,{extraPill:S(d.cost)})}
              <div class="recipe-card-body">
                <div class="recipe-card-title">${f(d.title)}</div>
                <div class="recipe-card-meta">
                  <span class="tag ${p.ready?"ok":"warn"}">${p.ready?`✓ Ready (${p.totalCount}/${p.totalCount})`:`${p.haveCount}/${p.totalCount} stocked`}</span>
                  ${d.author?`<span class="tag">${f(d.author)}</span>`:""}
                </div>
              </div>
            </button>
          `}).join("")}
      </div>

      ${c.length>u.length?`
        <button type="button" class="btn block" data-action="more-browse">
          Show More (${c.length-u.length} remaining)
        </button>
      `:""}
    </section>
  `}function Ne(e){var m,u;const i=e.shopList||[],t=Te(e),o=fe(e),n=Number((m=e.budget)==null?void 0:m.weeklyGrocery)||55,s=Number((u=e.budget)==null?void 0:u.monthlyCap)||340,a=Math.min(100,Math.round(t/Math.max(1,n)*100)),r=i.filter(d=>!d.checked).reduce((d,p)=>d+(Number(p.price)||0),0),l=i.filter(d=>d.checked).length,c=new Map;for(const d of[...H,"Other"])c.set(d,[]);for(const d of i){const p=c.has(d.aisle)?d.aisle:"Other";c.get(p).push(d)}return`
    <article class="card highlight">
      <div class="row-between">
        <div>
          <h2>Weekly Food Budget</h2>
          <p class="sub">${S(t)} spent this week · <b>${S(s-o)}</b> left this month</p>
        </div>
        <span class="tag ${t<=n?"ok":"warn"}">${S(t)} / ${S(n)}</span>
      </div>

      <div class="progress-track">
        <div class="progress-fill" style="width:${a}%;background:${t<=n?"var(--accent)":"var(--danger)"}"></div>
      </div>

      <form class="spend-form" data-form="log-spend">
        <input class="input" name="label" required placeholder="Log spend (e.g. Trader Joe's, Pizza)" maxlength="45">
        <input class="input spend-amt" name="amount" type="number" step="0.01" min="0.5" required placeholder="$">
        <button type="submit" class="btn small">Log</button>
      </form>
    </article>

    <article class="card">
      <div class="row-between">
        <div>
          <h2>Grocery List</h2>
          <p class="sub">${i.length?`${i.length-l} left to grab · Est. ${S(r)}`:"Add items from recipes or quick-fill budget staples."}</p>
        </div>
        <div class="row" style="gap:6px">
          ${l>0?'<button type="button" class="btn small" data-action="clear-checked-shop">Clear Checked</button>':""}
          <button type="button" class="btn small primary" data-action="suggest-staples">Suggest Staples</button>
        </div>
      </div>

      <form class="spend-form" data-form="add-shop-item">
        <input class="input" name="name" required placeholder="Add item (e.g. Milk, Bananas, Tortillas)..." maxlength="50">
        <input class="input spend-amt" name="price" type="number" step="0.1" min="0" placeholder="$">
        <button type="submit" class="btn small primary">+ Add</button>
      </form>

      ${i.length?Array.from(c.entries()).filter(([,d])=>d.length).map(([d,p])=>`
        <div class="aisle-group">
          <div class="aisle-head">${f(d)}</div>
          ${p.map(g=>`
            <div class="shop-row">
              <button type="button" class="check-item" data-action="toggle-shop-item" data-id="${f(g.id)}" aria-pressed="${!!g.checked}">
                <span class="check-box">${g.checked?"✓":""}</span>
                <span class="check-name">${f(g.name)}</span>
              </button>
              <span class="sub" style="font-variant-numeric:tabular-nums">${S(g.price)}</span>
              <button type="button" class="btn small ghost" data-action="remove-shop-item" data-id="${f(g.id)}" aria-label="Remove item">×</button>
            </div>
          `).join("")}
        </div>
      `).join(""):`
        <p class="sub" style="padding:8px 0">Your grocery list is empty. Checking items bought automatically stocks them in <b>My Kitchen</b> and logs what you spent.</p>
      `}
    </article>
  `}function De(e){const i=String(e.shopSearch||"").trim().toLowerCase(),t=Object.values(e.catalog||{}).filter(s=>!i||s.name.toLowerCase().includes(i)).sort((s,a)=>s.name.localeCompare(a.name)),o=Object.values(e.catalog||{}).filter(s=>s.inKitchen).length,n=new Map;for(const s of H)n.set(s,[]);for(const s of t){const a=n.has(s.aisle)?s.aisle:"Pantry & Grains";n.get(a).push(s)}return`
    <article class="card">
      <div>
        <h2>What’s in your kitchen?</h2>
        <p class="sub"><b>${o}</b> items stocked — tap to toggle. Dishes on <b>Eat</b> update automatically.</p>
      </div>

      <div class="search-bubble">
        <input id="kitchenSearchInput" class="input" type="search" placeholder="Filter kitchen ingredients..." value="${f(e.shopSearch||"")}" data-input="shop-search">
      </div>

      ${Array.from(n.entries()).filter(([,s])=>s.length).map(([s,a])=>`
        <div class="aisle-group">
          <div class="aisle-head">${f(s)} (${a.filter(r=>r.inKitchen).length}/${a.length})</div>
          <div class="chips">
            ${a.slice(0,60).map(r=>`
              <button type="button" class="chip" data-action="toggle-kitchen" data-id="${f(r.id)}" aria-pressed="${!!r.inKitchen}">
                ${r.inKitchen?"✓ ":""}${f(r.name)}
              </button>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </article>
  `}function Ge(e){const i=e.shopSubTab==="kitchen"?"kitchen":"list";return`
    <section class="screen" aria-labelledby="shopHeading">
      <div>
        <h1 id="shopHeading">Shop &amp; Kitchen</h1>
        <p class="sub">Buy only what’s missing, track grocery spend, and keep your kitchen updated.</p>
      </div>

      <div class="segmented" role="group" aria-label="Shop view">
        <button type="button" data-action="shop-sub" data-sub="list" aria-pressed="${i==="list"}">🛒 Grocery List</button>
        <button type="button" data-action="shop-sub" data-sub="kitchen" aria-pressed="${i==="kitchen"}">🧊 My Kitchen</button>
      </div>

      ${i==="kitchen"?De(e):Ne(e)}
    </section>
  `}let D=null,_=new Set,C=null,G=0;function Ke(e){const i=String(e).match(/(\d+)\s*(?:–|-|to)?\s*(\d+)?\s*min/i);return i&&Number(i[2]||i[1])||0}function K(){const e=document.getElementById("cookTimerBox");if(!e)return;if(!G){e.hidden=!0;return}const i=Math.max(0,G-Date.now()),t=Math.ceil(i/1e3),o=Math.floor(t/60),n=String(t%60).padStart(2,"0");e.hidden=!1,e.querySelector(".timer-clock").textContent=i<=0?"Done!":`${o}:${n}`,i<=0&&C&&(clearInterval(C),C=null)}function Ue(e){C&&clearInterval(C),G=Date.now()+e*60*1e3,K(),C=setInterval(K,500)}function We(){C&&clearInterval(C),C=null,G=0,K()}function be(e,i){const t=document.getElementById("cookOverlay");if(!t||!e)return;D!==e.id&&(D=e.id,_=new Set);const o=A[e.effort]||A.quick,n=E(e,i.catalog),s=Pe(i),a=Y.find(l=>l.id===s)||Y[2],r=pe(e.sourceUrl);t.innerHTML=`
    <div class="wrap" style="padding-block:16px 96px;display:grid;gap:14px">
      <div class="row-between">
        <button type="button" class="btn small" data-action="close-cook">← Back</button>
        <div class="row">
          ${r?`<a class="btn small" href="${f(r)}" target="_blank" rel="noopener noreferrer">▶ Watch Source</a>`:""}
          ${e.builtIn?"":`<button type="button" class="btn small danger" data-action="delete-recipe" data-id="${f(e.id)}">Delete</button>`}
        </div>
      </div>

      <div id="cookTimerBox" class="card highlight" hidden style="padding:10px 14px">
        <div class="row-between">
          <span>⏱ Timer: <b class="timer-clock">0:00</b></span>
          <button type="button" class="btn small" data-action="stop-cook-timer">Dismiss</button>
        </div>
      </div>

      ${X(e,{hero:!0,extraPill:`${S(e.cost)} / serving`})}

      <div>
        <div class="row" style="margin-bottom:6px">
          <span class="tag">${o.emoji||"⚡"} ${f(o.label)}</span>
          <span class="tag">⏱ ${f(e.time||"5 min")}</span>
          ${e.author?`<span class="tag">${f(e.author)}</span>`:""}
          ${e.portions>1?`<span class="tag ok">Makes ${e.portions} ${e.kind==="drink"?"glasses":"portions"}</span>`:""}
        </div>
        <h1>${f(e.title)}</h1>
      </div>

      <article class="card">
        <div class="row-between">
          <h2>Ingredients</h2>
          ${n.missing.length?`
            <button type="button" class="btn small primary" data-action="add-missing-to-trip" data-id="${f(e.id)}">
              + Add ${n.missing.length} missing to Shop
            </button>
          `:'<span class="tag ok">✓ All stocked in kitchen</span>'}
        </div>
        <div class="row" style="gap:6px;flex-wrap:wrap">
          ${(e.ingredients||[]).map(l=>{const c=n.missing.includes(l);return`<span class="tag ${c?"warn":"ok"}">${c?"Need: ":"✓ "}${f(l)}</span>`}).join("")}
        </div>
      </article>

      <div style="display:grid;gap:10px">
        <h2>Steps (tap to check off)</h2>
        ${(e.steps||[]).map((l,c)=>{const m=Ke(l),u=_.has(c);return`
            <div style="display:grid;gap:6px">
              <button type="button" class="step-btn" data-action="toggle-step" data-idx="${c}" aria-pressed="${u}">
                <span class="step-num">${u?"✓":c+1}</span>
                <span>${f(l)}</span>
              </button>
              ${m>0?`<button type="button" class="btn small" style="justify-self:start" data-action="start-cook-timer" data-min="${m}">⏱ Start ${m} min timer</button>`:""}
            </div>
          `}).join("")}
      </div>

      ${e.transcript?`
        <details class="card">
          <summary style="cursor:pointer;font-weight:700">📝 Video Transcript / Notes</summary>
          <p class="sub" style="margin-top:8px;white-space:pre-line;line-height:1.5;color:var(--fg)">${f(e.transcript)}</p>
        </details>
      `:""}

      <button type="button" class="btn primary block" data-action="complete-recipe" data-id="${f(e.id)}" data-slot-key="${a.key}">
        ✓ I cooked &amp; ate this! (Log ${a.label})
      </button>
    </div>
  `,t.hidden=!1,t.scrollTop=0,document.body.style.overflow="hidden",K()}function Ye(e,i){_.has(e)?_.delete(e):_.add(e);const t=i.recipes.find(o=>o.id===D);t&&be(t,i)}function U(){const e=document.getElementById("cookOverlay");e&&(e.hidden=!0),document.body.style.overflow="",D=null}let j="youtube",L="",I="";const Je=["chicken breast","chicken thigh","chicken","ground beef","beef","pork","bacon","sausage","salmon","shrimp","tuna","tilapia","tofu","eggs","egg","white rice","jasmine rice","brown rice","rice","pasta","spaghetti","noodles","ramen","udon","bread","tortilla","tortillas","flour","oats","quinoa","beans","black beans","chickpeas","lentils","olive oil","sesame oil","vegetable oil","butter","ghee","coconut milk","heavy cream","milk","yogurt","sour cream","cream cheese","mozzarella","cheddar","parmesan","feta","cheese","garlic","onion","red onion","green onion","scallion","scallions","shallot","ginger","tomato","tomatoes","cherry tomatoes","tomato paste","jarred salsa","salsa","marinara","avocado","lime","lemon","cilantro","parsley","basil","spinach","kale","lettuce","cabbage","broccoli","bell pepper","jalapeno","chili","carrot","carrots","celery","cucumber","corn","potato","potatoes","sweet potato","mushroom","mushrooms","zucchini","mango","banana","strawberry","soy sauce","fish sauce","oyster sauce","chili oil","sriracha","hot sauce","vinegar","rice vinegar","honey","maple syrup","sugar","brown sugar","salt","black pepper","pepper","cumin","paprika","oregano","chili flakes","red pepper flakes","broth","chicken broth","vegetable broth","water","ice"],Xe=/\b(add|mix|stir|whisk|combine|toss|cook|heat|warm|fry|pan-fry|saute|sauté|sear|brown|bake|roast|boil|simmer|steam|blend|puree|chop|dice|slice|mince|pour|drizzle|serve|season|sprinkle|top|preheat|air fry|microwave|marinate|drain|rinse|fold|mash|grill)\b/i,Qe=/^(?:[-*•]\s+(?:[▢☐□✓]|\[[ xX]?\])\s*|\s*(?:[▢☐□✓]|\[[ xX]?\])\s+|[-*•]\s+(?:[¼½¾⅓⅔⅛]|\d+(?:[./]\d+)?)\s*(?:cups?|tbsp|tsp|tablespoons?|teaspoons?|oz|ounces?|lbs?\.?|g|kg|ml|cloves?|cans?|slices?|pinch|dash)\b)/i;function P(e){return String(e||"").replace(/!\[[^\]]*\]\([^)]+\)/g," ").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`~]/g,"").replace(/^[\s•▢☐□✓✕\-\*]+(?:\[\s*[xX ]?\s*\])?\s*/,"").replace(/^\d+[.)]\s+/,"").replace(/\s+/g," ").trim()}function se(e,i,t,{preferNumberedOrBulleted:o=!0,maxItems:n=18}={}){const s=String(e||"").split(/\n/),a=[];for(let l=0;l<s.length;l++){const c=s[l].trim(),m=(s[l+1]||"").trim(),u=/^[-=]{3,}$/.test(m),d=P(c.replace(/^#{1,6}\s*/,""));(/^#{1,6}\s*/.test(c)||u||/^(?:\*\*|__)?[A-Za-z &/]+(?:\*\*|__)?\s*:?$/.test(c))&&i.test(d)&&a.push(u?l+2:l+1)}let r=[];for(const l of a){const c=[];for(let m=l;m<s.length;m++){const u=s[m].trim();if(!u){if(c.length>=2&&m+1<s.length&&/^#{1,6}\s*/.test(s[m+1].trim()))break;continue}if(/^[-=]{3,}$/.test(u))continue;const d=/^#{1,6}\s+/.test(u)||m+1<s.length&&/^[-=]{3,}$/.test(s[m+1].trim()),p=P(u.replace(/^#{1,6}\s*/,""));if(d||t.test(p)){if(c.length)break;continue}if(/^!\[.*\]\(.*\)$/.test(u))continue;const g=/^([-*•▢☐□]|\[[ xX]?\]|\d+[.)])\s+/.test(u);if(o&&!g&&u.length>140)continue;const b=P(u);if(b.length>=2&&b.length<=260&&!/^(US Customary|Metric|1x|2x|3x|Print|Pin|Jump to)/i.test(b)&&(c.push(b),c.length>=n))break}c.length>=r.length&&c.length>=2&&(r=c)}return r}function Ve(e){const i=String(e||"").split(/\n/),t=[];let o=[];for(let l=0;l<i.length;l++){const c=i[l].trim();if(Qe.test(c)&&c.length<180)o.push({idx:l,text:P(c).replace(/\s*\*+$/,"").replace(/\([^)]*\$\d[^)]*\)/g,"").trim()});else if(c)o.length>=2&&t.push(o),o=[];else continue}if(o.length>=2&&t.push(o),!t.length)return{ingredients:[],steps:[]};const n=t.reduce((l,c)=>c.length>l.length?c:l,[]),s=n[n.length-1].idx+1,a=[];let r=!1;for(let l=s;l<Math.min(i.length,s+45);l++){const c=i[l].trim();if(!c)continue;if(/^#{1,6}\s+/.test(c)&&/nutrition|notes|video|storage|reheat|more|related/i.test(c))break;if(!/^(?:[-*•]\s+|\d+[.)]\s+)/.test(c)){if(r&&!/^\[Video/i.test(c)&&!/^!\[/i.test(c))break;continue}r=!0;const u=P(c).replace(/\s*\*+$/,"").trim();if(u.length>=10&&u.length<=280&&(a.push(u),a.length>=10))break}return{ingredients:n.map(l=>l.text).filter(Boolean).slice(0,18),steps:a}}function Ze(e,i={}){const t=String(e||"").replace(/WEBVTT/gi," ").replace(/\d{1,2}:\d{2}:\d{2}[.,]\d{3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[.,]\d{3}/g," ").replace(/\[?\b\d{1,2}:\d{2}(?::\d{2})?\b\]?/g," ").replace(/\r+/g,`
`).trim();if(!t)return{ingredients:[],steps:[],timeHint:""};const o=Ve(t),n=se(t,/^ingredients\b/i,/^(instructions|directions|steps|method|preparation|notes|nutrition|equipment|video|leave a|comments?|rate this)\b/i,{preferNumberedOrBulleted:!0,maxItems:18}),s=se(t,/^(instructions|directions|steps|method|preparation|how to make)\b/i,/^(notes|nutrition|equipment|video|leave a|comments?|rate this|more recipes|related)\b/i,{preferNumberedOrBulleted:!1,maxItems:10}),a=t.replace(/^\s*\d+\s*$/gm," ").trim(),r=a.toLowerCase(),l=Object.values(i||{}).map(p=>String((p==null?void 0:p.name)||"").trim()).filter(Boolean),c=[...new Set([...l,...Je])].sort((p,g)=>g.length-p.length);let m=n.length>=2?n:o.ingredients;if(!m.length){m=[];const p=new Set;for(const $ of c){const y=$.toLowerCase();if(y.length<3||p.has(y))continue;const O=y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`\\b${O}s?\\b`,"i").test(r)&&(p.add(y),m.push($.replace(/\b\w/g,ve=>ve.toUpperCase())))}const g=/\b(?:\d+(?:\/\d+)?|half|a|one|two|three)\s+(?:cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lbs?|cloves?|cans?|slices?|handfuls?)\s+(?:of\s+)?([a-z][a-z\s-]{2,24}?)(?=[,.;!\n]|\band\b|\binto\b|\bto\b|$)/gi;let b;for(;(b=g.exec(a))!==null;){const $=b[1].trim(),y=$.toLowerCase();y.length>=3&&!p.has(y)&&!/^(water|heat|oil)$/i.test(y)&&(p.add(y),m.push($.replace(/\b\w/g,O=>O.toUpperCase())))}}let u=s.length>=2?s:o.steps;u.length||(u=a.split(/[\n.!?]+/).map(g=>g.replace(/^\s*(?:hey guys|welcome back|today we(?:'re| are)|subscribe|like and follow|don't forget to)[^,]*,?\s*/i,"").trim()).filter(g=>g.length>=12&&g.length<=180&&Xe.test(g)).slice(0,6).map(g=>g.charAt(0).toUpperCase()+g.slice(1)+"."));const d=t.match(/(?:total time|cook time|prep time|ready in)?[:\s]*\b(\d{1,2})\s*(?:min|mins|minutes?)\b/i);return{ingredients:m.slice(0,16),steps:u,timeHint:d?`${d[1]} min`:""}}function ke(e){const i=String(e||"").trim();if(!i)return"";const t=i.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);return t?t[1]:""}function et(e="youtube"){j=e,L="",I="";const i=document.getElementById("modalRoot");i&&(i.innerHTML=`
    <div class="modal-card">
      <div class="row-between">
        <h2>+ Add Recipe</h2>
        <button type="button" class="btn small ghost" data-action="close-modal" aria-label="Close">✕</button>
      </div>
      <p class="sub">Saved ingredients automatically appear in Shop &amp; Kitchen.</p>

      <div class="segmented" role="group" aria-label="Import method">
        <button type="button" data-action="add-mode" data-mode="youtube" aria-pressed="${j!=="text"}">🔗 Link / Video</button>
        <button type="button" data-action="add-mode" data-mode="text" aria-pressed="${j==="text"}">📝 Text / File</button>
      </div>

      <form id="addRecipeForm" data-form="save-recipe" style="display:grid;gap:14px">
        <div id="addUrlWrap" class="field" ${j==="text"?"hidden":""}>
          <div class="row-between">
            <label for="addUrlInput">Link (Blog, YouTube, IG, Reddit)</label>
            <button type="button" id="autoFetchBtn" class="btn small">Auto-Fill</button>
          </div>
          <input id="addUrlInput" class="input" name="sourceUrl" type="url" placeholder="Paste recipe blog or video URL...">
        </div>

        <div id="addImgWrap" class="field" ${j!=="text"?"hidden":""}>
          <label>Photo URL or Upload</label>
          <input id="addImageInput" class="input" name="imageUrl" type="url" placeholder="https://.../food-photo.jpg">
          <input id="addFileInput" type="file" accept="image/*" style="font-size:13px">
        </div>

        <div id="addPhotoPreview" class="hero-photo-wrap img-broken" style="max-height:140px" hidden>
          <img id="addPreviewImg" alt="Recipe preview">
          <span class="photo-fallback-em">📷</span>
        </div>

        <div id="addThumbPicker" class="thumb-picker" hidden>
          <div class="row-between">
            <span class="sub" style="font-size:12px">Pick best food frame:</span>
            <button type="button" id="toggleCustomPhotoBtn" class="btn small">Upload photo</button>
          </div>
          <div id="addThumbGrid" class="thumb-picker-grid" role="group" aria-label="Choose video frame thumbnail"></div>
        </div>

        <div class="field">
          <div class="row-between" style="gap:6px;flex-wrap:wrap">
            <label for="addTranscriptInput">Recipe Text / Transcript</label>
            <div class="row" style="gap:6px">
              <label class="btn small" style="cursor:pointer;margin:0">
                Load .txt/.srt
                <input id="addTextFileInput" type="file" accept=".txt,.md,.srt,.vtt,text/plain" hidden>
              </label>
              <button type="button" id="pullTranscriptBtn" class="btn small">Pull Ingredients</button>
            </div>
          </div>
          <textarea id="addTranscriptInput" class="input" name="transcript" style="min-height:80px" placeholder="Auto-filled from recipe blogs, or paste captions / drop a .txt or .srt file..."></textarea>
          <span id="transcriptStatus" class="sub" style="font-size:12px">Paste a blog link above or drop text below to extract ingredients &amp; steps.</span>
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
              ${Object.values(A).map(t=>`<option value="${t.id}">${f(t.short)}</option>`).join("")}
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

        <button type="submit" class="btn primary block">Save Recipe</button>
      </form>
    </div>
  `,i.hidden=!1,it())}function R(e){const i=document.getElementById("addPhotoPreview"),t=document.getElementById("addPreviewImg");!i||!t||(e?(i.hidden=!1,t.onload=()=>i.classList.remove("img-broken"),t.onerror=()=>i.classList.add("img-broken"),t.src=e):(i.hidden=!0,i.classList.add("img-broken"),t.removeAttribute("src")))}function Q(e){const i=document.getElementById("addThumbPicker"),t=document.getElementById("addThumbGrid");if(!i||!t)return;if(!e){i.hidden=!0,t.innerHTML="",I="";return}const o=[{key:"hqdefault",label:"Cover",url:`https://i.ytimg.com/vi/${e}/hqdefault.jpg`},{key:"hq1",label:"25%",url:`https://i.ytimg.com/vi/${e}/hq1.jpg`},{key:"hq2",label:"50%",url:`https://i.ytimg.com/vi/${e}/hq2.jpg`},{key:"hq3",label:"75%",url:`https://i.ytimg.com/vi/${e}/hq3.jpg`}];(!I||!o.some(n=>n.url===I))&&(I=o[0].url),L||R(I),t.innerHTML=o.map(n=>`
    <button type="button" class="thumb-opt" data-thumb-url="${n.url}" aria-pressed="${!L&&I===n.url}">
      <img src="${n.url}" alt="${n.label} video frame" loading="lazy">
      <span>${n.label}</span>
    </button>
  `).join(""),i.hidden=!1,t.querySelectorAll(".thumb-opt").forEach(n=>{n.addEventListener("click",()=>{L="",I=n.dataset.thumbUrl||"",t.querySelectorAll(".thumb-opt").forEach(s=>s.setAttribute("aria-pressed",String(s===n))),R(I)})})}function tt(e){j=e==="text"?"text":"youtube";const i=document.getElementById("addUrlWrap"),t=document.getElementById("addImgWrap");document.querySelectorAll('[data-action="add-mode"]').forEach(o=>{o.setAttribute("aria-pressed",String(o.dataset.mode===j))}),j==="youtube"?(i.hidden=!1,t.hidden=!0):(i.hidden=!0,t.hidden=!1)}function q(e,{overwrite:i=!1}={}){const t=document.getElementById("addIngredientsInput"),o=document.getElementById("addStepsInput"),n=document.getElementById("addTimeInput"),s=document.getElementById("transcriptStatus");if(!t||!o)return;const{ingredients:a,steps:r,timeHint:l}=Ze(e,M().catalog);a.length&&(i||!t.value.trim())&&(t.value=a.join(", ")),r.length&&(i||!o.value.trim())&&(o.value=r.join(`
`)),l&&n&&(i||n.value==="10 min")&&(n.value=l),s&&(s.textContent=a.length||r.length?`Pulled ${a.length} ingredient${a.length===1?"":"s"} & ${r.length} step${r.length===1?"":"s"} ✓`:"No ingredients matched yet — type or paste recipe lines below.")}async function ne(e){const i=String(e||"").trim();if(!i)return;const t=document.getElementById("addTitleInput"),o=document.getElementById("addTranscriptInput"),n=document.getElementById("transcriptStatus"),s=r=>{n&&(n.textContent=r)},a=ke(i);if(a){if(Q(a),s("Loading YouTube title & frames..."),t&&!t.value.trim())try{const r=await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${a}&format=json`,{signal:AbortSignal.timeout(7e3)});if(r.ok){const l=await r.json();l.title&&!t.value.trim()&&(t.value=String(l.title).slice(0,80))}}catch{}o&&!o.value.trim()&&s("Pick the best food frame above, and paste captions/transcript below.");return}if(Q(""),/(instagram\.com|instagr\.am|facebook\.com|fb\.watch)/i.test(i)){const r=document.getElementById("addImgWrap");r&&(r.hidden=!1),s("Instagram/Facebook restricts auto-fetch — paste the caption/transcript or load a .txt/.srt file.");return}if(/^https?:\/\//i.test(i)){s("Reading recipe page...");try{const r=await fetch(`https://r.jina.ai/${i}`,{signal:AbortSignal.timeout(9e3)});if(r.ok){const l=await r.text(),c=l.match(/^Title:\s*(.+)$/m)||l.match(/^#\s+(.+)$/m);t&&c&&!t.value.trim()&&(t.value=c[1].replace(/\s*:\s*r\/\w+.*$/,"").trim().slice(0,80));const m=l.replace(/^Title:.*$/m,"").replace(/^URL Source:.*$/m,"").replace(/^Markdown Content:\s*/m,"").trim();if(m&&!/whoa there, pardner|just a moment/i.test(m.slice(0,400))){if(o){const u=m.toLowerCase().lastIndexOf("ingredients");o.value=u>400?m.slice(Math.max(0,u-120),u+7880):m.slice(0,8e3)}q(m,{overwrite:!1});return}}}catch{}s("Could not auto-read that link — paste the recipe text or load a .txt/.srt file below.")}}function it(){const e=document.getElementById("addUrlInput"),i=document.getElementById("autoFetchBtn"),t=document.getElementById("toggleCustomPhotoBtn"),o=document.getElementById("addImgWrap"),n=document.getElementById("addImageInput"),s=document.getElementById("addFileInput"),a=document.getElementById("addTextFileInput"),r=document.getElementById("addTranscriptInput"),l=document.getElementById("pullTranscriptBtn");l==null||l.addEventListener("click",()=>q((r==null?void 0:r.value)||"",{overwrite:!0})),r==null||r.addEventListener("paste",()=>setTimeout(()=>q(r.value,{overwrite:!1}),20)),a==null||a.addEventListener("change",m=>{var p;const u=(p=m.target.files)==null?void 0:p[0];if(!u)return;const d=new FileReader;d.onload=()=>{const g=String(d.result||"");r&&(r.value=g),q(g,{overwrite:!0})},d.readAsText(u)}),t==null||t.addEventListener("click",()=>{o&&(o.hidden=!o.hidden)}),i==null||i.addEventListener("click",()=>ne(e==null?void 0:e.value));let c=0;e==null||e.addEventListener("input",()=>{clearTimeout(c);const m=e.value.trim();if(!m){Q(""),R("");return}c=setTimeout(()=>ne(m),450)}),n==null||n.addEventListener("input",()=>{L="",I="",R(n.value.trim())}),s==null||s.addEventListener("change",m=>{var p;const u=(p=m.target.files)==null?void 0:p[0];if(!u)return;const d=new FileReader;d.onload=()=>{const g=new Image;g.onload=()=>{const $=Math.min(1,640/g.width),y=document.createElement("canvas");y.width=Math.round(g.width*$),y.height=Math.round(g.height*$),y.getContext("2d").drawImage(g,0,0,y.width,y.height),L=y.toDataURL("image/jpeg",.78),R(L)},g.src=String(d.result)},d.readAsDataURL(u)})}function st(){return L||I}function T(){const e=document.getElementById("modalRoot");e&&(e.hidden=!0,e.innerHTML="")}function oe(e){var t,o,n;const i=document.getElementById("modalRoot");i&&(i.innerHTML=`
    <div class="modal-card">
      <div class="row-between">
        <h2>Budget &amp; Settings</h2>
        <button type="button" class="btn small ghost" data-action="close-modal" aria-label="Close">✕</button>
      </div>

      <form data-form="save-budget" style="display:grid;gap:12px">
        <div class="form-grid-2">
          <div class="field">
            <label>Monthly Food Cap ($)</label>
            <input class="input" type="number" name="monthlyCap" min="40" value="${Number((t=e.budget)==null?void 0:t.monthlyCap)||340}">
          </div>
          <div class="field">
            <label>Weekly Target ($)</label>
            <input class="input" type="number" name="weeklyGrocery" min="15" value="${Number((o=e.budget)==null?void 0:o.weeklyGrocery)||55}">
          </div>
        </div>
        <button type="submit" class="btn primary block">Save Budget</button>
      </form>

      <div class="row-between" style="border-top:1px solid var(--line);padding-top:12px">
        <div>
          <strong>Theme</strong>
          <p class="sub">Switch dark or light mode</p>
        </div>
        <button type="button" class="btn small" data-action="toggle-theme">
          ${e.theme==="dark"?"☀️ Light Mode":"🌙 Dark Mode"}
        </button>
      </div>

      <div style="border-top:1px solid var(--line);padding-top:12px;display:grid;gap:8px">
        <strong>Your Data (Saved Locally)</strong>
        <div class="row" style="gap:8px">
          <button type="button" class="btn small" style="flex:1" data-action="export-backup">Export Backup</button>
          <label class="btn small" style="flex:1;cursor:pointer;margin:0;text-align:center">
            Import Backup
            <input id="importJsonInput" type="file" accept="application/json" hidden>
          </label>
        </div>
        <button type="button" class="btn small danger block" data-action="reset-app">Reset All Data</button>
      </div>
    </div>
  `,i.hidden=!1,(n=document.getElementById("importJsonInput"))==null||n.addEventListener("change",s=>{var l;const a=(l=s.target.files)==null?void 0:l[0];if(!a)return;const r=new FileReader;r.onload=()=>{window.dispatchEvent(new CustomEvent("mealcheat:import",{detail:String(r.result||"")}))},r.readAsText(a)}))}let ae=null;function v(e){const i=document.getElementById("toast");i&&(i.textContent=e,i.hidden=!1,clearTimeout(ae),ae=setTimeout(()=>{i.hidden=!0},2600))}function nt(e){document.documentElement.setAttribute("data-theme",e==="light"?"light":"dark");const i=document.querySelector('meta[name="theme-color"]');i&&i.setAttribute("content",e==="light"?"#f6f7f9":"#0e1116")}function ot(e){var t;const i=document.getElementById("budgetPill");if(i){const o=(Number((t=e.budget)==null?void 0:t.monthlyCap)||340)-fe(e);i.textContent=o<0?`${S(Math.abs(o))} over`:`${S(o)} left`,i.classList.remove("tight","over"),o<0?i.classList.add("over"):o<e.budget.monthlyCap*.2&&i.classList.add("tight")}document.querySelectorAll(".tabbar button").forEach(o=>{o.dataset.tab===e.activeTab?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")})}function ye(e){var a;nt(e.theme),ot(e);const i=document.getElementById("view");if(!i)return;const t=document.activeElement,o=t==null?void 0:t.id,n=(a=t==null?void 0:t.dataset)==null?void 0:a.input,s=typeof(t==null?void 0:t.selectionStart)=="number"?t.selectionStart:null;if(i.innerHTML=e.activeTab==="shop"?Ge(e):He(e),requestAnimationFrame(()=>te(document)),o||n){const r=o?document.getElementById(o):document.querySelector(`[data-input="${n}"]`);if(r&&(r.focus(),s!==null&&r.setSelectionRange))try{r.setSelectionRange(s,s)}catch{}}}function re(e,i=!1){["b","l","d"].includes(e)&&k(t=>{const o=x(),n=t.dayLog[o]||{meals:{b:!1,l:!1,d:!1},cooked:[]},s=N(n),a=i?!0:!n.meals[e],r={...t.dayLog,[o]:{...n,meals:{...n.meals,[e]:a}}};return s<3&&N(r[o])===3&&v("All 3 meals cooked at home today!"),{...t,dayLog:r}})}document.addEventListener("click",e=>{const i=e.target;if((i==null?void 0:i.id)==="modalRoot"){T();return}const t=e.target.closest("[data-action]");if(!t)return;const o=t.dataset.action,n=M();switch(o){case"tab":k(s=>({...s,activeTab:t.dataset.tab==="shop"?"shop":"eat"})),window.scrollTo({top:0,behavior:"smooth"});break;case"open-settings":oe(n);break;case"toggle-theme":k(s=>({...s,theme:s.theme==="dark"?"light":"dark"})),oe(M());break;case"close-modal":T();break;case"set-energy":k(s=>({...s,energy:t.dataset.energy,pickIndex:0}));break;case"next-pick":k(s=>({...s,pickIndex:(s.pickIndex||0)+1}));break;case"toggle-slot":re(t.dataset.slotKey);break;case"browse-filter":k(s=>({...s,browseFilter:t.dataset.v||"all",browseLimit:30}));break;case"more-browse":k(s=>({...s,browseLimit:(s.browseLimit||30)+30}));break;case"open-cook":{const s=n.recipes.find(a=>a.id===t.dataset.id);s&&be(s,n);break}case"close-cook":U();break;case"toggle-step":Ye(Number(t.dataset.idx),n);break;case"start-cook-timer":Ue(Number(t.dataset.min)),v(`Timer started for ${t.dataset.min} min`);break;case"stop-cook-timer":We();break;case"complete-recipe":{const s=n.recipes.find(r=>r.id===t.dataset.id),a=t.dataset.slotKey;U(),s&&a&&re(a,!0),v(s?`Logged ${s.title}!`:"Meal logged!");break}case"add-missing-to-trip":{const s=n.recipes.find(r=>r.id===t.dataset.id);if(!s)break;const a=E(s,n.catalog).missing;if(!a.length){v("Everything is already stocked in your kitchen!");break}k(r=>{const l=[...r.shopList||[]],c=new Set(l.map(u=>u.name.toLowerCase()));let m=0;for(const u of a){const d=B(u),p=d.toLowerCase();if(!d||c.has(p))continue;c.add(p);const g=r.catalog[p],b=(g==null?void 0:g.aisle)||z(d),$=(g==null?void 0:g.price)||F(d,b);l.push({id:p,name:d,aisle:b,price:$,checked:!1}),m+=1}return v(m?`Added ${m} missing item${m===1?"":"s"} to Grocery List.`:"Already on your Grocery List."),{...r,shopList:l}});break}case"delete-recipe":{const s=t.dataset.id;U(),k(a=>({...a,recipes:a.recipes.filter(r=>r.id!==s)})),v("Recipe removed.");break}case"open-add-recipe":et("youtube");break;case"add-mode":tt(t.dataset.mode);break;case"shop-sub":k(s=>({...s,shopSubTab:t.dataset.sub==="kitchen"?"kitchen":"list"}));break;case"suggest-staples":{const s=Ce("balanced",n.recipes,n.catalog);k(a=>{const r=[...a.shopList||[]],l=new Set(r.map(m=>m.name.toLowerCase()));let c=0;for(const m of s.items){const u=m.name.toLowerCase();l.has(u)||(l.add(u),r.push({id:m.id,name:m.name,aisle:m.aisle,price:m.price,checked:!1}),c+=1)}return v(c?`Added ${c} budget staples to your list!`:"All suggested staples are already listed or stocked."),{...a,shopList:r}});break}case"toggle-shop-item":{const s=t.dataset.id,a=(n.shopList||[]).find(l=>l.id===s);if(!a)break;const r=!a.checked;k(l=>{const c=l.shopList.map(p=>p.id===s?{...p,checked:r}:p),m=a.name.toLowerCase(),u=l.catalog[m]?{...l.catalog,[m]:{...l.catalog[m],inKitchen:r}}:l.catalog,d=r&&a.price>0?[...l.spends,{id:"sp_"+Date.now(),label:a.name,amount:Number(a.price),ts:Date.now()}]:l.spends;return{...l,shopList:c,catalog:u,spends:d}}),r&&v(`Bought ${a.name} — stocked in My Kitchen ✓`);break}case"remove-shop-item":k(s=>({...s,shopList:(s.shopList||[]).filter(a=>a.id!==t.dataset.id)}));break;case"clear-checked-shop":k(s=>({...s,shopList:(s.shopList||[]).filter(a=>!a.checked)})),v("Cleared bought items.");break;case"toggle-kitchen":{const s=t.dataset.id;k(a=>({...a,catalog:{...a.catalog,[s]:a.catalog[s]?{...a.catalog[s],inKitchen:!a.catalog[s].inKitchen}:a.catalog[s]}}));break}case"export-backup":{const s=new Blob([JSON.stringify(M(),null,2)],{type:"application/json"}),a=URL.createObjectURL(s),r=document.createElement("a");r.href=a,r.download=`meal-cheat-backup-${x()}.json`,r.click(),URL.revokeObjectURL(a),v("Backup JSON downloaded.");break}case"reset-app":confirm("Reset your kitchen, shopping list, budget logs, and custom recipes?")&&(Be(),T(),v("Reset to clean defaults."));break}});document.addEventListener("input",e=>{const i=e.target;i.dataset.input==="eat-search"?k(t=>({...t,search:i.value,browseLimit:30})):i.dataset.input==="shop-search"&&k(t=>({...t,shopSearch:i.value}))});document.addEventListener("submit",e=>{const i=e.target.closest("[data-form]");if(!i)return;e.preventDefault();const t=new FormData(i),o=i.dataset.form;if(o==="log-spend"){const n=String(t.get("label")||"").trim(),s=Number(t.get("amount"))||0;if(!n||s<=0)return;k(a=>({...a,spends:[...a.spends,{id:"sp_"+Date.now(),label:n,amount:s,ts:Date.now()}]})),i.reset(),v(`Logged ${S(s)} (${n})`)}else if(o==="add-shop-item"){const n=B(t.get("name"));if(!n)return;const s=z(n),a=Number(t.get("price")),r=a>0?a:F(n,s);k(l=>({...l,shopList:[...l.shopList||[],{id:"sl_"+Date.now(),name:n,aisle:s,price:r,checked:!1}]})),i.reset()}else if(o==="save-recipe"){const n=String(t.get("title")||"").trim(),s=String(t.get("ingredients")||"").split(/[\n,]+/).map(B).filter(Boolean);if(!n||!s.length)return;const a=String(t.get("sourceUrl")||"").trim(),r=ke(a),c=st()||String(t.get("imageUrl")||"").trim()||(r?le(r):""),m=String(t.get("steps")||"").trim(),u=m?m.split(`
`).map(p=>p.trim()).filter(Boolean):["Prep ingredients and combine to taste."],d={id:"u_"+Date.now(),title:n,kind:String(t.get("kind")||"meal"),slots:["breakfast","lunch","dinner"],effort:String(t.get("effort")||"quick"),time:String(t.get("time")||"10 min").trim(),cost:Math.max(0,Number(t.get("cost"))||2.5),portions:Math.max(1,Math.round(Number(t.get("portions"))||1)),videoId:r,sourceUrl:a,image:c,ingredients:s,steps:u,transcript:String(t.get("transcript")||"").trim(),builtIn:!1};k(p=>({...p,recipes:[d,...p.recipes]})),T(),v(`Saved "${n}"!`)}else o==="save-budget"&&(k(n=>({...n,budget:{monthlyCap:Math.max(20,Number(t.get("monthlyCap"))||340),weeklyGrocery:Math.max(10,Number(t.get("weeklyGrocery"))||55)}})),T(),v("Budget saved."))});window.addEventListener("mealcheat:import",e=>{try{const i=JSON.parse(e.detail);if(!i||typeof i!="object"||!Array.isArray(i.recipes))throw new Error("Invalid");k(he(i)),T(),v("Backup restored safely!")}catch{v("Invalid JSON backup file.")}});function ee(e){var o;if(!e||!((o=e.classList)!=null&&o.contains("chips")))return;const i=Math.max(0,e.scrollWidth-e.clientWidth),t=i>4;e.dataset.scrollLeft=t&&e.scrollLeft>4?"true":"false",e.dataset.scrollRight=t&&e.scrollLeft<i-4?"true":"false"}function te(e=document){e.querySelectorAll(".chips").forEach(ee)}document.addEventListener("scroll",e=>{e.target instanceof Element&&e.target.classList.contains("chips")&&ee(e.target)},!0);document.addEventListener("wheel",e=>{const i=e.target instanceof Element?e.target.closest(".chips"):null;if(!i||e.deltaX!==0||e.deltaY===0)return;const t=i.scrollWidth-i.clientWidth;t<=4||(e.deltaY>0&&i.scrollLeft<t-1||e.deltaY<0&&i.scrollLeft>1)&&(e.preventDefault(),i.scrollLeft=Math.max(0,Math.min(t,i.scrollLeft+e.deltaY)),ee(i))},{passive:!1});window.addEventListener("resize",()=>te(document));const W=document.getElementById("modalRoot")||document.body;W&&typeof MutationObserver<"u"&&new MutationObserver(()=>requestAnimationFrame(()=>te(W))).observe(W,{childList:!0,subtree:!1});"serviceWorker"in navigator&&/^https?:/.test(location.protocol)&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});xe(e=>ye(e));ye(M());
