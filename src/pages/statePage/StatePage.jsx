"use client"

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

  useEffect(() => {
    setLoading(true)
    const key = slug?.toLowerCase()
    const data = STATE_BLOGS[key] || null
    setStateObj(data)
    setLoading(false)
  }, [slug])

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    })
  }

  if (loading) return <LoadingSpinner />

  if (!stateObj) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">State not found.</p>
      </div>
    )
  }

  const { stateName, stateImage, blogs } = stateObj

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Image */}
      <div className="w-full mt-20">
        <img
          src={stateImage || "/placeholder.svg"}
          alt={stateName}
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Header Section */}
        <section className="w-full border-b">
          <div className="max-w-7xl mx-auto px-4 sm:py-">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{stateName}</h1>

            <p className="mt-3 mb-2 text-base sm:text-lg text-gray-600 max-w-2xl">
              Experiential journeys will make you a storyteller
            </p>

            {/* <div className="mt-4 w-40 sm:w-56 h-1 bg-orange-400 rounded-full" /> */}
          </div>
        </section>

        <h2 className="text-2xl mt-8 sm:text-3xl font-semibold mb-4">Top Blogs in {stateName}</h2>

        {/* Blogs Carousel */}
        {blogs.length === 1 ? (
          <div className="flex justify-center">
            <div
              className="
                w-full max-w-md
                bg-white border border-gray-200
                rounded-xl overflow-hidden
                shadow-sm hover:shadow-md transition
              "
            >
              <Link to={blogs[0].link}>
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={blogs[0].image || "/placeholder.svg"}
                    alt={blogs[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-4 flex flex-col gap-3">
                <Link to={blogs[0].link}>
                  <h3 className="text-lg font-semibold hover:text-orange-500 transition">{blogs[0].title}</h3>
                </Link>
                <Link
                  to={blogs[0].link}
                  className="w-full sm:w-auto px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all text-center inline-flex items-center justify-center gap-2 hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #FF8C00 0%, #FFB800 100%)",
                  }}
                >
                  Read More <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mt-6">
            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              className="
                absolute -left-6 top-1/2 -translate-y-1/2 z-10
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full
                bg-white/80 backdrop-blur
                border border-gray-200
                text-orange-500
                shadow-md
                hover:bg-orange-500 hover:text-white
                transition
              "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              className="
                absolute -right-6 top-1/2 -translate-y-1/2 z-10
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full
                bg-white/80 backdrop-blur
                border border-gray-200
                text-orange-500
                shadow-md
                hover:bg-orange-500 hover:text-white
                transition
              "
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* CAROUSEL */}
            <div
              ref={carouselRef}
              className="
                flex gap-6
                overflow-x-auto
                scroll-smooth
                snap-x snap-mandatory
                px-1 pr-6 pb-4
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {blogs.map((blog, index) => (
                <div
                  key={blog.link || index}
                  className="
                    snap-start
                    min-w-[90%]
                    sm:min-w-[48%]
                    md:min-w-[32%]
                    lg:min-w-[25%]
                    xl:min-w-[23%]
                    bg-white
                    border border-gray-200
                    rounded-2xl
                    overflow-hidden
                    shadow-sm
                    hover:shadow-lg
                    transition
                    group
                    flex flex-col
                  "
                >
                  <Link to={blog.link}>
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="
                          h-full w-full object-cover
                          group-hover:scale-105
                          transition-transform duration-300
                        "
                      />
                    </div>
                  </Link>

                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <Link to={blog.link}>
                      <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-orange-500 transition">
                        {blog.title}
                      </h3>
                    </Link>
                    <Link
                      to={blog.link}
                      className="w-full sm:w-auto px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all text-center inline-flex items-center justify-center gap-2 hover:opacity-90 mt-auto"
                      style={{
                        background: "linear-gradient(90deg, #FF8C00 0%, #FFB800 100%)",
                      }}
                    >
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default StatePage
