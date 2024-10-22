"use client";

import { FormEvent, useState } from "react";
import {useRouter} from 'next/navigation';

export default function Home() {
  const [inputVal, setInputVal] = useState<string>("");
  const {push} = useRouter();
  const handleSubmit = (e:FormEvent) => {
    console.log(inputVal);
    e.preventDefault();
    push("/predict/"+inputVal)
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form
        className="flex flex-col items-center gap-y-4"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 text-black rounded-xl"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-neutral-300 text-black rounded-xl"
        >
          Predict Kardo
        </button>
      </form>
    </div>
  );
}
