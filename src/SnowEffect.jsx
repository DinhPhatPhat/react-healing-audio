import "./SnowEffect.css";

export default function SnowEffect({ count = 80 }) {
    return (
        <div className="snow-container">
            {Array.from({ length: count }).map((_, i) => {
                const size = Math.random() * 6 + 4;
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 10;
                const left = Math.random() * 100;

                return (
                    <span
                        key={i}
                        className="snow"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
}
