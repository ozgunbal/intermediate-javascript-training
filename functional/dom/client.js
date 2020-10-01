let store = {
  showHeader: false,
  demoName: "React",
};

const root = document.getElementById("root");

const render = async (root, state) => {
  root.innerHTML = App(state);
};

const updateStore = (state, newState) => {
  store = Object.assign({}, state, newState);
  render(root, store);
};

const App = (state) => {
  return `
    ${state.showHeader ? Header() : ""}
    <main>
      <h2>Welcome to fake ${state.demoName} demo</h2>
    </main>
  `;
};

const Header = () => `
  <header>
    <nav>
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
    </nav>
  </header>
`;

// listening for load event because page should load before any JS is called
window.addEventListener("load", () => {
  render(root, store);
});
