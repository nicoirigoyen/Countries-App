export const AZ = (a, b) => { return a.name > b.name ? 1 : -1 }
export const ZA = (a, b) => { return a.name < b.name ? 1 : -1 }
const Max = (a, b) => { return b.population - a.population }
const Min = (a, b) => { return a.population - b.population }

export const Ordering = (countries, orden) => {
    switch (orden) {
        case 'AZ': return countries.sort(AZ);
        case 'ZA': return countries.sort(ZA);
        case 'MAX': return countries.sort(Max);
        case 'MIN': return countries.sort(Min);
        default: return countries
    }
}