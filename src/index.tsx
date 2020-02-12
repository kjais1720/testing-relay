import hooks from '@saastack/hooks'
import {t} from '@lingui/macro';
import loadable from '@loadable/component'
import {AppsOutlined} from '@material-ui/icons';
import {PubSub} from '@saastack/pubsub';
import namespace from './namespace';

PubSub.register(Object.values(namespace));

const DesignationPage = loadable(() => import('./pages/DesignationPage'));

let loaded = false;

const load = () => {
    if (loaded) {
        return
    }
    loaded = true;
    hooks.app.subApp.registerHook('designation', {
        component: DesignationPage,
        icon: AppsOutlined,
        path: '/designations',
        title: t`Designations`,
    });
    }

load();
