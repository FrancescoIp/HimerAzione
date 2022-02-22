import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink ({ children, href }) {
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "className": router.pathname === href ? "active-nav-link" : null
      })}
    </Link>
  );
};