
/**
 * JavaScript忍者秘籍 代码和笔记
 * 代码以立即执行函数模块区分，需要查看那个例子，添加括号执行即可
 * 例子：(function(){...})();
 * */

// 3.1 简单回调
(function(){
	function useless(ninjaCallback){
		report("In useless function"); // 3
 		return ninjaCallback(); 
	}

	var text = "Domo arigato!"; 
	report("Before defining functions"); // 1

	function getText() { 
		report("In getText function"); // 4
		return text; 
	}
	report("Before making all the calls"); // 2
	// "The useless function works! Domo arigato!" // 5
	assert(useless(getText) === text, "The useless function works! " + text); 
	report("After the calls have been made"); // 6
});


// 3.2.0 函数的乐趣
(function(){
	var ninja = {}
	ninja.name = "hitsuke";

	var wieldSword = function(){}
	wieldSword.swordType = "katana";
});


// 3.2.1 存储函数
(function(){
	var store = {
		nextId: 1,
		cache: {},
		add: function(fn){
			if(!fn.id){
				fn.id = this.nextId++;
				this.cache[fn.id] = fn
				return true
			}
		}
	}
	function ninja(){}
	function ninja2(){}
	assert(store.add(ninja), "function was safely added.");
	assert(store.add(ninja), "But it was only added once.");
	assert(store.add(ninja2), "ninja2 add success");
});


// 3.2.2 ~ 3 自记忆函数，判断一个数是否为素数（true 或 false）
(function(){
	function isPrime(value){
		if(!isPrime.answers){
			isPrime.answers = {}
		}
		if(isPrime.answers[value] !== undefined){
			return isPrime.answers[value]
		}
		var prime = value !== 0 && value !== 1; // 0、1 都不是素数
		for(let i=2; i<value; i++){
			if(value % i ===0){ // 除了自身和1还能整除的都不是素数
				prime = false;
				break;
			}
		}
		return isPrime.answers[value] = prime
	}
	assert(isPrime(5), "5 is prime");
	assert(isPrime.answers[5], "The answer was cached!");
	assert(isPrime(1), "1 is not a prime");

});


// 3.2.2 



