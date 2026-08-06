import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkApiHealth } from "../services/api";
import { loginUser } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  async function testBackendConnection() {
    try {
      const data = await checkApiHealth();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  testBackendConnection();
}, []);

  const handleSubmit = async (event) => {
  event.preventDefault();

  setError("");
  setIsLoading(true);

  try {
    const data = await loginUser(email.trim().toLowerCase(), password);

    sessionStorage.setItem("authToken", data.token);
    sessionStorage.setItem("currentUser", JSON.stringify(data.user));

    if (data.user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  } catch (error) {
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white">
      <section className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
            Zephyr Visions
          </p>

          <h1 className="text-4xl font-bold">Client Login</h1>

          <p className="mt-4 text-slate-300">
            Sign in to view your projects and download deliverables.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-semibold text-slate-200"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block font-semibold text-slate-200"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
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

         <button
  type="submit"
  disabled={isLoading}
  className="w-full rounded-lg bg-[#07C0EA] px-6 py-3 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
>
  {isLoading ? "Signing in..." : "Sign in"}
</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;