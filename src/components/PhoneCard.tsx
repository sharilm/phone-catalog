import { Phone } from '@/types/phone';

interface PhoneCardProps {
  phone: Phone;
}

export default function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-3 text-gray-500">{phone.name}</h2>
      {phone.data && (
        <div className="space-y-2">
          {phone.data.color && (
            <p className="text-gray-600">
              <span className="font-medium">Color:</span> {phone.data.color}
            </p>
          )}
          {(phone.data.capacity || phone.data["capacity GB"]) && (
            <p className="text-gray-600">
              <span className="font-medium">Capacity:</span>{' '}
              {phone.data.capacity || `${phone.data["capacity GB"]} GB`}
            </p>
          )}
        </div>
      )}
    </div>
  );
}