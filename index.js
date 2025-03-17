const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let hpage = document.getElementById("home-page")

function render(){
    if (posts) {
        let temp = ""
        for(let i = 0; i < posts.length; i++){
            temp += `
            <section id="sec${i}">
                <div class="flex">
                    <img src="${posts[i].avatar}" class="pfp">
                    <div>
                        <h1 class="pname">${posts[i].name}</h1>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <div class="post-container">
                    <img src="${posts[i].post}" class="post" id="post${i}">
                    <img src="images/heart.png" class="heart" id="heart${i}">
                </div>
                <div class="flex">
                    <img src="images/icon-heart.png" class="icon">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                <h1 id="likes-el${i}">${posts[i].likes} likes</h1>
                <p class="caption"><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
            `
        }
        hpage.innerHTML = temp
        for(let i = 0; i < posts.length; i++){
            let likesEl = document.getElementById(`likes-el${i}`)
            let post = document.getElementById(`post${i}`)
            let heart = document.getElementById(`heart${i}`)
            post.addEventListener("dblclick", function(){
                heart.style.opacity = 1; 
                setTimeout(() => {
                    heart.style.opacity = 0; 
                }, 500);
                posts[i].likes += 1
                likesEl.textContent = posts[i].likes + " likes"
            })
        }
    }
}
render()

// function minirender(){
//     for(let i = 0; i < posts.length; i++){
//         likesel.textContent = posts[i].likes + " likes"
//     }
// }

