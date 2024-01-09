import html from "./skills/html.svg";
import css from "./skills/css.svg";
import js from "./skills/js.svg";
import react from "./skills/react.svg";
import scss from "./skills/html.svg";

function App() {
  return (
    <div className="main-grid min-h-dvh grid grid-flow-dense grid-cols-[15rem_auto] items-center w-full bg-primary-800 text-neutral-100 font-outfit">
      <main className="col-start-2">
        <p className="eyebrow">Skills & Experience</p>
        <h1 className="page-title">My Resume</h1>
        <p className="intro">
          As an individual with exquisite taste in the finest companies, I have
          helped represent both client and employer to the highest degree.
        </p>
        <div className="job-experience grid grid-flow-col">
          <div className="job">
            <p className="year">2021</p>
            <div className="job-info">
              <h2 className="role">Sales Engineer</h2>
              <span className="company">Invinex LLC</span>
            </div>
            <p>
              This job involved the engineering of sales, which I am not totally
              sure what that means, but it is important.
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

      <aside className="col-start-1 self-stretch">
        <h2 className="visually-hidden">My skills</h2>
        <ul className="icon-list content-center h-full list-none grid gap-[3rem] ml-[4rem] border-l-[1px] border-orange-500">
          <li className="lists-items">
            <p className="visually-hidden">html</p>
            <img src={html} alt="" />
          </li>
          <li className="lists-items">
            <p className="visually-hidden">css</p>
            <img src={css} alt="" />
          </li>
          <li className="lists-items">
            <p className="visually-hidden">scss</p>
            <img src={scss} alt="" />
          </li>
          <li className="lists-items">
            <p className="visually-hidden">scss</p>
            <img src={js} alt="" />
          </li>
          <li className="lists-items">
            <p className="visually-hidden">react</p>
            <img src={react} alt="" />
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
