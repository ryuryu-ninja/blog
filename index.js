console.log("test");
console.log("test2");
let obj = {};
obj.param1 = [1,2,3,4];
console.log(obj);

class test {

	constructor(){
		this.a = "a";
	}

	dump(){
		console.log(this.a);		
	}

}

let tobj = new test();
tobj.dump();

