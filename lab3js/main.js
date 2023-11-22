/*завдання 1*/
const country=document.getElementById('country');
const resultCountry=document.getElementById('result_country');
resultCountry.value=0;
country.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
    if(country.value!=''){ 
      if(resultCountry.value==0){       
          resultCountry.innerHTML=country.value;
          country.value='';
          resultCountry.value=1;
      }
      else{
        resultCountry.innerHTML+=', '+country.value;
        country.value='';
      }
    }
  }
});

/*завдання 2*/
var n = 0
	maxi = 0;
	maxj = 0;
var a = [];

function gen_arr(){
	let table = document.getElementById("table");
	n = table.rows.length;
	let arr = [];
	for (i=0; i<n;i++){
		arr[i] = []
		for (j=0; j<n;j++){
			arr[i][j] = table.rows[i].cells[j].innerHTML;
		}
	}
	return arr;
}

function max(){
	let maxim = -10000;

	for (i = 0; i<n; i++){
		for (j=0; j<n;j++){
			if (maxim < a[i][j]){
				maxim = a[i][j];
				maxi = i;
				maxj = j;
			}
		}
	}
}

function color(){
	let table = document.getElementById("table");
	table.rows[maxi].cells[maxj].style.backgroundColor = "green";
}

function run() {
	a = gen_arr();
	max();
	color();
}
