import React, { useState } from 'react'
import { useAppContext } from '../../../app_context/context'
import axios from 'axios'
import { serverName } from '../../../server/serverName'
import { Inbox, Minus, Plus, X } from 'lucide-react'

export default function Product() {
    const { sizeSmall } = useAppContext()

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [units, setUnits] = useState(1);
    const [images, setImages] = useState([]);

    const [formName, setFormName] = useState('')
    const [formPrice, setFormPrice] = useState(0)
    const [formImage, setFormImage] = useState(null)
    const [formUnits, setFormUnits] = useState([1])

    const [formFactor1, setFormFactor1] = useState({
        active: false,
        name: null,
        priceEffect: null,
        objects: {
            object1: {
                name: '',
                price: 0,
                image: null
            }
        }
    })

    const [formFactor2, setFormFactor2] = useState({
        active: false,
        name: null,
        objects: {
            object1: {
                name: '',
                price: 0,
                image: null,
                units: {}
            }
        }
    })

    const [showFormFactor, setShowFormFactor] = useState({
        active: false,
        form: null,
        option: null
    })

    const [wholesale, setWholesale] = useState({
        discount: '',
        minimum: null,
    })

    const [retail, setRetail] = useState({
        discount: '',
        valid: null,
    })

    const [loading, setLoading] = useState(false);
    const [responded, setResponded] = useState(false);
    const [message, setMessage] = useState('')

    // Adding an object in objects
    const addObject = (formfactor) => {
        // maximum of 10 entries for the first form factor
        if (Object.keys(formfactor.objects).length <= 10) {
            const newObjectKey = `object${Object.keys(formfactor.objects).length + 1}`;
            const add2Form = formfactor === formFactor1 ? setFormFactor1 : setFormFactor2;
            add2Form(prevItem => ({
                ...prevItem,
                objects: {
                    ...prevItem.objects,
                    [newObjectKey]: {
                        name: '',
                        price: 0,
                        image: null
                    }
                }
            }));
        }
    };

    // Removing an object and renaming the remaining objects
    const removeObject = (formfactor, objectKey) => {
        if (objectKey > 1) {
            const remove2Form = formfactor === formFactor1 ? setFormFactor1 : setFormFactor2;
            remove2Form(prevItem => {
                const { [objectKey]: _, ...remainingObjects } = prevItem.objects;

                // Create a new objects object with sequential keys
                const newObjects = {};
                let count = 1;
                Object.entries(remainingObjects).forEach(([key, value]) => {
                    if (objectKey !== count) {
                        newObjects[`object${count}`] = value;
                        count++;
                    }
                });

                return {
                    ...prevItem,
                    objects: newObjects
                };
            });
        }
    };


    // save changes made to form factor option
    const saveOption = (key, name, price, image) => {
        if (name, price) {
            setFormFactor1(prevItem => ({
                ...prevItem,
                objects: {
                    ...prevItem.objects,
                    [key]: {
                        name: name,
                        price: price,
                        image: image
                    }
                }
            }))
        }
    }


    const send = async (event) => {
        event.preventDefault();
        setLoading(true)
        setResponded(false);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };


            const { data } = await axios.post(
                `${serverName}/api/product/`,
                { name, description, category, units, price, images },
                config
            );

            setLoading(false);
            console.log(data)
            setResponded(true);
            alert('success')
        } catch (error) {
            setMessage(error.response.data.message)
            setResponded(true);
            setLoading(false);
        }
    }

    return (
        <div className={`${sizeSmall ? 'text-xs' : 'text-sm'} flex flex-col w-full h-full justify-center items-center`}>

            {/*Modal for form factor details */}
            <div className={`fixed h-full w-full flex justify-center items-center transition-all
            ${showFormFactor.active ? 'bg-[rgba(0,0,0,0.3)] z-10 translate-y-[0px]' : 'z-[-3] translate-y-[100px] bg-[rgba(0,0,0,0)]'}`}>
                {showFormFactor.active && (
                    <div className="flex flex-col justify-center rounded-md border-[2px] p-2 bg-white">
                        <div className='relative w-full flex items-center'>
                            <h1 className='absolute left-0 right-0 mx-auto text-lg font-[500] text-center'>
                                Option {showFormFactor.option}
                            </h1>
                            <div className="ml-auto flex z-20">
                                <X color='red' className='cursor-pointer' onClick={() => {
                                    setShowFormFactor(prevItem => ({
                                        ...prevItem,
                                        active: false
                                    }
                                    ))
                                }} />
                            </div>
                        </div>


                        <div className="flex flex-col w-full">
                            <div className="flex">
                                <div className="flex flex-1 flex-col">
                                    <div className='w-full flex flex-col mb-2'>
                                        <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                            Name of option <span className='text-red-500'>*</span>
                                        </label>
                                        <input className={`border-2 rounded-sm p-1`} placeholder='e.g Size-Large' required
                                            value={formName} type='text'
                                            onChange={(text) => {
                                                setFormName(text.target.value)
                                            }} />
                                    </div>
                                    {showFormFactor.form === 1 && (
                                        <div className='w-full flex flex-col mt-2'>
                                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                                Price <span className='text-red-500'>*</span>
                                            </label>
                                            <input className={`border-2 rounded-sm p-1`} placeholder='ZMW' required
                                                value={formPrice} type='number'
                                                onChange={(text) => {
                                                    setFormPrice(text.target.value)
                                                }} />
                                        </div>
                                    )}

                                    {showFormFactor.form === 2 || !formFactor2.active ? (
                                        <div className='w-full flex flex-col mt-2'>
                                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                                Units left {formFactor2.active && 'for each option'} <span className='text-red-500'>*</span>
                                            </label>
                                            {formFactor2.active && (
                                                <select
                                                    name="category"
                                                    id="category-select"
                                                    required
                                                    value={category}
                                                    onChange={(event) => { setCategory(event.target.value) }}
                                                    className="border-2 rounded-full p-1 bg-gradient-to-r from-blue-400 to-blue-300 hover:to-blue-400 
                                                active:from-blue-600 active:to-blue-500 focus:outline-none"
                                                >
                                                    <option value="">--Please choose a form factor--</option>
                                                    {Object.entries(formFactor2.objects).map(([key, object], index) => (
                                                        <option key={key} value={object.name}>{object.name}</option>
                                                    ))}
                                                </select>
                                            )}

                                            <input className={`border-2  rounded-sm p-1 mt-2`} placeholder='e.g Color'
                                                value={formUnits[0]}
                                                type='number' required
                                                onChange={(text) => {
                                                    setFormUnits(prevState => {
                                                        const newState = [...prevState];
                                                        newState[0] = text.target.value;
                                                        return newState;
                                                    });
                                                }}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="flex flex-initial w-72 h-60 m-2 border-black border-[1px] rounded-sm justify-center items-center">
                                    <span>Drop Image here</span>
                                    <Inbox className='ml-4' size={50} color='gray' />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className={`
                                bg-red-400 rounded-md shadow-md w-24 mx-3 py-1 px-1 text-white hover:bg-red-500 active:bg-red-600`}
                                    type="button" onClick={() => {
                                        setShowFormFactor(prevItem => ({
                                            ...prevItem,
                                            active: false
                                        }));
                                    }}
                                >
                                    Delete
                                </button>
                                <button className={`
                                bg-green-400 rounded-md shadow-md w-24 mx-3 py-1 px-1 text-white hover:bg-green-500 active:bg-green-600`}
                                    type="button" onClick={() => {
                                        setShowFormFactor(prevItem => ({
                                            ...prevItem,
                                            active: false
                                        }));
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* End of Modal */}

            <form className='flex flex-col justify-center rounded-md border-[2px] shadow-lg p-2' onSubmit={send}>
                <h1 className='text-lg font-[500] text-center'>PRODUCT ENTRY</h1>
                <div className='w-full flex flex-col mb-2 text-red-400'>
                    <span>{responded && (message)}</span>
                </div>
                <div className='flex justify-center p-3 pt-0'>
                    <div className="flex flex-col pr-3 border-r-[1px]">
                        <div className='h-[20px]'>
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Name of product <span className='text-red-500'>*</span>
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='Name of product' required
                                value={name} type='text'
                                onChange={(text) => {
                                    setName(text.target.value)
                                }} />
                        </div>
                        <div className='w-full flex flex-col mt-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Category <span className='text-red-500'>*</span>
                            </label>
                            <select
                                name="category"
                                id="category-select"
                                required
                                value={category}
                                onChange={(event) => { setCategory(event.target.value) }}
                                className="border-2 rounded-sm p-1"
                            >
                                <option value="">--Please choose a Category--</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Footwear">Footwear</option>
                                <option value="Home">Home Appliances</option>
                                <option value="Cosmetics">Cosmetics</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Food">Food</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Books">Books</option>
                                <option value="Toys">Toys</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='w-full flex flex-col mt-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Description <span className='text-red-500'>*</span>
                            </label>
                            <textarea className={`border-2  rounded-sm p-1 max-h-[100px] min-h-[35px]`} placeholder='Description of product'
                                value={description}
                                type='text' required
                                onChange={(text) => {
                                    setDescription(text.target.value)
                                }}
                            />
                        </div>
                        <div className='w-full flex flex-col mt-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Add Form Factor
                            </label>
                            <div className="flex">
                                <button className={`flex bg-gray-100 rounded-full mx-2 active:bg-gray-200`}
                                    onClick={() => {
                                        if (formFactor2.active) {
                                            setFormFactor2(prevItem => ({
                                                ...prevItem,
                                                active: false
                                            }));
                                        } else {
                                            setFormFactor1(prevItem => ({
                                                ...prevItem,
                                                active: false
                                            }));
                                        }
                                    }} type='button' >
                                    <Minus className='p-[5px]' />
                                </button>
                                <button className="flex bg-gray-100 rounded-full mx-2 active:bg-gray-200"
                                    onClick={() => {
                                        if (formFactor1.active) {
                                            setFormFactor2(prevItem => ({
                                                ...prevItem,
                                                active: true
                                            }));
                                        } else {
                                            setFormFactor1(prevItem => ({
                                                ...prevItem,
                                                active: true
                                            }));
                                        }
                                    }} type='button' >
                                    <Plus className='p-[5px]' />
                                </button>
                            </div>
                        </div>
                        {!formFactor1.active && (
                            <>
                                <div className='w-full flex flex-col mt-2'>
                                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                        Price (ZMW) <span className='text-red-500'>*</span>
                                    </label>
                                    <input className={`border-2  rounded-sm p-1`} placeholder='Enter price of item'
                                        value={price}
                                        type='number' required
                                        onChange={(text) => { setPrice(text.target.value) }}
                                    />
                                </div>
                                <div className='w-full flex flex-col mt-2'>
                                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                        Units <span className='text-red-500'>*</span>
                                    </label>
                                    <input className={`border-2  rounded-sm p-1`} placeholder='e.g Color'
                                        value={units}
                                        type='number' required
                                        onChange={(text) => { units(text.target.value) }}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    <div className={`flex flex-col ${formFactor1.active ? 'px-3 border-r-[1px]' : 'w-0 h-0'} overflow-hidden transition-all`}>
                        <h1 className='font-bold text-center'>Form Factor 1</h1>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Name of form factor <span className='text-red-500'>*</span>
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='e.g Size' required
                                value={name} type='text'
                                onChange={(text) => {
                                    setName(text.target.value)
                                }} />
                        </div>
                        <div className='w-full flex flex-col mt-2'>
                            <div className="flex">
                                <span>Add Options</span>
                                <button className={`flex bg-gray-100 rounded-full mx-2
                                ${Object.keys(formFactor1.objects).length === 1 ? 'cursor-not-allowed' : 'active:bg-gray-200'}`}
                                    onClick={() => { removeObject(formFactor1, Object.entries(formFactor1.objects).length); }} type='button' >
                                    <Minus className='p-[5px]' />
                                </button>
                                <button className={`flex bg-gray-100 rounded-full mx-2
                                ${Object.keys(formFactor1.objects).length === 10 ? 'cursor-not-allowed' : 'active:bg-gray-200'}`}
                                    onClick={() => { addObject(formFactor1); }} type='button' >
                                    <Plus className='p-[5px]' />
                                </button>
                            </div>
                            <div className={`flex w-full flex-col mt-2 ${Object.entries(formFactor1.objects).length > 4 ? 'h-72 overflow-y-scroll' : null}`}>
                                {Object.entries(formFactor1.objects).map(([key, object], index) => (
                                    <div key={key} className={`w-full flex flex-col ${index !== 0 && 'mt-2'}`}>
                                        <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                            Option-{index + 1} <span className='text-red-500'>*</span>
                                        </label>
                                        <button className={`flex flex-none rounded-md p-1 cursor-pointer bg-gradient-to-r from-red-500 to-red-400 active:from-red-600 
                                        active:to-red-500 ${object.name ? 'justify-between' : 'justify-center'} text-white hover:to-red-500`}
                                            onClick={() => {
                                                setShowFormFactor(prevItem => ({
                                                    ...prevItem,
                                                    active: true,
                                                    form: 1,
                                                    option: index + 1
                                                }));
                                            }} type='button'
                                        >
                                            {object.name && (
                                                <span className='text-md'>{object.name}</span>
                                            )}
                                            <span className='text-sm font-[500]'>View</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col ${formFactor2.active ? 'px-3 border-r-[1px]' : 'w-0 h-0'} overflow-hidden transition-all`}>
                        <h1 className='font-bold text-center'>Form Factor 2</h1>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Name of form factor <span className='text-red-500'>*</span>
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='e.g Color' required
                                value={name} type='text'
                                onChange={(text) => {
                                    setName(text.target.value)
                                }} />
                        </div>
                        <div className='w-full flex flex-col mt-2'>
                            <div className="flex">
                                <span>Add Options</span>
                                <button className={`flex bg-gray-100 rounded-full mx-2
                                ${Object.keys(formFactor2.objects).length === 1 ? 'cursor-not-allowed' : 'active:bg-gray-200'}`}
                                    onClick={() => { removeObject(formFactor2, Object.entries(formFactor2.objects).length); }} type='button' >
                                    <Minus className='p-[5px]' />
                                </button>
                                <button className={`flex bg-gray-100 rounded-full mx-2
                                ${Object.keys(formFactor2.objects).length === 10 ? 'cursor-not-allowed' : 'active:bg-gray-200'}`}
                                    onClick={() => { addObject(formFactor2); }} type='button' >
                                    <Plus className='p-[5px]' />
                                </button>
                            </div>

                            <div className={`flex w-full flex-col mt-2 ${Object.entries(formFactor2.objects).length > 4 ? 'h-72 overflow-y-scroll' : null}`}>
                                {Object.entries(formFactor2.objects).map(([key, object], index) => (
                                    <div key={key} className={`w-full flex flex-col ${index !== 0 && 'mt-2'}`}>
                                        <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                            Option-{index + 1} <span className='text-red-500'>*</span>
                                        </label>
                                        <button className={`flex flex-none rounded-md p-1 cursor-pointer bg-gradient-to-r from-red-500 to-red-400 active:from-red-600 
                                        active:to-red-500 ${object.name ? 'justify-between' : 'justify-center'} text-white hover:to-red-500`}
                                            onClick={() => {
                                                setShowFormFactor(prevItem => ({
                                                    ...prevItem,
                                                    active: true,
                                                    form: 2,
                                                    option: index + 1
                                                }));
                                            }} type='button'
                                        >
                                            {object.name && (
                                                <span className='text-md'>{object.name}</span>
                                            )}
                                            <span className='text-sm font-[500]'>View</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pl-3">
                        <div className='h-[20px]'>
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Overall Images of the product <span className='text-red-500'>*</span>
                            </label>
                            <button className={`flex flex-none rounded-md p-1 cursor-pointer bg-gradient-to-r from-red-500 to-red-400 active:from-red-600 
                            active:to-red-500 text-white hover:to-red-500`}
                                type='button'>
                                <div className='relative w-full flex items-center'>
                                    <span className='absolute left-0 right-0 mx-auto text-md font-[500] text-center'>
                                        Add Images
                                    </span>
                                    <div className="ml-auto flex z-20">
                                        <span>pics: 0</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <span className='font-bold text-center py-1'>Discount</span>
                            <h1 className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Retail (ZMK)
                            </h1>
                            <input className={`border-2 rounded-sm p-1`} placeholder='(leave blank for no discount)' required
                                value={retail.discount} type='number'
                                onChange={(text) => {
                                    setRetail(prevItem => ({
                                        ...prevItem,
                                        discount: text.target.value
                                    }));
                                }} />
                            <div className={`flex flex-col ${retail.discount.length === 0 || retail.discount === 0 ? 'h-[0px]' : 'h-full'} transition-all overflow-hidden`}>
                                <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1 mt-2`}>
                                    Valid until <span className='text-red-500'>*</span>
                                </label>
                                <input className={`border-2 rounded-sm p-1`} placeholder='(leave blank for no discount)' required
                                    value={wholesale.valid} type='date'
                                    onChange={(text) => {
                                        setRetail(prevItem => ({
                                            ...prevItem,
                                            valid: text.target.value
                                        }));
                                    }} />
                            </div>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1 mt-2`}>
                                Wholesale (ZMK)
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='(leave blank for no discount)' required
                                value={wholesale.discount} type='number'
                                onChange={(text) => {
                                    setWholesale(prevItem => ({
                                        ...prevItem,
                                        discount: text.target.value
                                    }));
                                }} />
                            <div className={`flex flex-col ${wholesale.discount.length === 0 || wholesale.discount === 0 ? 'h-[0px]' : 'h-full'} transition-all overflow-hidden`}>
                                <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1 mt-2`}>
                                    Minimum units <span className='text-red-500'>*</span>
                                </label>
                                <input className={`border-2 rounded-sm p-1`} placeholder='Minimum units for whosale discount' required
                                    value={name} type='number'
                                    onChange={(text) => {
                                        setWholesale(prevItem => ({
                                            ...prevItem,
                                            discount: text.target.value
                                        }));
                                    }} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex text-md mt-4 items-center justify-end'>
                    <button className={`
                        bg-blue-400 rounded-md shadow-md w-24 mx-3 py-1 px-1 text-white hover:bg-blue-500 active:bg-blue-600`}
                        type="submit" disabled={loading}
                    >
                        {loading ? 'Loading' : 'Preview'}
                    </button>
                </div>
            </form>
        </div>
    )
}
