export type Brawler = {
    title: string, //nome brawler
    category: string, // rarity brawler
    role: string, // cecchino, tank, assasino ... 
    health: number, //salute brawler
    basicAttack: string, // basico
    super: string, // ulti
    gadgets: string[],
    starPower: string[],
    overdrive?: string // overdrive
};

