import hooks from '@saastack/hooks'
import {t} from '@lingui/macro';
import loadable from '@loadable/component'
import { AppsOutlined, SupervisorAccountOutlined } from '@material-ui/icons'
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
    hooks.settings.items.registerHook('designations', {
        component: DesignationPage,
        icon: SupervisorAccountOutlined,
        path: 'designations',
        title: t`Designations`,
        parent: 'masters',
    });
}

load();
