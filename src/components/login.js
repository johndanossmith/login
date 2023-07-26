import React from "react";
import logo from "../assets/logo.png";
import key from "../assets/key.png";
import megaphone from "../assets/megaphone.png"
function Login() {
  return (
    <div className="h-screen bg-login-back bg-no-repeat bg-cover">
      <div className="flex justify-center items-center pt-16">
        <img src={logo} alt="logo"/>
      </div>
      <div className="w-full h-full absolute top-0 flex flex-col justify-center gap-6 items-center">
        <div className="w-1/5 h-56 mx-auto bg-formgray rounded-[12px]">
          <div className="flex flex-col px-4 py-5">
            <div className="protected">
              <img src={key} alt="key"/>
            </div>
            <input
              type="text"
              placeholder="Wachtwoord"
              className="border border-gray-500 bg-searchgray rounded-md py-3 px-4 mt-6 focus:ring-2 ring-white-400 font-sans text-sm"
            />
            <button class="bg-logincolor text-white rounded-md py-3 px-4 mt-6 font-publicsans">Inloggen</button>
          </div>
        </div>
        <div className="w-96 h-20 mx-auto bg-black px-4 py-4 rounded-md border border-fuchsia-400">
          <div className="megaphone flex">
            <img src={megaphone} alt="megaphone"/>
            <p className="text-white font-family: font-sans text-sm">Je kunt toegang krijgen tot onze events via de</p>
          </div>
          <p className="underline text-white px-5 py-1 font-publicsans text-sm">community chat</p>         
        </div>
      </div>
    </div>
  );
}

export default Login;
