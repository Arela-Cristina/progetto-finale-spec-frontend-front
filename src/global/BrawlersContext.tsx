import { createContext } from 'react';
import type { Brawler } from '../types/types';


export interface BrawlersContextType {
    brawlers: Brawler[];
    setBrawlers: (brawlers: Brawler[]) => void;
}

const BrawlersContext = createContext<BrawlersContextType | undefined>(undefined);

export default BrawlersContext
