import Home from '../client/pages/homePage';
import Student, {loadStudentData} from '../client/pages/studentPage';
import Students, {loadAllStudentsData} from '../client/pages/studentsPage';
import Login from '../client/pages/loginPage';
import App from '../client/app';

export default [
    {
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/student',
                component: Student,
                loadData: loadStudentData
            },
            {
                path: '/students',
                component: Students,
                loadData: loadAllStudentsData
            }
        ]
    }
    
];