//data from CSV
let data = {
    "r1": {
       "resort": "马鬃山滑雪场",
       "region": "内蒙古 呼和浩特",
       "sf0": 88.04,
       "sf1": 5.07,
       "sf2": 14.43,
       "sf3": 1.78,
       "sf4": 47.69,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.01,
       "sf11": 5.3,
       "sf12": 13.76
    },
    "r2": {
       "resort": "万龙白登山滑雪场",
       "region": "山西 大同",
       "sf0": 61.55,
       "sf1": 4.48,
       "sf2": 11.12,
       "sf3": 8.99,
       "sf4": 24.15,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 0.65,
       "sf12": 12.16
    },
    "r3": {
       "resort": "富龙滑雪场",
       "region": "河北 张家口",
       "sf0": 45.5,
       "sf1": 3.09,
       "sf2": 11.07,
       "sf3": 3.07,
       "sf4": 14.62,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 4.99,
       "sf12": 8.66
    },
    "r4": {
       "resort": "万龙滑雪场",
       "region": "河北 张家口",
       "sf0": 49.1,
       "sf1": 3.29,
       "sf2": 12.01,
       "sf3": 3.35,
       "sf4": 15.58,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 4.85,
       "sf12": 10.02
    },
    "r5": {
       "resort": "美林谷滑雪场",
       "region": "内蒙古 赤峰",
       "sf0": 54.85,
       "sf1": 4.96,
       "sf2": 7.61,
       "sf3": 4.13,
       "sf4": 6.86,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 19.88,
       "sf12": 11.41
    },
    "r6": {
       "resort": "天桥沟滑雪场",
       "region": "辽宁 丹东",
       "sf0": 68.86,
       "sf1": 11.96,
       "sf2": 8.44,
       "sf3": 1.55,
       "sf4": 0.83,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 10.42,
       "sf12": 35.66
    },
    "r7": {
       "resort": "万峰滑雪场",
       "region": "吉林 通化",
       "sf0": 94.23,
       "sf1": 12.7,
       "sf2": 14.62,
       "sf3": 4.89,
       "sf4": 0.32,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.34,
       "sf11": 31.77,
       "sf12": 29.59
    },
    "r8": {
       "resort": "万达长白山滑雪场",
       "region": "吉林 白山",
       "sf0": 185.11,
       "sf1": 26.82,
       "sf2": 23.99,
       "sf3": 24.35,
       "sf4": 14.59,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 4.23,
       "sf11": 51.63,
       "sf12": 39.5
    },
    "r9": {
       "resort": "长白山西坡野雪公园",
       "region": "吉林 白山",
       "sf0": 285.75,
       "sf1": 32.59,
       "sf2": 29.69,
       "sf3": 45.78,
       "sf4": 60.8,
       "sf5": 0.06,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 9.38,
       "sf11": 63.3,
       "sf12": 44.15
    },
    "r10": {
       "resort": "北大湖滑雪场",
       "region": "吉林省 吉林市",
       "sf0": 78.45,
       "sf1": 11.5,
       "sf2": 7.08,
       "sf3": 3.44,
       "sf4": 1.71,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 1.76,
       "sf11": 40.38,
       "sf12": 12.58
    },
    "r11": {
       "resort": "松花湖滑雪场",
       "region": "吉林省 吉林市",
       "sf0": 69,
       "sf1": 10.32,
       "sf2": 5.64,
       "sf3": 1.42,
       "sf4": 2.06,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 1.59,
       "sf11": 36.92,
       "sf12": 11.05
    },
    "r12": {
       "resort": "雪乡龙岭野雪公园",
       "region": "黑龙江 哈尔滨",
       "sf0": 212.02,
       "sf1": 20.54,
       "sf2": 19.91,
       "sf3": 19.4,
       "sf4": 22.62,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 5.44,
       "sf11": 100.87,
       "sf12": 23.24
    },
    "r13": {
       "resort": "亚布力阳光滑雪场",
       "region": "黑龙江 哈尔滨",
       "sf0": 165.39,
       "sf1": 12.7,
       "sf2": 14.09,
       "sf3": 14.69,
       "sf4": 12.03,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 2.5,
       "sf11": 92.06,
       "sf12": 17.32
    },
    "r14": {
       "resort": "Arsgora滑雪场",
       "region": "俄罗斯 滨海边疆区",
       "sf0": 99.36,
       "sf1": 7.02,
       "sf2": 9.45,
       "sf3": 30.13,
       "sf4": 0.4,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 2.13,
       "sf11": 37.9,
       "sf12": 12.33
    },
    "r15": {
       "resort": "马息岭滑雪场",
       "region": "朝鲜",
       "sf0": 194.99,
       "sf1": 38.7,
       "sf2": 21.41,
       "sf3": 10.69,
       "sf4": 0,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 3.43,
       "sf12": 120.76
    },
    "r16": {
       "resort": "High1滑雪场",
       "region": "韩国",
       "sf0": 57.01,
       "sf1": 22.43,
       "sf2": 13.97,
       "sf3": 0.88,
       "sf4": 0,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 2.16,
       "sf12": 17.57
    },
    "r17": {
       "resort": "白马五龙滑雪场",
       "region": "日本",
       "sf0": 593.6,
       "sf1": 171.54,
       "sf2": 138.46,
       "sf3": 65.13,
       "sf4": 10.97,
       "sf5": 0.08,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.28,
       "sf11": 91.36,
       "sf12": 115.78
    },
    "r18": {
       "resort": "烧额山滑雪场",
       "region": "日本",
       "sf0": 381.99,
       "sf1": 117.72,
       "sf2": 94.89,
       "sf3": 45.06,
       "sf4": 6.56,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.06,
       "sf11": 56.29,
       "sf12": 61.41
    },
    "r19": {
       "resort": "藏王温泉滑雪场",
       "region": "日本",
       "sf0": 255.59,
       "sf1": 87.63,
       "sf2": 70.75,
       "sf3": 14.21,
       "sf4": 6.34,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 29.52,
       "sf12": 47.14
    },
    "r20": {
       "resort": "八甲田滑雪场",
       "region": "日本",
       "sf0": 255.65,
       "sf1": 67.18,
       "sf2": 66.21,
       "sf3": 17.53,
       "sf4": 0.54,
       "sf5": 6.76,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 19.29,
       "sf12": 78.14
    },
    "r21": {
       "resort": "比罗夫滑雪场",
       "region": "日本 北海道",
       "sf0": 265.7,
       "sf1": 59.57,
       "sf2": 68.26,
       "sf3": 22.01,
       "sf4": 11.15,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 1.04,
       "sf11": 32.71,
       "sf12": 70.96
    },
    "r22": {
       "resort": "喜乐乐滑雪场",
       "region": "日本 北海道",
       "sf0": 370.37,
       "sf1": 88.56,
       "sf2": 86.22,
       "sf3": 18.95,
       "sf4": 3.34,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 51.47,
       "sf12": 121.83
    },
    "r23": {
       "resort": "大雪山旭岳滑雪场",
       "region": "日本 北海道",
       "sf0": 510.69,
       "sf1": 86.8,
       "sf2": 85.32,
       "sf3": 64.9,
       "sf4": 56.22,
       "sf5": 3.48,
       "sf6": 0.02,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 22.97,
       "sf11": 85.63,
       "sf12": 105.35
    },
    "r24": {
       "resort": "Yuzhno滑雪场",
       "region": "俄罗斯 萨哈林州(库页岛)",
       "sf0": 160.9,
       "sf1": 20.56,
       "sf2": 24.01,
       "sf3": 29.96,
       "sf4": 30.1,
       "sf5": 0.08,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 28.98,
       "sf12": 27.21
    },
    "r25": {
       "resort": "克柳切夫火山野雪场",
       "region": "俄罗斯 勘察加边疆区",
       "sf0": 819.41,
       "sf1": 177.99,
       "sf2": 51.97,
       "sf3": 46.52,
       "sf4": 193.29,
       "sf5": 49.4,
       "sf6": 37.62,
       "sf7": 0,
       "sf8": 0,
       "sf9": 16.42,
       "sf10": 51.34,
       "sf11": 127.47,
       "sf12": 67.39
    },
    "r26": {
       "resort": "Snegorka滑雪场",
       "region": "俄罗斯 马加丹州",
       "sf0": 299.01,
       "sf1": 22.2,
       "sf2": 11.14,
       "sf3": 59.35,
       "sf4": 29.24,
       "sf5": 40.06,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0.54,
       "sf10": 43.09,
       "sf11": 51,
       "sf12": 42.39
    },
    "r27": {
       "resort": "Holdomi滑雪场",
       "region": "俄罗斯 哈巴罗夫斯克边疆区",
       "sf0": 190.27,
       "sf1": 6.54,
       "sf2": 4.89,
       "sf3": 53.69,
       "sf4": 67.22,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 20.41,
       "sf11": 30.1,
       "sf12": 7.42
    },
    "r28": {
       "resort": "映山红滑雪场",
       "region": "黑龙江 大兴安岭地区",
       "sf0": 81.77,
       "sf1": 4.25,
       "sf2": 4.34,
       "sf3": 21.04,
       "sf4": 27.47,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.89,
       "sf11": 15.5,
       "sf12": 8.28
    },
    "r29": {
       "resort": "金龙山滑雪场",
       "region": "内蒙古 呼伦贝尔市",
       "sf0": 51.01,
       "sf1": 5.15,
       "sf2": 6.18,
       "sf3": 3.34,
       "sf4": 1.03,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 3.62,
       "sf11": 25.29,
       "sf12": 6.4
    },
    "r30": {
       "resort": "贝加尔斯克滑雪场",
       "region": "俄罗斯 伊尔库茨克州",
       "sf0": 357.22,
       "sf1": 18.8,
       "sf2": 12.68,
       "sf3": 42.32,
       "sf4": 79.85,
       "sf5": 63.76,
       "sf6": 5.36,
       "sf7": 0,
       "sf8": 0,
       "sf9": 24.89,
       "sf10": 28.38,
       "sf11": 54.1,
       "sf12": 27.08
    },
    "r31": {
       "resort": "Bobrovy Log滑雪场",
       "region": "俄罗斯 克拉斯诺亚尔斯克边疆区",
       "sf0": 218.72,
       "sf1": 42.32,
       "sf2": 16.6,
       "sf3": 38.73,
       "sf4": 24.78,
       "sf5": 3.85,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0.09,
       "sf10": 12.05,
       "sf11": 34.89,
       "sf12": 45.41
    },
    "r32": {
       "resort": "Sheregesh滑雪场",
       "region": "俄罗斯 克麦罗沃州",
       "sf0": 445.57,
       "sf1": 100.63,
       "sf2": 22.81,
       "sf3": 54.31,
       "sf4": 51.67,
       "sf5": 1.89,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 13.59,
       "sf10": 24.25,
       "sf11": 77.52,
       "sf12": 98.9
    },
    "r33": {
       "resort": "喀纳斯野雪场",
       "region": "新疆 阿勒泰地区",
       "sf0": 610.39,
       "sf1": 72.29,
       "sf2": 35.68,
       "sf3": 79.97,
       "sf4": 87.83,
       "sf5": 32.21,
       "sf6": 0.35,
       "sf7": 0,
       "sf8": 0.01,
       "sf9": 52.87,
       "sf10": 117.9,
       "sf11": 54.32,
       "sf12": 76.96
    },
    "r34": {
       "resort": "禾木吉克普林滑雪场",
       "region": "新疆 阿勒泰地区",
       "sf0": 726.2,
       "sf1": 82.36,
       "sf2": 41.04,
       "sf3": 84.46,
       "sf4": 101.09,
       "sf5": 48.42,
       "sf6": 2.46,
       "sf7": 0.09,
       "sf8": 5.97,
       "sf9": 74.01,
       "sf10": 144.65,
       "sf11": 58.21,
       "sf12": 83.44
    },
    "r35": {
       "resort": "野卡峡滑雪场",
       "region": "新疆 阿勒泰地区",
       "sf0": 699.11,
       "sf1": 66.61,
       "sf2": 28.07,
       "sf3": 73.11,
       "sf4": 97,
       "sf5": 73.43,
       "sf6": 3.65,
       "sf7": 1.77,
       "sf8": 7.85,
       "sf9": 86.43,
       "sf10": 134.01,
       "sf11": 54.4,
       "sf12": 72.78
    },
    "r36": {
       "resort": "阿尔泰山野雪公园",
       "region": "新疆 阿勒泰地区",
       "sf0": 485.77,
       "sf1": 56.2,
       "sf2": 19.2,
       "sf3": 51.69,
       "sf4": 61.9,
       "sf5": 34.54,
       "sf6": 1.7,
       "sf7": 0.86,
       "sf8": 3.39,
       "sf9": 62.03,
       "sf10": 78.71,
       "sf11": 52.92,
       "sf12": 62.63
    },
    "r37": {
       "resort": "将军山滑雪场",
       "region": "新疆 阿勒泰地区",
       "sf0": 213.19,
       "sf1": 36.42,
       "sf2": 11.42,
       "sf3": 17.29,
       "sf4": 19.16,
       "sf5": 2.63,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 21.07,
       "sf10": 19.35,
       "sf11": 42.43,
       "sf12": 43.42
    },
    "r38": {
       "resort": "可可托海滑雪场",
       "region": "新疆 阿勒泰地区",
       "sf0": 424.01,
       "sf1": 25.95,
       "sf2": 14.94,
       "sf3": 38.5,
       "sf4": 59.84,
       "sf5": 42.76,
       "sf6": 0.05,
       "sf7": 0,
       "sf8": 0,
       "sf9": 66.42,
       "sf10": 79.61,
       "sf11": 46.87,
       "sf12": 49.07
    },
    "r39": {
       "resort": "青格里狼山滑雪场",
       "region": "新疆 阿勒泰地区",
       "sf0": 102.67,
       "sf1": 12.25,
       "sf2": 5.17,
       "sf3": 6.41,
       "sf4": 14.06,
       "sf5": 1.12,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 8.5,
       "sf10": 1.82,
       "sf11": 35.92,
       "sf12": 17.42
    },
    "r40": {
       "resort": "天山天池滑雪场",
       "region": "新疆 昌吉",
       "sf0": 93.4,
       "sf1": 14.05,
       "sf2": 4.19,
       "sf3": 17.53,
       "sf4": 10.24,
       "sf5": 2.83,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 2.72,
       "sf10": 5.33,
       "sf11": 18.02,
       "sf12": 18.49
    },
    "r41": {
       "resort": "丝绸之路滑雪场",
       "region": "新疆 乌鲁木齐",
       "sf0": 139.25,
       "sf1": 15.99,
       "sf2": 6.84,
       "sf3": 27.94,
       "sf4": 23.3,
       "sf5": 11.76,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 2.54,
       "sf10": 7.59,
       "sf11": 25.5,
       "sf12": 17.79
    },
    "r42": {
       "resort": "赛里木湖滑雪场",
       "region": "新疆 博尔塔拉",
       "sf0": 200.46,
       "sf1": 13.29,
       "sf2": 6.65,
       "sf3": 37.88,
       "sf4": 41.66,
       "sf5": 18.88,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 1.73,
       "sf10": 16.42,
       "sf11": 24.83,
       "sf12": 39.12
    },
    "r43": {
       "resort": "那拉提滑雪场",
       "region": "新疆 伊犁",
       "sf0": 206.01,
       "sf1": 13.89,
       "sf2": 19.1,
       "sf3": 24.3,
       "sf4": 36.72,
       "sf5": 6,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 2.11,
       "sf10": 7.22,
       "sf11": 34.6,
       "sf12": 62.07
    },
    "r44": {
       "resort": "昭苏县汗腾格里野雪公园",
       "region": "新疆 伊犁",
       "sf0": 409.91,
       "sf1": 11.92,
       "sf2": 27.19,
       "sf3": 36.48,
       "sf4": 68.79,
       "sf5": 65.42,
       "sf6": 18.41,
       "sf7": 13.12,
       "sf8": 24.94,
       "sf9": 65.14,
       "sf10": 32.98,
       "sf11": 29.66,
       "sf12": 15.86
    },
    "r45": {
       "resort": "卡拉科尔滑雪场",
       "region": "吉尔吉斯斯坦",
       "sf0": 682.99,
       "sf1": 28,
       "sf2": 57.3,
       "sf3": 44.18,
       "sf4": 62.97,
       "sf5": 101.28,
       "sf6": 47.28,
       "sf7": 4.49,
       "sf8": 46.3,
       "sf9": 127.07,
       "sf10": 87.26,
       "sf11": 40.74,
       "sf12": 36.12
    },
    "r46": {
       "resort": "琼布拉克滑雪场",
       "region": "哈萨克斯坦阿拉木图州",
       "sf0": 417.25,
       "sf1": 32.94,
       "sf2": 49.08,
       "sf3": 55.76,
       "sf4": 77.68,
       "sf5": 13.75,
       "sf6": 0,
       "sf7": 0,
       "sf8": 8.26,
       "sf9": 37.74,
       "sf10": 55.18,
       "sf11": 39.78,
       "sf12": 47.08
    },
    "r47": {
       "resort": "古尔马尔格滑雪场",
       "region": "印度",
       "sf0": 321.05,
       "sf1": 170.06,
       "sf2": 98.49,
       "sf3": 26.96,
       "sf4": 7.28,
       "sf5": 0.08,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.61,
       "sf11": 12.85,
       "sf12": 4.72
    },
    "r48": {
       "resort": "Dizin滑雪场",
       "region": "伊朗",
       "sf0": 255.33,
       "sf1": 53.21,
       "sf2": 43.1,
       "sf3": 76.81,
       "sf4": 16,
       "sf5": 16.49,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.34,
       "sf11": 22.61,
       "sf12": 26.77
    },
    "r49": {
       "resort": "古多里滑雪场",
       "region": "格鲁吉亚",
       "sf0": 379.27,
       "sf1": 14.38,
       "sf2": 53.51,
       "sf3": 68.49,
       "sf4": 66.51,
       "sf5": 32.79,
       "sf6": 0.65,
       "sf7": 0,
       "sf8": 0,
       "sf9": 7.44,
       "sf10": 11.48,
       "sf11": 78.58,
       "sf12": 45.44
    },
    "r50": {
       "resort": "罗莎库托滑雪场",
       "region": "俄罗斯 克拉斯诺达尔边疆区",
       "sf0": 641.72,
       "sf1": 49.05,
       "sf2": 223.85,
       "sf3": 91.81,
       "sf4": 29.94,
       "sf5": 8.49,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 9.9,
       "sf11": 98.29,
       "sf12": 130.39
    },
    "r51": {
       "resort": "科帕奥尼卡滑雪场",
       "region": "塞尔维亚",
       "sf0": 170.23,
       "sf1": 46.02,
       "sf2": 25.45,
       "sf3": 9.34,
       "sf4": 31.21,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0,
       "sf11": 37.76,
       "sf12": 20.45
    },
    "r52": {
       "resort": "Winklmoosalm-Steinplatte滑雪场",
       "region": "奥地利",
       "sf0": 444.03,
       "sf1": 67.49,
       "sf2": 71.38,
       "sf3": 41.46,
       "sf4": 50.21,
       "sf5": 0,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 0.46,
       "sf11": 102.46,
       "sf12": 110.57
    },
    "r53": {
       "resort": "基茨比厄尔滑雪场",
       "region": "奥地利",
       "sf0": 761.3,
       "sf1": 90.44,
       "sf2": 72.01,
       "sf3": 91.07,
       "sf4": 108.92,
       "sf5": 49.49,
       "sf6": 0,
       "sf7": 1.21,
       "sf8": 0.71,
       "sf9": 0.93,
       "sf10": 16.53,
       "sf11": 161,
       "sf12": 168.99
    },
    "r54": {
       "resort": "加尔代纳山谷滑雪场",
       "region": "意大利",
       "sf0": 328.65,
       "sf1": 44.47,
       "sf2": 18.51,
       "sf3": 34.21,
       "sf4": 39.37,
       "sf5": 14.24,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 4.06,
       "sf11": 66.31,
       "sf12": 107.48
    },
    "r55": {
       "resort": "采尔马特滑雪场",
       "region": "瑞士",
       "sf0": 443.53,
       "sf1": 30.98,
       "sf2": 23.99,
       "sf3": 62.23,
       "sf4": 35.02,
       "sf5": 68.59,
       "sf6": 0.14,
       "sf7": 0.03,
       "sf8": 18.78,
       "sf9": 1.33,
       "sf10": 27.42,
       "sf11": 95.7,
       "sf12": 79.32
    },
    "r56": {
       "resort": "三峡谷滑雪场",
       "region": "法国",
       "sf0": 857.67,
       "sf1": 75.39,
       "sf2": 19.66,
       "sf3": 171.31,
       "sf4": 70.76,
       "sf5": 55.73,
       "sf6": 0.02,
       "sf7": 0.15,
       "sf8": 30.4,
       "sf9": 2.07,
       "sf10": 52.64,
       "sf11": 204.64,
       "sf12": 174.9
    },
    "r57": {
       "resort": "卢卡滑雪场",
       "region": "芬兰",
       "sf0": 263.65,
       "sf1": 54.3,
       "sf2": 26.17,
       "sf3": 42,
       "sf4": 20.89,
       "sf5": 2.3,
       "sf6": 5.45,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 47.55,
       "sf11": 24.31,
       "sf12": 40.68
    },
    "r58": {
       "resort": "纳尔维克滑雪场",
       "region": "挪威",
       "sf0": 914.3,
       "sf1": 131.8,
       "sf2": 219.4,
       "sf3": 100.91,
       "sf4": 108.89,
       "sf5": 105.79,
       "sf6": 48.14,
       "sf7": 0,
       "sf8": 0,
       "sf9": 24.84,
       "sf10": 59.14,
       "sf11": 28.33,
       "sf12": 87.06
    },
    "r59": {
       "resort": "Marmot Basin滑雪场",
       "region": "加拿大 艾伯塔省",
       "sf0": 570.32,
       "sf1": 48.53,
       "sf2": 93.84,
       "sf3": 42.48,
       "sf4": 61.32,
       "sf5": 38.03,
       "sf6": 90.75,
       "sf7": 1.54,
       "sf8": 0.83,
       "sf9": 27.94,
       "sf10": 27.44,
       "sf11": 64.77,
       "sf12": 72.85
    },
    "r60": {
       "resort": "惠斯勒黑梳山滑雪场",
       "region": "加拿大 不列颠哥伦比亚省",
       "sf0": 956.7,
       "sf1": 202.44,
       "sf2": 155.63,
       "sf3": 72.92,
       "sf4": 148.56,
       "sf5": 4.79,
       "sf6": 0.76,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0.75,
       "sf10": 5.82,
       "sf11": 131.38,
       "sf12": 233.65
    },
    "r61": {
       "resort": "Palisades Tahoe滑雪场",
       "region": "美国 加利福尼亚州",
       "sf0": 955.73,
       "sf1": 313.83,
       "sf2": 179.24,
       "sf3": 316.82,
       "sf4": 40.89,
       "sf5": 40.89,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0.32,
       "sf10": 3.56,
       "sf11": 21.06,
       "sf12": 39.12
    },
    "r62": {
       "resort": "Park City滑雪场",
       "region": "美国 犹他州",
       "sf0": 457.72,
       "sf1": 132.85,
       "sf2": 63.64,
       "sf3": 118.22,
       "sf4": 58.32,
       "sf5": 0.43,
       "sf6": 0,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0,
       "sf10": 12.18,
       "sf11": 23.31,
       "sf12": 48.77
    },
    "r63": {
       "resort": "Vail滑雪场",
       "region": "美国 科罗拉多州",
       "sf0": 389.77,
       "sf1": 58.11,
       "sf2": 41.66,
       "sf3": 74.93,
       "sf4": 69.19,
       "sf5": 25.37,
       "sf6": 3.83,
       "sf7": 0,
       "sf8": 0,
       "sf9": 0.07,
       "sf10": 47.75,
       "sf11": 19.17,
       "sf12": 49.69
    },
    "r64": {
       "resort": "Telluride滑雪场",
       "region": "美国 科罗拉多州",
       "sf0": 604.85,
       "sf1": 126.63,
       "sf2": 87.27,
       "sf3": 146.82,
       "sf4": 58.28,
       "sf5": 42.76,
       "sf6": 20.21,
       "sf7": 0,
       "sf8": 0,
       "sf9": 3.75,
       "sf10": 28.73,
       "sf11": 36.99,
       "sf12": 53.41
    },
    "r65": {
       "resort": "El Colorado滑雪场",
       "region": "智利",
       "sf0": 765.99,
       "sf1": 7.6,
       "sf2": 2.59,
       "sf3": 0.2,
       "sf4": 16.72,
       "sf5": 36.29,
       "sf6": 129.01,
       "sf7": 67.05,
       "sf8": 229.37,
       "sf9": 167.71,
       "sf10": 46.63,
       "sf11": 58.12,
       "sf12": 4.7
    },
    "r66": {
       "resort": "卡特德拉尔滑雪场",
       "region": "阿根廷",
       "sf0": 607.33,
       "sf1": 0.04,
       "sf2": 0,
       "sf3": 4.86,
       "sf4": 3.2,
       "sf5": 59.06,
       "sf6": 98.55,
       "sf7": 107.48,
       "sf8": 94.48,
       "sf9": 115.47,
       "sf10": 65.97,
       "sf11": 57.45,
       "sf12": 0.77
    },
    "r67": {
       "resort": "卡德罗纳滑雪场",
       "region": "新西兰",
       "sf0": 389.4,
       "sf1": 0,
       "sf2": 0.98,
       "sf3": 7.53,
       "sf4": 0.13,
       "sf5": 36.78,
       "sf6": 32.07,
       "sf7": 78.64,
       "sf8": 60.31,
       "sf9": 80.65,
       "sf10": 91.67,
       "sf11": 0.41,
       "sf12": 0.23
    },
    "r68": {
       "resort": "斯雷德博滑雪场",
       "region": "澳大利亚 新南威尔士州",
       "sf0": 122.84,
       "sf1": 0,
       "sf2": 0,
       "sf3": 0,
       "sf4": 0.1,
       "sf5": 13.16,
       "sf6": 50.77,
       "sf7": 29.62,
       "sf8": 14.36,
       "sf9": 11.99,
       "sf10": 2.84,
       "sf11": 0,
       "sf12": 0
    }
 };
let yearTitle = '2023年降雪量(mm)';
let regionLabel = '';
let note = '来源: WheatA小麦芽 - 降雪量(sf)';
let sfDataIdArr = [
    'sf-total',
    'sf-01',
    'sf-02',
    'sf-03',
    'sf-04',
    'sf-05',
    'sf-06',
    'sf-07',
    'sf-08',
    'sf-09',
    'sf-10',
    'sf-11',
    'sf-12'
];
let criticalValueArr = [
    0,
    50,
    100,
    150,
    200,
    300,
    400,
    500,
    600,
    800,
    1000
]
//color arr length 1 more than value arr!!!
let colorArr = [
    '#ADB5BD',
    '#A6E4F8',
    '#4CC9F0',
    '#4895EF',
    '#4361EE',
    '#3F37C9',
    '#3A0CA3',
    '#480CA8',
    '#560BAD',
    '#7209B7',
    '#B5179E',
    '#F72585'
];

function makeCard(){
    let r = getResortId();
    loadTableHtml(r);
    setBasic(r);
    setSfValues(r);
}

//fill snowfall data of all months
function setSfValues(resortId){
    for(let i=0; i<sfDataIdArr.length; i++){
        setOneValue(sfDataIdArr[i], resortId);
    }
}
//set snowfall value, background color and text color for 1 table cell
function setOneValue(id, resortId){
    let basic = new getData(resortId);
    let index = sfDataIdArr.indexOf(id);
    let e = document.getElementById(id);

    let n = basic.getSfData()[index];

    //set 1 value
    e.innerText = n;
    
    //set background color of the value
    let l = criticalValueArr.length;
    if(n === 0){
        e.style.backgroundColor = colorArr[0];
        e.style.color = '#1F1F1F';
    }
    for(let i=1; i<l; i++){
        if(n > criticalValueArr[i-1] && n <= criticalValueArr[i]){
            e.style.backgroundColor = colorArr[i];
            if(n <= criticalValueArr[2]){
                e.style.color = '#1F1F1F';
            }
        }
    }
    if(n > criticalValueArr[l - 1]){
        e.style.backgroundColor = colorArr[l];
    }
}

//fill table labels
function setBasic(resortId){
    //fill basic information
    let d = new getData(resortId);
    document.getElementById('resort').innerText = d.resort;
    document.getElementById('region-label').innerText = regionLabel;
    document.getElementById('region').innerText = d.region;
    document.getElementById('year').innerText = yearTitle;
    document.getElementById('note').innerText = note;
}
//do the preparation work
function loadTableHtml(resortId){
    //load table dom
    let div = document.getElementById('card');
    div.setAttribute('class', 'table-area');
    div.innerHTML = cardTableHTML;
    //If there have url parameter to set ski resort id, then keep ski resort id in chrome actual html as same as in url
    div.setAttribute('ski-resort-id', resortId);
}

//set a fake class to get all data from data object
function getData(resortId){
    let k0 = Object.keys(data);
    if(k0.indexOf(resortId) < 0){
        let e = document.getElementById('year');
        e.innerText = 'Ski Resort ID Invalid!';
        e.style.color = 'red';
    }
    let v = Object.values(data[resortId]);
    //get all resort ids
    this.resortIdList = Object.keys(data);
    //get resort name
    this.resort = v[0];
    //get resort region to belong
    this.region = v[1];

    //get SF data
    this.getSfData = () => {
        let d = new Array();
        //data resort r*: 0:resort, 1:region. so start from index 2
        for(let i=2; i<sfDataIdArr.length + 2; i++){
            d.push(v[i]);
        }
        return d;
    }
}

function getResortId(){
    let urlId = getUrlParamValue('ski-resort-id', '');
    let id = urlId === '' ? document.getElementById('card').getAttribute('ski-resort-id') : urlId;
    return id;
}
//get parameter value from URL
function getUrlParamValue (paramName, defaultResortId) {
		let urlParamStr = window.location.search.substring(1); //get url parameter part string
		let urlParamArr = urlParamStr.split('&').filter(e => e && e.trim()); //put each parameter to an array
		let hasParam = false;
		for (let i = 0; i < urlParamArr.length; i++) {
			let kvArr = urlParamArr[i].split('='); //put name and value of each parameter to an temporary array
			if (kvArr[0] === paramName) {
				hasParam === true;
				return kvArr[1];
			}
		}
		if (!hasParam) {
			return defaultResortId;
		}
	}

let cardTableHTML = 
`<table class="ski-resort-table">
<!-- Basic Info -->
<tr>
    <td colspan="2" id="year"><span class="resort-padding-r"></span></td>
</tr>
<tr>
    <td colspan="2" class="region"><span id="region-label"></span><span id="region"></span></td>
</tr>
<tr>
<td colspan="2" id="resort" class="border-l border-r"></td>
</tr>

<!-- SF -->
<!-- Annual -->
<tr>
    <td class="total-label border-l border-r border-b">总计</td>
    <td id="sf-total" class="border-r border-b"></td>
</tr>
<!-- Monthly -->
<tr>
    <td class="monthly-label border-l border-r">一月</td>
    <td class="monthly-value border-r" id="sf-01"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">二月</td>
    <td class="monthly-value border-r" id="sf-02"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">三月</td>
    <td class="monthly-value border-r" id="sf-03"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">四月</td>
    <td class="monthly-value border-r" id="sf-04"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">五月</td>
    <td class="monthly-value border-r" id="sf-05"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">六月</td>
    <td class="monthly-value border-r" id="sf-06"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">七月</td>
    <td class="monthly-value border-r" id="sf-07"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">八月</td>
    <td class="monthly-value border-r" id="sf-08"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">九月</td>
    <td class="monthly-value border-r" id="sf-09"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">十月</td>
    <td class="monthly-value border-r" id="sf-10"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">十一月</td>
    <td class="monthly-value border-r" id="sf-11"></td>
</tr>
<tr>
    <td class="monthly-label border-l border-r">十二月</td>
    <td class="monthly-value border-r" id="sf-12"></td>
</tr>
<tr>
    <td colspan="2" id="note"></td>
</tr>

</table>`;