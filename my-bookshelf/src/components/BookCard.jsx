// src/components/BookCard.jsx
function BookCard({ title, author, rating, comment }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-3">著者: {author}</p>
      <div className="text-yellow-500 font-semibold mb-2">{rating}</div>
      <p className="text-gray-600 text-sm leading-relaxed">{comment}</p>
    </div>
  );
}

export default BookCard;