import { API_URL, toSlug, getPostById, getPosts } from "./util.js";

const createPostForm = document.getElementById("create-post");

async function handleUpdatePost(event) {
    event.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const posts = await getPosts();
    const post = posts.find((post) => post.id === id);
    if (!post) return;

    const title = this.title.value;
    const slug = toSlug(title);
    const image = this.image.value;
    const description = this.description.value;
    try {
        await axios.patch(`${API_URL}/posts/${id}`, {
            title: title || post.title,
            slug: slug || post.slug,
            image: image || post.image,
            description: description || post.description,
        });
        window.location.replace(`dashboard.html`);
    } catch (error) {
        console.log(error);
    }
}

createPostForm.addEventListener("submit", handleUpdatePost);

async function displayPost() {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const post = await getPostById(id);
    if (!post) return;

    const { title, image, slug, description } = post;
    createPostForm.title.value = title;
    createPostForm.image.value = image;
    createPostForm.slug.value = slug;
    createPostForm.description.value = description;
}

window.addEventListener("load", displayPost);
