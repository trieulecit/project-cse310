// import React from "react";
// import { useForm } from "react-hook-form";
// import {createNews} from "../services/NewsService";

// export default function CreateNews() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm();
//     const onSubmit = (data) => createNews(data).then(()={
        
//     });

//     // console.log(watch("title")); // watch input value by passing the name of it
//     // console.log(watch("imageURL")); // watch input value by passing the name of it
//     // console.log(watch("shortDescription")); // watch input value by passing the name of it

//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {/* register your input into the hook by invoking the "register" function */}
//             <input {...register("title", { required: true })} />
//             {errors.title && <span>This field is required</span>}
//             {/* include validation with required or other standard HTML validation rules */}
//             <input {...register("imageURL", { required: true })} />
//             {/* errors will return when field validation fails  */}
//             {errors.imageURL && <span>This field is required</span>}
//             <input {...register("shortDescription", { required: true })} />
//             {/* errors will return when field validation fails  */}
//             {errors.imageURL && <span>This field is required</span>}

//             <input type="submit" />
//         </form>
//     );
// }
