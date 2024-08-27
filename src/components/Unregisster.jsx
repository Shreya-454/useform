
import { useForm } from 'react-hook-form'

const Unregisster = () => {
    const { register, handleSubmit, unregister ,  setValue,    watch,
        formState: { errors }, } = useForm({
            defaultValues: {
              amount: ""
            }
          });
          const watchShowAge = watch("showAge", false); // you can supply default value as second argument
          const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
          const watchFields = watch(["showAge", "age"]); // you can also target specific fields by their names
        
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='container justify-center flex'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2'>
                <label>Last Name</label>
                <input {...register("firstName")} className='w-[500px]  p-2  border border-solid border-black rounded-sm mb-4' />
            </div>
            <div className='flex flex-col gap-2'>
                <label>First Name</label>
                <input {...register("lastName")} className='w-[500px]  p-2  border border-solid border-black rounded-sm mb-4' />
            </div>
            <div>
                      <input type="number" {...register("amount", { min: 1, max: 99 })} className='w-[500px]  p-2  border border-solid border-black rounded-sm'/>
            </div>
            <label>Show Age</label>
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <>
            <div>
                <label>Age</label>
                <div><input type="number" {...register("age", { min: 20 })} className='w-[500px]  p-2  border border-solid border-black rounded-sm' /></div>
                {errors.age && <p>{"The number must be greater then 19"}</p>}
            </div>
          </>
        )}
        {/* based on yes selection to display Age */}
      <div className=' flex gap-4'>
          <button
            type="button" className='w-1/2 py-3 bg-blue-600 text-white capitalize mt-3'
            onClick={() => {
              setValue("amount", 100, { shouldDirty: true });
            }}
          >
            change amount
          </button>
    
            <button
              type="button" className='w-1/2 py-3 bg-gray-400 text-black capitalize mt-3'
              onClick={() => {
                unregister("lastName");
              }}
            >
              unregister lastName
            </button>
            </div>
            <div><input type="submit" className='mt-3 bg-red-600 text-white w-full py-3 border-2 border-solid border-black' /></div>
              </form>
        </div>
    </div>
  )
}


export default Unregisster

