"use client"

import { useState } from 'react'
import { Phone } from '@/types/phone'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { getColorClass } from '@/lib/colors'

interface PhoneCardProps {
  phone: Phone
}

export default function PhoneCard({ phone }: PhoneCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const bgColorClass = getColorClass(phone.data?.color)

  return (
    <>
      <div 
        onClick={() => setIsDialogOpen(true)}
        className={`${bgColorClass} rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105`}
      >
        <h2 className="text-xl font-semibold mb-3">{phone.name}</h2>
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

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Phone Details"
      >
        <DialogContent className={bgColorClass}>
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
        </DialogContent>
      </Dialog>
    </>
  )
}