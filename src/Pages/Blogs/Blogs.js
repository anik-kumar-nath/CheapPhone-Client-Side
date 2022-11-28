import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/blogs`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='py-4'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold py-4'> Blogs </h1>
            <div className='p-4'>
                {
                    isLoading ?
                        <Loading></Loading>
                        :
                        blogs.map((blog, i) =>
                            <div key={blog._id} className='gap-4 rounded-xl' >
                                <div className='p-4 shadow-lg shadow-orange-200'>
                                    <h2 className='text-xl md:text-2xl lg:text-3xl text-justify font-bold py-2'>Q-{i + 1}. {blog.question}</h2>
                                    <p><strong>Answer: </strong>{blog.answer}</p>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default Blogs;