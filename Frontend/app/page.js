import Navigation from "./Components/Navigation";
import Post from "./Components/Post";
import Share from "./Components/Share";
import { ThemeProvider } from "next-themes";

export default function App() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <div className="flex scroll-smooth mx-16 my-5 gap-10">
      <Navigation />
      <div className="flex flex-col w-full gap-10">
        <Share />
        <Post />
      </div>
    </div>
    </ThemeProvider>
  );
}
