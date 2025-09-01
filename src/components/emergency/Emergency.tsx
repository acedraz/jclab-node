import React from 'react';
import { getSocialValue } from '../../utils/Company'

const Emergency: React.FC = (title: string = "Emergência 24h", content: string | null) => {
    if (!content) {
        content = `Em caso de emergência, entre em contato com a nossa equipe 24 horas por dia, 7 dias por semana. Estamos aqui para ajudar você em qualquer situação urgente. Ligue para ${getSocialValue('phone')} ou visite nossa unidade de emergência para atendimento imediato. Sua saúde e segurança são nossa prioridade máxima.`;
    }
    return (
        <div className="mt-6 p-4 bg-red-900 bg-opacity-50 rounded-lg border border-red-700">
            <h5 className="font-semibold text-red-300 mb-2">{title}</h5>
            <p className="text-red-200 text-sm">{content}</p>
        </div>
    );
};

export default Emergency;