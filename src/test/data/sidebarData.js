import {
    Individual,
    Discover,
    ZingChart,
    Radio,
    Follow,
    NewMusic,
    TypeMusic,
    Top100,
    MV,
    Song,
    Playlist,
    Recently,
} from '../../components/Icons';

const sidebarData = [
    {
        listItem: [
            {
                id: 1,
                title: 'Cá nhân',
                icon: Individual,
                isPlay: true,
            },
            {
                id: 2,
                title: 'Khám phá',
                icon: Discover,
                isPlay: false,
            },
            {
                id: 3,
                title: '#zingchart',
                icon: ZingChart,
                isPlay: true,
            },
            {
                id: 4,
                title: 'Radio',
                icon: Radio,
                isPlay: true,
                isLive: true,
            },
            {
                id: 5,
                title: 'Theo dõi',
                icon: Follow,
                isPlay: false,
            },
            {
                id: 6,
                title: 'Nhạc mới',
                icon: NewMusic,
                isPlay: true,
            },
            {
                id: 7,
                title: 'Thể loại',
                icon: TypeMusic,
                isPlay: false,
            },
            {
                id: 8,
                title: 'Top 100',
                icon: Top100,
                isPlay: false,
            },
            {
                id: 9,
                title: 'MV',
                icon: MV,
                isPlay: false,
            },
        ],
    },
    {
        myMusic: [
            {
                id: 1,
                title: 'Bài hát',
                icon: Song,
                isPlay: true,
            },
            {
                id: 2,
                title: 'Playlist',
                icon: Playlist,
                isPlay: false,
            },
            {
                id: 3,
                title: 'Gần đây',
                icon: Recently,
                isPlay: false,
            },
        ],
    },
];

export default sidebarData;
