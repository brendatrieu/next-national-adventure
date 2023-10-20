import { useEffect, useState } from 'react';
import ParkCard from '@/components/layout/ParkCard/ParkCard';
import { getAllParks } from '@/utils/api';
import { ParkCardData } from '@/models/ApiModels';

export default function Home() {
  const [parks, setParks] = useState<[]>([]);

  useEffect(() => {
    getAllParks({ start: 0, limit: 10 }).then((res) => {
      setParks(res.data);
    });
  }, []);

  return (
    <>
      <h2 style={{ paddingTop: '0.5rem' }}>National Parks</h2>
      {parks &&
        parks.map((park: ParkCardData) => {
          const { images, fullName, description, parkCode } = park;
          const [{ url, altText }] = images;
          return (
            <ParkCard
              key={parkCode}
              imageSrc={url}
              imageDesc={altText}
              parkName={fullName}
              parkDesc={description}
            />
          );
        })}
    </>
  );
}
