import Link from "next/link";
import { FilmIcon, SearchIcon } from "./icons";

export default function Component() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#">
            <FilmIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">Cine Vault</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:underline" href="#">
              Movies
            </Link>
            <Link className="hover:underline" href="#">
              TV Series
            </Link>
            <Link className="hover:underline" href="#">
              Anime
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2 w-96">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1"
              placeholder="Search movies, TV shows, and anime..."
              type="text"
            />
          </form>
          <Link className="hover:underline" href="#">
            Login
          </Link>
          <Link
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
            href="#"
          >
            Sign Up
          </Link>
        </div>
      </header>
      <section className="bg-gray-900 text-white py-12 md:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md space-y-4">
          <h1 className="text-4xl font-bold">Discover Your Next Obsession</h1>
          <p className="text-gray-400">
            Explore a vast collection of movies, TV shows, and anime. Find your
            next favorite with ease.
          </p>
          <form className="flex items-center bg-gray-800 rounded-full px-4 py-2">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1"
              placeholder="Search movies, TV shows, and anime..."
              type="text"
            />
          </form>
        </div>
        <img
          alt="Hero Image"
          className="mt-8 md:mt-0 rounded-lg shadow-lg"
          height={400}
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={600}
        />
      </section>
      <section className="bg-gray-100 py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="Movies"
                className="rounded-t-lg object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Movies</h3>
                <p className="text-gray-500">
                  Explore our vast movie collection
                </p>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="TV Series"
                className="rounded-t-lg object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">TV Series</h3>
                <p className="text-gray-500">Binge-watch your favorite shows</p>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="Anime"
                className="rounded-t-lg object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Anime</h3>
                <p className="text-gray-500">Dive into the world of anime</p>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="Documentaries"
                className="rounded-t-lg object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Documentaries</h3>
                <p className="text-gray-500">Explore the real world</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="The Dark Knight"
                className="rounded-t-lg object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">The Dark Knight</h3>
                <p className="text-gray-400">
                  When the menace known as the Joker wreaks havoc and chaos on
                  the people of Gotham, Batman must accept one of the greatest
                  psychological and physical tests of his ability to fight
                  injustice.
                </p>
              </div>
            </Link>
            <Link
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="Breaking Bad"
                className="rounded-t-lg object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Breaking Bad</h3>
                <p className="text-gray-400">
                  A high school chemistry teacher diagnosed with inoperable lung
                  cancer turns to manufacturing and selling methamphetamine in
                  order to secure his family's financial future before he dies.
                </p>
              </div>
            </Link>
            <Link
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              href="#"
            >
              <img
                alt="Attack on Titan"
                className="rounded-t-lg object-cover"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/600",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Attack on Titan</h3>
                <p className="text-gray-400">
                  After his hometown is destroyed and his mother is killed,
                  young Eren Jaeger vows to cleanse the earth of the giant
                  humanoid Titans that have brought humanity to the brink of
                  extinction.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <FilmIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">Cine Vault</span>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
            <Link className="hover:underline" href="#">
              Privacy
            </Link>
            <Link className="hover:underline" href="#">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
