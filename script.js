const fetchButton = document.querySelector('#fetch-button')
const specificBreed = document.querySelector('#breed-button')
const doggo = document.querySelector('#doggo')

fetch('https://dog.ceo/api/breeds/list')
.then(res => res.json())
.then(function(data) {
  for (let breed of data.message){
    const newOption = document.createElement('option')
    newOption.innerText = breed
    doggo.appendChild(newOption)
  }
})



specificBreed.addEventListener('click',function(){
  specificBreed.innerText = 'Fetching Dog'
  fetch(`https://dog.ceo/api/breed/${doggo.value}/images/random`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // your code
    const newImage = document.createElement('img')
    newImage.src = data.message
    document.querySelector('.dog').innerHTML=''
    document.querySelector('.dog').appendChild(newImage)
  });
})


fetchButton.addEventListener('click',function(){
  fetchButton.innerText = 'Fetching Dog'
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // your code
    const newImage = document.createElement('img')
    newImage.src = data.message
    document.querySelector('.dog').innerHTML=''
    document.querySelector('.dog').appendChild(newImage)
  });
})