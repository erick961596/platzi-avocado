import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Layout from '@components/Layout/Layout';
import Image from 'next/image';

import { GetStaticPaths, GetStaticProps } from 'next'
import ProductSummary from '@components/ProductSummary/ProductSummary';

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://platzi-avo.vercel.app/api/avo/`)
    const { data }: any = await response.json()
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
  //console.log(params.id);

        const res = await fetch(`https://platzi-avo.vercel.app/api/avo/${params?.id}`);
        const product = await res.json();
          // Pass post data to the page via props
        return { props: { product } }

}

function ProductItem({ product }: { product: any; }) {

  return (
    <div>
      {product == null ? null : <ProductSummary product={product} />}
    </div>
  );
}

export default ProductItem;