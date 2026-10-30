export default function BlogCTABanner() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-8 px-4 text-white font-outfit mt-5 max-w-4xl shadow-xl mb-20 mx-auto rounded-xl">
            <div className="text-center">
                <h2 className="text-4xl font-semibold tracking-tight mb-6 select-none cursor-text">Find Your Perfect Highschool Internship or Extracurricular Activity</h2>
                <p className="text-lg mb-8 mx-10 select-none cursor-text">Discover a world of endless opportunities – from programming competitions to clubs, internships, and more. Talem has it all! Don't miss out on shaping your future with us! 🚀 Explore Talem today!</p>
                <div className="flex justify-center">
                <a
                    href="/extracurriculars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-block bg-white text-purple-600 py-3 px-6 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg"
                >
                    Explore Talem
                </a>
                </div>
            </div>
        </div>
    )
}