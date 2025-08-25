import Swal from "sweetalert2";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "4ceb2810-2c25-465f-a65c-93d59220b5f5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((r) => r.json());

    if (res.success) {
      Swal.fire({
        title: "Thank You!",
        text: "I'll get back to you soon!",
        icon: "success",
      });
      form.reset();
    }
  };

  return (
    <main className="w-full h-full">
      <div className="my-6 w-full h-full">
        <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          {/* Left column */}
          <div>
            <h1 className="text-logo-blue text-3xl font-bold">Ready to Fly?</h1>
            <p className="text-sm text-gray-500 mt-4">
              Have a project or unique vision that could benefit from aerial
              imagery? Feel free to reach out and I'll provide info on how drone
              services can help bring it to life.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              It also really helps to include the project location!
            </p>

            {/* Email */}
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:gabriel@zvdrones.com"
                    className="text-[#007bff] text-sm ml-4"
                  >
                    <small className="block">Mail</small>
                    <strong>gabriel@zvdrones.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>
              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a
                    href="https://www.instagram.com/zvdrones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#007bff]"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a
                    href="https://www.youtube.com/@zvdrones"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-[#FF0000]"
                  >
                    <FaYoutube size={20} />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a
                    href="https://www.linkedin.com/company/zephyr-visions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-[#0A66C2]"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form className="ml-auto space-y-4" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="text-white bg-logo-blue hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
