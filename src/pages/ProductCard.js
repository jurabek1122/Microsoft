import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { HiOutlineShoppingCart } from 'react-icons/hi';


const ProductCard = ({ phones, addCart }) => {

    const [productInfo, setProductInfo] = useState([])
    const params = useParams()


    return (
        <div>
            {
                phones.map((item) => {
                    return (
                        <div>
                            { item.id === params.id && (
                                <div className='product-card container'>
                                <h2>{item.name}</h2>
                                <Grid container spacing={3} style={{width: '100%'}}>
                                    <Grid item md={6} xs={12} className='product-card-img' >
                                        <img src={item.img} />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <h4>Mahsulot haqida</h4> <br />
                                        <h5>Ishlab chiqaruvchi: {item.company}</h5> <br />
                                        <h5>Narxi: {item.skidka_narxi} so`m</h5> <br />
                                        <h5>Mahsulot miqdori: {item.soni}</h5> <br />
                                        <button className='card-btn' onClick={() => addCart(item)}><HiOutlineShoppingCart /> Savatchaga</button>
                                    </Grid>
                                </Grid>
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductCard;