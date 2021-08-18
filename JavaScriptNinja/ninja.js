
/**
 * JavaScript忍者秘籍 代码和笔记
 * 代码以立即执行函数模块区分，需要查看那个例子，添加括号执行即可
 * 例子：(function(){...})();
 * */

 /**
  * 立即执行函数的几种方式
  * (function(){}())
  	+function(){}(); 
	-function(){}(); 
	!function(){}(); 
	~function(){}(); 
  * 
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


// 3.4 函数的实参和形参
/**
 *  形参是我们定义函数时所列举的变量。
 *  实参是我们调用函数时所传递给函数的值。
 * 
 * 	● 函数声明。
	● 函数表达式。
	● 箭头函数。

	函数中两个隐含的参数：arguments 和 this 
 * */

// 剩余参数(rest parameters)| 默认参数
 (function(){
	function fn(id, ...others){}
	function performAction(ninja, action = "skulking"){ 
		return ninja + " " + action; 
	}
 });

 // arguments 别名(形参的名字)
 (function(person){
 	assert(person === 'gardener', 'The person is a gardener')
 	assert(arguments[0]==='gardener', 'The person is a gardener')
 	person = 'Tom'
 	assert(arguments[0]==='Tom', 'The person is a Tom')

 	arguments[0] = 'Jack'
 	assert(person==='Jack', 'The person is a Jack')

 	// 在非严格模式下，person(别明) 和 arguments 赋值都会影响的，反之则不会

 }); //('gardener');

// 4.1.2
// this 参数：函数上下文
// this 参数的指向不仅是由定义函数的方式和位置决定的，同时还严重受到函数调用方式的影响
~function(){
	function fn(){ 
		console.log(this) // window
		const fb = function(){
			console.log(this)
		}
		fb()
	}
	fn()
};

// 4.2 函数调用的概括
/**
 * 
 * 我们可以通过 4 种方式调用一个函数，每种方式之间有一些细微差别。
	● 作为一个函数(function)——skulk()，直接被调用。
	● 作为一个方法(method)——ninja.skulk()，关联在一个对象上，实现面向对象编程。
	● 作为一个构造函数(constructor)——new Ninja()，实例化一个新的对象。
	● 通过函数的 apply 或者 call 方法——skulk.apply(ninja)或者 skulk.call(ninja)。
 * */


// 4.2.3 构造函数（constructor）
// 若要通过构造函数的方式调用，需要在函数调用之前使用关键字 new。
~function(){
	function whatsMyContext(){ return this; } 

	// 调用构造函数
	new whatsMyContext()
};


// 4.2.3 构造函数的强大功能
~function (){
	function Ninja(){
		this.skulk = function(){
			return this;
		}
	}
	var ninja = new Ninja();
	var ninja2 = new Ninja();
	assert(ninja.skulk()===ninja, "The 1st ninja is skulking")
	assert(ninja2.skulk()===ninja2, "The 2st ninja is skulking")
	assert(ninja===ninja2, "ninja not eq ninja2")

	/**
	 * 当通过 new 关键
		字调用时会创建一个空的对象实例，并将其作为函数上下文（this 参数）传递给函数。
		构造函数中在该对象上创建了一个名为 shulk 的属性并赋值为一个函数，使得该函数成
		为新创建对象的一个方法
	 * 
	 * */

	 /**
	  * 
	  * 使用关键字 new 调用函数会触发以下几个动作
	  * 1．创建一个新的空对象。
		2．该对象作为 this 参数传递给构造函数，从而成为构造函数的函数上下文。
		3．新构造的对象作为 new 运算符的返回值（除了我们很快要提到的情况之外）。
	  * 
	  * */

	  // 验证一下

	  function Validate(){
	  	console.log(this)
	  	this.test = function(){
	  		return this
	  	}
	  }

	  Validate() // Window
	  new Validate() // Validate{}

	  var t1 = new Validate()
	  var t2 = new Validate()

	  assert(t1 === t1.test(), 't1 === t1.test()')
	  assert(t2 === t2.test(), 't2 === t2.test()')

};

~function(){
	var puppet = {
		rules: false
	}
	function Emperor(){
		this.rules = true
		return puppet
	}
	var ep = new Emperor()
	assert(ep === puppet, "ep === puppet")
	assert(ep.rules === true, "ep.rules === true")

	function Emperor2() {
		this.run = function(){
		 	return 'running'
		}
		// 返回这个
		return function(){
		 	return 'hello'
		}

		// return 1
		// 如果是基础类型，就返回 this, 如果是对象，就返回对象
	}
	var ep2 = new Emperor2()
	console.log(ep2)

	// 结论
	/*
		如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构
		造函数的 this 将被丢弃。
		● 但是，如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的 
		对象
	*/
};


// 编写函数注意事项
~function(){
	"use strict"
	function Ninja() { 
	 //  Uncaught TypeError: Cannot set property 'skulk' of undefined
	 this.skulk = function() { 
	 	return this; 
	 }; 
	} 
	var whatever = Ninja(); 
};


// 4.2.4 使用 apply 和 call 方法调用
~function(){
	var buttonDom = document.createElement("button")
	buttonDom.id="test_btn";
	var buttonText = document.createTextNode("Click Me!")
	buttonDom.appendChild(buttonText)
	document.body.append(buttonDom)

	function Button(){
		this.checked = false;
		this.click = function(){
			this.checked = true;
			assert(button.clicked, "The button has been clicked")
		}
	}
	var button = new Button()
	var elem = document.getElementById("test_btn");
	elem.addEventListener("click", button.click)
}();

