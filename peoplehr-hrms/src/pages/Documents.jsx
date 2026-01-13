import DocumentCard from "../components/DocumentCard";

const Documents = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Documents</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DocumentCard name="Employee Handbook" type="PDF" />
        <DocumentCard name="Leave Policy" type="PDF" />
        <DocumentCard name="Offer Letter Template" type="DOCX" />
      </div>
    </div>
  );
};

export default Documents;
