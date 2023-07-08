import { getPosts } from "./util.js";
const postList = document.querySelector(".post-list");

function displayPost(data) {
    const template = `
    <a href="${data.slug}" class="post-item">
        <div class="post-image">
            <img
                src="${data.image}"
                alt=""
            />
        </div>

        <h2 class="post-title">
            ${data.title}
        </h2>
    </a>`;
    postList && postList.insertAdjacentHTML("afterbegin", template);
}

window.addEventListener("load", async function () {
    try {
        const posts = await getPosts();
        posts.forEach((item) => {
            displayPost(item);
        });
    } catch (error) {}
});
