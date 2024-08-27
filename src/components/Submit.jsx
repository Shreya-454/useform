import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Submit = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = async (data) => {
        await sleep(2000);
        if (data.username === "bill") {
          alert(JSON.stringify(data));
        } else {
          alert("There is an error");
        }
      };
    
      console.log(errors);
  return (
    <div className=' container flex justify-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Async Submit Validation</h1>
          <div>
              <label htmlFor="username">User Name</label>
              <input {...register("username")} placeholder="Bill" />
          </div>
          <div>
              <label htmlFor="lastName">Last Name</label>
              <input {...register("lastName")} placeholder="Luo" />
          </div>
          <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                placeholder="bluebill1049@hotmail.com"
                type="text"
              />
          </div>
          <div style={{ color: "red" }}>
            {Object.keys(errors).length > 0 &&
              "There are errors, check your console."}
          </div>
          <input type="submit" />
        </form>
    </div>
  )
}

export default Submit

