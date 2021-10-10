export default function DonateCard({subtitle, title, description, ctaTitle}) {
    return (<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    { subtitle && subtitle.length > 0 && subtitle }
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    { title && title.length > 0 && title }
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    { description && description.length > 0 && description }
                </p>
            </a>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    { ctaTitle && ctaTitle.length > 0 && ctaTitle }
                </button>
            </div>
        </div>
    </div>)
};
