import { useForm } from "react-hook-form";
import { createUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";


export default function UserCreateForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        await createUser(data);
        navigate("/users");
        window.alert("Usuario creado exitosamente");
    });



    return (
        <div>
            <h1>Crear Usuario</h1>
            <div className="mt-10">
                <form className="flex flex-col gap-4 max-w-70" onSubmit={onSubmit}>
                    <input type="text" placeholder="Nombre de usuario"
                        {...register("username", { required: true })}
                    />
                    {errors.username && <p className="text-red-500">Este campo es requerido</p>}
                    <input type="email" placeholder="Correo electrónico"
                        {...register("email", { required: true })}
                    />
                    {errors.username && <p className="text-red-500">Este campo es requerido</p>}

                    <input type="password" placeholder="Contraseña"
                        {...register("password", { required: true })}
                    />
                    {errors.username && <p className="text-red-500">Este campo es requerido</p>}

                    <input type="number" placeholder="Telefono"
                        {...register("phone", { required: true })}
                    />
                    {errors.username && <p className="text-red-500">Este campo es requerido</p>}

                    <button type="submit">Crear Usuario</button>
                </form>
            </div>
        </div>
    )
}
