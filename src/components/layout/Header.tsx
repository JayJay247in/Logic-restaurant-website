import Link from 'next/link';

const Header = () => {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/menu', label: 'Menu' },
        { href: '/banquet', label: 'Banquet' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/catering', label: 'Catering' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">
                    <Link href="/">LOGIC</Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-gray-600 hover:text-black">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className='hidden md:flex items-center space-x-4'>
                    <Link href="/booking" className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                        Online Booking
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;