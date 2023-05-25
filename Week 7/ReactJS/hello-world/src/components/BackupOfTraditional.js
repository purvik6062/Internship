import React, { Fragment } from 'react'
import '../../../styles/calculator/bodycalc/TraditionalBodyCalc.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StoreCalculation from '../storecalculation/StoreCalculation'

function TraditionalBodyCalc({ onValueChange, props }) {
    const [teData1, setTeData] = useState({
        teConsumption: null,
        teCountry: null
    })
    let numbers1;

    var data = {
        consumption: teData1.teConsumption,
        location: teData1.teCountry,
    };

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://app.trycarbonapi.com/api/traditionalHydro?consumption=${teData1.teConsumption}&location=${teData1.teCountry}`,
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWQ3OWMwYjVmODdmODBkMDA1YTFjZWI4MWI1OGFlZThjN2ZlOTQ5NDIwYmFkODMxNGIxMDZmODRkNzdiZjBiMjY1YzZhZjI0NmRjMDFmYmQiLCJpYXQiOjE2ODAwNzQxMTgsIm5iZiI6MTY4MDA3NDExOCwiZXhwIjoxNzExNjk2NTE4LCJzdWIiOiI0MDY0Iiwic2NvcGVzIjpbXX0.cN3WCdheF7uezNVs8mQ4IFE0sQfEUBRNA6fkR8a2okkkqBAmr2XMZIBtFtdwi78-hRdzZcAjj_1uMZyb77LkSA',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
    };

    const teSubmitData = async () => {
        // console.log(`${teData1.teConsumption} ${teData1.teCountry}`)
        // console.log(data)

        await axios.request(config)
            .then((response) => {
                const teResult = JSON.stringify(response.data.carbon);
                // alert(`Carbon : ${teResult}`);
                // console.log(`Carbon : ${teResult}`);
                numbers1 = teResult.match(/\d+(\.\d+)?/g);
                // alert(numbers1[0])
                console.log(numbers1[0]);
                alert(numbers1[0])
                const value = numbers1[0];
                onValueChange(value);

            })
            .catch((error) => {
                console.log(error);
            });
    };




    // useEffect(() => {
    //     console.log(teData1);
    // }, [teData1]);


    return (
        <>
            {/* <form> */}
            <div className='house-form'>
                <div className='form-content1'>
                    <label className='house-form__label'>Traditional Energy</label>
                    <div className='formMain'>
                        <div className='form-group bottom35'>
                            <label className='house-form__label1'>Calculate CO2e from the use of traditional hydro provider.</label>
                        </div>
                        <div className='traditionalCountry-ip'>
                            <div className='form-group'>
                                <label className='house-form__label2'>Consumption:</label>
                                <input className='form-control' type='text' placeholder='in kwh' required id='tempN' name='tempN' onChange={(e) => {
                                    setTeData({ ...teData1, teConsumption: e.target.value })
                                }} />
                            </div>
                        </div>


                        <div className='traditionalCountry-dd'>
                            <div className='form-group bottom35'>
                                <label className='house-form__label2'>The country or continent providing the hydro:</label>

                                <div className="dropdown">

                                    <select className='form-control' id='country' name='country' onChange={(e) => {
                                        setTeData({ ...teData1, teCountry: e.target.value })
                                    }}>
                                        <option value='Default'>Select Country</option>
                                        <option value='USA'>USA</option>
                                        <option value='Canada'>Canada</option>
                                        <option value='UK'>UK</option>
                                        <option value='Europe'>Europe</option>
                                        <option value='Africa'>Africa</option>
                                        <option value='LatinAmerica'>Latin America</option>
                                        <option value='MiddleEast'>Middle East</option>
                                        <option value='OtherCountry'>Other Country</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='traditionalbtn col-sm-12 mt-4'>
                            <button type='submit' className='house-form__button primary p-2' id='submit_btn' style={{ width: 'fit-content' }} onClick={() => teSubmitData()}>
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </form> */}
        </>
    )
}
export default TraditionalBodyCalc