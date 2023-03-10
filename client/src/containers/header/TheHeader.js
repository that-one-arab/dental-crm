import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    CHeader,
    CToggler,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
} from '@coreui/react';

import TheHeaderDropdown from './TheHeaderDropdown';

const TheHeader = () => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebarState.sidebarShow);

    const toggleSidebar = () => {
        const val = [true, 'responsive'].includes(sidebarShow)
            ? false
            : 'responsive';
        dispatch({ type: 'set', sidebarShow: val });
    };

    const toggleSidebarMobile = () => {
        const val = [false, 'responsive'].includes(sidebarShow)
            ? true
            : 'responsive';

        dispatch({ type: 'set', sidebarShow: val });
    };

    return (
        <CHeader withSubheader>
            <CToggler
                inHeader
                className='ml-md-3 d-lg-none'
                onClick={toggleSidebarMobile}
            />
            <CToggler
                inHeader
                className='ml-3 d-md-down-none'
                onClick={toggleSidebar}
            />
            <CHeaderNav className='d-md-down-none mr-auto'>
                <CHeaderNavItem className='px-3'>
                    <CHeaderNavLink to='/anasayfa'>Ana Sayfa</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className='px-3'>
                    <CHeaderNavLink to='/patients/new'>
                        Yeni Hasta
                    </CHeaderNavLink>
                </CHeaderNavItem>
            </CHeaderNav>
            <CHeaderNav>
                <TheHeaderDropdown />
            </CHeaderNav>
        </CHeader>
    );
};

export default TheHeader;
