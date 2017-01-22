export default function ReservationsFactory(RestAbstractFactory) {
    "ngInject";
    const reservations = RestAbstractFactory.create('reservations');
    const songsInQueue = RestAbstractFactory.create('queue');

    return {
        getAllReservations,
        getSongsForReservation,
        updateReservationStatus,
        removeSongFromQueue,
        forceQueue
    };

    function getAllReservations(isActiveOnly = true) {
        return reservations.getList({
                isActiveOnly
            })
            .then(RestAbstractFactory.handleSuccess)
            .catch(RestAbstractFactory.handleError);
    }

    function getSongsForReservation(id) {
        return songsInQueue.getList({
                reservationId: id
            })
            .then(RestAbstractFactory.handleSuccess)
            .catch(RestAbstractFactory.handleError);
    }

    function removeSongFromQueue(song) {
        return song.remove()
            .then(RestAbstractFactory.handleSuccess)
            .catch(RestAbstractFactory.handleError);
    }

    function updateReservationStatus(reservation) {
        return reservation.patch()
            .then(RestAbstractFactory.handleSuccess)
            .catch(RestAbstractFactory.handleError);
    }

    function forceQueue(song) {
        return RestAbstractFactory.copy(song).put()
            .then(() => Promise.resolve('data_updated'))
            .catch(RestAbstractFactory.handleError);
    }
}
