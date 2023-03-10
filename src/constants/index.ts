/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file index.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

export interface CarOrigin
{
    id: number;
    name: string;
}

export interface Plans
{
    id: number;
    name: string;
}


export const brands: Array<CarOrigin> = [
    { id: 1, name: 'European' },
    { id: 2, name: 'Asian' },
    { id: 3, name: 'American' }
]

export const plans: Array<Plans> = [
    { id: 1, name: 'Basic' },
    { id: 2, name: 'Full' },
]


const yearsMax = new Date().getFullYear();
export const years = Array.from(new Array(20), (value, index) => yearsMax - index);