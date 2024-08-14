'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
interface NavLinkClassProps {
    isActive: boolean
}

const Navbar: React.FC = () => {
    const pathname = usePathname()
    return (
        <div className="p-4 bg-white flex justify-between shadow-md">
            <div className="text-xl text-slate-700 flex justify-between gap-6">
                <div>
                    <span>
                        HMS Host
                    </span>
                </div>
                <div className="flex gap-x-5 text-sm items-center">
                    <Link href="/" className={`${pathname === '/' ? 'text-cyan-600' : 'text-slate-700'} hover:text-slate-400`} >Home</Link>
                    <Link href='/handbook' className={`${pathname === '/handbook' ? 'text-cyan-600' : 'text-slate-700'} hover:text-slate-400`}>Handbook </Link>
                    <Link href='/simulator' className={`${pathname === '/simulator' ? 'text-cyan-600' : 'text-slate-700'} hover:text-slate-400`}>POS Sumulator</Link>
                </div>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar