import React from 'react';
import Room from '../Room/Room';

export default function Floor({ floor }) {
    return (
        <div className="grid grid-cols-4 gap-4 w-full h-full border-4 border-black p-4">
            {floor.rooms.map(room => (
                <Room key={room.id} room={room}/>
            ))}
        </div>
    );
}

