import React from 'react';
import PropTypes from 'prop-types';
import { CircularGauge, Scale, Label, RangeContainer, Range, Title, Font, Export } from 'devextreme-react/circular-gauge';
import { BarGauge } from 'devextreme-react/bar-gauge';
import {useState, useEffect} from "react";

function Error(props) {
    const [val,setVal]=useState(0)
    const [values,setValues]=useState([47.27, 65.32, 84.59, 71.86])
    useEffect(() => {
        const interval = setInterval(() => {
            function _setNewVal(val){
                let nevVal=val+20
                if (nevVal>100)
                {nevVal=0}
                return nevVal
            }
            function _setNewValues(values){
                let nevVal=[Math.random()*100, Math.random()*100, Math.random()*100, 71.86]

                return nevVal
            }
            setVal(_setNewVal);
            //
            // setValues(values=>[Math.random()*100, Math.random()*100, Math.random()*100, 71.86])
            // console.log('values: ', values);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const format = {
        type: 'fixedPoint',
        precision: 1
    };
    return (
        <div style={{display:"flex", color:"white"}}>
            <CircularGauge
                id="gauge"
                value={val}
                // style={{width:'100px'}}
            >
                <Scale startValue={0} endValue={100} tickInterval={10}>
                    <Label customizeText="{this.customizeText}" />
                </Scale>
                <RangeContainer>
                    <Range startValue={0} endValue={20} color="#CE2029" />
                    <Range startValue={20} endValue={50} color="#FFD700" />
                    <Range startValue={50} endValue={100} color="#228B22" />
                </RangeContainer>
                <Export enabled={true} />
                <Title text="Battery Charge">
                    <Font size={28} />
                </Title>
            </CircularGauge>
            <BarGauge
                id="gauge"
                startValue={0}
                endValue={100}
                // defaultValues={[Math.random()*100, 65.32, 84.59, 71.86]}
                defaultValues={values}
            >
                <Label indent={30} format={format} customizeText="{this.customizeText}" />
                <Export enabled={true} />
                <Title text={"Series' Ratings"}>
                    <Font size={28} />
                </Title>
            </BarGauge>
        </div>
    );
}

export default Error;
