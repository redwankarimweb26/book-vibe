'use client'

import { Dispatch, useContext } from "react"
import { BookType } from "../type/type"
import { BooksContext } from "@/context/BooksContext"
import { toast } from "react-toastify"

interface Book {
    book: BookType
}

const WishlistBtn = ({ book }: Book) => {
    const { wishList, setWishList } = useContext(BooksContext) as {
        wishList: BookType[]
        setWishList: Dispatch<React.SetStateAction<BookType[]>>
    }
    const handleWishlist = () => {

        const alreadyExist = wishList.find(item => item.bookId === book.bookId)
        if (alreadyExist) {
            toast.error(`${book.bookName} is already added`)
        } else {

            setWishList([...wishList, book])
            toast.success(`${book.bookName} is added Wishlist`)
        }
    }

    return (
        <button onClick={() => handleWishlist()} className="btn rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-600">
            Wishlist
        </button>
    )
}

export default WishlistBtn