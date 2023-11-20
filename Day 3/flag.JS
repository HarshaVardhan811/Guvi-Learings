
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.addEventListener('load', function (){
  console.log(this.response)
  iterate(JSON.parse(this.response))
});

xhr.send()
console.log(xhr)

function iterate(data = []) {
  for (var x = 0; x < data.length; x++) {
    console.log(data[x].name.official)
    console.log(data[x].flags.svg)
  }
}