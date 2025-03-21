const DescriptionSection = ({ description }) => (
    <div className="w-full md:w-[630px] mx-4 md:ml-20 mt-8 bg-[#faedcd]/50 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Description</h1>
        <p className="text-sm text-gray-700 leading-relaxed">
            {description}
        </p>
    </div>
);

export default DescriptionSection;
