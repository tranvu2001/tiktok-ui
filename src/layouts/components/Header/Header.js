import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { MailBoxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Notify from '~/components/Notify';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language 123',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    // Handle logic
    const handleChangeMenu = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@davidbeckham',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const headerIcons = [
        {
            icon: <UploadIcon />,
            content: 'Upload video',
            delay: [0, 20],
        },
        {
            icon: <MessageIcon />,
            content: 'Tin nhắn',
            delay: [0, 20],
        },
        {
            icon: <MailBoxIcon />,
            content: 'Hộp thư',
            delay: [0, 20],
            quantity: 50,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                {headerIcons.map((headerIcon, index) => (
                                    <Tippy
                                        key={index}
                                        delay={headerIcon.delay}
                                        content={headerIcon.content}
                                        placement="bottom"
                                    >
                                        <div className={cx('wrapper-icon')}>
                                            <button className={cx('action-btn')}>{headerIcon.icon}</button>
                                            {headerIcon.quantity ? <Notify quantity={headerIcon.quantity} /> : ''}
                                        </div>
                                    </Tippy>
                                ))}
                                {/* <Tippy delay={[0, 20]} content="Tin nhắn" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 20]} content="Hộp thư" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <Notify quantity="50" />
                                        <MailBoxIcon />
                                    </button>
                                </Tippy> */}
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button type="primary" href="/">
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1653272836951046~c5_100x100.jpeg?x-expires=1670680800&x-signature=%2BGvvLGkqUErr7nyxdwon8LuXBy8%3D"
                                alt="Nguyen Van A"
                                fallback="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/450557d201a3555b6b110054f6deb37d~c5_100x100.jpeg?x-expires=1670731200&x-signature=%2BGoMucNqRMD1FVxGgKVqs2O2SQA%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
