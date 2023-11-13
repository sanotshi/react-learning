import {fireEvent, render,screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import {act} from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utilities/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
 
global.fetch=jest.fn(()=>
Promise.resolve ({
    json: ()=>
    Promise.resolve(MOCK_DATA)
})
);

it("should load Restaurant Menu component",async()=>{
    await act(async()=>
    render(
        <Provider store={appStore}>
            
            <RestaurantMenu />
        </Provider>
        ));
        const menuDisplayList=screen.getAllByTestId("resList");
        expect(menuDisplayList.length).toBe(20)
        const menuList=screen.getByText("Burgers");
       });
it("should be when you add items the cart items will update",async()=>{
await act(async()=>
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            </Provider>
            </BrowserRouter>
    ));
const addBtns=screen.getAllByRole("button",{name:"Add+"})
fireEvent.click(addBtns[0])

const listOfItems=screen.getByTestId("itemList")
expect(listOfItems).toBeInTheDocument("1 items");
fireEvent.click(addBtns[1])
const listOfItem=screen.getByTestId("itemList");
expect(listOfItem).toBeInTheDocument("2 items");
})