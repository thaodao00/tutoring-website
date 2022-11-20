import Home from '~/pages/Home/Home';
import Class from '~/pages/Class/Class';
import Tutor from '~/pages/Tutor/Tutor';
import Login from '~/pages/Login/Login';

import Register from '~/pages/Register/Register';

import SearchTutor from '~/pages/SearchTutor/SearchTutor';
import RegisterAsTutor from '~/pages/RegisterAsTutor/RegisterAsTutor';
import ReferenceTuition from '~/pages/ReferenceTuition/ReferenceTuition';
import TutorDetail from '~/pages/TutorDetail/TutorDetail';
import Contacts from '~/pages/Contacts/Contacts';
import InfoUser from '~/pages/InforUser';
import InfoLogin from '~/pages/InfoLogin';
import ClassTeach from '~/pages/ClassTeach';
import ClassStudy from '~/pages/ClassStudy';
import config from '~/config';
import Contract from '~/pages/Contract/Contract';

const publicRoutes = [
    { path: '/', component: Home },
    { path: config.routes.home, component: Home },
    { path: config.routes.class, component: Class },
    { path: config.routes.tutor, component: Tutor },
    { path: config.routes.login, component: Login },
    { path: config.routes.contacts, component: Contacts },
    { path: config.routes.searchTutor, component: SearchTutor },
    { path: config.routes.registerAsTutor, component: RegisterAsTutor },
    { path: config.routes.ReferenceTuition, component: ReferenceTuition },
    { path: config.routes.contract, component: Contract },
    { path: config.routes.tutorDetail, component: TutorDetail },
    { path: config.routes.infoUser, component: InfoUser },
    { path: config.routes.infoLogin, component: InfoLogin },
    { path: config.routes.classTeach, component: ClassTeach },
    { path: config.routes.classStudy, component: ClassStudy },
    { path: config.routes.register, component: Register },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
