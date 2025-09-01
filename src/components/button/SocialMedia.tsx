import React, { useState } from 'react';
import {ArrowRight, Facebook, Instagram, Linkedin} from 'lucide-react';
import { getSocials } from '../../utils/Company'
import { Social } from '../../model/Social';

const getSocialIcon = (name: string, classNames: string = 'w-5 h-5') => {
    switch (name.toLowerCase()) {
        case 'facebook':
            return <Facebook className={classNames} />;
        case 'instagram':
            return <Instagram className={classNames} />;
        case 'linkedin':
            return <Linkedin className={classNames} />;
        default:
            return null;
    }
};

const SocialMedia: React.FC = (classNames: string = 'flex space-x-4', linkClassNames: string = 'w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300', iconClassNames: string | null) => {
    const socials = getSocials().filter(social => getSocialIcon(social.type) !== null);
    return (
        <div className={classNames}>
            { socials.map((social: Social) => {
                return (
                    <a target="_blank" href={social.value}  key={social.name} className={linkClassNames}>
                        {getSocialIcon(social.type, iconClassNames)}
                    </a>
                )
            })}
        </div>
    );
};

export default SocialMedia;