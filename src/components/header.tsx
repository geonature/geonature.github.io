import React, { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

interface NavLiLinkProps extends LinkProps {
  href: string;
  exact?: boolean;
  isDropdown?: boolean;
}

const NavLiLink: FC<PropsWithChildren<NavLiLinkProps>> = ({
  children,
  href,
  exact = false,
  ...others
}) => {
  const router = useRouter();
  const isActive = exact
    ? !!(router.asPath === href)
    : !!router.asPath.startsWith(href);

  return (
    <li className="nav-item">
      <Link
        href={href}
        className={clsx("nav-link", isActive && "active")}
        {...others}
      >
        {children}
      </Link>
    </li>
  );
};

const Header: FC = () => (
  <nav className="navbar navbar-expand-lg bg-white shadow-sm mb-3">
    <div className="container-fluid">
      <Link href="/" className="navbar-brand">
        GeoNature
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <NavLiLink href="/" exact>
            Home
          </NavLiLink>
          <NavLiLink href="/ressources">Ressources</NavLiLink>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
