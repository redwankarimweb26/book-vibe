'use client'
import { BooksContext } from "@/context/BooksContext"
import { useContext, useState } from "react"
import BookListCard from "../componants/BookListCard"
import { BookType } from "../type/type"
import EmptyPage from "../componants/EmptyPage"
const page = () => {
    const { readBook, wishList } = useContext(BooksContext) as {
        readBook: BookType[]
        wishList: BookType[]
    }

    const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'years'>('rating')
    const sortBook = (book: BookType[]) => {
        const sortedBooks = [...book]
        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        } else if (sortBy === "years") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks
    }

    const sortReadBook = sortBook(readBook)
    const sortWishlist = sortBook(wishList)

    console.log(sortReadBook)
    return (
        <div className="mx-auto max-w-290">
            <h2 className=" text-3xl bg-gray-200 text-center p-10 my-5 rounded-2xl font-bold">Book List</h2>
            <div>
                <div className="my-4 flex items-center justify-center">
                    <select value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'years')}
                        className="select w-45 select-success">
                        <option disabled={true} className="">Sort By</option>
                        <option value={'rating'}>Rating</option>
                        <option value={'pages'}>Pages</option>
                        <option value={'years'}> Publised Year</option>
                    </select>
                </div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Book" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            sortReadBook.length > 0 ? sortReadBook.map((book, ind) => <BookListCard key={ind} book={book}></BookListCard>) : <EmptyPage></EmptyPage>
                        }
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Book" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            sortWishlist.length > 0 ? sortWishlist.map(book => <BookListCard key={book.bookId} book={book}></BookListCard>) : <EmptyPage></EmptyPage>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page