import { useForm } from "react-hook-form";
import Title from "../Home/Title";
import axios from "axios";
import { useState } from "react";
import axiosSecoure from "../../Hooks/axiosSecoure";

const AddItems = () => {

    const { register, handleSubmit,reset } = useForm()
    const axiosURL=axiosSecoure();
    const [recipe,setRecipe]=useState('')
    const onSubmit = async (data) => {
        // upload image to image bb
        const img = { image: data.image[0] }
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, img, {
            headers: { "content-type": "multipart/form-data" }
        })

        if (res.data.success) {
            const ItemData = {
                image: res.data.data.display_url,
                category:data.category,
                name:data.name,
                price:data.price,
                recipe:recipe,
            }
            const response=await axiosURL.post('/menu',ItemData)
            if(response.data.insertedId){
                alert('added done')
                reset()
            }

        }

    }

    return (


        <div>

            <Title subTitle={'Whats new?'} mainTitle={'Add an item'} />

            <div>
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content w-full">
                        <div className="shadow-2xl bg-base-100 w-1/2">

                            <form className="card-body grid grid-cols-6" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control col-span-6">
                                    <label className="label">
                                        <span className="label-text">Recipe name*</span>
                                    </label>
                                    <input type="text" {...register("name")} placeholder="Recipe name" className="input input-bordered" required />
                                </div>

                                <div className="form-control col-span-3">
                                    <label className="label">
                                        <span className="label-text">Category*</span>
                                    </label>
                                    <select defaultValue={'category'} {...register("category")} className="select select-bordered w-full max-w-xs text-black">
                                        <option disabled value={'category'}>category</option>
                                        <option value={'salad'}>salad</option>
                                        <option value={'pizza'}>pizza</option>
                                        <option value={'soup'}>soup</option>
                                        <option value={'dessert'}>dessert</option>
                                        <option value={'drink'}>drink</option>
                                    </select>
                                </div>

                                <div className="form-control col-span-3">
                                    <label className="label">
                                        <span className="label-text">Price*</span>
                                    </label>
                                    <input type="text"  {...register("price")} placeholder="Price" className="input input-bordered" required />
                                </div>

                                <div className="form-control col-span-6">
                                    <label className="label">
                                        <span className="label-text">Recipe Details*</span>
                                    </label>
                                    <textarea {...register("recipe")} onChange={(e)=>{
                                         setRecipe(e.target.value)
                                    }}  rows={5} className="border"></textarea>
                                </div>

                                <div className="col-span-6">
                                    <input {...register('image')} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control mt-6 col-span-6">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    );
};

export default AddItems;