const Header = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[600px]"
            style={{ backgroundImage: "url('/header_pic.png')" }}
        >
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl font-bold">Park Gate Residence 3,</h1>
                <p className="text-xl mt-2">Park Gate Residences, Al Kifaf, Dubai</p>
                <div className="mt-4 flex items-center gap-2">
                    <span className="text-2xl font-semibold">4,250,000 AED</span>
                    <span className="bg-blue-600 px-3 py-1 text-sm rounded">FOR SALE</span>
                </div>
                <button className="mt-6 border border-white px-6 py-2 uppercase">Contact Agent</button>
            </div>
        </section>
    );
};

export default Header;