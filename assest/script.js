// dummy data
// const posts =[
//     {
//         title: "this is title-1",
//         body: "this is body-1"
//     },
//     {
//         title: "this is title-2",
//         body: "this is body-2"
//     },
//     {
//         title: "this is title-3",
//         body: "this is body-3"
//     },
//     {
//         title: "this is title-4",
//         body: "this is body-4"
//     },
//     {
//         title: "this is title-5",
//         body: "this is body-5"
//     },
//     {
//         title: "this is title-6",
//         body: "this is body-6"
//     },
//     {
//         title: "this is title-7",
//         body: "this is body-7"
//     },
//     {
//         title: "this is title-8",
//         body: "this is body-8"
//     },
// ];

// html demo
{/* <div class="post">
<h4 class="post-title">post title 1</h4>
<p class="post-body">post description 1</p>
</div>   */}



//fetch data

const fectchData = async (config)=> {
try{
  const res = await axios(config);
  return res.data;
} catch (error){
  throw Error("data is not fetched")
}
};


// https://jsonplaceholder.typicode.com/comments এই লিংক টা "fake api" ওয়েব সাইডে 

//selection
const PostsElement = document.querySelector(".posts");

const loadAllData = async () => {
  const posts = await fectchData("https://jsonplaceholder.typicode.com/comments");
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h4 class="text-center text-xl">${post.email}</h4>
      <p class="text-center text-md">${post.body}</p>
    `;
    PostsElement.appendChild(postElement);
  });
};
 
loadAllData();



