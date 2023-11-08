import {render,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import  "@testing-library/jest-dom";

test("should render RestaurantCard component with props",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);
    const cuisines=screen.getByText("Pizzas");
    expect(cuisines).toBeInTheDocument();
})
