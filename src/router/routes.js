import Home from '@/views/Home'
import About from '@/views/About'
import Rules from '@/views/Rules'
import News from '@/views/News'
import Call from '@/views/Call'
import NewsDetail from '@/views/Detail'
import NewsDetail2 from '@/views/Detail2'
import NewsDetail3 from '@/views/Detail3'
import NewsDetail4 from '@/views/Detail4'
import NewsDetail5 from '@/views/Detail5'
import NewsDetail6 from '@/views/Detail6'
import NewsDetail7 from '@/views/Detail7'
import NewsDetail8 from '@/views/Detail8'
import NewsDetail9 from '@/views/Detail9'
import NewsDetail10 from '@/views/Detail10'
export default [
    {
        path:'/home',
        component:Home,
        name:'Home'
    },
    {
        path:'/about',
        component:About,
        name:'About'
    },
    {
        path:'/rules',
        component:Rules,
        name:'Rules'
    },
    {
        path:'/news',
        component:News,
        name:'News'
    },
    {
        path:'/call',
        component:Call,
        name:'Call'
    },
    {
        path:'/newsdetail',
        component:NewsDetail,
        name:'Detail'
    },
    {
        path:'/newsdetail2',
        component:NewsDetail2,
        name:'Detail2'
    },
    {
        path:'/newsdetail3',
        component:NewsDetail3,
        name:'Detail3'
    },
    {
        path:'/newsdetail4',
        component:NewsDetail4,
        name:'Detail4'
    },
    {
        path:'/newsdetail5',
        component:NewsDetail5,
        name:'Detail5'
    },
    {
        path:'/newsdetail6',
        component:NewsDetail6,
        name:'Detail6'
    },
    {
        path:'/newsdetail7',
        component:NewsDetail7,
        name:'Detail7'
    },
    {
        path:'/newsdetail8',
        component:NewsDetail8,
        name:'Detail8'
    },
    {
        path:'/newsdetail9',
        component:NewsDetail9,
        name:'Detail9'
    },
    {
        path:'/newsdetail10',
        component:NewsDetail10,
        name:'Detail10'
    },
    {
        path:'*',
        redirect:'/home',
    }
]