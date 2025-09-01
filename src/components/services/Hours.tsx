import React from 'react';
import { getCompanyData } from '../../utils/Company';
import { Hour } from '../../model/hour';

const updateHours = (hours: Hour[]) => {
    const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    const weekendDays = ['Sábado', 'Domingo'];
    const weekHours = hours.filter(h => weekDays.includes(h.day));
    const weekendHours = hours.filter(h => weekendDays.includes(h.day));
    const allWeekEqual = weekHours.every(
        h => h.open === weekHours[0].open && h.close === weekHours[0].close
    );
    let simplifiedHours: Hour[] = [];
    if (allWeekEqual) {
        simplifiedHours.push({
            day: 'Segunda a Sexta',
            open: weekHours[0].open,
            close: weekHours[0].close,
        });
    } else {
        simplifiedHours = simplifiedHours.concat(weekHours);
    }
    simplifiedHours = simplifiedHours.concat(weekendHours);
    return simplifiedHours;
};

const Hours: React.FC = (classNames: string = 'text-gray-600') => {
  const hours: Hour[] = updateHours(getCompanyData()?.hours);
  return (
      <div className={classNames}>
          {hours.map((hour: Hour) => {
                if (hour.open && hour.close) {
                    return (
                        <p key={hour.day}>
                            {hour.day}: {hour.open} - {hour.close}
                        </p>
                    );
                } else {
                    return (
                        <p key={hour.day}>
                            {hour.day}: Fechado
                        </p>
                    );
                }
          })}
      </div>
  );
};

export default Hours;