import React from 'react';

const Header = () => {
    return (
        <section
            className="w-screen h-[600px] bg-cover bg-center relative mb-12 flex justify-center items-center flex-col text-center"
            style={{ backgroundImage: "url('/header_pic.png')" }}
        >
            <h1 className="font-ubuntu text-xl font-bold text-white drop-shadow-lg">
                Park Gate Residence 3,
            </h1>
            <p className="font-ubuntu text-xl mt-2 text-white drop-shadow">
                Park Gate Residences, Al Kifaf, Dubai
            </p>
            <div className="mt-4 flex items-center gap-2">
                <span className="font-varela text-2xl font-semibold text-white drop-shadow">
                    4,250,000 AEDㅤ
                </span>
                <span className="bg-blue-600 px-3 py-1 text-sm text-white rounded">
                    FOR SALE
                </span>
            </div>
            <button className="font-ubuntu mt-6 bg-blue-600 text-white px-6 py-2 rounded uppercase">
                Contact Agent
            </button>
        </section>
    );
};

export default Header;