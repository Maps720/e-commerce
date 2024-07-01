import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../../datasets/products';
import { ChevronDown, CircleX, Footprints, Heart, MapPin, Minus, Plus, Share2, Star, StarHalf, Tag, Tags, Truck } from 'lucide-react';
import { useAppContext } from '../../../app_context/context';

export default function Items() {
    const { itemId } = useParams();
    const { sizeMidSmall, sizeHightSmall } = useAppContext();

    // finding the product details in the dataset
    const product = products.find(p => p.id === parseInt(itemId, 10));

    // selected item by the user
    const [cartItem, setCartItem] = useState({
        productId: itemId,
        formFactor1: product ? (product.forms.formFactor1 ? [product.forms.formFactor1.name, null] : null) : null,
        formFactor2: product ? (product.forms.formFactor2 ? [product.forms.formFactor2.name, null] : null) : null,
        units: 1,
        price: product ? product.price : 0,
        initialPrice: 0,
        image: product ? product.image[0] : null,
        delivery: true
    });

    const [available, setAvailable] = useState([]);
    const [availableForm1, setAvailableForm1] = useState([]);

    /**
     * Calculates the original price before discount.
     * 
     * @param {number} discountPercentage - The discount percentage.
     * @param {number} finalPrice - The final price after discount.
     * @returns {number} - The original price before discount.
     */
    const getOriginalPrice = useCallback((discountPercentage, finalPrice) => {
        if (discountPercentage >= 100) {
            throw new Error('Discount percentage must be less than 100');
        }
        if (discountPercentage < 0 || finalPrice < 0) {
            throw new Error('Discount percentage and final price must be non-negative');
        }
        const originalPrice = (finalPrice / (1 - (discountPercentage / 100))).toFixed(2);
        setCartItem(prevItem => ({
            ...prevItem,
            initialPrice: originalPrice
        }));
    }, []);

    // get the maximum units a customer can purchase
    function getMaxUnitsToPurchase(unitsLeft) {
        if (unitsLeft < 20) {
            return 1;
        } else if (unitsLeft >= 20 && unitsLeft <= 40) {
            return 3;
        } else if (unitsLeft > 40 && unitsLeft <= 500) {
            // Dynamic increment: 1 unit per 10 units in stock
            return Math.ceil((unitsLeft - 30) / 10) + 3;
        } else {
            return 100;
        }
    }

    // function that renders the rating stars
    const renderStars = () => {
        const stars = [];
        for (let i = product.reviews.rating; i > 0; i--) {
            if (i > 1) {
                stars.push(<Star key={i} size={18} />);
            } else if (i >= 0.5) {
                stars.push(<StarHalf key={i} size={18} />);
            }
        }
        return stars;
    };

    const getAvailableFormFactor = useCallback((formNumber, objectNumber) => {
        if (product) {
            if (formNumber === 1 && product.forms.formFactor1.objects[`object${objectNumber}`]) {
                const pieces = product.forms.formFactor1.objects[`object${objectNumber}`].pieces;
                setAvailable(Object.values(pieces)
                    .filter(piece => piece.units > 0)
                    .map(piece => piece.name));
            } else if (formNumber === 0) {
                // getting initial form-1's available from the number of units each has
                for (let i = 1; product.forms.formFactor1.objects[`object${i}`]; i++) {
                    const form = product.forms.formFactor1.objects[`object${i}`];
                    const name = form.name;
                    for (let j = 1; form.pieces[`form${j}`]; j++) {
                        const units = form.pieces[`form${j}`].units;
                        if (units > 0) {
                            const index = i - 1;
                            setAvailableForm1(prevState => {
                                const newState = [...prevState];
                                newState[index] = name;
                                return newState;
                            });
                            break;
                        }
                    }
                }
            }
        }
    }, [product]);

    // change price according to form factor selected
    const changeFormFactor = (formFactorEffect, formNumber, price, name, image, index) => {
        if (formFactorEffect) {
            setCartItem(prevItem => ({
                ...prevItem,
                price: price
            }));
            getOriginalPrice(product.discount.retail.percentage, price);
        }

        const objectNumber = index + 1;

        if (formNumber === 1) {
            setCartItem(prevItem => ({
                ...prevItem,
                formFactor1: [cartItem.formFactor1[0], name]
            }));
            changeImage(image);
            getAvailableFormFactor(formNumber, objectNumber);
        } else {
            setCartItem(prevItem => ({
                ...prevItem,
                formFactor2: [cartItem.formFactor2[0], name]
            }));
            getAvailableFormFactor(formNumber, objectNumber);
        }
    };

    // change method of delivery
    const changeDelivery = (bool) => {
        setCartItem(prevItem => ({
            ...prevItem,
            delivery: bool
        }));
    };

    // increase or reduce the cartItem units
    const changeCartItemUnits = (action) => {
        // true = addition, false = subtraction
        if (action) {
            const newUnits = cartItem.units + 1;
            setCartItem(prevItem => ({
                ...prevItem,
                units: newUnits
            }));
        } else {
            const newUnits = cartItem.units - 1;
            setCartItem(prevItem => ({
                ...prevItem,
                units: newUnits
            }));
        }
    };

    // change the item image when user clicks on another image of the item
    const changeImage = (imageSelection) => {
        setCartItem(prevItem => ({
            ...prevItem,
            image: imageSelection
        }));
    };

    // holds the form factor details of an item
    const formFactorObjects = Object.values(product ? product.forms.formFactor1.objects : [null]);
    const formFactorObjects2 = Object.values(product ? (product.forms.formFactor2 ? product.forms.formFactor2.objects : [null]) : [null]);

    useEffect(() => {
        if (product) {
            getOriginalPrice(product.discount.retail.percentage, cartItem.price);
            getAvailableFormFactor(0, 0);
        }
    }, [product, getOriginalPrice, getAvailableFormFactor, cartItem.price]);

    // Memoize the getAvailableFormFactor function
    const memoizedGetAvailableFormFactor = useCallback(
        (param1, param2) => {
            getAvailableFormFactor(param1, param2);
        },
        [getAvailableFormFactor]
    );

    useEffect(() => {
        memoizedGetAvailableFormFactor(0, 0);
    }, [memoizedGetAvailableFormFactor]);

    if (!product) {
        return (
            <div className='flex flex-1 h-full w-screen justify-center items-center'>
                <div className='flex bg-white h-40 w-80 rounded-md shadow-lg border-[1px] justify-center items-center font-bold text-lg'>
                    <h1>Product not found</h1>
                    <CircleX className='ml-2 text-red-500' />
                </div>
            </div>)
    }



    return (
        <div className='flex flex-1 flex-col overflow-y-scroll bg-white h-full w-full pb-2 text-sm'>
            <div className='flex w-full flex-col-reverse md:flex-row'>
                <div className='flex flex-initial w-full md:w-[430px] flex-col justify-center overflow-hidden items-center lg:justify-end 
                mt-4 md:mt-0 md:pt-6'>
                    <img
                        className='flex w-[60%] md:w-[80%]'
                        src={`/images/${cartItem.image}`}
                        alt={`${product.name}`} />
                    <div className="flex w-full overflow-x-scroll mt-2">
                        {product.image.map((url, index) => (
                            <img
                                key={index}
                                className='flex flex-initial rounded-md w-[70px] m-1 border-[1.5px] boder-gray-400'
                                src={`/images/${url}`}
                                alt={`${product.name}`}
                                onClick={() => { changeImage(url) }} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-1 flex-col lg:flex-row pt-2">
                    <div className='flex flex-1 px-2 flex-col'>
                        <div className='w-full flex flex-col border-b-[1.5px] md:border-b-[2px] pb-1 border-gray-300'>
                            <h1 className='text-lg md:text-xl text-center font-[500] pb-3'>
                                {product.name}
                            </h1>
                            <p>{product.description}</p>
                        </div>
                        <div className='flex items-center mt-1'>
                            <div className='flex flex-col'>
                                <div className='flex w-full justify-end'>
                                    <div className='flex justify-end'>
                                        <span className='self-center'>Left:</span>
                                    </div>
                                    <div className='flex pl-2'>
                                        <span className='text-start'>{product.units.left}</span>
                                    </div>
                                </div>
                                <div className='flex w-full justify-end'>
                                    <div className='flex justify-end'>
                                        <span className='self-center'>Sold:</span>
                                    </div>
                                    <div className='flex pl-2'>
                                        <span className='text-start'>{product.units.sold}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-1 justify-center items-center p-2 py-1 pr-0'>
                                <div className='bg-gradient-to-r from-green-500 to-green-300 flex w-full items-center justify-between 
                                rounded-md p-1 text-green-800 font-[500] cursor-pointer active:from-green-600 active:to-green-400'>
                                    <div className='flex items-center'>
                                        <Tag className='p-1' />
                                        <span>Coupon & Discount</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <div className='flex w-full justify-between rounded-md p-3 bg-gradient-to-r from-red-600 to-red-400'>
                                <div className="flex flex-initial ml-4">
                                    <p className='text-white font-[500]'>Save <span className='ml-2 text-yellow-300'>
                                        K {(cartItem.initialPrice - cartItem.price).toFixed(2)}</span></p>
                                </div>
                                <div className="flex flex-initial justify-end w-32 mr-4">
                                    <p className='text-white font-[500]'>{product.discount.retail.percentage > 10 && 'Massive '}Discount!</p>
                                </div>
                            </div>
                            <div className='flex flex-col w-full p-1 text-xs md:text-sm'>
                                <div className='flex w-full justify-between'>
                                    <div className='flex items-center'>
                                        <span className='text-md md:text-lg font-bold'>
                                            K <span className=' text-xl md:text-3xl'>{cartItem.price} </span>
                                            <span className='line-through'>K{cartItem.initialPrice}</span><span className='text-xs md:text-md text-red-500'> -{product.discount.retail.percentage}%</span>
                                        </span>
                                    </div>
                                    <span className='text-red-500 h-full flex items-center'>
                                        End: {product.discount.retail.valid}
                                    </span>
                                </div>
                                {product.discount.wholesale && (
                                    <div className='flex w-full justify-start items-center'>
                                        <div className='flex rounded-sm bg-red-300 pr-1 items-center text-red-600'>
                                            <Tags className='p-1' />
                                            <span>Wholesale</span>
                                        </div>
                                        <span className='ml-2 text-red-700'> for {product.discount.wholesale.minimum}+ pieces, extra {product.discount.wholesale.percantage}% discount!</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center mt-2'>
                            <div className="flex">
                                {product.reviews.count > 0 && renderStars()}
                            </div>
                            <div className="flex ml-2">
                                <span className='font-[500]'>{product.reviews.rating}</span>
                            </div>
                            <div className="flex ml-2">
                                <span className='font-[300]'>{product.reviews.count} Reviews</span>
                            </div>
                        </div>
                        {cartItem.formFactor1 && (
                            <div className='flex flex-col mt-2 font-[500]'>
                                <div className="flex">
                                    <span>{cartItem.formFactor1[0]}: <span>{cartItem.formFactor1[1]}</span></span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {formFactorObjects.map((object, index) => (
                                        object && (
                                            <button key={index} className={`flex py-2 rounded-sm mr-1 justify-center items-center hover:bg-gray-100 border-[1px] 
                                            active:bg-gray-200 ${object.name.length > 5 ? 'px-2' : 'w-16'} border-gray-400 ${cartItem.formFactor1[1] === object.name && '!border-black bg-gray-100'}
                                            ${availableForm1.includes(object.name) ? null : 'opacity-30 cursor-not-allowed'}`}
                                                onClick={() => changeFormFactor(product.forms.formFactor1.priceEffect, 1, object.price, object.name, object.image, index)}
                                                type='button' disabled={!availableForm1.includes(object.name)}>
                                                <span>{object.name}</span>
                                            </button>
                                        )
                                    ))}
                                </div>
                            </div>
                        )}

                        {cartItem.formFactor2 && (
                            <div className='flex flex-col mt-2 font-[500]'>
                                <div className="flex">
                                    <span>{cartItem.formFactor2[0]}: <span>{cartItem.formFactor2[1]}</span></span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {formFactorObjects2.map((object, index) => (
                                        object && (
                                            <button key={index} className={`flex py-2 rounded-sm mr-1 justify-center items-center hover:bg-gray-100 border-[1.5px] 
                                            active:bg-gray-200 ${object.name.length > 6 ? 'px-2' : 'w-16'} border-gray-400 ${cartItem.formFactor2[1] === object.name && '!border-black bg-gray-100'}
                                            ${available.includes(object.name) ? null : 'opacity-30 cursor-not-allowed'}`}
                                                onClick={() => changeFormFactor(product.forms.formFactor2.priceEffect, 2, object.price, object.name, null)}
                                                type='button' disabled={!available.includes(object.name)}>
                                                <span>{object.name}</span>
                                            </button>
                                        )
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full mt-4 md:mt-4 lg:w-[250px] md:px-2 lg:px-0 text-xs md:text-sm">
                        <div className='flex w-full p-1 md:border-2 border-[1px] border-gray-300 lg:shadow-md lg:rounded-md rounded-sm'>
                            <div className="flex flex-col w-full p-1 px-2 md:p-2">
                                <div className='flex items-center py-3 border-gray-300 border-b-[1.5px]'>
                                    <MapPin className='p-1' />
                                    <span>Location of product</span>
                                </div>
                                <div className='flex flex-col items-center justify-center mt-2 py-3 border-gray-300 border-b-[1.5px]'>
                                    <div className='flex w-full'>
                                        <button className='flex justify-between items-center p-2 mx-2 rounded-sm shadow-sm hover:bg-gray-100 border-[1.5px] border-gray-400
                                        active:bg-gray-200'
                                            type='button' onClick={() => { changeDelivery(true) }}>
                                            <Truck className='p-1' />
                                            <span>Delivery</span>
                                        </button>
                                        <button className='flex justify-between items-center p-2 mx-2 rounded-sm shadow-sm hover:bg-gray-100 border-[1.5px] border-gray-400
                                        active:bg-gray-200'
                                            type='button' onClick={() => { changeDelivery(false) }}>
                                            <Footprints className='p-1' />
                                            <span>Pick Up</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col w-full mt-3">
                                        {cartItem.delivery ? (
                                            <>
                                                <span><span className='font-[500]'>Cost: </span>K {180 * cartItem.units}</span>
                                                <span><span className='font-[500]'>ETA: </span>Jul 23, 2024</span>
                                            </>
                                        ) : (
                                            <>
                                                <span><span className='font-[500]'>Cost: </span>K0</span>
                                                <p>Item{cartItem.units > 1 && 's'} is available for pick up.</p>
                                            </>
                                        )}

                                    </div>
                                </div>
                                <div className='flex flex-col w-full py-3'>
                                    <span>Quantity</span>
                                    <div className='flex mt-1 h-[20px] items-center'>
                                        <button className={`flex bg-gray-100 rounded-full mx-2 active:bg-gray-200 ${cartItem.units < 2 && 'cursor-not-allowed'}`}
                                            onClick={() => { changeCartItemUnits(false) }} type='button' disabled={cartItem.units < 2} >
                                            <Minus className='p-[5px]' />
                                        </button>
                                        <span className='font-[500] w-4 flex justify-center'>{cartItem.units}</span>
                                        <button className={`flex bg-gray-100 rounded-full mx-2 active:bg-gray-200 
                                        ${getMaxUnitsToPurchase(product.units.left) === cartItem.units ? 'cursor-not-allowed' : null}`} onClick={() => { changeCartItemUnits(true) }}
                                            disabled={getMaxUnitsToPurchase(product.units.left) === cartItem.units}>
                                            <Plus className='p-[5px]' />
                                        </button>
                                    </div>
                                    <span className='text-red-500 mt-1'>{getMaxUnitsToPurchase(product.units.left)} pieces max per customer.</span>
                                    <div className='flex flex-col justify-center items-center mt-2'>
                                        <div className="flex mt-2">
                                            <span className='text-lg font-[500]'>Total ZMW{cartItem.price + (cartItem.delivery ? (180 * cartItem.units) : 0)}</span>
                                        </div>
                                        <div className='flex justify-center items-center bg-red-400 rounded-full w-full p-2 hover:bg-red-500 active:bg-red-600 
                                        transition-all'>
                                            <span className='text-white font-[500]'>Buy Now</span>
                                        </div>
                                        <div className='flex justify-center items-center bg-red-100 rounded-full w-full p-2 mt-3 hover:bg-rose-300 active:bg-rose-400 
                                        transition-all'>
                                            <span className='text-red-800 font-[500]'>Add to Cart</span>
                                        </div>
                                        <div className="flex w-full mt-3">
                                            <div className="flex flex-1 p-2 justify-center items-center border-[1px] border-black hover:bg-gray-200 active:bg-gray-300
                                            transition-all rounded-full mr-2">
                                                <Share2 className='p-1' />
                                                <span>Share</span>
                                            </div>
                                            <div className="flex w-16 p-2 justify-center items-center border-[1px] border-black hover:bg-gray-200 active:bg-gray-300
                                            transition-all rounded-full">
                                                <Heart className='p-1' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mt-4 pl-2">
                <h2 className='my-2 text-lg font-[500] ml-2'>Related Items</h2>
                <div className='flex mt-2 wrap'>
                    {products.map((related, index) => (
                        related.category === product.category && related.id !== product.id && (
                            <Link key={index}
                                className={`flex flex-col rounded-md shadow-md ${sizeMidSmall || sizeHightSmall ? 'w-32 h-32' : 'w-44 h-44'} 
                                        flex-none bg-white justify-end mr-2 cursor-pointer overflow-hidden bg-image-wrapper`}
                                style={{ '--background-image': `url(/images/${related.image[0]})` }}
                                to={`/items/${related.id}`}
                                onClick={() => {
                                    setCartItem({
                                        productId: related.id,
                                        formFactor1: [related.forms.formFactor1.name, null],
                                        formFactor2: [related.forms.formFactor2.name, null],
                                        units: 1,
                                        price: related.price,
                                        initialPrice: 0,
                                        image: related.image[0],
                                        delivery: true
                                    })
                                }}
                            >
                                <div className={`flex flex-col p-2 py-0 z-10 font-[500] text-white bg-[rgba(0,0,0,0.4)]`}>
                                    <span>{related.name}</span>
                                    <div className='flex justify-between'>
                                        <span>k{related.price}</span>
                                        <span>pcs: {related.piecesLeft}</span>
                                    </div>
                                </div>
                            </Link>
                        )))}
                </div>
            </div>
        </div >
    )
}
