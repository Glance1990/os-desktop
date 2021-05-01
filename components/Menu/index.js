import Link from "next/link";
import Styling from "./index.styles";

const Menu = ({ changeTheme }) => {
  return (
    <Styling>
      <div class="logo">
        <svg
          height="17"
          viewBox="0 0 29 17"
          width="29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m273 44h5v-3h2v8h-2v-3h-5v3h-2v-8h2zm-12-3h2v8h-2zm27 0h2v8h-2zm-17 13h9v2h-9zm9-15h8v2h-8zm-17 0h8v2h-8zm2 4h4v4h-4zm17 0h4v4h-4zm-19 6h8v2h-8zm17 0h8v2h-8z"
            fill="#142c69"
            fill-rule="evenodd"
            transform="translate(-261 -39)"
          ></path>
        </svg>
      </div>
      <ul className="menu">
        <li>
          <button>
            <span class="c-nav-list__svg">
              <svg
                height="20"
                viewBox="0 0 19 20"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1v16h-1v-17h1 15v1h-2v4h-1v-4h-8v4h-1v-4zm2 18h-1v-1h2v-5h1v5h8v-5h1v5h3v1h-1v1h-13zm2-7h8v1h-8zm0-7h8v1h-8zm-4 12h1v1h-1zm16 0h1v1h-1zm1-14h1v14h-1zm-2-2h2v2h-2z"
                  fill="#142c69"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </li>
        <li>
          <button>
            <span class="c-nav-list__svg">
              <svg
                height="20"
                viewBox="0 0 18 20"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m16 0h2v6h-2v-2h-2v-2h1-3v-2zm-15 2v15h-1v-16h1 1v1zm14 17v1h-12v-1h-1v-1h14v1zm-13-19h6v1h-6zm-1 17h1v1h-1zm15 0h1v1h-1zm1-7h1v7h-1zm-5-6h2v2h-2zm-2 2h2v2h-2zm-2 2h2v2h-2z"
                  fill="#142c69"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </li>
        <li>
          <button className="themeButton" onClick={changeTheme}>
            <span class="c-nav-list__svg">
              <svg
                height="22"
                viewBox="0 0 20 22"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m47 39v1h-14v-1h-1v-1h16v1zm-7-9h-1v-1h1v-3h1v4zm-8-12h16v1h-16zm-2 2h1v17h-1zm5 3h10v1h-10zm0 9h10v2h-10zm2-6h1v2h-1zm5 0h1v2h-1zm-11 11h1v1h-1zm0-18h1v1h-1zm17 18h1v1h-1zm0-18h1v1h-1zm-14 5h1v8h-1zm11 0h1v8h-1zm4-4h1v17h-1z"
                  fill="#142c69"
                  fill-rule="evenodd"
                  transform="translate(-30 -18)"
                ></path>
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </Styling>
  );
};

export default Menu;
