import React, { useState } from 'react';
import Floor from '../../Components/Floor/Floor';

export default function School({ school }) {
    const [selectedFloor, setSelectedFloor] = useState(school.floors[0]?.id || null);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">{school.name}</h1>

            {/* Вкладки для поверхів */}
            <div className="flex space-x-4 mb-8">
                {school.floors.map(floor => (
                    <button
                        key={floor.id}
                        onClick={() => setSelectedFloor(floor.id)}
                        className={`py-2 px-4 rounded-lg ${
                            selectedFloor === floor.id
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-black'
                        }`}
                    >
                        Поверх {floor.number}
                    </button>
                ))}
            </div>

            {/* Відображення обраного поверху */}
            <div>
                {school.floors
                    .filter(floor => floor.id === selectedFloor)
                    .map(floor => (
                        <Floor key={floor.id} floor={floor} />
                    ))}
            </div>
        </div>
    );
}
