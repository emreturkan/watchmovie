import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilmIcon, SearchIcon } from "./icons";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <FilmIcon className="h-6 w-6" />
          <span className="sr-only">Movie Recommendations</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Genres
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Top Rated
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Trending
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            New Releases
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Favorite Movie or TV Show
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Search our extensive library of movies and TV series to find
                    the perfect recommendation for your next binge-watching
                    session.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="relative w-full">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      className="w-full rounded-md bg-white px-10 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gray-900 dark:bg-gray-950 dark:text-gray-50 dark:focus:ring-gray-50"
                      placeholder="Search movies and TV shows"
                      type="search"
                    />
                  </div>
                  <Button className="shrink-0">Search</Button>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Popular Recommendations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out the most popular movies and TV shows that everyone
                  is talking about.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    The Shawshank Redemption
                  </h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    Two imprisoned men bond over a number of years, finding
                    solace and eventual redemption through acts of common
                    decency.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    The Godfather
                  </h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    The aging patriarch of an organized crime dynasty transfers
                    control of his clandestine empire to his reluctant son.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    The Dark Knight
                  </h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    When the menace known as the Joker wreaks havoc and chaos on
                    the people of Gotham, the caped crusader must come to terms
                    with one of the greatest psychological tests of his ability
                    to fight injustice.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Inception</h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    A thief who steals corporate secrets through the use of
                    dream-sharing technology is given the inverse task of
                    planting an idea in the mind of a CEO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Trending Recommendations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out the latest movies and TV shows that are generating a
                  lot of buzz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    Stranger Things
                  </h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    When a young boy vanishes, a small town uncovers a mystery
                    involving secret experiments, terrifying supernatural
                    forces, and one very strange little girl.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Squid Game</h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    A mysterious invitation to join the game is sent to people
                    at risk who are in dire need of money. 456 participants from
                    all walks of life are locked into a secret location where
                    they compete in a series of children's games, with the
                    chance to win a tempting cash prize - but the price they
                    might pay is more than their lives.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    Peaky Blinders
                  </h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    A gangster family epic set in 1919 Birmingham, England and
                    centered on a gang who sew razor blades in the peaks of
                    their caps, and their fierce boss Tommy Shelby, who means to
                    move up in the world.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Severance</h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    Mark leads a team of office workers whose memories have been
                    surgically divided between their work and personal lives.
                    When a mysterious colleague appears outside of work, it
                    begins a journey to discover the truth about their company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recently Added Recommendations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out the latest movies and TV shows that have been added
                  to our library.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Poster"
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">
                    The Last of Us
                  </h3>
                  <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                    Joel, a hardened survivor, is hired to smuggle Ellie, a
                    14-year-old girl, out of an oppressive quarantine zone. What
                    starts as a small job soon becomes a brutal, heartbreaking
                    journey, as they both must traverse the U.S. and depend on
                    each other for survival.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
