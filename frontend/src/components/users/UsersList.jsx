import { useEffect, useState } from "react";
import { getUsers } from "../../api/userApi";


export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    return (

        <div>
            <h1 className="text-2xl font-bold mb-5">Lista de Usuarios</h1>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Nombre</th>
                            <th className="border px-4 py-2">Telefono</th>
                            <th className="border px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.username}</td>
                                <td className="border px-4 py-2">{user.phone}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td>Acciones</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-5">
                    <a href="/create-user" className="bg-black text-white px-4 py-2 rounded">Crear Usuario</a>
                </div>


            </div>

        </div>
    )
}