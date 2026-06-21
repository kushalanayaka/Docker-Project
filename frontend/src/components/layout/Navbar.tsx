"use client";

import {
  useEffect,
  useState,
  useRef,
} from "react";

import Link from "next/link";

import {
  isAdmin,
  isLoggedIn,
  logout,
} from "../../lib/auth";

export default function Navbar() {
  const [loggedIn, setLoggedIn] =
    useState(false);

  const [admin, setAdmin] =
    useState(false);

  const [showMenu, setShowMenu] =
    useState(false);

  const [showMobileMenu, setShowMobileMenu] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    setAdmin(isAdmin());
  }, []);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Mobile Toggle */}

        <div className="flex items-center gap-4">

          <h1 className="text-2xl font-bold tracking-wide">
            ARTIST
          </h1>

          <button
            className="md:hidden text-2xl"
            onClick={() =>
              setShowMobileMenu(
                !showMobileMenu
              )
            }
          >
            ☰
          </button>

        </div>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest items-center">

          <Link href="/">
            Gallery
          </Link>

          <Link href="/blogs">
            Blogs
          </Link>

          <Link href="#">
            About
          </Link>

          {!loggedIn && (
            <Link href="/login">
              Login
            </Link>
          )}

          {loggedIn && (
            <div
              className="relative"
              ref={menuRef}
            >

              <button
                onClick={() =>
                  setShowMenu(
                    !showMenu
                  )
                }
                className="uppercase tracking-widest"
              >
                Account ▼
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-4 w-48 bg-black border border-white/10 shadow-lg">

                  {admin && (
                    <Link
                      href="/dashboard"
                      className="block px-4 py-3 hover:bg-white hover:text-black transition-all"
                    >
                      Dashboard
                    </Link>
                  )}

                  <button
                    onClick={
                      handleLogout
                    }
                    className="w-full text-left px-4 py-3 hover:bg-white hover:text-black transition-all"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </nav>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          border-t border-white/10
          bg-black
          ${
            showMobileMenu
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="flex flex-col p-6 gap-6 uppercase tracking-widest">

          <Link
            href="/"
            onClick={() =>
              setShowMobileMenu(
                false
              )
            }
          >
            Gallery
          </Link>

          <Link
            href="/blogs"
            onClick={() =>
              setShowMobileMenu(
                false
              )
            }
          >
            Blogs
          </Link>

          <Link
            href="#"
            onClick={() =>
              setShowMobileMenu(
                false
              )
            }
          >
            About
          </Link>

          {!loggedIn && (
            <Link
              href="/login"
              onClick={() =>
                setShowMobileMenu(
                  false
                )
              }
            >
              Login
            </Link>
          )}

          {admin && (
            <Link
              href="/dashboard"
              onClick={() =>
                setShowMobileMenu(
                  false
                )
              }
            >
              Dashboard
            </Link>
          )}

          {loggedIn && (
            <button
              onClick={() => {
                handleLogout();
                setShowMobileMenu(
                  false
                );
              }}
              className="text-left"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </header>
  );
}