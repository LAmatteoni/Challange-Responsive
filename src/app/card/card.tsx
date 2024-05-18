'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import "./../../../public/css/card.css"



const Card = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("http://localhost:8080/api/produtos");
            const jsonData = await response.json();
            setData(jsonData); 
        }

        fetchData();
    }, []);
    
    return(
        <>
            <div className="content">
                <div className="content-card">
                    {data.map((produto) => (
                    <div className="card" key={produto.id}>
                        <Image src={"/assets/" + produto.area_atuacao + ".svg"} width={200} height={100} alt={produto.area_atuacao}/>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p>R$ {produto.valor}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Card;