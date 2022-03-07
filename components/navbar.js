import Logo from "../assets/logo.js";
const Navbar = () => {
  return `
<nav class="main-navbar">
  <div class="navLogo-left">
  <a href="/">
    ${Logo}
    </a>
    <a class="upload-btn btn" href="/upload"><img style="margin-right:10px;"
        src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"><span
        class="newPostLabel">New post</span></a>
  </div>
  <div class="navSearxh-center">
    <form class="searchForm">

      <input placeholder="Images, #tags, @users oh my!" type="text" class="searchbar" name="q" value=""
        style="height: 36px;">

      <button>
        <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.8d0f9b564a4659d48d8eca38b968a7f2.svg">
      </button>
    </form>
    <div class="searchResult none" ></div>
  </div>
  <div class="account-right">
    <a href="" class="btn add-free-btn">Go Ad-Free</a>
    <div class="account-icons"><a title="Top Comments" href="/leaderboard"><svg width="32" height="32"
          viewBox="0 -2 34 34" class="uScaleTransition ProfileNavbar-item" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <title>Comment Leaderboard</title>
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h32v32H0z"></path>
            <g transform="translate(6.5 3)" stroke="#ffffff" stroke-width="2">
              <path d="M4 16.977v7.076l5.5-2.481 5.5 2.481v-7.076l-5.5 1.245L4 16.977z"></path>
              <circle cx="9.5" cy="9.5" r="8.5"></circle>
            </g>
          </g>
        </svg></a><a class="ButtonLink NavbarMessageButton ProfileNavbar-item uScaleTransition" title="Chat"
        href="https://imgur.com/account/messages"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <title>Chat</title>
          <path stroke="#ffffff" stroke-width="2" clip-rule="evenodd"
            d="M11.076 27.182a.24.24 0 00.37.153c.908-.576 2.805-2.12 5.345-4.496l.313-.292h3.965c3 0 5.431-2.442 5.431-5.454v-5.139c0-3.012-2.432-5.454-5.431-5.454H10.931c-3 0-5.431 2.442-5.431 5.454v6.28c0 2.382 1.922 4.313 4.294 4.313h1.11l-.024 1.115c-.037 1.6.033 2.783.196 3.52v0z">
          </path>
        </svg><span class="Button-label"></span></a>
      <div class="NotificationsDropdown"><a class="ButtonLink NotificationButton ProfileNavbar-item uScaleTransition"
          title="Notifications"><svg width="32" height="32" viewBox="0 -2 34 34" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <title>Notifications</title>
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h32v32H0z"></path>
              <path stroke="#ffffff" d="M14 27c.681.123 1.348.185 2 .185.652 0 1.319-.062 2-.185" stroke-width="2"
                stroke-linecap="round"></path>
              <path fill="#ffffff"
                d="M16 23.711c-4.425 0-9.899-.453-10.847-2.612-.206-.47-.384-1.416.74-2.476 1.391-1.312 1.68-3.554 1.986-5.927.508-3.938 1.14-8.838 8.093-8.999 7.008.161 7.64 5.06 8.149 8.998.306 2.374.595 4.615 1.985 5.927 1.125 1.061.947 2.007.741 2.476-.948 2.16-6.422 2.613-10.847 2.613zM7.405 20.33c.69.51 3.667 1.178 8.595 1.178 4.928 0 7.906-.669 8.595-1.178a1.614 1.614 0 0 0-.14-.148c-1.96-1.85-2.313-4.58-2.654-7.22-.489-3.79-.964-6.18-4.028-6.862a9.305 9.305 0 0 0-1.801-.199c-4.648.109-5.201 2.625-5.773 7.062-.341 2.64-.693 5.37-2.654 7.219a1.58 1.58 0 0 0-.14.148z"
                fill-rule="nonzero"></path>
            </g>
          </svg><span class="Button-label"></span></a></div>
    </div>
    <div class="Dropdown-title"><span>jaskaran999</span><span class="UserAvatar NavbarAvatar-navbar NavbarAvatar"
        style="background-image: url('https://i.imgur.com/cvL0J2f_d.png?maxwidth=290&fidelity=grand')"></span></div>
  </div>
</nav>
`;
};

export default Navbar;
