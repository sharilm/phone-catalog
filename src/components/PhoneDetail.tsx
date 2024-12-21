import { Phone } from '@/types/phone';
import { getColorClass } from '@/lib/colors';

interface PhoneDetailProps {
  phone: Phone;
}

export default function PhoneDetail({ phone }: PhoneDetailProps) {
  const bgColorClass = getColorClass(phone.data?.color);

  return (
    <div className={`${bgColorClass} p-6 rounded-lg`}>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">ID</h3>
          <p className="mt-1 text-sm text-gray-900">{phone.id}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Name</h3>
          <p className="mt-1 text-sm text-gray-900">{phone.name}</p>
        </div>

        {phone.data && (
          <>
            {phone.data.color && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Color</h3>
                <p className="mt-1 text-sm text-gray-900">{phone.data.color}</p>
              </div>
            )}

            {(phone.data.capacity || phone.data["capacity GB"]) && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Capacity</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {phone.data.capacity || `${phone.data["capacity GB"]} GB`}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-6 text-xs text-gray-500">
        Click outside to close
      </div>
    </div>
  );
}