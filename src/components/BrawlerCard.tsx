type BrawlerCardProps = {
    title: string;
    category: string;
    image: string;
    id: number;
}

export default function BrawlerCard({ title, category, image }: BrawlerCardProps) {
    console.log('image', image)

    return (
        <figure className="relative bg-[coral] w-[8rem] h-[11rem] border-[2px] border-[#282039] rounded-lg shadow-md overflow-hidden hover:shadow-xl  transition-shadow duration-300 cursor-pointer">
            <div className="w-full aspect-square  overflow-hidden">
                <img src={`http://localhost:3001/images/avatar/${image}`} alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-[#282039] opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
            <div className="bg-[#282039] text-white">
                <div>{title}</div>
                <p>{category}</p>
            </div>

        </figure>
    )

}