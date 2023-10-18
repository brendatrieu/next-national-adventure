import ParkCard from '@/components/layout/ParkCard/ParkCard';
import { getAllParks } from '@/utils/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [parks, setParks] = useState<[]>([]);

  useEffect(() => {
    getAllParks({ start: 0, limit: 10 }).then((res) => {
      setParks(res.data);
    });
  }, []);

  return (
    <>
      <h2 style={{ paddingTop: '1rem' }}>National Parks</h2>
      {parks &&
        parks.map((park) => {
          return <ParkCard />;
        })}
    </>
  );
}
