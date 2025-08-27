import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-100">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">LOGIC</h2>
                    <p>Experience the finest cuisine at LOGIC, where every dish is a masterpiece.</p>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li><Link href="/about" className="hover:underline">About Us</Link></li>
                        <li><Link href="/menu" className="hover:underline">Menu</Link></li>
                        <li><Link href="/booking" className="hover:underline">Online Booking</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Contact Us</h3>
                    <p>123 Restaurant St, Food City</p>
                    <p>Email: info@logicrestaurant.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Visiting Hours</h3>
                    <p>Mon - Fri: 11am - 10pm</p>
                    <p>Sat - Sun: 12pm - 11pm</p>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} LOGIC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;