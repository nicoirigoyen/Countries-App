export const Filtros = (paises, continente, temporada, dificultad, duracion) => {

    if (continente) paises = paises.filter(reg => reg.region === continente)

    if (temporada || dificultad || duracion) {

        paises = paises.filter(pais => pais.activities && pais.activities.length > 0)

        if (temporada) paises = paises.filter(pais => Object.values(pais.activities).map(act => act.season).includes(temporada))

        if (dificultad) paises = paises.filter(pais => Object.values(pais.activities).map(act => act.dificultty).includes(parseInt(dificultad)))

        if (duracion) {
            let aux = parseInt(duracion)
            if (aux >= 1 && aux <= 4) paises = paises.filter(pais => Object.values(pais.activities).map(act => act.duration).includes(aux))
            else paises = paises.filter(pais => Object.values(pais.activities).some(elem => elem.duration >= 5));
        }
    }

    return paises
}
