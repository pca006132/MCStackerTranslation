function translateMCStacker(){ 

specialTiles=new Array(["flowing_water","물"],
["water","정지된 물"],
["flowing_lava","용암"],
["lava","정지된 용암"],
["fire","불"]);

items=new Array(["0","None"],
["stone","돌"],
["stone:1","화강암"],
["stone:2","부드러운 화강암"],
["stone:3","섬록암"],
["stone:4","부드러운 섬록암"],
["stone:5","안산암"],
["stone:6","부드러운 안산암"],
["grass","잔디 블록"],
["dirt","흙"],
["dirt:1","거친 흙"],
["dirt:2","회백토"],
["cobblestone","조약돌"],
["planks","참나무 목재"],
["planks:1","가문비나무 목재"],
["planks:2","자작나무 목재"],
["planks:3","정글 나무 목재"],
["planks:4","아카시아 나무 목재"],
["planks:5","짙은 참나무 목재"],
["sapling","참나무 묘목"],
["sapling:1","가문비나무 묘목"],
["sapling:2","자작나무 묘목"],
["sapling:3","정글 나무 묘목"],
["sapling:4","아카시아 나무 묘목"],
["sapling:5","짙은 참나무 묘목"],
["bedrock","기반암"],
["sand","모래"],
["sand:1","붉은 모래"],
["gravel","자갈"],
["gold_ore","금광석"],
["iron_ore","철광석"],
["coal_ore","석탄 광석"],
["log","참나무"],
["log:1","가문비나무"],
["log:2","자작나무"],
["log:3","정글 나무"],
["log:4","참나무 4"],
["log:5","참나무 5"],
["leaves","참나무 잎"],
["leaves:1","가문비나무 잎"],
["leaves:2","자작나무 잎"],
["leaves:3","정글 나무 잎"],
["leaves2","아카시아 잎"],
["leaves2:1","짙은 참나무 잎"],
["sponge","스펀지"],
["sponge:1","젖은 스펀지"],
["glass","유리"],
["stained_glass","하얀색 염색된 유리"],
["stained_glass:1","주황색 염색된 유리"],
["stained_glass:2","자홍색 염색된 유리"],
["stained_glass:3","하늘색 염색된 유리"],
["stained_glass:4","노란색 염색된 유리"],
["stained_glass:5","연두색 염색된 유리"],
["stained_glass:6","분홍색 염색된 유리"],
["stained_glass:7","회색 염색된 유리"],
["stained_glass:8","밝은 회색 염색된 유리"],
["stained_glass:9","청록색 염색된 유리"],
["stained_glass:10","보라색 염색된 유리"],
["stained_glass:11","파란색 염색된 유리"],
["stained_glass:12","갈색 염색된 유리"],
["stained_glass:13","초록색 염색된 유리"],
["stained_glass:14","빨간색 염색된 유리"],
["stained_glass:15","검정색 염색된 유리"],
["stained_glass_pane","하얀색 염색된 유리판"],
["stained_glass_pane:1","주황색 염색된 유리판"],
["stained_glass_pane:2","자홍색 염색된 유리판"],
["stained_glass_pane:3","하늘색 염색된 유리판"],
["stained_glass_pane:4","노란색 염색된 유리판"],
["stained_glass_pane:5","연두색 염색된 유리판"],
["stained_glass_pane:6","분홍색 염색된 유리판"],
["stained_glass_pane:7","회색 염색된 유리판"],
["stained_glass_pane:8","밝은 회색 염색된 유리판"],
["stained_glass_pane:9","청록색 염색된 유리판"],
["stained_glass_pane:10","보라색 염색된 유리판"],
["stained_glass_pane:11","파란색 염색된 유리판"],
["stained_glass_pane:12","갈색 염색된 유리판"],
["stained_glass_pane:13","초록색 염색된 유리판"],
["stained_glass_pane:14","빨간색 염색된 유리판"],
["stained_glass_pane:15","검정색 염색된 유리판"],
["lapis_ore","청금석 원석"],
["lapis_block","청금석 블록"],
["dispenser","발사기"],
["sandstone","사암"],
["sandstone:1","조각된 사암"],
["sandstone:2","부드러운 사암"],
["noteblock","노트 블록"],
["golden_rail","파워 레일"],
["detector_rail","디텍터 레일"],
["sticky_piston","끈끈이 피스톤"],
["web","거미줄"],
["tallgrass","키가 큰 풀 (마른 덤불)"],
["tallgrass:1","잔디"],
["tallgrass:2","고사리"],
["deadbush","마른 덤불"],
["piston","피스톤"],
["wool","양털"],
["wool:1","주황색 양털"],
["wool:2","자홍색 양털"],
["wool:3","하늘색 양털"],
["wool:4","노란색 양털"],
["wool:5","연두색 양털"],
["wool:6","분홍색 양털"],
["wool:7","회색 양털"],
["wool:8","밝은 회색 양털"],
["wool:9","청록색 양털"],
["wool:10","보라색 양털"],
["wool:11","파란색 양털"],
["wool:12","갈색 양털"],
["wool:13","초록색 양털"],
["wool:14","빨간색 양털"],
["wool:15","검정색 양털"],

["carpet","양탄자"],
["carpet:1","주황색 양탄자"],
["carpet:2","자홍색 양탄자"],
["carpet:3","하늘색 양탄자"],
["carpet:4","노란색 양탄자"],
["carpet:5","연두색 양탄자"],
["carpet:6","분홍색 양탄자"],
["carpet:7","회색 양탄자"],
["carpet:8","밝은 회색 양탄자"],
["carpet:9","청록색 양탄자"],
["carpet:10","보라색 양탄자"],
["carpet:11","파란색 양탄자"],
["carpet:12","갈색 양탄자"],
["carpet:13","초록색 양탄자"],
["carpet:14","빨간색 양탄자"],
["carpet:15","검정색 양탄자"],


["yellow_flower","민들레"],
["red_flower","양귀비"],
["red_flower:1","파란 난초"],
["red_flower:2","파꽃"],
["red_flower:3","푸른 삼백초"], 
["red_flower:4","빨간색 튤립"],
["red_flower:5","주황색 튤립"],
["red_flower:6","하얀색 튤립"],
["red_flower:7","분황색 튤립"],
["red_flower:8","데이지"],
["brown_mushroom","갈색 버섯"],
["red_mushroom","빨간색 버섯"],
["gold_block","금 블록"],
["iron_block","철 블록"],
["double_stone_slab","더블 돌 반 블록"],
["double_stone_slab:1","더블 사암 반 블록"],
["double_stone_slab:2","더블 목재 반 블록"],
["double_stone_slab:3","더블 조약돌 반 블록"],
["double_stone_slab:4","더블 벽돌 반 블록"],
["double_stone_slab:5","더블 석재 벽돌 반 블록"],
["double_stone_slab:6","더블 네더 벽돌 반 블록"],
["double_stone_slab:7","더블 석영 반 블록"],
["double_stone_slab:8","더블 부드러운 돌 반 블록"],
["double_stone_slab:9","더블 부드러운 사암 반 블록"],
["stone_slab","돌 반 블록"],
["stone_slab:1","사암 반 블록"],
["stone_slab:2","목재 반 블록"],
["stone_slab:3","조약돌 반 블록b"],
["stone_slab:4","벽돌 반 블록"],
["stone_slab:5","석재 벽돌 반 블록"],
["stone_slab:6","네더 벽돌 반 블록"],
["stone_slab:7","석영 반 블록"],
["brick_block","벽돌"],
["tnt","TNT"],
["bookshelf","책장"],
["mossy_cobblestone","이끼 낀 돌"],
["obsidian","흑요석"],
["torch","횃불"],

["mob_spawner","몬스터 스포너"],
["oak_stairs","참나무 계단"],
["chest","상자"],
["diamond_ore","다이아몬드 원석"],
["diamond_block","다이아몬드 블록"],
["crafting_table","작업대"],
["farmland","경작지"],
["furnace","화로"],
["lit_furnace","불 켜진 화로"],
["ladder","사다리"],
["rail","레일"],
["stone_stairs","석재 계단"],
["lever","레버"],
["stone_pressure_plate","돌 감압판"],
["wooden_pressure_plate","나무 감압판"],
["redstone_ore","레드스폰 광석"],
["redstone_torch","레드스톤 횃불 (켜짐)"],
["stone_button","돌 버튼"],
["snow_layer","눈"],
["ice","얼음"],
["snow","눈 블록"],
["cactus","선인장"],
["clay","점토"],
["jukebox","주크박스"],
["fence","참나무 울타리"],
["spruce_fence","가문비나무 울타리"],
["birch_fence","자작나무 울타리"],
["jungle_fence","정글 나무 울타리"],
["dark_oak_fence","짙은 참나무 울타리"],
["acacia_fence","아카시아 나무 울타리"],
["pumpkin","호박"],
["netherrack","네더랙"],
["soul_sand","소울 샌드"],
["glowstone","발광석"],
["portal","포탈"],
["lit_pumpkin","잭 오 랜턴"],
["trapdoor","다락문"],
["monster_egg","돌 몬스터 알"],
["monster_egg:1","조약돌 몬스터 알"],
["monster_egg:2","석재 벽돌 몬스터 알"],
["monster_egg:3","이끼 낀 석재 벽돌 몬스터 알"],
["monster_egg:4","금 간 석재 벽돌 몬스터 알"],
["monster_egg:5","조각된 석재 벽돌 몬스터 알"],
["stonebrick","석재 벽돌"],
["stonebrick:1","이끼 낀 석재 벽돌"],
["stonebrick:2","금 간 석재 벽돌"],
["stonebrick:3","조각된 석재 벽돌"],
["brown_mushroom_block","갈색 버섯 블록"],
["red_mushroom_block","빨간색 버섯 블록"],
["iron_bars","철창"],
["glass_pane","유리판"],
["melon_block","수박 블록"],
["vine","덩쿨"],
["fence_gate","참나무 울타리 문"],
["spruce_fence_gate","가문비나무 울타리 문"],
["birch_fence_gate","자작나무 울타리 문"],
["jungle_fence_gate","정글 나무 울타리 문"],
["dark_oak_fence_gate","짙은 참나무 울타리 문"],
["acacia_fence_gate","아카시아 나무 울타리 문"],
["brick_stairs","벽돌 계단"],
["stone_brick_stairs","석재 벽돌 계단"],
["mycelium","균사체"],
["waterlily","연꽃잎"],
["nether_brick","네더 벽돌"],
["nether_brick_fence","네더 벽돌 울타리"],
["nether_brick_stairs","네더 벽돌 계단"],
["enchanting_table","마법부여대"],
["end_portal","엔더 포탈"],
["end_portal_frame","엔더 포탈 프레임"],
["end_stone","엔드 스톤"],
["dragon_egg","드래곤 알"],
["redstone_lamp","레드스톤 조명 (꺼짐)"],
["double_wooden_slab","더블 참나무 반 블록"],
["double_wooden_slab:1","더블 가문비나무 반 블록"],
["double_wooden_slab:2","더블 자작나무 반 블록"],
["double_wooden_slab:3","더블 정글 나무 반 블록"],
["double_wooden_slab:4","더블 아카시아 나무 반 블록"],
["double_wooden_slab:5","더블 짙은 참나무 반 블록"],
["wooden_slab","참나무 반 블록"],
["wooden_slab:1","가문비나무 반 블록"],
["wooden_slab:2","자작나무 반 블록"],
["wooden_slab:3","정글 나무 반 블록"],
["wooden_slab:4","아카시아 나무 반 블록"],
["wooden_slab:5","짙은 참나무 반 블록"],
["cocoa","코코아 열매"],
["sandstone_stairs","사암 계단"],
["emerald_ore","에메랄드 원석"],
["ender_chest","엔더 상자"],
["tripwire_hook","철사덫 갈고리"],
["emerald_block","에메랄드 블록"],
["spruce_stairs","가문비나무 계단"],
["birch_stairs","자작나무 계단"],
["jungle_stairs","정글 나무 계단"],
["command_block","명령 블록"],
["beacon","신호기"],
["cobblestone_wall","조약돌 담장"],
["cobblestone_wall:1","이끼 낀 조약돌 담장"],
["wooden_button","나무 버튼"],
["anvil","모루"],
["anvil:1","약간 손상된 모루"],
["anvil:2","심각하게 손상된 모루"],
["trapped_chest","덫 상자"],
["light_weighted_pressure_plate","무게 감압판 (경형)"],
["heavy_weighted_pressure_plate","무게 감압판 (중형)"],
["daylight_detector","햇빛 감지기"],
["redstone_block","레드스톤 블록"],
["quartz_ore","네더 석영 원석"],
["hopper","깔때기"],
["quartz_block","석영 블록"],
["quartz_block:1","조각된 석영 블록"],
["quartz_block:2","석영 기둥 블록"],
["quartz_stairs","석영 계단"],
["activator_rail","활성화 레일"],
["dropper","공급기"],
["stained_hardened_clay","하얀색 염색된 점토"],
["stained_hardened_clay:1","주황색 염색된 점토"],
["stained_hardened_clay:2","자홍색 염색된 점토"],
["stained_hardened_clay:3","하늘색 염색된 점토"],
["stained_hardened_clay:4","노란색 염색된 점토"],
["stained_hardened_clay:5","연두색 염색된 점토"],
["stained_hardened_clay:6","분홍색 염색된 점토"],
["stained_hardened_clay:7","회색 염색된 점토"],
["stained_hardened_clay:8","밝은 회색 염색된 점토"],
["stained_hardened_clay:9","청록색 염색된 점토"],
["stained_hardened_clay:10","보라색 염색된 점토"],
["stained_hardened_clay:11","파란색 염색된 점토"],
["stained_hardened_clay:12","갈색 염색된 점토"],
["stained_hardened_clay:13","초록색 염색된 점토"],
["stained_hardened_clay:14","빨간색 염색된 점토"],
["stained_hardened_clay:15","검정색 염색된 점토"],
["log2","아카시아 나무"],
["log2:1","짙은 참나무"],
["acacia_stairs","아카시아 나무 계단"],
["dark_oak_stairs","짙은 참나무 계단"],
["slime","슬라임 블록"],
["barrier","방벽"],
["iron_trapdoor","철 다락문"],
["prismarine","프리즈마린"],
["prismarine:1","프리즈마린 벽돌"],
["prismarine:2","어두운 프리즈마린"],
[" sea_lantern","바다 랜턴"],
["hay_block","건초 더미"],
["hardened_clay","굳은 점토"],
["coal_block","석탄 블록"],
["packed_ice","단단한 얼음"],
["double_plant","해바라기"],
["double_plant:1","라일락"],
["double_plant:2","큰 잔디"],
["double_plant:3","큰 고사리"],
["double_plant:4","장미 덤불"],
["double_plant:5","모란"],
["red_sandstone","붉은 사암"],
["red_sandstone:1","조각된 붉은 사암"],
["red_sandstone:2","부드러운 붉은 사암"],
["red_sandstone_stairs","붉은 사암 계단"],
["double_stone_slab2","더블 붉은 사암 반 블록"],
["stone_slab2","붉은 사암 반 블록"],
["iron_shovel","철 삽"],
["iron_pickaxe","철 곡괭이"],
["iron_axe","철 도끼"],
["flint_and_steel","라이터"],
["apple","사과"],
["bow","활"],
["arrow","화살"],
["coal","석탄"],
["coal:1","목탄"],
["diamond","다이아몬드"],
["iron_ingot","철괴"],
["gold_ingot","금괴"],
["iron_sword","철 곰"],
["wooden_sword","나무 검"],
["wooden_shovel","나무 삽"],
["wooden_pickaxe","나무 곡괭이"],
["wooden_axe","나무 도끼"],
["stone_sword","돌 검"],
["stone_shovel","돌 삽"],
["stone_pickaxe","돌 곡괭이"],
["stone_axe","돌 도끼"],
["diamond_sword","다이아몬드 검"],
["diamond_shovel","다이아몬드 삽"],
["diamond_pickaxe","다이아몬드 곡괭이"],
["diamond_axe","다이아몬드 도끼"],
["stick","막대기"],
["bowl","그릇"],
["mushroom_stew","버섯 스튜"],
["golden_sword","금 검"],
["golden_shovel","금 삽"],
["golden_pickaxe","금 곡괭이"],
["golden_axe","금 도끼"],
["string","실"],
["feather","깃털"],
["gunpowder","화약"],
["wooden_hoe","나무 괭이"],
["stone_hoe","돌 괭이"],
["iron_hoe","철 괭이"],
["diamond_hoe","다이아몬드 괭이"],
["golden_hoe","금 괭이"],
["wheat_seeds","씨앗"],
["wheat","밀"],
["bread","빵"],
["leather_helmet","가죽 모자"],
["leather_chestplate","가죽 튜닉"],
["leather_leggings","가죽 바지"],
["leather_boots","가죽 장화"],
["chainmail_helmet","사슬 투구"],
["chainmail_chestplate","사슬 갑옷"],
["chainmail_leggings","사슬 레깅스"],
["chainmail_boots","사슬 부츠"],
["iron_helmet","철 투구"],
["iron_chestplate","철 갑옷"],
["iron_leggings","철 레깅스"],
["iron_boots","사슬 부츠"],
["diamond_helmet","다이아몬드 투구"],
["diamond_chestplate","다이아몬드 갑옷"],
["diamond_leggings","다이아몬드 레깅스"],
["diamond_boots","다이아몬드 부츠"],
["golden_helmet","금 투구"],
["golden_chestplate","금 갑옷"],
["golden_leggings","금 레깅스"],
["golden_boots","금 부츠"],
["flint","부싯돌"],
["porkchop","익히지 않은 돼지고기"],
["cooked_porkchop","구운 돼지고기"],
["painting","그림"],
["golden_apple","황금 사과"],
["golden_apple:1","마법의 황금 사과"],
["sign","표지판"],
["wooden_door","참나무 문"],
["spruce_door","가문비나무 문"],
["birch_door","자작나무 문"],
["jungle_door","정글 나무 문"],
["acacia_door","아카시아 나무 문"],
["dark_oak_door","짙은 참나무 문"],
["bucket","양동이"],
["water_bucket","물 양동이"],
["lava_bucket","용암 양동이"],
["minecart","마인카트"],
["saddle","안장"],
["iron_door","철문"],
["redstone","레드스톤"],
["snowball","눈덩이"],
["boat","보트"],
["leather","가죽"],
["milk_bucket","우유"],
["brick","벽돌"],
["clay_ball","점토 공"],
["reeds","사탕수수"],
["paper","종이"],
["book","책"],
["slime_ball","슬라임 볼"],
["chest_minecart","상자 마인카트"],
["furnace_minecart","화로 마인카트"],
["egg","계란"],
["compass","나침반"],
["fishing_rod","낚시대"],
["clock","시계"],
["glowstone_dust","발광석 가루"],
["fish","날 생선"],
["fish:1","날 연어"],
["fish:2","흰동가리"],
["fish:3","복어"],
["cooked_fish","익힌 생선"],
["cooked_fish:1","익힌 연어"],
["dye","먹물"],
["dye:1","붉은 장미 염료"],
["dye:2","초록 선인장 염료"],
["dye:3","코코아 콩"],
["dye:4","청금석"],
["dye:5","보라색 염료"],
["dye:6","청록색 염료"],
["dye:7","밝은 회색 염료"],
["dye:8","회색 염료"],
["dye:9","분홍색 염료"],
["dye:10","연두색 염료"],
["dye:11","노랑 민들레 염료"],
["dye:12","하늘색 염료"],
["dye:13","자홍색 염료"],
["dye:14","주황색 염료"],
["dye:15","뼛가루"],
["bone","뼈"],
["sugar","설탕"],
["cake","케이크"],
["bed","침대"],
["repeater","레드스톤 중계기"],
["cookie","쿠키"],
["filled_map","지도"],
["shears","가위"],
["melon","수박"],
["pumpkin_seeds","호박씨"],
["melon_seeds","수박씨"],
["beef","익히지 않은 소고기"],
["cooked_beef","스테이크"],
["chicken","익히지 않은 닭고기"],
["cooked_chicken","구운 닭고기"],
["rotten_flesh","썩은 고기"],
["ender_pearl","엔더 진주"],
["blaze_rod","블레이즈 막대"],
["ghast_tear","가스트의 눈물"],
["gold_nugget","금 조각"],
["nether_wart","네더 와트"],
["potion","물병"],
["potion:16","이상한 포션"],
["potion:32","진한 포션"],
["potion:64","평범한 포션"],
["potion:8193","재생 포션 (0:45)"],
["potion:8194","신속의 포션 (3:00)"],
["potion:8195","화염 저항 포션 (3:00)"],
["potion:8196","독 포션 (0:45)"],
["potion:8197","회복 포션"],
["potion:8198","야간 투시 포션 (3:00)"],
["potion:8200","나약의 포션 (1:30)"],
["potion:8201","힘의 포션 (3:00)"],
["potion:8202","구속의 포션 (1:30)"],
["potion:8203","도약의 포션 (3:00)"],
["potion:8204","고통의 포션"],
["potion:8205","수중 호흡 포션 (3:00)"],
["potion:8206","투명화 포션 (3:00)"],
["potion:8225","재생 포션 II (0:22)"],
["potion:8226","신속의 포션 II (1:30)"],
["potion:8228","독 포션 II (0:22)"],
["potion:8229","회복 포션 II"],
["potion:8233","힘의 포션 II (1:30)"],
["potion:8235","도약 포션 II (1:30)"],
["potion:8236","고통의 포션 II"],
["potion:8257","재생 포션 (2:00)"],
["potion:8258","신속의 포션 (8:00)"],
["potion:8259","화염 저항 포션 (8:00)"],
["potion:8260","독 포션 (2:00)"],
["potion:8262","야간 투시 포션 (8:00)"],
["potion:8264","나약의 포션 (4:00)"],
["potion:8265","힘의 포션 (8:00)"],
["potion:8266","구속의 포션 (4:00)"],
["potion:8269","수중 호흡 포션 (8:00)"],
["potion:8270","투명화 포션 (8:00)"],
["potion:8289","재생 포션 II (1:00)"],
["potion:8290","신속의 포션 포션 II (4:00)"],
["potion:8292","독 포션 II (1:00)"],
["potion:8297","힘의 포션 II (4:00)"],
["potion:16385","투척용 재생 포션 (0:33)"],
["potion:16386","투척용 신속의 포션 (2:15)"],
["potion:16387","투척용 화염 저항 포션 (2:15)"],
["potion:16388","투척용 독 포션 (0:33)"],
["potion:16389","투척용 회복 포션"],
["potion:16390","투척용 야간 투시 포션 (2:15)"],
["potion:16392","투척용 나약의 포션 (1:07)"],
["potion:16393","투척용 힘의 포션 (2:15)"],
["potion:16394","투척용 구속의 포션 (1:07)"],
["potion:16396","투척용 고통의 포션"],
["potion:16397","투척용 수중 호흡 포션 (2:15)"],
["potion:16398","투척용 투명화 포션 (2:15)"],
["potion:16417","투척용 재생 포션 II (0:16)"],
["potion:16418","투척용 신속의 포션 II (1:07)"],
["potion:16420","투척용 독 포션 II (0:16)"],
["potion:16421","투척용 회복 포션 II"],
["potion:16425","투척용 힘의 포션 II (1:07)"],
["potion:16428","투척용 고통의 포션 II"],
["potion:16449","투척용 재생 포션 (1:30)"],
["potion:16450","투척용 신속의 포션 (6:00)"],
["potion:16451","투척용 화염 저항 포션 (6:00)"],
["potion:16452","투척용 독 포션 (1:30)"],
["potion:16454","투척용 야간 투시 포션 (6:00)"],
["potion:16456","투척용 나약의 포션 (3:00)"],
["potion:16457","투척용 힘의 포션 (6:00)"],
["potion:16458","투척용 구속의 포션 (3:00)"],
["potion:16461","투척용 수중 호흡 포션 (6:00)"],
["potion:16462","투척용 투명화 포션 (6:00)"],
["potion:16481","투척용 재생 포션 II (0:45)"],
["potion:16482","투척용 신속의 포션 II (3:00)"],
["potion:16484","투척용 독 포션 II (0:45)"],
["potion:16489","투척용 힘의 포션 II (3:00)"],
["potion:7","맑은 포션 (미사용)"],
["potion:15","묽은 포션 (미사용)"],
["potion:23","어설픈 포션 (미사용)"],
["potion:31","유쾌한 포션 (미사용)"],
["potion:39","매력적인 포션 (미사용)"],
["potion:47","반짝이는 포션 (미사용)"],
["potion:55","등급 포션 (미사용)"],
["potion:63","지독한 포션 (미사용)"],
["potion:16391","투척용 맑은 포션 (미사용)"],
["potion:16399","투척용 묽은 포션 (미사용)"],
["potion:16407","투척용 어설픈 포션 (미사용)"],
["potion:16415","투척용 유쾌한 포션 (미사용)"],
["potion:16423","투척용 매력적인 포션 (미사용)"],
["potion:16431","투척용 반짝이는 포션 (미사용)"],
["potion:16439","투척용 등급 포션 (미사용)"],
["potion:16447","투척용 지독한 포션 (미사용)"],
["glass_bottle","유리병"],
["spider_eye","거미 눈"],
["fermented_spider_eye","발효된 거미 눈"],
["blaze_powder","블레이즈 가루"],
["magma_cream","마그마 크림"],
["brewing_stand","양조기"],
["cauldron","가마솥"],
["ender_eye","엔더의 눈"],
["speckled_melon","반짝이는 수박"],
["spawn_egg:50","스폰 크리퍼"],
["spawn_egg:51","스폰 스켈레톤"],
["spawn_egg:52","스폰 거미"],
["spawn_egg:54","스폰 좀비"],
["spawn_egg:55","스폰 슬라임"],
["spawn_egg:56","스폰 가스트"],
["spawn_egg:57","스폰 좀비 피그맨"],
["spawn_egg:58","스폰 엔더맨"],
["spawn_egg:59","스폰 동굴 거미"],
["spawn_egg:60","스폰 좀벌레"],
["spawn_egg:61","스폰 블레이즈"],
["spawn_egg:62","스폰 마그마 큐브"],
["spawn_egg:65","스폰 박쥐"],
["spawn_egg:66","스폰 마녀"],
["spawn_egg:67","스폰 엔더 진드기"],
["spawn_egg:68","스폰 수호자"],
["spawn_egg:90","스폰 돼지"],
["spawn_egg:91","스폰 양"],
["spawn_egg:92","스폰 소"],
["spawn_egg:93","스폰 닭"],
["spawn_egg:94","스폰 오징어"],
["spawn_egg:95","스폰 늑대"],
["spawn_egg:96","스폰 버섯소"],
["spawn_egg:98","스폰 오셀롯"],
["spawn_egg:100","스폰 말"],
["spawn_egg:101","스폰 토끼"],
["spawn_egg:120","스폰 주민"],
["experience_bottle","경험치 병"],
["fire_charge","화염구"],
["writable_book","책과 깃펜"],
["written_book","쓰여진 책"],
["emerald","에메랄드"],
["item_frame","아이템 액자"],
["flower_pot","화분"],
["carrot","Carrots"],
["potato","Potato"],
["baked_potato","Baked Potato"],
["poisonous_potato","Poisonous Potato"],
["map","Map"],
["golden_carrot","Golden Carrot"],
["skull","Mob Head (Skeleton)"],
["skull:1","Mob Head (Wither Skeleton)"],
["skull:2","Mob Head (Zombie)"],
["skull:3","Mob Head (Human)"],
["skull:4","Mob Head (Creeper)"],
["carrot_on_a_stick","Carrot on a Stick"],
["nether_star","Nether Star"],
["pumpkin_pie","Pumpkin Pie"],
["fireworks","Firework Rocket"],
["firework_charge","Firework Star"],
["enchanted_book","Enchanted Book"],
["comparator","Redstone Comparator"],
["netherbrick","Nether Brick"],
["quartz","Nether Quartz"],
["tnt_minecart","Minecart with TNT"],
["hopper_minecart","Minecart with Hopper"],
["prismarine_shard","Prismarine Shard"],
["prismarine_crystals","Prismarine Crystals"],
["rabbit","Raw Rabbit"],
["cooked_rabbit","Cooked Rabbit"],
["rabbit_stew","Rabbit Stew"],
["rabbit_foot","Rabbit's Foot"],
["rabbit_hide","Rabbit Hide"],
["armor_stand","Armor Stand"],
["iron_horse_armor","Iron Horse Armor"],
["golden_horse_armor","Gold Horse Armor"],
["diamond_horse_armor","Diamond Horse Armor"],
["lead","Lead"],
["name_tag","Name Tag"],
["command_block_minecart","Command Block Minecart"],
["mutton","Raw Mutton"],
["cooked_mutton","Cooked Mutton"],
["banner","Banner"],
["record_13","13 음반"],
["record_cat","Cat 음반"],
["record_blocks","Blocks 음반"],
["record_chirp","Chirp 음반"],
["record_far","Far 음반"],
["record_mall","Mall 음반"],
["record_mellohi","Mellohi 음반"],
["record_stal","Stal 음반"],
["record_strad","Strad 음반"],
["record_ward","Ward 음반"],
["record_11","11 음반"],
["record_wait","Wait 음반"]);

tileIDs=new Array(["air","Air"],
["stone","Stone","SB"],
["grass","Grass Block"],
["dirt","Dirt","SB"],
["cobblestone","Cobblestone"],
["planks","Wood Planks","SB"],
["sapling","Sapling","SB"],
["bedrock","Bedrock"],
["flowing_water","Water","S"],
["water","Stationary Water","S"],
["flowing_lava","Lava","S"],
["lava","Stationary Lava","S"],
["sand","Sand","SB"],
["gravel","Gravel"],
["gold_ore","Gold Ore"],
["iron_ore","Iron Ore"],
["coal_ore","Coal Ore"],
["log","Wood","SB"],
["leaves","Leaves","SB"],
["sponge","Sponge","SB"],
["glass","Glass"],
["lapis_ore","Lapis Lazuli Ore"],
["lapis_block","Lapis Lazuli Block"],
["dispenser","Dispenser","SE"],
["sandstone","Sandstone","SB"],
["noteblock","Note Block","E"],
//["bed","Bed","S"],
["golden_rail","Powered Rail","S"],
["detector_rail","Detector Rail","S"],
["sticky_piston","Sticky Piston","S"],
["web","Cobweb"],
["tallgrass","Grass","SB"],
["deadbush","Dead Bush"],
["piston","Piston","S"],
["piston_head","Piston Extension","S"],
["wool","Wool","SB"],
//["piston_extension","Block moved by Piston","E"],
["yellow_flower","Dandelion"],
["red_flower","Poppy","SB"],
["brown_mushroom","Brown Mushroom"],
["red_mushroom","Red Mushroom"],
["gold_block","Block of Gold"],
["iron_block","Block of Iron"],
["double_stone_slab","Double Stone Slab","SB"],
["stone_slab","Stone Slab","SB"],
["brick_block","Bricks"],
["tnt","TNT"],
["bookshelf","Bookshelf"],
["mossy_cobblestone","Moss Stone"],
["obsidian","Obsidian"],
["torch","Torch","S"],
["fire","Fire","S"],
["mob_spawner","Monster Spawner","E"],
["oak_stairs","Oak Wood Stairs","S"],
["chest","Chest","SE"],
["redstone_wire","Redstone Wire","S"],
["diamond_ore","Diamond Ore"],
["diamond_block","Block of Diamond"],
["crafting_table","Crafting Table"],
["wheat","Wheat","S"],
["farmland","Farmland","S"],
["furnace","Furnace","SE"],
["lit_furnace","Burning Furnace","SE"],
["standing_sign","Standing Sign", "SE"],
["wooden_door","Oak Door","S"],
["ladder","Ladder","S"],
["rail","Rail","S"],
["stone_stairs","Cobblestone Stairs","S"],
["wall_sign","Wall Sign","SE"],
["lever","Lever","S"],
["stone_pressure_plate","Stone Pressure Plate","S"],
["iron_door","Iron Door","S"],
["wooden_pressure_plate","Wooden Pressure Plate","S"],
["redstone_ore","Redstone Ore"],
["lit_redstone_ore","Glowing Redstone Ore"],
["unlit_redstone_torch","Redstone Torch (inactive)","S"],
["redstone_torch","Redstone Torch (active)","S"],
["stone_button","Stone Button","S"],
["snow_layer","Snow Layer","SB"],
["ice", "Ice"],
["snow","Snow"],
["cactus","Cactus","S"],
["clay","Clay"],
["reeds","Sugar Cane","S"],
["jukebox","Jukebox","SE"],
["fence","Fence"],
["pumpkin","Pumpkin","S"],
["netherrack","Netherrack"],
["soul_sand","Soul Sand"],
["glowstone","Glowstone"],
["portal","Nether Portal"],
["lit_pumpkin","Jack o'Lantern","S"],
["cake","Cake","S"],
["unpowered_repeater","Redstone Repeater (inactive)","S"],
["powered_repeater","Redstone Repeater (active)","S"],
["stained_glass","Stained Glass","SB"],
["trapdoor","Trapdoor","S"],
["monster_egg","Monster Egg","SB"],
["stonebrick","Stone Bricks","SB"],
["brown_mushroom_block","Brown Mushroom (block)","S"],
["red_mushroom_block","Red Mushroom (block)","S"],
["iron_bars","Iron Bars"],
["glass_pane","Glass Pane"],
["melon_block","Melon"],
["pumpkin_stem","Pumpkin Stem","S"],
["melon_stem","Melon Stem","S"],
["vine","Vines","S"],
["fence_gate","Fence Gate","S"],
["brick_stairs","Brick Stairs","S"],
["stone_brick_stairs","Stone Brick Stairs","S"],
["mycelium","Mycelium"],
["waterlily", "Lily Pad"],
["nether_brick","Nether Brick"],
["nether_brick_fence","Nether Brick Fence"],
["nether_brick_stairs","Nether Brick Stairs","S"],
["nether_wart","Nether Wart","S"],
["enchanting_table","Enchantment Table","E"],
["brewing_stand","Brewing Stand","SE"],
["cauldron","Cauldron","S"],
["end_portal","End Portal"],//,"E"], not implmented,"E"],
["end_portal_frame","End Portal Block"],//,"E"], not implmented,"E"],
["end_stone","End Stone"],
["dragon_egg","Dragon Egg"],
["redstone_lamp","Redstone Lamp (inactive)"],
["lit_redstone_lamp","Redstone Lamp (active)"],
["double_wooden_slab","Double Wooden Slab","SB"],
["wooden_slab","Wooden Slab","SB"],
["cocoa", "Cocoa", "S"],
["sandstone_stairs","Sandstone Stairs","S"],
["emerald_ore","Emerald Ore"],
["ender_chest","Ender Chest","S"], ////,"E"], not implmented
["tripwire_hook","Tripwire Hook","S"],
["tripwire","Tripwire","S"],
["emerald_block","Block of Emerald"],
["spruce_stairs","Spruce Wood Stairs","S"],
["birch_stairs","Birch Wood Stairs","S"],
["jungle_stairs","Jungle Wood Stairs","S"],
["command_block","Command Block","E"],
["beacon","Beacon","E"],
["cobblestone_wall","Cobblestone Wall","SB"],
["flower_pot","Flower Pot","SE"],
["carrots","Carrot","S"],
["potatoes","Potato","S"],
["wooden_button Wooden","Button","S"],
["skull","Mob head","SE"],
["anvil","Anvil","SB"],
["trapped_chest","Trapped Chest","SE"],
["light_weighted_pressure_plate","Light Weighted Pressure Plate","S"],
["heavy_weighted_pressure_plate","Heavy Weighted Pressure Plate","S"],
["unpowered_comparator","Redstone Comparator (unpowered)","S"],
["powered_comparator","Redstone Comparator (powered)","S"],
["daylight_detector","Daylight Sensor"], //,"E"], not implmented
["redstone_block","Block of Redstone"],
["quartz_ore","Nether Quartz Ore"],
["hopper","Hopper","SE"],
["quartz_block","Block of Quartz","SB"],
["quartz_stairs","Quartz Stairs","S"],
["activator_rail","Activator Rail","S"],
["dropper","Dropper","SE"],
["stained_hardened_clay","Stained Clay"],
["stained_glass_pane","Stained Glass Pane","SB"],
["leaves2","Leaves (Acacia/Dark Oak)","SB"],
["log2","Wood (Acacia/Dark Oak)","SB"],
["acacia_stairs","Acacia Wood Stairs S"],
["dark_oak_stairs","Dark Oak Wood Stairs","S"],
["slime","Slime Block"],
["barrier","Barrier"],
["iron_trapdoor","Iron Trapdoor","S"],
["prismarine","Prismarine","SB"],
["sea_lantern","Sea Lantern"],
["hay_block","Hay Bale","S"],
["carpet","Carpet","SB"],
["hardened_clay","Hardened Clay"],
["coal_block","Block of Coal"],
["packed_ice","Packed Ice"],
["double_plant","Large Flowers","SB"],
["standing_banner","Standing Banner","SE"],
["wall_banner","Wall Banner","SE"],
["daylight_detector_inverted","Inverted Daylight Sensor"],//,"E"], not implmented
["red_sandstone","Red Sandstone","SB"],
["red_sandstone_stairs","Red Sandstone Stairs","S"],
["double_stone_slab2","Double Red Sandstone Slab","S"],
["stone_slab2","Red Sandstone Slab","S"],
["spruce_fence_gate","Spruce Fence Gate"],
["birch_fence_gate","Birch Fence Gate"],
["jungle_fence_gate","Jungle Fence Gate"],
["dark_oak_fence_gate","Dark Oak Fence Gate"],
["acacia_fence_gate","Acacia Fence Gate"],
["spruce_fence","Spruce Fence"],
["birch_fence","Birch Fence"],
["jungle_fence","Jungle Fence"],
["dark_oak_fence","Dark Oak Fence"],
["acacia_fence","Acacia Fence"],
["spruce_door","Spruce Door","S"],
["birch_door","Birch Door","S"],
["jungle_door","Jungle Door","S"],
["acacia_door","Acacia Door","S"],
["dark_oak_door","Dark Oak Door","S"]);

llCommandType="멍령어 종류";
ttCommandType="생성하고자 하는 명령어의 종류를 선택하세요.";
llResetForm="양식 초기화";
ttResetForm="모든 설정을 기본값으로 되돌립니다.";
llSaveAs="새 명령어로 저장";
ttSaveAs="현재 설정을 파생 관계 없는 새 명령어로 저장합니다.";
llEnchantAll="인챈트 불가 아이템도 표시 (모든 아이템에 인챈트 옵션을 표시합니다.)";
ttEnchantAll="모든 아이템에 인챈트 옵션을 사용할 수 있게 됩니다. 인챈트 옵션을 표시하거나 숨기려면 아이템을 다시 선택해야합니다.";
llAddEntity="엔티티 추가";
ttAddEntity="스택 맨 아래에 엔티티를 추가합니다.";
llSummonCoords="소환 좌표";
llRelativeCoords="상대 좌표";
ttRelativeCoords="엔티티를 상대 좌표에 소환하려면 체크하세요. 엔티티를 절대 좌표에 소환하려면 체크를 해제하세요.";
ttSummonX="엔티티를 소환하고자 하는 X 좌표.";
ttSummonY="엔티티를 소환하고자 하는 Y 좌표.";
ttSummonZ="엔티티를 소환하고자 하는 Z 좌표.";

llSpawnCount="스폰 카운트";
ttSpawnCount="스포너가 한번에 소환할 엔티티의 개수.";
llSpawnRange="스폰 범위";
ttSpawnRange="엔티티가 소환될 범위.";
llRequiredPlayerRange="필요 플레이어 범위";
ttRequiredPlayerRange="스포너가 엔티티 소환을 시작하기 위해 플레이어가 접근해야 하는 범위.";
llDelay="딜레이";
ttDelay="플레이어가 처음 감지되고부터 엔티티가 소환되기까지의 틱.";
llMinSpawnDelay="최소 스폰 딜레이";
ttMinSpawnDelay="첫 스폰 후, 다음 스폰까지의 최소 틱.";
llMaxSpawnDelay="최대 스폰 딜레이";
ttMaxSpawnDelay="첫 스폰 후, 다음 스폰까지의 최대 틱.";
llMaxNearbyEntities="최대 인근 엔티티";
ttMaxNearbyEntities="스폰 범위 안에 존재하는 엔티티의 수를 체크합니다. 만일 최대 인근 엔티티 수를 초과하는 수의 엔티티가 감지되면 스폰 범위 안의 엔티티 수가 감소하기 전까지는 더이상 엔티티를 소환하지 않습니다.";

llPlayerName="플레이어 이름";
ttPlayerName="특정 플레이어의 이름을 입력하세요.";
llItemSelect="아이템";
ttItemSelect="아이템을 선택하세요.";
ttSearchFilter="검색/필터";

llEntity="엔티티";
ttEntity="소환하고자 하는 마인크래프트 엔티티를 선택하세요.";
ttRemoveFromStack="이 엔티티를 스택에서 제거합니다. 스택에는 엔티티를 최소한 하나는 남겨놔야 합니다.";
ttMoveUpStack="이 엔티티를 스택에서 한 칸 올립니다.";
ttMoveDownStack="이 엔티티를 스택에서 한 칸 내립니다.";
eeKeepOneEntity="엔티티를 최소한 하나는 남겨놔야 합니다.";

llCustomNameEntity="이름";
ttCustomNameEntity="이 엔티티의 커스텀 이름입니다. 사망 메시지와 주민 거래창에 표시되며, 엔티티에 커서를 올렸을 때 머리 위에 나타납니다.";
llUUIDLeast="UUIDLeast";
ttUUIDLeast="The least significant bits of this entity's Universally Unique IDentifier. This is used for leashing mobs to this entity. Set both UUIDLeast and UUIDMost or none at all.";
llUUIDMost="UUIDMost";
ttUUIDMost="The most significant bits of this entity's Universally Unique IDentifier. This is used for leashing mobs to this entity. Set both UUIDLeast and UUIDMost or none at all.";

llInvulnerable="무적";
ttInvulnerable="엔티티가 대미지를 입지 않기를 원한다면 체크하세요. 이는 생물에도 무생물에도 적용됩니다. 몹은 포션 효과, 공격, 폭발 등 그 어떠한 요인으로도 대미지를 입지 않으며, 탈것 및 아이템 액자도 지지하는 대상이 제거되지 않는 한 파괴되지 않습니다. 하지만 크리에이티브 모드의 유저는 파괴할 수 있다는 것을 유념하세요.";

llInLove="In Love";
ttInLove="Ticks until the mob loses its breeding hearts and stops searching for a mate. Leave blank when not searching for a mate.";
llAge="Age";
ttAge="The age of the mob in ticks. Set to a negative number if it is a baby. Set to 0 or above if the mob is an adult. Values above 0 are the number of ticks before this mob can breed again.";
llForcedlAge="Forced Age";
ttForcedlAge="A value of age which will be assigned to this mob when it grows up. Incremented when a baby mob is fed.";
llOwner="주인";
ttOwner="이 몹의 주인의 이름입니다. 주인이 없다면 비워두세요.";
llOwnerUUID="주인 UUID";
ttOwnerUUID="이 몹의 주인의 UUID입니다.";
llSitting="앉기";
ttSitting="몹이 앉기를 원한다면 체크하세요.";

llInGround="In Ground";
ttInGround="If the Projectile is in the ground or hit the ground already. Flying arrows can't be picked up.";
llPickup="Pickup";
llPickup0="cannot be picked up";
llPickup1="can be picked up by players in survival or creative";
llPickup2="can only be picked up by players in creative";
ttPickup="Options regarding if the arrow can be picked up.";
llPlayerPickup="Player Pickup";
ttPlayerPickup="If pickup is not used, and this is checked, the arrow can be picked up by players.";
llArrowLife="Life";
ttArrowLife="Increments each tick when an arrow is not moving; resets to 0 if it moves. When it ticks to 1200, the arrow despawns.";
llArrowDamage="Damage";
ttArrowDamage="Damage dealt by the arrow, in half-hearts.";
llExplosionPower="Explosion Power";
ttExplosionPower="The power and size of the explosion created by the fireball upon impact. Default value 1.";
llOwnerName="Owner Name";
ttOwnerName="The name of the player this projectile was thrown by.";
llPotionAppearance="Potion";
ttPotionAppearance="The appearance  of the potion that was thrown. Click the Status Effects check box to make a custom potion effect.";

llArmorBody="Body";
llArmorLeftArm="Left Arm";
llArmorRightArm="Right Arm";
llArmorLeftLeg="Left Leg";
llArmorRightLeg="Right Leg";
llArmorHead="Head";
llPose="Pose";
llArmorRotation="Rotation";

llDisabledSlots="Disabled Slots";

disabledSlots=new Array("Hand","Boot","Leg","Chest","Head");

llArmorOperationRemove="Remove";
llArmorOperationReplace="Replace";
llArmorOperationPlace="Place";
llDisabledFor=" disabled for "; //forms a sentence like 'Replace disabled for Leg'
llShowArms="Show Arms";
ttShowArms="Shows wooden arms on the ArmorStand.";
llSmall="Small";
ttSmall="A small ArmorStand the size of a baby zombie.";
llMarker="Marker";
ttMarker="ArmorStand's size will be set to 0, making it invisible and have a tiny hitbox.";
llInvisible="Invisible";
ttInvisible="The armour stand is invisible, but the armor on it is not.";
llNoBasePlate="No Base Place";
ttNoBasePlate="ArmorStand will not display the base beneath it.";
llNoGravity="No Gravity";
ttNoGravity="If checked the ArmorStand will not fall if summoned up in the air.";
llBaseRotation="Base Rotation";
ttBaseRotation="The rotation angle of the entire ArmorStand.";
llPersistence="Persistence Required";
ttPersistence="Check to prevent the entity from despawning.";

llHangUpsideDown="Hang Upside";
ttHangUpsideDown="The bat is summoned upside down. This has no effect if the player is too close or the bat is not under a block.";
llChickenJockey="Chicken Jockey";
ttChickenJockey="Whether or not the chicken is a jockey for a baby zombie. Set if the chicken can naturally despawn. Other effects are unknown. Baby zombies can still control a ridden chicken even if this is not checked.";
llPowered="Powered";
ttPowered="Set if the creeper is charged from being struck by lightning. Creates a blue aura surrounding the creeper. Charged creepers have a bigger explosion radius, but this can be overridden buy the Explosion Radius setting.";
llIgnited="Ignited";
ttIgnited="Check if the creeper has been ignited by a Flint and Steel.";
llExplosionRadius="Explosion Radius";
ttExplosionRadius="The radius of the explosion. The default 3.";
llFuse="Fuse";
ttFuse="The number of ticks before the creeper will explode (does not affect creepers that fall and explode upon impacting their victim). The default is 30.";
llCarried="Carried";
ttCarried="Item the Enderman is carrying.";
llLifeTime="Life Time";
ttLifeTime="How long the Endermite has existed in ticks. Disappears when this reaches around 2400.";

llBlock="Block";
ttBlock="The Block that is falling.";
llTileEntityData="Tile Entity Data";
ttTileEntityData="Optional. The tags of the tile entity for this block.";
llTime="Time";
ttTime="The number of ticks the entity has existed. If set to 0, the moment it ticks to 1, it will vanish if the block at its location has a different ID than the entity's TileID. If the block at its location has the same ID as its TileID when Time ticks from 0 to 1, the block will instead be deleted, and the entity will continue to fall, having overwritten it.";
llDropItem="Drop Item";
ttDropItem="Check if the block should drop an item that can be picked up when it breaks.";
llHurtEntities="Hurt Entities";
ttHurtEntities="Check if the block should hurt entities it falls on.";
llFallHurtMax="Fall Hurt Max";
ttFallHurtMax="The maximum number of hit points of damage to inflict on entities that intersect this FallingSand. For vanilla FallingSand, always 40 (20 hearts).";
llFallHurtAmount="Fall Hurt Amount";
ttFallHurtAmount="Multiplied by the FallDistance to calculate the amount of damage to inflict. For vanilla FallingSand, always 2.";

llFWLifeTime="Life Time";
ttFWLifeTime="The number of ticks before this fireworks rocket explodes.";
llElder="Elder";
ttElder="Check if the Guardian is an Elder Guardian.";
llExplosionPower="Explosion Power";
ttExplosionPower="The radius of the explosion created by the fireballs this Ghast fires. 1 is the default.";

llItemAge="Age";
ttItemAge="The number of ticks the item has been 'untouched'. After 6000 ticks (5 minutes) the item is destroyed. If set to -32768, the Age will not decrease, thus the item will not automatically despawn.";
llItemHealth="Health";
ttItemHealth="The health of the item, which starts at 5. Items take damage from fire, lava, falling anvils, and explosions. The item is destroyed when its health reaches 0.";
llItemPickupDelay="Pickup Delay";
ttItemPickupDelay="The number of ticks the item cannot be picked up. Decreases by 1 per tick. If set to 32767, the PickupDelay will not decrease, thus the item can never be picked up.";
llItemOwner="Owner";
ttItemOwner="If not an empty string, only the named player will be able to pick up this item, until it is within 10 seconds of despawning. Used to prevent the wrong player from picking up the spawned item entity.";
llItemThrower="Thrower";
ttItemThrower="Set to the name of the player who dropped the item, if dropped by a player. Used by the 'Diamonds to you!' achievement.";

llSlimeSize="Size";
ttSlimeSize="The size of the slime/magmacube. Note that this value is zero-based, so 0 is the smallest slime, 1 is the next larger, etc. The sizes that spawn naturally are 0, 1, and 3.";
llWasOnGround="Was On Ground";
ttWasOnGround="Check if slime is touching the ground.";
llCatType="Cat Type";
ttCatType="The type of ocelot/cat this is.";
llBaby="Baby";
ttBaby="Check if this is a baby.";
llAnger="Anger";
ttAnger="Ticks until the Zombie Pigman becomes neutral. -32,768 to 0 for neutral Zombie Pigmen; 1 to 32,767 for angry Zombie Pigmen.";
llSaddle="Saddle";
ttSaddle="Check if the pig has a saddle.";
llPrimedTNTFuse="Fuse";
ttPrimedTNTFuse="Ticks until explosion. Default and maximum is 80 (4 seconds).";
llRabbitType="Rabbit Type";
ttRabbitType="Determines the skin of the rabbit. Also determines if rabbit should be hostile.";
llMoreCarrotTicks="More Carrot Ticks";
ttMoreCarrotTicks="Formerly used for the ticks until the rabbit will 'eat' planted carrots. Depletes every tick until it reaches 0. Was set to a certain value upon eating planted carrots. (UNTESTED)";
llSaltAndPepper="Salt &amp; Pepper";
llBlackAndWhite="Black &amp; White";
llKillerRabbit="Killer Rabbit";
llSheared="Sheared";
ttSheared="Check if the sheep has been shorn.";
llSheepColor="Color";
ttSheepColor="The color of the sheep.";

llSkeletonType="Skeleton Type";
ttSkeletonType="The type of Skeleton.";

llProfession="Profession";
ttProfession="The texture used for this villager. This also influences trading options.";

llCareer="Career";
ttCareer="The ID of this villager's career. This also influences trading options and the villager's name in the GUI (if it does not have a CustomName). If 0, the next time offers are refreshed, the game will assign a new Career and reset CareerLevel to 1.";



llCareerLevel="Career Level";
ttCareerLevel="The current level of this villager's trading options. Influences the trading options generated by the villager; if it is greater than their career's maximum level, no new offers are generated. Increments when a trade causes offers to be refreshed. If 0, the next trade to do this will assign a new Career and set CareerLevel to 1. Set to a high enough level and there will be no new trades to release (Career must be set to 1 or above).";
llWilling="Willing";
ttWilling="Check if the villager is willing to mate. Becomes true after certain trades (those which would cause offers to be refreshed), and false after mating.";

llFarmer="Farmer";
llLibrarian="Librarian";
llPriest="Priest";
llBlacksmith="Blacksmith";
llButcher="Butcher";
llGeneric="Generic";
llNotSet="Not Set";
llFletcher="Fletcher";
llFisherman="Fisherman";
llShepherd="Shepherd";
llCleric="Cleric";
llToolSmith="Tool Smith";
llArmorer="Armorer";
llWeaponSmith="Weapon Smith";
llLeatherworker="Leatherworker";
llRecipes="Recipes";
llMakeOffer="Make Offer";
ttMakeOffer="Create a trade for this Villager.";

llRewardXP="Reward XP";
ttRewardXP="Check if this trade will provide XP orb drops.";
llMaxUses="Max Uses";
ttMaxUses="The maximum number of times this trade can be used before it is disabled. Increases by a random amount from 2 to 12 when offers are refreshed.";
llUses="Uses";
ttUses="The number of times this trade has been used. The trade becomes disabled when this is greater or equal to maxUses.";
llBuyA="Buy A (cost)";
llBuyB="Buy B (cost)";
ttBuy="The Item the Player will give to the Villager";
llBuyCount="Count";
ttBuyCount="Number of items the player has to give to the Villager.";
ttSecondaryTrade="The secondary trade item is optional.";
llSell="Sell";
ttSell="The Item the Villager will give to the player";
llRemoveOffer="Remove Offer";
ttRemoveOffer="Remove this a trade from the Villager.";
llCustomDisplayTile="Custom Display Tile";
ttCustomDisplayTile="Check to display the custom tile in this minecart.";
llDisplayTile="Display Tile";
ttDisplayTile="The custom display tile.";
llDisplayOffset="Display Offset";
ttDisplayOffset="The offset of the block displayed in the minecart. Positive values move the block upwards, while negative values move it downwards. A value of 16 will move the block up by exactly one multiple of its height.";

llPushX="Push X";
ttPushX="Force along X axis, used for smooth acceleration/deceleration.";
llPushZ="Push Z";
ttPushZ="Force along Z axis, used for smooth acceleration/deceleration.";
llFuel="Fuel";
ttFuel="The number of ticks until the minecart runs out of fuel.";
llTransferCooldown="Transfer Cooldown";
ttTransferCooldown="Time until the next transfer, between 1 and 8, or 0 if there is no transfer.";
llMinecartTNTFuse="TNT Fuse";
ttMinecartTNTFuse="Ticks until explosion or -1 if deactivated.";
llCommand="Command";
ttCommand="The command entered into the command block.";


llMineCartSpawnerInstructions="<b>Instructions</b>" //Contains HTML tags
+"<ol><li>Open <a href='./' target='_blank'>MCStacker</a> in a new tab in your browser</li>"
+"<li>Choose Spawner for the Command Type</li>"
+"<li>Change the spawn settings to suit your needs</li>"
+"<li>Create the thing you want the MinecartSpawner to spawn</li>"
+"<li>Copy and paste the command from the other tab into the field below.</li></ol>";
llSpawnDataTag="Spawn Data Tag";
ttSpawnDataTag="Enter an MCStacker Spawner command unedited into this field.";

llPlayerCreated="Player Created";
ttPlayerCreated="Check if this golem was created by a player.";

llInvulTime="Invulnerable Time";
ttInvulTime="The number of ticks of invulnerability left after being initially created. 0 once invulnerability has expired.";
llAngry="Angry";
ttAngry="Check if the wolf is angry.";
llCollarColor="Collar Color";
ttCollarColor="The dye color of this wolf's collar. Present even for wild wolves (but does not render); default value is 14.";
llXPValue="XP Value"; 
ttXPValue="The amount of experience the orb gives when picked up.";
llXPHealth="XP Health";
ttXPHealth="The health of the orb, which starts at 5. Orbs take damage from fire, lava, falling anvils, and explosions. The orb is destroyed when its health reaches 0.";
llIsVillager="Villager Zombie";
ttIsVillager="Check if this zombie is an infected villager.";
llConversionTime="Conversion Time";
ttConversionTime="-1 when not being converted back to a villager, positive for the number of ticks until conversion back into a villager. The regeneration effect will parallel this.";
llCanBreakDoors="Can Break Doors";
ttCanBreakDoors="Check if the zombie can break doors.";
llReinforcementChance="Reinforcement Chance";
ttReinforcementChance="Chance that a zombie will spawn another zombie when attacked.";

llXMotion="X Motion";
llYMotion="Y Motion";
llZMotion="Z Motion";
ttMotion="X,Y,Z motion values must be formatted as decimals. Examples 0.0, -0.9, 1.0 -1.0. You should set all 3 values or none at all.";
llCopyMotion="Copy XYZ to all other entities";
ttCopyMotion="This button will copy these motion values into the motion values for the rest of the stack. This is required so that the entire stack moves in the same direction.";



llCanPlaceOn="Can Place On";
ttCanPlaceOn="For Adventure Mode. Select which blocks this item can be placed on. Note: block subtypes are not available.";
ttCanPlaceAdd="Add a block this item can be placed on.";
ttCanPlaceChoose="Choose which blocks this item can be placed on"; 

llCanDestroy="Can Destroy";
ttCanDestroy="For Adventure Mode. Select which blocks this item can destroy. Note: block subtypes are not available.";
ttCanDestroyAdd="Add a block this item can destroy.";
ttCanDestroyChoose="Choose which blocks this item can destroy.";


llHideFlags="Hide Flags";
ttHideFlags="Choose which attributes to hide for this item.";
llEnchantments="Enchantments";
llModifiers="Modifiers";
llUnbreakable="Unbreakable";
ttHideEnchants="Hide the Enchantments tooltip for this item.";
ttHideModifiers="Hide the Attribute Modifiers tooltip for this item.";
ttHideUnbreakable="Hide the Unbreakable tooltip for this item.";
ttHideCanDestroy="Hide the 'Can Destroy' tooltip for this item.";
ttHideCanPlaceOn="Hide the 'Can Place On' tooltip for this item.";
ttRemoveBlock="Remove this Block.";

llAttributeModifiers="Attribute Modifiers";
ttAttributeModifiers="Display Attribute Modifier settings.";
llAmount="Amount";
ttAmount="The amount to apply for this attribute modifier"
llOperation="Operation";
ttOperation="A Modifier's Operation dictates how it modifies an Attribute's Base value. Three operations exist, '+- amount', '+- amount % (additive)', and '+- amount % (multiplicative)'. The mathematical behavior is as follows: Operation 0: Increment X by Amount, Operation 1: Increment Y by X * Amount, Operation 2: Y = Y * (1 + Amount) (equivalent to Increment Y by Y * Amount). The game first sets X = Base, then executes all Operation 0 modifiers, then sets Y = X, then executes all Operation 1 modifiers, and finally executes all Operation 2 modifiers."
llOperation0="(0) +- amount";
llOperation1="(1) +- amount % (additive)";
llOperation2="(2) +- amount % (multiplicative)";

ttAttributeModifiersArray = new Array("The maximum health of this mob/player (in half-hearts); determines the highest Health they may be healed to.",
"The range in blocks within which a mob with this attribute will target players or other mobs to track. Exiting this range will cause the mob to cease following the player/mob. Actual value used by most mobs is 16; for Zombies it is 40.",
"The chance to resist knockback from attacks, explosions, and projectiles. 1.0 is 100% chance for resistance.",
"Speed of movement in some unknown metric. The mob/player's maximum speed in blocks/second is a bit over 43 times this value, but can be affected by various conditions.","Damage dealt by attacks, in half-hearts.");


llStatusEffects="Status Effects";
ttStatusEffects="Make multiple potion/status effects.";
llAmplifier="Amplifier";
ttAmplifier="The potion effect level. 0 is level 1.";
llDurationSecs="Duration (secs)";
ttDurationSecs="The number of seconds before the effect wears off. MCStacker converts this to ticks.";
llHideParticles="Hide particles";
ttHideParticles="Make the particle effects for the potion/status effect invisible.";
//Numbers represent effect id (do not change the number)
statusEffects=new Array(["1","Speed"],["2","Slowness"],["3","Haste"],["4","Mining Fatigue"],["5","Strength"],["6","Instant Health"],["7","Instant Damage"],["8","Jump Boost"],["9","Nausea"],["10","Regeneration"],["11","Resistance"],["12","Fire Resistance"],["13","Water Breathing"],["14","Invisibility"],["15","Blindness"],["16","Night Vision"],["17","Hunger"],["18","Weakness"],["19","Poison"],["20","Wither"],["21","Health Boost"],["22","Absorption"],["23","Saturation"]);



llHolding="Holding";
ttHolding="The item being held by the Mob or ArmorStand. Depending on the type of entity, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
llHead="Head";
ttHead="The item in the head slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
llBody="Body";
ttBody="The item in the body slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
llLeg="Leg";
ttLeg="The item in the leg slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands).";
llBoot="Boot";
ttBoot="The item in the boot slot of the Mob or ArmorStand. Depending on the type of entity and item, this may not render, but may drop when mob is killed depending on the drop chance (does not apply to ArmorStands)."
llSlot="Slot";

llPersistenceRequired="Persistence Required";
ttPersistenceRequired="Check if the mob must not despawn naturally.";
llCanPickUpLoot="Can Pick Up Loot";
ttCanPickUpLoot="Check if the mob can pick up loot (wear armor it picks up, use weapons it picks up).";
llNoAI="No AI";
ttNoAI="Check to disable the AI for the mob. The mob will not attempt to move and cannot move, to the extent of not falling when normally able.";
llSilent="Silent";
ttSilent="This entity will not make sound.";
llRotation="Rotation";
llYaw="Yaw";
ttYaw="The entity's rotation clockwise around the Y axis (called yaw). Due west is 0. Does not exceed 360 degrees.";
llPitch="Pitch";
ttPitch="The entity's declination from the horizon (called pitch). Horizontal is 0. Positive values look downward. Does not exceed positive or negative 90 degrees.";
llLeashToUUIDLeast="Leash To UUIDLeast";
ttLeashToUUIDLeast="The least significant bits of the Universally Unique IDentifier of the entity this leash connects to.";
llLeashToUUIDMost="Leash To UUIDMost";
ttLeashToUUIDMost="The most significant bits of the Universally Unique IDentifier of the entity this leash connects to.";
llHealF="HealF(health)";
ttHealF="Amount of health the entity has. A value of 1 is half a heart.";
llMaxHealth="Max Health";
ttMaxHealth="";
llFollowRange="Follow Range";
ttFollowRange="";
llKnockbackResistance="Knockback Resistance";
ttKnockbackResistance="";
llMovementSpeed="Movement Speed";
ttMovementSpeed="";
llAttackDamage="Attack Damage";
ttAttackDamage="";
llInvulnerable="Invulnerable";
ttInvulnerable="Check if the entity should not take damage. This applies to living and non-living entities alike: mobs will not take damage from any source (including potion effects), and cannot be moved by fishing rods, attacks, explosions, or projectiles, and objects such as vehicles and item frames cannot be destroyed unless their supports are removed. Note that these entities can be damaged by players in Creative mode.";

llHorseType="Horse Type";
ttHorseType="The type of the horse.";
llHorse="Horse";
llDonkey="Donkey";
llMule="Mule";
llZombieHorse="Zombie";
llSkeletonHorse="Skeleton";
llBred="Bred";
ttBred="Unknown. Remains 0 after breeding. Causes horse to become persistent.";
llEatingHaystack="Eating Haystack";
ttEatingHaystack="Check if the horse is grazing";
llTame="Tame";
ttTame="Check if the horse is tamed. Mobs will not be able to ride a tamed horse if it has no saddle.";
llJumpStrength="Jump Strength";
ttJumpStrength="Horse jump strength. Default is 0.7 Maximum is 2.";
llTemper="Temper";
ttTemper="Ranges from 0 to 100; increases with feeding. Higher values make a horse easier to tame.";
llHasSaddle="Has Saddle";
ttHasSaddle="Check if the horse has a saddle.";
llNone="None";
llArmorItem="Armor Item";
ttArmorItem="The armor item worn by this horse.";
llIron="Iron";
llGold="Gold";
llDiamond="Diamond";
llHasChests="Has Chests";
ttHasChests="Check if the Donkey/Mule has chests.";
llVariant="Variant";
ttVariant="The variant of the horse. Determines colors and patterns.";
llHorseColors=new Array("White","Creamy","Chestnut","Brown","Black","Gray","Dark Brown");
llHorseMarkings=new Array("None","White","White Field","White Dots","Black Dots");
llInvisibleHorse="Invisible Horse";




llSkullOwner="Skull Owner";
llPlayerSkull="Player Skull";
ttChooseHead="Choose a Player Skull or one of the preselected heads.";
ttSkullOwnerName="Enter a Minecraft player's name.";


llLevel="Level";
ttLevel="The Enchantment Level. Maximum is 127."
llUnbreakable="Unbreakable";
llItemOptions="Equipment Enchantments and other options";
llDamage="Damage";
ttDamage="Set the amount of Damage this item has taken.";
llEnableColors="Enable Custom Colors";
llColor="Color";
llBannerTag="Banner Data Tag";
ttBannerTag="Enter a valid Banner Data Tag";
llBannerInstruction="Head over to <a href='http://www.needcoolshoes.com/banner' target='_blank'>http://www.needcoolshoes.com/banner</a> to generate the banner code. Copy and paste the entire unedited /give command from that website into the box above.";
llFlightDuration="Flight Duration";
ttFlightDuration="Rough distance (in blocks) that the rocket travels depending on the flight duration: 1 = 12-21 blocks, 2 = 23-38 blocks, 3 = 40-57 blocks, with a few misfiring at 35 and 36 blocks.";
llAddExplosion="Add Explosion";
ttAddExplosion="Add an explosion to the firework.";
llSmallBall="Small Ball";
llLargeBall="Large Ball";
llStar="Star";
llCreeper="Creeper";
llBurst="Burst";
ttExplosionType="The explosion type.";
llFlicker="Flicker";
ttFlicker="Check if this explosion will have the twinkle effect.";
llTrail="Trail";
ttTrail="Check if this explosion will have the trail effect.";
llRemoveExplosion="Remove";
ttRemoveExplosion="Remove this explosion from the firework.";
ttAddColor="Add a color to the explosion.";
ttRemoveColor="Remove a color from the explosion.";
llFadeColor="Fade";
ttAddFadeColor="Add a fade color to the explosion.";
ttRemoveFadeColor="Remove a fade color from the explosion."; 
eeFireWorkColorError="You need at least one color";
ttHexColor="Choose a hexadecimal color code. Hexadecimal codes are converted into a valid Minecraft color code";




llBlockCoords = "Block Co-ordinates";
llEndBlockCoords = "Opposite Corner Block Co-ordinates";
ttRelativeBlock = "Check if the block is at a location relative to the command block. Uncheck if the block is at a specific co-ordinate."
ttBlockX = "The X position of the block";
ttBlockY = "The Y position of the block";
ttBlockZ = "The Z position of the block";
ttBlockEX = "The opposite corner X position to fill to";
ttBlockEY = "The opposite corner Y position to fill to";
ttBlockEZ = "The opposite corner Z position to fill to";
llBlockHandling = "Old Block Handling";
ttSetBlockhandling="destroy - The old block drops both itself and its contents (as if destroyed by a player). Plays the appropriate block breaking noise.\n\nkeep - Only air blocks will be changed (non-air blocks will be 'kept').\n\nreplace - The old block drops neither itself nor any contents. Plays no sound.";
ttFillBlockhandling="destroy - Replaces all blocks (including air) in the fill region with the specified block, dropping the replaced blocks and block contents as entities as if they had been mined.\n\nhollow - Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are changed to air, dropping their contents as entities but not themselves.\n\nkeep - Replaces only air blocks in the fill region with the specified block.\n\noutline - Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are not affected.\n\nreplace - Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities. Optionally, instead of specifying a data tag for the replacing block, block id and data values may be specified to limit which blocks are replaced.";


llBlock="Block";
ttTileSelect="Tile/Block Select";
llReplaceBlock="Replace Block";
llDataValue="Data Value";
ttDataValue="Data Value for this block";
ttBlockDataDV="Data Values do not affect the blockdata command but may affect the Data Tag options available to you.";
llCustomName="Custom Name";
ttCustomName="Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual '@' when using commands such as 'say' and 'tell'.";
llLock="Lock";
ttLock="Optional. When not blank, prevents the container from being opened unless the opener is holding an item whose name matches this string.";
llTextLine="Text Line";
ttTextLine="Text to be displayed";

llSuccessCountName = "SuccessCountName";
ttSuccessCountName = "Player name to store success of the last command. Can be a player selector but may only have one resulting target.";
llSuccessCountObjective = "SuccessCountObjective";
ttSuccessCountObjective = "Objective's name to store the success of the last command.";
llAffectedBlocksName = "AffectedBlocksName";
ttAffectedBlocksName = "Player name to store how many blocks were modified in the last command. Can be a player selector but may only have one resulting target.";
llAffectedBlocksObjective = "AffectedBlocksObjective";
ttAffectedBlocksObjective = "Objective's name to store how many blocks were modified in the last command.";
llAffectedEntitiesName = "AffectedEntitiesName";
ttAffectedEntitiesName = "Player name to store how many entities were altered in the last command. Can be a player selector but may only have one resulting target.";
llAffectedEntitiesObjective = "AffectedEntitiesObjective";
ttAffectedEntitiesObjective = "Objective's name to store how many entities were altered in the last command.";
llAffectedItemsName = "AffectedItemsName";
ttAffectedItemsName = "Player name to store how many items were altered in the last command. Can be a player selector but may only have one resulting target.";
llAffectedItemsObjective = "AffectedItemsObjective";
ttAffectedItemsObjective = "Objective's name to store how many items were altered in the last command.";
llQueryResultName = "QueryResultName";
ttQueryResultName = "Player name to store the query result of the last command. Can be a player selector but may only have one resulting target.";
llQueryResultObjective = "QueryResultObjective";
ttQueryResultObjective = "Objective's name to store the query result of the last command.";
llBeaconLevels="Levels";
ttBeaconLevels="The number of levels available from the pyramid.";
llPrimaryEffect="Primary Effect";
ttBeaconEffect="The status effect selected";
llSecondaryEffect="Secondary Effect";
llOutputSignal="OutputSignal";
ttOutputSignal="Represents the strength of the analog signal output by this redstone comparator. Likely used because the block itself uses its four bits of metadata to determine its rotation, powered state, and subtraction mode state, and comparators can hold a specific amount of power even in circuits without redstone wire.";

llSuccessCount="SuccessCount";
ttSuccessCount="Represents the strength of the analog signal output by redstone comparators attached to this command block. Only updated when the command block is activated with a redstone signal.";
llLastOutput="LastOutput";
ttLastOutput="The last line of output generated by the command block. Still stored even if the gamerule commandBlockOutput is false. Appears in the GUI of the block when right-clicked, and includes a timestamp of when the output was produced.";
llTrackOutput="TrackOutput"; 
ttTrackOutput="Determines whether or not the LastOutput will be stored.";
llBurnTime="BurnTime";
ttBurnTime="Number of ticks left before the current fuel runs out.";
llCookTime="CookTime"; 
ttCookTime="Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). Is reset to 0 if BurnTime reaches 0.";
llCookTimeTotal="CookTimeTotal";
ttCookTimeTotal="Number of ticks It takes for the item to be smelted.";
llFlowerPot="Flower Pot Item";
ttFlowerPot="Block and item IDs other than plants may be used, but not all will render. This determines the item dropped by the pot when destroyed.";
llJukebox="Jukebox Item";
ttJukebox="Items other than records may be used. This determines the item dropped by the jukebox when destroyed.";


llAddSpawnPotential="Add Spawn Potential";
llWeight="Weight";
ttWeight="The chance that this spawn will be picked as compared to other spawn weights. Must be non-negative and at least 1";
llSpawnData="Summon Command";
ttSpawnData="Copy and paste a summon command from MCStacker into this field. The summon command will be converted into a SpawnPotential data tag.";
llRemoveSpawnPotential="Remove";
ttRemoveSpawnPotential="Remove this Spawn Potential";
llNote="Note"; 
ttNote="Pitch (number of right-clicks).";
llSkullType="Skull Type";
ttSkullType="The type of Skull or Head";
ttHeadGenerator="In the Player Name field you can type in a player's name or paste in a command generated from Dragnoz's <a href='http://www.dragnoz.com/custom-head-block-generator/' target='_blank'>Custom Head Block Generator</a>. MCStacker will extract what it needs from it.";
llRotation="Rotation";
ttRotation="The orientation. Only needed for skulls placed on the ground.";
llItem="Item";
llSlotNo="Slot Number";
ttSlotNo="Select the slot number for the targeted container block. Do not choose a slot number that exceeds the limit of the container.";
llCount="Count";
ttCount="The number of items in this slot of the container. Do not exceed the maximum stack count. The maximum for most items is 64."
llName="Name";
ttName="Name the item.";
llLore="Lore";
ttLore="Give the item 'Lore'. Lines are separated with commas.";
llDropChance="Drop Chance";
ttDropChance="The chance of the mob dropping this item when killed.";
llDropChanceDefault="Default";
ttDropChanceUndamaged="Undamaged";
ttDropChanceCount="Equipped Mobs: The amount of items this mob will drop if it drops. Item Summon: The amount to summon. Villager Trade: Number of items the Villager will sell/buy. Give Command: The amount to give";

ttAnyCommand="Use this to share commands that do something interesting.";

llBlack="Black";
llRed="Red";
llGreen="Green";
llBrown="Brown";
llDarkBlue="Dark Blue";
llPurple="Purple";
llCyan="Cyan";
llLightGray="Light Gray";
llGray="Gray";
llPink="Pink";
llLime="Lime";
llYellow="Yellow";
llLightBlue="Light Blue";
llMagenta="Magenta";
llOrange="Orange";
llWhite="White";


//Enchantments (Don't change the numbers)
enchantables[0][0] ="Protection";
enchantables[1][0] ="Fire Protection";
enchantables[2][0] ="Feather Falling";
enchantables[3][0] ="Blast Protection";
enchantables[4][0] ="Projectile Protection";
enchantables[5][0] ="Respiration";
enchantables[6][0] ="Aqua Affinity";
enchantables[7][0] ="Thorns";
enchantables[8][0] ="Depth Strider";
enchantables[16][0] ="Sharpness";
enchantables[17][0] ="Smite";
enchantables[18][0] ="Bane of Anthropods";
enchantables[19][0] ="Knockback";
enchantables[20][0] ="Fire Aspect";
enchantables[21][0] ="Looting";
enchantables[32][0] ="Efficiency";
enchantables[33][0] ="Silk Touch";
enchantables[34][0] ="Unbreaking";
enchantables[35][0] ="Fortune";
enchantables[48][0] ="Power";
enchantables[49][0] ="Punch";
enchantables[50][0] ="Flame";
enchantables[51][0] ="Infinity";
enchantables[61][0] ="Luck of the Sea";
enchantables[62][0] ="Lure";






//Written Books
llWrittenBook="Written Book";
llTitle="Title";
ttTitle="Enter the title of the book.";
llAuthor="Author";
ttAuthor="Enter the author of the book.";
llGeneration="Generation";
ttGeneration="Choose generation of the book. Copy of copy or tattered books cannot be copied";
llOriginal="Original";
llCopyOfOriginal="Copy of Original";
llCopyOfCopy="Copy of Copy";
llTattered="Tattered";
llAddPage="Add Page";
ttAddPage="Add a Page to the book. Books must have no more than 50 pages.";
llRemovePage="Remove Page";
ttRemovePage="Remove this page from the book";

llAddSection="Add Section";
ttAddSection="Text with unique properties are split into sections where they can be formatted and have hover and click events set. Click to add a new text section.";

llBookText="Text";
ttBookText="The text for this section. Word wrap is automatic. To make a new line in the section, type in &#92;n This is like pushing the enter key.";
llRemoveSection="Remove Section";
ttRemoveSection="Remove this text section.";
llTextColor="Text Color";
ttTextColor="Set the color of the text in this section.";
llTextStyle="Text Style";
llBold="Bold";
llItalic="Italic";
llUnderlined="Underlined";
llStrikethrough="Strikethrough";
llObfuscated="Obfuscated";
llHoverEvent="Hover Event";
llClickEvent="Click Event";
ttHoverActionType="Choose if the hover event should run a command, show text, open a URL, change page, show an item, or show an achievement";
ttClickActionType="Choose if the click event should run a command, show text, open a URL, change page, show an item, or show an achievement."; 
ttClickHoverAction="The command to run, URL to open, page to change to, or item, text or achievement to show for the click/hover event. Leave it blank if you don't need it. Note: very long commands fail to work as they are subject to the same command length restrictions as the chat bar.";











//for 'replaceitem entity' command
restrictions=new Array("armor stands, mobs, and players (though not all mobs will show or make use of the items)","armor stands and mobs (though not all mobs will show or make use of the items)","players","horses, donkeys, and mules. The item must be a saddle","horses, The item must be a type of horse armor","donkeys and mules with chests (THIS DOES NOT WORK. Possible bug in MC)","villagers");

//Forms a sentence like: This slot is only for mobs. Make sure you have targeted the appropriate entity.
restrictionPart1="This slot is only for ";
restrictionPart2=". Make sure you have targeted the appropriate entity.";

ttSpecifySlot="Specify the slot for the selected entity.";
ttSlotNoEntity="Select the slot number for the targeted entity ";

//Target Selector
llSpecificPlayer="Specific Player";
llNearestPlayer="Nearest Player";
llAllPlayers="All Players";
llRandomPlayer="Random Player";
llEntityPlayer="Entity/Player";

targetTypes = new Array(['specific', llSpecificPlayer],['nearest',llNearestPlayer],['all',llAllPlayers],['random',llRandomPlayer],['entity',llEntityPlayer]);

ttTargetEntityType="Choose the Type of Entity or leave blank.";
llPlayer="Player"; 

llDirectionX="Direction X";
ttDirectionX="Number blocks in the positive 'x' direction (i.e., east) from the value you entered in the X field.  Negative values do not work";
llDirectionY="Direction Y";
ttDirectionY="Number blocks in the positive 'y' direction (i.e., upwards) from the value you entered in the Y field.  Negative values do not work";
llDirectionZ="Direction Z";
ttDirectionZ="Number blocks in the positive 'z' direction (i.e., south) from the value you entered in the Z field.  Negative values do not work";
 
 
llMinRadius="Minimum Radius";
ttMinRadius="Selects only targets more than this value(in blocks) from the command's execution";
llMaxRadius="Maximum Radius";
ttMaxRadius="Selects only targets less than this value(in blocks) from the command's execution";
llTarget="Target";
ttTarget="Choose the type of target selector.";
 
ttCountTargets="Selects only the specified number of targets from qualifying targets.";
llCountDirection="Count Direction";
llNearest="Nearest";
ttNearest="If multiple players/entities are selected, They are usually selected from order of closest to the execution co-ordinates. This is the default.";
llFarthest="Farthest";
ttFarthest="Targets are selected in order of farthest to the execution co-ordinates";
ttTargetX="The X value of the command's execution co-ordinate. Tilde (~) is not allowed here.";
ttTargetY="The Y value of the command's execution co-ordinate. Tilde (~) is not allowed here.";
ttTargetZ="The Z value of the command's execution co-ordinate. Tilde (~) is not allowed here.";
llSelectionArea="Selection Area";
llRadiusSelection="Radius";
ttRadiusSelection="The targets are selected from the radius of the execution co-ordinate.";
llVolumeSelection="Volume";
ttVolumeSelection="The targets are selected from the execution co-ordinate to the Direction XYZ lengths.";
llGameMode="Game Mode";
ttGameMode="Players are selected from the specified game mode.";
llAllModes="All Modes";
llSurvival="Survival";
llCreative="Creative";
llAdventure="Adventure";
llSpectator="Spectator";
llMinimumXPLevel="Minimum XP Level";
ttMinimumXPLevel="Selects only targets with no less than the specified experience levels.";
llMaximumXPLevel="Maximum XP Level";
ttMaximumXPLevel="Selects only targets with no more than the specified experience levels.";
llMinimumVerticalRotation="Minimum Vertical Rotation";
ttMinimumVerticalRotation="Selects only targets with the specified minimum vertical rotation. Vertical rotation values vary from -90.0 facing straight up to 90.0 facing straight down (thus vertical rotation values increase with rotation downwards).";
llMaximumVerticalRotation="Maximum Vertical Rotation";
ttMaximumVerticalRotation="Selects only targets with the specified maximum vertical rotation. Vertical rotation values vary from -90.0 facing straight up to 90.0 facing straight down (thus vertical rotation values increase with rotation downwards).";
llMinimumHorizontalRotation="Minimum Horizontal Rotation";
ttMinimumHorizontalRotation="Selects only targets with the specified minimum horizontal rotation. Horizontal rotation values vary from -180.0 (facing due north), to -90.0 (facing due east), to 0.0 (facing due south), to 90.0 (facing due west), to 179.9 (just west of due north) before wrapping back to -180.0 (thus horizontal rotation values increase with rotation to the right, or clockwise viewed from above).";
llMaximumHorizontalRotation="Maximum Horizontal Rotation";
ttMaximumHorizontalRotation="Selects only targets with the specified maximum horizontal rotation. Horizontal rotation values vary from -180.0 (facing due north), to -90.0 (facing due east), to 0.0 (facing due south), to 90.0 (facing due west), to 179.9 (just west of due north) before wrapping back to -180.0 (thus horizontal rotation values increase with rotation to the right, or clockwise viewed from above).";
llTeam="Team";
ttTeam="Specify the team name if targeting players by team.";
llNotThisTeam="Not this team";
ttNotThisTeam="Check if you want to select players not on this team.";
llNotOnAnyTeam="Not on any team";
ttNotOnAnyTeam="Check if you want to select players not on any team.";
llEntityPlayerName="Entity/Player Name";
ttEntityPlayerName="Players and Entities with custom names can be targeted with this.";
llNotThisName="Not This Name";
ttNotThisName="Check to select Players and Entities that do not have this name.";
llTargetEntityType="Entity Type";
llNotThisEntity="Not This Entity";
ttNotThisEntity="Check to select Entities that are not of this type.";
llAddScoreObjective="Add Score Objective";
ttAddScoreObjective="Target players or entities by score objectives.";
llScoreObjectiveName="Score Objective Name";
ttScoreObjectiveName="Set the score name here if targeting players by their score. No Spaces are allowed. (Requires Scoreboard objectives to be set up).";
ttRemoveScoreObjective="Remove this score objective";
llMinScore="Minimum Score";
ttMinScore="Selects only targets with no less than the specified score. (Requires Scoreboard objectives to be set up).";
llMaxScore="Maximum Score";
ttMaxScore="Selects only targets with no more than the specified score. (Requires Scoreboard objectives to be set up).";

//MCStacker Save
monthNames = new Array("Jan", "Feb", "Ma", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");
llHome="Home";
ttHome="Introduction";
llHelp="Help";
ttHelp="Information about how to use the MCStacker command management system.";
llMyCommands="My Commands";
ttMyCommands="List all of the commands you created.";
llNews="News";
ttNews="News and Changelog";
llSearchBrowse="Search / Browse";
ttSearchBrowse="Search and browse commands created by other users.";
llLikes="Likes";
ttLikes="List all of the commands that I liked.";
llDiscuss="Discuss";
ttDiscuss="Notifications of new comments on commands you've created, commands you've commented on or commands you've liked.";
llAccountSettings="Account Settings";
ttAccountSettings="Your account settings for changing your email and password.";
llSignOut="Sign Out";
llSignIn="Sign In";
eeNotSignedIn="You are not currently signed in.";
ttCommandTypeSearch="Search by this command type.";
llAny="Any";
llAnyCommand="Any Command";
llSearchBy="Search By";
ttSearchBy="Narrow down your search by choosing to search only some parts of the saved information.";
llTitleDescCreator="Title, Description or Creator";
llDescription="Description";
llCreator="Creator";
llTag="Tag";
llDerivativesByID="Derivatives (by id)";
llComments="Comments";
llSearchText="Search Text";
ttSearchText="Search for text in saved commands. Leave blank to browse all commands. Advanced boolean search strings are accepted. A leading plus (+) sign indicates that this word must be present in every result returned. A leading minus (-) sign indicates that this word must not be present in any result returned. ( ) Parentheses are used to group words into sub expressions. A phrase that is enclosed in double quotes matches only results that contain this phrase literally.";
llSortColName="Name";
llSortColDescription="Description";
llSortColType="Type";
llSortColCreator="Creator";
llSortColModified="Modified";
llSortColLikes="Likes";
llSortColPublic="Public";
llSortColAllowComments="Allow Comments";
eeNoSavedCommands="You have no saved commands. Create a command below and choose the 'Save As New Command' button.";
ttPrivate="Unchecking this will make your command private. Only you will be able to see it."; 
ttDisallowComments="Unchecking this will prevent others from commenting on the command. Existing comments will still be displayed";
llChangePassword="Change Password";
ttChangePassword="Change your password";
llCurrentPassword="Current Password";
llNewPassword="New Password";
llConfirmNewPassword="Confirm New Password";
ttNewPassword="The supplied password must be between 6 and 64 characters and can only contain numbers, letters, dashes, or underscores.";
eePasswordMismatch="Your passwords do not match.";
llUpdateEmail="Update Email Address";
ttUpdateEmail="Change your email address";
llNewEmailAddress="New Email Address";
ttNewEmailAddress="Enter a valid email address.";
llUsername="Username";
llPassword="Password";
llRegister="Register a new account";
ttRegister="Register a new account. You will need to provide a valid email address and a unique user name.";
llForgotPassword="Forgot your password";
ttForgotPassword="Click to reset your password.";
llConfirmPassword="Confirm Password";
llEmail="Email";
ttNewUsername="The supplied user name must be between 3 and 16 characters and can only contain numbers, letters, dashes, underscores or @";
llPasswordReset="Password Reset";
llEnterEmail="Enter the email that you supplied when you created your account. MCStacker will reset your password and email it to you.";
llMarkdown="markdown";
llCharactersRemaining="Characters remaining.";
llPublic="Public";
llAllowComments="Allow Comments";
llTags="Tags";

ttTags="Tags are used for searching. Enter up to 10 words to describe this command. Separate tag words with commas(,)";
llSave="Save";
ttSave="Save this command. All changes made in command generator will be saved and will overwrite the previous settings. This action can not be undone."; 
llCancel="Cancel"; 
ttCancel="Cancel this edit."; 
ttCommandTitle="Give the command a concise and descriptive title.";
ttCommandDescription="Describe what the command does and what it is for.";
ttCommentBox="Write a comment for this command.";
llTagLimitExceeded="Tag limit exceeded";
ttRemoveThisTag="Remove this tag.";
llReportProblem="Report a Problem";
ttReportInstructions="Use this form to report a problem with this command. For example: bugs, commands that crash Minecraft, or offensive user created content.";
llProblem="Problem";
ttReportEmail="This field is optional. Provide your email address if you wish to be contacted about the report.";
llCancelReport="Cancel";
ttCancelReport="Cancel this report.";
llSubmitReport="Submit Report";
ttSubmitReport="Submit this report.";
eeReportResponse="Thanks for your report. This issue will be assessed and actioned.";
eeCloneResponse="The command has been cloned to your account and you can now edit it.";
eeMissingDetails="You need to give this command a title and description before it can be saved.";
ttSearchByTag="Search commands with this tag.";
llCreatedBy="Created by";//Forms a sentence like 'Created by @PyroStunts'
//Following two variables form a sentence like 'This command is Derived from OP Zombie by @PyroStunts'
llDerivedFrom="This command is Derived from"
llBy="by";
llLike="Like"
llUnlike="Unlike";
llComment="Comment";
ttComments="Read and write comments about this command.";
llCloneCommand="Clone Command";
ttCloneCommand="Clone this command to your account. This is how you make derivative commands."
ttLikeUnlike="Like this command to save it to your 'Likes' list. Unlike it remove it from your 'Likes' list.";
llEdit="Edit";
ttEdit="Edit details and settings for this command.";
llDelete="Delete";
ttDelete="Delete this command and all related information associated with it. This can't be undone. All comments, favs and derivative relationships (but not commands derived from this command) will be cleared.";
llClearDerivativeParent="Clear Derivative (parent)";
ttClearDerivativeParent="Delete the derivative relationship this command has to it's parent command. This can't be undone. It is a good idea to do this if you have significantly modified this command so much that it no longer has anything in common with the parent command.";
llClearDerivativeChildren="Clear Derivative (children)";
ttClearDerivativeChildren="Delete the derivative relationship this command has to commands that were derived from it. This can't be undone. This affects commands from other users. New commands may continue to be cloned from this command while it is public. It is a good idea to do this if you have significantly modified the command so much that any commands derived from it no longer have anything in common.";
llSearchDerivatives="Search Derivatives";
ttSearchDerivatives="Search for all direct derivatives of this command.";
llReport="Report";
ttReport="Report a problem with this command. You can report bugs, commands that crash Minecraft, or offensive content/comments.";
ttDeleteComment="You may delete this comment if you wrote it or you are the creator of the command. This can't be undone."
llHideComments="Hide Comments";
ttHideComments="Hide the comments.";
llPostComment="Post Comment";
ttPostComment="Post a comment about this command.";
llDeleteAllComments="Delete All Comments";
ttDeleteAllComments="Delete all comments associated with this command. This can't be undone.";
eeDeleteAllComments="Are you sure you want to delete all comments associated with this command? This action can not be undone.";
eeDeleteAllCommentsResponse="Comments Removed";
ttPostThisComment="Post this comment.";
llShareLink="Share Link";
eeConfirmDelete="You are about to permanently delete this command. All comments and likes associated with this command will be removed also. Click OK to permanently delete this command.";
eeSignInRequired="You need to sign in to save a command.";
ttShowHide="Hide/Show details of this entity";

//XML editor
llEditXML="XML Editor";
ttEditXML="Edit the XML for this command. This is an advanced feature that requires some basic XML skills.";
llExportXML="Export XML";
ttExportXML="Export the current settings from this command into the XML editor.";
llImportXML="Import XML";
ttImportXML="Import the XML from the editor into MCStacker. Ensure the the XML is valid otherwise it will not work.";
llCloseXML="Close XML Editor";
ttCloseXML="Close the XML Editor. Import your edits before closing if you wish to keep them.";


//Pages
ppNews="news.html";
ppHelp="help.html";
ppAbout="about.html";
ppTerms="termsandprivacy.html";

ttCommandSign="The command to run when the sign is clicked by the player. Signs can execute up to four different commands. You can leave this blank if not required.";

llSignLineMode="Mode";
ttSignLineMode="Choose the mode for this line in the sign. Can display text,an entity's name with a target selector or the score for an objective";
ttTargetSignLine="Enter a target selector into this field. The sign will display the name of the entity that qualifies as the target";
llObjectiveName="Objective";
ttObjectiveName="Enter the name of the scoreboard objective";
}
