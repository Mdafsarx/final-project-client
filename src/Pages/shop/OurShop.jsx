/* eslint-disable no-unused-vars */
import Cover from "../menu/Cover";
import img from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {

    const [menu] = useMenu();
    const {category}=useParams();
    console.log(category)
    const categoryS=['salad','pizza','soup','dessert','drinks']
    const indexNow=categoryS.indexOf(category)
    const [tabIndex,setTabIndex]=useState(indexNow);

    const drinks = menu.filter(data => data.category === 'drinks')
    const dessert = menu.filter(data => data.category === 'dessert')
    const pizza = menu.filter(data => data.category === 'pizza')
    const salad = menu.filter(data => data.category === 'salad')
    const soup = menu.filter(data => data.category === 'soup')


    return (
        <div>

            <Cover img={img} title={'OUR SHOP'} des={'Would you like to try a dish?'} />

            <div className="max-w-7xl mx-auto py-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={salad} />
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizza} />
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soup} />
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={dessert} />
                    </TabPanel>
                    
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default OurShop;