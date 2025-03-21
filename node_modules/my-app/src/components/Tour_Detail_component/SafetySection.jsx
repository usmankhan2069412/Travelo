    import { FaShieldAlt } from 'react-icons/fa';

    const SafetySection = ({ safety }) => (
        <div className="w-full md:w-[630px] ml-4 md:ml-20 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Safety</h2>
            <h3 className="text-lg font-semibold mb-2">Health Precautions</h3>
            <ul className="space-y-2 list-disc pl-5 text-sm text-gray-700">
                {safety.map((measure, index) => (
                    <li key={index} className="flex items-center">
                        <FaShieldAlt className="text-blue-500 mr-2" /> {measure}
                    </li>
                ))}
            </ul>
        </div>
    );

    export default SafetySection;
