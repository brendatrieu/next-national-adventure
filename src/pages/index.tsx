import ParkCard from '@/components/layout/ParkCard/ParkCard';
import { getAllParks } from '@/utils/api';

async function getParks() {
  const allParks = await getAllParks({ start: 0, limit: 10 });
  console.log(allParks);
}

getParks();

export default function Home() {
  return (
    <section>
      <h2 style={{ paddingTop: '1rem' }}>National Parks</h2>
      <ParkCard />
    </section>
  );
}
