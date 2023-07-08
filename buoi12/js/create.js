import { API_URL, toSlug } from "./util.js";
const createPostForm = document.querySelector("#create-post");

async function handleAddNewPost(e) {
    e.preventDefault();
    const title = this.title.value;
    const slug = toSlug(title);
    const image = this.image.value;
    const description = this.description.value;

    if (!title || !slug || !image || !description) return;

    const newPost = {
        id:
            Math.floor(Math.random() * 10000000) +
            "a" +
            Math.floor(Math.random() * 10000000) +
            "z" +
            Date.now(),
        title,
        slug,
        image,
        description,
    };

    try {
        await axios.post(`${API_URL}/posts`, newPost);
        Toastify({
            text: "Add New Successfully",
            duration: 3000,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}, // Callback after click
        }).showToast();
    } catch (error) {
        Toastify({
            text: "Add New Error",
            duration: 3000,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}, // Callback after click
        }).showToast();
    }

    this.reset();
}

createPostForm && createPostForm.addEventListener("submit", handleAddNewPost);
