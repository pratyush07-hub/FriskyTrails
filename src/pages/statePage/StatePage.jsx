import { useEffect, useState, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import LoadingSpinner from "./Loading"
import { STATE_BLOGS } from "./StateBlogConfig"
import { ChevronLeft, ChevronRight } from "lucide-react"

const StatePage = () => {
  const { slug } = useParams()
  const [stateObj, setStateObj] = useState(null)
  const [loading, setLoading] = useState(true)

  const carouselRef = useRef(null)
  const ukCarouselRef = useRef(null)

  const isUttarakhand = slug?.toLowerCase() === "uttarakhand"

  useEffect(() => {
    setLoading(true)
    const key = slug?.toLowerCase()
    const data = STATE_BLOGS[key] || null
    setStateObj(data)
    setLoading(false)
  }, [slug])

  const scrollLeft = (ref) => {
    ref.current?.scrollBy({ left: -350, behavior: "smooth" })
  }

  const scrollRight = (ref) => {
    ref.current?.scrollBy({ left: 350, behavior: "smooth" })
  }

  if (loading) return <LoadingSpinner />

  if (!stateObj) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">State not found.</p>
      </div>
    )
  }

  const { stateName, stateImage, blogs = [] } = stateObj

  /* ================= UTTARAKHAND CUSTOM BLOG DATA ================= */
  const uttarakhandBlogs = [
    {
      image: "/TravelBlog/Vacation.png",
      title: "Places to Visit in India in Winter",
      link: "/blog/places-to-visit-in-india-in-winter",
    },
    {
      image: "/TravelBlog/Goa.png",
      title: "Places to Visit Near Calangute",
      link: "/blog/places-to-visit-near-calangute",
    },
    {
      image: "/TravelBlog/Chattisgarh.png",
      title: "Offbeat Places to Visit in India",
      link: "/blog/offbeat-places-to-visit-in-india",
    },
    {
      image: "/TravelBlog/Delhi.png",
      title: "Places to Visit Near Delhi within 300 km",
      link: "/blog/places-to-visit-near-delhi-within-300-km",
    },
    {
      image: "/destinations/Uttarakhand.png",
      title: "Places to Visit in Pithoragarh",
      link: "/blog/places-to-visit-in-pithoragarh",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="w-full mt-20">
        <img
          src={stateImage || "/placeholder.svg"}
          alt={stateName}
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* HEADER */}
        <section className="border-b pb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {stateName}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Experiential journeys will make you a storyteller
          </p>
        </section>

        {/* ================= UTTARAKHAND ================= */}
        {isUttarakhand ? (
          <div className="mt-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              Enjoy Fresh Travel Blogs
            </h2>

            {/* MOBILE */}
            <div className="block md:hidden">
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
                {uttarakhandBlogs.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="relative min-w-[85vw] h-56 snap-center rounded-3xl shadow-xl overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white py-2 rounded-xl">
                        Read More →
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* MD+ CAROUSEL (SAME AS OTHER STATES) */}
            <div className="relative hidden md:block mt-6">
              <button
                onClick={() => scrollLeft(ukCarouselRef)}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
              >
                <span className="mt-4 py-4">
                  <ChevronLeft />
                </span>
              </button>

              <button
                onClick={() => scrollRight(ukCarouselRef)}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
              >
                <span className="mt-4 py-4">
                  <ChevronRight />
                </span>
              </button>

              <div
                ref={ukCarouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {uttarakhandBlogs.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="snap-start min-w-[32%] lg:min-w-[25%] bg-white rounded-2xl shadow overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-8">
              <Link
                to="/blog"
                className="px-10 py-4 font-semibold bg-white border shadow-xl rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-400 hover:text-white transition"
              >
                More Blogs
              </Link>
            </div>
          </div>
        ) : (
          /* ================= OTHER STATES ================= */
          <>
            <h2 className="text-2xl mt-8 sm:text-3xl font-semibold mb-4">
              Top Blogs in {stateName}
            </h2>

            <div className="relative mt-6">
              <button
                onClick={() => scrollLeft(carouselRef)}
                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
              >
                <span className="p-2">
                  <ChevronLeft />
                </span>
              </button>

              <button
                onClick={() => scrollRight(carouselRef)}
                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition"
              >
                <span className="p-2">
                  <ChevronRight />
                </span>
              </button>

              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {blogs.map((blog, i) => (
                  <Link
                    key={i}
                    to={blog.link}
                    className="min-w-[90%] sm:min-w-[45%] lg:min-w-[25%] bg-white rounded-2xl shadow overflow-hidden"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 font-semibold">
                      {blog.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default StatePage
