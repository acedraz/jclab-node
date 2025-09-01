import React, { useState } from 'react';
import {
    MapPin
} from 'lucide-react';
import { getAddress } from '../../utils/Company'

const Map: React.FC = () => {
    const address = getAddress();
    const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state_iso2code}, ${address.zipCode}`
    )}&output=embed`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state_iso2code}, ${address.zipCode}`
    )}`;
    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nossa Localização
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <iframe
                    src={mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Interativo"
                />
                <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inset-0 flex items-center justify-center text-gray-500 bg-black bg-opacity-0 hover:bg-opacity-10 transition"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="text-center pointer-events-none">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <p className="text-lg font-medium">Mapa Interativo</p>
                        <p className="text-sm">
                            {address.street}, {address.number} - {address.neighborhood}, {address.city}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Map;