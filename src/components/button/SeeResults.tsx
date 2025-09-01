import React, { useState } from 'react';
import { getSocialValue } from '../../utils/Company'

const SeeResultsButton: React.FC = (classNames: string) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className={classNames}
                onClick={() => setOpen(true)}>
                <span>Resultado Online</span>
            </button>
            {open && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        minWidth: '300px',
                        textAlign: 'center'
                    }}>
                        <iframe
                            src="https://worklabweb.com.br/frame.php?Cliente=1605&i=1"
                            style={{ width: '100%', height: '400px', border: 'none' }}
                            title="Resultados Online"
                        />
                        <button onClick={() => setOpen(false)} className={classNames}><span>Fechar</span></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SeeResultsButton;