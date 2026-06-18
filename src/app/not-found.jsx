
'use client'

import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
            <div className="text-center max-w-lg">
                {/* 404 Number */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-slate-400 text-lg">
                    The page you're looking for doesn't exist, has been
                    moved, or was never created.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-medium shadow-lg shadow-cyan-500/30"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] -z-10"></div>
            </div>
        </div>
    );
};

export default NotFoundPage;