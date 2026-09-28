import Image from "next/image";
import Link from "next/link";
import {
    FaUserGroup,
    FaBook,
    FaLocationDot,
} from "react-icons/fa6";

import { BookType } from "../type/type";

interface BookListCardProps {
    book: BookType;
}

const BookListCard = ({ book }: BookListCardProps) => {
    return (
        <div className="mx-auto mb-5 w-full max-w-5xl rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex flex-col gap-5 md:flex-row">

                {/* Book Image */}
                <div className="flex  shrink-0 items-center justify-center rounded-xl bg-gray-100 md:w-44">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={120}
                        height={150}
                        className=" object-contain"
                    />
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col">

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-700">
                        By : {book.author}
                    </p>

                    {/* Tags + Year */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="font-bold text-sm text-gray-800">
                            Tag
                        </span>

                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                            >
                                #{tag}
                            </span>
                        ))}

                        <span className="flex items-center gap-2 text-sm text-gray-600">
                            <FaLocationDot />
                            Year of Publishing: {book.yearOfPublishing}
                        </span>
                    </div>

                    {/* Publisher + Pages */}
                    <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <FaUserGroup />
                            Publisher: {book.publisher}
                        </span>

                        <span className="flex items-center gap-2">
                            <FaBook />
                            Page {book.totalPages}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="my-3 border-t border-gray-200" />

                    {/* Bottom Section */}
                    <div className="flex flex-wrap items-center gap-3">

                        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-500">
                            Category: {book.category}
                        </span>

                        <span className="rounded-full bg-orange-50 px-4 py-2 text-sm text-orange-400">
                            Rating: {book.rating}
                        </span>

                        <Link
                            href={`/books/${book.bookId}`}
                            className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                            View Details
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListCard;