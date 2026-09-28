'use client'
import { BookType } from "@/app/type/type";
import { createContext, Dispatch, ReactNode, useState } from "react"
interface BooksContextType {
    readBook: BookType[];
    setReadBook: Dispatch<React.SetStateAction<BookType[]>>;
    wishList: BookType[];
    setWishList: Dispatch<React.SetStateAction<BookType[]>>;
}


export const BooksContext = createContext({})

const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBook, setReadBook] = useState<BookType[]>([])
    const [wishList, setWishList] = useState<BookType[]>([])

    const setState: BooksContextType = {
        readBook,
        setReadBook,
        wishList,
        setWishList
    }
    return (
        <BooksContext.Provider value={setState}>{children}</BooksContext.Provider>
    )
}

export default BooksProvider