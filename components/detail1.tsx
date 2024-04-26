import { Button } from "@/components/ui/button";
import { AwardIcon, CalendarIcon, ClockIcon, UsersIcon } from "./icons";

export default function Component() {
  return (
    <>
      <div className="px-4 py-6 md:py-12 lg:py-20 xl:py-24">
        <div className="container grid items-start gap-4 md:gap-8 lg:gap-12 px-4 md:px-6 lg:px-8 xl:px-12 [&:not(:last-child)]::after">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/4xl font-serif">
              The Matrix Resurrections
            </h1>
            <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
              The Matrix Resurrections (2021)
            </p>
          </div>
          <Button size="lg">Watch Trailer</Button>
        </div>
      </div>
      <section className="border-t">
        <div className="container grid items-start gap-4 px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-12 lg:py-20">
          <div className="grid gap-4 md:gap-8 lg:gap-12 items-start">
            <div className="grid gap-2 items-start">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl/3xl xl:text-5xl/4xl font-serif">
                Synopsis
              </h2>
              <p className="text-gray-500 leading-loose md:leading-loose/relaxed dark:text-gray-400">
                Return to a world of two realities: one, everyday life; the
                other, what lies behind it. To find out if his reality is a
                construct, to truly know himself, Mr. Anderson will have to
                choose to follow the white rabbit once more. But following the
                white rabbit is a dangerous path, and Mr. Anderson will need to
                be more than just Neo - he will need to be the One.
              </p>
            </div>
            <div className="grid gap-2 items-start">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl/3xl xl:text-5xl/4xl font-serif">
                Cast
              </h2>
              <div className="grid gap-2 md:gap-4 lg:gap-2 xl:gap-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="Keanu Reeves"
                    className="rounded-full overflow-hidden aspect-square object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold">Keanu Reeves</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      as Neo
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="Carrie-Anne Moss"
                    className="rounded-full overflow-hidden aspect-square object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold">Carrie-Anne Moss</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      as Trinity
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="Yahya Abdul-Mateen II"
                    className="rounded-full overflow-hidden aspect-square object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold">Yahya Abdul-Mateen II</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      as Morpheus
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2 items-start">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl/3xl xl:text-5xl/4xl font-serif">
                Details
              </h2>
              <div className="grid gap-1 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 fill-current" />
                  <time dateTime="2021-12-22">December 22, 2021</time>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 fill-current" />
                  <span>2h 28m</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-4 h-4 fill-current" />
                  <span>Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <AwardIcon className="w-4 h-4 fill-current" />
                  <span>Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t">
        <div className="container grid items-start gap-4 px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-12 lg:py-20">
          <div className="grid gap-2 items-start">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl/3xl xl:text-5xl/4xl font-serif">
              Reviews
            </h2>
            <div className="grid gap-4 md:gap-8">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl/1xl">
                  A return to form
                </h3>
                <p className="text-gray-500 leading-loose md:leading-loose/relaxed dark:text-gray-400">
                  The Matrix Resurrections is a return to form for the
                  Wachowskis. After the disappointment of the sequels, the
                  original creators of the Matrix have crafted a film that
                  captures the magic of the original. The action is intense, the
                  visuals are stunning, and the story is thought-provoking.
                  Keanu Reeves slips back into the role of Neo with ease, and
                  Carrie-Anne Moss is as badass as ever as Trinity. The new
                  additions to the cast, including Yahya Abdul-Mateen II and
                  Jessica Henwick, are welcome and add a fresh energy to the
                  film. The Matrix Resurrections is a worthy addition to the
                  franchise and a must-see for fans of the original.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl/1xl">
                  Mind-bending
                </h3>
                <p className="text-gray-500 leading-loose md:leading-loose/relaxed dark:text-gray-400">
                  The Matrix Resurrections is a mind-bending experience that
                  will leave you questioning the nature of reality. The film
                  explores some fascinating ideas about free will, determinism,
                  and the nature of consciousness. The action sequences are
                  pulse-pounding, the special effects are eye-popping, and the
                  performances are top-notch. Keanu Reeves is as charismatic as
                  ever as Neo, and Carrie-Anne Moss brings a steely intensity to
                  her role as Trinity. The supporting cast is equally
                  impressive, with standout performances from Yahya Abdul-Mateen
                  II and Neil Patrick Harris. The Matrix Resurrections is a
                  worthy addition to the franchise, and a must-see for fans of
                  the original trilogy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
