// src/App.jsx
import BookCard from './components/BookCard';

const books = [
  {
    id: 1,
    title: "JavaScript 第7版",
    author: "David Flanagan",
    rating: "★★★★★",
    comment: "JSの基本から詳細な仕様まで網羅された決定版。手元に置いておきたい必須の1冊。"
  },
  {
    id: 2,
    title: "りあくと！ TypeScriptで始めるReact入門",
    author: "oukayuka",
    rating: "★★★★★",
    comment: "Reactの基礎概念からコンポーネント指向の考え方まで、とても分かりやすく解説されています。"
  },
  {
    id: 3,
    title: "プログラマ脳を鍛える",
    author: "Felienne Hermans",
    rating: "★★★★☆",
    comment: "コードを読む・書くときに脳がどう働いているかを科学的に分析した面白い視点の本です。"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <main className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold text-gray-900 border-b pb-4">
          おすすめ書籍一覧
        </h1>
        
        <div className="space-y-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;