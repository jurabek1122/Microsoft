import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import redirectToCheckout from '../components/stripe';
import toast from 'react-hot-toast';

const ShoppingCard = ({ card, setCard, setAfterPromoSum, afterPromoSum, setOnlypromo, onlypromo }) => {

    // const handleCheckout = async () => {
    // const stripe = await getStripe();

    // const response = await fetch('/components/stripe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(card),
    // });

    // if(response.statusCode === 500) return;
    
    // const data = await response.json();

    // toast.loading('Redirecting...');

    // stripe.redirectToCheckout({ sessionId: data.id });
    // }

    const plus = (_id) => {
        const productList = [...card];
        productList.forEach((item) => {
            if(item.id === _id) {
                item.quantity++
            }
        })
        setCard(productList)
    }

    const minus = (_id) => {
        const productList = [...card];
        productList.forEach((item, index) => {
            if(item.id === _id) {
                if(item.quantity > 1) {
                    item.quantity--
                    } else {
                    productList.splice(index, 1)
                    }
            }
        })
        setCard(productList)
    }

    const remove = (_id) => {
        const productList = [...card];
        productList.forEach((item, index) => {
            if(item.id === _id) {
                item.quantity = 0;
                productList.splice(index, 1)
                }
            }
        )
        setCard(productList)
    }

    const [sum, setSum] = useState(0)
    const [promo, setPromo] = useState('')
    

    useEffect(() => { 
        let total = 0;
        for(var i = 0; i < card.length; i++) {
            total+= card[i].skidka_narxi*card[i].quantity;
        }
        setSum(total);
        setAfterPromoSum(total)
        const getPromoSum = (sum) => {
            if(promo === '123') {
                setOnlypromo(sum / 10)
                setAfterPromoSum(sum = sum - (sum/10))
            } else {
                setOnlypromo(0)
            }
        }
    }, [card])

    const getPromoSum = (sum) => {
        if(promo === '123') {
            setOnlypromo(sum / 10)
            setAfterPromoSum(sum = sum - (sum/10))
        } else {
            setOnlypromo(0)
        }
    }

    const goToPay = (_id) => {
        const productList = [...card];
        productList.forEach((item) => {
            if(item.id === _id) {
                item.soni = item.soni - item.quantity
            }
        })
        setCard([])
    }

    console.log("card", card)
    return (
        <div className='shopping-card'>
            <div className='container'>
            <h1>Sizning savatchangiz</h1>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={8} className='shop-items'>
                    {
                        card.map((item) => {
                            return (
                                <div className='shop-card'>
                                    <div className='shop-img'>
                                        <img src={item.img} alt='product img' />
                                    </div>
                                    <div className='shop-infos'>
                                        <span className='shop-nomi'>{item.name}</span>
                                        <span className='shop-narxi'>{item.skidka_narxi * item.quantity}</span>
                                        <div className='shop-btn'>
                                            <button onClick={() => minus(item.id)} className='quantity-btn'>-</button>
                                            <span className='quantity'>{item.quantity}</span>
                                            <button onClick={() => plus(item.id)} className='quantity-btn'>+</button>
                                            <button onClick={() => remove(item.id)} className='delete-btn'>x</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} md={4}>
                    <div>
                        <div className="promo">
                            <input onChange={(e) => setPromo(e.target.value)} className='promo-input' type='text' placeholder='Promo kod' /> 
                            <button onClick={ () => getPromoSum(sum)} className="btn buy-btn mx-3">QO`LLASH</button>
                        </div>
                        <div className='total'>
                            <Grid container>
                                <Grid item sm="6">
                                    <p>Mening <br /> buyurtmam</p>
                                </Grid>
                                <Grid item sm="6">
                                    <p>{sum} so`m</p>
                                </Grid>
                            </Grid>
                            <p>Kod bo'yicha chegirma {onlypromo} so’m</p>
                            <p className='bold'>Umumiy narx {afterPromoSum} so’m</p>
                        </div>
                        <Link to='/payment'>
                            <button className="btn buy-btn mb-3">DAVOM ETISH</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default ShoppingCard;