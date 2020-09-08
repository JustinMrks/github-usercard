/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get('https://api.github.com/users/justinmrks')
  .then(info =>{
    debugger
    createCard(info.data)
  })
  .catch(err =>{
    debugger
    console.log('whelp that didnt work',err)
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'ElleTinajero',
  'willwearing',
  'TJJanus',
  'seanshadle',
  'RNRTxScott'
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector('.cards')

function createCard(info){

  const cardDiv = document.createElement('div')
  const userImg = document.createElement('img')
  const infoDiv = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const loc = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  cards.appendChild(cardDiv)
  cardDiv.appendChild(userImg)
  cardDiv.appendChild(infoDiv)
    infoDiv.appendChild(name)
    infoDiv.appendChild(username)
    infoDiv.appendChild(loc)
    infoDiv.appendChild(profile)
      profile.appendChild(address)
    infoDiv.appendChild(followers)
    infoDiv.appendChild(following)
    infoDiv.appendChild(bio)

  cardDiv.classList.add('card')
  infoDiv.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  userImg.src = info.avatar_url
  name.textContent = info.name
  username.textContent = info.login
  loc.textContent = info.location
  address.textContent = info.html_url
  address.href = info.html_url
  followers.textContent = info.followers
  following.textContent = info.following
  bio.textContent = info.bio


  console.log(cardDiv)
}
followersArray.forEach(item =>{
  axios.get(`https://api.github.com/users/${item}`)
  .then(info =>{
    debugger
    createCard(info.data)
  })
  .catch(err =>{
    debugger
    console.log('whelp that didnt work',err)
  })
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
