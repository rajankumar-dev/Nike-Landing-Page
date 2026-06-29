export default function Home() {
    return (
        <main className="max-w-6xl mx-auto flex justify-between items-center h-[calc(100vh-80px)]">

            {/* Left Section */}
            <div className="w-1/2 flex flex-col items-start gap-4">

                <h1 className="text-[96px] font-extrabold leading-[80px]">
                    YOUR FEET
                    <br />
                    DESERVE
                    <br />
                    THE BEST
                </h1>

                <p className="text-gray-600 max-w-md">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
                    WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE
                    HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="flex gap-4">
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
            <div className="w-1/2 flex justify-end">
                <img src="shoe_image.png" alt="Shoe" />
            </div>

        </main>
    );
}