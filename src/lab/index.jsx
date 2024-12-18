
/* import Button from '@/components/Button';
import { ErrorBoundary } from '@/core/utils'; */
import { useApi } from '@/hooks/useApi.hook';
import Card from '../components/Card';
import { useGlobalEvent } from './composable/useGlobalEvent.hook';
import { useNetworkStatus } from './composable/useNetworkStatus.hook';
import { useShortcut } from './composable/useShortcut.hook';

import './http'
import { useEffect } from 'react';

const Lab = () => {


    return (
        <>
        </>
    )
}


const LabTwo = () => {
    const api = useApi('products');

    useEffect(() => {
        api.read();
    }, []);

    return (
        <>
            {
                api.data.map(product => (
                    <Card key={product.id} 
                          title={product.title}
                          subheader={product.price} 
                          imageUrl={product.thumbnail}
                          avatar={product.rating}>
                        {product.description}
                    </Card>
                )) 
            }
        </>
    )
}

/* 
const ComponentWithError = () => {
    throw new Error('Error: Component Not Working');
} 
*/

const LabOld = () => {

    useGlobalEvent('click', event => console.log('clicked', event));

    useShortcut(' ', () => console.log('Ctrl + Space pressed'), 'ctrl');

    const status = useNetworkStatus();

    return (
        <>
            <Card title="Card Component">
                {status ? "Online" : "Offline"}
            </Card>
            {
                /*
                <Button>Active</Button>
                <Button level="secondary">Active</Button>
                <Button level="danger">Active</Button>
                <Button disabled>Disabled</Button>
                */
            }

            {
                /* 
                <ErrorBoundary fallback={<h1>Something went wrong!</h1>}>
                    <ComponentWithError />
                </ErrorBoundary> 
                */
            }

        </>
    )
}

export default Lab;