import { useState } from "react";
import { categories, audios } from "./data";
import CategoryList from "./CategoryList";
import AudioList from "./AudioList";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  const filteredAudios = selectedCategory
    ? audios.filter(a => a.categoryId === selectedCategory)
    : [];

  const currentCategory = currentAudio
    ? categories.find(c => c.id === currentAudio.categoryId)
    : null;

  return (
    <div className="container">

      {/* GIỚI THIỆU */}
      <section>
        <h1>My way to heal</h1>
        <p>
          Đây là nơi mình lưu lại các audio/podcast yêu thích – những thứ giúp mình chữa lành,
          bình an hơn, và nhắc nhở bản thân rằng mọi chuyện rồi cũng sẽ ổn 🕊️
        </p>
      </section>

      {/* AUDIO PLAYER */}
      <section style={{ marginTop: "20px" }}>

        {currentAudio ? (
          <div id="audio-player" style={{ textAlign: "center" }}>
            {/* Ảnh category */}
            <img
              src={currentCategory?.image || "/placeholder.png"}
              alt={currentCategory?.name}
              style={{ width: "200px", borderRadius: "10px", marginBottom: "10px" }}
            />

            {/* Tên bài hát */}
            <div id="audio-name" style={{ fontSize: "20px", fontWeight: "bold" }}>
              {currentAudio.title}
            </div>

            {/* Tên category */}
            <div id="category-name" style={{ color: "#777", marginBottom: "10px" }}>
              {currentCategory?.name}
            </div>

            {/* Trình phát audio */}
            <audio controls src={currentAudio.src} style={{ width: "100%", marginTop: "15px" }} />
          </div>
        ) : (
          <p>— Chưa có bài nào được chọn —</p>
        )}

      </section>

      {/* DANH MỤC */}
      <section style={{ marginTop: "30px" }}>
        <h2>Danh mục</h2>
        <CategoryList
          categories={categories}
          onSelect={setSelectedCategory}
        />
      </section>

      {/* DANH SÁCH AUDIO */}
      <section style={{ marginTop: "30px" }}>
        {selectedCategory && (
          <>
            <h2>Danh sách audio</h2>
            <AudioList
              audios={filteredAudios}
              onPlay={setCurrentAudio}
            />
          </>
        )}
      </section>

    </div>
  );
}
