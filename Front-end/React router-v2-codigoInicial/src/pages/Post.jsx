import { useState, useEffect } from "react";
import "../assets/css/componentes/card.css";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";

const Post = ({ url }) => {
    const [post, setPosts] = useState({})

    const { id } = useParams() /* ESTRUCTURAR EL id */

    const navigate = useNavigate() /*con el rect d useNavigate nos ayuda a crear una ruta para navegar, ejemplo la ruta de not found */

    useEffect(() => {
        buscar(`/posts/${id}`, setPosts).catch(() => { /* El catch captura el error de la página y recibe una callback para podamos redirigir la página "not-found" utilizando el useNavigation de React Router. */
            navigate("/not-found") /* envío la url a la q deseo redigir */
        })
    }, [id])

    return(
        <main className = "container flex flex--center">
            <article className = "card post">
                <h2 className = "post-card__title">{post.title}</h2>
                <p className = "text__card">{post.body}</p>
            </article>
        </main>
    )
}
export default Post;