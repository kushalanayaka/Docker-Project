"use client";

import { useState } from "react";
import MessageArtistModal from "./MessageArtistModal";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          ARTIST
        </h1>

        <nav className="flex gap-8 text-sm uppercase tracking-widest">

          <a href="#">Gallery</a>

          <a href="/blogs">Blogs</a>

          <a href="#">About</a>

          <a href="/login">Login</a>

          <a href="/register">Register</a>
          
          <a href="/dashboard">Dashboard</a>

        </nav>

      </div>

    </header>
  );
}