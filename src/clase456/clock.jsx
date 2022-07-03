import React, { useState, useEffect } from 'react';

const Clock = () => {
    const initialData = {
        fecha: new Date().toLocaleString(),
        edad: 0,
        Nombre: 'Martin',
        Apellido: 'San Jose'
    }
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setData({
                ...data,
                fecha: new Date().toLocaleString(),
                edad: data.edad + 1
            });
        }, 1000);
        return () => clearInterval(intervalID);
    });

    return (
        <div>
            Datos:
            <h2>
                Fecha : {data.fecha}
            </h2>
            <h2>
                Nombre : {data.Nombre}
            </h2>
            <h2>
                Apellido : {data.Apellido}
            </h2>
            <h4>
                Edad : {data.edad}
            </h4>
        </div>
    );
}

export default Clock;