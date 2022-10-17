import Home from '~/pages/Home/Home';
import Class from '~/pages/Class/Class';
import Tutor from '~/pages/Tutor/Tutor';
import Login from '~/pages/Login/Login';
import Posts from '~/pages/Posts/Posts';
import Contacts from '~/pages/Contacts/contacts';
import SearchTutor from '~/pages/SearchTutor/SearchTutor';
import RegisterAsTutor from '~/pages/RegisterAsTutor/RegisterAsTutor';
import ReferenceTuition from '~/pages/ReferenceTuition/ReferenceTuition';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/class', component: Class },
    { path: '/tutor', component: Tutor },
    { path: '/login', component: Login },
    { path: '/posts', component: Posts },
    { path: '/contacts', component: Contacts },
    { path: '/searchTutor', component: SearchTutor },
    { path: '/register-as-tutor', component: RegisterAsTutor },
    { path: '/reference-tuition', component: ReferenceTuition },
    { path: '/contract', component: Contacts },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
