"use client"; // Add this at the top

import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="border border-gray-400 px-4 py-2 text-sm font-semibold rounded-md hover:bg-gray-800 hover:text-white duration-300 ease-in-out"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
