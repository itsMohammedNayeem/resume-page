import html from "./skills/html.svg";
import css from "./skills/css.svg";
import js from "./skills/js.svg";
import react from "./skills/react.svg";
import scss from "./skills/html.svg";

function App() {
  return (
    <container className="min-h-screen w-full flex">
      <main className="text-neutral-100">
        {/* <h1 className="font-outfit">MY RESUME</h1> */}
      </main>
      <aside>
        <h2 className="visually-hidden font-outfit text-2xl font-bold">
          My skills
        </h2>
        <ul className="icon-list">
          <li>
            <p className="visually-hidden">html</p>
            <img src={html} alt="" />
          </li>
          <li>
            <p className="visually-hidden">css</p>
            <img src={css} alt="" />
          </li>
          <li>
            <p className="visually-hidden">js</p>
            <img src={js} alt="" />
          </li>
          <li>
            <p className="visually-hidden">scss</p>
            <img src={scss} alt="" />
          </li>
          <li>
            <p className="visually-hidden">react</p>
            <img src={react} alt="" />
          </li>
        </ul>
      </aside>
    </container>
  );
}

export default App;
