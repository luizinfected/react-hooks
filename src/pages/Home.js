//context
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

//hooks
import HookUseState from './../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from './../components/HookUseMemo';




export const Home = () => {

    const { contextValue } = useContext(SomeContext)

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr/>
            <HookUseRef/>
            <HookUseCallback/>
            <HookUseMemo/>
        </div>
    )
}
