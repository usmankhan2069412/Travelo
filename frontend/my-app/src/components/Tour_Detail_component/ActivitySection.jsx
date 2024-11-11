const ActivitySection = ({ activities }) => (
    <div className="w-full md:w-[630px] ml-4 md:ml-20 mt-10 mb-6 p-4 bg-white shadow-lg rounded-lg">
        <h1 className="font-sans font-semibold text-2xl mb-2">Activity</h1>
        <h2 className="font-sans font-semibold text-xl mb-4">What You Will Do</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {activities.map((activity) => (
                <li key={activity.id} className="my-1">
                    <strong>{activity.name}</strong> - {activity.duration}<br />
                    <span>{activity.details}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default ActivitySection;
