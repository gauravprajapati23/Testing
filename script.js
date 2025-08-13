// script.js
const newBlogBtn = document.getElementById('newBlogBtn');
const blogForm = document.getElementById('blogForm');
const blogList = document.getElementById('blogList');
const blogImgInput = document.getElementById('blogImgInput');
const previewImg = document.getElementById('previewImg');
const submitBlog = document.getElementById('submitBlog');

let blogs = [];

newBlogBtn.addEventListener('click', () => {
    blogForm.style.display = 'block';
});

// Preview selected image
blogImgInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Handle blog submit
submitBlog.addEventListener('click', () => {
    const title = document.getElementById('blogTitle').value.trim();
    const desc = document.getElementById('blogDesc').value.trim();
    const imgSrc = previewImg.src;

    if (!title || !desc || !imgSrc) {
        alert("Please fill all fields and select an image");
        return;
    }

    // Add blog to list
    blogs.push({ title, desc, imgSrc });

    // Render blogs
    renderBlogs();

    // Reset form
    blogForm.style.display = 'none';
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogDesc').value = '';
    blogImgInput.value = '';
    previewImg.src = '';
    previewImg.style.display = 'none';
});

function renderBlogs() {
    blogList.innerHTML = '';
    blogs.forEach(blog => {
        const post = document.createElement('div');
        post.className = 'blog-post';
        post.innerHTML = `
            <img src="${blog.imgSrc}" style="width:250px;">
            <h3>${blog.title}</h3>
            <p>${blog.desc}</p>
        `;
        blogList.appendChild(post);
    });
}
