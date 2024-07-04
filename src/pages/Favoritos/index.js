import styles from "./Favoritos.module.css"

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritosContext } from "Context/Favoritos";

function Favoritos() {

    const { favorito } = useFavoritosContext()

    return (<>
        <Banner img="favoritos" color="#00BF63" />
        <Titulo>
            <h1>Mis videos favoritos</h1>
        </Titulo>

        <section className={styles.container}>
            {favorito.map(fav => {
                return <Card {...fav} key={fav.id} />
            })}
        </section>
    </>
    )
}

export default Favoritos;