type BrawlerCardProps = {
    title: string;
    category: string;
    image: string;
    id: number;
    variant?: 'list' | 'compare';
}

export default function BrawlerCard({ title, category, image, variant = 'list' }: BrawlerCardProps) {

    const baseStyles = "border-[2px] border-[#282039] rounded-lg shadow-md overflow-hidden transition-shadow duration-300 cursor-pointer"
    const variantStyles = variant === 'compare'
        ? "bg-[#ffe2f3] hover:shadow-lg w-16 h-auto text-xs"
        : "bg-[coral] hover:shadow-xl w-[8rem] h-[11rem]"

    return (
        <figure className={`relative ${baseStyles} ${variantStyles}`}>
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