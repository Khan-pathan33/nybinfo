const Calendar = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Calendar</h1>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-600 mb-2">Upcoming Events</p>

        <ul className="space-y-3">
          <li className="border-b pb-2">📅 Team Meeting – Sep 15</li>
          <li className="border-b pb-2">🎂 John’s Birthday – Sep 18</li>
          <li>🏖️ Holiday – Sep 25</li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
