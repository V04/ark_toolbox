import _ from "lodash";

export interface OperatorInfo {
  profile: string;
  name: string;
  codename: string;
  rareness: number;
  tag: number;
}

export interface TagsSelected {
  获得途径?: number[];
  职业?: number[];
  部署位?: number[];
  性别?: number[];
  一般标签?: number[];
}

export interface MatchedOperators {
  tags: string[];
  operators: OperatorInfo[];
  maxRareness: number;
  minRareness: number;
}

export const tags = {
  公招可见: 1,
  先锋: 2,
  近卫: 4,
  狙击: 8,
  重装: 16,
  医疗: 32,
  辅助: 64,
  术师: 128,
  特种: 256,
  近战位: 512,
  远程位: 1024,
  男性干员: 2048,
  女性干员: 4096,
  断罪性干员: 8192,
  治疗: 16384,
  支援: 32768,
  输出: 65536,
  群攻: 131072,
  减速: 262144,
  生存: 524288,
  防护: 1048576,
  削弱: 2097152,
  位移: 4194304,
  控场: 8388608,
  爆发: 16777216,
  召唤: 33554432,
  快速复活: 67108864,
  费用回复: 134217728,
  支援机械: 268435456,
  新手: 536870912,
  资深干员: 1073741824,
  高级资深干员: 2147483648
};

export const tagsGrouped = {
  获得途径: { 公招可见: 1 },
  职业: {
    先锋: 2,
    近卫: 4,
    狙击: 8,
    重装: 16,
    医疗: 32,
    辅助: 64,
    术师: 128,
    特种: 256
  },
  部署位: { 近战位: 512, 远程位: 1024 },
  性别: { 男性干员: 2048, 女性干员: 4096, 断罪性干员: 8192 },
  一般标签: {
    治疗: 16384,
    支援: 32768,
    输出: 65536,
    群攻: 131072,
    减速: 262144,
    生存: 524288,
    防护: 1048576,
    削弱: 2097152,
    位移: 4194304,
    控场: 8388608,
    爆发: 16777216,
    召唤: 33554432,
    快速复活: 67108864,
    费用回复: 134217728,
    支援机械: 268435456,
    新手: 536870912,
    资深干员: 1073741824,
    高级资深干员: 2147483648
  }
};

const todo1 = "this should be removed in production env";
export const operators = [
  {
    profile: "https://i.loli.net/2021/01/23/h3evtpfS8jYLXIc.png",
    name: "\u56fe\u8036",
    codename: "Tuye",
    rareness: 5,
    tag: 1073763360
  },
  {
    profile: "https://i.loli.net/2021/01/23/kcTDdHIjLnyOmSt.png",
    name: "\u7a7a\u5f26",
    codename: "Archetto",
    rareness: 6,
    tag: 2147554312
  },
  {
    profile: "https://i.loli.net/2021/01/23/CtlZF6bV21jxfKG.png",
    name: "\u7231\u4e3d\u4e1d",
    codename: "Iris",
    rareness: 5,
    tag: 1073812608
  },
  {
    profile: "https://i.loli.net/2021/01/23/yjPfUSQaeO1oTF4.png",
    name: "\u8c46\u82d7",
    codename: "Beanstalk",
    rareness: 4,
    tag: 167777282
  },
  {
    profile: "https://i.loli.net/2021/01/23/5mbScqegdATxnzw.png",
    name: "\u5c71",
    codename: "Mountain",
    rareness: 6,
    tag: 2148076036
  },
  {
    profile: "https://i.loli.net/2021/01/23/MgdceJTfVxmaYUy.png",
    name: "\u5361\u592b\u5361",
    codename: "Kafka",
    rareness: 5,
    tag: 1149244160
  },
  {
    profile: "https://i.loli.net/2021/01/23/p39PxvXSuHCrVjA.png",
    name: "\u7f57\u5bbe",
    codename: "Robin",
    rareness: 5,
    tag: 1111495936
  },
  {
    profile: "https://i.loli.net/2021/01/23/DMQgqf9Xi6CsdBH.png",
    name: "\u677e\u679c",
    codename: "Pinecone",
    rareness: 4,
    tag: 201736
  },
  {
    profile: "https://i.loli.net/2021/01/23/oJU9GyXvDgtL8c3.png",
    name: "\u963f\u7c73\u5a05(\u8fd1\u536b)",
    codename: "Amiya",
    rareness: 5,
    tag: 1073844740
  },
  {
    profile: "https://i.loli.net/2021/01/23/NV5nfqejgzdsCKA.png",
    name: "\u8ff7\u8fed\u9999",
    codename: "Rosmontis",
    rareness: 6,
    tag: 2147554312
  },
  {
    profile: "https://i.loli.net/2021/01/23/Gfu19mrUaiAWqnJ.png",
    name: "\u6ce5\u5ca9",
    codename: "Mudrock",
    rareness: 6,
    tag: 2149126672
  },
  {
    profile: "https://i.loli.net/2021/01/23/bycZOSMUstKzJXL.png",
    name: "\u7d6e\u96e8",
    codename: "Whisperain",
    rareness: 5,
    tag: 1073763360
  },
  {
    profile: "https://i.loli.net/2021/01/23/XRsnlohxavjOJG3.png",
    name: "\u6770\u514b",
    codename: "Jackie",
    rareness: 4,
    tag: 70148
  },
  {
    profile: "https://i.loli.net/2021/01/23/yxO7K4jkuq6op5V.png",
    name: "\u7455\u5149",
    codename: "Blemishine",
    rareness: 6,
    tag: 2148618768
  },
  {
    profile: "https://i.loli.net/2021/01/23/OTkn7gC5v8Q9JyF.png",
    name: "\u5965\u65af\u5854",
    codename: "Aosta",
    rareness: 5,
    tag: 1073875976
  },
  {
    profile: "https://i.loli.net/2021/01/23/qV9bs1M6QlEy8iw.png",
    name: "\u97ad\u5203",
    codename: "Whislash",
    rareness: 5,
    tag: 1073844740
  },
  {
    profile: "https://i.loli.net/2021/01/23/PKDQa97IsgUTmBA.png",
    name: "\u6ce1\u6ce1",
    codename: "Bubble",
    rareness: 4,
    tag: 1053200
  },
  {
    profile: "https://i.loli.net/2021/01/23/ZLw3DgtYObuzBxy.png",
    name: "\u53f2\u5c14\u7279\u5c14",
    codename: "Surtr",
    rareness: 6,
    tag: 2147553796
  },
  {
    profile: "https://i.loli.net/2021/01/23/TbVoOMHwn3egqD7.png",
    name: "\u56db\u6708",
    codename: "April",
    rareness: 5,
    tag: 1073812488
  },
  {
    profile: "https://i.loli.net/2021/01/23/umfRAaNoVgPdG2n.png",
    name: "\u8584\u7eff",
    codename: "Mint",
    rareness: 5,
    tag: 1082266752
  },
  {
    profile: "https://i.loli.net/2021/01/23/3mFALDnIRuXyVhP.png",
    name: "\u82b3\u6c40",
    codename: "Arene",
    rareness: 4,
    tag: 68100
  },
  {
    profile: "https://i.loli.net/2021/01/23/tj1OJ5nZgEmbRx3.png",
    name: "\u68ee\u86ba",
    codename: "Eunectes",
    rareness: 6,
    tag: 2149126672
  },
  {
    profile: "https://i.loli.net/2021/01/23/SqcAT4ztWRJNd7l.png",
    name: "\u71e7\u77f3",
    codename: "Flint",
    rareness: 5,
    tag: 1073811972
  },
  {
    profile: "https://i.loli.net/2021/01/23/aGPwbWfHtcdvKlo.png",
    name: "\u7279\u7c73\u7c73",
    codename: "Tomimi",
    rareness: 5,
    tag: 1074336896
  },
  {
    profile: "https://i.loli.net/2021/01/23/IOAvNroUeJmhLkz.png",
    name: "\u9178\u7cd6",
    codename: "Aciddrop",
    rareness: 4,
    tag: 70664
  },
  {
    profile: "https://i.loli.net/2021/01/23/ScQzrtYXDOIjpFo.png",
    name: "\u68d8\u523a",
    codename: "Thorns",
    rareness: 6,
    tag: 2148600324
  },
  {
    profile: "https://i.loli.net/2021/01/23/HaOz14YCQcBkbis.png",
    name: "\u5b89\u54f2\u62c9",
    codename: "Andreana",
    rareness: 5,
    tag: 1074074632
  },
  {
    profile: "https://i.loli.net/2021/01/23/H7jMoaBhRws3PpD.png",
    name: "\u5b51",
    codename: "Jaye",
    rareness: 4,
    tag: 67177216
  },
  {
    profile: "https://i.loli.net/2021/01/23/HRnqPMGmUuzacXE.png",
    name: "\u8d3e\u7ef4",
    codename: "Chiave",
    rareness: 5,
    tag: 1208027650
  },
  {
    profile: "https://i.loli.net/2021/01/23/cL368UzDujhqtpY.png",
    name: "\u871c\u8721",
    codename: "Beeswax",
    rareness: 5,
    tag: 1074926720
  },
  {
    profile: "https://i.loli.net/2021/01/23/TFxLJXr6sdiB274.png",
    name: "\u7a00\u97f3",
    codename: "Scene",
    rareness: 5,
    tag: 1107334208
  },
  {
    profile: "https://i.loli.net/2021/01/23/z6PEXjKVGYeUnBH.png",
    name: "\u94c3\u5170",
    codename: "Suzuran",
    rareness: 6,
    tag: 2147849280
  },
  {
    profile: "https://i.loli.net/2021/01/23/m3LkBleAuYnJfv7.png",
    name: "\u65ad\u5d16",
    codename: "Ayerscarpe",
    rareness: 5,
    tag: 1073940996
  },
  {
    profile: "https://i.loli.net/2021/01/23/MeXiNf9rCkBUldO.png",
    name: "\u4e9a\u53f6",
    codename: "Folinic",
    rareness: 5,
    tag: 1073828896
  },
  {
    profile: "https://i.loli.net/2021/01/23/gEwTi8XRdZnuQAs.png",
    name: "\u5361\u8fbe",
    codename: "Click",
    rareness: 4,
    tag: 8459392
  },
  {
    profile: "https://i.loli.net/2021/01/23/r7IXFdnDC5SRJBy.png",
    name: "\u65e9\u9732",
    codename: "\u0420\u043e\u0441\u0430",
    rareness: 6,
    tag: 2155942920
  },
  {
    profile: "https://i.loli.net/2021/01/23/rx2dBITpNonFAS7.png",
    name: "\u83b1\u6069\u54c8\u7279",
    codename: "Leonhardt",
    rareness: 5,
    tag: 1090653312
  },
  {
    profile: "https://i.loli.net/2021/01/23/NrOJdah2U5Pxcmy.png",
    name: "\u82e6\u827e",
    codename: "Absinthe",
    rareness: 5,
    tag: 1073812608
  },
  {
    profile: "https://i.loli.net/2021/01/23/Te2NQOiIWhqpdlC.png",
    name: "\u6ce2\u767b\u53ef",
    codename: "Podenco",
    rareness: 4,
    tag: 283712
  },
  {
    profile: "https://i.loli.net/2021/01/23/Wv617YNysRqpPxJ.png",
    name: "\u6708\u79be",
    codename: "Tsukinogi",
    rareness: 5,
    tag: 1074304064
  },
  {
    profile: "https://i.loli.net/2021/01/23/n7f9ypeEPl2jqaY.png",
    name: "\u77f3\u68c9",
    codename: "Asbestos",
    rareness: 5,
    tag: 1074860560
  },
  {
    profile: "https://i.loli.net/2021/01/23/xVnQiE5B1fplZ7F.png",
    name: "W",
    codename: "W",
    rareness: 6,
    tag: 2155942920
  },
  {
    profile: "https://i.loli.net/2021/01/23/FE6CubVhmZs1RTY.png",
    name: "\u6e29\u8482",
    codename: "Weedy",
    rareness: 6,
    tag: 2160136960
  },
  {
    profile: "https://i.loli.net/2021/01/23/UnToJrzNLsQkp9f.png",
    name: "\u6781\u5883",
    codename: "Elysium",
    rareness: 5,
    tag: 1207994882
  },
  {
    profile: "https://i.loli.net/2021/01/23/ji7IPW6Qk1dfeJa.png",
    name: "THRM-EX",
    codename: "Thermal-EX",
    rareness: 1,
    tag: 285215489
  },
  {
    profile: "https://i.loli.net/2021/01/23/1lqsc3g2CzTL7Vx.png",
    name: "\u5080\u5f71",
    codename: "Phantom",
    rareness: 6,
    tag: 2223049472
  },
  {
    profile: "https://i.loli.net/2021/01/23/rFwSWE3MuG45Qte.png",
    name: "\u5deb\u604b",
    codename: "Shamare",
    rareness: 5,
    tag: 1075844160
  },
  {
    profile: "https://i.loli.net/2021/01/23/G9ivWZm8bjuOVx5.png",
    name: "\u94f8\u94c1",
    codename: "Sideroca",
    rareness: 5,
    tag: 1074336260
  },
  {
    profile: "https://i.loli.net/2021/01/23/q8DzVGRLEI7FUxK.png",
    name: "\u523b\u5200",
    codename: "Cutter",
    rareness: 4,
    tag: 16847364
  },
  {
    profile: "https://i.loli.net/2021/01/23/yhHCt65rZUiMn2O.png",
    name: "\u65ad\u7f6a\u8005",
    codename: "Conviction",
    rareness: 4,
    tag: 25764356
  },
  {
    profile: "https://i.loli.net/2021/01/23/tHaAdXYME1WIzlV.png",
    name: "\u98ce\u7b1b",
    codename: "Bagpipe",
    rareness: 6,
    tag: 2281771522
  },
  {
    profile: "https://i.loli.net/2021/01/23/9uPsdVtDNqCTnkx.png",
    name: "\u6151\u7802",
    codename: "Sesa",
    rareness: 5,
    tag: 1075973128
  },
  {
    profile: "https://i.loli.net/2021/01/23/SsoKNyI9jzlmTC3.png",
    name: "\u67cf\u5599",
    codename: "Bibeak",
    rareness: 5,
    tag: 1090589188
  },
  {
    profile: "https://i.loli.net/2021/01/23/o5y16SFqRhJZbCc.png",
    name: "\u5bb4",
    codename: "Utage",
    rareness: 4,
    tag: 594436
  },
  {
    profile: "https://i.loli.net/2021/01/23/abvkBl2S948YnfV.png",
    name: "\u6e05\u6d41",
    codename: "Purestream",
    rareness: 4,
    tag: 54304
  },
  {
    profile: "https://i.loli.net/2021/01/23/YsJcEpBDZCAuywW.png",
    name: "\u523b\u4fc4\u67cf",
    codename: "Ceobe",
    rareness: 6,
    tag: 2155943040
  },
  {
    profile: "https://i.loli.net/2021/01/23/9ZmPNqFTjuxkKvA.png",
    name: "\u60ca\u86f0",
    codename: "Leizi",
    rareness: 5,
    tag: 1073812608
  },
  {
    profile: "https://i.loli.net/2021/01/23/Be9zsu1dlfxh8NH.png",
    name: "\u5e74",
    codename: "Nian",
    rareness: 6,
    tag: 2148569616
  },
  {
    profile: "https://i.loli.net/2021/01/23/ca1ph8R9uIXYdJG.png",
    name: "\u963f",
    codename: "Aak",
    rareness: 6,
    tag: 2147585280
  },
  {
    profile: "https://i.loli.net/2021/01/23/Dtdo6Ww5MSFOB7x.png",
    name: "\u543d",
    codename: "Hung",
    rareness: 5,
    tag: 1074809360
  },
  {
    profile: "https://i.loli.net/2021/01/23/kpWo5s3yrCFBQnh.png",
    name: "\u96ea\u96c9",
    codename: "Snowsant",
    rareness: 5,
    tag: 1078203136
  },
  {
    profile: "https://i.loli.net/2021/01/23/svOV1YfNUQ68tAa.png",
    name: "\u714c",
    codename: "Blaze",
    rareness: 6,
    tag: 2148078084
  },
  {
    profile: "https://i.loli.net/2021/01/23/aVKcrGRisTjBOE2.png",
    name: "\u7070\u5589",
    codename: "GreyThroat",
    rareness: 5,
    tag: 1073812488
  },
  {
    profile: "https://i.loli.net/2021/01/23/LIt2c13oKV8QzNH.png",
    name: "\u5b89\u6bd4\u5c14",
    codename: "Ambriel",
    rareness: 4,
    tag: 332808
  },
  {
    profile: "https://i.loli.net/2021/01/23/dN5XtRc4SO2FyP1.png",
    name: "\u5e03\u6d1b\u5361",
    codename: "Broca",
    rareness: 5,
    tag: 1074399748
  },
  {
    profile: "https://i.loli.net/2021/01/23/PcZ5M2dAFmg3OlD.png",
    name: "\u82c7\u8349",
    codename: "Reed",
    rareness: 5,
    tag: 1208029698
  },
  {
    profile: "https://i.loli.net/2021/01/23/OZjfDtBi2E9mJlc.png",
    name: "\u83ab\u65af\u63d0\u9a6c",
    codename: "Mostima",
    rareness: 6,
    tag: 2156041344
  },
  {
    profile: "https://i.loli.net/2021/01/23/zNBruA6MhkJSwb1.png",
    name: "\u69d0\u7425",
    codename: "Waai Fu",
    rareness: 5,
    tag: 1142952704
  },
  {
    profile: "https://i.loli.net/2021/01/23/Fs41zT5cWxYQmpN.png",
    name: "\u62dc\u677e",
    codename: "Bison",
    rareness: 5,
    tag: 1074792976
  },
  {
    profile: "https://i.loli.net/2021/01/23/Jecg8uxpwyGnXzE.png",
    name: "\u6885",
    codename: "May",
    rareness: 4,
    tag: 332808
  },
  {
    profile: "https://i.loli.net/2021/01/23/KWEO5dMynQ3FRAC.png",
    name: "\u5fae\u98ce",
    codename: "Breeze",
    rareness: 5,
    tag: 1073796128
  },
  {
    profile: "https://i.loli.net/2021/01/23/2szZD9VodHtiwef.png",
    name: "\u4f0a\u6851",
    codename: "Ethan",
    rareness: 4,
    tag: 8456960
  },
  {
    profile: "https://i.loli.net/2021/01/23/n2e4OZJMHXPN6LW.png",
    name: "\u9ea6\u54f2\u4f26",
    codename: "Magallan",
    rareness: 6,
    tag: 2147849281
  },
  {
    profile: "https://i.loli.net/2021/01/23/lrL4zoTndRyCEpY.png",
    name: "\u9001\u846c\u4eba",
    codename: "Executor",
    rareness: 5,
    tag: 1073875977
  },
  {
    profile: "https://i.loli.net/2021/01/23/Ma9ABCUbrghT8v3.png",
    name: "\u708e\u5ba2",
    codename: "Flamebringer",
    rareness: 5,
    tag: 1074334212
  },
  {
    profile: "https://i.loli.net/2021/01/23/Tda16QxkRNqYMU2.png",
    name: "\u7ea2\u4e91",
    codename: "Vermeil",
    rareness: 4,
    tag: 70665
  },
  {
    profile: "https://i.loli.net/2021/01/23/6nXhWqVtQIdUSK1.png",
    name: "\u575a\u96f7",
    codename: "Dur-nar",
    rareness: 4,
    tag: 1118736
  },
  {
    profile: "https://i.loli.net/2021/01/23/1Th7oftz4FeLOsG.png",
    name: "\u8d6b\u62c9\u683c",
    codename: "Hellagur",
    rareness: 6,
    tag: 2148076037
  },
  {
    profile: "https://i.loli.net/2021/01/23/UeSG7qoDFL4Z5py.png",
    name: "\u661f\u6781",
    codename: "Astesia",
    rareness: 5,
    tag: 1074860549
  },
  {
    profile: "https://i.loli.net/2021/01/23/rbWsOqk17N6GwIu.png",
    name: "\u6843\u91d1\u5a18",
    codename: "Myrtle",
    rareness: 4,
    tag: 134238723
  },
  {
    profile: "https://i.loli.net/2021/01/23/hlMD1LPzpEIn3wy.png",
    name: "\u9ed1",
    codename: "Schwarz",
    rareness: 6,
    tag: 2147554313
  },
  {
    profile: "https://i.loli.net/2021/01/23/4h6P5QCRJyWklNj.png",
    name: "\u683c\u52b3\u514b\u65af",
    codename: "Glaucus",
    rareness: 5,
    tag: 1082397761
  },
  {
    profile: "https://i.loli.net/2021/01/23/vf2l8zrAS37NZan.png",
    name: "\u9521\u5170",
    codename: "Ceylon",
    rareness: 5,
    tag: 1073763360
  },
  {
    profile: "https://i.loli.net/2021/01/23/fxcjnOk5YXZzriM.png",
    name: "\u82cf\u82cf\u6d1b",
    codename: "Sussurro",
    rareness: 4,
    tag: 21537
  },
  {
    profile: "https://i.loli.net/2021/01/23/o2CxPz4GkylmdWL.png",
    name: "\u9648",
    codename: "Ch'en",
    rareness: 6,
    tag: 2164331013
  },
  {
    profile: "https://i.loli.net/2021/01/23/w7aEdiSYohgCx2B.png",
    name: "\u8bd7\u6000\u96c5",
    codename: "Swire",
    rareness: 5,
    tag: 1073844741
  },
  {
    profile: "https://i.loli.net/2021/01/23/m1uhoEP8DrTIUyS.png",
    name: "\u683c\u96f7\u4f0a",
    codename: "Greyy",
    rareness: 4,
    tag: 396417
  },
  {
    profile: "https://i.loli.net/2021/01/23/oaUlQjMdEg5ceir.png",
    name: "\u6591\u70b9",
    codename: "Spot",
    rareness: 3,
    tag: 1067537
  },
  {
    profile: "https://i.loli.net/2021/01/23/z3hnSXwKrfgxtvM.png",
    name: "\u6ce1\u666e\u5361",
    codename: "Popukar",
    rareness: 3,
    tag: 659973
  },
  {
    profile: "https://i.loli.net/2021/01/23/mhz9xV7ISyedqNu.png",
    name: "\u65af\u5361\u8482",
    codename: "Skadi",
    rareness: 6,
    tag: 2148078085
  },
  {
    profile: "https://i.loli.net/2021/01/23/DsOmBCSd24V1Kul.png",
    name: "\u683c\u62c9\u5c3c",
    codename: "Grani",
    rareness: 5,
    tag: 1209012738
  },
  {
    profile: "https://i.loli.net/2021/01/23/3uVMkBbFjnlhz72.png",
    name: "\u591c\u9b54",
    codename: "Nightmare",
    rareness: 5,
    tag: 1074091137
  },
  {
    profile: "https://i.loli.net/2021/01/23/1z96DcL254dZQVk.png",
    name: "\u730e\u8702",
    codename: "Beehunter",
    rareness: 4,
    tag: 70149
  },
  {
    profile: "https://i.loli.net/2021/01/23/KFaGJiPVkv7qcnm.png",
    name: "\u6708\u89c1\u591c",
    codename: "Midnight",
    rareness: 3,
    tag: 68101
  },
  {
    profile: "https://i.loli.net/2021/01/23/FbmwcTMiyKtEXPG.png",
    name: "\u7a7a\u7206",
    codename: "Catapult",
    rareness: 3,
    tag: 136201
  },
  {
    profile: "https://i.loli.net/2021/01/23/yBDpqgOHlbCkGZI.png",
    name: "\u66b4\u884c",
    codename: "Savage",
    rareness: 5,
    tag: 1090654724
  },
  {
    profile: "https://i.loli.net/2021/01/23/c9BSz3ZLpvdx8IY.png",
    name: "\u94f6\u7070",
    codename: "SilverAsh",
    rareness: 6,
    tag: 2147584517
  },
  {
    profile: "https://i.loli.net/2021/01/23/CJcAtVkvbWs4RmO.png",
    name: "\u585e\u96f7\u5a05",
    codename: "Saria",
    rareness: 6,
    tag: 2148586001
  },
  {
    profile: "https://i.loli.net/2021/01/23/CJotWg3cmudGzXv.png",
    name: "\u661f\u718a",
    codename: "Hoshiguma",
    rareness: 6,
    tag: 2148602385
  },
  {
    profile: "https://i.loli.net/2021/01/23/2XNIumt7yslbrHU.png",
    name: "\u591c\u83ba",
    codename: "Nightingale",
    rareness: 6,
    tag: 2147537953
  },
  {
    profile: "https://i.loli.net/2021/01/23/ZU3t8MBOvGzCuSL.png",
    name: "\u95ea\u7075",
    codename: "Shining",
    rareness: 6,
    tag: 2147537953
  },
  {
    profile: "https://i.loli.net/2021/01/23/uTnpMrjZ2VAaqwk.png",
    name: "\u5b89\u6d01\u8389\u5a1c",
    codename: "Angelina",
    rareness: 6,
    tag: 2147849280
  },
  {
    profile: "https://i.loli.net/2021/01/23/HoLEwDMtXkGfb16.png",
    name: "\u827e\u96c5\u6cd5\u62c9",
    codename: "Eyjafjalla",
    rareness: 6,
    tag: 2149651584
  },
  {
    profile: "https://i.loli.net/2021/01/23/sJmdC2TZrnLyWtD.png",
    name: "\u4f0a\u8299\u5229\u7279",
    codename: "Ifrit",
    rareness: 6,
    tag: 2149717121
  },
  {
    profile: "https://i.loli.net/2021/01/23/aAnl3I6bjiTUMzO.png",
    name: "\u63a8\u8fdb\u4e4b\u738b",
    codename: "Siege",
    rareness: 6,
    tag: 2281771523
  },
  {
    profile: "https://i.loli.net/2021/01/23/dlm3ADQNyeiYZ2X.png",
    name: "\u80fd\u5929\u4f7f",
    codename: "Exusiai",
    rareness: 6,
    tag: 2147554313
  },
  {
    profile: "https://i.loli.net/2021/01/23/HGFBvbhkER5gdKa.png",
    name: "\u98df\u94c1\u517d",
    codename: "FEater",
    rareness: 5,
    tag: 1078203137
  },
  {
    profile: "https://i.loli.net/2021/01/23/SCoJ38dYrktWsIU.png",
    name: "\u72ee\u874e",
    codename: "Manticore",
    rareness: 5,
    tag: 1074336513
  },
  {
    profile: "https://i.loli.net/2021/01/23/8sM1GoUTdgaFQhf.png",
    name: "\u7a7a",
    codename: "Sora",
    rareness: 5,
    tag: 1073796160
  },
  {
    profile: "https://i.loli.net/2021/01/23/M8DQBZR3vtfhCFE.png",
    name: "\u771f\u7406",
    codename: "\u0418\u0441\u0442\u0438\u043d\u0430",
    rareness: 5,
    tag: 1074074689
  },
  {
    profile: "https://i.loli.net/2021/01/23/gQBx83hrXR9jAyY.png",
    name: "\u521d\u96ea",
    codename: "Pramanix",
    rareness: 5,
    tag: 1075844161
  },
  {
    profile: "https://i.loli.net/2021/01/23/IoHhW57s6CewuQN.png",
    name: "\u5d16\u5fc3",
    codename: "Cliffheart",
    rareness: 5,
    tag: 1078006529
  },
  {
    profile: "https://i.loli.net/2021/01/23/jMl1HnLyP3mJCOp.png",
    name: "\u5b88\u6797\u4eba",
    codename: "Firewatch",
    rareness: 5,
    tag: 1090589705
  },
  {
    profile: "https://i.loli.net/2021/01/23/Z17mJeQCoTMi8pE.png",
    name: "\u666e\u7f57\u65fa\u65af",
    codename: "Provence",
    rareness: 5,
    tag: 1073812489
  },
  {
    profile: "https://i.loli.net/2021/01/23/s8e6Ni4UvVbn2OQ.png",
    name: "\u706b\u795e",
    codename: "Vulcan",
    rareness: 5,
    tag: 1075384849
  },
  {
    profile: "https://i.loli.net/2021/01/23/POIThnLe4zUHRmG.png",
    name: "\u53ef\u9882",
    codename: "Croissant",
    rareness: 5,
    tag: 1078989329
  },
  {
    profile: "https://i.loli.net/2021/01/23/oftRjSxmOhTKA41.png",
    name: "\u96f7\u86c7",
    codename: "Liskarm",
    rareness: 5,
    tag: 1074860561
  },
  {
    profile: "https://i.loli.net/2021/01/23/4AbsfjZJLBMC75h.png",
    name: "\u7ea2",
    codename: "Projekt Red",
    rareness: 5,
    tag: 1149244161
  },
  {
    profile: "https://i.loli.net/2021/01/23/RfOqpGih1vz3Ujl.png",
    name: "\u4e34\u5149",
    codename: "Nearl",
    rareness: 5,
    tag: 1074811409
  },
  {
    profile: "https://i.loli.net/2021/01/23/krAQH7YD4ayFB93.png",
    name: "\u534e\u6cd5\u7433",
    codename: "Warfarin",
    rareness: 5,
    tag: 1073796129
  },
  {
    profile: "https://i.loli.net/2021/01/23/EGBaJHXkF7f8mnj.png",
    name: "\u8d6b\u9ed8",
    codename: "Silence",
    rareness: 5,
    tag: 1073763361
  },
  {
    profile: "https://i.loli.net/2021/01/23/5gslvT6tjirJ7H4.png",
    name: "\u6885\u5c14",
    codename: "Mayer",
    rareness: 5,
    tag: 1115690049
  },
  {
    profile: "https://i.loli.net/2021/01/23/qIWLEmuFtleQwPp.png",
    name: "\u5929\u706b",
    codename: "Skyfire",
    rareness: 5,
    tag: 1082266752
  },
  {
    profile: "https://i.loli.net/2021/01/23/2ki9wI5cOfHAuCM.png",
    name: "\u963f\u7c73\u5a05",
    codename: "Amiya",
    rareness: 5,
    tag: 1073812608
  },
  {
    profile: "https://i.loli.net/2021/01/23/BbUZRkcIYHrTnoW.png",
    name: "\u9668\u661f",
    codename: "Meteorite",
    rareness: 5,
    tag: 1075975177
  },
  {
    profile: "https://i.loli.net/2021/01/23/hcPIFf94By6rvzM.png",
    name: "\u767d\u91d1",
    codename: "Platinum",
    rareness: 5,
    tag: 1073812489
  },
  {
    profile: "https://i.loli.net/2021/01/23/cLBC8qba9uAtkVG.png",
    name: "\u84dd\u6bd2",
    codename: "Blue Poison",
    rareness: 5,
    tag: 1073812489
  },
  {
    profile: "https://i.loli.net/2021/01/23/TbENIpO3CcJF2Uy.png",
    name: "\u5e7d\u7075\u9ca8",
    codename: "Specter",
    rareness: 5,
    tag: 1074401797
  },
  {
    profile: "https://i.loli.net/2021/01/23/97jrAZCm2MwLdxh.png",
    name: "\u62c9\u666e\u5170\u5fb7",
    codename: "Lappland",
    rareness: 5,
    tag: 1075909124
  },
  {
    profile: "https://i.loli.net/2021/01/23/uos94U8lHKCJrfV.png",
    name: "\u56e0\u9640\u7f57",
    codename: "Indra",
    rareness: 5,
    tag: 1074336261
  },
  {
    profile: "https://i.loli.net/2021/01/23/nLX5Yzto2ueOPpb.png",
    name: "\u8299\u5170\u5361",
    codename: "Franka",
    rareness: 5,
    tag: 1074336260
  },
  {
    profile: "https://i.loli.net/2021/01/23/9eLVkYftjSbcp1N.png",
    name: "\u5fb7\u514b\u8428\u65af",
    codename: "Texas",
    rareness: 5,
    tag: 1216352771
  },
  {
    profile: "https://i.loli.net/2021/01/23/Unq62AR8N5tPGYa.png",
    name: "\u51db\u51ac",
    codename: "\u0417\u0438\u043c\u0430",
    rareness: 5,
    tag: 1207996931
  },
  {
    profile: "https://i.loli.net/2021/01/23/l5dkB82mYLqu7zT.png",
    name: "\u767d\u9762\u9e2e",
    codename: "Ptilopsis",
    rareness: 5,
    tag: 1073796129
  },
  {
    profile: "https://i.loli.net/2021/01/23/zHXF13OksmSUlQd.png",
    name: "\u963f\u6d88",
    codename: "Shaw",
    rareness: 4,
    tag: 4199169
  },
  {
    profile: "https://i.loli.net/2021/01/23/jM7n9vZxk2WKXpe.png",
    name: "\u5730\u7075",
    codename: "Earthspirit",
    rareness: 4,
    tag: 267329
  },
  {
    profile: "https://i.loli.net/2021/01/23/geTqHzNGk6idtZh.png",
    name: "\u6df1\u6d77\u8272",
    codename: "Deepcolor",
    rareness: 4,
    tag: 33559616
  },
  {
    profile: "https://i.loli.net/2021/01/23/j32SoidMzyDeY6p.png",
    name: "\u53e4\u7c73",
    codename: "\u0413\u0443\u043c",
    rareness: 4,
    tag: 1069585
  },
  {
    profile: "https://i.loli.net/2021/01/23/ZiRjeBzDNtVf1cG.png",
    name: "\u86c7\u5c60\u7bb1",
    codename: "Cuora",
    rareness: 4,
    tag: 1053201
  },
  {
    profile: "https://i.loli.net/2021/01/23/ovscHmYu24gVd7E.png",
    name: "\u89d2\u5cf0",
    codename: "Matterhorn",
    rareness: 4,
    tag: 1051153
  },
  {
    profile: "https://i.loli.net/2021/01/23/4ck8ug9J2Z3xXde.png",
    name: "\u8c03\u9999\u5e08",
    codename: "Perfumer",
    rareness: 4,
    tag: 21537
  },
  {
    profile: "https://i.loli.net/2021/01/23/frihJ4saOAmuKp5.png",
    name: "\u5609\u7ef4\u5c14",
    codename: "Gavial",
    rareness: 4,
    tag: 21536
  },
  {
    profile: "https://i.loli.net/2021/01/23/3B6JmwQdployqRk.png",
    name: "\u672b\u836f",
    codename: "Myrrh",
    rareness: 4,
    tag: 21537
  },
  {
    profile: "https://i.loli.net/2021/01/23/gf6N7FZlYDa5zEq.png",
    name: "\u6697\u7d22",
    codename: "Rope",
    rareness: 4,
    tag: 4199169
  },
  {
    profile: "https://i.loli.net/2021/01/23/rMG4FBU2u1V8NjC.png",
    name: "\u783e",
    codename: "Gravel",
    rareness: 4,
    tag: 68162305
  },
  {
    profile: "https://i.loli.net/2021/01/23/Bp28Uf1l9iEqakI.png",
    name: "\u6155\u65af",
    codename: "Mousse",
    rareness: 4,
    tag: 70149
  },
  {
    profile: "https://i.loli.net/2021/01/23/EindbawRe1futcz.png",
    name: "\u827e\u4e1d\u9edb\u5c14",
    codename: "Estelle",
    rareness: 4,
    tag: 659973
  },
  {
    profile: "https://i.loli.net/2021/01/23/vkcWZyY6ON3VKli.png",
    name: "\u971c\u53f6",
    codename: "Frostleaf",
    rareness: 4,
    tag: 332293
  },
  {
    profile: "https://i.loli.net/2021/01/23/kItTjGswemguxoK.png",
    name: "\u7f20\u4e38",
    codename: "Matoimaru",
    rareness: 4,
    tag: 594437
  },
  {
    profile: "https://i.loli.net/2021/01/23/Jszk1RlOxKq73TL.png",
    name: "\u675c\u5bbe",
    codename: "Dobermann",
    rareness: 4,
    tag: 102917
  },
  {
    profile: "https://i.loli.net/2021/01/23/TvIPnW8KFjJefCk.png",
    name: "\u7ea2\u8c46",
    codename: "Vigna",
    rareness: 4,
    tag: 134287875
  },
  {
    profile: "https://i.loli.net/2021/01/23/gbTAO32woezdq7m.png",
    name: "\u6e05\u9053\u592b",
    codename: "Scavenger",
    rareness: 4,
    tag: 134287875
  },
  {
    profile: "https://i.loli.net/2021/01/23/jwcTp7KUvDAeNyW.png",
    name: "\u8baf\u4f7f",
    codename: "Courier",
    rareness: 4,
    tag: 135268866
  },
  {
    profile: "https://i.loli.net/2021/01/23/d7LqHgcOm6BnQeU.png",
    name: "\u767d\u96ea",
    codename: "ShiraYuki",
    rareness: 4,
    tag: 398345
  },
  {
    profile: "https://i.loli.net/2021/01/23/9Izr7RpHtdg1LsY.png",
    name: "\u6d41\u661f",
    codename: "Meteor",
    rareness: 4,
    tag: 2167817
  },
  {
    profile: "https://i.loli.net/2021/01/23/RsO5StVTj18G3ED.png",
    name: "\u6770\u897f\u5361",
    codename: "Jessica",
    rareness: 4,
    tag: 594953
  },
  {
    profile: "https://i.loli.net/2021/01/23/ZcXLaVJB28Frq3N.png",
    name: "\u8fdc\u5c71",
    codename: "Gitano",
    rareness: 4,
    tag: 136321
  },
  {
    profile: "https://i.loli.net/2021/01/23/Cg7cmkFIB5vo1N2.png",
    name: "\u591c\u70df",
    codename: "Haze",
    rareness: 4,
    tag: 2167937
  },
  {
    profile: "https://i.loli.net/2021/01/23/pPelwdnEVxNM5gJ.png",
    name: "\u6893\u5170",
    codename: "Orchid",
    rareness: 3,
    tag: 267329
  },
  {
    profile: "https://i.loli.net/2021/01/23/92pBshiDJGkWHCI.png",
    name: "\u53f2\u90fd\u534e\u5fb7",
    codename: "Steward",
    rareness: 3,
    tag: 68737
  },
  {
    profile: "https://i.loli.net/2021/01/23/1jDhSXBsy4ibzEv.png",
    name: "\u5b89\u8d5b\u5c14",
    codename: "Ansel",
    rareness: 3,
    tag: 19489
  },
  {
    profile: "https://i.loli.net/2021/01/23/fIaXuNiOQ9oJqCv.png",
    name: "\u8299\u84c9",
    codename: "Hibiscus",
    rareness: 3,
    tag: 21537
  },
  {
    profile: "https://i.loli.net/2021/01/23/e21AuOvKWRfVXzF.png",
    name: "\u708e\u7194",
    codename: "Lava",
    rareness: 3,
    tag: 136321
  },
  {
    profile: "https://i.loli.net/2021/01/23/5a96NCHVTyQdvKr.png",
    name: "\u5b89\u5fb7\u5207\u5c14",
    codename: "Adnachiel",
    rareness: 3,
    tag: 68617
  },
  {
    profile: "https://i.loli.net/2021/01/23/Rjbv2ZGdcXqBK4V.png",
    name: "\u514b\u6d1b\u4e1d",
    codename: "Kroos",
    rareness: 3,
    tag: 70665
  },
  {
    profile: "https://i.loli.net/2021/01/23/bAZjaTeWx4sDR6d.png",
    name: "\u7c73\u683c\u9c81",
    codename: "Beagle",
    rareness: 3,
    tag: 1053201
  },
  {
    profile: "https://i.loli.net/2021/01/23/yY1QFjlxDXLRoOd.png",
    name: "\u5361\u7f07",
    codename: "Cardigan",
    rareness: 3,
    tag: 1053200
  },
  {
    profile: "https://i.loli.net/2021/01/23/BGQJWs3PawzlVC8.png",
    name: "\u73ab\u5170\u838e",
    codename: "Melantha",
    rareness: 3,
    tag: 594437
  },
  {
    profile: "https://i.loli.net/2021/01/23/TRO3hpjabfPqGzV.png",
    name: "\u7fce\u7fbd",
    codename: "Plume",
    rareness: 3,
    tag: 134287875
  },
  {
    profile: "https://i.loli.net/2021/01/23/6BlIVv3H5UwXjd4.png",
    name: "\u9999\u8349",
    codename: "Vanilla",
    rareness: 3,
    tag: 134222339
  },
  {
    profile: "https://i.loli.net/2021/01/23/Tz7VZbhmJ2qeFoH.png",
    name: "\u82ac",
    codename: "Fang",
    rareness: 3,
    tag: 134222339
  },
  {
    profile: "https://i.loli.net/2021/01/23/ABa3D6LG9etkMSl.png",
    name: "12F",
    codename: "12F",
    rareness: 2,
    tag: 536874113
  },
  {
    profile: "https://i.loli.net/2021/01/23/uqGcMfR34sFo79v.png",
    name: "\u675c\u6797",
    codename: "Durin",
    rareness: 2,
    tag: 536876161
  },
  {
    profile: "https://i.loli.net/2021/01/23/QrPFoRV8zup7be5.png",
    name: "\u5de1\u6797\u8005",
    codename: "Rangers",
    rareness: 2,
    tag: 536873993
  },
  {
    profile: "https://i.loli.net/2021/01/23/B6qsoTHW9ZR5eiG.png",
    name: "\u9ed1\u89d2",
    codename: "Noir Corne",
    rareness: 2,
    tag: 536873489
  },
  {
    profile: "https://i.loli.net/2021/01/23/vliIZ7VcfJjoqYP.png",
    name: "\u591c\u5200",
    codename: "Yato",
    rareness: 2,
    tag: 536875523
  },
  {
    profile: "https://i.loli.net/2021/01/23/fHXjoJSRmxM63sy.png",
    name: "Castle-3",
    codename: "Castle-3",
    rareness: 1,
    tag: 268470789
  },
  {
    profile: "https://i.loli.net/2021/01/23/NUEx7pOsbYqwHfS.png",
    name: "Lancet-2",
    codename: "Lancet-2",
    rareness: 1,
    tag: 268456993
  }
];

export function resolveTagsFromCode(code: number): string[] {
  const separatedTagCodes: number[] = [];
  let i = 0;
  while (Math.floor(code) != 0) {
    if (code % 2 == 1) {
      separatedTagCodes.push(Math.pow(2, i));
    }
    i++;
    code = Math.floor(code / 2);
  }
  return separatedTagCodes.map(eachTag => _.invert(tags)[eachTag]);
}

export function getMatchedOperators(
  operators: OperatorInfo[],
  tags: number
): MatchedOperators | null {
  const matches: OperatorInfo[] = [];
  let maxRareness = 0;
  let minRareness = 6;
  operators.forEach(each => {
    if ((each.tag & tags) >>> 0 == tags) {
      matches.push(each);
      if (each.rareness > maxRareness) {
        maxRareness = each.rareness;
      }
      if (each.rareness < minRareness) {
        minRareness = each.rareness;
      }
    }
  });
  return matches.length == 0
    ? null
    : {
        tags: _.without(resolveTagsFromCode(tags), "公招可见"),
        operators: _.sortBy(matches, operator => 7 - operator.rareness),
        maxRareness,
        minRareness
      };
}
