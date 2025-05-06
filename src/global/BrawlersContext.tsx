import { createContext } from 'react';
import type { Brawler } from '../types/types';


export interface BrawlersContextType {
    brawler: Brawler[];
    setBrawler: (value: Brawler[]) => void;
    favotites: Brawler[];
    addToFavorites: (value: Brawler[]) => void;
    removeFromFavorites: (idValue: number) => void;
}

const BrawlersContext = createContext<BrawlersContextType | null>(null);

export default BrawlersContext


