import { Introduction, TopRated, Upcoming, Popular } from "../components/home";

export default function Home() {
  return (
    <div>
      <Introduction />
      <TopRated />
      <Upcoming />
      <Popular />
    </div>
  );
}
