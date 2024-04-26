import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { FilmIcon, FilterIcon, SearchIcon } from "./icons";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <Link className="flex items-center gap-2 font-bold text-2xl" href="#">
          <FilmIcon className="h-8 w-8" />
          CineHub
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="#">
            Movies
          </Link>
          <Link className="hover:underline" href="#">
            TV Shows
          </Link>
          <Link className="hover:underline" href="#">
            Anime
          </Link>
          <Link className="hover:underline" href="#">
            Trending
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex" variant="outline">
            Sign In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </header>
      <section className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Discover the Best in Cinema
              </h1>
              <p className="text-lg text-gray-400">
                Explore a vast collection of movies, TV shows, and anime. Find
                your next favorite.
              </p>
              <form className="flex items-center rounded-md bg-white/10 p-2">
                <SearchIcon className="h-6 w-6 text-gray-400 ml-2" />
                <Input
                  className="bg-transparent text-white flex-1 focus:outline-none px-2"
                  placeholder="Search for a title..."
                  type="text"
                />
                <Button
                  className="text-gray-400 hover:text-white"
                  variant="ghost"
                >
                  Search
                </Button>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                alt="Hero Image"
                className="rounded-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Titles</h2>
            <Link
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" />
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Titles</h2>
            <Link
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" />
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recently Added</h2>
            <Link
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4" />
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Filters</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Select Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Comedy</DropdownMenuItem>
                <DropdownMenuItem>Drama</DropdownMenuItem>
                <DropdownMenuItem>Fantasy</DropdownMenuItem>
                <DropdownMenuItem>Horror</DropdownMenuItem>
                <DropdownMenuItem>Romance</DropdownMenuItem>
                <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Streaming
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Select Streaming Platform</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Netflix</DropdownMenuItem>
                <DropdownMenuItem>Hulu</DropdownMenuItem>
                <DropdownMenuItem>Amazon Prime</DropdownMenuItem>
                <DropdownMenuItem>Disney+</DropdownMenuItem>
                <DropdownMenuItem>HBO Max</DropdownMenuItem>
                <DropdownMenuItem>Paramount+</DropdownMenuItem>
                <DropdownMenuItem>Apple TV+</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Rating
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Select Rating</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>5 Stars</DropdownMenuItem>
                <DropdownMenuItem>4 Stars</DropdownMenuItem>
                <DropdownMenuItem>3 Stars</DropdownMenuItem>
                <DropdownMenuItem>2 Stars</DropdownMenuItem>
                <DropdownMenuItem>1 Star</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Release Year
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Select Release Year</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>2023</DropdownMenuItem>
                <DropdownMenuItem>2022</DropdownMenuItem>
                <DropdownMenuItem>2021</DropdownMenuItem>
                <DropdownMenuItem>2020</DropdownMenuItem>
                <DropdownMenuItem>2019</DropdownMenuItem>
                <DropdownMenuItem>2018</DropdownMenuItem>
                <DropdownMenuItem>2017</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Popularity</DropdownMenuItem>
                <DropdownMenuItem>Rating</DropdownMenuItem>
                <DropdownMenuItem>Release Date</DropdownMenuItem>
                <DropdownMenuItem>Alphabetical</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant="outline">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  Language
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>German</DropdownMenuItem>
                <DropdownMenuItem>Japanese</DropdownMenuItem>
                <DropdownMenuItem>Mandarin</DropdownMenuItem>
                <DropdownMenuItem>Korean</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FilmIcon className="h-6 w-6" />
            <span className="font-bold text-lg">CineHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
          </nav>
          <p className="text-sm text-gray-400">
            © 2024 CineHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
