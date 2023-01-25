let postContent = new Object();
postContent.username = "ahko";
postContent.profileImage = "./img/profile.jpg";


const post = document.createElement('div');
post.className = "post";

const postHeader = document.createElement('div');
postHeader.className = "postHeader";

const imageContainer = document.createElement('div');
imageContainer.className = "imageContainer";

const image = document.createElement('img');
image.src = postContent.profileImage;

imageContainer.appendChild(image);
postHeader.appendChild(imageContainer);

const h3 = document.createElement('h3');
h3.textContent = postContent.username;
postHeader.appendChild(h3);

const button = document.createElement('button');
button.innerHTML = `<i class="fas fa-ellipsis-h" style="font-size: 1.5em;"></i>`;
postHeader.appendChild(button);

post.appendChild(postHeader);


document.body.insertBefore(post, post1)


