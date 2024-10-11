import React from 'react';
import './produkt.css';
import xiaomi from './xiaomi.png';
import monitor from './monitor.png';
import dysk from './dysk.png';
import sluchawki from './sluchawki.png';
import rtx from './rtx.png';
import laptop from './laptop.png';
import plyta from './plyta.png';
import sound from './sound.png';
import dron from './dron.png';



const product = [
{id: 1, name: 'Xiaomi POCO X6 5G 12/256GB Black', price: "10999", image: xiaomi, description: "super telefon" },
{id: 2, name: 'MSI MAG401QR', price: "1749", image: monitor, description: "super cos" },
{id: 3, name: 'Samsung 2TB M.2 PCIe Gen5 NVMe 990 Evo', price: "529", image: dysk, description: "super dysk" },
{id: 4, name: 'Sony WH-1000XM5 Rozowy', price: "1699", image: sluchawki, description: "super sluchawki" },
{id: 5, name: 'MSI RTX 4070 Ti SUPER 16G', price: "3956", image: rtx, description: "ultra cos1" },
{id: 6, name: 'Lenovo IdeaPad Gaming 3-15 R5', price: "2654", image: laptop, description: "giga laptop" },
{id: 7, name: 'MSI MPG B550 GAMING PLUS', price: "495", image: plyta, description: "ultra plyta" },
{id: 8, name: 'Samsung HW-Q60C', price: "234", image: sound, description: "super nie wiem co" },
{id: 9, name: 'DJI NEO Fly More Combo', price: "8632", image: dron, description: "mega dron" },
];

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {product.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} ale={product.name} />
                    <h1>{product.name}</h1>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>

                </div>
            ))}
            
            
        </div>

    );
};

export default ProductGrid;