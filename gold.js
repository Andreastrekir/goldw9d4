// Exercise 3 : Modify Fetch With Async/Await
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!

//const getData = async function() {
 // const [ users, posts, albums ] = await Promise.all(urls.map(url)));
 //     fetch(url).then(resp => resp.json())
 // ));
 // console.log('users', users);
 // console.log('posta', posts);
 // console.log('albums', albums);
//}

const urls = [
"https://jsonplaceholder.typicode.com/users",
"https://jsonplaceholder.typicode.com/posts",
"https://jsonplaceholder.typicode.com/albums"
];

let fetching = async (url) =>{
	let data = await fetch (url)
	return await data.json()
}

const getData = async function (){
	const [ user, posts, albums] = await Promise.all(urls.map(url) =>fetching(url));
	console.log('users', users);
	console.log('posta', posts);
	console.log('albums', albums);
}

getData()



















