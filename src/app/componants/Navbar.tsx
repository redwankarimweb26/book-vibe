'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathName = usePathname()

    const link =
        <>
            <li><Link className={pathName === '/' ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : ' font-semibold'} href={'/'}>Home</Link></li>
            <li><Link className={pathName === '/books' ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : ' font-semibold'} href={'/books'}>Books</Link></li>
            <li><Link className={pathName === '/list-book' ? 'text-[#23BE0A] border border-[#23BE0A] font-semibold' : ' font-semibold'} href={'/list-book'}>Book List</Link></li>

        </>

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="navbar bg-base-100 mx-auto max-w-290 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="font-bold text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="btn btn-success text-white">Sign In</button>
                    <button className="btn btn-info text-white">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar