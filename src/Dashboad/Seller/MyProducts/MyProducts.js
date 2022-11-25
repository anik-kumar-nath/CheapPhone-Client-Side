import React from 'react';

const MyProducts = () => {
    const check = (e) => {
        e.preventDefault();
        console.log(e.target.condition.value)
    }
    return (
        <form onSubmit={check}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Category</span>
                </label>
                <select className="select select-accent w-full max-w-xs" name='condition'>
                    <option value={1}>Button Phone</option>
                    <option value={2}>Android Phone</option>
                    <option value={3}>Apple Phone</option>
                </select>
            </div>
            <input type="submit" value="submit" />
        </form>
    );
};

export default MyProducts;