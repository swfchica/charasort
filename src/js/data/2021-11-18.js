dataSetVersion = "2021-11-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
   name: "Filter by Dance Crew",
	    key: "crew",
	    tooltip: "Check this to restrict to certain crew.",
	    checked: false,
	    sub: [
	      { name: "YGX", key: "ygx" },
	      { name: "La Chica", key: "lch" },
	      { name: "HolyBang", key: "hb" },
	      { name: "CocaNButter", key: "cnb" },
	      { name: "WayB", key: "wyb" },
	      { name: "WANT", key: "wt" },
	      { name: "HOOK", key: "hk" },
	      { name: "PROWDMON", key: "prwd" },
	    ]
	  },
	  {
	    name: "Rank only Leaders",
	    key: "leaders",
	    tooltip: "Check this to rank only the leaders of the 8 dance crews."
	];
	

	dataSet[dataSetVersion].characterData = [
	  {
	    name: "Leejung",
	    img: "c5DqpgX.png",
	    opts: {
	      crew: [ "ygx" ]
	    }
	  },
	  {
	    name: "Yeojin",
	    img: "tJnkSzK.png",
	    opts: {
	      crew: [ "ygx" ],
	      leaders: true
	    }
	  },
	  {
	    name: "Yell",
	    img: "0YT7QlS.png",
	    opts: {
	      crew: [ "ygx" ],
	      leaders: true
	    }
	  },
	  {
	    name: "Jihyo",
	    img: "NWlZud3.png",
	     opts: {
	      crew: [ "ygx" ],
	      leaders: true
	    },
	  },
	  {
	    name: "Isak",
	    img: "qdveFSy.png",
	    opts: {
	      crew: [ "ygx" ],
	      leaders: true
	    }
	  },
	  {
	    name: "Gabee",
	    img: "ptGp0x4.png",
	    opts: {
	      crew: ["lch"],
	    }
	  },
	  {
	    name: "Rian",
	    img: "vBKdDm4.png",
	    opts: {
	      crew: ["lch"],
	      leaders: true
	    }
	  },
	  {
	    name: "H_1",
	    img: "A7ZnuHo.png",
	    opts: {
	      crew: ["lch"],
	      leaders: true
	    }
	  },
	  {
	    name: "Peanut",
	    img: "sgZPf11.png",
	    opts: {
	      crew: ["lch"],
	      leaders: true
	    }
	  },
	  {
	    name: "Simeez",
	    img: "8UX7hKE.png",
	    opts: {
	      crew: ["lch"],
	      leaders: true
	    }
	  },
	  {
	    name: "Hyojin Choi",
	    img: "OhaDcnc.png",
	    opts: {
	      crew: ["wt"]
	    }
	  },
	  {
	    name: "Chaeyeon",
	    img: "MgzqjFK.png",
	    opts: {
	      crew: ["wt"],
	      leaders: true
	    }
	  },
	  {
	    name: "Emma",
	    img: "ohmetZh.png",
	    opts: {
	      crew: ["wt"],
	      leaders: true
	    }
	  },
	  {
	    name: "Moana",
	    img: "aDIf0pN.png",
	    opts: {
	      crew: ["wt"],
	      leaders: true
	    }
	  },
	  {
	    name: "Rozalin",
	    img: "2Pr8b2N.png",
	    opts: {
	      crew: ["wt"],
	      leaders: true
	    }
	  },
	  {
	    name: "Noze",
	    img: "htOMdDQ.png",
	    opts: {
	      crew: ["wyb"]
	    }
	  },
	  {
	    name: "Gyuri",
	    img: "PrRPujP.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Dolla",
	    img: "ze79bFC.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Leesu",
	    img: "WMjyRLJ.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Ansso",
	    img: "VT9mTGb.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Rihey",
	    img: "rshnJPV.png",
	    opts: {
	      crew: ["cnb"]
	    }
	  },
	  {
	    name: "Gaga",
	    img: "qsceD4I.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Bicki",
	    img: "pLdMjQ3.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "ZSun",
	    img: "8DLUAPf.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Jillin",
	    img: "6KyhLqE.png",
	    opts: {
	      crew: ["wyb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Monika",
	    img: "99w0Chm.png",
	    opts: {
	      crew: ["prwd"]
	    }
	  },
	  {
	    name: "DIA",
	    img: "yqNfNje.png",
	    opts: {
	      crew: ["prwd"],
	      leaders: true
	    }
	  },
	  {
	    name: "Rosy",
	    img: "PrYzRcC.png",
	    opts: {
	      crew: ["prwd"],
	      leaders: true
	    }
	  },
	  {
	    name: "Lip J",
	    img: "ceo4DhK.png",
	    opts: {
	      crew: ["prwd"],
	      leaders: true
	    }
	  },
	  {
	    name: "Kayday",
	    img: "2YDuTk3.png",
	    opts: {
	      crew: ["prwd"],
	      leaders: true
	    }
	  },
	  {
	    name: "Ham G",
	    img: "3zo4VKV.png",
	    opts: {
	      crew: ["prwd"],
	      leaders: true
	    }
	  },
	  {
	    name: "Hyeily",
	    img: "8TLXMST.png",
	    opts: {
	      crew: ["prwd"],
	      leaders: true
	    }
	  },
	  {
	    name: "Honey J",
	    img: "IImsp7K.png",
	    opts: {
	      crew: ["hb"]
	    }
	  },
	  {
	    name: "Lo-A",
	    img: "MZXJQq5.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Mull",
	    img: "aX4WIH8.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Belle",
	    img: "nPBvatH.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Eevee",
	    img: "3pDRgvR.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Jane",
	    img: "bV0DaN7.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Taro",
	    img: "J11NjNj.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Hertz",
	    img: "4Ufced2.png",
	    opts: {
	      crew: ["hb"],
	      leaders: true
	    }
	  },
	  {
	    name: "Aiki",
	    img: "qGMjnYk.png",
	    opts: {
	      crew: ["hk"]
	    }
	  },
	  {
	    name: "Rageon",
	    img: "ATTRSWU.png",
	    opts: {
	      crew: ["hk"],
	      leaders: true
	    }
	  },
	  {
	    name: "Yoonkyung",
	    img: "nQ78Lz7.png",
	    opts: {
	      crew: ["hk"],
	      leaders: true
	    }
	  },
	  {
	    name: "Jiyeon",
	    img: "yJaD5ZV.png",
	    opts: {
	      crew: ["hk"],
	      leaders: true
	    }
	  },
	  {
	    name: "Born",
	    img: "xgAlECj.png",
	    opts: {
	      crew: ["hk"],
	      leaders: true
	    }
	  },
	  {
	    name: "Odd",
	    img: "tZLYivt.png",
	    opts: {
	      crew: ["hk"],
	      leaders: true
	    }
	  },
	  {
	    name: "Hyowoo",
	    img: "VgJgaEf.png",
	    opts: {
	      crew: ["hk"],
	      leaders: true
	    }
	  },
	];

  
