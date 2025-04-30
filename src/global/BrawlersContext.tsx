import { createContext } from 'react';
import type { Brawler } from '../types/types';


export interface BrawlersContextType {
    brawler: Brawler[];
    setBrawler: (brawler: Brawler[]) => void;
}

const BrawlersContext = createContext<BrawlersContextType | null>(null);

export default BrawlersContext


