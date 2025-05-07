type BrawlerCardProps = {
    title: string;
    category: string;
    image: string;
    id: number;
}

export default function BrawlerCard({ title, category, image }: BrawlerCardProps) {
    console.log('image', image)

    return (
        <figure>
            <img src={`http://localhost:3001/images/avatar/${image}`} alt={title} />
            <div>{title}</div>
            <p>{category}</p>
        </figure>
    )

}