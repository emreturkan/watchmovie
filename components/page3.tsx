import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StarIcon } from "./icons";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Discover Your Next Favorite
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Get personalized movie and TV series recommendations tailored to
              your tastes.
            </p>
            <div className="flex items-center gap-4">
              <input
                className="flex-1 bg-gray-800 border-none rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Search for a movie or TV show"
                type="text"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-md py-3 px-6 font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              alt="Featured Movie"
              className="rounded-lg shadow-lg"
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
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured Recommendations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  The Shawshank Redemption
                </h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  Two imprisoned men bond over a number of years, finding solace
                  and eventual redemption through acts of common decency.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Inception</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  A thief who steals corporate secrets through the use of
                  dream-sharing technology is given the inverse task of planting
                  an idea in the mind of a CEO.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">The Dark Knight</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  When the menace known as the Joker wreaks havoc and chaos on
                  the people of Gotham, Batman must accept one of the greatest
                  psychological and physical tests of his ability to fight
                  injustice.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Forrest Gump</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  The story of a man who witnesses and influences several major
                  historical events in the United States from the late 1950s to
                  the 1990s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              User Recommendations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  The Lord of the Rings
                </h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  A meek Hobbit and his companions embark on a journey to
                  destroy an powerful item which threatens their home.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    4.2
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Breaking Bad</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  A high school chemistry teacher diagnosed with inoperable lung
                  cancer turns to manufacturing and selling methamphetamine in
                  order to secure his family's financial future before he dies.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    4.8
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Parasite</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  A poor family, the Kims, con their way into becoming the
                  servants of a rich family, the Parks. But their easy life gets
                  complicated when their deception is threatened with exposure.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    5.0
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img
                alt="Movie Poster"
                className="w-full h-64 object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Spirited Away</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  During her family's move to the suburbs, a sullen 10-year-old
                  girl wanders into a world ruled by gods, witches, and spirits,
                  and where humans are changed into beasts.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-yellow-500" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    4.6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Submit a Recommendation
            </h2>
          </div>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter the title" type="text" />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter a brief description"
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="image">Poster Image</Label>
              <Input id="image" placeholder="Enter the image URL" type="text" />
            </div>
            <Button className="w-full" type="submit">
              Submit Recommendation
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Movie Recommendations. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link className="text-sm hover:underline" href="#">
              About
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Contact
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
