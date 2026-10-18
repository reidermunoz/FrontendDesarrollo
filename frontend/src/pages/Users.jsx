import ListUsers from "../components/users/UsersList";

export default function Users() {
    return (
        <div className="p-20">
            <h1 className="text-5xl font-bold mb-10">Pagina de Usuarios</h1>
            <ListUsers />
            <a className="text-blue-500 hover:underline" href="/" >
                Volver a la pagina principal
            </a>
        </div>
    )
}