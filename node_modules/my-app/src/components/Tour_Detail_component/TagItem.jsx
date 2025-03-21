import { FiCheckCircle } from 'react-icons/fi';

const TagItem = ({ title, description }) => (
    <div className="flex flex-col space-y-2">
        <div className="flex items-center">
            <FiCheckCircle className="h-5 w-5" />
            <h3 className="text-md text-black ml-2">{title}</h3>
        </div>
        <p className="text-gray-700 ml-4 text-sm">{description}</p>
    </div>
);

export default TagItem;
