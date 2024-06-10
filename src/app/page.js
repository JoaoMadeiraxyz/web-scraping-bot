"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      age,
    };
    console.log(userData);
    setName("");
    setEmail("");
    setAge(0);
  };

  return (
    <main className="flex flex-col px-24 py-14">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <fieldset className="flex flex-col">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            className="border-black border rounded-md w-fit px-2 py-1"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="border-black border rounded-md w-fit px-2 py-1"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            value={age}
            onChange={(e) => setAge(e.currentTarget.value)}
            className="border-black border rounded-md w-fit px-2 py-1"
          />
        </fieldset>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-400 transition-all duration-300 text-white py-1 px-2 font-bold uppercase w-fit rounded-md"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
