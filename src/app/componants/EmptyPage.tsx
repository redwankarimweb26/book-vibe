import Link from "next/link";


const EmptyPage = () => {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 px-6 text-center">
            <div className="mb-4 text-5xl">📚</div>

            <h2 className="text-2xl font-bold">
                No Books Here
            </h2>

            <p className="mt-2 max-w-md text-gray-400">
                Your book list is empty. Explore our collection and find your next
                favorite book.
            </p>

            <Link
                href="/books"
                className="btn btn-success mt-6 rounded-full px-6"
            >
                Explore Books
            </Link>
        </div>
    )
}

export default EmptyPage