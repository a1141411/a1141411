const Koa = require('koa'); // http server 
const router = require('koa-router')(); // koa 路由中间件 BrowserRouter
const cors = require('koa-cors')
const app = new Koa();
const partitionsData = require('./data/partitions')

// /videos get     [{}]
router.get('/getVideos', ctx => {
    const videos = [
        {"img": "https://i2.hoopchina.com.cn/hupuapp/bbs/578/53021578/1663130176_532934IMG_8885.JPG", "title": "【9.15我厂厂记】邓恩惜温格；伯利提南北明星赛；内维尔抨击美资；埃杜谈萨卡续约", "content": "1、德国转会市场日本球员身价榜单上，阿森纳后卫富安健洋以2500万欧元居首。2、北京时间9月18日19:00举行的英超比赛布伦特福德vs阿森纳主裁：大卫-库特，VAR：彼得-班克斯。3、天空体育：索斯", "tid": 55542595, "topicName": "阿森纳专区"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-4l9tlaundefined.png", "title": "[流言板]佐兰-德拉季奇更新ins：干的好啊裁判，你们是眼瞎了吗", "content": "虎扑09月15日讯 在今日凌晨结束的欧锦赛1/4决赛中，斯洛文尼亚87-90憾负波兰，无缘四强。本场比赛最后5秒的一次判罚也引发了舆论争议，斯洛文尼亚后卫带球组织最后一攻，在后场与波兰球员有身体碰撞后", "tid": 55544469, "topicName": "篮球资讯"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-cche4jundefined.png", "title": "[流言板]满是不舍！车迷在比赛中为图赫尔拉起横幅以示敬意", "content": "虎扑09月15日讯 在此前切尔西对阵萨尔茨堡红牛的比赛中，切尔西球迷通过各种办法向俱乐部前任主教练图赫尔表达了敬意和不舍。在比赛第21分钟，全体球迷热烈鼓掌，随后在看台上便出现了一个图赫尔画像的巨大横", "tid": 55544436, "topicName": "国际足球资讯"},
        {"img": "https://i4.hoopchina.com.cn/newsPost/22915-63xud9rc-upload-1663206066577-29.png", "title": "新疆男篮晒阿不都投篮视频：这个投篮手型打几分", "content": "新疆男篮官方更新抖音，晒出队长阿不都沙拉木的投篮视频。新疆男篮配文：“这个投篮手型打几分”2021-22赛季CBA联赛，阿不都沙拉木为新疆男篮出战32场，场均登场37分钟，得到23分7.4篮板3.8助", "tid": 55544420, "topicName": "CBA专区"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-kxvphlundefined.gif", "title": "[流言板]大回环！贾文特-格林在训练中上演经典乔丹式扣篮", "content": "虎扑09月15日讯 公牛官方更新推特，晒出一段公牛球员贾文特-格林的扣篮图与球迷分享。“大回环！”公牛官方在推文中写道。2021-22赛季季后赛，贾文特-格林场均可以得到1.4分3.0篮板0.4助攻1", "tid": 55544395, "topicName": "篮球资讯"},
        {"img": "https://i5.hoopchina.com.cn/newsPost/22915-bvkxfiundefined.jpg", "title": "[流言板]真黄黑！前多特悍将混入球迷群中，在客场为球队助威", "content": "虎扑09月15日讯 欧冠小组赛第二轮，多特蒙德在客场1-2不敌曼城，但是在本场比赛的看台上的多特蒙德球迷群体中，却混入了一个熟悉的面孔，他就是前多特蒙德悍将格罗斯克罗伊茨！这名曾长期在多特蒙德效力的球", "tid": 55544373, "topicName": "国际足球资讯"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-ukv92hundefined.jpg", "title": "[流言板]这是啥造型？凯尔-库兹马亮相纽约时装周表演", "content": "虎扑09月15日讯 奇才前锋凯尔-库兹马近日亮相纽约时装周，据悉他是代表彪马品牌参加的，期间他造型十分奇特。根据此前报道，包括科怀-伦纳德和卡梅罗-安东尼在内的多位NBA球员都现场观看了本次纽约时装周", "tid": 55544365, "topicName": "篮球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-xyikhvundefined.jpeg", "title": "[流言板]笑口常开！76人官推晒哈登和马克西训练互动照", "content": "虎扑09月15日讯 今日，76人官方推特发布一组詹姆斯-哈登和泰雷斯-马克西的训练互动照。“猜猜是谁让@哈登 如此兴奋？😄”76人官推写道。   来源： Twitter", "tid": 55544360, "topicName": "篮球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-z5lqs6undefin,ed.gif", "title": "[流言板]你们想看的东西.mp4！掘金官方晒出默里和小波特的训练图", "content": "虎扑09月15日讯 掘金官方更新推特，晒出一段掘金球员贾马尔-默里和小迈克尔-波特的训练图与球迷分享。“你们想看的东西.mp4！”掘金官方在推文中写道。10月20日，掘金将迎来新赛季的首个对手爵士。 ", "tid": 55544314, "topicName": "篮球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-80eta6undefined.png", "title": "[流言板]U20亚预赛综述：韩国、日本、伊朗均取胜，沙特不敌乌兹别克", "content": "虎扑09月15日讯 2023年乌兹别克斯坦U20亚洲杯预选赛ABCD组第3轮战罢A组沙特阿拉伯1-2乌兹别克斯坦中国5-0马尔代夫B组卡塔尔6-0不丹巴林6-0尼泊尔C组日本9-0关岛也门2-1老挝D", "tid": 55544312, "topicName": "中国足球"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-q28hevundefined.jpeg", "title": "[流言板]天赋大队！火箭官推晒格林、史密斯等多位球员训练照", "content": "虎扑09月15日讯 火箭官方推特今日发布了贾巴里-史密斯、杰伦-格林、约什-克里斯托弗等多位球员的健身房训练照。“紧绷肌肉的季节。💪”火箭官方写道。   来源： Twitter", "tid": 55544307, "topicName": "篮球资讯"},
        {"img": "https://i10.hoopchina.com.cn/editor/1663206557749/ygeEyqGT9tm_2Fs6q_2B0Ivqv7JAuyo_3D.jpg", "title": "小妲己爆料|S29荣耀战令进阶版80级福利【钟无艳-超时空战士】视频爆料", "content": "", "tid": 55544161, "topicName": "王者荣耀"},
        {"img": "https://i4.hoopchina.com.cn/editor/2022-9-15/05-52-38/759eb9eb-2dc3-4349-ab85-6f61324fab1e.jpeg", "title": "【9.15 蓝月早报】不落后不会踢！一线队及U19均逆转取胜多特蒙德", "content": "早上好！又是一个胜利的夜晚！战报曼城在主场2比1逆转多特蒙德，取得欧冠小组赛第二场比赛的胜利，斯通斯和哈兰德打入两记精彩绝伦的进球。全场最佳本场比赛，欧足联官方评选的最佳球员为德布劳内进球机器Stat", "tid": 55542604, "topicName": "曼城专区"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-zxhs4vundefined.jpeg", "title": "[流言板]这只是开始！马尔卡宁晒照：出色的夏天，旅程继续", "content": "虎扑09月15日讯 爵士球员劳里-马尔卡宁更新推特，晒出一张芬兰队的全家福与球迷分享。“出色的球队💙🤍感谢能度过一个很棒的夏天，旅程继续！”马尔卡宁在推文中写道。在上一场芬兰以90-100不敌西班", "tid": 55544273, "topicName": "篮球资讯"},
        {"img": "https://i2.hoopchina.com.cn/newsPost/22915-yh6b05rc-upload-1663207161996-7.jpeg", "title": "休斯顿青年军！火箭官方晒今日球员集体训练集锦", "content": "来源：  虎扑", "tid": 55544259, "topicName": "篮球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-z9bqr5undefined.jpg", "title": "[流言板]梅西、德布劳内2022至今助攻均为18次，并列五大联赛榜首", "content": "虎扑09月15日讯 在今天凌晨结束的欧冠比赛中，曼城2-1战胜多特，巴黎3-1战胜海法马卡比。两场比赛中德布劳内取得一次助攻，而梅西也是传射建功。据数据统计，梅西和德布劳内二人2022年至今都获得了1", "tid": 55544249, "topicName": "国际足球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-76ms8yundefined.jpg", "title": "[流言板]曾令旭谈欧锦赛：欧洲篮球真玄学，看好德国捧杯 ", "content": "虎扑09月15日讯 本届男篮欧锦赛八强赛全部战罢，德国、法国、西班牙、波兰杀入四强。今日曾令旭更新微博，发文谈对比赛的感想。曾令旭写道：“一觉醒来波兰赢了斯洛文尼亚，欧洲篮球真玄学啊，谁都能赢谁，半决", "tid": 55544244, "topicName": "CBA专区"},
        {"img": "https://i5.hoopchina.com.cn/newsPost/22915-gowsvqundefined.jpeg", "title": "[流言板]不断逼近！马刺官方为揭幕战倒计时：还有一个兰福德天", "content": "虎扑09月15日讯 马刺官方更新推特，晒出一组马刺球员罗密欧-兰福德的赛场照与球迷分享。“赛季正在逼近！离揭幕战还有35天！”马刺官方在推文中写道。10月20日，马刺将迎来新赛季的首个对手黄蜂。   ", "tid": 55544182, "topicName": "篮球资讯"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-cbm6rgundefined.jpg", "title": "[流言板]格拉利什含蓄吹哈兰德：比赛很难，取胜得益于一些天才时刻", "content": "虎扑09月15日讯 曼城2-1战胜多特，哈兰德在比赛第84分钟接坎塞洛传球实现高难度破门，帮助球队逆转比赛。赛后格拉利什也是在社交媒体上含蓄地称赞了队友的精彩表现。格拉利什写道：“本场比赛很艰难，但在", "tid": 55544172, "topicName": "国际足球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-lh8vu7undefined.jpg", "title": "[流言板]克拉克森：不知是谁选择了放弃，对未来我已做好多种准备", "content": "虎扑09月15日讯 爵士球员乔丹-克拉克森近日参加一档名为Jalen &amp; Jacoby的电话采访节目，期间他谈到了爵士交易走核心球员多诺万-米切尔和鲁迪-戈贝尔并准备重建的话题。“唉，这很艰难", "tid": 55544168, "topicName": "篮球资讯"},
        {"img": "https://i10.hoopchina.com.cn/editor/2022-9-14/01-13-53/78f1058e-b9ca-4d8c-88bd-3b6d2711e52c.jpeg", "title": "【翻译团】曼联首访摩尔多瓦前，让我们跟着红魔学习欧洲地理", "content": "本周四，曼联将客场对阵谢里夫，这也是红魔首次在摩尔多瓦踢比赛。摩尔多瓦是东欧的一个内陆国家，位于乌克兰和罗马尼亚之间，人口260万——与大曼彻斯特大致相当。此前，曼联与32个欧足联成员国的俱乐部踢过正", "tid": 55543274, "topicName": "足球话题区"},
        {"img": "https://i3.hoopchina.com.cn/bbs-editor-web/16631917777985.jpg", "title": "[集锦]莱奥造点+助攻，吉鲁破门，米兰3-1萨格勒布迪纳摩", "content": "", "tid": 55542493, "topicName": "米兰专区"},
        {"img": "https://i3.hoopchina.com.cn/editor/2022-9-14/22-06-11/a3ea7893-958a-41c8-aa8c-cd532df264b0.png", "title": "有人不说我是wb粉丝，写个长文分析一下wb自证", "content": "起因是一篇帖子里我说暖阳逆风心态差，有人说不配当wb粉丝，实际上粉丝也没有必要无脑维护，有问题一定要说，不然不就跟超话饭圈粉一样了？直到这支wb夺冠以前，我都会一直找问题，毕竟找到、解决才能提升嘛第一", "tid": 55540565, "topicName": "王者荣耀"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-3dzgpsundefined.png", "title": "[流言板]宋翔：超级外援迈克尔-比斯利启程前往上海", "content": "虎扑09月15日讯 据篮球记者宋翔透露，超级外援迈克尔-比斯利启程前往上海。原文：“消息源，上海队超级外援比斯利已经启程前往上海。如果一切顺利，比斯利将在本月底与球队会合。”比斯利2014-15赛季、", "tid": 55544117, "topicName": "CBA专区"},
        {"img": "https://i2.hoopchina.com.cn/newsPost/22915-qs1d9zundefined.jpg", "title": "[情报站]Tian更新推特：野生超萌小猫出现在披萨盒上", "content": "虎扑09月15日讯 今日TES战队打野选手Tian更新推特，发布两张照片，并且配文：“野生超萌小猫出现在披萨盒上！——是的。”   来源： Twitter", "tid": 55544105, "topicName": "英雄联盟"},
        {"img": "https://i3.hoopchina.com.cn/bbs-editor-web/16631882205837.jpg", "title": "【进球视频】维尼修斯和巴尔韦德这两人真强啊！", "content": "", "tid": 55542240, "topicName": "足球话题区"},
        {"img": "https://i4.hoopchina.com.cn/newsPost/22915-yqfiwsundefined.jpeg", "title": "[流言板]保罗：萨维尔的行为是不可接受的，处罚未能真正解决问题", "content": "虎扑09月15日讯 根据此前的报道，联盟官方宣布，太阳老板罗伯特-萨维尔将被禁止参与球队事项一年。处罚的原因是，联盟官方对萨维尔的行为进行了详细调查，结果显示萨维尔曾多次做出种族歧视和对男性和女性的不", "tid": 55543983, "topicName": "篮球资讯"},
        {"img": "https://i5.hoopchina.com.cn/newsPost/22915-a487dhundefined.jpg", "title": "[流言板]贾磊：当初打波兰是中国男篮近10年国际大赛发挥最好的一场", "content": "虎扑09月15日讯 欧锦赛八强战，波兰90-87淘汰卫冕冠军斯洛文尼亚，杀入四强。今日篮球记者贾磊发文谈自己的感受。贾磊写道：“波兰淘汰卫冕冠军斯洛文尼亚，杀入欧洲杯四强，让东契奇早早回家了。狂砍26", "tid": 55543961, "topicName": "CBA专区"},
        {"img": "https://i4.hoopchina.com.cn/newsPost/22915-jrc4zkundefined.jpg", "title": "[流言板]萨利：当我观看队内训练赛的时候，分不清哪边是主力阵容", "content": "虎扑09月15日讯 拜仁慕尼黑体育总监萨利哈米季奇日前在接受采访的时候谈到了今年夏天的转会操作和球队目前的阵容。关于拜仁慕尼黑本赛季的阵容“我们感觉没有一套固定的首发11人阵容，当我观看球队训练的时候", "tid": 55543948, "topicName": "国际足球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-7md6saundefined.png", "title": "[流言板]米切尔：和加兰训练效果很好，应用到实战中会很特别", "content": "虎扑09月15日讯 今天骑士新援多诺万-米切尔接受了记者的采访。被交易到骑士之前，米切尔就和骑士球员在一起训练过。而在加入骑士后，米切尔也和达里厄斯-加兰等人打过野球。对此米切尔说：“在我们一起训练期", "tid": 55543943, "topicName": "篮球资讯"},
        {"img": "https://i4.hoopchina.com.cn/bbs-editor-web/16631971679687.jpg", "title": "感谢大家的支持！哈兰德欧冠赛后独自一人谢场", "content": "", "tid": 55542804, "topicName": "足球话题区"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-0ohlqcundefined.png", "title": "[流言板]巴尔韦德：这粒进球献给过生日的母亲；皇马也加油", "content": "虎扑09月15日讯 在皇家马德里2-0战胜莱比锡的比赛中，巴尔韦德首开纪录。赛后这位24岁的中场的社交媒体表示这粒进球献给他的母亲。巴尔韦德写道：“妈妈，生日快乐💙这是送你的礼物⚽️🎁，皇马也他X", "tid": 55543893, "topicName": "国际足球资讯"},
        {"img": "https://i2.hoopchina.com.cn/editor/2022-9-15/09-31-31/5471fc1e-f28e-42aa-aaa2-e6377a357231.png", "title": "马修-麦康纳主演足球题材新片《达拉斯之刺》因基于真实故事的“不当行为指控”被叫停", "content": "马修·麦康纳主演足球题材新片《达拉斯之刺》黄了，在距离开拍仅剩6周、演员阵容也几乎全部就位的情况下，制片公司天舞影业和制片人收到了一些关于该片基于的真实故事的“令人不安的不当行为指控”，消息人士称：经", "tid": 55543851, "topicName": "足球话题区"},
        {"img": "https://i2.hoopchina.com.cn/newsPost/22915-0xs5hvundefined.png", "title": "[流言板]米切尔：我能给球队提供经验，能很好地和球队配合", "content": "虎扑09月15日讯 今天骑士新援多诺万-米切尔接受了记者的采访。“说真的，我觉得我肯定能给球队提供的就是经验。我能够利用我的得分能力，组织战术，让球员得到空位机会，让加兰、勒韦尔做自己的事。我能吸引防", "tid": 55543866, "topicName": "篮球资讯"},
        {"img": "https://i5.hoopchina.com.cn/bbs-editor-web/16631972659944.jpg", "title": "海法马卡比球员与梅西交换球衣后当场穿上，还闻了闻味道…", "content": "在比赛之前，这位名叫阿特齐利的球员就在社媒“预定”了梅西的球衣。而在欧冠抽签时，他曾表示：让我见梅西吧，我愿意为他自杀。", "tid": 55542815, "topicName": "足球话题区"},
        {"img": "https://i5.hoopchina.com.cn/bbs-editor-web/16631686404074.jpg", "title": "这波操作打几分？绝地翻盘", "content": "", "tid": 55540577, "topicName": "王者荣耀"},
        {"img": "https://i2.hoopchina.com.cn/newsPost/22915-lda4dvundefined.webp", "title": "[流言板]米切尔：我以为我会被交易到纽约，谁不想待在妈妈身边？", "content": "虎扑09月15日讯 骑士后卫多诺万-米切尔今日接受采访。谈到他的家乡球队尼克斯，米切尔说：“我以为我肯定要回家了，对此我不会撒谎。鲁迪-戈贝尔被交易后，我就看到了不祥之兆。我想我们都这么想。我想我们都", "tid": 55543800, "topicName": "篮球资讯"},
        {"img": "https://i5.hoopchina.com.cn/newsPost/22915-yeqd03undefined.png", "title": "[情报站]美测服9月14日改动：人马继续削弱，卡莉斯塔的削弱略微回调", "content": "虎扑09月15日讯 美测服9月14日对人马和滑板鞋进行细微改动，以下改动均是在昨日发布的12.18版本改动内容基础上进行的后续改动，具体内容如下：战争之影 赫卡里姆基础生命值：650→625复仇之矛 ", "tid": 55543754, "topicName": "英雄联盟"},
        {"img": "https://i2.hoopchina.com.cn/newsPost/22915-pk1359undefined.jpg", "title": "[流言板]已跻身法甲最佳？努贝尔：只要诺伊尔还在，我就不回拜仁", "content": "虎扑09月15日讯 拜仁慕尼黑外租在摩纳哥的德国门将努贝尔本赛季迄今为止的表现非常出色，他目前已经在法甲中贡献了36次扑救，是法甲联赛中扑救次数最多的门将，已然成为法甲表现最好的门将之一。最近，努贝尔", "tid": 55543737, "topicName": "国际足球资讯"},
        {"img": "https://i5.hoopchina.com.cn/editor/2022-9-15/09-07-36/0b427171-9d75-4d83-8a9c-af2a92c641f9.gif", "title": "高难度绝杀让瓜帅惊呼克鲁伊夫再世！哈兰德的身体素质有多逆天？", "content": "今天凌晨结束的欧冠小组赛第二轮中，哈兰德面对旧主多特蒙德上演绝杀，帮助曼城逆转取胜。赛后，主帅瓜迪奥拉毫不吝惜溢美之词，并表示哈兰德此球模仿了巴萨“教父”克鲁伊夫。“毫无疑问，哈兰德的进球真是太棒了，", "tid": 55543671, "topicName": "足球话题区"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-1dm5ncundefined.jpeg", "title": "[流言板]不断变强！杰伦-格林在训练中亮出粗壮手臂", "content": "虎扑09月15日讯 NBA Central更新推特，晒出一张火箭球员杰伦-格林的训练照与球迷分享。“杰伦-格林现在的样子💪！”NBA Central在推文中写道。2021-22赛季常规赛，杰伦-格林", "tid": 55543678, "topicName": "篮球资讯"},
        {"img": "https://i4.hoopchina.com.cn/newsPost/22915-hkf8diundefined.jpeg", "title": "[流言板]奥巴梅扬：图赫尔下课后有些沮丧和难过，我会尽快找他聊天", "content": "虎扑09月15日讯 在切尔西1-1战平萨尔茨堡红牛的欧冠赛后，切尔西前锋奥巴梅扬接受采访时谈到了图赫尔的离任，他表示图赫尔的离任令自己很难过，而图赫尔本人下课后也感到有些沮丧和难过，自己会尽快找图赫尔", "tid": 55543673, "topicName": "国际足球资讯"},
        {"img": "https://i2.hoopchina.com.cn/newsPost/22915-6tatxjrc-upload-1663204353282-7.png", "title": "官方：梅西生涯首记倒钩当选法甲联赛8月最佳进球", "content": "法甲联赛官方宣布，在巴黎圣日耳曼5-0战胜克莱蒙的比赛中，梅西打进的倒钩球当选为8月份的最佳进球。 来源：  Twitter    标签：梅西巴黎圣日耳曼", "tid": 55543664, "topicName": "国际足球资讯"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-wzkc67undefined.jpg", "title": "[流言板]阿坎吉批老东家，凯尔：多特想和他续约，他不该说那种话", "content": "虎扑09月15日讯 在今年夏天从多特蒙德转会到曼城后，多特蒙德旧将阿坎吉在接受瑞士媒体采访的时候对老东家提出了一些批评，对于这些批评指责，多特蒙德体育总监凯尔表示并不认可。阿坎吉此前在接受采访的时候说", "tid": 55543647, "topicName": "国际足球资讯"},
        {"img": "https://i2.hoopchina.com.cn/editor/2022-9-15/05-01-25/1cc82282-8a23-4d19-a6d2-7fe3024cd154.gif", "title": "切尔西 1-1 萨尔茨堡红牛，衔接、对抗、4-3-1-2的肋部、切尔西的割裂感", "content": "赛前—这应该没啥切换余地了………吧，想不出来哪一侧能深度落回去。4-3-3还是4-2-3-1其实不重要，因为这套体系说到底最后的逻辑还是在于芒特和哈弗茨怎么摆，他们能不能去完成体系的衔接。波特这反正，", "tid": 55542499, "topicName": "切尔西专区"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-za8h7vundefined.webp", "title": "[流言板]米切尔：我在现场见证了詹姆斯的决定，也庆祝过骑士夺冠", "content": "虎扑09月15日讯 骑士后卫多诺万-米切尔今日接受采访。谈及他的骑士记忆，米切尔表示前骑士球员勒布朗-詹姆斯2010年7月10日就在他家乡附近的一所中学宣布了离开骑士加盟热火的决定，而他作为詹姆斯的球", "tid": 55543618, "topicName": "篮球资讯"},
        {"img": "https://i1.hoopchina.com.cn/newsPost/22915-s251iiundefined.jpg", "title": "[流言板]帕金斯：凯尔特人需要签下安东尼，他能带来帮助", "content": "虎扑09月15日讯 前NBA球员肯德里克-帕金斯在一档节目中接受采访，他谈到了老将卡梅罗-安东尼。“凯尔特人最好能签下他，”帕金斯说道，“他们还在等什么？这是事实：卡梅罗-安东尼已经向我们展示了他愿意", "tid": 55543593, "topicName": "篮球资讯"},
        {"img": "https://i3.hoopchina.com.cn/newsPost/22915-xb2n6bundefined.jpeg", "title": "[流言板]凯尔特人官方晒杰伦塔特姆合影：联盟中最‘灵动’的组合", "content": "虎扑09月15日讯 凯尔特人官方更新推特，晒出一张凯尔特人球员杰伦-布朗和杰森-塔特姆的合影与球迷分享。“谁是联盟中最‘灵动’（dynamic）的组合？我想你已经知道了！”凯尔特人官方在推文中写道。1", "tid": 55543565, "topicName": "篮球资讯"}
    ];
    ctx.body = videos
})

app.use(cors())
// app.use(crossDomain)
app.use(router.routes())
// ctx = req 用户请求 + 中间件{n}   +  res响应结果 
// 中间件函数 

app.use((ctx) => {
    ctx.body = 'hello world' 
})

app.listen(3300);