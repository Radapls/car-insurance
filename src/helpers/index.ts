/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file index.ts
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

export function getYearDifference(year: number)
{
    return new Date().getFullYear() - year
}

export function calculateBrand(brand: number): number
{
    let increment = 0;

    switch (brand)
    {
        case 1:
            increment = 1.30;
            break;
        case 2:
            increment = 1.05;
            break;
        case 3:
            increment = 1.15;
            break;
        default:
            break;
    }

    return increment;
}

export function calculatePlan(plan: number)
{
    return plan === 1 ? 1.2 : 1.5;
}

export function formatMoney(quantity: number): string
{
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}