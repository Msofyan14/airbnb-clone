import EmptyState from "@/components/EmptyState";

import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  const reservations = await getReservations({ userId: currentUser?.id });

  if (reservations.length === 0) {
    <EmptyState
      title="No trips found"
      subtitle="Look like you havent reserved any trips"
    />;
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
