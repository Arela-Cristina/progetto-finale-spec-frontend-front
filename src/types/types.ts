export type Brawler = {
    id: number,
    title: string, //nome brawler
    category: string, // rarity brawler
    image: string,
    role: string, // cecchino, tank, assasino ... 
    health: number, //salute brawler
    basicAttack: string, // basico
    super: string, // ulti
    gadgets: string[],
    starPower: string[],
    overdrive?: string // overdrive
};

