const button = document.getElementById('btn')
const output = document.getElementById('output')
const select = document.getElementById('select')

function fun(a, b) {
	console.log("Hiii");

	return a + b;
}

function selectLanguage(data) {
	output.innerHTML = "Hellos";
	if (data == "c") {
		function cCompiler() {
			return "C Compiler";
		}
        d = cCompiler()
	} 
    if (data == "java") {
		function javaCompiler() {
			return "Java Compiler";
		}
        d=javaCompiler()
	}
    return d
}

button.addEventListener("click", () => {
	console.log(select.value);
	
	const comp = selectLanguage('java')
	output.innerHTML = `<h2 style = color:red>${comp}</h2>`
	console.log(comp);
	
})

const data = fetch("https://dummyjson.com/recipes");
data.then(
	(res) => {
		console.log(res);
		res.json().then(
			(response) => {
				const str = response.recipes[0];
				output.innerHTML = str.id + ": " + str.name + " - " + str.instructions
			}
		)
	}
)

const myPromise = new Promise(
	(resolve, reject) => {
		let a = 89;
		if (a>10){
			resolve("Data Resolved")
		}
		else{
			reject("Data Rejected")
		}
	}

)

myPromise.then(msg => console.log(msg)).catch(error => console.log(error));
