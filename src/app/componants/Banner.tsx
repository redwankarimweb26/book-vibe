import Image from "next/image"
import BannerImg from '@/assets/banner.png'
import Link from "next/link"

const Banner = () => {
    return (

        <div className="flex items-center justify-between w-290 mx-auto mt-10 p-20 bg-gray-100 rounded-2xl">
            <div>
                <p className="font-bold text-5xl ">
                    Books to freshen up <br /> your bookshelf
                </p>
                <Link href={'/list-book'}>
                    <button className="btn btn-success mt-10">View The List</button>
                </Link>
            </div>
            <div>
                <Image src={BannerImg}
                    alt="Book"
                    height={300}
                    width={250} />


            </div>
        </div>

    )
}

export default Banner