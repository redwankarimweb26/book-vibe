import ReadBtn from "@/app/componants/ReadBtn"
import WishlistBtn from "@/app/componants/WishlistBtn"
import { BookType } from "@/app/type/type"
import Image from "next/image"

interface ParamsType {
    params: Promise<{ bookId: string }>
}
const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json')
    return res.json()
}
const page = async ({ params }: ParamsType) => {
    const books = await getBooks()
    const { bookId } = await params
    const book: BookType = books.find((book: BookType) => book.bookId === Number(bookId))


    return (
        <div className="mx-auto max-w-290  py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                {/* Left - Book Image */}
                <div className="flex min-h-[500px] items-center justify-center rounded-xl bg-gray-100">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={320}
                        height={450}
                        className="max-h-[430px] w-auto object-contain"
                    />
                </div>

                {/* Right - Book Information */}
                <div className="py-2">

                    {/* Title */}
                    <h1 className=" text-3xl font-bold text-gray-900">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-600">
                        By : {book.author}
                    </p>

                    {/* Category */}
                    <div className="my-5 border-b border-gray-200 pb-4">
                        <span className="text-sm text-gray-700">
                            {book.category}
                        </span>
                    </div>

                    {/* Review */}
                    <div className="text-sm leading-6 text-gray-500">
                        <p>
                            <span className="font-bold text-gray-800">
                                Review :
                            </span>{" "}
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-800">
                            Tag
                        </span>

                        <div className="flex gap-2">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-gray-200"></div>

                    {/* Book Information */}
                    <div className="space-y-3 text-sm">

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Number of Pages:
                            </span>

                            <span className="font-medium text-gray-800">
                                {book.totalPages}
                            </span>
                        </div>

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Publisher:
                            </span>

                            <span className="font-medium text-gray-800">
                                {book.publisher}
                            </span>
                        </div>

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Year of Publishing:
                            </span>

                            <span className="font-medium text-gray-800">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        <div className="flex">
                            <span className="w-40 text-gray-500">
                                Rating:
                            </span>

                            <span className="font-medium text-gray-800">
                                {book.rating}
                            </span>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                        <ReadBtn book={book}></ReadBtn>

                        <WishlistBtn book={book}></WishlistBtn>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default page