import { createContext } from 'react';
import type { Brawler } from '../types/types';


export interface BrawlersContextType {
    brawler: Brawler[];
    setBrawler: (value: Brawler[]) => void;
    favorites: Brawler[];
    addToFavorites: (value: Brawler) => void;
    removeFromFavorites: (id: number) => void;
}

const BrawlersContext = createContext<BrawlersContextType | null>(null);

export default BrawlersContext


