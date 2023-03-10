/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Form.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

import { Fragment } from 'react';
import { brands, plans, years } from "../constants";

export default function Form()
{
    return (
        <>
            <form>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Brand
                    </label>

                    <select name="brand" className="w-full p-3 bg-white border border-gray-200">

                        <option value="">--- Select a brand ---</option>

                        {brands.map(brand => (
                            <option
                                key={brand.id}
                                value={brand.id}>
                                {brand.name}
                            </option>
                        ))}

                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Brand
                    </label>

                    <select name="brand" className="w-full p-3 bg-white border border-gray-200">

                        <option value="">--- Select the year ---</option>

                        {years.map(year => (
                            <option
                                key={year}
                                value={year}>
                                {year}
                            </option>
                        ))}

                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Pick a plan
                    </label>

                    <div className="flex gap-3 items-center">
                        {plans.map(plan => (
                            <Fragment
                                key={plan.id}>
                                <label >
                                    {plan.name}
                                </label>

                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id} />
                            </Fragment>
                        ))}
                    </div>

                </div>

                <input type="submit" value="quote" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" />

            </form>

        </>
    )
}
