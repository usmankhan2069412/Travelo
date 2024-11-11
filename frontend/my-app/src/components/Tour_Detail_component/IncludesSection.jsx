import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const IncludesSection = ({ includes, notInclude }) => (
    <div className="w-full md:w-[630px] ml-4 md:ml-20 mb-4 p-4 bg-white shadow-lg rounded-lg">
        <h1 className="font-sans font-semibold text-2xl mb-4">What's Included or Not Included</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Includes */}
            <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-bold flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> Includes
                </h3>
                <ul className="list-disc pl-5 text-sm">
                    {includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Not Included */}
            <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-bold flex items-center">
                    <FaTimesCircle className="text-red-500 mr-2" /> Not Included
                </h3>
                <ul className="list-disc pl-5 text-sm">
                    {notInclude.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <FaTimesCircle className="text-red-500 mr-2" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default IncludesSection;
