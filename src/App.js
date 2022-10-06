import React from "react";
import "./App.scss";

function App() {
    const jobs = [
        {
            name: "Houzz - Winter, Summer 2019",
            loc: "Palo Alto, CA",
            desc: "Developed and maintained a new feature that touched all ends of Houzz’s development platform, and pushed live for millions of consumers.",
        },
        {
            name: "Ctrl V - Summer, Fall 2018",
            loc: "Waterloo, ON",
            desc: "Refactored and improved Ctrl V's booking software that is used by thousands of customers across Canada.",
        },
        {
            name: "Viziya - Summer 2017",
            loc: "Waterdown, ON",
            desc: "Maintenaince and support of Viziya's project suite, including major refactoring of one of their more ambitious projects, Internet of Things.",
        },
    ];

    const projects = [
        {
            name: "HBO Now Enhanced - Chrome Extension",
            desc: "Repaired and improved upon unwanted behaviour in HBO's streaming service.",
        },
        {
            name: "Dueality - Unity Game",
            desc: "Cooperated with team members in the global game jam to create and develop this simple platformer.",
        },
        {
            name: "Rogue Arrow - Unity Game",
            desc: "Extended work from a highschool project to improve upon this fun level-based game",
        },
    ];

    const links = [
        {
            name: "github",
            link: "https://github.com/nrobinson12",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/nrobinson12/",
        },
        {
            name: "goodreads",
            link: "https://www.goodreads.com/user/show/38767922-nicholas-robinson",
        },
    ];

    const renderJob = (data, key) => {
        return (
            <div className="job heading" key={key}>
                <div className="name">{data.name}</div>
                <div className="loc">{data.loc}</div>
                <div className="desc">{data.desc}</div>
            </div>
        );
    };

    const renderLink = (data, key) => {
        return (
            <a
                className="link"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
            >
                {data.name}
            </a>
        );
    };

    return (
        <div className="app">
            <header className="header fade-in">
                <div className="home heading">
                    <a href="/">nicholas robinson</a>
                </div>
                <div className="other">
                    <a className="right" href="/">
                        about
                    </a>
                </div>
            </header>

            <div className="main">
                <div className="nicholas slide-up">
                    <span className="text heading">nicholas</span>
                    <div className="profileContainer">
                        <img
                            className="profile"
                            src="/profile.jpg"
                            alt="profile"
                        />
                    </div>
                </div>
                <div className="blurb slide-up">
                    I am a software developer currently studying computer
                    science at the University of Waterloo. I have experience in
                    full stack development, working with multiple different
                    companies and projects touching all areas of the development
                    process.
                    <br />
                    <br />
                    My passion is in learning new ideas and concepts. Whether
                    that be a new language or framework, to a whole new mindset
                    or lifestyle change.
                </div>
            </div>

            <div className="experience slide-up">
                <div className="title heading">experience</div>
                {jobs.map((el, i) => {
                    return renderJob(el, i);
                })}
            </div>

            <div className="experience slide-up">
                <div className="title heading">projects</div>
                {projects.map((el, i) => {
                    return renderJob(el, i);
                })}
            </div>

            <div className="footer slide-up">
                {links.map((el, i) => {
                    return renderLink(el, i);
                })}
            </div>
        </div>
    );
}

export default App;
