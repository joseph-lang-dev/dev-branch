import { signIn } from "@/auth";

const Home = async () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  );
};
export default Home;
