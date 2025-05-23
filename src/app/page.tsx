"use client";
import { signIn } from "next-auth/react";
const Home = () => {
  return (
    <div>
      <button onClick={() => signIn("github")}>Signin with GitHub</button>
    </div>
  );
};
export default Home;
