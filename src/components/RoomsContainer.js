import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomsList'
//import { RoomConsumer } from '../context'
import Loading from './Loading'
import {withRoomConsumer} from '../context'

function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading />
    }
    return <div>
        <RoomsFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
    </div>
}

export default withRoomConsumer(RoomsContainer)

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading,sortedRooms,rooms}=value
//                     if (loading) {
//                         return <Loading/>
//                     }

//                     return <div>
//                         hello from roomscontainer
//                         <RoomsFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                 }
//             }
//         </RoomConsumer>

//     )
// }
