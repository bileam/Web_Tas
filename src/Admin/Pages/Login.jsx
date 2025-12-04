import { div } from "framer-motion/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [salah, setSalah] = useState(false);
  const navigasi = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username, password);
    if (username === "superAdmin" && password === "admin12345") {
      setPassword("");
      setUsername("");
      navigasi("/homeAdmin");
    } else {
      setSalah(true);
    }
  };
  return (
    <div className=" bg-linear-to-r from-[#fec917] to-[#014C58] min-h-screen justify-center items-center flex flex-col">
      <div className="flex flex-col px-10 py-4 gap-2 rounded-xl bg-white ">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[1.5rem]">selamat datang kembali</h1>
          <p className="text-[0.9rem] text-[#014C58]">
            we missed your place enter your detail
          </p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex-col flex items-center gap-2"
        >
          <div class="w-full">
            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-medium "
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="email"
              className=" border border-default-medium  rounded-md text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs "
              placeholder="username"
              required
            />
          </div>
          <div class="w-full">
            <label
              htmlFor="password"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="bg-neutral-secondary-medium rounded-md border border-default-medium  text-sm  focus:ring-brand block w-full px-3 py-2.5 shadow-xs"
              placeholder="•••••••••"
              required
            />
          </div>

          <div
            className={`flex ${
              salah ? "justify-between" : "justify-end"
            }   w-full`}
          >
            {salah && (
              <p className="text-[0.8rem] text-red-300">password salah</p>
            )}

            <a href="#" className="text-[0.8rem] text-sky-500">
              lupa password?
            </a>
          </div>

          <div className="flex gap-6">
            <button
              type="submit"
              className="border px-4 py-1 rounded-xl cursor-pointer bg-[#014C58] hover:bg-[#014C64] text-white"
            >
              Sign In
            </button>
            <button
              type="button"
              className="border px-4 py-1 rounded-xl  bg-[#014C58] hover:bg-[#014C64] text-white"
            >
              Registrasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
