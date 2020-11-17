import VueRouter from 'vue-router';
import DadosForm from './components/DadosForm';
import Home from './components/Home';
import HelloWorld from './components/HelloWorld';
import Filme from './components/Filme';
 
 
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
        {
            path: '/hello',
            name: 'hello',
            component: HelloWorld
        },
        {
            path: '/filme/:id',
            name: 'filme',
            component: Filme
        },
    ]
});