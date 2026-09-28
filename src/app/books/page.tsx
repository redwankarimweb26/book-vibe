
import { BookType } from "@/app/type/type"
import BookCard from "../componants/BookCard"



const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json')
    return res.json()
}
const Books = async () => {
    const books: BookType[] = await getBooks()
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-14">Popular Books</h2>
            <div className=" grid grid-cols-3 gap-5 my-6 max-w-290 mx-auto">
                {
                    books.map((book) => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    )
}

export default Books