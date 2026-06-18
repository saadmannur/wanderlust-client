'use client'

import Link from 'next/link';
import React from 'react';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';

const ErrorPage = ( error ) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
            <div className="max-w-xl w-full text-center">
                {/* Error Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-5 rounded-full bg-red-500/10 border border-red-500/20">
                        <FiAlertTriangle className="w-14 h-14 text-red-500" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Something Went Wrong
                </h1>

                {/* Description */}
                <p className="text-slate-400 text-lg mb-8">
                    We encountered an unexpected error while loading this page.
                    Please try again or return to the homepage.
                </p>

                {/* Error Message */}
                {error?.message && (
                    <div className="mb-8 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                        <p className="text-sm text-red-400 break-words">
                            {error.message}
                        </p>
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3 font-semibold transition hover:scale-105"
                    >
                        <FiRefreshCw size={18} />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                    >
                        Go Home
                    </Link>
                </div>

                {/* Decorative Glow */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-red-500/20 blur-[120px] -z-10"></div>
            </div>

        </div>
    );
};

export default ErrorPage;