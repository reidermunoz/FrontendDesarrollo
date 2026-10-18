export default function Home() {
    return (
        <div className="p-20">
            <h1 className="text-5xl font-bold">Pagina principal</h1>
            <div className="flex col gap-5">
                <a className="text-blue-500 hover:underline" href="/users" >Usuarios</a>
                <a className="text-blue-500 hover:underline" href="/products">Productos</a>
            </div>

        </div>
    )
}