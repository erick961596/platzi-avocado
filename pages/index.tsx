import React, {useEffect, useState} from 'react';


import styles from "./index.module.css";
import AvocadoItem from '@components/avocadoItem';

function index() {

    const [productList, setproductList] = useState<any[]>([]);

    useEffect(() => {
        window.fetch('/api/avo')
            .then(res => res.json())
            .then(({ data, length }) => {
                setproductList(data);
                console.log(data);
            });
    }, []);
    return (
        <div className='p-lg-5 p-3'>
            <h1 className='text-center'>Bienvenido(a) a los aguacates</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <AvocadoItem productList={productList} />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default index;