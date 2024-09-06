import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1600px]  mx-auto bg-white sm:py-20 mt-52' id='Contact'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight text-gray-800'>Contact Me</h2>
        </div>

        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-zinc-200 rounded-xl shadow-lg shadow-[#040c16]'>
                <div className='p-10'>
                    <form action="https://getform.io/f/ajjeyoza" method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div className='mt-2.5 relative'>
                                <input type="text" name='name' id='' placeholder='Enter your full name' className='bg-zinc-200 w-full px-4 py-4 text-gray-800 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                            </div>
                            <div className='mt-2.5 relative'>
                                <input type="text" name='email' id='' placeholder='Enter your email' className='bg-zinc-200 w-full px-4 py-4 text-gray-800 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' />
                            </div> 
                            <div className='sm:col-span-2'>
                                <div className='mt-2.5'>
                                    <textarea name="message" id="" placeholder='Enter your message' className='bg-zinc-200 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600' rows={4}></textarea>
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
