const TopicCard = ({ id, title, purpose, children }) => {
  return (
    <div
      id={id}
      className="bg-white shadow-xl rounded-xl p-6 mb-10 
                 transform transition duration-500 
                 hover:scale-105 hover:shadow-2xl
                 animate-fadeIn"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">{purpose}</p>

      <div className="border-t pt-4">{children}</div>
    </div>
  );
};

export default TopicCard;