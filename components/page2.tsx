import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { ArrowRightIcon, StarIcon } from "./icons";

export default function Component() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Discover Your Next Favorite Movie or TV Series
            </h1>
            <p className="text-gray-400 text-lg">
              Find the perfect movie or TV show to watch with our personalized
              recommendations.
            </p>
            <form className="flex items-center max-w-xl mx-auto">
              <input
                className="flex-1 bg-gray-800 border-none rounded-l-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Search for a movie or TV series..."
                type="text"
              />
              <button
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-r-md py-3 px-6"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold">Featured Recommendations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
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
                <h3 className="text-lg font-bold mb-2">
                  The Shawshank Redemption
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Two imprisoned men bond over a number of years, finding solace
                  and eventual redemption through acts of common decency.
                </p>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    4.9
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
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
                <h3 className="text-lg font-bold mb-2">Inception</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A thief who steals corporate secrets through the use of
                  dream-sharing technology is given the inverse task of planting
                  an idea in the mind of a CEO.
                </p>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    4.8
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
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
                <h3 className="text-lg font-bold mb-2">The Dark Knight</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  When the menace known as the Joker wreaks havoc and chaos on
                  the people of Gotham, Batman must accept one of the greatest
                  psychological and physical tests of his ability to fight
                  injustice.
                </p>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    4.9
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
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
                <h3 className="text-lg font-bold mb-2">
                  The Lord of the Rings: The Fellowship of the Ring
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A meek Hobbit from the Shire and eight companions set out on a
                  journey to destroy the powerful One Ring and save Middle-earth
                  from the Dark Lord Sauron.
                </p>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold">Recommendation Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-900 dark:text-gray-200">
              <img
                alt="Top Picks"
                className="w-full h-40 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Top Picks</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover our curated selection of the best movies and TV
                  shows.
                </p>
                <Link
                  className="inline-flex items-center mt-4 text-primary-500 hover:text-primary-600 font-medium"
                  href="#"
                >
                  View Top Picks
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-900 dark:text-gray-200">
              <img
                alt="New Releases"
                className="w-full h-40 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">New Releases</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay up-to-date with the latest movies and TV shows.
                </p>
                <Link
                  className="inline-flex items-center mt-4 text-primary-500 hover:text-primary-600 font-medium"
                  href="#"
                >
                  View New Releases
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-900 dark:text-gray-200">
              <img
                alt="Trending"
                className="w-full h-40 object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Trending</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check out the most popular movies and TV shows right now.
                </p>
                <Link
                  className="inline-flex items-center mt-4 text-primary-500 hover:text-primary-600 font-medium"
                  href="#"
                >
                  View Trending
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold">User Reviews</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">John Doe</h4>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="ml-1 text-gray-600 dark:text-gray-400">
                        4.9
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "This movie was an absolute masterpiece! The acting, the plot,
                  the cinematography - everything was top-notch. I highly
                  recommend it to anyone who loves a good thriller."
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">Jane Doe</h4>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="ml-1 text-gray-600 dark:text-gray-400">
                        4.7
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "I absolutely loved this TV series! The characters were so
                  well-developed, and the storyline kept me hooked from start to
                  finish. I can't wait for the next season!"
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">Bob Smith</h4>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="ml-1 text-gray-600 dark:text-gray-400">
                        4.8
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  "This documentary was eye-opening and informative. I learned
                  so much about the topic, and the filmmakers did an excellent
                  job of presenting the information in an engaging way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
