var province = null; // 省代码
var provinceName = ""; //省名称
var provincesJson = [
	{"code":100,"name":"北京","href":"http://www.10086.cn/bj","url":"http://shop.10086.cn/mall_100_100.html","abbr":"bj"},
	{"code":551,"name":"安徽","href":"http://www.10086.cn/ah","url":"http://shop.10086.cn/mall_551_551.html","abbr":"ah"},
	{"code":230,"name":"重庆","href":"http://www.10086.cn/cq","url":"http://shop.10086.cn/mall_230_230.html","abbr":"cq"},
	{"code":591,"name":"福建","href":"http://www.10086.cn/fj","url":"http://shop.10086.cn/mall_591_591.html","abbr":"fj"},
	{"code":200,"name":"广东","href":"http://www.10086.cn/gd","url":"http://shop.10086.cn/mall_200_200.html","abbr":"gd"},
	{"code":771,"name":"广西","href":"http://www.10086.cn/gx","url":"http://shop.10086.cn/mall_771_771.html","abbr":"gx"},
	{"code":931,"name":"甘肃","href":"http://www.10086.cn/gs","url":"http://shop.10086.cn/mall_931_931.html","abbr":"gs"},
	{"code":851,"name":"贵州","href":"http://www.10086.cn/gz","url":"http://shop.10086.cn/mall_851_851.html","abbr":"gz"},
	{"code":311,"name":"河北","href":"http://www.10086.cn/he","url":"http://shop.10086.cn/mall_311_311.html","abbr":"he"},
	{"code":371,"name":"河南","href":"http://www.10086.cn/ha","url":"http://shop.10086.cn/mall_371_371.html","abbr":"ha"},
	{"code":898,"name":"海南","href":"http://www.10086.cn/hi","url":"http://shop.10086.cn/mall_898_898.html","abbr":"hi"},
	{"code":270,"name":"湖北","href":"http://www.10086.cn/hb","url":"http://shop.10086.cn/mall_270_270.html","abbr":"hb"},
	{"code":731,"name":"湖南","href":"http://www.10086.cn/hn","url":"http://shop.10086.cn/mall_731_731.html","abbr":"hn"},
	{"code":451,"name":"黑龙江","href":"http://www.10086.cn/hl","url":"http://shop.10086.cn/mall_451_451.html","abbr":"hl"},
	{"code":431,"name":"吉林","href":"http://www.10086.cn/jl","url":"http://shop.10086.cn/mall_431_431.html","abbr":"jl"},
	{"code":250,"name":"江苏","href":"http://www.10086.cn/js","url":"http://shop.10086.cn/mall_250_250.html","abbr":"js"},
	{"code":791,"name":"江西","href":"http://www.10086.cn/jx","url":"http://shop.10086.cn/mall_791_791.html","abbr":"jx"},
	{"code":240,"name":"辽宁","href":"http://www.10086.cn/ln","url":"http://shop.10086.cn/mall_240_240.html","abbr":"ln"},
	{"code":471,"name":"内蒙古","href":"http://www.10086.cn/nm","url":"http://shop.10086.cn/mall_471_471.html","abbr":"nm"},
	{"code":951,"name":"宁夏","href":"http://www.10086.cn/nx","url":"http://shop.10086.cn/mall_951_951.html","abbr":"nx"},
	{"code":971,"name":"青海","href":"http://www.10086.cn/qh","url":"http://shop.10086.cn/mall_971_971.html","abbr":"qh"},
	{"code":210,"name":"上海","href":"http://www.10086.cn/sh","url":"http://shop.10086.cn/mall_210_210.html","abbr":"sh"},
	{"code":280,"name":"四川","href":"http://www.10086.cn/sc","url":"http://shop.10086.cn/mall_280_280.html","abbr":"sc"},
	{"code":531,"name":"山东","href":"http://www.10086.cn/sd","url":"http://shop.10086.cn/mall_531_531.html","abbr":"sd"},
	{"code":351,"name":"山西","href":"http://www.10086.cn/sx","url":"http://shop.10086.cn/mall_351_351.html","abbr":"sx"},
	{"code":290,"name":"陕西","href":"http://www.10086.cn/sn","url":"http://shop.10086.cn/mall_290_290.html","abbr":"sn"},
	{"code":220,"name":"天津","href":"http://www.10086.cn/tj","url":"http://shop.10086.cn/mall_220_220.html","abbr":"tj"},
	{"code":991,"name":"新疆","href":"http://www.10086.cn/xj","url":"http://shop.10086.cn/mall_991_991.html","abbr":"xj"},
	{"code":891,"name":"西藏","href":"http://www.10086.cn/xz","url":"http://shop.10086.cn/mall_891_891.html","abbr":"xz"},
	{"code":871,"name":"云南","href":"http://www.10086.cn/yn","url":"http://shop.10086.cn/mall_871_871.html","abbr":"yn"},
	{"code":571,"name":"浙江","href":"http://www.10086.cn/zj","url":"http://shop.10086.cn/mall_571_571.html","abbr":"zj"}
	];

var citiesJson = [
	{"city_id":100,"city_id_district":1000010,"city_name":"北京","prov_id":100},
	{"city_id":200,"city_id_district":1000020,"city_name":"广州","prov_id":200},
	{"city_id":660,"city_id_district":1000660,"city_name":"汕尾","prov_id":200},
	{"city_id":662,"city_id_district":1000662,"city_name":"阳江","prov_id":200},
	{"city_id":663,"city_id_district":1000663,"city_name":"揭阳","prov_id":200},
	{"city_id":668,"city_id_district":1000668,"city_name":"茂名","prov_id":200},
	{"city_id":750,"city_id_district":1000750,"city_name":"江门","prov_id":200},
	{"city_id":751,"city_id_district":1000751,"city_name":"韶关","prov_id":200},
	{"city_id":752,"city_id_district":1000752,"city_name":"惠州","prov_id":200},
	{"city_id":753,"city_id_district":1000753,"city_name":"梅州","prov_id":200},
	{"city_id":754,"city_id_district":1000754,"city_name":"汕头","prov_id":200},
	{"city_id":755,"city_id_district":1000755,"city_name":"深圳","prov_id":200},
	{"city_id":756,"city_id_district":1000756,"city_name":"珠海","prov_id":200},
	{"city_id":757,"city_id_district":1000757,"city_name":"佛山","prov_id":200},
	{"city_id":758,"city_id_district":1000758,"city_name":"肇庆","prov_id":200},
	{"city_id":759,"city_id_district":1000759,"city_name":"湛江","prov_id":200},
	{"city_id":760,"city_id_district":1000760,"city_name":"中山","prov_id":200},
	{"city_id":762,"city_id_district":1000762,"city_name":"河源","prov_id":200},
	{"city_id":763,"city_id_district":1000763,"city_name":"清远","prov_id":200},
	{"city_id":766,"city_id_district":1000766,"city_name":"云浮","prov_id":200},
	{"city_id":768,"city_id_district":1000768,"city_name":"潮州","prov_id":200},
	{"city_id":769,"city_id_district":1000769,"city_name":"东莞","prov_id":200},
	{"city_id":210,"city_id_district":1000021,"city_name":"上海","prov_id":210},
	{"city_id":220,"city_id_district":1000022,"city_name":"天津","prov_id":220},
	{"city_id":230,"city_id_district":1000023,"city_name":"重庆","prov_id":230},
	{"city_id":240,"city_id_district":1000024,"city_name":"沈阳","prov_id":240},
	{"city_id":410,"city_id_district":1000410,"city_name":"铁岭","prov_id":240},
	{"city_id":411,"city_id_district":1000411,"city_name":"大连","prov_id":240},
	{"city_id":412,"city_id_district":1000412,"city_name":"鞍山","prov_id":240},
	{"city_id":413,"city_id_district":1000413,"city_name":"抚顺","prov_id":240},
	{"city_id":414,"city_id_district":1000414,"city_name":"本溪","prov_id":240},
	{"city_id":415,"city_id_district":1000415,"city_name":"丹东","prov_id":240},
	{"city_id":416,"city_id_district":1000416,"city_name":"锦州","prov_id":240},
	{"city_id":417,"city_id_district":1000417,"city_name":"营口","prov_id":240},
	{"city_id":418,"city_id_district":1000418,"city_name":"阜新","prov_id":240},
	{"city_id":419,"city_id_district":1000419,"city_name":"辽阳","prov_id":240},
	{"city_id":421,"city_id_district":1000421,"city_name":"朝阳","prov_id":240},
	{"city_id":427,"city_id_district":1000427,"city_name":"盘锦","prov_id":240},
	{"city_id":429,"city_id_district":1000429,"city_name":"葫芦岛","prov_id":240},
	{"city_id":250,"city_id_district":1000025,"city_name":"南京","prov_id":250},
	{"city_id":510,"city_id_district":1000510,"city_name":"无锡","prov_id":250},
	{"city_id":511,"city_id_district":1000511,"city_name":"镇江","prov_id":250},
	{"city_id":512,"city_id_district":1000512,"city_name":"苏州","prov_id":250},
	{"city_id":513,"city_id_district":1000513,"city_name":"南通","prov_id":250},
	{"city_id":514,"city_id_district":1000514,"city_name":"扬州","prov_id":250},
	{"city_id":515,"city_id_district":1000515,"city_name":"盐城","prov_id":250},
	{"city_id":516,"city_id_district":1000516,"city_name":"徐州","prov_id":250},
	{"city_id":517,"city_id_district":1000517,"city_name":"淮安","prov_id":250},
	{"city_id":518,"city_id_district":1000518,"city_name":"连云港","prov_id":250},
	{"city_id":519,"city_id_district":1000519,"city_name":"常州","prov_id":250},
	{"city_id":520,"city_id_district":1000520,"city_name":"宿迁","prov_id":250},
	{"city_id":523,"city_id_district":1000523,"city_name":"泰州","prov_id":250},
	{"city_id":270,"city_id_district":1000027,"city_name":"武汉","prov_id":270},
	{"city_id":710,"city_id_district":1000710,"city_name":"襄阳","prov_id":270},
	{"city_id":711,"city_id_district":1000711,"city_name":"鄂州","prov_id":270},
	{"city_id":712,"city_id_district":1000712,"city_name":"孝感","prov_id":270},
	{"city_id":713,"city_id_district":1000713,"city_name":"黄冈","prov_id":270},
	{"city_id":714,"city_id_district":1000714,"city_name":"黄石","prov_id":270},
	{"city_id":715,"city_id_district":1000715,"city_name":"咸宁","prov_id":270},
	{"city_id":716,"city_id_district":1000716,"city_name":"荆州","prov_id":270},
	{"city_id":717,"city_id_district":1000717,"city_name":"宜昌","prov_id":270},
	{"city_id":718,"city_id_district":1000718,"city_name":"恩施土家族苗族自治州","prov_id":270},
	{"city_id":719,"city_id_district":1000719,"city_name":"十堰","prov_id":270},
	{"city_id":722,"city_id_district":1000722,"city_name":"随州","prov_id":270},
	{"city_id":724,"city_id_district":1000724,"city_name":"荆门","prov_id":270},
	{"city_id":7281,"city_id_district":1007281,"city_name":"仙桃","prov_id":270},
	{"city_id":7282,"city_id_district":1007282,"city_name":"潜江","prov_id":270},
	{"city_id":7283,"city_id_district":1007283,"city_name":"天门","prov_id":270},
	{"city_id":280,"city_id_district":1000028,"city_name":"成都","prov_id":280},
	{"city_id":812,"city_id_district":1000812,"city_name":"攀枝花","prov_id":280},
	{"city_id":813,"city_id_district":1000813,"city_name":"自贡","prov_id":280},
	{"city_id":816,"city_id_district":1000816,"city_name":"绵阳","prov_id":280},
	{"city_id":817,"city_id_district":1000817,"city_name":"南充","prov_id":280},
	{"city_id":818,"city_id_district":1000818,"city_name":"达州","prov_id":280},
	{"city_id":825,"city_id_district":1000825,"city_name":"遂宁","prov_id":280},
	{"city_id":826,"city_id_district":1000826,"city_name":"广安","prov_id":280},
	{"city_id":827,"city_id_district":1000827,"city_name":"巴中","prov_id":280},
	{"city_id":830,"city_id_district":1000830,"city_name":"泸州","prov_id":280},
	{"city_id":831,"city_id_district":1000831,"city_name":"宜宾","prov_id":280},
	{"city_id":832,"city_id_district":1000832,"city_name":"内江","prov_id":280},
	{"city_id":833,"city_id_district":1000833,"city_name":"乐山","prov_id":280},
	{"city_id":834,"city_id_district":1000834,"city_name":"凉山彝族自治州","prov_id":280},
	{"city_id":835,"city_id_district":1000835,"city_name":"雅安","prov_id":280},
	{"city_id":836,"city_id_district":1000836,"city_name":"甘孜藏族自治州","prov_id":280},
	{"city_id":837,"city_id_district":1000837,"city_name":"阿坝藏族羌族自治州","prov_id":280},
	{"city_id":838,"city_id_district":1000838,"city_name":"德阳","prov_id":280},
	{"city_id":839,"city_id_district":1000839,"city_name":"广元","prov_id":280},
	{"city_id":840,"city_id_district":1000840,"city_name":"资阳","prov_id":280},
	{"city_id":841,"city_id_district":1000841,"city_name":"眉山","prov_id":280},
	{"city_id":290,"city_id_district":1000029,"city_name":"西安","prov_id":290},
	{"city_id":911,"city_id_district":1000911,"city_name":"延安","prov_id":290},
	{"city_id":912,"city_id_district":1000912,"city_name":"榆林","prov_id":290},
	{"city_id":913,"city_id_district":1000913,"city_name":"渭南","prov_id":290},
	{"city_id":914,"city_id_district":1000914,"city_name":"商洛","prov_id":290},
	{"city_id":915,"city_id_district":1000915,"city_name":"安康","prov_id":290},
	{"city_id":916,"city_id_district":1000916,"city_name":"汉中","prov_id":290},
	{"city_id":917,"city_id_district":1000917,"city_name":"宝鸡","prov_id":290},
	{"city_id":919,"city_id_district":1000919,"city_name":"铜川","prov_id":290},
	{"city_id":920,"city_id_district":1000920,"city_name":"咸阳","prov_id":290},
	{"city_id":311,"city_id_district":1000311,"city_name":"石家庄","prov_id":311},
	{"city_id":310,"city_id_district":1000310,"city_name":"邯郸","prov_id":311},
	{"city_id":312,"city_id_district":1000312,"city_name":"保定","prov_id":311},
	{"city_id":313,"city_id_district":1000313,"city_name":"张家口","prov_id":311},
	{"city_id":314,"city_id_district":1000314,"city_name":"承德","prov_id":311},
	{"city_id":315,"city_id_district":1000315,"city_name":"唐山","prov_id":311},
	{"city_id":316,"city_id_district":1000316,"city_name":"廊坊","prov_id":311},
	{"city_id":317,"city_id_district":1000317,"city_name":"沧州","prov_id":311},
	{"city_id":318,"city_id_district":1000318,"city_name":"衡水","prov_id":311},
	{"city_id":319,"city_id_district":1000319,"city_name":"邢台","prov_id":311},
	{"city_id":335,"city_id_district":1000335,"city_name":"秦皇岛","prov_id":311},
	{"city_id":351,"city_id_district":1000351,"city_name":"太原","prov_id":351},
	{"city_id":349,"city_id_district":1000349,"city_name":"朔州","prov_id":351},
	{"city_id":350,"city_id_district":1000350,"city_name":"忻州","prov_id":351},
	{"city_id":352,"city_id_district":1000352,"city_name":"大同","prov_id":351},
	{"city_id":353,"city_id_district":1000353,"city_name":"阳泉","prov_id":351},
	{"city_id":354,"city_id_district":1000354,"city_name":"晋中","prov_id":351},
	{"city_id":355,"city_id_district":1000355,"city_name":"长治","prov_id":351},
	{"city_id":356,"city_id_district":1000356,"city_name":"晋城","prov_id":351},
	{"city_id":357,"city_id_district":1000357,"city_name":"临汾","prov_id":351},
	{"city_id":358,"city_id_district":1000358,"city_name":"吕梁","prov_id":351},
	{"city_id":359,"city_id_district":1000359,"city_name":"运城","prov_id":351},
	{"city_id":371,"city_id_district":1000371,"city_name":"郑州","prov_id":371},
	{"city_id":370,"city_id_district":1000370,"city_name":"商丘","prov_id":371},
	{"city_id":372,"city_id_district":1000372,"city_name":"安阳","prov_id":371},
	{"city_id":373,"city_id_district":1000373,"city_name":"新乡","prov_id":371},
	{"city_id":374,"city_id_district":1000374,"city_name":"许昌","prov_id":371},
	{"city_id":375,"city_id_district":1000375,"city_name":"平顶山","prov_id":371},
	{"city_id":376,"city_id_district":1000376,"city_name":"信阳","prov_id":371},
	{"city_id":377,"city_id_district":1000377,"city_name":"南阳","prov_id":371},
	{"city_id":378,"city_id_district":1000378,"city_name":"开封","prov_id":371},
	{"city_id":379,"city_id_district":1000379,"city_name":"洛阳","prov_id":371},
	{"city_id":391,"city_id_district":1000391,"city_name":"焦作","prov_id":371},
	{"city_id":392,"city_id_district":1000392,"city_name":"鹤壁","prov_id":371},
	{"city_id":393,"city_id_district":1000393,"city_name":"濮阳","prov_id":371},
	{"city_id":394,"city_id_district":1000394,"city_name":"周口","prov_id":371},
	{"city_id":395,"city_id_district":1000395,"city_name":"漯河","prov_id":371},
	{"city_id":396,"city_id_district":1000396,"city_name":"驻马店","prov_id":371},
	{"city_id":397,"city_id_district":1000397,"city_name":"济源市","prov_id":371},
	{"city_id":398,"city_id_district":1000398,"city_name":"三门峡","prov_id":371},
	{"city_id":431,"city_id_district":1000431,"city_name":"长春","prov_id":431},
	{"city_id":432,"city_id_district":1000432,"city_name":"吉林","prov_id":431},
	{"city_id":433,"city_id_district":1000433,"city_name":"延边朝鲜族自治州","prov_id":431},
	{"city_id":434,"city_id_district":1000434,"city_name":"四平","prov_id":431},
	{"city_id":435,"city_id_district":1000435,"city_name":"通化","prov_id":431},
	{"city_id":436,"city_id_district":1000436,"city_name":"白城","prov_id":431},
	{"city_id":437,"city_id_district":1000437,"city_name":"辽源","prov_id":431},
	{"city_id":438,"city_id_district":1000438,"city_name":"松原","prov_id":431},
	{"city_id":439,"city_id_district":1000439,"city_name":"白山","prov_id":431},
	{"city_id":451,"city_id_district":1000451,"city_name":"哈尔滨","prov_id":451},
	{"city_id":452,"city_id_district":1000452,"city_name":"齐齐哈尔","prov_id":451},
	{"city_id":453,"city_id_district":1000453,"city_name":"牡丹江","prov_id":451},
	{"city_id":454,"city_id_district":1000454,"city_name":"佳木斯","prov_id":451},
	{"city_id":455,"city_id_district":1000455,"city_name":"绥化","prov_id":451},
	{"city_id":456,"city_id_district":1000456,"city_name":"黑河","prov_id":451},
	{"city_id":457,"city_id_district":1000457,"city_name":"大兴安岭","prov_id":451},
	{"city_id":458,"city_id_district":1000458,"city_name":"伊春","prov_id":451},
	{"city_id":459,"city_id_district":1000459,"city_name":"大庆","prov_id":451},
	{"city_id":464,"city_id_district":1000464,"city_name":"七台河","prov_id":451},
	{"city_id":467,"city_id_district":1000467,"city_name":"鸡西","prov_id":451},
	{"city_id":468,"city_id_district":1000468,"city_name":"鹤岗","prov_id":451},
	{"city_id":469,"city_id_district":1000469,"city_name":"双鸭山","prov_id":451},
	{"city_id":471,"city_id_district":1000471,"city_name":"呼和浩特","prov_id":471},
	{"city_id":470,"city_id_district":1000470,"city_name":"呼伦贝尔","prov_id":471},
	{"city_id":472,"city_id_district":1000472,"city_name":"包头","prov_id":471},
	{"city_id":473,"city_id_district":1000473,"city_name":"乌海","prov_id":471},
	{"city_id":474,"city_id_district":1000474,"city_name":"乌兰察布","prov_id":471},
	{"city_id":475,"city_id_district":1000475,"city_name":"通辽","prov_id":471},
	{"city_id":476,"city_id_district":1000476,"city_name":"赤峰","prov_id":471},
	{"city_id":477,"city_id_district":1000477,"city_name":"鄂尔多斯","prov_id":471},
	{"city_id":478,"city_id_district":1000478,"city_name":"巴彦淖尔","prov_id":471},
	{"city_id":479,"city_id_district":1000479,"city_name":"锡林郭勒盟","prov_id":471},
	{"city_id":482,"city_id_district":1000482,"city_name":"兴安盟","prov_id":471},
	{"city_id":483,"city_id_district":1000483,"city_name":"阿拉善盟","prov_id":471},
	{"city_id":531,"city_id_district":1000531,"city_name":"济南","prov_id":531},
	{"city_id":530,"city_id_district":1000530,"city_name":"菏泽","prov_id":531},
	{"city_id":532,"city_id_district":1000532,"city_name":"青岛","prov_id":531},
	{"city_id":533,"city_id_district":1000533,"city_name":"淄博","prov_id":531},
	{"city_id":534,"city_id_district":1000534,"city_name":"德州","prov_id":531},
	{"city_id":535,"city_id_district":1000535,"city_name":"烟台","prov_id":531},
	{"city_id":536,"city_id_district":1000536,"city_name":"潍坊","prov_id":531},
	{"city_id":537,"city_id_district":1000537,"city_name":"济宁","prov_id":531},
	{"city_id":538,"city_id_district":1000538,"city_name":"泰安","prov_id":531},
	{"city_id":539,"city_id_district":1000539,"city_name":"临沂","prov_id":531},
	{"city_id":543,"city_id_district":1000543,"city_name":"滨州","prov_id":531},
	{"city_id":546,"city_id_district":1000546,"city_name":"东营","prov_id":531},
	{"city_id":631,"city_id_district":1000631,"city_name":"威海","prov_id":531},
	{"city_id":632,"city_id_district":1000632,"city_name":"枣庄","prov_id":531},
	{"city_id":633,"city_id_district":1000633,"city_name":"日照","prov_id":531},
	{"city_id":634,"city_id_district":1000634,"city_name":"莱芜","prov_id":531},
	{"city_id":635,"city_id_district":1000635,"city_name":"聊城","prov_id":531},
	{"city_id":551,"city_id_district":1000551,"city_name":"合肥","prov_id":551},
	{"city_id":550,"city_id_district":1000550,"city_name":"滁州","prov_id":551},
	{"city_id":552,"city_id_district":1000552,"city_name":"蚌埠","prov_id":551},
	{"city_id":553,"city_id_district":1000553,"city_name":"芜湖","prov_id":551},
	{"city_id":554,"city_id_district":1000554,"city_name":"淮南","prov_id":551},
	{"city_id":555,"city_id_district":1000555,"city_name":"马鞍山","prov_id":551},
	{"city_id":556,"city_id_district":1000556,"city_name":"安庆","prov_id":551},
	{"city_id":557,"city_id_district":1000557,"city_name":"宿州","prov_id":551},
	{"city_id":558,"city_id_district":1000558,"city_name":"阜阳","prov_id":551},
	{"city_id":559,"city_id_district":1000559,"city_name":"黄山","prov_id":551},
	{"city_id":561,"city_id_district":1000561,"city_name":"淮北","prov_id":551},
	{"city_id":562,"city_id_district":1000562,"city_name":"铜陵","prov_id":551},
	{"city_id":563,"city_id_district":1000563,"city_name":"宣城","prov_id":551},
	{"city_id":564,"city_id_district":1000564,"city_name":"六安","prov_id":551},
	{"city_id":566,"city_id_district":1000566,"city_name":"池州","prov_id":551},
	{"city_id":567,"city_id_district":1000567,"city_name":"亳州","prov_id":551},
	{"city_id":571,"city_id_district":1000571,"city_name":"杭州","prov_id":571},
	{"city_id":570,"city_id_district":1000570,"city_name":"衢州","prov_id":571},
	{"city_id":572,"city_id_district":1000572,"city_name":"湖州","prov_id":571},
	{"city_id":573,"city_id_district":1000573,"city_name":"嘉兴","prov_id":571},
	{"city_id":574,"city_id_district":1000574,"city_name":"宁波","prov_id":571},
	{"city_id":575,"city_id_district":1000575,"city_name":"绍兴","prov_id":571},
	{"city_id":576,"city_id_district":1000576,"city_name":"台州","prov_id":571},
	{"city_id":577,"city_id_district":1000577,"city_name":"温州","prov_id":571},
	{"city_id":578,"city_id_district":1000578,"city_name":"丽水","prov_id":571},
	{"city_id":579,"city_id_district":1000579,"city_name":"金华","prov_id":571},
	{"city_id":580,"city_id_district":1000580,"city_name":"舟山","prov_id":571},
	{"city_id":591,"city_id_district":1000591,"city_name":"福州","prov_id":591},
	{"city_id":592,"city_id_district":1000592,"city_name":"厦门","prov_id":591},
	{"city_id":593,"city_id_district":1000593,"city_name":"宁德","prov_id":591},
	{"city_id":594,"city_id_district":1000594,"city_name":"莆田","prov_id":591},
	{"city_id":595,"city_id_district":1000595,"city_name":"泉州","prov_id":591},
	{"city_id":596,"city_id_district":1000596,"city_name":"漳州","prov_id":591},
	{"city_id":597,"city_id_district":1000597,"city_name":"龙岩","prov_id":591},
	{"city_id":598,"city_id_district":1000598,"city_name":"三明","prov_id":591},
	{"city_id":599,"city_id_district":1000599,"city_name":"南平","prov_id":591},
	{"city_id":731,"city_id_district":1000731,"city_name":"长沙","prov_id":731},
	{"city_id":730,"city_id_district":1000730,"city_name":"岳阳","prov_id":731},
	{"city_id":732,"city_id_district":1000732,"city_name":"湘潭","prov_id":731},
	{"city_id":733,"city_id_district":1000733,"city_name":"株洲","prov_id":731},
	{"city_id":734,"city_id_district":1000734,"city_name":"衡阳","prov_id":731},
	{"city_id":735,"city_id_district":1000735,"city_name":"郴州","prov_id":731},
	{"city_id":736,"city_id_district":1000736,"city_name":"常德","prov_id":731},
	{"city_id":737,"city_id_district":1000737,"city_name":"益阳","prov_id":731},
	{"city_id":738,"city_id_district":1000738,"city_name":"娄底","prov_id":731},
	{"city_id":739,"city_id_district":1000739,"city_name":"邵阳","prov_id":731},
	{"city_id":743,"city_id_district":1000743,"city_name":"湘西土家族苗族自治州","prov_id":731},
	{"city_id":744,"city_id_district":1000744,"city_name":"张家界","prov_id":731},
	{"city_id":745,"city_id_district":1000745,"city_name":"怀化","prov_id":731},
	{"city_id":746,"city_id_district":1000746,"city_name":"永州","prov_id":731},
	{"city_id":771,"city_id_district":1000771,"city_name":"南宁","prov_id":771},
	{"city_id":770,"city_id_district":1000770,"city_name":"防城港","prov_id":771},
	{"city_id":772,"city_id_district":1000772,"city_name":"柳州","prov_id":771},
	{"city_id":773,"city_id_district":1000773,"city_name":"桂林","prov_id":771},
	{"city_id":774,"city_id_district":1000774,"city_name":"梧州","prov_id":771},
	{"city_id":775,"city_id_district":1000775,"city_name":"玉林","prov_id":771},
	{"city_id":776,"city_id_district":1000776,"city_name":"百色","prov_id":771},
	{"city_id":777,"city_id_district":1000777,"city_name":"钦州","prov_id":771},
	{"city_id":778,"city_id_district":1000778,"city_name":"河池","prov_id":771},
	{"city_id":779,"city_id_district":1000779,"city_name":"北海","prov_id":771},
	{"city_id":780,"city_id_district":1000780,"city_name":"崇左","prov_id":771},
	{"city_id":781,"city_id_district":1000781,"city_name":"来宾","prov_id":771},
	{"city_id":782,"city_id_district":1000782,"city_name":"贵港","prov_id":771},
	{"city_id":783,"city_id_district":1000783,"city_name":"贺州","prov_id":771},
	{"city_id":791,"city_id_district":1000791,"city_name":"南昌","prov_id":791},
	{"city_id":701,"city_id_district":1000701,"city_name":"鹰潭","prov_id":791},
	{"city_id":790,"city_id_district":1000790,"city_name":"新余","prov_id":791},
	{"city_id":792,"city_id_district":1000792,"city_name":"九江","prov_id":791},
	{"city_id":793,"city_id_district":1000793,"city_name":"上饶","prov_id":791},
	{"city_id":794,"city_id_district":1000794,"city_name":"抚州","prov_id":791},
	{"city_id":795,"city_id_district":1000795,"city_name":"宜春","prov_id":791},
	{"city_id":796,"city_id_district":1000796,"city_name":"吉安","prov_id":791},
	{"city_id":797,"city_id_district":1000797,"city_name":"赣州","prov_id":791},
	{"city_id":798,"city_id_district":1000798,"city_name":"景德镇","prov_id":791},
	{"city_id":799,"city_id_district":1000799,"city_name":"萍乡","prov_id":791},
	{"city_id":851,"city_id_district":1000851,"city_name":"贵阳","prov_id":851},
	{"city_id":852,"city_id_district":1000852,"city_name":"遵义","prov_id":851},
	{"city_id":853,"city_id_district":1000853,"city_name":"安顺","prov_id":851},
	{"city_id":856,"city_id_district":1000856,"city_name":"铜仁","prov_id":851},
	{"city_id":857,"city_id_district":1000857,"city_name":"毕节","prov_id":851},
	{"city_id":858,"city_id_district":1000858,"city_name":"六盘水","prov_id":851},
	{"city_id":860,"city_id_district":1000860,"city_name":"黔西南布依族苗族自治州","prov_id":851},
	{"city_id":861,"city_id_district":1000861,"city_name":"黔东南苗族侗族自治州","prov_id":851},
	{"city_id":862,"city_id_district":1000862,"city_name":"黔南布依族苗族自治州","prov_id":851},
	{"city_id":871,"city_id_district":1000871,"city_name":"昆明","prov_id":871},
	{"city_id":691,"city_id_district":1000691,"city_name":"西双版纳","prov_id":871},
	{"city_id":692,"city_id_district":1000692,"city_name":"德宏","prov_id":871},
	{"city_id":870,"city_id_district":1000870,"city_name":"昭通","prov_id":871},
	{"city_id":872,"city_id_district":1000872,"city_name":"大理","prov_id":871},
	{"city_id":873,"city_id_district":1000873,"city_name":"红河州","prov_id":871},
	{"city_id":874,"city_id_district":1000874,"city_name":"曲靖","prov_id":871},
	{"city_id":875,"city_id_district":1000875,"city_name":"保山","prov_id":871},
	{"city_id":876,"city_id_district":1000876,"city_name":"文山","prov_id":871},
	{"city_id":877,"city_id_district":1000877,"city_name":"玉溪","prov_id":871},
	{"city_id":878,"city_id_district":1000878,"city_name":"楚雄","prov_id":871},
	{"city_id":879,"city_id_district":1000879,"city_name":"普洱","prov_id":871},
	{"city_id":883,"city_id_district":1000883,"city_name":"临沧","prov_id":871},
	{"city_id":886,"city_id_district":1000886,"city_name":"怒江","prov_id":871},
	{"city_id":887,"city_id_district":1000887,"city_name":"迪庆","prov_id":871},
	{"city_id":888,"city_id_district":1000888,"city_name":"丽江","prov_id":871},
	{"city_id":891,"city_id_district":1000891,"city_name":"拉萨","prov_id":891},
	{"city_id":892,"city_id_district":1000892,"city_name":"日喀则","prov_id":891},
	{"city_id":893,"city_id_district":1000893,"city_name":"山南","prov_id":891},
	{"city_id":894,"city_id_district":1000894,"city_name":"林芝","prov_id":891},
	{"city_id":895,"city_id_district":1000895,"city_name":"昌都","prov_id":891},
	{"city_id":896,"city_id_district":1000896,"city_name":"那曲","prov_id":891},
	{"city_id":897,"city_id_district":1000897,"city_name":"阿里","prov_id":891},
	{"city_id":898,"city_id_district":1000898,"city_name":"海口","prov_id":898},
	{"city_id":721,"city_id_district":1000721,"city_name":"三亚","prov_id":898},
	{"city_id":889,"city_id_district":1000889,"city_name":"屯昌县","prov_id":898},
	{"city_id":890,"city_id_district":1000890,"city_name":"儋州市","prov_id":898},
	{"city_id":899,"city_id_district":1000899,"city_name":"五指山市","prov_id":898},
	{"city_id":900,"city_id_district":1000900,"city_name":"文昌市","prov_id":898},
	{"city_id":904,"city_id_district":1000904,"city_name":"澄迈县","prov_id":898},
	{"city_id":905,"city_id_district":1000905,"city_name":"琼海市","prov_id":898},
	{"city_id":907,"city_id_district":1000907,"city_name":"定安县","prov_id":898},
	{"city_id":980,"city_id_district":1000980,"city_name":"临高县","prov_id":898},
	{"city_id":981,"city_id_district":1000981,"city_name":"白沙县","prov_id":898},
	{"city_id":982,"city_id_district":1000982,"city_name":"昌江县","prov_id":898},
	{"city_id":983,"city_id_district":1000983,"city_name":"乐东县","prov_id":898},
	{"city_id":984,"city_id_district":1000984,"city_name":"陵水县","prov_id":898},
	{"city_id":985,"city_id_district":1000985,"city_name":"保亭县","prov_id":898},
	{"city_id":986,"city_id_district":1000986,"city_name":"琼中县","prov_id":898},
	{"city_id":988,"city_id_district":1000988,"city_name":"万宁市","prov_id":898},
	{"city_id":989,"city_id_district":1000989,"city_name":"东方市","prov_id":898},
	{"city_id":931,"city_id_district":1000931,"city_name":"兰州","prov_id":931},
	{"city_id":930,"city_id_district":1000930,"city_name":"临夏","prov_id":931},
	{"city_id":932,"city_id_district":1000932,"city_name":"定西","prov_id":931},
	{"city_id":933,"city_id_district":1000933,"city_name":"平凉","prov_id":931},
	{"city_id":934,"city_id_district":1000934,"city_name":"庆阳","prov_id":931},
	{"city_id":935,"city_id_district":1000935,"city_name":"武威","prov_id":931},
	{"city_id":936,"city_id_district":1000936,"city_name":"张掖","prov_id":931},
	{"city_id":937,"city_id_district":1000937,"city_name":"酒泉","prov_id":931},
	{"city_id":938,"city_id_district":1000938,"city_name":"天水","prov_id":931},
	{"city_id":939,"city_id_district":1000939,"city_name":"陇南","prov_id":931},
	{"city_id":941,"city_id_district":1000941,"city_name":"甘南","prov_id":931},
	{"city_id":943,"city_id_district":1000943,"city_name":"白银","prov_id":931},
	{"city_id":945,"city_id_district":1000945,"city_name":"金昌","prov_id":931},
	{"city_id":947,"city_id_district":1000947,"city_name":"嘉峪关","prov_id":931},
	{"city_id":951,"city_id_district":1000951,"city_name":"银川","prov_id":951},
	{"city_id":952,"city_id_district":1000952,"city_name":"石嘴山","prov_id":951},
	{"city_id":953,"city_id_district":1000953,"city_name":"吴忠","prov_id":951},
	{"city_id":954,"city_id_district":1000954,"city_name":"固原","prov_id":951},
	{"city_id":955,"city_id_district":1000955,"city_name":"中卫","prov_id":951},
	{"city_id":971,"city_id_district":1000971,"city_name":"西宁","prov_id":971},
	{"city_id":970,"city_id_district":1000970,"city_name":"海北藏族自治州","prov_id":971},
	{"city_id":972,"city_id_district":1000972,"city_name":"海东","prov_id":971},
	{"city_id":973,"city_id_district":1000973,"city_name":"黄南藏族自治州","prov_id":971},
	{"city_id":974,"city_id_district":1000974,"city_name":"海南藏族自治州","prov_id":971},
	{"city_id":975,"city_id_district":1000975,"city_name":"果洛藏族自治州","prov_id":971},
	{"city_id":976,"city_id_district":1000976,"city_name":"玉树藏族自治州","prov_id":971},
	{"city_id":977,"city_id_district":1000977,"city_name":"海西蒙古自治州","prov_id":971},
	{"city_id":979,"city_id_district":1000979,"city_name":"格尔木市","prov_id":971},
	{"city_id":991,"city_id_district":1000991,"city_name":"乌鲁木齐","prov_id":991},
	{"city_id":901,"city_id_district":1000901,"city_name":"塔城","prov_id":991},
	{"city_id":902,"city_id_district":1000902,"city_name":"哈密","prov_id":991},
	{"city_id":903,"city_id_district":1000903,"city_name":"和田","prov_id":991},
	{"city_id":906,"city_id_district":1000906,"city_name":"阿勒泰","prov_id":991},
	{"city_id":908,"city_id_district":1000908,"city_name":"克孜勒苏柯尔克孜自治州","prov_id":991},
	{"city_id":909,"city_id_district":1000909,"city_name":"博尔塔拉蒙古自治州","prov_id":991},
	{"city_id":990,"city_id_district":1000990,"city_name":"克拉玛依","prov_id":991},
	{"city_id":994,"city_id_district":1000994,"city_name":"昌吉回族自治州","prov_id":991},
	{"city_id":995,"city_id_district":1000995,"city_name":"吐鲁番","prov_id":991},
	{"city_id":996,"city_id_district":1000996,"city_name":"巴音郭楞蒙古自治州","prov_id":991},
	{"city_id":997,"city_id_district":1000997,"city_name":"阿克苏","prov_id":991},
	{"city_id":998,"city_id_district":1000998,"city_name":"喀什","prov_id":991},
	{"city_id":999,"city_id_district":1000999,"city_name":"伊犁哈萨克自治州","prov_id":991},
	{"city_id":1100,"city_id_district":1001100,"city_name":"省直辖行政单位","prov_id":991}
	];

function ghead_getProvince(sim) {
    var rv = null;
    for(var i=0;i<provincesJson.length;i++){
        if(provincesJson[i].code == sim || provincesJson[i].abbr == sim){
            rv = provincesJson[i];
            break;
        }
    }
    return rv;
}

function ghead_getCity(sim) {
    var rv = null;
    for(var i=0;i<citiesJson.length;i++){
        if(citiesJson[i].city_id == sim || citiesJson[i].city_id_district == sim){
            rv = citiesJson[i];
            break;
        }
    }
    return rv;
}
function renderPageHead() {
	var thisURL = document.URL;
	var pobj = null; // 省数据
	var cobj = null; // 地市数据
	var prov_id = 0; // 省ID 3位数字
	var city_id = 0; // 地市ID 3-4位数字
	var indexOne = 0;
	var indexTwo = 0;
	var filename = null;
/*
	var hostname = window.location.host;
	if (hostname.indexOf("10086.cn") == -1) {
		var protocolhostname = "http://www.10086.cn";
		// 执行跳转操作
		var pathname = window.location.pathname; // urll中的路径
		var args = window.location.search; // 搜索字符串
		var target = window.location.hash; // 锚点
		window.location.href = protocolhostname + pathname + args + target;
	}
	else {
*/
		indexOne = thisURL.lastIndexOf("/");
		indexTwo = thisURL.lastIndexOf(".");
		if (indexOne < indexTwo) {
			filename = thisURL.substring(indexOne + 1, indexTwo);
			var arrfilename = filename.split("_");
			if (3 <= arrfilename.length) {
				pobj = ghead_getProvince(arrfilename[1]);
				cobj = ghead_getCity(arrfilename[2]);
				if (pobj != null && cobj != null) {
					province = pobj.abbr;
					prov_id = cobj.prov_id;
					city_id = cobj.city_id;
				}
			}
		}

		if (province == null || prov_id == 0 || city_id == 0) {
			var strCookie = document.cookie;
			var arrCookie = strCookie.split("; ");
			for (var i = 0; i < arrCookie.length; i++) {
				var arr = arrCookie[i].split("=");
				if (2 <= arr.length && "CmLocation" == arr[0]) {
					var strpc = arr[1];
					var arrstrpc = strpc.split("|");
					if (2 <= arrstrpc.length) {
						pobj = ghead_getProvince(arrstrpc[0]);
						cobj = ghead_getCity(arrstrpc[1]);
						if (pobj != null && cobj != null) {
							province = pobj.abbr;
							prov_id = cobj.prov_id;
							city_id = cobj.city_id;
						}
					}
					break;
				}
			}
		}

		if (province == null || prov_id == 0 || city_id == 0) { // 通过ajax ,根据IP定位归属地

			var ajaxurlCity;
			ajaxurlCity = "/service/ip/ipajax.jsp";

			$.ajax({
				async: false,
				url: ajaxurlCity,
				dataType: "json",
				success: function (jsonobj) {
					pobj = ghead_getProvince(jsonobj.province_id);
					cobj = ghead_getCity(jsonobj.city_id);
					if (pobj != null && cobj != null) {
						province = pobj.abbr;
						prov_id = cobj.prov_id;
						city_id = cobj.city_id;
					}
				}
				,
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					province = null;
					prov_id = 0;
					city_id = 0;
				}
			});

		}

		var idxabbr = 0;
		var isProvUrl = false;
		var oldAbbr = "";

		// 判断是否是分省url
		for (var i = 0; i < provincesJson.length; i++) {
			idxabbr = thisURL.indexOf("/" + provincesJson[i].abbr + "/");
			if (idxabbr != -1) {
				isProvUrl = true;
				oldAbbr = provincesJson[i].abbr;
				break;
			}
		}

		// 处理分省url
		if (isProvUrl) {
			if ((province == null || prov_id == 0 || city_id == 0) || (thisURL.indexOf("/fee/") == -1 && oldAbbr != pobj.abbr)) {
				// 当不存在归属省市，或归属省市与url中的省份代码不一致时，将cookie更新成url省份的省会。
				pobj = ghead_getProvince(oldAbbr);
				for (var i = 0; i < citiesJson.length; i++) {
					if (citiesJson[i].prov_id == pobj.code) {
						cobj = citiesJson[i];
						province = pobj.abbr;
						prov_id = cobj.prov_id;
						city_id = cobj.city_id;

						var days = 90;
						var exp = new Date();
						exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
						document.cookie = "CmLocation=" + prov_id + "|" + city_id + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();
						document.cookie = "CmProvid=" + province + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();
						break;
					}
				}
			}
		}

		if ((province == null || prov_id == 0 || city_id == 0) && (document.domain.indexOf("10086.cn")<0)) {
			if ("undefined" == typeof previewProv) {
				province = "bj";
				prov_id = 100;
				city_id = 100;
				pobj = ghead_getProvince(prov_id);
				cobj = ghead_getCity(city_id);
			}else {
				province = previewProv;
				pobj = ghead_getProvince(province);
				prov_id = pobj.code;
				cobj = ghead_getCity(prov_id);
				city_id = cobj.city_id;
			}
		}

		if (province == null || prov_id == 0 || city_id == 0) {
			var redirecting_url = "/index_5074.htm";
			window.location.href = redirecting_url;
		}
		else {
			var ua = navigator.userAgent.toLowerCase();
			if(0 <= ua.indexOf("leadeon")) {

			}else{
				document.getElementById("head").id = province + "_head";
				var headScript = document.createElement("script");
				headScript.setAttribute("type", "text/javascript");
				headScript.setAttribute("charset", "UTF-8");
				headScript.setAttribute("src", "/" + province + "_head/" + province + "_head_h5.js");

				var head = document.getElementsByTagName("head");
				if (head.length){
					head[0].appendChild(headScript);
				} else {
					document.documentElement.appendChild(headScript);
				}
				//页头公共显示栏
				renderTopBar(pobj,cobj);
				//页头Logo及搜索区
				renderMiddleArea(pobj,cobj);
				//一级菜单栏
				renderTopLevelMenu(pobj,cobj);
			}
		}
	//}
}
// 判断域名是否是集团网站(不是省公司网站即算作集团网站)
function isJTSite(domain) {
	var rv = true;

	if(domain != null && 0 < domain.length)  {
		domain = domain.toLowerCase();
		for (var i=0;i<provincesJson.length;i++) {
			if(domain.indexOf(provincesJson[i].abbr + ".10086.cn") != -1){
				rv = false;
				break;
			}
		}
	}

	return rv;
}
function renderTopBar(pobj,cobj) {
	var link=document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("id", "cssHead");
	link.setAttribute("href","/" + province + "_head/css/head.css");
	var userAgent = navigator.userAgent;
	var isOpera = userAgent.indexOf("Opera")>-1;
	if(userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1&&!isOpera){
		var browser = navigator.appName;
		var b_version = navigator.appVersion;
		var version = b_version.split(";");
		var trim_Version = version[1].replace(/[ ]/g, "");
		if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
			$(link).attr("href", "/"+province+"_head/css/ie8Head.css");
		} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
			$(link).attr("href", "/"+province+"_head/css/ie8Head.css");
		} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
			$(link).attr("href", "/"+province+"_head/css/ie8Head.css");
		}
	}
	var heads = document.getElementsByTagName("head");
	if (heads.length) {
		heads[0].appendChild(link);
	}else {
		document.documentElement.appendChild(link);
	}

	var header = document.getElementById(province + "_head");

	var divTopbar = document.createElement("section");
	divTopbar.id="topbar";
	divTopbar.className = "topbar hidden-xs";
	header.appendChild(divTopbar);

	var topbarCon = $("<div></div>");
	topbarCon.attr("class","topbarcon");
	divTopbar.appendChild(topbarCon[0]);

	var divTopLeft = $("<div></div>");
	divTopLeft.attr("class","topleft");
	topbarCon[0].appendChild(divTopLeft[0]);

	var aTempBar1 = $("<a></a>");
	aTempBar1.attr("id","tempBar0");
	divTopLeft[0].appendChild(aTempBar1[0]);

	var aTempBar2 = $("<a></a>");
	aTempBar2.attr("id","tempBar1");
	divTopLeft[0].appendChild(aTempBar2[0]);

	var divTopRight = document.createElement("div");
	divTopRight.className = "topright";
	topbarCon[0].appendChild(divTopRight);
	var divLogin = document.createElement("div");
	divLogin.className = "dropdown";
	divTopRight.appendChild(divLogin);

	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	var loginName = null;
	var CmWebtokenid = null;
	for ( var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if ("loginName" == arr[0]) {
			loginName = arr[1];
			break;
		}
	}
	for ( var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if ("CmWebtokenid" == arr[0]) {
			var value = arr[1].replace(/\"/g, "").split(",");
			if(value[1] == province){
				CmWebtokenid = value[0];
			}
			break;
		}
	}

	if (pobj.abbr == "xz" || isJTSite(window.location.host)) { // 西藏按照集团网站方式，进行登录和退出。

		// 集团网站登录状态
		if(loginName){
			var spanLogin = document.createElement("span");
			spanLogin.className = "loginStr";
			spanLogin.innerHTML=htmlEncode(loginName.length>11?loginName.substring(0,10)+'...':loginName);
			spanLogin.setAttribute("title",loginName);
			divLogin.appendChild(spanLogin);

			var aLogin = document.createElement("a");
			aLogin.id="logout";
			aLogin.className="login";
			aLogin.innerHTML="[退出]";
			divLogin.appendChild(aLogin);
		}
		else{
			var aLogin = $("<a></a>");
			aLogin.attr("id","dropdownMenu2");
			aLogin.attr("class","t3 dropdown-toggle rose");
			if (pobj.abbr == "xz") { // 不显示西藏的登录省厅入口
				aLogin.attr("href","https://login.10086.cn/html/login/login.html?channelID=12002&backUrl=http%3A%2F%2Fshop.10086.cn%2Fmall_" + cobj.prov_id + "_" + cobj.city_id + ".html%3Fforcelogin%3D1");
				aLogin.html("登录");
				aLogin.click(function () {if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_DL_YDSC_'+cobj.prov_id + '|' + cobj.city_id);}});
			}
			else {
				aLogin.html("登录");
				aLogin.mouseenter(function () {loginBar_show();});
				aLogin.mouseleave(function () {loginBar_hide();});
				aLogin.click(function () {if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_DL_YDSC_'+cobj.prov_id + '|' + cobj.city_id);}});
			}
			divLogin.appendChild(aLogin[0]);
		}
	}
	else {
		// 省网厅登录状态
		if(CmWebtokenid){
			var spanLogin = document.createElement("span");
			spanLogin.className = "loginStr";
			spanLogin.innerHTML=htmlEncode(CmWebtokenid);
			divLogin.appendChild(spanLogin);

			var aLogin = document.createElement("a");
			aLogin.id="logout";
			aLogin.className="login";
			aLogin.innerHTML="[退出]";
			divLogin.appendChild(aLogin);
		}
		else{
			var aLogin = $("<a></a>");
			aLogin.attr("id","dropdownMenu2");
			aLogin.attr("class","t3 dropdown-toggle rose");
			aLogin.html("登录");
			aLogin.mouseenter(function () {loginBar_show();});
			aLogin.mouseleave(function () {loginBar_hide();});
			aLogin.click(function () {if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_DL_YDSC_'+cobj.prov_id + '|' + cobj.city_id);}});
			divLogin.appendChild(aLogin[0]);
		}
	}

	//登录浮层
	var divLoginfc = $("<div></div>");
	divLoginfc.attr("class","dropdown-menu");
	divLoginfc.attr("id","divLoginfcBar");
	divLoginfc.mouseenter(function () {loginBar_show();});
	divLoginfc.mouseleave(function () {loginBar_hide();});
	divLogin.appendChild(divLoginfc[0]);

	var aLogin1 = document.createElement("a");
	aLogin1.id = "loginYDSC";
	aLogin1.href = "";
	aLogin1.innerHTML = "登录移动商城";
	aLogin1.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_DL_YDSC_"+cobj.prov_id + "|" + cobj.city_id+"');}");
	divLoginfc[0].appendChild(aLogin1);

	var aLogin2 = document.createElement("a");
	aLogin2.id = "loginYYT";
	aLogin2.href = "";
	aLogin2.innerHTML = "登录网上营业厅";
	aLogin2.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_DL_YYT_"+cobj.prov_id + "|" + cobj.city_id+"');}");
	divLoginfc[0].appendChild(aLogin2);

	var spanTemp0 = document.createElement("span");
	spanTemp0.innerHTML = "|";
	divTopRight.appendChild(spanTemp0);

	var divSJYYT =  $("<div></div>");
	divSJYYT.attr({"class":"dropdown","id":"sjyyt"});
	if (!judgeMT){
		divSJYYT.mouseenter(function () {ShowDivYYT();});
		divSJYYT.mouseleave(function () {HideDivYYT();});
	}
	divTopRight.appendChild(divSJYYT[0]);
	var aTempBar3 = document.createElement("a");
	aTempBar3.className = "t1 dropdown-toggle";
	aTempBar3.id = "tempBar2";
	divSJYYT[0].appendChild(aTempBar3);
	//添加新版本上线图标
	var hotImage = document.createElement("img");
	hotImage.src = "/images/new.gif";
	divSJYYT[0].appendChild(hotImage);
	//手机营业厅浮层
	var divYYTfc = $("<div></div>");
	divYYTfc.attr("class","dropdown-menu");
	divYYTfc.attr("id","yytbar");
	divSJYYT[0].appendChild(divYYTfc[0]);
	var imgYYTfc = document.createElement("img");
	imgYYTfc.src = "/" + province + "_head/images/ewm.jpg";
	imgYYTfc.style.width = "100px";
	imgYYTfc.style.height = "100px";
	divYYTfc[0].appendChild(imgYYTfc);
	var pYYTfc = document.createElement("p");
	pYYTfc.innerHTML = "扫一扫，随时查话费！";
	divYYTfc[0].appendChild(pYYTfc);

	var spanTemp1 = document.createElement("span");
	spanTemp1.innerHTML = "|";
	divTopRight.appendChild(spanTemp1);

	var aTempBar4 = document.createElement("a");
	aTempBar4.className = "t2";
	aTempBar4.id = "tempBar3";
	divTopRight.appendChild(aTempBar4);

	var spanTemp2 = document.createElement("span");
	spanTemp2.innerHTML = "|";
	divTopRight.appendChild(spanTemp2);

	var aTempBar5 = document.createElement("a");
	aTempBar5.id = "tempBar4";
	divTopRight.appendChild(aTempBar5);

	var spanTemp3 = document.createElement("span");
	spanTemp3.innerHTML = "|";
	divTopRight.appendChild(spanTemp3);
	
	var aTempBar6 = document.createElement("a");
	aTempBar6.id = "tempBar5";
	divTopRight.appendChild(aTempBar6);
	
	//topBar结束
}

function renderMiddleArea(pobj,cobj){
	//logo图片、搜索区域开始
	var header = document.getElementById(province + "_head");
	var container = document.createElement("div");
	container.className = "container";
	container.id = "container";
	header.appendChild(container);

	var divMiddle = document.createElement("section");
	divMiddle.id = "middle";
	divMiddle.className= "row headcon";
	container.appendChild(divMiddle);

	var divLogo = document.createElement("div");
	divLogo.id = "middleLeft";
	divLogo.className = "col-xs-10 col-sm-6 col-md-6 col-lg-6 ";
	divMiddle.appendChild(divLogo);
	var aLogo = document.createElement("a");
	aLogo.className = "logo";
	aLogo.href = "http://www.10086.cn/";
	aLogo.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_ZDH_LOGO');}");
	divLogo.appendChild(aLogo);
	var logoImg = document.createElement("img");
	logoImg.src = "/"+province+"_head/images/logo.png";
	logoImg.alt = "中国移动欢迎您";
	aLogo.appendChild(logoImg);

	$("#middleLeft").append("<div class=\"dropdown\" style=\"z-index: 9999;\">\
  <div class=\"topcity\" id=\"dropdownMenu3\"></div>\
  <ul class=\"dropdown-menu\" id=\"DivCity\" style=\"display:none;\">\
  <li>\
  <button type=\"button\" class=\"close visible-xs-block\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\"><img src=\"/"+province+"_head/images/phonedivcity.png\"></span></button>\
  <span>全部省份</span>\
  </li>\
  <li>\
  <dl class=\"clearfix\">\
  <dt><span>A-G</span></dt>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">北京 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">安徽 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">重庆 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">福建 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">广东 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">广西 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">甘肃 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">贵州 &gt;</a></dd>\
  </dl>\
  </li>\
  <li>\
  <dl class=\"clearfix\">\
  <dt><span>H-J</span></dt>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">河北 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">河南 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">海南 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">湖北 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">湖南 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">黑龙江 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">吉林 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">江苏 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">江西 &gt;</a></dd>\
  </dl>\
  </li>\
  <li>\
  <dl class=\"clearfix\">\
  <dt><span>L-S</span></dt>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">辽宁 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">内蒙古 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">宁夏 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">青海 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">上海 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">四川 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">山东 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">山西 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">陕西 &gt;</a></dd>\
  </dl>\
  </li>\
  <li>\
  <dl class=\"clearfix\">\
  <dt><span>T-Z</span></dt>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">天津 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">新疆 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">西藏 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">云南 &gt;</a></dd>\
  <dd><a href=\"javascript:void(0);\" class=\"ac_show_city\">浙江 &gt;</a></dd>\
  </dl>\
  </li>\
  </ul>\
  <ul class=\"dropdown-menu\" id=\"divdishi\" style=\"display:none;\">\
  <li><span></span>&nbsp;&nbsp;<a href=\"javascript:void(0);\"><span class=\"blue\">[返回全部省份]</span></a></li>\
  <li>\
  <dl class=\"clearfix dishi\">\
  </dl>\
  </li>\
  </ul>\
  </div>\
  ");

	$(".topcity").html(cobj.city_name); // 设置城市名称

	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	var loginName = null;
	var CmWebtokenid = null;
	for ( var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if ("loginName" == arr[0]) {
			loginName = arr[1];
			break;
		}
	}
	for ( var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if ("CmWebtokenid" == arr[0]) {
			var value = arr[1].replace(/\"/g, "").split(",");
			if(value[1] == province){
				CmWebtokenid = value[0];
			}
			break;
		}
	}

	// 设置省市选择浮层
	$(document).click(hiddenDivCity);

	$(".topcity").click(showDivCity);

	for (var i =0;i<provincesJson.length;i++) {
		$("#DivCity a:eq(" + i + ")").attr("prov_id",provincesJson[i].code);
		$("#DivCity a:eq(" + i + ")").attr("prov_abbr",provincesJson[i].abbr);
		$("#DivCity a:eq(" + i + ")").attr("prov_name",provincesJson[i].name);
		$("#DivCity a:eq(" + i + ")").html(provincesJson[i].name + " &gt;");
		$("#DivCity a:eq(" + i + ")").click(g2p);
	}

	$("#divdishi a:eq(0)").click(g2top);

}

function renderTopLevelMenu(pobj,cobj) {
	//一级菜单开始
	var container = $(".container");
	var divNavbar = $("<nav></nav>");
	divNavbar.attr("class","navbar");
	container[0].appendChild(divNavbar[0]);
	var navCollapse = $("<div></div>");
	navCollapse.attr("class","navbar-collapse");
	navCollapse.attr("id","bs-example-navbar-collapse-1");
	divNavbar[0].appendChild(navCollapse[0]);
	var navTopUl = $("<ul></ul>");
	navTopUl.attr("class","nav navbar-nav");
	navCollapse[0].appendChild(navTopUl[0]);
	//首页
	var navTopLi0 = $("<li></li>");
	navTopLi0.attr("class","navindex");
	navTopLi0.attr("id","navTop4");
	navTopUl[0].appendChild(navTopLi0[0]);
	var navTopA0 = $("<a></a>");
	navTopA0.html("首页");
	navTopA0.attr({"id":"topA4","href":"http://www.10086.cn/"});
	navTopA0.click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_ZDH_SY_'+cobj.prov_id + '|' + cobj.city_id);}});
	navTopLi0[0].appendChild(navTopA0[0]);
	//移动商城
	var navTopLi1 = $("<li></li>");
	navTopLi1.attr("class","dropdown");
	navTopLi1.attr("id","navTop0");
	if (!judgeMT){
		navTopLi1.mouseover(function(){navOver(0);});
		navTopLi1.mouseout(function(){navOut(0);});
	}
	navTopUl[0].appendChild(navTopLi1[0]);
	var navTopA1 = $("<a></a>");
	navTopA1.attr("class","dropdown-toggle");
	navTopA1.attr("id","topA0");
	navTopA1.html("移动商城<ins></ins>");
	navTopA1.click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_ZDH_YDSC_'+cobj.prov_id + '|' + cobj.city_id);}});
	navTopLi1[0].appendChild(navTopA1[0]);
	//我的移动
	var navTopLi2 = $("<li></li>");
	navTopLi2.attr("class","dropdown");
	navTopLi2.attr("id","navTop1");
	if (!judgeMT){
		navTopLi2.mouseover(function(){navOver(1);});
		navTopLi2.mouseout(function(){navOut(1);});
	}
	navTopUl[0].appendChild(navTopLi2[0]);
	var navTopA2 = $("<a></a>");
	navTopA2.attr("class","dropdown-toggle");
	navTopA2.attr("id","topA1");
	navTopA2.html("我的移动<ins></ins>");
	navTopA2.click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_ZDH_WDYD');}});
	navTopLi2[0].appendChild(navTopA2[0]);
	//网上营业厅
	var navTopLi3 = $("<li></li>");
	navTopLi3.attr("class","dropdown hidden-xs");
	navTopLi3.attr("id","navTop2");
	if (!judgeMT){
		navTopLi3.mouseover(function(){navOver(2);});
		navTopLi3.mouseout(function(){navOut(2);});
	}
	navTopUl[0].appendChild(navTopLi3[0]);
	var navTopA3 = $("<a></a>");
	navTopA3.attr("class","dropdown-toggle");
	navTopA3.attr("id","topA2");
	navTopA3.html("网上营业厅<ins></ins>");
	navTopA3.click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_ZDH_WSYYT');}});
	navTopLi3[0].appendChild(navTopA3[0]);
	//服务与支持
	var navTopLi4 = $("<li></li>");
	navTopLi4.attr("class","dropdown");
	navTopLi4.attr("id","navTop3");
	if (!judgeMT){
		navTopLi4.mouseover(function(){navOver(3);});
		navTopLi4.mouseout(function(){navOut(3);});
	}
	navTopUl[0].appendChild(navTopLi4[0]);
	var navTopA4 = $("<a></a>");
	navTopA4.attr("class","dropdown-toggle");
	navTopA4.attr("id","topA3");
	navTopA4.html("服务与支持<ins></ins>");
	navTopA4.click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_ZDH_FWYZC');}});
	navTopLi4[0].appendChild(navTopA4[0]);
	//一级菜单结束
}

// 点击显示省份列表
function showDivCity() {
	var pobj = ghead_getProvince(province);
	var prov_id = pobj.code;
	var prov_abbr = pobj.abbr;
	var prov_name = pobj.name;

	if (prov_id == 100 || prov_id == 210 || prov_id == 220 || prov_id == 230) { // 4个直辖市
		$("#DivCity").css("display","block");
		$("#divdishi").css("display","none");
	}
	else {
		drawingCity(prov_id,prov_abbr,prov_name); // 绘制地市信息
	}
	return false;
}
function hiddenDivCity() {
	$("#DivCity").css("display","none");
	$("#divdishi").css("display","none");
}
function g2top() { // 返回全部省份
	$("#DivCity").css("display","block");
	$("#divdishi").css("display","none");
	return false;
}
function g2p() { // 显示省中的地市

	var prov_id = $(this).attr("prov_id");
	var prov_abbr = $(this).attr("prov_abbr");
	var prov_name = $(this).attr("prov_name");

	if (prov_id == 100 || prov_id == 210 || prov_id == 220 || prov_id == 230) { // 4个直辖市
		$("#DivCity").css("display","none");
		jump("http://www.10086.cn/" + prov_abbr + "/",prov_abbr,prov_id,prov_id);
	} else {
		drawingCity(prov_id,prov_abbr,prov_name); // 绘制地市信息
	}
	return false;
}
// 绘制地市弹出层
function drawingCity(prov_id,prov_abbr,prov_name) {
	$("#DivCity").css("display","none");
	$("#divdishi").css("display","block");
	$("#divdishi span:eq(0)").html(prov_name);
	$(".dishi").empty();
	for (var i=0;i<citiesJson.length;i++) {
		if (prov_id == citiesJson[i].prov_id) {
			var dd = $("<dd/>");
			var citylink = $("<a />");
			citylink.attr("href","javascript:void(0);");
			citylink.attr("class","ac_show_city");

			citylink.attr("prov_href","http://www.10086.cn/" + prov_abbr + "/");
			citylink.attr("prov_abbr",prov_abbr);
			citylink.attr("prov_id",citiesJson[i].prov_id);
			citylink.attr("city_id",citiesJson[i].city_id);

			citylink.click(function () {
				var prov_href = $(this).attr("prov_href");
				var prov_abbr = $(this).attr("prov_abbr");
				var prov_id = $(this).attr("prov_id");
				var city_id = $(this).attr("city_id");

				jump(prov_href,prov_abbr,prov_id,city_id);
			});
			citylink.html(citiesJson[i].city_name);
			dd.append(citylink);
			$(".dishi").append(dd);

			var cityName = citiesJson[i].city_name;
			if(cityName == "衡水" || cityName == "琼海市" || cityName == "伊春"){
				dd.css("width","38px");
			}else if(cityName == "黔西南布依族苗族自治州"){
				dd.css("width","135px");
			}else if(cityName == "三门峡" || cityName == "保亭县"){
				dd.css("width","40px");
			}else if(cityName == "松原"){
				dd.css("width","35px");
			}else if(cityName == "鄂尔多斯"){
				dd.css("width","48px");
			}else if(cityName == "果洛藏族自治州" || cityName == "甘孜藏族自治州" || (cityName == "省直辖行政单位" && citiesJson[i].prov_id == 991)){
				dd.css("width","90px");
			}else if(cityName == "博尔塔拉蒙古自治州" || cityName == "巴音郭楞蒙古自治州"){
				dd.css("width","110px");
			}else if(cityName == "文山"){
				dd.css("width","25px");
			}
		}
	}
}
//控制登录浮层
function loginBar_show(){
	$("#divLoginfcBar").css("display","block");
	$("#divLoginfcBar").parent().addClass("open");
}
function loginBar_hide(){
	$("#divLoginfcBar").css("display","none");
	$("#divLoginfcBar").parent().removeClass("open");
}
//控制手机营业厅浮层
function ShowDivYYT(){
	$("#yytbar").css("display","block");
	$("#sjyyt").addClass("open");
}
function HideDivYYT(){
	$("#yytbar").css("display","none");
	$("#sjyyt").removeClass("open");
}
//判断是否是移动设备
var judgeMT = (function (){
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		return true;
	}
	else {
		return false;
	}
}());

// html编码函数
function htmlEncode(text) {
    return text.replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function htmlDecode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
