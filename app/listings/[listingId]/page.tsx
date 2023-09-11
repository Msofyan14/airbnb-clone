import getLisitingById from "@/actions/getListingById";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";

interface Iparams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Iparams }) => {
  const listing = await getLisitingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
