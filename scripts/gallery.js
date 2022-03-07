let post = JSON.parse(localStorage.getItem("post"));
document.getElementById("upcount").innerText = `${post.upvote_count}`;
document.getElementById("title").innerText = `${post.title}`;
document.title = `${post.title}`;
document.getElementById("viewcount").innerText = `${post.view_count} views`;
var test = new Date().getTime(post.created_at);
var test1 = new Date().getTime();
var diff = test1 - test;
var diff_as_date = new Date(diff);
document.getElementById("timecount").innerText = `${diff_as_date.getHours()}h`;

let divappend = document.getElementById("postdisplay");
let content;
if (
  post.cover.ext === "jpeg" ||
  post.cover.ext === "png" ||
  post.cover.ext === "jpg"
) {
  content = document.createElement("img");
  content.src = post.cover.url;
  content.style = "width:100%";
  divappend.append(content);
} else {
  content = document.createElement("div");
  content.innerHTML = `<video class="postVideo" autoplay playsinline controls>
     <source src="${post.cover.url}" type="${post.cover.mime_type}">
     </video>`;
  divappend.append(content);
}

const getData = async (req, res) => {
  try {
    let res = await fetch(
      `https://api.imgur.com/comment/v1/comments?client_id=546c25a59c58ad7&filter%5Bpost%5D=eq%3A${post.id}&include=account%2Cadconfig`
    );
    let data = await res.json();
    let length = data.data.length;
    document.getElementById("commentcount").innerText = `${length}`;
    displaycomments(data.data);
  } catch (err) {
    console.log("err:", err);
  }
};
getData();
function displaycomments(comments) {
  document.getElementById(
    "comntcount"
  ).innerText = `${comments.length} COMMENTS`;
  comments.map((comment) => {
    let card = document.createElement("div");
    card.id = "card";

    let cmntuser = document.createElement("div");
    let avatar = document.createElement("img");
    avatar.src = `${comment.account.avatar}`;
    avatar.id = "avatar";
    let username = document.createElement("span");
    username.innerText = `${comment.account.username}`;
    username.id = "username";
    let cmnttime = document.createElement("span");
    var test = new Date().getTime(comment.created_at);
    var test1 = new Date().getTime();
    var diff = test1 - test;
    var diff_as_date = new Date(diff);
    cmnttime.innerText = `${diff_as_date.getHours()}h`;
    cmnttime.id = "cmnttime";
    cmntuser.append(avatar, username, "   ", cmnttime);

    let cmnt = document.createElement("div");
    cmnt.innerText = `${comment.comment}`;
    cmnt.id = "cmnt";

    let votescount = document.createElement("div");
    votescount.id = "votescount";
    let upvotes = document.createElement("img");
    upvotes.src = "./components/gallery/svgs/up.svg";
    upvotes.classList = "arrowofcmnt";
    let downvotes = document.createElement("img");
    downvotes.src = "./components/gallery/svgs/up.svg";
    downvotes.classList = "arrowofcmnt";
    downvotes.style = "transform: rotate(180deg)";
    let votetotal = document.createElement("span");
    votetotal.innerText = `${comment.upvote_count}`;
    votetotal.id = "votetotal";

    let replies = document.createElement("span");
    replies.innerText = `+ ${comment.comments.length} replies`;
    replies.id = "replies";
    votescount.append(upvotes, votetotal, downvotes, replies);

    card.append(cmntuser, cmnt, votescount);

    let hr = document.createElement("hr");
    hr.id = "part";

    document.getElementById("displaycmnt").append(card, hr);
  });
}
