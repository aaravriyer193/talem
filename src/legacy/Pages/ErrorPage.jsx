import React from "react";
import Footer from "../Components/common/Footer";

export default function ErrorPage() {
    return (
        <>
          <div className="grid h-screen place-content-center px-4 font-outfit">
                <div className="text-center flex flex-col gap-y-4 items-center justify-center">
                    <h1 className="text-9xl font-black text-gray-200">404</h1>

                    <p className="five-title font-semibold tracking-tight text-gray-900">This Page Doesn't exist.</p>

                    <p className="text-gray-500 w-full">Are you sure this is the right link?</p>

                    <div className="flex gap-x-2">
                        <a
                            href="#"
                            className="inline-block rounded bg-indigo-600 transition300scale px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                            >
                            Find Extracurriculars
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded bg-indigo-600 transition300scale px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                            >
                            Explore College Applications
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}