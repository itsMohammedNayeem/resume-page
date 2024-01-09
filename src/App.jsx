import html from "./skills/html.svg";
import css from "./skills/css.svg";
import js from "./skills/js.svg";
import react from "./skills/react.svg";
import scss from "./skills/html.svg";

function App() {
  return (
    <div className="main-grid grid grid-cols-2 min-h-screen w-full bg-primary-800 text-neutral-100">
      <main className="">
        <p className="eyebrow">Skills & Experience</p>
        <h1 className="page-title">My Resume</h1>
        <p className="intro">
          As an individual with exquisite taste in the finest companies, I’ve
          helped represent both client and employer to the highest degree.
        </p>
        <div className="job-experience">
          <div className="job">
            <p className="year">2021</p>
            <div className="job-info">
              <h2 className="role">Sales Engineer</h2>
              <span className="company">Invinex LLC</span>
            </div>
            <p>
              This job involved the engineering of sales, which I'm not totally
              sure what that means, but it's important.
            </p>
          </div>

          <div className="job">
            <p className="year">2019</p>
            <div className="job-info">
              <h2 className="role">Sales Team Lead</h2>
              <span className="company">Ready Call Center ltd.</span>
            </div>
            <p>
              Working as the sales team lead involved a lot of sales calls, as
              well as supporting the other people on the sales team.
            </p>
          </div>

          <div className="job">
            <p className="year">2017</p>
            <div className="job-info">
              <h2 className="role">IT Recruiter / Support Specialist</h2>
              <span className="company">Belize Virtual Center ltd.</span>
            </div>
            <p>
              This job involved helping recruit people and supporting the
              support team.
            </p>
          </div>
          <div className="job">
            <p className="year">2017</p>
            <div className="job-info">
              <h2 className="role">IT Recruiter / Support Specialist</h2>
              <span className="company">Belize Virtual Center ltd.</span>
            </div>
            <p>
              This job involved helping recruit people and supporting the
              support team.
            </p>
          </div>
        </div>
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
    </div>
  );
}

export default App;
