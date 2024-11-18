async function llamarAPI() {
    const res = await fetch('http://ulink-backnode.tssw.cl/api');
    const data = await res.json();

    return data;
}

async function renderPagina() {
    try {
        const datos = await llamarAPI();

        const contenedor = document.getElementById("contenedor");

        const {
            id,
            usuario,
            mensaje
        } = datos
        
        let p1 = document.createElement('p');
        p1.innerHTML = `id: ${id}`
        contenedor.append(p1);

        let p2 = document.createElement('p');
        p2.innerHTML = `usuario: ${usuario}`
        contenedor.append(p2);
        
        let p3 = document.createElement('p');
        p3.innerHTML = `mensaje: ${mensaje}`
        contenedor.append(p3);

    } catch (error) {
        const contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = `
            conexión fallida!
        `
    }
}

renderPagina();
