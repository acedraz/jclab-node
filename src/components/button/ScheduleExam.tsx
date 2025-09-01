import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getSocialValue } from '../../utils/Company'

const ScheduleExamButton: React.FC = (classNames: string, arrowClassNames: string | null) => {
    const handleClick = () => {
        const whatsapp = getSocialValue('whatsapp');
        console.log(whatsapp);
        if (whatsapp) {
            const url = `https://wa.me/${whatsapp.replace(/\D/g, '')}`;
            window.open(url, '_blank');
        }
    };
    return (
        <button
            className={classNames}
            onClick={handleClick}>
            <span>Agendar Exame</span>
            {arrowClassNames && <ArrowRight className={arrowClassNames} />}
        </button>
    );
};

export default ScheduleExamButton;