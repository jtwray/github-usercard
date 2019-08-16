/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


  
  axios.get( 'https://api.github.com/users/jtwray' )
  .then( ( response ) => {
    const user=response.data;
    console.log( response.data )
    
    return  githubUsersDiv.appendChild( createGithubUserCard( user ) )
  } ).catch(function (error) {
    
    console.log(error);
  } )
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

const followersArray=[];
 const users={
  "login": "jtwray",
  "id": 42871401,
  "node_id": "MDQ6VXNlcjQyODcxNDAx",
  "avatar_url": "https://avatars2.githubusercontent.com/u/42871401?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jtwray",
  "html_url": "https://github.com/jtwray",
  "followers_url": "https://api.github.com/users/jtwray/followers",
  "following_url": "https://api.github.com/users/jtwray/following{/other_user}",
  "gists_url": "https://api.github.com/users/jtwray/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jtwray/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jtwray/subscriptions",
  "organizations_url": "https://api.github.com/users/jtwray/orgs",
  "repos_url": "https://api.github.com/users/jtwray/repos",
  "events_url": "https://api.github.com/users/jtwray/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jtwray/received_events",
  "type": "User",
  "site_admin": false,
  "name": "James 'Tucker' Wray",
  "company": null,
  "blog": "",
  "location": "asheville,nc",
  "email": null,
  "hireable": true,
  "bio": "Unquenchable thirst for knowledge keeps me up@night.Intrigued by all things advancing the human race.Pay it forward.Help somebody if you can&DressSharpMyFriend!",
  "public_repos": 77,
  "public_gists": 1,
  "followers": 2,
  "following": 10,
  "created_at": "2018-08-31T14:57:34Z",
  "updated_at": "2019-08-13T01:10:30Z"
}


const createGithubUserCard=( user={})=> {
  
  const card=document.createElement( 'div' );
  card.classList.add( 'card' );

      const cardImage=document.createElement( 'img' )
      cardImage.src=user.avatar_url
    card.appendChild( cardImage );

  const cardInfo=document.createElement( 'div' );
  card.appendChild( cardInfo );
  cardInfo.classList.add( 'card-info' );
      const usersName=document.createElement( 'h3' );
      usersName.textContent=user.name;
    usersName.classList.add( 'name' );

    cardInfo.appendChild( usersName );
    const usersUserName=document.createElement( 'p' );
      usersUserName.classList.add( 'username' );
  usersUserName.textContent=user.login;
  cardInfo.appendChild( usersUserName );
  const userLocation=document.createElement( 'p' );
  userLocation.textContent=`Location:${user.location}`;
  cardInfo.appendChild( userLocation );

  const profile=document.createElement( 'p' ); 
  profile.textContent=`Profile:`
      const githubPageAddress=document.createElement( 'a' );
      githubPageAddress.href=user.url;
      githubPageAddress.textContent=user.url;
      cardInfo.appendChild( profile );
  profile.appendChild(githubPageAddress)

  const followers=document.createElement( 'p' );
  followers.textContent=``
    followers.textContent=`Followers:${user.followers}`;
    cardInfo.appendChild( followers );
    const following=document.createElement( 'p' );
    following.textContent=`Following:${user.following}`
    cardInfo.appendChild( following );
    const bio=document.createElement( 'p' );
  bio.textContent=`Bio:${user.bio}`
  cardInfo.appendChild( bio );
  return card;
}

const githubUsersDiv=document.querySelector( 'div.cards' );


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
