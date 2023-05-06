import React from 'react';
import { RoutePathsEnum } from 'shared/enums';
import HouseIcon from 'shared/assets/icons/House.svg';
import InfoIcon from 'shared/assets/icons/Info.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';

export interface SidebarLinkType {
    to: RoutePathsEnum
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string
}

export const SIDEBAR_LINKS: Array<SidebarLinkType> = [
    {
        to: RoutePathsEnum.MAIN,
        Icon: HouseIcon,
        text: 'widgets.sidebar.routes.main',
    },
    {
        to: RoutePathsEnum.ABOUT,
        Icon: InfoIcon,
        text: 'widgets.sidebar.routes.about',
    },
    {
        to: RoutePathsEnum.PROFILE,
        Icon: ProfileIcon,
        text: 'widgets.sidebar.routes.profile',
    },
];
