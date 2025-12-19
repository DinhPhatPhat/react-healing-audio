import "./CategoryList.css"; // CSS riêng

export default function CategoryList({ categories, onSelect }) {
    return (
        <div className="category-list">
            {categories.map(c => (
                <div
                    key={c.id}
                    className="category-item"
                    onClick={() => onSelect(c.id)}
                >
                    {c.image && <img src={c.image} alt={c.name} />}
                    <div className="category-info">
                        <div className="category-name">{c.name}</div>
                        <div className="category-desc">{c.description}</div>
                    </div>
                </div>

            ))}
        </div>
    );
}
