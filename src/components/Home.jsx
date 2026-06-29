export default function Home() {
    return (
        <main className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-10">

            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">

                <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-extrabold leading-[50px] md:leading-[70px] lg:leading-[90px]">
                    YOUR FEET
                    <br />
                    DESERVE
                    <br />
                    THE BEST
                </h1>

                <p className="text-sm md:text-base max-w-md">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
                    WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE
                    HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#D01C28] text-white px-5 py-2 rounded-lg">
                        SHOP NOW
                    </button>

                    <button className="border-2 border-gray-400 text-gray-500 px-5 py-2 rounded-lg">
                        Category
                    </button>
                </div>

                <div>
                    <p className="mb-2 text-gray-500">
                        Also Available On
                    </p>

                    <div className="flex gap-4">
                        <img src="amazon.png" alt="Amazon" />
                        <img src="flipkart.png" alt="Flipkart" />
                    </div>
                </div>

            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex justify-end">
                <img
                    src="shoe_image.png"
                    className="w-full max-w-[500px] lg:max-w-[600px]"
                    alt=""
                />
            </div>

        </main>
    );
}