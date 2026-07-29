import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import {
  FiCamera,
  FiDownload,
  FiFileText,
  FiVideo,
} from "react-icons/fi";
import { MdOutlineThermostat } from "react-icons/md";

const DELIVERABLE_ICONS = {
  photo: FiCamera,
  video: FiVideo,
  thermal: MdOutlineThermostat,
  report: FiFileText,
};

function ClientPortal() {
  const [projectCode, setProjectCode] = useState("");
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedCode = projectCode.trim().toUpperCase();

    setError("");
    setProject(null);
    setIsLoading(true);

    window.setTimeout(() => {
      const matchedProject = PROJECTS[normalizedCode];

      if (!matchedProject) {
        setError(
          "We couldn’t find that project. Check the code from your delivery email or contact Zephyr Visions for help."
        );
        setIsLoading(false);
        return;
      }

      setProject(matchedProject);
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
            Zephyr Visions
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Client Delivery Portal
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Enter the project code from your delivery email to view project
            details and access your files.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="project-code"
              className="mb-2 block font-semibold text-slate-200"
            >
              Project code
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="project-code"
                type="text"
                value={projectCode}
                onChange={(event) => setProjectCode(event.target.value)}
                autoComplete="off"
                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
              />

              <button
                type="submit"
                disabled={isLoading || !projectCode.trim()}
                className="rounded-lg bg-[#07C0EA] px-6 py-3 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Searching..." : "Find project"}
              </button>
            </div>
          </form>

          {error && (
            <div
              role="alert"
              className="mt-6 rounded-lg border border-amber-500/40 bg-amber-950/40 p-5 text-amber-100"
            >
              <p className="font-semibold">Project not found</p>

              <p className="mt-2 text-sm leading-6 text-amber-100/80">
                {error}
              </p>

              <Link
                to="/contact"
                className="mt-3 inline-block text-sm font-semibold text-[#07C0EA]"
              >
                Contact Zephyr Visions
              </Link>
            </div>
          )}

          {project && (
            <article className="mt-8 border-t border-slate-700 pt-8">
              <div className="mb-7 overflow-hidden rounded-xl border border-slate-700">
                <img
                  src={project.thumbnail}
                  alt={`${project.project} preview`}
                  className="h-44 w-full object-cover sm:h-56"
                />
              </div>

              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-widest text-[#07C0EA]">
                    {project.client}
                  </p>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {project.projectType}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white">
                    {project.project}
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    Project ID:{" "}
                    <span className="font-semibold text-slate-200">
                      {project.code}
                    </span>
                  </p>
                </div>

                <span className="w-fit rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                  {project.status}
                </span>
              </div>

              <dl className="grid gap-5 border-y border-slate-700 py-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-slate-400">Delivery date</dt>
                  <dd className="mt-1 font-semibold">{project.delivered}</dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-400">Last updated</dt>
                  <dd className="mt-1 font-semibold">{project.updated}</dd>
                </div>
              </dl>

              <div className="my-6">
                <h3 className="font-semibold text-slate-200">
                  Included deliverables
                </h3>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((item) => {
                    const Icon = DELIVERABLE_ICONS[item.icon] ?? FiFileText;

                    return (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300"
                      >
                        <Icon className="text-xl text-[#07C0EA]" />
                        <span>{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p className="my-6 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href={project.deliveryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#07C0EA] px-8 py-4 text-lg font-bold text-black shadow-lg transition hover:scale-105 hover:bg-cyan-300"
                >
                  <FiDownload className="text-xl" />
                  Download project files
                </a>
              </div>
            </article>
          )}
        </div>

        <div className="mt-8 text-center text-slate-400">
          Need help accessing a delivery?{" "}
          <Link to="/contact" className="font-semibold text-[#07C0EA]">
            Contact Zephyr Visions
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ClientPortal;