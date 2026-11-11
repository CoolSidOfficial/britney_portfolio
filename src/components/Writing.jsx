import SectionHeading from "./SectionHeading";
import { articles } from "../data/articles";

const Writing = () => (
  <section id="writing" className="scroll-mt-24 px-6 py-24 md:px-20">
    <SectionHeading id="writing">Writing</SectionHeading>
    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate">
      I enjoy writing about geopolitics, economics, history, technology, and software engineering.
      Here are a few of my recent articles on Medium.
    </p>

    <div className="mt-14 grid gap-6">
      {articles.map((article) => (
        <a
          key={article.link}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-md bg-navy-light p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
        >
          <p className="font-mono text-sm text-accent">{article.date}</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-lightest transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="mt-5 leading-7 text-slate">{article.desc}</p>
          <span className="mt-8 inline-block font-semibold text-accent">Read article →</span>
        </a>
      ))}
    </div>

    <div className="mt-14 text-center">
      <a
        href="https://medium.com/@coolsj"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded border border-accent px-6 py-3 font-mono text-accent transition-all hover:bg-accent/10"
      >
        View all articles
      </a>
    </div>
  </section>
);

export default Writing;
