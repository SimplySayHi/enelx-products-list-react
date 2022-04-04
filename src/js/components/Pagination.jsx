
function Pagination () {
    return (
        <div className="mt-20 py-7.5 border-t border-gray-opacity-2 flex items-baseline justify-between text-gray-opacity-4">
            <a href="#" className="flex items-baseline cursor-default">
                <i className="icon-arrow-left text-xs mr-2"></i>Prev
            </a>
            <div className="flex items-center text-sm font-bold tracking-wider">
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-complementary text-white">1</a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:underline">2</a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:underline">3</a>
            </div>
            <a href="#" className="flex items-baseline text-complementary">
                Next<i className="icon-arrow-right text-xs ml-2"></i>
            </a>
        </div>
    )
}

export default Pagination
