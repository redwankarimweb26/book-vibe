'use client'
import { Dispatch, useContext } from "react"
import { BookType } from "../type/type"
import { BooksContext } from "@/context/BooksContext"
import { GiToaster } from "react-icons/gi"
import { toast } from "react-toastify"

interface Book {
    book: BookType

}

const ReadBtn = ({ book }: Book) => {
    const { readBook, setReadBook } = useContext(BooksContext) as {
  readBook: BookType[]
        setReadBook: Dispatch<React.SetStateAction<BookType[]>>
    }

    const handleRead = () => {
        const alreadyExist = readBook.find(item => item.bookId === book.bookId)
        if (alreadyExist) {
            toast.error(`${book.bookName} is already added`)
        } else {
            setReadBook([...readBook, book])
            toast.success(`${book.bookName} is added to Read List!`)
        }
    }


    return (
        <button onClick={() => handleRead()} className=" btn rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            Read
        </button>

    )
}

export default ReadBtn