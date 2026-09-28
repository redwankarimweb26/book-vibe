import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { BookType } from "../type/type";
import Link from "next/link";
interface BookPropsType {
    book: BookType
}
const BookCard = ({ book }: BookPropsType) => {
    return (
        <Link href={`/books/${book.bookId}`}>
            <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                {/* Book Image */}
                <div className="flex h-56 items-center justify-center rounded-2xl bg-gray-100">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={140}
                        height={190}
                        className="h-47.5 w-auto object-contain"
                    />
                </div>

                {/* Tags */}
                <div className="mt-6 flex gap-3">
                    {book.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Name */}
                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-3 text-base text-gray-600">
                    By : {book.author}
                </p>

                {/* Divider */}
                <div className="my-5 border-t border-dashed border-gray-300"></div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between">

                    <span className="text-base text-gray-600">
                        {book.category}
                    </span>

                    <div className="flex items-center gap-3">
                        <span className="text-base font-medium text-gray-700">
                            {book.rating.toFixed(2)}
                        </span>

                        <FaRegStar className="text-xl text-gray-600" />
                    </div>

                </div>
            </div></Link>
    );
};

export default BookCard;