type BrawlerCardProps = {
    title: string;
    category: string;
    id: number;
}

export default function BrawlerCard({ title, category }: BrawlerCardProps) {

    return (
        <figure>
            <div>{title}</div>
            <p>{category}</p>
        </figure>
    )

}