import Link from "next/link";

import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <div className="container">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>quill.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
              >
                Login
              </Link>
            </>

            <>
              {/* <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Dashboard
              </Link> */}

              {/* <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? "Your Account"
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ""}
                  imageUrl={user.picture ?? ""}
                /> */}
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
