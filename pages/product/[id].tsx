import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Layout from '@components/Layout/Layout';
import Image from 'next/image';

import { GetStaticPaths, GetStaticProps } from 'next'
import ProductSummary from '@components/ProductSummary/ProductSummary';

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:3000/api/avo`)
    const { data }: TAPIAvoResponse = await response.json()
    const paths = data.map( ({ id }) => ( { params: { id } } ) )
  
    return {
      // Statically generate all paths
      paths,
      // Display 404 for everything else
      fallback: false,
    }
  }


// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({params}) => {

        const res = await fetch(`http://localhost:3000/api/avo/${params?.id}`);
        const product = await res.json();
          // Pass post data to the page via props
        return { props: { product } }

}

const ProductItem = ( {product }:{product:Tproduct} ) => {

    return (
        <div>
        {product == null ? null : <ProductSummary product={product} />}
        </div>
    );
}

export default ProductItem;