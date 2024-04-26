import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  BoldIcon,
  BriefcaseIcon,
  FilmIcon,
  HeartIcon,
  PopcornIcon,
  SmileIcon,
  StarIcon,
} from "./icons";

export default function Component() {
  return (
    <>
      <section className="w-full bg-gray-900 py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Discover Your Next Favorite Movie or TV Show
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Our curated recommendations help you find the perfect film or
                  series to watch, no matter your mood or genre preference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex-1">
                  <input
                    className="w-full rounded-md border-none bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Search for a movie or TV show"
                    type="text"
                  />
                </div>
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Search
                </Button>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Recommendations
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover the latest and greatest movies and TV shows curated
                just for you.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <img
                  alt="Movie Poster"
                  className="aspect-[2/3] w-full rounded-t-md object-cover"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <div className="text-sm font-medium text-gray-500">Drama</div>
                  <h3 className="text-lg font-semibold text-white">
                    The Shawshank Redemption
                  </h3>
                  <p className="text-gray-400">
                    Two imprisoned men bond over a number of years, finding
                    solace and eventual redemption through acts of common
                    decency.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Movie Poster"
                  className="aspect-[2/3] w-full rounded-t-md object-cover"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <div className="text-sm font-medium text-gray-500">
                    Comedy
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    The Big Lebowski
                  </h3>
                  <p className="text-gray-400">
                    "The Dude" Lebowski, mistaken for a millionaire Lebowski,
                    seeks restitution for his ruined rug and enlists his bowling
                    buddies to help get it.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Movie Poster"
                  className="aspect-[2/3] w-full rounded-t-md object-cover"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <div className="text-sm font-medium text-gray-500">
                    Action
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    The Matrix
                  </h3>
                  <p className="text-gray-400">
                    A computer programmer is awakened from his simulated reality
                    and must confront the realities of the world he lives in.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Movie Poster"
                  className="aspect-[2/3] w-full rounded-t-md object-cover"
                  height="450"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <div className="text-sm font-medium text-gray-500">
                    Sci-Fi
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Blade Runner 2049
                  </h3>
                  <p className="text-gray-400">
                    A young blade runner's discovery of a long-buried secret
                    leads him to track down former blade runner Rick Deckard,
                    who's been missing for 30 years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-800 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Browse by Category
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Explore movies and TV shows across a variety of genres and
                themes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <Link
                className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-600"
                href="#"
              >
                <FilmIcon className="h-8 w-8 text-gray-400 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                  Action
                </span>
              </Link>
              <Link
                className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-600"
                href="#"
              >
                <SmileIcon className="h-8 w-8 text-gray-400 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                  Comedy
                </span>
              </Link>
              <Link
                className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-600"
                href="#"
              >
                <BoldIcon className="h-8 w-8 text-gray-400 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                  Sci-Fi
                </span>
              </Link>
              <Link
                className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-600"
                href="#"
              >
                <HeartIcon className="h-8 w-8 text-gray-400 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                  Romance
                </span>
              </Link>
              <Link
                className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-600"
                href="#"
              >
                <BriefcaseIcon className="h-8 w-8 text-gray-400 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                  Drama
                </span>
              </Link>
              <Link
                className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-gray-700 p-4 transition-colors hover:bg-gray-600"
                href="#"
              >
                <PopcornIcon className="h-8 w-8 text-gray-400 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                  Documentary
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Are Saying
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Hear from real people who have discovered their new favorite
                movies and shows on our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Jane Doe
                      </h4>
                      <p className="text-gray-400">Verified Reviewer</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    "I've discovered so many amazing movies and TV shows on this
                    platform. The recommendations are spot on and have really
                    expanded my horizons."
                  </p>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        John Smith
                      </h4>
                      <p className="text-gray-400">Verified Reviewer</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    "This is the best movie and TV recommendation platform I've
                    ever used. The variety of content and personalized
                    suggestions are unbeatable."
                  </p>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Sarah Lee
                      </h4>
                      <p className="text-gray-400">Verified Reviewer</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    "I love how easy it is to find new movies and shows to watch
                    on this platform. The search and filtering options make it a
                    breeze to discover content."
                  </p>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
