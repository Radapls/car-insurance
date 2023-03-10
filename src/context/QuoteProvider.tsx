/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file QuoteProvider.tsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 10th March 2023
 */

import React, { useState } from "react";
import { calculateBrand, calculatePlan, formatMoney, getYearDifference } from "../helpers";
import { Quoter } from "../models/quoter.model";

const QuoterContext = React.createContext<any>('');

const QuoterProvider: React.FC<React.ReactPortal> = ({ children }) =>
{
    const [ error, setError ] = useState('');

    const [ data, setData ] = useState<Quoter>({
        brand: 0,
        year: '',
        plan: 0
    })

    const handleChange = (e: Event | PointerEvent | any) =>
    {
        setData({
            ...data,
            [ e.target.name ]: e.target.value
        })
    }

    const quoteInsurance = () =>
    {
        // Base del cliente
        let result: number = 2000;

        // Obtener diferencia por año
        const yearDifference = getYearDifference(+data.year)

        // Hay que restar el 3% por cada año
        result -= ((yearDifference * 3) * result) / 100

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        result *= calculateBrand(+data.brand)

        // Basico 20%
        // Completo 50%

        result *= calculatePlan(+data.plan)

        const money = formatMoney(result).toString()
    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                handleChange,
                error,
                setError,
                quoteInsurance
            }}>

            {children}
        </QuoterContext.Provider>)
}




export
{
    QuoterProvider
};

export default QuoterContext
