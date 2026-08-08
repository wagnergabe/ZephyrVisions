import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddClient() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const token = sessionStorage.getItem("authToken");

      const response = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create client.");
      }

      navigate("/admin");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
            Zephyr Visions
          </p>

          <h1 className="mt-3 text-4xl font-bold">Add Client</h1>

          <p className="mt-3 text-slate-300">
            Create a client account for project access and deliverables.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block font-semibold text-slate-200"
              >
                First name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block font-semibold text-slate-200"
              >
                Last name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block font-semibold text-slate-200"
            >
              Company
            </label>

            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-slate-200"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold text-slate-200"
            >
              Temporary password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg border border-amber-500/40 bg-amber-950/40 p-4 text-sm text-amber-100"
            >
              {error}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-[#07C0EA] px-5 py-3 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Creating..." : "Create client"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AddClient;