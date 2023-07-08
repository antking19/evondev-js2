import { getPosts, API_URL } from "./util.js";

const tablePostList = document.querySelector(".table-post-list");

function displayTablePost(data, index) {
    const template = `
        <tr>
            <td class="tdStt">${index + 1}</td>
            <td class="tdTitle">${data.title}</td>
            <td>${data.slug}</td>
            <td>
                <img
                    src="${data.image}"
                />
            </td>
            <td class="tdDesc">
                ${data.description}
            </td>
            <td>
                <a href="?id=${data.id}" data-id="${
        data.id
    }" class="btn btnEdit">Edit</a>
                <a href="?id=${data.id}" data-id="${
        data.id
    }" class="btn btnDelete">Delete</a>
            </td>
        </tr>
    `;

    tablePostList && tablePostList.insertAdjacentHTML("beforeend", template);
}

async function removePostById(id) {
    try {
        const response = await axios.delete(`${API_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function removePost(event) {
    event.preventDefault();
    const comfirm = window.confirm("Are you sure remove this post?");
    if (comfirm) {
        await removePostById(this.dataset.id);
        // await displayTablePostList();
        location.reload();
    }
}

function buttonDeletePost() {
    const btnDeleteList = document.querySelectorAll(".btnDelete");
    btnDeleteList &&
        btnDeleteList.forEach((btnDelete) => {
            btnDelete.addEventListener("click", removePost);
        });
}

async function displayTablePostList() {
    const posts = await getPosts();
    posts.forEach((item, index) => {
        displayTablePost(item, index);
    });
    buttonDeletePost();
}

window.addEventListener("load", displayTablePostList);
