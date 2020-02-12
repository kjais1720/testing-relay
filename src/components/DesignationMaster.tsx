import {ActionItem} from '@saastack/components';
import {Layout} from '@saastack/layouts';
import {PubSub} from '@saastack/pubsub';
import namespace from '../namespace';
import {Trans} from '@lingui/macro';
import loadable from '@loadable/component';
import {AddOutlined} from '@material-ui/icons';
import {find} from 'lodash-es';
import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {DesignationMaster_designations} from '../__generated__/DesignationMaster_designations.graphql';
import DesignationList from './DesignationList';
import { Route, Routes, useNavigate } from '@saastack/router'

const DesignationAdd = loadable(() => import('./DesignationAdd'));
const DesignationDelete = loadable(() => import('./DesignationDelete'));
const DesignationDetail = loadable(() => import('./DesignationDetail'));
const DesignationEmptyState = loadable(() => import('./DesignationEmptyState'));
const DesignationUpdate = loadable(() => import('./DesignationUpdate'));

interface Props {
    parent: string,
    designations: DesignationMaster_designations,
    }

const DesignationMaster: React.FC<Props> = ({designations: {designations: {designation: designations}}, parent}) => {

    const navigate = useNavigate()
    
    const [tab, setTab] = React.useState<number>(0);
    const variables = {parent};

    const header = <Trans>Designations</Trans>;

    const actions: ActionItem[] = [
        {icon: AddOutlined, onClick: () => navigate('add'), title: <Trans>Add</Trans>},
    ];

    
    React.useEffect(() => {
        PubSub.publish(namespace.fetch, designations);
    }, [designations]);
    
    const col1 = !designations.length ? <DesignationEmptyState onAction={() => navigate('add')}/> : <DesignationList onItemClick={(id: string) => navigate(window.btoa(id || ''))} designations={designations}/>;

    return (
        <Layout  type="OneColumnLayout" actions={actions} header={header} col1={col1}>
            <Routes>
                <Route path="add" element={<DesignationAdd variables={variables}/>}/>
                <Route path=":id" element={<DesignationDetail tab={tab} onTabChange={setTab} designations={designations}/>}>
                    <Route path="update" element={<DesignationUpdate designations={designations}/>}/>
                    <Route path="delete" element={<DesignationDelete variables={variables}/>}/>
                </Route>
            </Routes>
        </Layout>
    )
};

export default createFragmentContainer(
    DesignationMaster,
    {
        designations: graphql`
            fragment DesignationMaster_designations on Query @argumentDefinitions(parent: {type: "String"}) {
                designations(parent: $parent) {
                    designation {
                        id
                        ...DesignationList_designations            
                        ...DesignationDetail_designations            
                        ...DesignationUpdate_designations
                    }
                }
            }
        `
    },
    );


