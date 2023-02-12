import React from 'react';
import { CFooter } from '@coreui/react';

const TheFooter = () => {
    return (
        <CFooter fixed={false}>
            <div>
                <a
                    href='https://localhost:4000'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Elit Diş Kliniği
                </a>
                <span className='ml-1'> 2021 .</span>
            </div>
            <div className='mfs-auto'>
                <span className='mr-1'>Yazılım ve tasarım</span>
                <a
                    href='https://muhammed-aldulaimi.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Muhammed Al-Dulaimi
                </a>
                <span className='mr-1'>'e aittir</span>
            </div>
        </CFooter>
    );
};

export default React.memo(TheFooter);
