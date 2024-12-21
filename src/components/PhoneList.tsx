'use client';

import { useQuery } from '@tanstack/react-query';
import { getPhones } from '@/lib/api';
import PhoneCard from './PhoneCard';

export default function PhoneList() {
  const { data: phones, isLoading, error } = useQuery({
    queryKey: ['phones'],
    queryFn: getPhones,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-red-500">Error loading phones</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {phones?.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
}