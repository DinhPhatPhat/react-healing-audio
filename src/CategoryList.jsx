export default function CategoryList({ categories, onSelect }) {
    return (
        <ul>
            {categories.map(c => (
                <li
                    key={c.id}
                    onClick={() => onSelect(c.id)}
                    style={{ cursor: "pointer", marginBottom: "8px" }}
                >
                    <strong>{c.name}</strong>
                    <br />
                    <small>{c.description}</small>
                </li>
            ))}
        </ul>
    );
}
