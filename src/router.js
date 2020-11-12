import VueRouter from 'vue-router';
import DadosForm from './components/DadosForm';
import Home from './components/Home';
 
 
export default new VueRouter({
    mode : 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: DadosForm
        },
    ]
});