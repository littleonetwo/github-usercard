/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let followersURLs = [
  'https://api.github.com/users/littleonetwo',
  'https://api.github.com/users/hraya',
  'https://api.github.com/users/CJStryker',
  'https://api.github.com/users/hdnye',
  'https://api.github.com/users/jdd2007',
  'https://api.github.com/users/keirankozlowski'
];


followersURLs.forEach( id =>{
  axios.get(id)
    .then( response => {
      let target = document.querySelector('.cards');
      let newCard = createCard(response.data);

      target.appendChild(newCard);




    })
    .catch(err =>{
      console.log("Error:", err);

    });

});

// axios.get('https://api.github.com/users/littleonetwo')
//   .then( response => {
//     let target = document.querySelector('.cards');
//     let newCard = createCard(response.data);
//
//     target.appendChild(newCard);
//
//
//
//
//   })
//   .catch(err =>{
//     console.log("Error:", err);
//
//   });
//
// axios.get('https://api.github.com/users/hraya')
//   .then( response => {
//     let target = document.querySelector('.cards');
//     let newCard = createCard(response.data);
//
//     target.appendChild(newCard);
//
//
//
//
//   })
//   .catch(err =>{
//     console.log("Error:", err);
//
//   });

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//   {
//     "login": "hraya",
//     "id": 34699553,
//     "node_id": "MDQ6VXNlcjM0Njk5NTUz",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/34699553?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/hraya",
//     "html_url": "https://github.com/hraya",
//     "followers_url": "https://api.github.com/users/hraya/followers",
//     "following_url": "https://api.github.com/users/hraya/following{/other_user}",
//     "gists_url": "https://api.github.com/users/hraya/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/hraya/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/hraya/subscriptions",
//     "organizations_url": "https://api.github.com/users/hraya/orgs",
//     "repos_url": "https://api.github.com/users/hraya/repos",
//     "events_url": "https://api.github.com/users/hraya/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/hraya/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": "Full Stack Web Developer",
//     "public_repos": 180,
//     "public_gists": 0,
//     "followers": 11,
//     "following": 19,
//     "created_at": "2017-12-20T02:56:10Z",
//     "updated_at": "2019-09-25T20:02:11Z"
//   },
//   {
//     "login": "CJStryker",
//     "id": 16646718,
//     "node_id": "MDQ6VXNlcjE2NjQ2NzE4",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/16646718?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/CJStryker",
//     "html_url": "https://github.com/CJStryker",
//     "followers_url": "https://api.github.com/users/CJStryker/followers",
//     "following_url": "https://api.github.com/users/CJStryker/following{/other_user}",
//     "gists_url": "https://api.github.com/users/CJStryker/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/CJStryker/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/CJStryker/subscriptions",
//     "organizations_url": "https://api.github.com/users/CJStryker/orgs",
//     "repos_url": "https://api.github.com/users/CJStryker/repos",
//     "events_url": "https://api.github.com/users/CJStryker/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/CJStryker/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "C.J. Stryker",
//     "company": null,
//     "blog": "",
//     "location": "New Jersey, USA",
//     "email": null,
//     "hireable": true,
//     "bio": null,
//     "public_repos": 19,
//     "public_gists": 1,
//     "followers": 8,
//     "following": 60,
//     "created_at": "2016-01-11T10:56:25Z",
//     "updated_at": "2019-10-01T14:40:58Z"
//   },
//   {
//     "login": "hdnye",
//     "id": 53801464,
//     "node_id": "MDQ6VXNlcjUzODAxNDY0",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/53801464?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/hdnye",
//     "html_url": "https://github.com/hdnye",
//     "followers_url": "https://api.github.com/users/hdnye/followers",
//     "following_url": "https://api.github.com/users/hdnye/following{/other_user}",
//     "gists_url": "https://api.github.com/users/hdnye/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/hdnye/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/hdnye/subscriptions",
//     "organizations_url": "https://api.github.com/users/hdnye/orgs",
//     "repos_url": "https://api.github.com/users/hdnye/repos",
//     "events_url": "https://api.github.com/users/hdnye/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/hdnye/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "public_repos": 20,
//     "public_gists": 1,
//     "followers": 10,
//     "following": 11,
//     "created_at": "2019-08-06T00:53:36Z",
//     "updated_at": "2019-10-07T15:52:29Z"
//   },
//   {
//     "login": "jdd2007",
//     "id": 7404417,
//     "node_id": "MDQ6VXNlcjc0MDQ0MTc=",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/7404417?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/jdd2007",
//     "html_url": "https://github.com/jdd2007",
//     "followers_url": "https://api.github.com/users/jdd2007/followers",
//     "following_url": "https://api.github.com/users/jdd2007/following{/other_user}",
//     "gists_url": "https://api.github.com/users/jdd2007/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/jdd2007/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/jdd2007/subscriptions",
//     "organizations_url": "https://api.github.com/users/jdd2007/orgs",
//     "repos_url": "https://api.github.com/users/jdd2007/repos",
//     "events_url": "https://api.github.com/users/jdd2007/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/jdd2007/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Jacob Durst",
//     "company": null,
//     "blog": "",
//     "location": "Cincinnati",
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "public_repos": 35,
//     "public_gists": 1,
//     "followers": 7,
//     "following": 14,
//     "created_at": "2014-04-25T10:17:28Z",
//     "updated_at": "2019-09-25T14:32:32Z"
//   },
//   {
//     "login": "keirankozlowski",
//     "id": 24276292,
//     "node_id": "MDQ6VXNlcjI0Mjc2Mjky",
//     "avatar_url": "https://avatars3.githubusercontent.com/u/24276292?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/keirankozlowski",
//     "html_url": "https://github.com/keirankozlowski",
//     "followers_url": "https://api.github.com/users/keirankozlowski/followers",
//     "following_url": "https://api.github.com/users/keirankozlowski/following{/other_user}",
//     "gists_url": "https://api.github.com/users/keirankozlowski/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/keirankozlowski/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/keirankozlowski/subscriptions",
//     "organizations_url": "https://api.github.com/users/keirankozlowski/orgs",
//     "repos_url": "https://api.github.com/users/keirankozlowski/repos",
//     "events_url": "https://api.github.com/users/keirankozlowski/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/keirankozlowski/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Keiran",
//     "company": null,
//     "blog": "keirankozlowski.com",
//     "location": "Gainesville, FL",
//     "email": null,
//     "hireable": true,
//     "bio": "Programmer with experience in serious game development and web development. JS (React/Redux, Angular/MobX, Node/Express), C# (Unity).",
//     "public_repos": 73,
//     "public_gists": 0,
//     "followers": 30,
//     "following": 24,
//     "created_at": "2016-11-30T16:52:27Z",
//     "updated_at": "2019-10-01T22:30:26Z"
//   }
// ];

// followersArray.forEach(id =>{
//
//   let newCard = createCard(id);
//   let target = document.querySelector('.cards');
//
//   target.appendChild(newCard);
//
// });


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function createCard(username){
  //declare the variables to make up the card layout outline
  let container = document.createElement('div');
  let image = document.createElement('img');
  let infoCont = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let profileAdd = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  //assign classes to created elements
  container.classList.add('card');
  infoCont.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  //assign properties to created elements
  image.src = username.avatar_url;
  name.textContent = username.name;
  userName.textContent = username.login;

  if (username.location === null){ //we want user friendly data so no null
    location.textContent = "Location: unknown";
  } else {
    location.textContent = `Location: ${username.location}`;
  };

  profile.textContent = 'Profile: ';
  profileAdd.href = username.html_url;
  profileAdd.textContent = `${username.html_url}`;

  followers.textContent = `Followers: ${username.followers}`;
  following.textContent = `Following: ${username.following}`;

  if (username.bio === null){ //we want user friendly data so no null
    bio.textContent = `Bio: not completed`;
  } else {
    bio.textContent = `Bio: ${username.bio}`;
  };

  //assemble the structure for page output
  let final = container;
  let innerFinal = infoCont;

  final.appendChild(image);
  innerFinal.appendChild(name);
  innerFinal.appendChild(userName);
  innerFinal.appendChild(location);
  profile.appendChild(profileAdd);
  innerFinal.appendChild(profile);
  innerFinal.appendChild(followers);
  innerFinal.appendChild(following);
  innerFinal.appendChild(bio);
  final.appendChild(innerFinal);

  return final;

};
