const DocumentCard = ({ name, type }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">{type}</p>
    </div>
  );
};

export default DocumentCard;
