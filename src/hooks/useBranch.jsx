import { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import narraweenaData from '../data/narraweena.json';
import manlyData from '../data/manly.json';

const BranchContext = createContext(null);

const branches = {
    narraweena: narraweenaData,
    manly: manlyData,
};

export function BranchProvider({ children }) {
    const { branchId } = useParams();
    const branch = branches[branchId] || null;

    return (
        <BranchContext.Provider value={branch}>
            {children}
        </BranchContext.Provider>
    );
}

export function useBranch() {
    return useContext(BranchContext);
}

export function getBranchData(branchId) {
    return branches[branchId] || null;
}

export default useBranch;
